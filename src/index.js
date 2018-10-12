import React from "react";
import ReactDOM from "react-dom";
import Root from "./usage";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <Root />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
