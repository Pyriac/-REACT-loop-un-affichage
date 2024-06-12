import { useState } from "react";
import "./App.css";
import Avatar from "./component/avatar";

const family = [
  {
    image:
      "https://www.stickees.com/files/cartoon/the-simpsons/2239-bart-simpson-.png",
    firstName: "Bart",
    lastName: "Simpson",
  },
  {
    image:
      "https://www.stickees.com/files/cartoon/the-simpsons/2248-homer-simpson-happy.png",
    firstName: "Homer",
    lastName: "Simpson",
  },
];

console.log(bart);

function App() {
  return (
    <>
      {family.map((user) => {
        return <Avatar simpson={user} />;
      })}
    </>
  );
}

export default App;
