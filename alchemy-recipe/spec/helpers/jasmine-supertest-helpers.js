beforeAll(function(){
  this.finish_test = function(done) {
    return function (err) {
      if (err) {
        done.fail(err)
      } else {
        done()
      }
    }
  }

  this.deepCopy = function(obj) {
    return JSON.parse(JSON.stringify(obj));
  }
});
