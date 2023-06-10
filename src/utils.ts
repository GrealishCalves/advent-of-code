import { readFile } from "fs/promises";
import { resolve } from "path";

export async function readFileAsync(path: string): Promise<string> {
  return await readFile(path, "utf-8");
}

export async function readDataAsync(path: string): Promise<string[]> {
  const filePath = resolve(path);
  const fileContent = await readFileAsync(filePath);
  return fileContent.split("\n");
}
