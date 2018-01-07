const keystone = require('keystone');

const Archive = keystone.list('Archive').model;

const handlers = {
  getArchives: function(req, res) {
    Archive.find().exec((err, data) => {
      if(err) {
        console.log(err);
        res.status(500).send('DB Error');
      }
      res.status(200).send(data);
    });
  }
}
module.exports = handlers;
