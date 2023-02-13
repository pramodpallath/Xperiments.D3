
var settings = {
    width: 400,
    height: 400,
    offset:20
};

var customSymbolSquare = { 
    draw: function(context, size){
        let s = Math.sqrt(size)/2;
        context.moveTo(s,s);
        context.lineTo(s,-s);
        context.lineTo(-s,-s);
        context.lineTo(-s,s);
        context.closePath();
    }
}

var customSqr = d3.symbol().type(customSymbolSquare).size(500);
    var svg = d3.select("#visualizer-container");

//place a g element on center
let groupCenter = svg
    .append("g")
    .attr("transform", "translate("+(settings.width/2) + ","+(settings.height/2)+")");


groupCenter
.append("path")
.attr("size", 60)
.attr("d", customSqr);