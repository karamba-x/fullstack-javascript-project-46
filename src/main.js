import { readFile, getExtension } from "./utils.js";
import parse from "./parser.js";

const genDiff = (filepath1, filepath2) => {
  const dataFile1 = readFile(filepath1);
  const dataFile2 = readFile(filepath2);
  const extFile1 = getExtension(filepath1);
  const extFile2 = getExtension(filepath2);
  const parseFile1 = parse(dataFile1, extFile1);
  const parseFile2 = parse(dataFile2, extFile2);
  return [parseFile1, parseFile2];
}

export default genDiff;