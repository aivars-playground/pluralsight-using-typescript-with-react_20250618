"use client";
import { useState } from "react";

export default function Page() {
  const [darkTheme, setDarkTheme] = useState();
  return (
    <div className="container">
      {typeof darkTheme}
      <h1>{darkTheme ? "dark" : "light"}</h1>
      <button onClick={() => setDarkTheme(!darkTheme)}>Toggle Theme</button>
    </div>
  );
}
