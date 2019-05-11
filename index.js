$(document).ready(function(){
    var url = 'https://hn.algolia.com/api/v1/search?query=javascript'
    $.getJSON(url, function(data){
        var quotes = data.hits;
        var currentQuote = '';
        $('.read').on('click', function(){
            currentQuote = quotes[Math.floor(Math.random() * quotes.length)];
            $('.quoteBody').hide();
            $('.quoteBodyLink').html(currentQuote.title)
            .attr('href', currentQuote.url)
            .attr('target', '_blank');
            $('.quoteAuthor').html(currentQuote.author);
            
            $('.tweetQuote')
            .attr(
                'href', 
                'https://twitter.com/intent/tweet?text= ' + currentQuote.title + ' - ' + currentQuote.author  + ' (' + currentQuote.url + ')'
                )//I included tweeting the url myself
                .attr('target', '_blank')//this is to ensure it opens in a new window
                .attr('disabled', false);
                $('.read').html('Show me one more');
        
        });
    });
});