import React from "react";
const mystyle1 = {
  color: "black",
  backgroundColor: "orange",
  width: "30%",
  marginLeft: "20%",
};
const mystyle2 = {
  color: "white ",
  backgroundColor: "black",
  width: "30%",
  marginLeft: "20%",
  textSize:"20px",
};
const Variable = () => {
  return (
    <>
      <h1 style={mystyle1}>This is my App</h1>
      <MyApp />
    </>
  );
};

const MyApp = () => {
  return (
    <>
      <div className="container " style={mystyle2}>
        <h1>my app is Looking asweme</h1>
        <p>hello friends now i am able to crete one website in two hours.</p>
      </div>
    </>
  );
};
export default Variable;
