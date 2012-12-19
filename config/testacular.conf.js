basePath = '../';

files = [
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
  'test/unit/**/*.js'
];

autoWatch = true;

browsers = ['Chrome'];

junitReporter = {
  outputFile: 'test_out/unit.xml',
  suite: 'unit'
};
