document.getElementById('slider-left').onclick = sliderleft;
var left=0;

function sliderleft() {
    var line = document.getElementById('line');
    left = left -128;
    if(left < -512) {
        left = 0;
    }
    line.style.left = left + 'px';
}