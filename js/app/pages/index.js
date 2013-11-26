/**
* @module index
* @main page
*/

require(['config'], function(config) {
require(['search_suggest', 'util'], function(SearchSuggest, util) {

	var urlArgs = util.getUrlArgs();

	var ss = new SearchSuggest({
		el: $('input[name="search"]'),
		name: 'products',
		remote: 'backend/data.json',
		queryName: 'query',
		tmpl: '<p class="row">{{name}}<span class="pull-right">{{dateFormat}}</span></p>',
		valueKey: 'name',
		filter: true,
		limit: 20,
		cb: function(e) {
			location.href = 'page2.html?search=' + e.currentTarget.value;
		}
	});

	ss.setQuery(urlArgs.search);

});
});