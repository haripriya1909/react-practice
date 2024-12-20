import React from "react";
import ReactDOM from "react-dom/client";
//React ELement

const Title = () => <h1>Title component</h1>;
const HeadingComponent = () => (
  <div>
    <Title />
    <h1>hello from react component!!!</h1>
  </div>
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
