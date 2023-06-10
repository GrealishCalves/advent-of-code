import { resolve } from "path";
import { readDataAsync } from "../utils";

async function mainAsync(): Promise<any> {
  const filePath = resolve(__dirname, "../../data/day-01/a-test.txt");
  const data = await readDataAsync(filePath);

  const elfMap = new Map<number, number>();
  let index = 0;
  let currentSum = 0;

  for (const line of data) {
    if (line.length === 0) {
      if (currentSum > 0) {
        elfMap.set(index, currentSum);
        index++;
        currentSum = 0;
        continue;
      }
    } else {
      currentSum += parseInt(line, 10);
    }
  }

  if (currentSum > 0) {
    elfMap.set(index, currentSum);
  }

  console.log([...elfMap]);
}

mainAsync().catch((error) => {
  if (error instanceof Error) {
    console.error(error);
  }
});
