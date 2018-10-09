import React from "react"
import ReactDOM from "react-dom"

import { Wrapper, World, Wall, Hole, Player } from "./components/styled"
import { PlayerMover, WallMover, Tracker } from "./components"

function App() {
  return <div className="App" />
}

const rootElement = document.getElementById("root")
ReactDOM.render(<App />, rootElement)
