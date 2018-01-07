const _        = require('underscore');
/**
 Initialises the standard view locals.
 Include anything that should be initialised before route controllers are executed.
 */
exports.initLocals = function(req, res, next) {

  const locals = res.locals;

  locals.navLinks = [
    { label: 'Çınar Eslek', key: 'home', href: '/' },
    { label: 'Archive', key: 'archive', href: '/archive' },
    { label: 'Bio', key: 'bio', href: '/bio' },
    { label: 'Contact', key: 'contact', href: '/contact' }
  ];

  locals.user = req.user;
  next();

};

/**
 Inits the error handler functions into `res`
 */
exports.initErrorHandlers = function(req, res, next) {

  res.err = function(err, title, message) {
    res.status(500).render('errors/500', {
      err: err,
      errorTitle: title,
      errorMsg: message
    });
  }

  res.notfound = function(title, message) {
    res.status(404).render('errors/404', {
      errorTitle: title,
      errorMsg: message
    });
  }

  next();

};

/**
 Fetches and clears the flashMessages before a view is rendered
 */
exports.flashMessages = function(req, res, next) {

  const flashMessages = {
    info: req.flash('info'),
    success: req.flash('success'),
    warning: req.flash('warning'),
    error: req.flash('error')
  };

  res.locals.messages = _.any(flashMessages, function(msgs) { return msgs.length }) ? flashMessages : false;

  next();

};

