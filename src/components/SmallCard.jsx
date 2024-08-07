/* eslint-disable react/prop-types */
import {FaCaretDown, FaCaretUp} from "react-icons/fa";
import {FaBagShopping} from "react-icons/fa6";

const SmallCard = ({profit}) => {
  return (
    <div className="bg-slate-800 text-slate-50 rounded-md p-4">
      <div className="flex justify-between">
        <div className="bg-blue-500 rounded-md p-2 text-2xl">
          <FaBagShopping />
        </div>
        <p className="hidden">hidden</p>
      </div>
      <p className="text-md pt-3">Total Orders</p>
      <div className="flex justify-between items-center pt-4">
        <p className="text-3xl font-bold">75</p>
        <div className="flex gap-1 items-center">
          {profit ? (
            <>
              <FaCaretUp className="text-green-600" />
              <p className="text-md text-green-600 font-bold">3%</p>
            </>
          ) : (
            <>
              <FaCaretDown className="text-red-600" />
              <p className="text-md text-red-600 font-bold">3%</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default SmallCard;
