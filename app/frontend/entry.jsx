import React from "react";
import ReactDOM from "react-dom";
import { login, signup, logout } from "./util/session_api_util";

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  ReactDOM.render(<h1>Welcome to JustEat</h1>, root);
});
