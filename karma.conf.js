module.exports = function(config) {
    config.set({
        // base path, that will be used to resolve files and exclude
        basePath: '.',

        frameworks: ['mocha', 'requirejs'],

        // list of files / patterns to load in the browser
        files: [
            {pattern: 'test/**/*Spec.js', included: false},
            {pattern: 'js/**/*.js', included: false},
            'test/test-main.js'
        ],

        // list of files to exclude
        exclude: [
            'js/app/pages/*.js'
        ],

        // use dots reporter, as travis terminal does not support escaping sequences
        // possible values: 'dots', 'progress'
        // CLI --reporters progress
        reporters: ['progress', 'coverage'],


        // web server port
        // CLI --port 9876
        port: 9876,

        // cli runner port
        // CLI --runner-port 9100
        runnerPort: 9100,

        // enable / disable colors in the output (reporters and logs)
        // CLI --colors --no-colors
        colors: true,

        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        // CLI --log-level debug
        logLevel: config.LOG_INFO,

        // enable / disable watching file and executing tests whenever any file changes
        // CLI --auto-watch --no-auto-watch
        autoWatch: true,

        // Start these browsers, currently available:
        // - Chrome
        // - ChromeCanary
        // - Firefox
        // - Opera
        // - Safari (only Mac)
        // - PhantomJS
        // - IE (only Windows)
        // CLI --browsers Chrome,Firefox,Safari
        //browsers: [process.env.TRAVIS ? 'Firefox' : 'Chrome'],

        browsers: ['PhantomJS', 'Chrome'],

        // If browser does not capture in given timeout [ms], kill it
        // CLI --capture-timeout 5000
        captureTimeout: 5000,

        // Auto run tests on start (when browsers are captured) and exit
        // CLI --single-run --no-single-run
        singleRun: false,

        // report which specs are slower than 500ms
        // CLI --report-slower-than 500
        reportSlowerThan: 500,

        preprocessors: { '*.js': ['coverage'] },

        // plugins: [
        //     'karma-requirejs',
        //     'karma-mocha',
        //     'karma-chrome-launcher',
        //     'karma-firefox-launcher',
        //     'karma-phantomjs-launcher',
        //     'karma-junit-reporter',
        //     'karma-coverage-reporter'
        // ]
    });
};