const wol = require('wol');
var http = require('http');
var url = require('url');
var os = require('os');

var getIpAddress = function() {
    var ifaces = os.networkInterfaces();
    var ips = {};
    for (var dev in ifaces) {
        var alias=0;
        ifaces[dev].forEach(function(details){
            if (details.family=='IPv4') {
                // console.log(dev+(alias?':'+alias:''),details.address);
                ips[dev+(alias?':'+alias:'')] = details.address;
                ++alias;
            }
        });
    }
    return ips;
};


// All present interfaces 
var server_ip = getIpAddress();
console.log( 'Server available interfaces:' + '\n', server_ip);

// Using eth0, but this can be changed
var listening_on = server_ip.eth0
var using_port = 1337

http.createServer(function (req, res) {
	  res.writeHead(200, {'Content-Type': 'text/plain'});
	  var query = url.parse(req.url, true).query;
          var mac = query.mac;

	  if (mac){
	  	wol.wake(mac, function(err, res){
  			console.log(query, res);
	  	});

          	res.write('Magic packet sent to: ' + mac);
          }
	  else {
	        res.write('What can i help you with, sir?')
	  }
	  res.end();
}).listen(using_port, listening_on);
console.log('Server running at http://' + listening_on +':' + using_port + '/');




