const keystone = require('keystone');

exports = module.exports = (req, res) => {

  const view = new keystone.View(req, res);

  const locals = res.locals;
  locals.section = 'archive';

  const Archive = keystone.list('Archive').model;
  Archive.find().exec( (err,data) => {
    if(err) {
      console.log(err);
    }
    // console.log(data);
    locals.archives = data;


    view.render('archive');
  });




}
