import './App.css';
import { Chart } from "react-google-charts";

const data = [
  ["Жанр", "Кол-во показанных фильмов в этом жанре"],
  ["Драма", 158],
  ["Комедия", 210],
  ["Экшен", 342],
  ["Ужасы", 64],
  ["Для детей", 139],
];

const options = {
  title: "Репертуар кинотеатров за 2023 год",
};

function App() {
  return (
    <Chart
      chartType="PieChart"
      data={data}
      options={options}
      width={"100%"}
      height={"400px"}
    />
  );
}

export default App;
