import { readFile } from "fs/promises";
import { DATA_PATH, getData } from "~/db/db";

export async function readServerData() {
  let serverData = "";
  serverData = "This is Server Data.";

  // // read current server path
  serverData = process.cwd();
  //
  // // read data from file
  serverData = await readFile(`${DATA_PATH}/SERVER_DATA.txt`, "utf8");

  // read data from database
  serverData = await getData(1);

  // // random delay
  const delay = (Math.floor(Math.random() * 3) + 2) * 1000;
  await new Promise((resolve) => setTimeout(resolve, delay));

  console.log("Server Data: ", serverData);
  return serverData;
}
