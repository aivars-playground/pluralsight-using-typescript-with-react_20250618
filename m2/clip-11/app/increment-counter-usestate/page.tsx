"use client";
import { useState } from "react";

export default function Page() {
  const [count, setCount] = useState<number>(0);

  function increment() {
    setCount(count + 1);
  }

  function decrement() {
    setCount(count - 1);
  }

  return (
    <div>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      {count}
    </div>
  );
}
