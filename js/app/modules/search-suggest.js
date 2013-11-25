define([
	'mustache',
	'moment',
	'underscore',
	'typeahead'
], function(Mustache, moment, _, typeahead) {
	var SeachSuggest = function(opts) {
		this.opts = opts;

		this.init(opts);	
	}

	SeachSuggest.prototype.init = function(opts) {

		var el = opts.el,
			settings = {
				name: opts.name || 'search-suggest',
				valueKey: opts.valueKey || 'value',
				limit: opts.limit || 4 
			};
		
		if(opts.tmpl) {
			$.extend(settings, {template: Mustache.compile(opts.tmpl)});
		}

		if(opts.prefetch) {
			$.extend(settings, {prefetch: opts.prefetch});
		}

		if(opts.remote) {
			var remote = {
					url: opts.remote + '?' + opts.queryName + '=%QUERY'	
				}
			$.extend(true, settings, {remote: remote});
		}

		el.typeahead(settings).on('typeahead:selected', function(e) {
			if(typeof opts.cb === 'function') {
				opts.cb(e);
			}
		});
	}

	SeachSuggest.prototype.destory = function() {
		return this.opts.el.typeahead('destory');	
	}

	SeachSuggest.prototype.setQuery = function(query) {
		if(!query) return;
		this.opts.el.typeahead('setQuery', query);
	}

	return SeachSuggest;	
});