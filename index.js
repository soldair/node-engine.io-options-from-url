var url = require('url')

module.exports = function(serverUrlWithPath){

  var parsed = url.parse(serverUrlWithPath);
  var loc = process.browser?url.parse(window.location.href):{};

  // simple /engine.io
  if(!parsed.hostname) return serverUrlWithPath;

  var secure = true; 
  if(serverUrlWithPath.indexOf('http:') === 0){
    secure = false;
  }

  return {
    forceJSONP:loc.host != parsed.host, // silly to setup cors for this.
    hostname:parsed.hostname,
    port:parsed.port||(secure?443:80),
    path:parsed.path,
    secure:secure
  };

}

