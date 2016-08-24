
function getDependencies(tree, arr){
  arr = arr || [];
  Object.keys(tree).forEach(function(key){
    if(tree[key] !== null && typeof tree[key] == "object"){
      if(tree[key].version && arr.indexOf(key + '@' + tree[key].version) === -1) {
        arr.push(key + '@' + tree[key].version);
      }
      getDependencies(tree[key], arr);
    }
  });

  return arr.sort();
}

module.exports = getDependencies;
