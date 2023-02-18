debugger;
var svg = d3.select("svg"),
    width = +svg.attr("width"),
    height = +svg.attr("height"),
    transform = d3.zoomIdentity;;

var points = d3.range(2000).map(phyllotaxis(10));

var g = svg.append("g");

g.selectAll("circle")
    .data(points)
  .enter().append("circle")
    .attr("cx", function(d) { return d.x; })
    .attr("cy", function(d) { return d.y; })
    .attr("r", 2.5)
    .call(d3.drag()
        .on("drag", dragged));

svg.call(d3.zoom()
    .scaleExtent([1 / 2, 8])
    .on("zoom", zoomed));

function zoomed(event) {
    debugger;
  g.attr("transform", event.transform);
}

function dragged(event, d) {
    debugger;
  d3.select(this).attr("cx", d.x = event.x).attr("cy", d.y = event.y);
}

function phyllotaxis(radius) {
  var theta = Math.PI * (3 - Math.sqrt(5));
  return function(i) {
    var r = radius * Math.sqrt(i), a = theta * i;
    return {
      x: width / 2 + r * Math.cos(a),
      y: height / 2 + r * Math.sin(a)
    };
  };
}