import Home from "./components/Home";
import Loans from "./components/Loans";
import More from "./components/More";
import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/loans" element={<Loans />} />
        <Route path="/more" element={<More />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Nav />
    </>
  );
}

export default App;
