export const ASPECTS = [
  "preteriteAffirmative",
  "preteriteNegative",
  "aoristSimple",
  "aoristIntensive",
] as const;

export const RADICAL_KEYS = [
  "R1",
  "R2",
  "R3",
  "R4",
] as const;

export type Aspect = (typeof ASPECTS)[number];
export type RadicalKey = (typeof RADICAL_KEYS)[number];
export type ThemeMap = Readonly<Record<Aspect, string>>;
export type Radicals = Partial<
  Readonly<Record<RadicalKey, string>>
>;

export interface SourceReference {
  readonly documentId: string;
  readonly sourceFile: string;
  readonly pdfPage: number;
  readonly printedPage?: number;
  readonly note?: string;
}

export interface MorphologicalType {
  readonly id: string;
  readonly group: string;
  readonly lemmaPattern: string;
  readonly themePatterns: ThemeMap;
  readonly sources: readonly SourceReference[];
  readonly notes?: readonly string[];
}
