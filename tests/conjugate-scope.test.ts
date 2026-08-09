import {
  describe,
  expect,
  it,
} from "vitest";

import {
  G3_1_1,
} from "../src/data/types/base/g3-1-1.js";
import type {
  MorphologicalType,
} from "../src/domain/morphology.js";
import type {
  ConjugatableType,
} from "../src/domain/conjugation.js";
import {
  conjugate,
} from "../src/engine/conjugate.js";

const UNSUPPORTED_TYPE = {
  ...G3_1_1,
  id: "UNSUPPORTED-TEST",
} as const satisfies MorphologicalType;

describe(
  "conjugate — périmètre supporté",
  (): void => {
    it(
      "refuse à l’exécution un type non déclaré supporté",
      (): void => {
        expect(
          (): unknown =>
            conjugate(
              "bder",
              UNSUPPORTED_TYPE as unknown as
                ConjugatableType,
            ),
        ).toThrowError(
          "Unsupported conjugatable type: UNSUPPORTED-TEST",
        );
      },
    );
  },
);

if (
  process.env.CONJUGATE_SCOPE_TYPECHECK === "1"
) {
  conjugate(
    "bder",
    // @ts-expect-error Un type non déclaré supporté doit être rejeté statiquement.
    UNSUPPORTED_TYPE,
  );
}

const SPOOFED_G3_1_1 = {
  ...G3_1_1,
  themePatterns: {
    ...G3_1_1.themePatterns,
    preteriteAffirmative: "R1R2iR3",
  },
} as const satisfies ConjugatableType;

describe(
  "conjugate — intégrité du type supporté",
  (): void => {
    it(
      "n’autorise pas les patterns fournis par un objet falsifié de même id",
      (): void => {
        expect(
          conjugate(
            "bder",
            SPOOFED_G3_1_1,
          ).forms.preteriteAffirmative
            .firstSingular,
        ).toBe("bedreɣ");
      },
    );
  },
);
