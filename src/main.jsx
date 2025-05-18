import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.jsx"
import "./App.css"

// Make sure the DOM is fully loaded before rendering
document.addEventListener("DOMContentLoaded", () => {
  const rootElement = document.getElementById("root")

  if (rootElement) {
    ReactDOM.createRoot(rootElement).render(
      <React.StrictMode>
        <App />
      </React.StrictMode>,
    )
  } else {
    console.error("Cannot find element with id 'root'")
  }
})
