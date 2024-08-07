import {Bar} from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import {BiCaretDown} from "react-icons/bi";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChart = () => {
  const data = {
    labels: [
      "5",
      "9",
      "11",
      "13",
      "15",
      "17",
      "19",
      "21",
      "23",
      "25",
      "27",
      "29",
    ],
    datasets: [
      {
        data: [65, 49, 80, 81, 56, 55, 20, 29, 40, 66, 10, 18],
        backgroundColor: "rgb(59 130 246)",
        borderRadius: 50,
        barThickness: 30, // bar width
      },
    ],
  };
  const dataForMobile = {
    labels: [
      "5",
      "9",
      "11",
      "13",
      "15",
      "17",
      "19",
      "21",
      "23",
      "25",
      "27",
      "29",
    ],
    datasets: [
      {
        data: [65, 49, 80, 81, 56, 55, 20, 29, 40, 66, 10, 18],
        backgroundColor: "rgb(59 130 246)",
        borderRadius: 50,
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        stacked: false,
      },
    },
  };

  return (
    <div className="bg-slate-800 text-slate-50 rounded-md p-4">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Activity</h1>
        <div className="flex gap-1 items-center p-2 bg-slate-500 border-1 border-slate-50 rounded-xl">
          <p>Weekly</p>
          <BiCaretDown />
        </div>
      </div>
      <div className="hidden md:block w-full mt-7 h-36">
        <Bar data={data} options={options} />
      </div>
      <div className="md:hidden w-full mt-5 h-36">
        <Bar data={dataForMobile} options={options} />
      </div>
    </div>
  );
};

export default BarChart;
