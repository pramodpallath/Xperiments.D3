var data = {
    "name": "S1", "children": [
        { "name": "C" },
        {
            "name": "D", "children": [
                { "name": "F" },
                { "name": "E" }
            ]
        },
        { "name": "B" }
    ]
};

var settings = {
    width:500,
    height:500
};

var svg = d3.select("#visualizer-container");
    
    /*Initializing the SVG element*/
    svg
        .attr('width', settings.width)
        .attr('height', settings.height);

var root = d3.hierarchy(data)
    .sort((a, b) => b.height - a.height || a.data.name.localeCompare(b.data.name));

var radius = 100;

var treeLayout = d3.tree()
    .size([580, 80]);
var treeLayout = d3.cluster()
    .size([360, radius]);

treeLayout(root);
console.log(root);



svg.select('g.links')
    .selectAll('line.link')
    .data(root.links())
    .enter()
    .append('line')
    .attr('x1', function (d) { return d.source.x; })
    .attr('y1', function (d) { return d.source.y; })
    .attr('x2', function (d) { return d.target.x; })
    .attr('y2', function (d) { return d.target.y; })
    .attr('stroke', "darkgray")
    .attr('stroke-width', 2);

var placeHolders = svg.select('g.nodes')
    .selectAll('circle.node')
    .data(root.descendants())
    .enter()
    .append("g")
    .attr("transform", function (d) { return "translate(" + d.x + "," + d.y + ")" });

placeHolders.append('circle')
    //.attr('cx', function(d) {return d.x;})
    //.attr('cy', function(d) {return d.y;})
    .attr('r', 10)
    .attr("fill", "lightblue")
    .attr('stroke', "darkgray")
    .attr('stroke-width', 1);

placeHolders.append("text")
    .attr("dx", function (d) { return 20 })
    .text(function (d, i) {
        console.log(d);
        return d.data.name;
    });