"use strict";

// Using / Accessing:
let myChart = echarts.init(document.getElementById("main"));

//

// Specify the configuration items and data for the chart
let options = {
  title: {
    text: "Fake Store Categories",
  },
  xAxis: {
    data: ["Category 1", "Category 2", "Category 3", "Category 4"],
  },
  yAxis: {},
  series: [
    {
      name: "# products",
      type: "bar",
      data: [0, 1, 5, 2],
    },
  ],
};

// fetch("https://fakestoreapi.com/products")
//   .then((response) => response.json())
//   .then((json) => {
//     console.log(json);
//     // use this JSON to find and set correct option data for the chart
//   })
//   .then(() => {
//     // Display the chart
//     myChart.setOption(options);
//   });

//
// Using Axios to fetch the data
axios.get("https://fakestoreapi.com/products").then((response) => {
  const products = response.data;

  const categoryCounts = {};

  products.forEach((product) => {
    const category = product.category;

    if (categoryCounts[category]) {
      categoryCounts[category]++;
    } else {
      categoryCounts[category] = 1;
    }
  });

  options.xAxis.data = Object.keys(categoryCounts);
  options.series[0].data = Object.values(categoryCounts);

  myChart.setOption(options);
});
