import {AiOutlineUser} from "react-icons/ai";
import {CiMail} from "react-icons/ci";
import {IoIosNotificationsOutline} from "react-icons/io";
import {NavLink} from "react-router-dom";
import SearchInputField from "./SearchInputField";

const TopNavbar = () => {
  return (
    <div className="bg-slate-900 text-slate-50">
      <div className="flex justify-between items-center h-20 px-2 md:px-4">
        <SearchInputField />
        <div className="flex gap-6 cursor-pointer">
          <NavLink
            to="/search"
            className="md:text-2xl underline underline-offset-4 decoration-2 decoration-slate-50"
          >
            <CiMail className="hover:text-blue-300" />
          </NavLink>
          <NavLink
            to="/cart"
            className="md:text-2xl  underline underline-offset-4 decoration-2 decoration-slate-50"
          >
            <IoIosNotificationsOutline className="hover:text-blue-300" />
          </NavLink>
          <NavLink
            to="/account"
            className="md:text-2xl  underline underline-offset-4 decoration-2 decoration-slate-50"
          >
            <AiOutlineUser className="hover:text-blue-300" />
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default TopNavbar;
