import {FaCaretDown} from "react-icons/fa";

const NetProfitCard = () => {
  return (
    <div className="bg-slate-800 text-slate-50 rounded-md p-4">
      <div className="flex justify-between items-center">
        <div>
          <p className="text-md">Net Profit</p>
          <p className="text-2xl md:text-3xl py-4">$6759.25</p>
          <div className="flex gap-1 items-center mt-4">
            <FaCaretDown className="text-red-600" />
            <p className="text-md text-red-600 font-bold">3%</p>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="border-4 rounded-full border-blue-500 p-5 md:p-6">
            <p>70%</p>
          </div>
          <p className="text-xs mt-1 text-center">
            The value here has been rounded off
          </p>
        </div>
      </div>
    </div>
  );
};

export default NetProfitCard;
