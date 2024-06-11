(function(){
    var slidersContainer = document.querySelector('.slider-container');
    
    var msNumbers = new MomentumSliderMin({
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
    mstitles = MomentumSlider({
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
    var  msLinks = new MomentumSlider({
        el: slidersContainer,
        cssClass: 'ms--links',
        range: [0, 3], 
        rangeContent: function() {
            return '<a class="ms-slide_link">View Case</a>';
        },
        vertical: true,
        interactive: false
    });

    var pagination = document.querySelector('.pagination');
    var paginationItems = [].slice.call(pagination.children);
    var msImages = new MomentumSlider({
        el: slidersContainer,
        cssClass: 'ms--images', 
        range: [0, 3],
        rangeContent: function() {
            return '<div class="ms-slide__image-container"><div class="ms-slide__image"></div></div>'
        }
    })
})