import { useState } from "react";
import reactLogo from "./assets/react.svg";
// import viteLogo from './assets/vite.svg'
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        {/* <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a> */}
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Built-in server is connected with one agent server through SSL. Trying once more!!</h1>
      <h2>Built-in server is connected with one agent server through SSL. Trying once more!!</h2>
      <h3>Built-in server is connected with one agent server through SSL. Trying once more!!</h3>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
