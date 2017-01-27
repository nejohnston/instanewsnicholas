$(function() {


// => 1
// => Section
$('select').on('change', function() {
var category = $('#options').val();
    
var url = 'http://api.nytimes.com/svc/topstories/v2/' + category + '.json';
url += '?' + $.param({
  'api-key': 'a631fc3fad2941638962121f9d0dcb1c'
});
$.ajax({
  url: url,
  method: 'GET',
}).done(function(data) {
    $.each()
    console.log(data.results);
}).fail(function(err) {
  throw err;
});
});
});