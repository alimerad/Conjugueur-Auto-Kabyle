import type {
  PersonalAffixDescription,
} from "../domain/conjugation.js";

export const STANDARD_PERSONAL_AFFIXES = {
  affixes: {
    firstSingular: {
      prefix: "",
      suffix: "eɣ",
      suffixKind: "vocalic",
      prefixStrategy: "fixed",
    },
    secondSingular: {
      prefix: "t",
      suffix: "eḍ",
      suffixKind: "vocalic",
      prefixStrategy: "fixed",
    },
    thirdSingularMasculine: {
      prefix: "",
      suffix: "",
      suffixKind: "zero",
      prefixStrategy: "thirdSingularMasculine",
    },
    thirdSingularFeminine: {
      prefix: "t",
      suffix: "",
      suffixKind: "zero",
      prefixStrategy: "fixed",
    },
    firstPlural: {
      prefix: "n",
      suffix: "",
      suffixKind: "zero",
      prefixStrategy: "fixed",
    },
    secondPluralMasculine: {
      prefix: "t",
      suffix: "em",
      suffixKind: "vocalic",
      prefixStrategy: "fixed",
    },
    secondPluralFeminine: {
      prefix: "t",
      suffix: "emt",
      suffixKind: "vocalic",
      prefixStrategy: "fixed",
    },
    thirdPluralMasculine: {
      prefix: "",
      suffix: "en",
      suffixKind: "vocalic",
      prefixStrategy: "fixed",
    },
    thirdPluralFeminine: {
      prefix: "",
      suffix: "ent",
      suffixKind: "vocalic",
      prefixStrategy: "fixed",
    },
  },
  sources: [
    {
      documentId:
        "bouamara-modelisation-formes-base-2026",
      sourceFile:
        "docs/sources/volume-1-formes-de-base.md",
      pdfPage: 3,
      printedPage: 2,
      note:
        "Règle 2 : invariance des affixes personnels.",
    },
    {
      documentId:
        "bouamara-modelisation-formes-base-2026",
      sourceFile:
        "docs/sources/volume-1-formes-de-base.md",
      pdfPage: 4,
      printedPage: 3,
      note:
        "Règle 3 : y- devant voyelle, i- devant " +
        "consonne pour la troisième personne du " +
        "singulier masculin.",
    },
    {
      documentId:
        "bouamara-modelisation-formes-base-2026",
      sourceFile:
        "docs/sources/volume-1-formes-de-base.md",
      pdfPage: 9,
      printedPage: 8,
      note:
        "Règle 14 : maintien ou déplacement du " +
        "schwa selon le suffixe.",
    },
    {
      documentId:
        "bouamara-modelisation-formes-base-2026",
      sourceFile:
        "docs/sources/volume-1-formes-de-base.md",
      pdfPage: 10,
      printedPage: 9,
      note:
        "Règles 14.2 et 15.1 : suffixes vocaliques " +
        "et voyelle d’appui.",
    },
    {
      documentId:
        "bouamara-modelisation-formes-base-2026",
      sourceFile:
        "docs/sources/volume-1-formes-de-base.md",
      pdfPage: 18,
      printedPage: 17,
      note:
        "Paradigme complet du type G3.1-1, verbe " +
        "bder.",
    },
  ],
  scope:
    "Affixes ordinaires appliqués aux thèmes du " +
    "premier jalon G3.1-1. Les verbes d’état et " +
    "les collisions tett- restent hors périmètre.",
} as const satisfies PersonalAffixDescription;
