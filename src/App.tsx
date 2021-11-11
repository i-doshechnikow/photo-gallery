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

type AddresType = {
  city?: string | null;
  index?: number | null;
};

type UserType = {
  sayHello: (name: string) => string;
  age: number;
  name: string;
  isSamurai: boolean;
  addres: AddresType | null;
};

let user: UserType = {
  age: 12,
  name: "an",
  sayHello(name: string) {
    return `Hello, ${name}`;
  },
  isSamurai: true,
  addres: {
    // city: "spb",
    index: 194,
  },
};

let userMethod: string = user.sayHello("mark");

let first;
first = "string";
// first = 3;

const summ: (a: number, b: number) => number = (a: number, b: number) => {
  return a + b;
};

let testSumm = summ(4, 4);

export type initialStateType = typeof initialState;

let initialState = {
  name: null as string | null,
  age: null as number | null,
  isSamurai: null as boolean | null,
  addres: {
    city: null,
    country: null,
  } as AddresType,
  counter: 0,
  arrayAddreses: [] as Array<AddresType>,
};

let stateSecond: initialStateType = {
  addres: {
    city: "spb",
  },
  age: 30,
  isSamurai: true,
  name: "i",
  counter: 5,
  arrayAddreses: [{ city: "sp", index: 194 }],
};

let GET_TASK = "api/task";
let GET_TASKS = "api/task/id";

type actionType = {
  type: typeof GET_TASKS;
  payload: number;
};

let action: actionType = {
  type: GET_TASKS,
  payload: 1,
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
      <div>{userMethod}</div>
      <div>{testSumm}</div>
      <div>{summ(5, 5)}</div>
      <div>{Object.keys(initialState)}</div>
      <div>{Object.keys(action)}</div>
    </div>
  );
}

export default App;
