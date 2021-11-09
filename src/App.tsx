import React from "react";
import "./App.css";

let a: string = "10";
a = "s";

let b: number = 25;
b = 4;

let c: Array<number> | null = [];
c = [1, 2];
c = [];
c = null;
c = [1, 2];

let d: any = "sfdl";
d = [null, 3, "dsfsdfsdfsdfsf"];

let d2: number[] = [1, 1, 2, 5, 4, 3, 7, 5, 4];
let d3 = d2.map((el) => el / 2);

let sex: "male" | "female";
sex = "male";

let user = {
  age: 12,
  name: "an",
  sayHello(name: string){console.log(`Hello, ${name}`);}
};





function App() {
  return (
    <div className="App">
      <div>{a}</div>
      <div>{b}</div>
      <div>{c}</div>
      <div>{d}</div>
      <div>{d3}</div>
      <div>{sex}</div>
      <div>{Object.keys(user)}</div>
    </div>
  );
}

export default App;
