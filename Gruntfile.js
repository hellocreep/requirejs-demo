module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		copy: {
			main: {
				files: [
					{expand: true, cwd: 'bower_components/bootstrap/dist/css/', src: ['bootstrap.css'], dest: 'css/'},
					{expand: true, 
						cwd: 'bower_components/',
						src: [
						'jquery/jquery.js',
						'moment/moment.js',
						'handlebars/handlebars.js',
						'requirejs/require.js',
						'underscore/underscore.js',
						'modernizr/modernizr.js'
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
				],
				dest: 'css/main.css'
			}
		},
		cssmin: {
			options: {
				banner: '/*Compressed css at' + Date() + '*/\n',
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
					'js/vendor/underscore/underscore.min.js': ['js/vendor/underscore/underscore.js'],
					'js/utils/util.min.js': ['js/utils/util.js'],
					'js/vendor/modernizr/modernizr.min.js': ['js/vendor/modernizr/modernizr.js']
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
						handlebars: 'vendor/handlebars/handlebars',
						moment: 'vendor/moment/moment',
						underscore: 'vendor/underscore/underscore',

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
						}
					},
					modules: [
						{
							name: 'app/pages/index',
							include: ['search_suggest', 'util']
						},
						{
							name: 'app/pages/page2',
							include: ['search_suggest', 'util']
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
		},
		watch: {
			css: {
				files: [
					'css/bootstrap.css',
					'css/typeahead.css'
				],
				tasks: ['concat'],
				options: {
					livereload: true
				}
			}
		},
		yuidoc: {
			compile: {
				name: '<%= pkg.name %>',
				description: '<%= pkg.description %>',
				options: {
					paths: 'js/app/',
					outdir: 'docs/'
				}
			}
		},
		karma: {
			unit: {
				configFile: 'karma.conf.js'
			}
		}
	});	

	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-requirejs');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-yuidoc');


	grunt.registerTask('default', ['copy', 'concat', 'cssmin']);
	grunt.registerTask('css', ['concat', 'cssmin']);
	grunt.registerTask('docs', ['yuidoc']);
	grunt.registerTask('server', ['connect']);
}