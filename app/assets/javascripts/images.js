$(window).load(function(){

  $(".example img").before(function(){
    var element = $("<span />");
    element.addClass('dimensions');
    image = $(this);
    var width = image.width();
    var height = image.height();
    console.log(width, height);
    var content = width + "x" + height;
    $(element).html(content);
    return element;
  });
});
