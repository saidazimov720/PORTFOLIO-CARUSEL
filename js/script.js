(function(){
    var slidersContainer = document.querySelector('.slider-container');
    
    var msNumbers = new momentumSliderMin({
        el: slidersContainer, 
        cssClass: 'ms--numbers',
        range: [1, 4],
        rangeContent: function(i){
            return '0' + i;
        }, 
        style: {
            transform: [{scale: [0.4, 1]}],
            opacity:[0, 1]
        },
    })
})