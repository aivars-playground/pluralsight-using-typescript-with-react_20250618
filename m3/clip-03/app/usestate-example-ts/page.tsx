"use client";
import { useState } from "react";

export default function Page() {
  const [darkTheme, setDarkTheme] = useState<boolean>();

  return (
    <div className="container">
      <div>{typeof darkTheme}</div>
      <h1>{darkTheme ? "dark" : "light"}</h1>
      <button onClick={() => setDarkTheme(!darkTheme)}>Toggle Theme</button>
    </div>
  );
}
