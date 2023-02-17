var settings = {
    width: 1000,
    height: 800,
    offset: 20
};

var forcesY = {
    // 2: -100,
    // 1: 0,
    // 3: 0,
    // 4: 400,
    // 5: 0,
    // 6: 800
};
var radiuses = {
    1: 80
}
var typeRadiuses = {
    "microservice": 50,
    "apigateway": 50,
    "mobile": 50,
    "esb": 50
}
var typeXForces = {
    "microservice": 500,
    "apigateway": -400,
    "mobile": 50,
    "esb": 560,
    "bff": -400,
    "ui": 300
}
var typeYForces = {
    "microservice": 200,
    "apigateway": -400,
    "mobile": 50,
    "esb": 560,
    "bff": 400,
    "ui": 300
}

var forcesX = {
    1: settings.width / 2,
    // 7: -400,
    // 5: -500
};

var flowDetails = [
    {
        "key": "f1",
        "name": "Initiate & Fetch PWA Url"
    },
    {
        "key": "f2",
        "name": "Fetch Product Details"
    },
    {
        "key": "f3",
        "name": "Capture Customer Details"
    },
    {
        "key": "f4",
        "name": "Send Email & SMS OTP"
    },
    {
        "key": "f5",
        "name": "Mobile / Email OTP Verification"
    }

];

var data = {
    nodes: [
        { "id": 1, "name": "Orchestrator", "type": "microservice", "width": 4, "weight": 20, "distance": 5 },
        { "id": 2, "name": "API Gateway", "type": "apigateway", "width": 2, "weight": 15, "distance": 1, "flow": "f1" },
        { "id": 3, "name": "Talabat Web - PWA", "type": "ui", "width": 2, "weight": 1, "distance": 1, "flow": "f1" },
        { "id": 4, "name": "Talabat Mob - PWA", "type": "mobile", "width": 2, "weight": 5, "distance": 1, "flow": "f1" },
        { "id": 5, "name": "BFF", "type": "bff", "width": 2, "weight": 1, "distance": 1, "flow": "f2" },
        { "id": 6, "name": "PWA - Product Details", "type": "ui", "width": 2, "weight": 1, "distance": 1, "flow": "f2" },
        { "id": 7, "name": "Partner Products", "type": "microservice", "width": 2, "weight": 5, "distance": 8, "flow": "f1" },
        { "id": 8, "name": "BFF", "type": "bff", "width": 2, "weight": 1, "distance": 1, "flow": "f3" },
        { "id": 9, "name": "PWA - Capture Customer Details", "type": "ui", "width": 2, "weight": 1, "distance": 1, "flow": "f3" },
        { "id": 10, "name": "OTP Generator", "type": "microservice", "width": 2, "weight": 5, "distance": 1, "flow":"f4" },
        { "id": 11, "name": "BFF", "type": "bff", "width": 2, "weight": 1, "distance": 1, "flow":"f5" },
        { "id": 12, "name": "PWA - Validate OTP", "type": "ui", "width": 2, "weight": 1, "distance": 1, "flow":"f5" },
        { "id": 13, "name": "OTP Validation", "type": "microservice", "width": 2, "weight": 1, "distance": 1 },
        { "id": 14, "name": "Application Dedupe", "type": "microservice", "width": 2, "weight": 1, "distance": 1 },
        { "id": 15, "name": "BFF", "type": "bff", "width": 2, "weight": 1, "distance": 1 },
        { "id": 16, "name": "PWA - Employment Details", "type": "ui", "width": 2, "weight": 1, "distance": 1 },
        { "id": 17, "name": "BFF", "type": "bff", "width": 2, "weight": 1, "distance": 1 },
        { "id": 18, "name": "PWA - Upload EIDA", "type": "ui", "width": 2, "weight": 1, "distance": 1 },
        { "id": 19, "name": "OCR Parser", "type": "microservice", "width": 2, "weight": 1, "distance": 1 },
        { "id": 20, "name": "BFF", "type": "bff", "width": 2, "weight": 1, "distance": 1 },
        { "id": 21, "name": "PWA - Verify OCR", "type": "ui", "width": 2, "weight": 1, "distance": 1 },
        { "id": 22, "name": "BFF", "type": "bff", "width": 2, "weight": 1, "distance": 1 },
        { "id": 23, "name": "EFR Biometric Authentication", "type": "ui", "width": 2, "weight": 1, "distance": 1 },
        { "id": 24, "name": "EFR Authentication", "type": "microservice", "width": 2, "weight": 1, "distance": 1 },
        { "id": 25, "name": "Customer Dedupe", "type": "microservice", "width": 2, "weight": 1, "distance": 1 },
        { "id": 26, "name": "AECB", "type": "microservice", "width": 2, "weight": 1, "distance": 1 },
        { "id": 27, "name": "Internal DBR", "type": "microservice", "width": 2, "weight": 1, "distance": 1 },
        { "id": 28, "name": "Deliquency", "type": "microservice", "width": 2, "weight": 2, "distance": 1 },
        { "id": 29, "name": "BRMS", "type": "microservice", "width": 2, "weight": 1, "distance": 1 },

        //  
        // {"id":2, "name":"EFR", "type":"microservice", "width":2,"weight":1, "distance": 4},
        // {"id":3, "name":"BFF", "type":"bff", "width":2,"weight":1, "distance": 1},     
        // {"id":5, "name":"AECB", "type":"microservice", "width":2,"weight":1, "distance": 1}   ,
        // {"id":6, "name":"Internal DBR", "type":"microservice", "width":2,"weight":1, "distance": 1}   ,


    ],
    links: [
        { "source": 1, "target": 2, "flow": "f1" },
        { "source": 2, "target": 3, "flow": "f1" },
        { "source": 2, "target": 4, "flow": "f1" },
        { "source": 1, "target": 5, "flow": "f2" },
        { "source": 5, "target": 6, "flow": "f2" },
        { "source": 1, "target": 7, "flow": "f1" },
        { "source": 1, "target": 8, "flow": "f3" },
        { "source": 8, "target": 9, "flow": "f3" },
        { "source": 1, "target": 10, "flow":"f4" },
        { "source": 1, "target": 11, "flow":"f5" },
        { "source": 11, "target": 12, "flow":"f5" },
        { "source": 1, "target": 13 },
        { "source": 1, "target": 14 },
        { "source": 1, "target": 15 },
        { "source": 15, "target": 16 },
        { "source": 1, "target": 17 },
        { "source": 17, "target": 18 },
        { "source": 1, "target": 20 },
        { "source": 20, "target": 21 },
        { "source": 1, "target": 22 },
        { "source": 22, "target": 23 },
        { "source": 1, "target": 24 },
        { "source": 1, "target": 25 },
        { "source": 1, "target": 26 },
        { "source": 1, "target": 27 },
        { "source": 1, "target": 28 },
        { "source": 1, "target": 29 },
    ]
};




