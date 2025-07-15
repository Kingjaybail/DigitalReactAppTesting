import React from "react";
import logo from "./logo.svg";
import "./App.css";

/**
 * Uses Tailwind CSS for styling
 * Tailwind file is imported in App.css
 */

export default function App() {
  const text = process.env.REACT_APP_PRINT_TEST;

  console.log("test")
  console.log(text)
  return (
    <div>
      <h1>TEST</h1>
      <h1>{text}</h1>
    </div>
  );
}

