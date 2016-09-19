//var articleView = {};

//articleView.handleMainNav = function () {
  //$('.main-nav').on('click', '.tab', function() {
    //$('.tab-content').hide();
    //$('#' + $(this).attr('data-content')).fadeIn();
  //});
  //$('.main-nav .tab:first').click();
//};

//articleView.handleMainNav();


//$('.tab').click(function() {
  //console.log('tab clicked');
//});
//$('.tab:first').click();

$('.tab').click(function(event) {
  event.preventDefault();
  $('.tab-content').hide();
  console.log(''+this+'');
  console.log(''+$(this)+'');
  $('#'+$(this).attr('data-content')).fadeIn();
});
