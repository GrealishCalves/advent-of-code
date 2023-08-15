import { mainAsync } from "./a";

describe("Advent of Code", () => {
  it("DAY01 - TESTING ANSWER", async () => {
    const result = await mainAsync();
    expect(result).toEqual(24000);
  });
});
