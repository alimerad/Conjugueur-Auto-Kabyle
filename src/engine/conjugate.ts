import {
  ASPECTS,
  type MorphologicalType,
} from "../domain/morphology.js";
import type {
  AspectConjugations,
  ConjugationResult,
} from "../domain/conjugation.js";
import {
  generateThemes,
} from "./generate-themes.js";
import {
  inflectThemeForAllPersons,
} from "./inflect-theme.js";

export const conjugate = (
  lemma: string,
  morphologicalType: MorphologicalType,
): ConjugationResult => {
  const generated = generateThemes(
    lemma,
    morphologicalType,
  );

  const forms = Object.fromEntries(
    ASPECTS.map(
      (
        aspect,
      ): readonly [
        typeof aspect,
        ReturnType<typeof inflectThemeForAllPersons>,
      ] => [
        aspect,
        inflectThemeForAllPersons(
          generated.themes[aspect],
        ),
      ],
    ),
  ) as AspectConjugations;

  return {
    ...generated,
    forms,
  };
};
