const keystone = require('keystone');
keystone.init({

  'name': 'Çınar Eslek',

  'favicon': 'public/favicon.ico',
  'less': 'public',
  'static': ['public'],

  'views': 'templates/views',
  'view engine': 'pug',

  'auto update': true,
  'mongo': 'mongodb://localhost/keystone',

  'session': true,
  'auth': true,
  'user model': 'User',
  'cookie secret': '18943c59cdbc2d2e4d6ee2f0d4d9bd02973b05454ca493c7e78f280e6707fe352c1c3eca46244d731ecdc4bbc97cbf253e721322ba9ac8d7aa69cef6d3d61ae2'

});

require('./models');

keystone.set('locals', {
  _: require('lodash'),
  env: keystone.get('env'),
  utils: keystone.utils,
  editable: keystone.content.editable,
});

keystone.set('routes', require('./routes'));

keystone.start();
