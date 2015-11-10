var snippets = [];

var Store = {};

Store.save = function(data){
  snippets.push(data)
  console.log("Saved snippet ", data);
}

Store.getAll = function () {
  return snippets;
}

Store.get = function(id){
  var snippet = snippets[id];
  // console.log("Loading snippet", id, snippet);
  return snippet;
}

module.exports = Store;
