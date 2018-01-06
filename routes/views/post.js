const keystone = require('keystone');

exports = module.exports = (req, res) => {

  const view = new keystone.View(req, res);

  const locals = res.locals;
  locals.section = 'post';

  const Post = keystone.list('Post').model;
  Post.find().exec( (err,data) => {
    if(err) {
      console.log(err);
    }
    // console.log(data);
    locals.posts = data;
    console.log(locals.posts);

    view.render('post');
  });




}
