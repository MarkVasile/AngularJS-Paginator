basePath = '../';

files = [
  ANGULAR_SCENARIO,
  ANGULAR_SCENARIO_ADAPTER,
  JASMINE,
  JASMINE_ADAPTER,
  'app/vendor/angular/js/angular.min.js',
  'app/vendor/angular/js/angular-*.js',
  'app/vendor/jquery/js/jquery*.js',
  'app/vendor/jszip/js/jszip.js',
  'app/vendor/**/js/*.js',
  'app/js/ng/repapp.js',
  'app/js/**/*.js',
  'test/lib/angular/angular-*.js',
  'test/lib/jquery/jasmine-jquery*.js',
  'test/e2e/**/*.js'
];

autoWatch = false;

browsers = ['Chrome'];

singleRun = true;

proxies = {
  '/': 'http://localhost:8000/'
};

junitReporter = {
  outputFile: 'test_out/e2e.xml',
  suite: 'e2e'
};
