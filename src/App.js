import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Loans from "./pages/Loans";
import More from "./pages/More";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/loans" element={<Loans />} />
        <Route path="/more" element={<More />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
