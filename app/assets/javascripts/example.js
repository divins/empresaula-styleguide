$(function(){
  $('a, button', $('.example')).click(function(){
    return false;
  });

  $('form', $('.example')).submit(function(){
    return false;
  });
})
