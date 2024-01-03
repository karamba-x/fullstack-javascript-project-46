import * as fs from "node:fs";
import path from 'path';

export const readFile = (filepath) => {
  const dirName = process.cwd(filepath);
  const fullPath = path.resolve(dirName, filepath);
  try {
    return fs.readFileSync(fullPath, 'utf-8');
  } catch (error) {
    console.log(error);
  }
}

export const getExtension = (filename) => {
  const result = filename.split('.');
  return result.at(-1);
}

