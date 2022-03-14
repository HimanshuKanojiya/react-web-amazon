import React from "react";
import faker from "faker";
import "./App.css";
import { amazonStore } from "store/store";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={amazonStore}>
      <div className="App">
        <header className="App-header">
          <img src={faker.image.abstract()} className="App-logo" alt="logo" />
          <p>{faker.name.firstName(0)}</p>
          <a
            className="App-link"
            href={faker.internet.url()}
            target="_blank"
            rel="noopener noreferrer"
          >
            This is staging branch, so development will be saved here first
          </a>
        </header>
      </div>
    </Provider>
  );
}

export default App;
