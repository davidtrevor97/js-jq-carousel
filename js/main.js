var first = $(".first");
var last = $(".last");
first.addClass("dodisplay");
$(".fa-chevron-right").click( function(){
  var active = $(".dodisplay");
  active.removeClass("dodisplay");
  active.next().addClass("dodisplay");
} );
$(".fa-chevron-left").click( function(){
  if ( active == first) {
    active.removeClass("dodisplay");
    last.addClass("dodisplay");
  }
  var active = $(".dodisplay");
  active.removeClass("dodisplay");
  active.prev().addClass("dodisplay");

} );
