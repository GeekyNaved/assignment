import {Routes, Route} from "react-router-dom";
import BottomNavbar from "../../components/BottomNavbar";
import SideNavbar from "../../components/SideNavbar";
import Categories from "./Categories";
import Add from "./Add";
import Transactions from "../Transactions";
import Home from "../Home";
import Settings from "./Settings";
import TopNavbar from "../../components/TopNavbar";

const MainRouter = () => {
  return (
    <div className="flex flex-row w-screen h-screen overflow-x-hidden">
      <BottomNavbar />
      <SideNavbar />
      <div className="w-screen h-screen bg-slate-950 text-slate-50 overflow-y-auto">
        <TopNavbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/transactions" element={<Transactions />} />
          <Route path="/add" element={<Add />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
    </div>
  );
};

export default MainRouter;
