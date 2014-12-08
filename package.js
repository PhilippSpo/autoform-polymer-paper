Package.describe({
  name: 'conielo:autoform-polymer-paper',
  summary: 'Polymer paper input elements for autoform',
  version: '0.1.2',
  git: 'https://github.com/coniel/autoform-polymer-paper.git'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.use('underscore');
  api.use('templating@1.0.0');
  api.use('blaze@2.0.0');
  api.use('aldeed:autoform@4.0.0');
  api.use('ecwyne:polymer');
  api.use('ecwyne:polymer-elements');
  api.addFiles([
    'autoform-polymer-paper.html',
    'autoform-polymer-paper.js'
  ], 'client');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('conielo:autoform-polymer-paper');
  api.addFiles([
    'autoform-polymer-paper.html',
    'autoform-polymer-paper.js'
  ], 'client');
});
