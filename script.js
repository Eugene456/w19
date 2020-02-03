let link = $('.modal-link');
let popup = $('.popup'),
close = $('.popup-close'),
overlay =$('.popup-overlay');


link.click(function(){
  overlay.show();
  popup.show();
});

close.click(function(){
  popup.hide();
  overlay.hide();
});

overlay.click(function(){
  popup.hide();
  overlay.hide();
});