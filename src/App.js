import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Comp from "./Comp";
import SingleItem from "./SingleItemDetails";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/app" element={<Comp />} />
        <Route path="/item" element={<SingleItem />} />
      </Routes>
    </>
  );
}

export default App;
