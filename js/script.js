$('#btnOpen').click(function(){
  $(this).toggleClass('on')
  $('#gNavi').stop().slideToggle()
})