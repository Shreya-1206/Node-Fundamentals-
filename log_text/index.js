import { writeLog, readFile, appendWriteFile } from "./log.js";

writeLog("log.text", "Wrote From writeLog\n");
readFile("log.text");
appendWriteFile("log.text", "Appended From appendWriteFile");

