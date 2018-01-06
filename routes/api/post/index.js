const keystone = require('keystone');

const Post = keystone.list('Post').model;

const handlers = {
  getPosts: function(req, res) {
    Post.find().exec((err, data) => {
      if(err) {
        console.log(err);
        res.status(500).send('DB Error');
      }
      res.status(200).send(data);
    });
  }
}
module.exports = handlers;
