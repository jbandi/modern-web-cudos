import { AsyncDatabase } from "promised-sqlite3";

export const DATA_PATH =
  "/Users/jbandi/Dev/MyBitbucket/react-bsi-2024/70-Fullstack/99-data";
interface MessageRow {
  id: number;
  text: string;
}
interface CounterRow {
  id: number;
  val: string;
}

export const db = await AsyncDatabase.open(`${DATA_PATH}/db.sqlite`);
console.log("Connected to Database");

const MESSAGE_QUERY = "SELECT * FROM MESSAGE WHERE ID = ?";
export async function getData(messageId = 1) {
  const row = await db.get<MessageRow>(MESSAGE_QUERY, messageId);
  return row.text;
}

const COUNT_QUERY = "SELECT * FROM COUNTER WHERE ID = 1";
export async function getCount() {
  const row = await db.get<CounterRow>(COUNT_QUERY);
  return row.val;
}

const COUNT_UPDATE = "UPDATE COUNTER SET VAL = ? WHERE ID = 1";
export async function updateCount(val: number) {
  await db.run(COUNT_UPDATE, val);
}
