require.config({
	baseUrl: 'js',
	paths: {
		/* Vendor */
		jquery: 'vendor/jquery/jquery',
		typeahead: 'vendor/jquery-plugins/typeahead',
		mustache: 'vendor/mustache/mustache',
		moment: 'vendor/moment/moment',
		underscore: 'vendor/underscore/underscore',
		pikaday: 'vendor/pikaday/pikaday',

		/* Modules */
		search_suggest: 'app/modules/search-suggest',

		/* Utils */
		util: 'utils/util'
	},
	shim: {
		typeahead: {
			exports: 'typeahead',
			deps: ['jquery', 'mustache', 'underscore', 'moment']
		},
		underscore: {
			exports: '_'
		},
		pikaday: {
			deps: ['moment']
		}
	}
});
