import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Navbar from "./components/utils/Navbar"
import Footer from "./components/core/Footer"
import Events from "./pages/Events"
import Customers from "./pages/Customers"
import Company from "./pages/Company"

function App() {

  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/events" element={<Events />}/>
        <Route path="/customers" element={<Customers />}/>
        <Route path="/company" element={<Company />}/>
      </Routes>
    <Footer />
    </BrowserRouter>
  )
}

export default App
