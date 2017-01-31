$(function() {

$('select').selectric();

function showLoadingGif () {
    $('.loading-gif').css('display', 'inline')
}
function hideLoadingGif () {
    $('.loading-gif').css('display', 'none')
}
// => 1
// => Section
$('select').on('change', function(e) {
    e.preventDefault();

// Add CSS classes with NYT articles
$('.site-header').addClass('shrunk-site-header')
$('.default-logo').addClass('articles-logo');

// Loading Gif
showLoadingGif ();
$('.category-search').empty()

// NYT API
var category = $('#options').val(); 
var url = 'http://api.nytimes.com/svc/topstories/v2/' + category + '.json';
url += '?' + $.param({
  'api-key': 'a631fc3fad2941638962121f9d0dcb1c'
})
$.ajax({
  url: url,
  method: 'GET',
})

.done(function(data) {

   var newsArticles = data.results;

 function newsWithArticles(newsArticles){
  return newsArticles.multimedia.length === 5;
 }

var filteredNews = newsArticles.filter(newsWithArticles)
var slicedNews = filteredNews.slice(0,12);
var categorySearch = ''; 
    
    $.each(slicedNews, function (key, value) {
        var urlArticle = '<li><a href="' + value.url + '">' 
        var urlImage = '<div class="article-image" style="background-image:url(' + value.multimedia[4].url + ')">'
        var newsCaption =  '<div class="abstract"><p>' + value.abstract

categorySearch += urlArticle
categorySearch += urlImage
categorySearch += newsCaption
categorySearch += '</p></div></div></a></li>'
        $('.category-search').append(urlArticle + urlImage + newsCaption)

})
hideLoadingGif ();
})
.fail(function(err) {
    hideLoadingGif ();
  $('.category-search').append('Sorry, your request could not be processed.');
})
})
})