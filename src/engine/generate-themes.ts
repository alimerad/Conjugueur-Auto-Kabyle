import {
  ASPECTS,
  type MorphologicalType,
  type Radicals,
  type ThemeMap,
} from "../domain/morphology.js";
import {
  extractRadicals,
  renderPattern,
} from "./pattern-engine.js";

export interface ThemeGenerationResult {
  readonly lemma: string;
  readonly typeId: string;
  readonly radicals: Radicals;
  readonly themes: ThemeMap;
}

export const generateThemes = (
  lemma: string,
  morphologicalType: MorphologicalType,
): ThemeGenerationResult => {
  const normalizedLemma = lemma.normalize("NFC");
  const radicals = extractRadicals(
    normalizedLemma,
    morphologicalType.lemmaPattern,
  );

  const themes = Object.fromEntries(
    ASPECTS.map(
      (
        aspect,
      ): readonly [typeof aspect, string] => [
        aspect,
        renderPattern(
          morphologicalType.themePatterns[aspect],
          radicals,
        ),
      ],
    ),
  ) as ThemeMap;

  return {
    lemma: normalizedLemma,
    typeId: morphologicalType.id,
    radicals,
    themes,
  };
};
