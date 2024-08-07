import {FaStar} from "react-icons/fa";
import {RxAvatar} from "react-icons/rx";

const Feedback = () => {
  return (
    <div className="bg-slate-800 text-slate-50 rounded-md p-4">
      <h1 className="text-2xl">Customer's Feedback</h1>
      {/* single customer section*/}
      <section className="flex flex-col gap-2 mt-5 pb-5 border-b-2">
        <div className="flex gap-1 items-center">
          <RxAvatar className="text-4xl" />
          <p className="text-xl">Jenny Wilson</p>
        </div>
        <div className="flex gap-1 items-center flex-row">
          <FaStar className="text-yellow-400" />
          <FaStar className="text-yellow-400" />
          <FaStar className="text-yellow-400" />
          <FaStar className="text-yellow-400" />
          <FaStar />
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat
          vero dolores similique repellendus porro aliquam, corrupti explicabo
          ex?
        </p>
      </section>
      {/* single customer section*/}
      <section className="flex flex-col gap-2 mt-5 pb-5 border-b-2">
        <div className="flex gap-1 items-center">
          <RxAvatar className="text-4xl" />
          <p className="text-xl">Jenny Wilson</p>
        </div>
        <div className="flex gap-1 items-center flex-row">
          <FaStar className="text-yellow-400" />
          <FaStar className="text-yellow-400" />
          <FaStar className="text-yellow-400" />
          <FaStar className="text-yellow-400" />
          <FaStar />
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat
          vero dolores similique repellendus porro aliquam, corrupti explicabo
          ex?
        </p>
      </section>
      {/* single customer section*/}
      <section className="flex flex-col gap-2 mt-5 pb-5 border-b-2">
        <div className="flex gap-1 items-center">
          <RxAvatar className="text-4xl" />
          <p className="text-xl">Jenny Wilson</p>
        </div>
        <div className="flex gap-1 items-center flex-row">
          <FaStar className="text-yellow-400" />
          <FaStar className="text-yellow-400" />
          <FaStar className="text-yellow-400" />
          <FaStar className="text-yellow-400" />
          <FaStar />
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat
          vero dolores similique repellendus porro aliquam, corrupti explicabo
          ex?
        </p>
      </section>
    </div>
  );
};

export default Feedback;