var hexagon = {
    draw: function (context, size) {
        var height = (Math.sqrt(3) / 2) * size;
        var width = size;
        context.moveTo(width, 0);
        context.lineTo(width / 2, height);
        context.lineTo(-width / 2, height);
        context.lineTo(-width, 0);
        context.lineTo(-width / 2, -height);
        context.lineTo(width / 2, -height);
        context.closePath();
    }
}

var uiSymbol = {
    draw: function (context, size) {
        var width = (2 / 3) * size;
        var height = size;
        context.moveTo(0, 10);
        context.lineTo(0, height);
        context.lineTo(width, height);
        context.lineTo(width, 10);
        context.lineTo(width, 0);
        context.lineTo(0, 0);


        context.closePath();
    }
}


var svg = d3.select("#visualizer-container")
    .attr('width', settings.width)
    .attr('height', settings.height);


//place a g element on center
let groupCenter = svg
    .append("g");
//.attr("transform", "translate(" + (settings.width / 2) + "," + (settings.height / 2) + ")");

var infoGroup = svg.append("g")
    .attr("class", "infogroup")
    .attr("transform", "translate(" + (0) + "," + (0) + ")")

var info = infoGroup.append("rect")
    .attr("x", 0)
    .attr("y", 0)
    .attr("height", settings.height)
    .attr("width", 300)
    .style("fill", "#fafaf9");



