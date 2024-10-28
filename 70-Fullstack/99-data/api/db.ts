// @ts-nocheck
import { AsyncDatabase } from "promised-sqlite3";

// export const DATA_PATH = "/Users/jbandi/Dev/MyGithub/baselone-2024/99-data";
export const DATA_PATH = "../";


interface MessageRow {
  id: number;
  text: string;
}
const QUERY = "SELECT * FROM MESSAGE WHERE ID = 1";


export async function getData() {
  const db = await AsyncDatabase.open(`${DATA_PATH}/db.sqlite`);
  console.log("Connected to Database");
  // return new Promise<string>((resolve) => {
  //   setTimeout(() => {
  //     resolve(JSON.stringify({ id: 1, text: "Hello from Backend!" }));
  //   }, 1000);
  // });
  const row = await db.get<MessageRow>(QUERY);
  return JSON.stringify(row);
}
