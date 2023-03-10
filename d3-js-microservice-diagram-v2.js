
var diagramData = rawData.reduce((accumulated, value, index) => {
    const nodeName = value.name;
    var node = accumulated.Nodes.find(n => n.name == nodeName);
    if (!node) {
        //copy all properties except relations
        const { relations, ...node } = value;
        accumulated.Nodes.push(node);
    }
    var newConnections = value.relations.map(r => { return { source: nodeName, target: r.name }; });
    accumulated.Connections = [...accumulated.Connections, ...newConnections];
    return accumulated;
}, { Nodes: [], Connections: [] });

console.log(diagramData);
/*Prepare Data End*/

/* Setup D3 */
var settings = {
    width: 300,
    height: 600
}

var svg =
    d3.select("#visualizer-container")
        .style("border", "black solid");

// settings.width = +svg.attr("width");
// settings.height = +svg.attr("height");
console.log(settings);


var infoGroup = svg
    .append("g")
    .attr("transform", "translate(0, 0)")
    .attr("class", "info");

var diagramGroup = svg
    .append("g")
    .attr("transform", "translate(250, 0)")
    .attr("class", "diagram");

var linesEl = diagramGroup
    .selectAll("line")
    .data(diagramData.Connections)
    .enter()
    .append("line")
    .style("stroke", "red");

var nodesElGrp = diagramGroup
    .selectAll("g.node")
    .data(diagramData.Nodes)
    .enter()
    .append("g")
    .attr("class", "node")
    .attr("transform", (d, i) => `translate(0,${(i) * 30})`);

var connector = nodesElGrp
    .append("circle")
    .style("fill", "red")
    .attr("r", 5);


var microserviceList = nodesElGrp
    .filter(d => d.type == nodeType.Microservice)
    .append("path")
    .attr("d", d3.symbol().type(hexagon).size(d => 50))
    .attr("stroke", "#2563eb")
    .attr("fill", "#93c5fd")
    .attr("class", "node")
    .call(
        d3.drag()
            .on("start", dragStarted)
            .on("end", dragEnded)
            .on("drag", dragged)
    )
    ;

    

var apigatewayList = nodesElGrp
    .filter(d => d.type == nodeType.APIGateway)
    .append("path")
    .attr("d", d3.symbol().type(apigatewaySymbol).size(d => 50))
    .attr("stroke", "#2563eb")
    .attr("fill", "#93c5fd")
    .attr("class", "node")

    ;

var apigatewayList = nodesElGrp
    .filter(d => d.type == nodeType.APIGateway)
    .append("path")
    .attr("d", d3.symbol().type(apigatewaySymbol2).size(d => 50))
    .attr("stroke", "#2563eb")
    .attr("fill", "#2563eb")
    .attr("class", "node");


    

var nodesText = nodesElGrp
    .append("text")
    .attr("text-anchor", "start")
    .attr("y", 20)
    .style("cursor", "pointer")
    .text(d => d.name);



// var nodesRect = nodesElGrp
//     .append("rect")
//     .attr("width", 100)
//     .attr("height", 30)
//     .style("fill", "none")
//     .style("stroke", "red");




console.log(rawData);
/* Setup D3 - End */

/*Force */

var forceSimulation = d3
    .forceSimulation(diagramData.Nodes)
    
    .force("link",
        d3
            .forceLink()
            .id(function (d) { return d.name })
            .links(diagramData.Connections)
    )
    .force("charge", d3.forceManyBody().strength(-900))
    .force("center", d3.forceCenter(settings.width / 2, settings.height / 2))
    .force("collision", d3.forceCollide(d => {
        var radius = 50;
        return radius;
    }))
    
    .on("tick", ticked);


function ticked() {

    linesEl
        .attr("x1", d => d.source.x)
        .attr("x2", d => d.target.x)
        .attr("y1", d => d.source.y)
        .attr("y2", d => d.target.y);

    nodesElGrp
        .attr("transform", d => `translate(${d.x},${d.y})`)
}
/*Force End*/

function dragSubject(event){
    console.log({msg:"Drag Sub", event});
    return forceSimulation.find(event.x, event.y);
}

function dragged(event, d) {
    console.log({msg:"dragged", event});
    //d3.select(this).attr("cx", d.x = event.x).attr("cy", d.y = event.y);
    event.subject.fx = event.x;
    event.subject.fy = event.y;
  }

function dragStarted(event, d){
    console.log({msg:"dragStarted", event});
    if(!event.active) forceSimulation.alphaTarget(0.3).restart();
    event.subject.fx = event.subject.x;
    event.subject.fy = event.subject.y;
    d.fixed = true;
}
function dragEnded(event, d){
    console.log({msg:"dragEnded", event});
    if(!event.active) forceSimulation.alphaTarget(0);
    event.subject.fx = null;
    event.subject.fy = null;
}

let zoom = d3.zoom()
    .on('zoom', handleZoom);

initZoom();