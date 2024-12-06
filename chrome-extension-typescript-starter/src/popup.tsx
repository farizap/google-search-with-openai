import React from "react";
import { createRoot } from "react-dom/client";

const Popup = () => {

  return (
    <>
      <>Google Search with openAI</>
    </>
  );
};

const root = createRoot(document.getElementById("root")!);

root.render(
  <React.StrictMode>
    <Popup />
  </React.StrictMode>
);