var ec = infoGroup
    .selectAll("g.eventcontainer")
    .data(flowDetails)
    .enter()
    .append("g")
    .attr("class", "eventcontainer")
    .attr("transform", (d, i) => "translate(" + (0) + "," + (i+1) * 30 + ")")
    ;

var ecRect = ec
    .append("rect")
    .attr("x", 0)
    .attr("y", -30)
    .attr("width", 300)
    .attr("height", 30)
    .style("fill", "#fafaf9")
    .style("stroke", "#f5f5f4");

var eventHeadings = ec
    .append("text")
    .attr("class", "event")
    .style("pointer-events", 'auto')
    .style("cursor", "pointer")
    .attr('text-anchor', 'start')
    .attr("y", -11)
    .text((d,i) => `${i+1}. ${d.name}`);

ec.on('click', function(e){
    
    //d3.event.stopPropagation();
    highlight(e, {flow: this.__data__.key});
});


// var nodes = groupCenter
//     .selectAll("g.node")
//     .data(data.nodes)
//     .join()
//     .append("g")
//     .attr("class", "node")
//     ;

// groupCenter
//     .selectAll("path.node")
//     .data(data.nodes)    
//     .enter()
//     .append("path")
//     .attr("d", d3.symbol().type(hexagon).size(80))
//     .attr("stroke", "red")
//     .attr("fill", "yellow")
//     .attr("class", "node")
//     ;

//     groupCenter
//     .selectAll("text")
//     .data(data.nodes)    
//     .enter()
//     .append("text")
//     .attr("class", "bg-indigo-200 rounded p-2")
//     .style("margin-left", d => d.depth * 10)
//     .text((d) =>{ 
//         debugger;

//         return d.name
//     })
//     ;

var link = groupCenter
    .selectAll("line")
    .data(data.links)
    .enter()
    .append("line")
    .style("stroke", "#60a5fa");

var node = groupCenter
    .selectAll("g.node")
    .data(data.nodes)
    .enter()
    .append("g")
    .attr("class", "node")
    ;



var mobileList = node
    .filter(d => d.type === "mobile")
    .append("path")
    .attr("d", "M 64.967 0 H 25.033 c -3.363 0 -6.099 2.736 -6.099 6.098 v 77.803 c 0 3.362 2.736 6.099 6.099 6.099 h 39.934 c 3.363 0 6.099 -2.736 6.099 -6.099 V 6.098 C 71.065 2.736 68.33 0 64.967 0 z M 20.935 12.417 h 48.131 v 63.67 H 20.935 V 12.417 z M 25.033 2 h 39.934 c 2.26 0 4.099 1.838 4.099 4.098 v 4.319 H 20.935 V 6.098 C 20.935 3.838 22.773 2 25.033 2 z M 64.967 88 H 25.033 c -2.26 0 -4.099 -1.839 -4.099 -4.099 v -5.814 h 48.131 v 5.814 C 69.065 86.161 67.227 88 64.967 88 z")
    .attr("stroke", "#3f3f46")
    .attr("fill", "#a1a1aa")
    .attr("class", "node")
    .attr("transform", "scale(.5) translate(-60, -60)")
    .style("fill", "#52525b");


node
    .filter(d => d.type === "mobile")
    .append("circle")
    .attr("cx", 45)
    .attr("cy", 83)
    .attr("transform", "scale(.5) translate(-60, -60)")
    .attr("r", function (d) {
        return 2;
    })
    .style("fill", "#52525b");


var apigatewayList = node
    .filter(d => d.type === "apigateway")
    .append("rect")
    .attr("x", -20)
    .attr("y", -20)
    .attr("width", 150)
    .attr("height", 40)
    .style("stroke", "#f97316")
    .attr("transform", "translate(-60, 0)")
    .style("fill", "#fdba74");

node
    .filter(d => d.type === "bff")
    .append("rect")
    .attr("x", -30)
    .attr("y", -50)
    .attr("width", 60)
    .attr("height", 100)
    .style("stroke", "#6366f1")
    .style("fill", "#c7d2fe");


