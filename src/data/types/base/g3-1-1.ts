import type {
  MorphologicalType,
} from "../../../domain/morphology.js";

export const G3_1_1 = {
  id: "G3.1-1",
  group: "G3.1",
  lemmaPattern: "R1R2eR3",
  themePatterns: {
    preteriteAffirmative: "R1R2eR3",
    preteriteNegative: "R1R2iR3",
    aoristSimple: "R1R2eR3",
    aoristIntensive: "R1eR2R2eR3",
  },
  sources: [
    {
      documentId:
        "bouamara-modelisation-formes-base-2026",
      sourceFile:
        "docs/sources/volume-1-formes-de-base.md",
      pdfPage: 13,
      printedPage: 12,
      note:
        "Le tableau récapitulatif donne le schème " +
        "C1C2eC3 et les thèmes bder, bdir, bder, " +
        "bedder.",
    },
    {
      documentId:
        "bouamara-modelisation-formes-base-2026",
      sourceFile:
        "docs/sources/volume-1-formes-de-base.md",
      pdfPage: 18,
      printedPage: 17,
      note:
        "Le paradigme complet confirme les formes. " +
        "Son titre affiche un schème divergent ; " +
        "l’encodage suit le tableau récapitulatif " +
        "et les formes explicitement listées.",
    },
  ],
  notes: [
    "Le prétérit affirmatif et l’aoriste simple " +
      "partagent le même thème.",
    "Le prétérit négatif et l’aoriste intensif " +
      "possèdent chacun un thème distinct.",
  ],
} as const satisfies MorphologicalType;
