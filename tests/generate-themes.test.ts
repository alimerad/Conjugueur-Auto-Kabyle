import {
  describe,
  expect,
  it,
} from "vitest";

import {
  G3_1_1,
} from "../src/data/types/base/g3-1-1.js";
import {
  generateThemes,
} from "../src/engine/generate-themes.js";

describe(
  "génération des thèmes du type G3.1-1",
  (): void => {
    it(
      "génère les quatre thèmes documentés de bder",
      (): void => {
        const result = generateThemes(
          "bder",
          G3_1_1,
        );

        expect(result.radicals).toEqual({
          R1: "b",
          R2: "d",
          R3: "r",
        });

        expect(result.themes).toEqual({
          preteriteAffirmative: "bder",
          preteriteNegative: "bdir",
          aoristSimple: "bder",
          aoristIntensive: "bedder",
        });
      },
    );

    it(
      "respecte la distribution thématique G3.1",
      (): void => {
        const { themes } = generateThemes(
          "bder",
          G3_1_1,
        );

        expect(
          themes.preteriteAffirmative,
        ).toBe(themes.aoristSimple);
        expect(
          themes.preteriteNegative,
        ).not.toBe(themes.preteriteAffirmative);
        expect(
          themes.aoristIntensive,
        ).not.toBe(themes.preteriteAffirmative);
        expect(
          themes.aoristIntensive,
        ).not.toBe(themes.preteriteNegative);
      },
    );

    it(
      "conserve la provenance PDF et imprimée",
      (): void => {
        expect(G3_1_1.sources).toHaveLength(2);
        expect(G3_1_1.sources[0]).toMatchObject({
          pdfPage: 13,
          printedPage: 12,
        });
        expect(G3_1_1.sources[1]).toMatchObject({
          pdfPage: 18,
          printedPage: 17,
        });
      },
    );

    it(
      "rejette un lemme incompatible avec le patron",
      (): void => {
        expect((): void => {
          generateThemes("aru", G3_1_1);
        }).toThrow(
          'Le lemme "aru" ne correspond pas au ' +
            'patron "R1R2eR3".',
        );
      },
    );
  },
);
