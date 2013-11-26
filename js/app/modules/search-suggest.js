/**
*	Search suggetion module
*
*	@module SearchSuggest
*/

define([
	'handlebars',
	'moment',
	'underscore',
	'typeahead'
], function(Handlebars, moment, _, typeahead) {
	var SeachSuggest = function(opts) {
		this.defaults = {
			name: 'search-suggest',
			valueKey: 'value',
			limit: 5
		};

		this.conf = $.extend(true, this.defaults, opts);

		this.init(this.conf);	
	}

	SeachSuggest.prototype.init = function(conf) {

		var el = conf.el,
			settings = {
				name: conf.name,
				valueKey: conf.valueKey,
				limit: conf.limit
			};
		
		if(conf.tmpl) {
			Handlebars.registerHelper('dateFormat', function() {
				return moment(this.date).fromNow();
			});
			$.extend(settings, {template: Handlebars.compile(conf.tmpl)});
		}

		if(conf.prefetch) {
			$.extend(settings, {prefetch: conf.prefetch});
		}

		if(conf.remote) {
			var remote = {
					url: conf.remote + '?' + conf.queryName + '=%QUERY'
				};
			if(conf.filter) {
				var filter = function(result) {
					return _.filter(result, function(obj) {
						return obj.active === true; 
					});
				}
				$.extend(remote, {filter: filter});
			}
			$.extend(true, settings, {remote: remote});
		}

		el.val('').typeahead(settings).on('typeahead:selected', function(e) {
			if(typeof conf.cb === 'function') {
				conf.cb(e);
			}
		});
	}

	SeachSuggest.prototype.destory = function() {
		this.conf.el.typeahead('destory');	
	}

	SeachSuggest.prototype.setQuery = function(query) {
		if(!query) return;
		this.conf.el.typeahead('setQuery', query);
	}

	return SeachSuggest;	
});