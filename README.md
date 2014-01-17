node-engine.io-options-from-url
===============================

engine.io-cleint's options / defaults are seriously broken for cross domain. this takes a url and sets the options correctly.

```
var engine = require('engine.io-stream')
var fix = require('engine.io-options-from-url');

var stream = engine(fix('https://mywebsopckets.com/engine'));

// profit

```

in this example engine.io will send your websocket to http://thedomainyouareon.comhttps//mywebsopckets.com/engine 

w t f
