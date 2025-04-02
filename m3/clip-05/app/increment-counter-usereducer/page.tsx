"use client";
import { useReducer } from "react";

export default function Page() {
  type CounterAction = "increment" | "decrement";
  function counterReducer(state: number, action: CounterAction): number {
    if (action === "increment") {
      return state + 1;
    } else if (action === "decrement") {
      return state - 1;
    } else {
      return state;
    }
  }
  const [count, dispatch] = useReducer(counterReducer, 0);
  return (
    <div>
      <button onClick={() => dispatch("increment")}>Increment</button>
      <button onClick={() => dispatch("decrement")}>Decrement</button>
      {count}
    </div>
  );
}
