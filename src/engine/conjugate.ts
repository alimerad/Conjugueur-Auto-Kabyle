import {
  G3_1_1,
} from "../data/types/base/g3-1-1.js";
import {
  ASPECTS,
  type MorphologicalType,
} from "../domain/morphology.js";
import {
  CONJUGATABLE_TYPE_IDS,
  type AspectConjugations,
  type ConjugatableType,
  type ConjugationResult,
  type ConjugatableTypeId,
} from "../domain/conjugation.js";
import {
  generateThemes,
} from "./generate-themes.js";
import {
  inflectThemeForAllPersons,
} from "./inflect-theme.js";

const CONJUGATABLE_TYPES = {
  "G3.1-1": G3_1_1,
} as const satisfies Readonly<
  Record<ConjugatableTypeId, ConjugatableType>
>;

const isConjugatableTypeId = (
  typeId: string,
): typeId is ConjugatableTypeId =>
  CONJUGATABLE_TYPE_IDS.some(
    (supportedTypeId): boolean =>
      supportedTypeId === typeId,
  );

const resolveConjugatableType = (
  morphologicalType: MorphologicalType,
): ConjugatableType => {
  if (
    !isConjugatableTypeId(
      morphologicalType.id,
    )
  ) {
    throw new Error(
      "Unsupported conjugatable type: " +
        morphologicalType.id,
    );
  }

  return CONJUGATABLE_TYPES[
    morphologicalType.id
  ];
};

export const conjugate = (
  lemma: string,
  morphologicalType: ConjugatableType,
): ConjugationResult => {
  const canonicalType =
    resolveConjugatableType(
      morphologicalType,
    );

  const generated = generateThemes(
    lemma,
    canonicalType,
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
