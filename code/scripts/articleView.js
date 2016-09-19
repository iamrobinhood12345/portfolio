// Bad code here:

$('#main-page').hide();
$('footer').hide();
$('.icon-play3').hide();
$('.icon-volume-mute').hide();
$('.icon-volume-low').hide();
$('.icon-volume-medium').hide();
$('.icon-volume-high').hide();

$('.icon-play3').fadeIn();

$('.icon-play3').on('click', function(event) {
  event.preventDefault();
  $('.icon-play3').hide();
  $('.icon-volume-mute').show();
});

$('.icon-volume-mute').on('click', function(event) {
  event.preventDefault();
  $('.icon-volume-mute').hide();
  $('.icon-volume-low').show();
});

$('.icon-volume-low').on('click', function(event) {
  event.preventDefault();
  $('.icon-volume-low').hide();
  $('.icon-volume-medium').show();
});

$('.icon-volume-medium').on('click', function(event) {
  event.preventDefault();
  $('.icon-volume-medium').hide();
  $('.icon-volume-high').show();
});

$('.icon-volume-high').on('click', function(event) {
  event.preventDefault();
  $('.icon-volume-high').hide();
  $('#main-page').fadeIn();
  $('footer').fadeIn();
});

$('.tab').click(function(event) {
  event.preventDefault();
  $('.tab-content').hide();
  console.log(''+this+'');
  console.log(''+$(this)+'');
  $('#'+$(this).attr('data-content')).fadeIn();
});
$('.tab:first').click();
