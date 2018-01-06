const keystone = require('keystone'),
  Types = keystone.Field.Types;

const Post = new keystone.List('Post', {
  autokey: {path: 'slug', from: 'title', unique: true},
  map: { name: 'title'},
  defaultSort: '-createdAt'
});

Post.add({
  title: { type: Types.Text, required: true, initial: true},
  state: { type: Types.Select, initial: true, options: 'draft, published, archived', default: 'draft'},
  author: { type: Types.Name, initial: true, required: true},
  content: { type: Types.Html, initial: true, wysiwyg: true, index: true},
  createdAt: { type: Types.Date, default: Date.now },
  archive: { type: Types.Boolean }
});




Post.defaultColumns = 'title, state|%20, author, createdAt|%15'
Post.register();
