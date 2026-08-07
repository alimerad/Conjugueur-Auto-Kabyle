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

const RULE_14_REGRESSION_CASES = [
  {
    label: "R14 els 1sg",
    theme: "els",
    person: "firstSingular",
    expected: "lseɣ",
  },
  {
    label: "R14 ddem 1sg",
    theme: "ddem",
    person: "firstSingular",
    expected: "ddmeɣ",
  },
  {
    label: "R14 ddem 2sg",
    theme: "ddem",
    person: "secondSingular",
    expected: "teddmeḍ",
  },
  {
    label: "R14 kcem 1sg",
    theme: "kcem",
    person: "firstSingular",
    expected: "kecmeɣ",
  },
  {
    label: "R14 rfed 1sg",
    theme: "rfed",
    person: "firstSingular",
    expected: "refdeɣ",
  },
  {
    label: "R14 lmed 1sg",
    theme: "lmed",
    person: "firstSingular",
    expected: "lemdeɣ",
  },
  {
    label: "R14 ɣiwel 1sg",
    theme: "ɣiwel",
    person: "firstSingular",
    expected: "ɣiwleɣ",
  },
  {
    label: "R14 els 2sg",
    theme: "els",
    person: "secondSingular",
    expected: "telseḍ",
  },
] as const;

describe(
  "Règle 14 — régressions morphophonologiques",
  (): void => {
    for (const {
      label,
      theme,
      person,
      expected,
    } of RULE_14_REGRESSION_CASES) {
      it(
        label,
        (): void => {
          expect(
            inflectTheme(
              theme,
              person,
            ),
          ).toBe(expected);
        },
      );
    }
  },
);

describe(
  "Règle 15.2 — collision t + tt-",
  (): void => {
    it(
      "insère e entre le préfixe personnel t- et le thème ttcuddu",
      (): void => {
        expect(
          inflectTheme(
            "ttcuddu",
            "secondSingular",
          ),
        ).toBe("tettcudduḍ");
      },
    );
  },
);

describe(
  "Règle 15.2 — paradigme de collision t + tt-",
  (): void => {
    it(
      "forme correctement la 3sg féminine",
      (): void => {
        expect(
          inflectTheme(
            "ttcuddu",
            "thirdSingularFeminine",
          ),
        ).toBe("tettcuddu");
      },
    );

    it(
      "forme correctement la 2pl masculine",
      (): void => {
        expect(
          inflectTheme(
            "ttcuddu",
            "secondPluralMasculine",
          ),
        ).toBe("tettcuddum");
      },
    );

    it(
      "forme correctement la 2pl féminine",
      (): void => {
        expect(
          inflectTheme(
            "ttcuddu",
            "secondPluralFeminine",
          ),
        ).toBe("tettcuddumt");
      },
    );
  },
);

describe(
  "Affixes personnels — thème final vocalique",
  (): void => {
    const cases = [
      {
        label: "aru 1sg",
        person: "firstSingular",
        expected: "aruɣ",
      },
      {
        label: "aru 2sg",
        person: "secondSingular",
        expected: "taruḍ",
      },
      {
        label: "aru 2pl masc.",
        person: "secondPluralMasculine",
        expected: "tarum",
      },
      {
        label: "aru 3pl masc.",
        person: "thirdPluralMasculine",
        expected: "arun",
      },
      {
        label: "aru 3pl fém.",
        person: "thirdPluralFeminine",
        expected: "arunt",
      },
    ] as const;

    for (const {
      label,
      person,
      expected,
    } of cases) {
      it(
        label,
        (): void => {
          expect(
            inflectTheme(
              "aru",
              person,
            ),
          ).toBe(expected);
        },
      );
    }
  },
);

describe(
  "Normalisation Unicode — frontière NFC",
  (): void => {
    it(
      "normalise un thème NFD avant l’inflexion",
      (): void => {
        const nfdTheme =
          "aweḍ".normalize("NFD");

        expect(nfdTheme).not.toBe("aweḍ");
        expect(
          inflectTheme(
            nfdTheme,
            "firstSingular",
          ),
        ).toBe("awḍeɣ");
      },
    );

    it(
      "retourne une forme NFC depuis une entrée NFD",
      (): void => {
        const form =
          inflectTheme(
            "aweḍ".normalize("NFD"),
            "secondSingular",
          );

        expect(form).toBe("tawḍeḍ");
        expect(form).toBe(
          form.normalize("NFC"),
        );
      },
    );
  },
);

describe(
  "métadonnées de périmètre morphophonologique",
  (): void => {
    it(
      "documente la Règle 15.2 maintenant prise en charge",
      (): void => {
        expect(
          STANDARD_PERSONAL_AFFIXES.sources.some(
            ({ note }): boolean =>
              note.includes("Règle 15.2"),
          ),
        ).toBe(true);

        expect(
          STANDARD_PERSONAL_AFFIXES.scope,
        ).toContain(
          "collisions t + tt- sont prises en charge",
        );

        expect(
          STANDARD_PERSONAL_AFFIXES.scope,
        ).toContain(
          "verbes d’état restent hors périmètre",
        );
      },
    );
  },
);
