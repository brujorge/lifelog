import React from "react";
import { Router } from "@reach/router";
import PostList from "./PostList";
import PostForm from "./PostForm";

const App = () => {
  return (
    <Router>
      <PostList path="/" />
      <PostForm path="/add" />
    </Router>
  );
};

export default App;
