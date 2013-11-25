define(['underscore'], function(_) {
	var utils = {
		getUrlArgs: function() {
			var args = {};
			if(location.search === '') return args;
			_.forEach(location.search.substring(1).split('&'), function(obj) {
				var key = obj.split('=')[0],
			       	val = obj.split('=')[1];
			    args[key] = val;
			});
			return args;
		}
	}

	return utils;
});