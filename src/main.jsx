import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.jsx"
import "./index.css"
import { Provider } from "react-redux"
import { persistor, store } from "./redux/store.js"
import { PersistGate } from "redux-persist/integration/react"
import axios from "axios"
axios.defaults.withCredentials = true
ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
)