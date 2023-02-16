
var settings = {
    width: 400,
    height: 400,
    offset:20
};

/*
        var _s32 = (Math.sqrt(3)/2);
        var A = 25;
        var xDiff = 100;
        var yDiff = 100;
        var pointData = [[A, 0], [A/2, A*_s32], 
        [-A/2, A*_s32], [-A, 0],
        [-A/2, -A*_s32], [A/2, -A*_s32]];
*/

var customSymbolSquare = { 
    draw: function(context, size){
        let s = Math.sqrt(size)/2;
        var a = 25;
        var x = 100;
        var y = 100;
        
        


        context.moveTo(s,s);
        context.lineTo(s,-s);
        context.moveTo(10+s, s);
        context.lineTo(-s,-s);
        context.lineTo(-s,s);
        // context.attr("fill", "none");
        // context.attr("stroke", "black");
        context.closePath();
    }
    
}
var diamond = {
    draw: function(context, size) {
        var sq = (Math.sqrt(3)/2);
        var height = (Math.sqrt(3)/2) * size;
        console.log(size);
        
        var width = size;
        context.moveTo(width, 0);
        context.lineTo(width/2, height);
        context.lineTo(-width/2, height);
        context.lineTo(-width, 0);
        context.lineTo(-width/2, -height);
        context.lineTo(width/2, -height);
      context.closePath();
    }
  }

var customSqr = d3.symbol().type(customSymbolSquare).size(1200);
    var svg = d3.select("#visualizer-container");



//place a g element on center
let groupCenter = svg
    .append("g")
    .attr("transform", "translate("+(settings.width/2) + ","+(settings.height/2)+")");


// groupCenter
// .append("path")
// .attr("size", 500)
// .attr("d", customSqr);
let size = 50;

groupCenter.append("path")
.attr("d", d3.symbol().type(diamond).size(80))
.attr("stroke", "red")
.attr("fill", "yellow");