var videos =["rdqP2IPb_lw","VDsjXB-BaE0","T3TvCjNH6fo",
"B36Ehzf2cxE","s6Z_z4rx3zg","UwWoIwo1p0U","DRCzZI1O62o"];
var day = new Date().getDay();

var yourElement = document.getElementById('rotate');
yourElement.setAttribute( 'src', '//www.youtube.com/embed/' + videos[ day ] );

