import React from "react";
import { render } from "react-dom";

import "styles/base.css";

import App from "components/App";
document.addEventListener("DOMContentLoaded", () => {
  render(<App />, document.body.appendChild(document.createElement("div")));
});
