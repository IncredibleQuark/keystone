const keystone = require('keystone'),
  middleware = require('./middleware'),
  importRoutes = keystone.importer(__dirname),
  apiHandlers = require('./api/post');

// Common Middleware
keystone.pre('routes', middleware.initErrorHandlers);
keystone.pre('routes', middleware.initLocals);
keystone.pre('render', middleware.flashMessages);

// Handle 404 errors
keystone.set('404', function(req, res, next) {
  res.notfound();
});

// Handle other errors
keystone.set('500', function(err, req, res, next) {
  let title = 'Page not found', message = 'Page your were looking for does not exists';
  if (err instanceof Error) {
    message = err.message;
    err = err.stack;
  }
  res.err(err, title, message);
});

// Load Routes
const routes = {
  views: importRoutes('./views'),
};

// Bind Routes
exports = module.exports = (app) => {

  //views
  app.get('/', routes.views.index);
  app.get('/post', routes.views.post);

  //api
  app.get('/api/post', apiHandlers.getPosts);
}
