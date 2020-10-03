import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import NavBar from "./component/NavBar";
import Shopping from "./component/Shopping";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <NavBar />
      <div className="container">
        <Shopping />
      </div>
    </Provider>
  );
}

export default App;
