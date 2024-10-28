import { useLoaderData } from "@remix-run/react";
import { json } from "@remix-run/node";
import { readServerData } from "~/routes/02-backend/serverData";
import { Container } from "./Container";

export async function loader() {
  const serverData = await readServerData();
  await new Promise((resolve) => setTimeout(resolve, 1000));
  console.log("Loaded data on the server:", serverData);
  return json({
    serverData,
  });
}
export default function BackendPage() {
  const { serverData } = useLoaderData<typeof loader>();
  console.log("Rendering the backend route:", serverData);
  return (
    <div>
      <h1>Backend Page</h1>
      <Container data={serverData} />
    </div>
  );
}