var microserviceList = node
    .filter(d => d.type === "microservice")
    .append("path")
    .attr("d", d3.symbol().type(hexagon).size(d => d.width * 20))
    .attr("stroke", "#2563eb")
    .attr("fill", "#93c5fd")
    .attr("class", "node")
    ;


var uiList = node
    .filter(d => d.type === "ui")
    .append("path")
    .attr("d", "M8.89 0h105.1c4.9 0 8.89 4 8.89 8.89v102.68c0 4.88-4 8.89-8.89 8.89H8.89c-4.88 0-8.89-4-8.89-8.89V8.89C-.01 4 3.99 0 8.89 0zm57.28 91.29h30.49c1.95 0 3.54 1.61 3.54 3.54v6.69c0 1.94-1.61 3.54-3.54 3.54H66.17c-1.93 0-3.54-1.59-3.54-3.54v-6.69c0-1.95 1.59-3.54 3.54-3.54zm-39.94-30.5h70.42c1.71 0 3.27.7 4.41 1.84l.01.01a6.22 6.22 0 0 1 1.83 4.41v8.85c0 1.71-.7 3.28-1.83 4.41l-.01.01a6.22 6.22 0 0 1-4.41 1.83H26.23c-1.71 0-3.27-.7-4.41-1.83l-.01-.01a6.22 6.22 0 0 1-1.83-4.41v-8.85c0-1.71.7-3.27 1.83-4.41l.01-.01a6.223 6.223 0 0 1 4.41-1.84zm70.42 5.42H26.23c-.23 0-.44.09-.59.24-.15.15-.24.36-.24.59v8.85c0 .23.09.44.24.59.15.15.36.24.59.24h70.42c.23 0 .44-.09.59-.24.15-.15.24-.36.24-.59v-8.85c0-.23-.09-.44-.24-.59a.831.831 0 0 0-.59-.24zM26.23 33h70.42c1.71 0 3.27.7 4.41 1.83l.01.01a6.22 6.22 0 0 1 1.83 4.41v8.85c0 1.71-.7 3.28-1.83 4.41l-.01.01a6.22 6.22 0 0 1-4.41 1.83H26.23c-1.71 0-3.27-.7-4.41-1.83l-.01-.01a6.22 6.22 0 0 1-1.83-4.41v-8.85c0-1.71.7-3.27 1.83-4.41l.01-.01A6.256 6.256 0 0 1 26.23 33zm70.42 5.42H26.23c-.23 0-.44.09-.59.24-.15.15-.24.36-.24.59v8.85c0 .23.09.44.24.59.15.15.36.24.59.24h70.42c.23 0 .44-.09.59-.24.15-.15.24-.36.24-.59v-8.85c0-.23-.09-.44-.24-.59a.831.831 0 0 0-.59-.24zm18.15-11.41H8.46v82.6c0 .68.27 1.28.72 1.74.46.46 1.06.72 1.74.72H112.3c.68 0 1.28-.27 1.74-.72.46-.46.72-1.06.72-1.74v-82.6h.04zm-9.27-17.37a4.39 4.39 0 1 1-4.39 4.39 4.37 4.37 0 0 1 4.39-4.39zm-29.77 0c2.42 0 4.39 1.97 4.39 4.39s-1.97 4.39-4.39 4.39-4.39-1.97-4.39-4.39a4.37 4.37 0 0 1 4.39-4.39zm14.88 0c2.42 0 4.39 1.97 4.39 4.39s-1.97 4.39-4.39 4.39-4.39-1.97-4.39-4.39c0-2.43 1.96-4.39 4.39-4.39z")
    .attr("stroke", "#3f3f46")
    .attr("fill", "#a1a1aa")
    .style("fill-opacity", 1)
    .attr("class", "node")
    .attr("transform", "scale(.5) translate(-60, 0)")
    ;



node
    .filter(d => d.type === "esb")
    .append("rect")
    .attr("x", "0")
    .attr("y", "0")
    .attr("width", "50")
    .attr("height", "30")
    .attr("class", "node-esb-rect")
    .style("fill", "#FAFAFA")
    .style("stroke", "#78716C")
    ;

