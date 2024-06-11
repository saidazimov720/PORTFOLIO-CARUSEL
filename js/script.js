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
    });

    var titles = [
        'King of the Ring fight' , 
        'Sound of Streets' , 
        'Urban Fashion', 
        'Windly sunset'
    ];
    mstitles = momentumSlider({
        el: slidersContainer, 
        cssClass: 'ms--titles', 
        range: [0, 3],
        rangeContent: function(i){
            return '<h3>' + titles[i] + '</h3>';
        },
        vertical: true, 
        reverse: true, 
        style: {
            opacity: [0, 1]
        },
        interactive: false
    });
    
})