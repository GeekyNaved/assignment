import {useState, useEffect} from "react";
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
  const [isMobile, setIsMobile] = useState(Boolean);
  // check user's device is mobile or desktop to bottomNavbar on mobile & sideNavbar in desktops
  useEffect(() => {
    const userAgent = navigator.userAgent || window.opera;
    setIsMobile(
      /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(
        userAgent.toLowerCase()
      )
    );
  }, []);

  return (
    <div className="flex flex-row w-screen h-screen overflow-x-hidden">
      {isMobile ? <BottomNavbar /> : <SideNavbar />}
      <div className="w-screen h-screen bg-blue-50 overflow-y-auto">
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
