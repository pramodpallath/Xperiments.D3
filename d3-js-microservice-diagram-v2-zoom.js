
function handleZoom(e) {
    console.log(`zoom ${e.transform}`)
    d3
        .select('svg g.diagram')
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
