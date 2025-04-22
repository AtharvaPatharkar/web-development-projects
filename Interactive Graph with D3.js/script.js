// D3.js Code for Interactive Graph
document.addEventListener("DOMContentLoaded", () => {
    const svgWidth = 1000;
    const svgHeight = 500;

    // Set up SVG canvas
    const svg = d3.select("#chart")
        .append("svg")
        .attr("width", svgWidth)
        .attr("height", svgHeight)
        .style("background", "#eaeaea")
        .style("border-radius", "8px");

    // Sample Data
    const data = [10, 15, 20, 25, 30, 35, 40, 45];

    // Margins and dimensions
    const margins = { top: 20, right: 30, bottom: 30, left: 50 };
    const chartWidth = svgWidth - margins.left - margins.right;
    const chartHeight = svgHeight - margins.top - margins.bottom;

    // Scales
    const xScale = d3.scaleBand()
        .domain(data.map((_, i) => i))
        .range([0, chartWidth])
        .padding(0.4);

    const yScale = d3.scaleLinear()
        .domain([0, d3.max(data)])
        .range([chartHeight, 0]);

    // Append group for chart
    const chartGroup = svg.append("g")
        .attr("transform", `translate(${margins.left},${margins.top})`);

    // Add bars
    chartGroup.selectAll(".bar")
        .data(data)
        .enter()
        .append("rect")
        .attr("class", "bar")
        .attr("x", (d, i) => xScale(i))
        .attr("y", d => yScale(d))
        .attr("width", xScale.bandwidth())
        .attr("height", d => chartHeight - yScale(d))
        .attr("fill", "teal")
        .on("mouseover", function () {
            d3.select(this).attr("fill", "orange");
        })
        .on("mouseout", function () {
            d3.select(this).attr("fill", "teal");
        });

    // Add X axis
    chartGroup.append("g")
        .attr("transform", `translate(0, ${chartHeight})`)
        .call(d3.axisBottom(xScale).tickFormat(d => `Item ${d + 1}`));

    // Add Y axis
    chartGroup.append("g")
        .call(d3.axisLeft(yScale));
});
