import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./app/pages";
import Navbar from "./app/components/core/Navbar/Navbar";

function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
