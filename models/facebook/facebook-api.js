
var https = require("https")

exports.getUser = function(token) {
  var options = {
    host: 'graph.facebook.com',
    path: '/v2.7/me?fields=name,id&access_token=' +  token,
    method: 'GET'
  };

  var callback = function(res){
    var str= ''

    res.on('data', function(chunk){
      str += chunk;
    });

    res.on('end', function(){
      console.log(str);
    })
  };

  https.request(options, callback).end();
};
