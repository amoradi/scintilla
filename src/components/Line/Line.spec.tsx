import React from "react";
import { render } from "react-visual-regression";
import { toMatchImageSnapshot } from "jest-image-snapshot";
import { Frame } from "../Frame";
import { Line } from "./Line";

expect.extend({ toMatchImageSnapshot });

const opts = {
  stylesheet: undefined,
  bodyPadding: 10
};

describe("Line", () => {
  describe("stroke", () => {
    describe("solid", () => {
      test("solid color", async () => {
        const image = await render(
          <Frame height={100} yRange={[0, 100]}>
            <Line
              data={[40, 31, 22, 3, 16, -20]}
              stroke={{
                color: { solid: [255, 0, 0, 1] },
                width: 2,
                style: "solid"
              }}
            />
          </Frame>,
          opts
        );

        expect(image).toMatchImageSnapshot();
      });
      test("solid color multi", async () => {
        const image = await render(
          <Frame height={100} yRange={[0, 100]}>
            <Line
              data={[30, 1, 2, 3, 16]}
              stroke={{
                color: {
                  solid: [
                    [255, 0, 0, 1],
                    [245, 237, 135, 1],
                    [145, 37, 235, 1],
                    [66, 112, 99, 1],
                    [255, 0, 0, 1],
                    [255, 0, 0, 1]
                  ]
                },
                width: 4,
                style: "solid"
              }}
            />
          </Frame>,
          opts
        );

        expect(image).toMatchImageSnapshot();
      });
      test("gradient color", async () => {
        const image = await render(
          <Frame height={100} yRange={[0, 100]}>
            <Line
              data={[40, 31, 22, 3, 16, -20]}
              stroke={{
                color: { gradient: [255, 0, 0, 1] },
                width: 2,
                style: "solid"
              }}
            />
          </Frame>,
          opts
        );

        expect(image).toMatchImageSnapshot();
      });
      test("gradient color multi", async () => {
        const image = await render(
          <Frame height={100} yRange={[0, 100]}>
            <Line
              data={[30, 1, 2, 3, 16]}
              stroke={{
                color: {
                  gradient: [
                    [255, 0, 0, 1],
                    [245, 237, 135, 1],
                    [145, 37, 235, 1],
                    [66, 112, 99, 1],
                    [255, 0, 0, 1],
                    [255, 0, 0, 1]
                  ]
                },
                width: 4,
                style: "solid"
              }}
            />
          </Frame>,
          opts
        );

        expect(image).toMatchImageSnapshot();
      });
    });

    describe("dashed", () => {
      test("solid color", async () => {
        const image = await render(
          <Frame height={100} yRange={[0, 100]}>
            <Line
              data={[0, 1, 2, 3, 16]}
              stroke={{
                color: { solid: [255, 0, 0, 1] },
                width: 2,
                style: "dash"
              }}
            />
          </Frame>,
          opts
        );

        expect(image).toMatchImageSnapshot();
      });
      test("solid color multi", async () => {
        const image = await render(
          <Frame height={100} yRange={[0, 100]}>
            <Line
              data={[0, 1, 2, 3, 16]}
              stroke={{
                color: {
                  solid: [
                    [255, 0, 0, 1],
                    [245, 237, 135, 1],
                    [145, 37, 235, 1],
                    [66, 112, 99, 1]
                  ]
                },
                width: 12,
                style: "dash"
              }}
            />
          </Frame>,
          opts
        );

        expect(image).toMatchImageSnapshot();
      });
      test("gradient color", async () => {
        const image = await render(
          <Frame height={100} yRange={[0, 100]}>
            <Line
              data={[0, 1, 2, 3, 16]}
              stroke={{
                color: { gradient: [255, 0, 0, 1] },
                width: 2,
                style: "dash"
              }}
            />
          </Frame>,
          opts
        );

        expect(image).toMatchImageSnapshot();
      });
      test("gradient color multi", async () => {
        const image = await render(
          <Frame height={100} yRange={[0, 100]}>
            <Line
              data={[0, 1, 2, 3, 16]}
              stroke={{
                color: {
                  gradient: [
                    [255, 0, 0, 1],
                    [245, 237, 135, 1],
                    [145, 37, 235, 1],
                    [66, 112, 99, 1]
                  ]
                },
                width: 12,
                style: "dash"
              }}
            />
          </Frame>,
          opts
        );

        expect(image).toMatchImageSnapshot();
      });
    });
  });

  describe("fill", () => {
    test("solid color", async () => {
      const image = await render(
        <Frame height={100} yRange={[0, 100]}>
          <Line
            data={[40, 31, 22, 3, 16, -20]}
            fill={{ solid: [255, 0, 0, 1] }}
          />
        </Frame>,
        opts
      );

      expect(image).toMatchImageSnapshot();
    });
    test("solid color multi", async () => {
      const image = await render(
        <Frame height={100} yRange={[0, 100]}>
          <Line
            data={[30, 21, 72, 53, 26]}
            fill={{
              solid: [
                [255, 0, 0, 0.5],
                [245, 237, 135, 1],
                [145, 37, 235, 1],
                [66, 112, 99, 1],
                [255, 0, 0, 0.5],
                [255, 0, 0, 1]
              ]
            }}
          />
        </Frame>,
        opts
      );

      expect(image).toMatchImageSnapshot();
    });
    test("gradient color", async () => {
      const image = await render(
        <Frame height={100} yRange={[0, 100]}>
          <Line
            data={[40, 31, 22, 3, 16, -20]}
            fill={{ gradient: [255, 0, 0, 1] }}
          />
        </Frame>,
        opts
      );

      expect(image).toMatchImageSnapshot();
    });
    test("gradient color multi", async () => {
      const image = await render(
        <Frame height={100} yRange={[0, 100]}>
          <Line
            data={[30, 61, 62, 43, 16]}
            fill={{
              gradient: [
                [255, 0, 0, 0.2],
                [245, 237, 135, 1],
                [145, 37, 235, 1],
                [66, 112, 99, 1],
                [255, 0, 0, 1],
                [255, 0, 0, 1]
              ]
            }}
          />
        </Frame>,
        opts
      );

      expect(image).toMatchImageSnapshot();
    });
  });
});
