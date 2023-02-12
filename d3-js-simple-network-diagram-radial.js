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
    width: 400,
    height: 400,
    offset:20
};
let diameter = settings.height * 0.75;
let radius = diameter / 2;

var dataContainerEl = d3.select("#data-container");
var svg = d3.select("#visualizer-container");

/*Initializing the SVG element*/
svg
    .attr('width', settings.width)
    .attr('height', settings.height);



var root = d3.hierarchy(data)
    .sort((a, b) => b.height - a.height || a.data.name.localeCompare(b.data.name));



var treeLayout = d3.tree()
    .size([2 * Math.PI, radius])
    .separation(function(a, b) { 
        
        return (a.parent == b.parent ? 1 : 2) / a.depth; 
    });

    

var trData = treeLayout(root);
console.log({raw:data, root: root, links: trData.links(), nodes : trData.descendants() });

//place a g element on center
let groupCenter = svg
    .append("g")
    .attr("transform", "translate("+(settings.width/2) + ","+(settings.height/2)+")");
    

//append the link with radial link which allows to put the angle and radius
    groupCenter.selectAll(".link")
    .data(trData.links())
    .join("path")
    .attr("class", "link")
    .attr("fill", "none")
    .attr("stroke", "#ccc")
    .attr("d", d3.linkRadial()
        .angle(d => d.x)
        .radius(d => d.y));


let nodes = groupCenter
    .selectAll(".node")
    .data(root.descendants())
    .join("g")
    .attr("class", "node")
    .attr("transform", d => {
        return `rotate(${d.x * 180 / Math.PI - 90}) translate(${d.y}, 0)`
    });

nodes
    .append("circle")
    .attr("r", d => 10)
    .attr("cx", d => 0)
    .attr("cy", d => 0);

    
    var nodeDatas = root.descendants();
    
    var links = root.links();
    console.log({links: links, nodeDatas : nodeDatas});
    


