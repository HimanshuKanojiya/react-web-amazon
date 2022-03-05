import React from "react";
import faker from "faker";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={faker.image.animals()} className="App-logo" alt="logo" />
        <p>{faker.name.firstName(0)}</p>
        <a
          className="App-link"
          href={faker.internet.url()}
          target="_blank"
          rel="noopener noreferrer"
        >
          {faker.name.firstName()}
        </a>
      </header>
    </div>
  );
}

export default App;
