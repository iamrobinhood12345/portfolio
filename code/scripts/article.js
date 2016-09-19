var articles = [];

function Article (options) {
  this.title = options.title;
  this.projectUrl = options.projectUrl;
  this.publishedOn = options.publishedOn;
  this.body = options.body;
}

Article.prototype.toHtml = function() {
  var source = $('#article-template').html();
  var templateRender = Handlebars.compile(source);
  return templateRender(this);
  //var $newArticle = $('article.template').clone();
  //$newArticle.find('h1 a').attr('href', this.projectUrl);
  //$newArticle.find('h1 a').text(this.title);
  //$newArticle.find('p').append(this.publishedOn);
  //$newArticle.find('.article-body').append(this.body);
  //$newArticle.removeClass('template');
  //return $newArticle;
};

ourLocalData.forEach(function(article) {
  articles.push(new Article(article));
});

articles.forEach(function(article) {
  $('#projects').append(article.toHtml());
});
