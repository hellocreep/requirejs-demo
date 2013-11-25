module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		copy: {
			main: {
				files: [
					{expand: true, cwd: 'bower_components/bootstrap/dist/css/', src: ['bootstrap.css'], dest: 'css/'},
					{expand: true, cwd: 'bower_components/pikaday/css/', src: ['pikaday.css'], dest: 'css/'},
					{expand: true, 
						cwd: 'bower_components/',
						src: [
						'jquery/jquery.js',
						'moment/moment.js',
						'mustache/mustache.js',
						'requirejs/require.js',
						'underscore/underscore.js',
						'pikaday/pikaday.js'
					], dest: 'js/vendor/'},
					{expand: true, cwd: 'bower_components/typeahead.js/dist', src: ['typeahead.js'], dest: 'js/vendor/jquery-plugins/'}
				]
			}
		},
		concat: {
			options: {
				banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - <%= grunt.template.today("yyyy-mm-dd") %> */',
			},
			dist: {
				src: [
					'css/bootstrap.css',
					'css/typeahead.css',
					'css/pikaday.css'
				],
				dest: 'css/main.css'
			}
		},
		cssmin: {
			options: {
				banner: '/*Compressed css at' + Date() + '*/\n',
                report: 'gzip'
			},
			combine: {
			 	files: {
			 		'css/main.min.css': ['css/main.css']
			 	}
			}
		},
		uglify: {
			my_target: {
				files: {
					'js/vendor/jquery/jquery.min.js': ['js/vendor/jquery/jquery.js'],
					'js/vendor/jquery-plugins/typeahead.min.js': ['js/vendor/jquery-plugins/typeahead.js'],
					'js/vendor/moment/moment.min.js': ['js/vendor/moment/moment.js'],
					'js/vendor/requirejs/require.min.js': ['js/vendor/requirejs/require.js'],
					'js/vendor/mustache/mustache.min.js': ['js/vendor/mustache/mustache.js'],
					'js/vendor/underscore/underscore.min.js': ['js/vendor/underscore/underscore.js'],
					'js/vendor/pikaday/pikaday.min.js': ['js/vendor/pikaday/pikaday.js'],
					'js/utils/util.min.js': ['js/utils/util.js']
				}
			}
		},
		requirejs: {
			compile: {
				options: {
					appDir: 'js',
					baseUrl: './',
					dir: 'js-build',
					paths: {
						/* Config */
						config: 'app/pages/config',

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
						}
					},
					modules: [
						{
							name: 'app/pages/index',
							include: ['search_suggest']
						},
						{
							name: 'app/pages/page2',
							include: ['search_suggest', 'pikaday', 'util']
						}
					]
				}
			}
		},
		connect: {
			server: {
				options: {
					base: '.',
					port: 9000,
					keepalive: true
				}
			}
		}
	});	

	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-requirejs');


	grunt.registerTask('default', ['copy', 'concat', 'cssmin', 'uglify']);
	grunt.registerTask('server', ['connect']);
}