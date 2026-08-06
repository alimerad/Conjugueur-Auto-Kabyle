import {
  describe,
  expect,
  it,
} from "vitest";

import {
  G3_1_1,
} from "../src/data/types/base/g3-1-1.js";
import {
  STANDARD_PERSONAL_AFFIXES,
} from "../src/data/personal-affixes.js";
import {
  conjugate,
} from "../src/engine/conjugate.js";
import {
  inflectTheme,
} from "../src/engine/inflect-theme.js";

const PRETERITE_FORMS = {
  firstSingular: "bedreɣ",
  secondSingular: "tbedreḍ",
  thirdSingularMasculine: "ibder",
  thirdSingularFeminine: "tebder",
  firstPlural: "nebder",
  secondPluralMasculine: "tbedrem",
  secondPluralFeminine: "tbedremt",
  thirdPluralMasculine: "bedren",
  thirdPluralFeminine: "bedrent",
} as const;

const NEGATIVE_PRETERITE_FORMS = {
  firstSingular: "bdireɣ",
  secondSingular: "tebdireḍ",
  thirdSingularMasculine: "ibdir",
  thirdSingularFeminine: "tebdir",
  firstPlural: "nebdir",
  secondPluralMasculine: "tebdirem",
  secondPluralFeminine: "tebdiremt",
  thirdPluralMasculine: "bdiren",
  thirdPluralFeminine: "bdirent",
} as const;

const INTENSIVE_AORIST_FORMS = {
  firstSingular: "beddreɣ",
  secondSingular: "tbeddreḍ",
  thirdSingularMasculine: "ibedder",
  thirdSingularFeminine: "tbedder",
  firstPlural: "nbedder",
  secondPluralMasculine: "tbeddrem",
  secondPluralFeminine: "tbeddremt",
  thirdPluralMasculine: "beddren",
  thirdPluralFeminine: "beddrent",
} as const;

describe(
  "affixes personnels ordinaires",
  (): void => {
    it(
      "décrit les neuf personnes attendues",
      (): void => {
        expect(
          Object.keys(
            STANDARD_PERSONAL_AFFIXES.affixes,
          ),
        ).toHaveLength(9);

        expect(
          STANDARD_PERSONAL_AFFIXES.affixes
            .secondPluralFeminine,
        ).toMatchObject({
          prefix: "t",
          suffix: "emt",
          suffixKind: "vocalic",
        });
      },
    );

    it(
      "sélectionne i- ou y- à la troisième personne",
      (): void => {
        expect(
          inflectTheme(
            "bder",
            "thirdSingularMasculine",
          ),
        ).toBe("ibder");

        expect(
          inflectTheme(
            "aru",
            "thirdSingularMasculine",
          ),
        ).toBe("yaru");
      },
    );

    it(
      "fléchit le prétérit affirmatif de bder",
      (): void => {
        const result = conjugate(
          "bder",
          G3_1_1,
        );

        expect(
          result.forms.preteriteAffirmative,
        ).toEqual(PRETERITE_FORMS);
      },
    );

    it(
      "fléchit le prétérit négatif de bder",
      (): void => {
        const result = conjugate(
          "bder",
          G3_1_1,
        );

        expect(
          result.forms.preteriteNegative,
        ).toEqual(NEGATIVE_PRETERITE_FORMS);
      },
    );

    it(
      "fléchit l’aoriste intensif de bder",
      (): void => {
        const result = conjugate(
          "bder",
          G3_1_1,
        );

        expect(
          result.forms.aoristIntensive,
        ).toEqual(INTENSIVE_AORIST_FORMS);
      },
    );

    it(
      "produit quatre paradigmes de neuf formes",
      (): void => {
        const result = conjugate(
          "bder",
          G3_1_1,
        );

        expect(
          result.forms.aoristSimple,
        ).toEqual(PRETERITE_FORMS);

        expect(
          Object.values(result.forms).every(
            (forms): boolean =>
              Object.keys(forms).length === 9,
          ),
        ).toBe(true);
      },
    );

    it(
      "conserve les cinq références documentaires",
      (): void => {
        expect(
          STANDARD_PERSONAL_AFFIXES.sources.map(
            ({ pdfPage }): number => pdfPage,
          ),
        ).toEqual([
          3,
          4,
          9,
          10,
          18,
        ]);
      },
    );
  },
);
