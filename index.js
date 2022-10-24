import Logger from "./services/Logger.js";

await Logger.infoLog("test", "/test", "Testing the infoLog", "info");

await Logger.errorLog(
  "test",
  "/test",
  "Testing the errorLog method",
  "Detailed message of the error",
  { status: false, message: "Something went wrong :(" }
);
