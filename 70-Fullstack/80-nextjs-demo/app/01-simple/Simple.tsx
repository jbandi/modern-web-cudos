export function Simple() {
  let now = new Date().toLocaleTimeString();
  console.log("Rendering Simple Component");
  return (
    <div>
      <h1>Simple Component</h1>
      <p>{now}</p>
    </div>
  );
}
