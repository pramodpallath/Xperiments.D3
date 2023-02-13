var roleScale = d3.scaleOrdinal()
  .range(["#75739F", "#41A368", "#FE9922"])

var sampleData = d3.range(100).map((d,i) => ({r: 50 - i * .5,  value: 200 + d3.randomNormal()() * 50}))      

var manyBody = d3.forceManyBody().strength(10)                      
var center = d3.forceCenter().x(250).y(250)                          

 var force = d3.forceSimulation()
    .force("charge", manyBody)                                        
    .force("center", center)                             
    .force("collision", d3.forceCollide(d => d.r + 10))     
    .force("x", d3.forceX(100))    
    .force("y", d3.forceY(d => d.value).strength(3))       
    .nodes(sampleData)                                                
    .on("tick", updateNetwork)                                        

d3.select("svg")
    .attr("width", 800)
   .selectAll("circle")
   .data(sampleData)                                                 
   .enter()
   .append("circle")
   .style("fill", (d, i) => roleScale(i))
   .attr("r", d => d.r)

function updateNetwork() {
   d3.selectAll("circle")
     .attr("cx", d => d.x)                                           
     .attr("cy", d => d.y)
}