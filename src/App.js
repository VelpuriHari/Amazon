import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Comp from "./Comp";
import SingleItem from "./SingleItemDetails";
import Cart from "./Cart";
import SignIn from "./singin";
import SideMenu from "./sideMenuBar";
import CreateAccount from "./createAccount";
import Buy from "./Buy";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/app/:item" element={<Comp />} />
        <Route path="/item/:item/:Id" element={<SingleItem />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/create account" element={<CreateAccount />} />
        <Route path="/sideMenuBar" element={<SideMenu />} />
        <Route path="/buy/:item/:id" element={<Buy />} />
      </Routes>
    </>
  );
}

export default App;
