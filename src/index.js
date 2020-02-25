import React, { useState } from "react";
// import ReactDOM from "react-dom";

const App = ({ count: initialCount }) => {
  const propsCount = parseInt(window.localStorage.getItem("count"));
  const [count, setCount] = useState(initialCount || 0);
  window.localStorage.removeItem("count");
  return <button onClick={() => setCount(count + 1)}>{count}</button>;
};

export default App;
// ReactDOM.render(<App />, document.querySelector("#products-page"));
