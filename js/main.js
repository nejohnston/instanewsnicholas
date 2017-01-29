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
   function bouncer(data) {
  function filterer(arr) {
     return arr > 0|| isNaN(arr) === true;
  }
  arr = arr.filter(filterer);
  return arr;
}
    // var newsArray = data.results;
    // var newsWithImages = newsArray.multimedia.filter(function(images){
    // return images > 0 });
    // console.log(images)

    
var categorySearch = ''; 
    $.each(newsFiltered, function (key, value) {
                        var newsCaption =  value.abstract 
                        var urlArticle = value.url 
                        var urlImage =  '<img class="insta-image" src="' + value.multimedia[4].url + '">'
                        categorySearch += '<li><a href="' + urlArticle + '">'
                        categorySearch += '<img style="background-image:' + urlImage + '"></a>'
                        categorySearch += '<div>' + newsCaption + '</div></li>'
                        $('.category-search').append(urlImage + newsCaption)

 })})
.fail(function(err) {
  throw err;
})
})
})