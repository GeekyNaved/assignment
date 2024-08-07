import BarChart from "../components/BarChart";
import Feedback from "../components/Feedback";
import NetProfitCard from "../components/NetProfitCard";
import OptionsCard from "../components/OptionsCard";
import SmallCard from "../components/SmallCard";

const Home = () => {
  return (
    <div className="p-5 pb-20">
      <h2 className="text-4xl font-bold">Dashboard</h2>
      <main className="grid md:grid-cols-3 gap-5 mt-5">
        <section className="col-span-2 flex flex-col gap-5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            <SmallCard profit={true} />
            <SmallCard profit={false} />
            <SmallCard profit={true} />
            <SmallCard profit={false} />
          </div>
          <BarChart />
        </section>
        <section className="md:col-span-1 col-span-2 flex flex-col gap-5">
          <NetProfitCard />
          <OptionsCard />
          <Feedback />
        </section>
      </main>
    </div>
  );
};

export default Home;
