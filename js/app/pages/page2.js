require(['config'], function(config) {
require(['search_suggest', 'pikaday', 'util'], function(SearchSuggest, Pikaday, util) {
	
	var urlArgs = util.getUrlArgs();

	var ss = new SearchSuggest({
		el: $('input[name="search"]'),
		remote: 'backend/data2.json',
		queryName: 'search',
		tmpl: '<p>{{name}}</p>',
		valueKey: 'name'
	});

	// var ss_form = new SearchSuggest({
	// 	name: 'countries',
	// 	el: $('input[name="from"]'),
	// 	prefetch: 'backend/countries.json',
	// 	valueKey: 'name',
	// 	cb: function(e) {
	// 		console.log($(e.currentTarget).val());
	// 	}
	// });

	// var ss_to = new SearchSuggest({
	// 	name: 'countries',
	// 	el: $('input[name="to"]'),
	// 	prefetch: 'backend/countries.json',
	// 	valueKey: 'name',
	// 	cb: function(e) {
	// 		console.log($(e.currentTarget).val());
	// 	}
	// });

	// ss_form.setQuery(urlArgs.search);

	var pikaday = new Pikaday({
		field: $('input[name="date"]')[0],
		format: 'D MMM YYYY'
	});

});
});