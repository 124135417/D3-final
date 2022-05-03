// d3.xml('SR-map-Skyrim_DE.svg')
//   .then(data => {
//     d3.select("#svg-container").node().append(data.documentElement)
//   });

d3.select("#svg-container").append("img")
  .attr("src","SR-map-Skyrim_DE.svg")
  .attr("width", 100)
  .attr("height", 100)