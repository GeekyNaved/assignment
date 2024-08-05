import {NavLink} from "react-router-dom";
import {FaHome, FaPlus} from "react-icons/fa";
import {MdCategory, MdDonutSmall} from "react-icons/md";
import {IoLogOut} from "react-icons/io5";
import {IoMdSettings} from "react-icons/io";
import { TbFlower } from "react-icons/tb";

const SideNavbar = () => {
  const logout = () => {
    alert("Are you sure ?");
  };
  return (
    // <div className="fixed top-0 flex flex-col h-full bg-orange-400 ">
    <div className="bg-slate-900 text-slate-50 flex flex-col w-15">
      <div className="flex-1">
        <div className="py-5 px-3 flex items-center justify-center text-4xl font-medium text-white">
          <TbFlower />
        </div>
        <NavLink
          to="/"
          className={({isActive}) =>
            isActive
              ? "text-blue-500 flex items-center gap-2 p-5"
              : " flex items-center gap-2 p-5"
          }
        >
          <FaHome className="text-2xl" />
        </NavLink>
        <NavLink
          to="/transactions"
          className={({isActive}) =>
            isActive
              ? "text-blue-500 flex items-center gap-2 p-5"
              : " flex items-center gap-2 p-5"
          }
        >
          <MdDonutSmall className="text-2xl" />
        </NavLink>
        <NavLink
          to="/add"
          className={({isActive}) =>
            isActive
              ? "text-blue-500 flex items-center gap-2 p-5"
              : " flex items-center gap-2 p-5"
          }
        >
          <FaPlus className="text-2xl" />
        </NavLink>
        <NavLink
          to="/categories"
          className={({isActive}) =>
            isActive
              ? "text-blue-500 flex items-center gap-2 p-5"
              : " flex items-center gap-2 p-5"
          }
        >
          <MdCategory className="text-2xl" />
        </NavLink>
        <NavLink
          to="/settings"
          className={({isActive}) =>
            isActive
              ? "text-blue-500 flex items-center gap-2 p-5"
              : " flex items-center gap-2 p-5"
          }
        >
          <IoMdSettings className="text-2xl" />
        </NavLink>
      </div>
      <div>
        <button className="flex items-center gap-2 p-5" onClick={logout}>
          <IoLogOut className="text-2xl" />
        </button>
      </div>
    </div>
  );
};

export default SideNavbar;
