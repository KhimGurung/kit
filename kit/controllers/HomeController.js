const express = require('express');

const app = express();

const path = require('path');

exports.home = function(req, res){
	res.render(path.join(__dirname, '/../view/index'));
}
exports.our_team = function(req, res){
	res.render(path.join(__dirname,'/../view/our_team'));
}
exports.what_we_do = function(req, res){
	res.render(path.join(__dirname,'/../view/what_we_do'));
}
exports.contact_us = function(req, res){
	res.render(path.join(__dirname,'/../view/contact_us'));
}
exports.we_supply = function(req, res){
	res.render(path.join(__dirname,'/../view/we_supply'));
}
exports.tea_from_nepal = function(req, res){
	res.render(path.join(__dirname,'/../view/tea_from_nepal'));
}