import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import store from "./Store";
import { Provider } from "react-redux";
import { ContextProvider } from "./Components/Context/ContextProvider";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ContextProvider>
    <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
  </ContextProvider>
  
);
