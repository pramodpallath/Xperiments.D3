var data = {
    "name": "Software", "children": [
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
    height:200
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

var treeLayout = d3.tree()
    .size([settings.width, settings.height]);

treeLayout(root);
console.log(root);

dataContainerEl
    .selectAll("p")
    .data(root.descendants())
    .join("p")
    .attr("class", "bg-indigo-200 rounded p-2")
    .style("margin-left", d => d.depth * 10)
    .text((d) =>{ 
        
        return d.data.name + "depth:"+d.depth + " x:"+d.x + " y:"+d.y})


svg
    .selectAll("circle")
    .data(root.descendants())
    .join("circle")
    .attr("r", d => (d.height+1) * 10)
    .attr("cx", d => d.x)
    .attr("cy", d => d.y);

    
    
svg
.selectAll("line")
.data(root.links())
.join("line")
.attr("x1", d => d.source.x)
   .attr("y1", d => d.source.y)
   .attr("x2", d => d.target.x) 
   .attr("y2", d => d.target.y)
   .style("stroke", "rgb(255,0,0)")
   .style("stroke-width", 2);
