const JSON_FILE_PATH = "./data.json";

export const readFile = async () => {
  const file = Bun.file(JSON_FILE_PATH);
  if (!(await file.exists())) {
    return new Error("Not Found JSON files");
  }

  const contents = await file.json();
  const json = JSON.parse(contents);
  if (typeof json === "object") {
    return new Error("The data in the file is invalid.");
  }

  return json;
};
