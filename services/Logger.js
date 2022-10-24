import fs from "fs";

const DateFormatter = function (dateToBeFormatted) {
  return new Intl.DateTimeFormat("en-US").format(dateToBeFormatted);
};

class Logger {
  async createLogDirectories(directoryName) {
    const date = DateFormatter(Date.now()).split("/");

    try {
      const dates = date.split("/");

      const year = dates[2];
      const day = dates[1];
      const month =
        dates[0] === "1"
          ? "january"
          : dates[0] === "2"
          ? "february"
          : dates[0] === "3"
          ? "march"
          : dates[0] === "4"
          ? "april"
          : dates[0] === "5"
          ? "may"
          : dates[0] === "6"
          ? "june"
          : dates[0] === "7"
          ? "july"
          : dates[0] === "8"
          ? "august"
          : dates[0] === "9"
          ? "september"
          : dates[0] === "10"
          ? "october"
          : dates[0] === "11"
          ? "november"
          : "december";

      const filePath = `${process.cwd()}/logs/${directoryName}/${year}/${month}/${day}`;

      await fs.promises.mkdir(filePath, {
        recursive: true,
      });

      return { status: "success", filePath, date };
    } catch (error) {
      return { status: "error", error, date };
    }
  }
}

export default new Logger();
