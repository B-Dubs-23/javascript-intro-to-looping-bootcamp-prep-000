var forLoop = function(array){

for (let i=0; i<25; i++) {
    if (i === 1) {
    array.push("I am one strange loop");
  } else {
    array.push(`I am ${i} strange loops.`);
    }
  }
return array
};


var whileLoop = function(n) {
  while (n > 0) {
  console.log(--n)
    }
    return "done"
}

var doWhileLoop = function(array) {
  var maybeTrue = function() {
    return Math.random() >= 0.5
  }
  do {
    array.pop();
    return array
  } while (array.length > 0 || maybeTrue());
}
