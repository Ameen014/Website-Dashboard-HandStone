"use client";

import React , {useState , useEffect } from "react";
import Chart from "react-apexcharts";

export function Bar({ data }) {

  const [categories, setCategories] = useState([]);
  const [series, setSeries] = useState([]);

  useEffect(() => {
      if (Array.isArray(data) && data.length > 0) {
        setCategories([]);
        setSeries([]);
        const newCategories = data.map((item) => item.name); 
        const newSeriesData = data.map((item) => Number(item.total_amount));

        setCategories(newCategories);
        setSeries([{ name: "مصاريف دورية", data: newSeriesData }]);
      };
  }, [data]);

  const options = {
    chart: {
      id: "basic-bar",
    },
    xaxis: {
      categories,
    },
  };

  return (
    <div className="p-6 ">
        <Chart options={options} series={series} type="bar" width="66%" className="flex justify-center mt-5" />
    </div>
  );
};


// export function Radar () {
//   const [options] = useState({
//     chart: {
//       id: "radar-chart",
//     },
//     xaxis: {
//       categories: ["Math", "Science", "History", "Art", "Sports", "Music"],
//     },
//   });

//   const [series] = useState([
//     {
//       name: "Student A",
//       data: [80, 90, 85, 70, 75, 95],
//     },
//     {
//       name: "Student B",
//       data: [70, 85, 80, 60, 65, 80],
//     },
//   ]);

//   return (
//     <div>
//       <h3>Radar Chart</h3>
//       <Chart options={options} series={series} type="radar" width="500" />
//     </div>
//   );
// };


// export function Line () {


//   const [options] = useState({
//     chart: {
//       id: "line-chart",
//     },
//     xaxis: {
//       categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
//     },
//     stroke: {
//       curve: "smooth", // Makes the line smooth
//     },
//   });

//   const [series] = useState([
//     {
//       name: "series-1",
//       data: [30, 40, 35, 50, 49, 60, 70, 91],
//     },
//     {
//       name: "series-2",
//       data: [20, 30, 25, 40, 39, 50, 60, 71],
//     },
//   ]);

//   return (
//     <div>
//       <h3>Line Chart</h3>
//       <Chart options={options} series={series} type="line" width="500" />
//     </div>
//   );
// };

export function Donut ({data}) {

    const [labels , setLabels] = useState([]);
    const [series , setSeries] = useState([]);

    useEffect(() => {  
        
            if (Array.isArray(data) && data.length > 0) {  
                const newLabels = data.map((ele) => ele.name);  
                const newSeries = data.map((ele) => Number(ele.total_amount));  
                setLabels(newLabels);  
                setSeries(newSeries);  
            };    
    }, [data]);

  const options = {
    labels,
  };

  return (
    <div className="p-6">  
        <Chart options={options} series={series} type="donut" width="30%" className="flex justify-center mt-5" />  
    </div>  
  );
};


