import { Form, useLoaderData } from "@remix-run/react";

export async function loader() {
  console.log("Loading data on the server ...");
  return { data: "Gugus" };
}

export async function action() {
  console.log("Action on the server");
  return null;
}

export default function Gugus() {
  const data = useLoaderData();
  console.log("Rendering the route:", data);
  return (
    <div>
      <h1>{data.data}</h1>
      <Form method="post">
        <button>Submit</button>
      </Form>
    </div>
  );
}
