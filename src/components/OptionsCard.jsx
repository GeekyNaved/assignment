import {BiDish} from "react-icons/bi";
import {GoGoal} from "react-icons/go";
import {IoIosArrowForward} from "react-icons/io";
import {MdOutlineRestaurantMenu} from "react-icons/md";

const OptionsCard = () => {
  return (
    <div className="bg-slate-800 text-slate-50 rounded-md p-4 flex flex-col gap-2">
      <div className="flex justify-between items-center">
        <div className="flex gap-2 items-center mt-2">
          <div className="bg-red-400 text-red-600 rounded-full p-4 text-2xl">
            <GoGoal />
          </div>
          <p className="text-xl text-slate-50">Goals</p>
        </div>
        <div className="bg-slate-500 text-slate-50 rounded-full p-1 text-xl">
          <IoIosArrowForward />
        </div>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex gap-2 items-center mt-2">
          <div className="bg-blue-400 text-blue-600 rounded-full p-4 text-2xl">
            <BiDish />
          </div>
          <p className="text-xl text-slate-50">Popular Dishes</p>
        </div>
        <div className="bg-slate-500 text-slate-50 rounded-full p-1 text-xl">
          <IoIosArrowForward />
        </div>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex gap-2 items-center mt-2">
          <div className="bg-teal-400 text-teal-600 rounded-full p-4 text-2xl">
            <MdOutlineRestaurantMenu />
          </div>
          <p className="text-xl text-slate-50">Menus</p>
        </div>
        <div className="bg-slate-500 text-slate-50 rounded-full p-1 text-xl">
          <IoIosArrowForward />
        </div>
      </div>
    </div>
  );
};

export default OptionsCard;
