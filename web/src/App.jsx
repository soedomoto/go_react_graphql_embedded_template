import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useEffect } from "react";
import client from "./client";
import { gql, useQuery } from "@apollo/client";

function App() {
  const [count, setCount] = useState(0);
  const { loading, error, data, refetch } = useQuery(gql`
    query Todos {
      todos {
        id
        text
        done
        user {
          id
          name
        }
      }
    }
  `);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => refetch()}>Refetch</button>
        <p>{JSON.stringify(data)}</p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
