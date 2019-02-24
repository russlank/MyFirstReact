import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
  var text1 = `==>${process.env.DEFAULT_TEXT}<==`;
  var text2 = "some text";

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <div>Some text added by me here</div>
      <div>text1: {text1}</div>
      <div>text2: {text2}</div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
