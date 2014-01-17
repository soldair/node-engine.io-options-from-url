var test = require('tape');
var fix = require('../');

test("regular uri comes back a string",function(t){
  t.equals(fix('/hi'),'/hi','simple should still be the same');
  t.end();
});


test("it works",function(t){
  var window = 1;
  var opts = fix('https://works.com:8001/socket');

  console.log(opts);

  t.end();
});
