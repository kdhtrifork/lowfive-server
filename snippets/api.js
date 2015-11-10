var router = require('express').Router();
var Store = require('./../Store');

// Insert
router.post('/', function(req, res){
  Store.save(req.body);
  return res.status(200).end('');
});

router.get('/', function(req, res){
  return res.json(Store.getAll());
});

// Get - Loads a snippet
router.get('/:id', function(req, res){
  var snippet = Store.get(req.params.id);
  return res.json(snippet);
})

module.exports = router;
