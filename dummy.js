
// Start of dummy file
var logUpperCase = function() {
  var _this = this

  this.string = this.string.toUpperCase()
  return function () {
    return console.log(_this.string)
  }
}

logUpperCase.call({ string: 'es6 rocks' })()


// Good looking example comment
function materialfunc(param) {
    var text = 'string';
    for (var i = 0; i < param.length; i++) {
        text += i;
    }
    return {
        "text": text,
        "boolean": false
    };
} 

//© 2016 GitHub, Inc. Terms Privacy Security Status Help