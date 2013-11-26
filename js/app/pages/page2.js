require(['config'], function(config) {
require(['search_suggest', 'util'], function(SearchSuggest, util) {
	
	var urlArgs = util.getUrlArgs();

	var ss = new SearchSuggest({
		el: $('input[name="search"]'),
		prefetch: 'backend/data2.json'
	});

	$('.jumbotron h1').text(urlArgs.search);

});
});