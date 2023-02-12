var data = {
    "name": "Pramod", "children": [
        { "name": "Software", "children": [
            {"name":"Microservices"},
            
            {"name":"D3.js"}
        ] },
        {
            "name": "D", "children": [
                { "name": "F" },
                { "name": "E" }
            ]
        },
        { "name": "Finance" }
    ]
};

var settings = {
    width: 500,
    height: 500,
    offset:20
};

var dataContainerEl = d3.select("#data-container");
var svg = d3.select("#visualizer-container");

/*Initializing the SVG element*/
svg
    .attr('width', settings.width)
    .attr('height', settings.height);


var root = d3.hierarchy(data)
    .sort((a, b) => b.height - a.height || a.data.name.localeCompare(b.data.name));

var radius = 100;

var treeLayout = d3.cluster()
    .size([settings.width, settings.height - (settings.offset * 2)]);

treeLayout(root);
console.log(root);

dataContainerEl
    .selectAll("p")
    .data(root.descendants())
    .join("p")
    .attr("class", "bg-indigo-200 rounded p-2")
    .style("margin-left", d => d.depth * 10)
    .text((d) => {

        return d.data.name + "depth:" + d.depth + " x:" + d.x + " y:" + d.y
    })

    

    svg
    .selectAll("line")
    .data(root.links())
    .join("line")
    .attr("x1", d => d.source.x)
    .attr("y1", d => d.source.y + settings.offset)
    .attr("x2", d => d.target.x)
    .attr("y2", d => d.target.y + settings.offset)
    .style("stroke", "rgb(255,0,0)")
    .style("stroke-width", 1);


var gNodes = svg
    .selectAll("g.node")
    .attr("fill", "#40F99B")
    .data(root.descendants())
    .join("g")
    .attr("transform", function (d) { return "translate(" + d.x + "," + (d.y+ settings.offset) + ")" });

gNodes
    .append("circle")
    .attr("r", d => 10)
    .attr("cx", d => 0)
    .attr("cy", d => 0);

gNodes
    .append("text")
    .attr("dx", 20)
    .text(d => d.data.name);


