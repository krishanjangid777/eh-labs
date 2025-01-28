import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./app/components";
import { Home } from "./app/pages";

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
