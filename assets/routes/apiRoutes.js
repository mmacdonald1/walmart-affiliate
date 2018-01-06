var path = require('path');
var request = require('request');



module.exports = function(app) {
var walmartKeys =require('../keys.js');
var walmart = require('walmart')(walmartKeys.apiKey);


var url="";
request.get(url, function(error, response, body){
console.log(JSON.parse(body));
});
};