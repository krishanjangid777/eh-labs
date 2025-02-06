import { BrowserRouter, Route, Routes } from "react-router-dom"
import { BackgroundBeamsWithCollisionDemo } from "./pages/Home"
import Navbar from "./components/utils/Navbar"

function App() {

  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/" element={<BackgroundBeamsWithCollisionDemo />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
