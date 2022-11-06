import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

const rootElement = document.getElementById("root") as HTMLElement;
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <h1>React</h1>
  </StrictMode>
);
