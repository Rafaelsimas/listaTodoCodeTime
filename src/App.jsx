import { useState } from "react"
import Login from "./Components/Login/Login"
import Todo from "./Components/ToDo/ToDo"
import { BrowserRouter, Routes, Route } from "react-router-dom"

export default function App() {
  const [nameUser, setNameUser] = useState()

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Login />} />
          <Route path="/gerenciador" exact element={<Todo />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
