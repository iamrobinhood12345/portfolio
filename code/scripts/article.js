//var articles = [];

function Article (opts) {
  for (var keys in opts) {
    this[keys] = opts[keys];
  }
}

Article.allArticles = [];

//function Article (options) {
//  this.title = options.title;
//  this.projectUrl = options.projectUrl;
//  this.publishedOn = options.publishedOn;
//  this.body = options.body;
//}

Article.prototype.toHtml = function(scriptTemplateId) {
  var template = Handlebars.compile($(scriptTemplateId).text());
  this.daysAgo = parseInt((new Date() - new Date(this.publishedOn))/60/60/24/1000);
  this.publishStatus = this.publishedOn ? 'published ' + this.daysAgo + ' days ago' : '(draft)';
  this.body = this.body;
  return template(this);
};

//Article.prototype.toHtml = function() {
//  var source = $('#article-template').html();
//  var templateRender = Handlebars.compile(source);
//  return templateRender(this);
//};

Article.loadAll = function(inputData) {
  inputData.sort(function(a,b) {
    return (new Date(b.publishedOn)) - (new Date(a.publishedOn));
  })
  .forEach(function(ele) {
    Article.allArticles.push(new Article(ele));
  });
};

Article.fetchAll = function() {
  if (localStorage.blogProjects) {
    Article.loadAll(JSON.parse(localStorage.blogProjects));
  } else {
    $.getJSON('data/blogProjects.json', function(data) {
      localStorage.blogProjects = JSON.stringify(data);
      Article.loadAll(data);
      articleView.renderIndexPage();
    });
  }
};

Article.fetchAll();

//ourLocalData.forEach(function(article) {
//  articles.push(new Article(article));
//});

//articles.forEach(function(article) {
//  $('#projects').append(article.toHtml());
//});