var esbList = node
    .filter(d => d.type === "esb")
    .append("path")
    .attr("d", "M86.242 18V9.273h5.267v.937H87.3v2.95h3.938v.937h-3.938v2.966h4.279V18h-5.336Zm11.945-6.546a1.338 1.338 0 0 0-.622-1.005c-.364-.239-.81-.358-1.338-.358-.387 0-.725.062-1.014.187a1.62 1.62 0 0 0-.674.516c-.159.219-.238.467-.238.746 0 .233.055.433.166.6.113.165.258.303.434.414.177.108.361.197.554.268.194.069.371.124.533.167l.886.238c.228.06.48.142.759.247.281.105.55.249.805.43.259.18.472.41.64.691.167.281.251.627.251 1.036 0 .471-.124.897-.37 1.278-.245.38-.603.683-1.075.908-.468.224-1.038.336-1.708.336-.625 0-1.167-.1-1.624-.302a2.587 2.587 0 0 1-1.074-.844 2.407 2.407 0 0 1-.439-1.257h1.091c.029.33.14.602.333.818.196.213.443.372.741.477.301.103.625.154.972.154a2.86 2.86 0 0 0 1.086-.196c.321-.134.576-.318.763-.554.188-.239.281-.517.281-.835 0-.29-.08-.526-.243-.708a1.782 1.782 0 0 0-.639-.443 6.7 6.7 0 0 0-.856-.298l-1.074-.307c-.682-.196-1.222-.476-1.62-.84-.397-.363-.596-.839-.596-1.427 0-.489.132-.915.396-1.278.267-.367.625-.651 1.074-.853a3.627 3.627 0 0 1 1.513-.307c.562 0 1.062.101 1.5.303.437.199.784.472 1.04.818.258.347.394.74.409 1.18h-1.023Zm2.88 6.546V9.273h3.051c.608 0 1.109.105 1.504.315.395.207.689.487.882.84.193.349.29.737.29 1.163 0 .375-.067.685-.2.929a1.56 1.56 0 0 1-.52.58 2.367 2.367 0 0 1-.695.315v.085c.267.017.536.11.805.281.27.17.496.415.678.733.182.318.273.708.273 1.168 0 .437-.1.83-.299 1.18-.198.35-.512.627-.941.831-.429.205-.988.307-1.675.307h-3.153Zm1.056-.938h2.097c.69 0 1.18-.133 1.47-.4.293-.27.439-.597.439-.98 0-.296-.075-.568-.226-.818a1.632 1.632 0 0 0-.643-.606 2.02 2.02 0 0 0-.989-.23h-2.148v3.034Zm0-3.954h1.961c.318 0 .605-.063.86-.188.259-.124.463-.3.614-.528a1.4 1.4 0 0 0 .23-.801c0-.384-.133-.709-.4-.976-.267-.27-.691-.405-1.27-.405h-1.995v2.898Z")
    .attr("stroke", "#3f3f46")
    .attr("fill", "#a1a1aa")    
    .attr("class", "node")
    .attr("transform", "scale(1) translate(-70 0)")
    ;






node
    .append("text")
    .attr('text-anchor', 'middle')
    .text(d => `${d.name} (${d.id})`);


var nodeList = node
    .append("circle")
    .attr("r", function (d) {
        var radius = 20;
        if (radiuses[d.id]) {
            radius = radiuses[d.id];
        }
        else if (typeRadiuses[d.type]) {
            radius = typeRadiuses[d.type];
        }
        return radius;
    })
    .style("fill", "none");


uiList
    // .on('mouseover',function(d){
    //     uiList
    //         .transition().duration(200)
    //         .style('fill', 'blue');
    // })
    // .on('mouseout',function(d){
    //     uiList
    //     .transition().duration(200)
    //     .style('fill', 'orange');
    // })
    .on('click', function (e) {
        debugger;
        highlight(e, this.__data__);
    });


microserviceList
    .on('click', function (e) {
        debugger;
        highlight(e, this.__data__);
    });

apigatewayList
    .on('click', function (e) {
        debugger;
        highlight(e, this.__data__);
    });

mobileList
    .on('click', function (e) {
        debugger;
        highlight(e, this.__data__);
    });

