// Bad code here:

// $('#main-page').hide();
// $('footer').hide();
// $('.icon-play3').hide();
// $('.icon-volume-mute').hide();
// $('.icon-volume-low').hide();
// $('.icon-volume-medium').hide();
// $('.icon-volume-high').hide();
//
// $('.icon-play3').fadeIn();
//
// $('.icon-play3').on('click', function(event) {
//   $('.icon-play3').hide();
//   $('.icon-volume-mute').show();
// });
//
// $('.icon-volume-mute').on('click', function(event) {
//   $('.icon-volume-mute').hide();
//   $('.icon-volume-low').show();
// });
//
// $('.icon-volume-low').on('click', function(event) {
//   $('.icon-volume-low').hide();
//   $('.icon-volume-medium').show();
// });
//
// $('.icon-volume-medium').on('click', function(event) {
//   $('.icon-volume-medium').hide();
//   $('.icon-volume-high').show();
// });
//
// $('.icon-volume-high').on('click', function(event) {
//   $('.icon-volume-high').hide();
//   $('#main-page').fadeIn();
//   $('footer').fadeIn();
// });

var articleView = {};

articleView.handleMainNav = function() {
  $('.main-nav').on('click', '.tab', function(e) {
    event.preventDefault(e);
    $('.tab-content').hide();
    $('#'+$(this).attr('data-content')).fadeIn();
  });
  $('.main-nav .tab:first').click();
};

//$('.tab').click(function(event) {
//  event.preventDefault();
//  $('.tab-content').hide();
//  $('#'+$(this).attr('data-content')).fadeIn();
//});
//$('.tab:first').click();

articleView.renderIndexPage = function() {
  Article.allArticles.forEach(function(a){
    $('#projects').append(a.toHtml('#article-template'));
  });
  articleView.handleMainNav();
};

if(localStorage.blogProjects){
  articleView.renderIndexPage();
}
