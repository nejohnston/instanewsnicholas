$(function() {


// => 1
// => Section
$('select').on('change', function() {
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
// console.log(dataSet);
var filteredNews = newsArticles.filter(newsWithArticles)
// console.log(filteredArray);
var slicedNews = filteredNews.slice(0,12);
// console.log(slicedArray);
    // var newsArray = data.results;
    // var newsWithImages = newsArray.multimedia.filter(function(images){
    // return images > 0 });
    // console.log(images)

    
var categorySearch = ''; 
    $.each(slicedNews, function (key, value) {
                        var newsCaption =  value.abstract 
                        var urlArticle = value.url 
                        var urlImage =  '<img class="insta-image" src="' + value.multimedia[4].url + '">'
                        categorySearch += '<li><a href="' + urlArticle + '">'
                        categorySearch += '<div style="background-image:' + urlImage + '">'
                        categorySearch += '<div class="abstract">' + newsCaption + '</div></a></li>'
                        $('.category-search').append(urlImage + newsCaption)

 })})
.fail(function(err) {
  throw err;
})
})
})