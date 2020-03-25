import React from "react";
import { render } from "react-visual-regression";
import { toMatchImageSnapshot } from "jest-image-snapshot";
import { Frame } from "../Frame";
import { Marker } from "../Marker";

expect.extend({ toMatchImageSnapshot });

const opts = {
  stylesheet: undefined,
  bodyPadding: 10
};

const failOpts: {
  failureThreshold: number;
  failureThresholdType: "percent" | "pixel" | undefined;
} = {
  failureThreshold: 0.01,
  failureThresholdType: "percent"
};

describe("Marker", () => {
  test("defaults", async () => {
    const image = await render(
      <Frame height={100} yRange={[0, 100]}>
        <Marker data={[40, 31, 22, 3, 16, -20]} />
      </Frame>,
      opts
    );

    expect(image).toMatchImageSnapshot(failOpts);
  });

  test("with values", async () => {
    const image = await render(
      <Frame height={100} yRange={[0, 100]}>
        <Marker
          data={[40, 31, 22, 3, 16, -20]}
          index={4}
          size={6}
          color={[0, 0, 0, 1]}
        />
      </Frame>,
      opts
    );

    expect(image).toMatchImageSnapshot(failOpts);
  });

  test("index out of bounds", async () => {
    const image = await render(
      <Frame height={100} yRange={[0, 100]}>
        <Marker
          data={[40, 31, 22, 3, 16, -20]}
          index={44}
          size={6}
          color={[0, 0, 0, 1]}
        />
      </Frame>,
      opts
    );

    expect(image).toMatchImageSnapshot(failOpts);
  });

  test("size out of bounds", async () => {
    const image = await render(
      <Frame height={100} yRange={[0, 100]}>
        <Marker
          data={[40, 31, 22, 3, 16, -20]}
          index={44}
          size={26}
          color={[0, 0, 0, 1]}
        />
      </Frame>,
      opts
    );

    expect(image).toMatchImageSnapshot(failOpts);
  });
});
