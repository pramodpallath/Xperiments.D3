
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

var apigatewaySymbol = {
    draw: function (path, size) {
        var height = (Math.sqrt(3) / 2) * size;
        var width = size;
        //debugger;
        path.arc(0,0,height,0,360,0);

        
    }
}


var apigatewaySymbol2 = {
    draw: function (path, size) {
        var height = (Math.sqrt(3) / 2) * size;
        var width = size;
        //debugger;
        
        //path.arc(0,0,height,0,360,0);
        //path.rect(width/2-5,width/2-5, 10, 10);
        path.arc(width/2,width/2,6,0,360,0);
        //path.rect(-width/2,-width/2, 10, 10);
        //path.rect(-1*(width/2),width/2- 10, 10, 10);
        path.moveTo(-width/2,-width/2);
        path.arc(-width/2,-width/2,6,0,360,0);
        //path.rect(-width/2-5,-width/2-5, 10, 10);

        path.moveTo(width/2,-width/2);
        path.arc(width/2,-width/2,6,0,360,0);
        //path.rect(width/2-5,-width/2-5, 10, 10);

        path.moveTo(-width/2,width/2);
        path.arc(-width/2,width/2,6,0,360,0);
        //path.rect(-width/2-5,width/2-5, 10, 10);
        //path.rect(width/2,width/2, 10, 10);

         path.moveTo(0,0);
         path.arc(0,0,10,0,360,0);

        path.moveTo(width/2-5,width/2-5);
        path.lineTo(-width/2-5,-width/2-5);

        path.moveTo(-width/2,width/2);
        path.lineTo(width/2,-width/2);
        

    }
}