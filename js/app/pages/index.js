require(['config'], function(config) {
require(['search_suggest'], function(SearchSuggest) {

	var ss = new SearchSuggest({
		el: $('input[name="search"]'),
		name: 'countries',
		remote: 'backend/countries.json',
		queryName: 'query',
		tmpl: '<p>{{name}}</p>',
		valueKey: 'name',
		limit: 10,
		cb: function(e) {
			location.href = 'page2.html?search=' + e.currentTarget.value;
		}
	});

});
});