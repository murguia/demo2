import "./styles.css";
import * as React from "react";
import TC from "./TC";

const headerData: string[] = ["col 1", "col 2", "col 3"];
const bodyData: string[][] = [
  ["blue 1", "blue 2", "blue 3"],
  ["black 1", "black 2", "black 3"]
];

export default function App() {
  //const classes = useStyles()

  return (
    <div className="App">
      <TC headerArray={headerData} bodyArray={bodyData} />
    </div>
  );
}