function highlight(e, selectedData) {
    console.log(e);
    link
        .style('stroke-width', 2)
    uiList
        .filter(d => d.id == selectedData.id)
        .transition().duration(200)
        .style('fill', 'green');

    link
        .filter(d => d.flow == selectedData.flow)
        .transition().duration(200)
        .style("stroke", "#2563eb")
        .style('stroke-width', 5);

    node.
        classed('highlight', false);

    node
        .filter(d => d.flow == selectedData.flow)
        .transition().duration(200)
        .attr('class', 'highlight');

        ec.attr("class", "");
        ec
            .filter(d => d.key == selectedData.flow)
            .transition().duration(200)
            .attr("class", "highlight");
            ecRect
            .transition().duration(200)
            .style("fill", "#fafaf9");
            
            ecRect
            .filter(d => d.key == selectedData.flow)
            .transition().duration(200)
            .style("fill", "#e7e5e4");

}


var centerAttractionsHeight = {
    2: 200
}

var simulation = d3.forceSimulation(data.nodes)

    .force("link", d3.forceLink()
        .id(function (d) { return d.id; })
        .links(data.links)
    )
    //.force("charge", d3.forceManyBody().strength(-900))//repulse
    //.force("collision", d3.forceCollide(d => 30))   
    //.force("x", d3.forceX(settings.width).strength(0.4))
    //.force("y", d3.forceY(settings.height).strength(0.2))
    .force("charge", d3.forceManyBody().strength(d => d.weight * -600))//repulse
    .force("center", d3.forceCenter(settings.width - 100, settings.height - 450))//attract to center
    .force("y", d3.forceY(d => {
        //debugger;
        // if (forcesY[d.id]) {
        //     return forcesY[d.id];
        // }
        if (typeYForces[d.id]) {
            return typeYForces[d.id];
        }
        return null;
    }))
    .force("x", d3.forceX(d => {
        //debugger;
        if (forcesX[d.id]) {
            return forcesX[d.id];
        }
        if (typeXForces[d.id]) {
            return typeXForces[d.id];
        }
        return null;
    }))
    // .force("y", d3.forceY(d=>{
    //     var h = centerAttractionsHeight[d.id] ??  500;
    //     return h;
    // }).strength(1))       
    .force("collision", d3.forceCollide(d => {
        var radius = 20;
        if (radiuses[d.id]) {
            radius = radiuses[d.id];
        }
        else if (typeRadiuses[d.type]) {
            radius = typeRadiuses[d.type];
        }
        return radius + 5;
    }))
    .on("tick", ticked)
    ;
var radius = 400;

function ticked() {

    link
        .attr("x1", function (d) {
            //debugger;
            return d.source.x;
        })
        .attr("y1", function (d) { return d.source.y; })
        .attr("x2", function (d) { return d.target.x; })
        .attr("y2", function (d) { return d.target.y; });

    node
        .attr("transform", function (d) {
            // d.x = Math.max(radius, Math.min(width - radius, d.x));
            //  d.y = Math.max(radius, Math.min(height - radius, d.y));
            return "translate(" + d.x + "," + (d.y) + ")";
        })
    // .attr("cx", function(d){return d.x+6;})
    // .attr("cy", function(d){return d.y-6;})


}

let zoom = d3.zoom()
    .on('zoom', handleZoom);

function handleZoom(e) {
    console.log(`zoom ${e.transform}`)
    d3
        .select('svg g')
        .attr('transform', e.transform);

}

function initZoom() {
    d3.select('svg')
        .call('zoom');
}

function zoomIn() {
    d3.select('svg')
        .transition()
        .call(zoom.scaleBy, 1.25);
}

function zoomOut() {
    d3.select('svg')
        .transition()
        .call(zoom.scaleBy, 0.75);
}

function resetZoom() {
    d3.select('svg')
        .transition()
        .call(zoom.scaleTo, 1);
}

function center() {
    d3.select('svg')
        .transition()
        .call(zoom.translateTo, 0.5 * width, 0.5 * height);
}

function panLeft() {
    d3.select('svg')
        .transition()
        .call(zoom.translateBy, -50, 0);
}

function panRight() {
    d3.select('svg')
        .transition()
        .call(zoom.translateBy, 50, 0);
}


//zoomIn();