import type {
  Aspect,
  MorphologicalType,
  Radicals,
  SourceReference,
  ThemeMap,
} from "./morphology.js";

export const PERSONS = [
  "firstSingular",
  "secondSingular",
  "thirdSingularMasculine",
  "thirdSingularFeminine",
  "firstPlural",
  "secondPluralMasculine",
  "secondPluralFeminine",
  "thirdPluralMasculine",
  "thirdPluralFeminine",
] as const;

export type Person = (typeof PERSONS)[number];
export type SuffixKind = "zero" | "vocalic";
export type PrefixStrategy =
  | "fixed"
  | "thirdSingularMasculine";

export interface PersonalAffix {
  readonly prefix: string;
  readonly suffix: string;
  readonly suffixKind: SuffixKind;
  readonly prefixStrategy: PrefixStrategy;
}

export type PersonalAffixMap = Readonly<
  Record<Person, PersonalAffix>
>;

export type PersonForms = Readonly<
  Record<Person, string>
>;

export type AspectConjugations = Readonly<
  Record<Aspect, PersonForms>
>;

export interface ConjugationResult {
  readonly lemma: string;
  readonly typeId: string;
  readonly radicals: Radicals;
  readonly themes: ThemeMap;
  readonly forms: AspectConjugations;
}

export interface PersonalAffixDescription {
  readonly affixes: PersonalAffixMap;
  readonly sources: readonly SourceReference[];
  readonly scope: string;
}

export const CONJUGATABLE_TYPE_IDS = [
  "G3.1-1",
] as const;

export type ConjugatableTypeId =
  (typeof CONJUGATABLE_TYPE_IDS)[number];

export type ConjugatableType =
  MorphologicalType & {
    readonly id: ConjugatableTypeId;
  };
