import { useState } from "react";

export function Counter() {
  const [count, setCount] = useState(0);
  console.log("Rendering Counter ...");
  return (
    <div>
      <h1>Counter</h1>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
