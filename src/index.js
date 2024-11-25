import { hydrateRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./styles/_index.scss";

const initialData = window.__INITIAL_DATA__ || {};
const domNode = document.getElementById("root");

hydrateRoot(
  domNode,
  <BrowserRouter>
    <App initialData={initialData} />
  </BrowserRouter>
);
