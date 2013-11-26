/** 
* @config requirejs config
*/
require.config({
	baseUrl: 'js',
	paths: {
		/* Vendor */
		jquery: 'vendor/jquery/jquery',
		typeahead: 'vendor/jquery-plugins/typeahead',
		handlebars: 'vendor/handlebars/handlebars',
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
			deps: ['jquery']
		},
		handlebars: {
			exports: 'Handlebars'
		},
		underscore: {
			exports: '_'
		},
		pikaday: {
			deps: ['moment']
		}
	}
});
