import {
  RADICAL_KEYS,
  type RadicalKey,
  type Radicals,
} from "../domain/morphology.js";

const RADICAL_TOKEN = /R[1-4]/gu;
const KABYLE_LETTER = "\\p{L}";

const escapeRegex = (value: string): string =>
  value.replace(/[.*+?^${}()|[\]\\]/gu, "\\$&");

const compileLemmaPattern = (pattern: string): RegExp => {
  let regexSource = "^";
  let cursor = 0;
  const seenRadicals = new Set<RadicalKey>();

  for (const match of pattern.matchAll(RADICAL_TOKEN)) {
    const matchIndex = match.index;
    const radical = match[0] as RadicalKey;

    regexSource += escapeRegex(
      pattern.slice(cursor, matchIndex),
    );

    if (seenRadicals.has(radical)) {
      regexSource += `\\k<${radical}>`;
    } else {
      regexSource +=
        `(?<${radical}>${KABYLE_LETTER})`;
      seenRadicals.add(radical);
    }

    cursor = matchIndex + radical.length;
  }

  regexSource += escapeRegex(pattern.slice(cursor));
  regexSource += "$";

  return new RegExp(regexSource, "u");
};

export const extractRadicals = (
  lemma: string,
  lemmaPattern: string,
): Radicals => {
  const normalizedLemma = lemma.normalize("NFC");
  const match =
    compileLemmaPattern(lemmaPattern).exec(normalizedLemma);

  if (match?.groups === undefined) {
    throw new Error(
      `Le lemme "${lemma}" ne correspond pas au patron ` +
        `"${lemmaPattern}".`,
    );
  }

  const radicals: Partial<
    Record<RadicalKey, string>
  > = {};

  for (const radicalKey of RADICAL_KEYS) {
    const value = match.groups[radicalKey];

    if (value !== undefined) {
      radicals[radicalKey] = value;
    }
  }

  return radicals;
};

export const renderPattern = (
  pattern: string,
  radicals: Radicals,
): string =>
  pattern.replace(
    RADICAL_TOKEN,
    (token): string => {
      const radical =
        radicals[token as RadicalKey];

      if (radical === undefined) {
        throw new Error(
          `Le radical ${token} est nécessaire pour ` +
            `produire le patron "${pattern}".`,
        );
      }

      return radical;
    },
  );
