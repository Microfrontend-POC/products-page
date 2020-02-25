import React, { useState } from "react";
import ReactDOM from "react-dom";

const App = () => {
  const initialState = parseInt(window.localStorage.getItem("count"));
  window.localStorage.removeItem("count");
  const [count, setCount] = useState(initialState || 0);
  return <button onClick={() => setCount(count + 1)}>{count}</button>;
};

ReactDOM.render(<App />, document.querySelector("#products-page"));
