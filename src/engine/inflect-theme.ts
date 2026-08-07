import {
  PERSONS,
  type Person,
  type PersonForms,
  type PersonalAffix,
} from "../domain/conjugation.js";
import {
  STANDARD_PERSONAL_AFFIXES,
} from "../data/personal-affixes.js";

const LETTER = /^\p{L}$/u;
const VOWEL = /^[aeiou]$/iu;
const PRE_FINAL_SCHWA = /e(?=\p{L}$)/u;

const isConsonant = (
  value: string | undefined,
): boolean =>
  value !== undefined &&
  LETTER.test(value) &&
  !VOWEL.test(value);

const startsWithConsonants = (
  value: string,
  count: number,
): boolean => {
  const characters = Array.from(value);

  return characters
    .slice(0, count)
    .every(isConsonant) &&
    characters.length >= count;
};

const insertAfterFirstCharacter = (
  value: string,
  insertion: string,
): string => {
  const [firstCharacter, ...remainingCharacters] =
    Array.from(value);

  if (firstCharacter === undefined) {
    return insertion;
  }

  return [
    firstCharacter,
    insertion,
    ...remainingCharacters,
  ].join("");
};

const resolvePrefix = (
  theme: string,
  affix: PersonalAffix,
): string => {
  if (
    affix.prefixStrategy ===
    "thirdSingularMasculine"
  ) {
    const [initial] = Array.from(theme);

    return initial !== undefined &&
      VOWEL.test(initial)
      ? "y"
      : "i";
  }

  return affix.prefix;
};

const prepareZeroSuffixForm = (
  theme: string,
  prefix: string,
  affix: PersonalAffix,
): string => {
  if (
    affix.prefixStrategy === "fixed" &&
    prefix !== "" &&
    startsWithConsonants(theme, 2)
  ) {
    return `${prefix}e${theme}`;
  }

  return `${prefix}${theme}`;
};

const startsWithInitialSchwa = (
  value: string,
): boolean => {
  const [first, second, third] = Array.from(value);

  return (
    first === "e" &&
    isConsonant(second) &&
    isConsonant(third)
  );
};

const startsWithGeminate = (
  value: string,
): boolean => {
  const [first, second] = Array.from(value);

  return (
    isConsonant(first) &&
    first === second
  );
};

const prepareVocalicSuffixForm = (
  theme: string,
  prefix: string,
): string => {
  if (
    prefix === "" &&
    startsWithInitialSchwa(theme)
  ) {
    return theme.slice(1);
  }

  let preparedTheme = theme.replace(
    PRE_FINAL_SCHWA,
    "",
  );

  if (startsWithGeminate(preparedTheme)) {
    return prefix === ""
      ? preparedTheme
      : `${prefix}e${preparedTheme}`;
  }

  if (
    startsWithConsonants(preparedTheme, 3)
  ) {
    preparedTheme = insertAfterFirstCharacter(
      preparedTheme,
      "e",
    );

    return `${prefix}${preparedTheme}`;
  }

  if (
    prefix !== "" &&
    startsWithConsonants(preparedTheme, 2)
  ) {
    return `${prefix}e${preparedTheme}`;
  }

  return `${prefix}${preparedTheme}`;
};

export const inflectTheme = (
  theme: string,
  person: Person,
): string => {
  const normalizedTheme = theme.normalize("NFC");

  if (normalizedTheme.length === 0) {
    throw new Error(
      "Le thème verbal ne peut pas être vide.",
    );
  }

  const affix =
    STANDARD_PERSONAL_AFFIXES.affixes[person];
  const prefix = resolvePrefix(
    normalizedTheme,
    affix,
  );

  const prefixedTheme =
    affix.suffixKind === "vocalic"
      ? prepareVocalicSuffixForm(
          normalizedTheme,
          prefix,
        )
      : prepareZeroSuffixForm(
          normalizedTheme,
          prefix,
          affix,
        );

  const realizedSuffix =
    affix.suffixKind === "vocalic" &&
    VOWEL.test(
      Array.from(prefixedTheme).at(-1) ?? "",
    ) &&
    affix.suffix.startsWith("e")
      ? affix.suffix.slice(1)
      : affix.suffix;

  return `${prefixedTheme}${realizedSuffix}`;
};

export const inflectThemeForAllPersons = (
  theme: string,
): PersonForms =>
  Object.fromEntries(
    PERSONS.map(
      (
        person,
      ): readonly [typeof person, string] => [
        person,
        inflectTheme(theme, person),
      ],
    ),
  ) as PersonForms;
