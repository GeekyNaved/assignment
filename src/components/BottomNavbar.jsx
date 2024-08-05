import {
  AiOutlineHome,
  AiOutlineSearch,
  AiOutlineShoppingCart,
  AiOutlineUser,
} from "react-icons/ai";
import {NavLink} from "react-router-dom";

const BottomNavbar = () => {
  return (
    <div className="md:hidden bg-slate-900 text-slate-50 font-bold fixed bottom-0 grid grid-cols-4 min-w-full">
      <NavLink
        to="/"
        className={({isActive}) =>
          isActive
            ? "text-blue-500 flex flex-col items-center px-4 py-5"
            : "flex flex-col items-center px-4 py-5"
        }
      >
        <AiOutlineHome className="text-2xl" />
      </NavLink>
      <NavLink
        to="/transactions"
        className={({isActive}) =>
          isActive
            ? "text-blue-500 flex flex-col items-center px-4 py-5"
            : "flex flex-col items-center px-4 py-5"
        }
      >
        <AiOutlineUser className="text-2xl" />
      </NavLink>
      <NavLink
        to="/categories"
        className={({isActive}) =>
          isActive
            ? "text-blue-500 flex flex-col items-center px-4 py-5"
            : "flex flex-col items-center px-4 py-5"
        }
      >
        <AiOutlineSearch className="text-2xl" />
      </NavLink>
      <NavLink
        to="/settings"
        className={({isActive}) =>
          isActive
            ? "text-blue-500 flex flex-col items-center px-4 py-5"
            : "flex flex-col items-center px-4 py-5"
        }
      >
        <AiOutlineShoppingCart className="text-2xl" />
      </NavLink>
    </div>
  );
};

export default BottomNavbar;
