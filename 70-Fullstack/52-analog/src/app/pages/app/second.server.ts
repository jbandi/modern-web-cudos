console.log('Rendering on the server ...');


export async function load() {

  const response = await fetch("http://localhost:3000/");
  const message = await response.json();
  console.log("APP SECOND ROUTE: loaded message from api", message.text);
  return {
    mesage: message.text
  }
}
