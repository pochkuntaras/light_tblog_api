var express     = require('express');
var cors        = require('cors');
var posts       = require('./data').staticPosts;
var _           = require('lodash');
var application = express();


application.use(cors());
application.use('/public', express.static(__dirname + '/public'));

application.get('/', function(req, res) {
  res.json(posts);
});

application.get('/posts/:id', function(req, res) {
  var id   = +req.params.id;
  var post =  _.find(posts, { id: id });

  console.log('GET: /post/' + id);

  res.json({ post });
});

application.listen(3004, function() {
  console.log('Server on localhost:3004');
});
