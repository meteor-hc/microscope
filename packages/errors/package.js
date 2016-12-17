Package.describe({
  name: 'pntbr:errors',
  version: '0.0.1',
  summary: 'A pattern to display application errors to the user',
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
})

Package.onUse(api => {
  api.versionsFrom('1.4.2.3')
  api.use(['minimongo', 'mongo-livedata', 'templating'], 'client')
  api.use('mongo', ['client', 'server'])
  api.addFiles(['errors.js', 'errors_list.html', 'errors_list.js'], 'client')
  api.use('ecmascript')
  api.mainModule('errors.js')
  api.export('Errors')
})

Package.onTest(api => {
  api.use('ecmascript')
  api.use('tinytest')
  api.use('pntbr:errors')
  api.mainModule('errors-tests.js')
})
