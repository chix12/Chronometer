import React from "react";
import ReactDOM from "react-dom";
import Timer from "./Timer";
import "./style.css";

const App = () => {
  return (
    <div>
      <Timer />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
