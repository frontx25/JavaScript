// document.getElementById('slider-left').onclick = sliderleft;
autoSlider();
var left = 0;
var timer;



function autoSlider () {
    timer = setTimeout(function(){
        var line = document.getElementById('line');
        left = left -128;
        if(left < -512) {
            left = 0;
            clearTimeout (timer);
        }
        line.style.left = left + 'px';
        autoSlider ();
    }, 1000) ;
}
