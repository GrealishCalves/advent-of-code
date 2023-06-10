import { readDataAsync } from "../utils";
import { resolve } from "path";

describe("Advent of Code", () => {
  it("DAY01 - TESTING ANSWER", async () => {
    const filePath = resolve(__dirname, "../../data/day-01/a-test.txt");
    const data = await readDataAsync(filePath);

    const result = "";

    expect(result).toEqual("");
  });
});
