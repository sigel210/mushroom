var express = require('express');
var router = express.Router();
var http = require("http");
var request = require('request');
var md = require("./../md/md")
/* GET home page. */

router.get("*", (req, res, next) => {
	res.header("Access-Control-Allow-Origin", "*");
	res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
	res.header("Access-Control-Allow-Headers", "X-Requested-With");
	res.header('Access-Control-Allow-Headers', 'Content-Type');
	res.writeHead(200, {
		"Content-Type": "text/html;charset=utf-8"
	})
	next();
})


router.get('/boyhome', function(req, res, next) {
	var url = 'http://mce.mogucdn.com/jsonp/multiget/3?pids=51822%2C51827%2C41119%2C51833%2C51836%2C4604&callback=jsonp51822_51827_41119_51833_51836_4604'
	md.connect(url, res)

});

router.get('/girlhome', function(req, res, next) {

	var url = 'http://api.chuchujie.com/api?client=%7B%22ageGroup%22%3A%22AG_0to24%22%2C%22channel%22%3A%22QD_web_webkit%22%2C%22deviceId%22%3A%220%22%2C%22gender%22%3A%221%22%2C%22imei%22%3A%220%22%2C%22packageName%22%3A%22com.culiu.purchase%22%2C%22platform%22%3A%22wap%22%2C%22sessionId%22%3A%220%22%2C%22shopToken%22%3A%220%22%2C%22userId%22%3A%220%22%2C%22version%22%3A%221.0%22%2C%22xingeToken%22%3A%22%22%7D&query=%7B%22module%22%3A%22brand%22%2C%22category%22%3A%22all%22%2C%22function%22%3A%22list%22%7D'
	md.connect(url, res)

});

router.get('/boynine', function(req, res, next) {

	var url = 'http://api.chuchujie.com/api?client=%7B%22ageGroup%22%3A%22AG_0to24%22%2C%22channel%22%3A%22QD_web_webkit%22%2C%22deviceId%22%3A%220%22%2C%22gender%22%3A%221%22%2C%22imei%22%3A%220%22%2C%22packageName%22%3A%22com.culiu.purchase%22%2C%22platform%22%3A%22wap%22%2C%22sessionId%22%3A%220%22%2C%22shopToken%22%3A%220%22%2C%22userId%22%3A%220%22%2C%22version%22%3A%221.0%22%2C%22xingeToken%22%3A%22%22%7D&query=%7B%22module%22%3A%2299%22%2C%22tab%22%3A%22all%22%7D'
	md.connect(url, res)

});

router.get('/girlnine', function(req, res, next) {

	var url = 'http://api.chuchujie.com/api?client=%7B%22ageGroup%22%3A%22AG_0to24%22%2C%22channel%22%3A%22QD_web_webkit%22%2C%22deviceId%22%3A%220%22%2C%22gender%22%3A%220%22%2C%22imei%22%3A%220%22%2C%22packageName%22%3A%22com.culiu.purchase%22%2C%22platform%22%3A%22wap%22%2C%22sessionId%22%3A%220%22%2C%22shopToken%22%3A%220%22%2C%22userId%22%3A%220%22%2C%22version%22%3A%221.0%22%2C%22xingeToken%22%3A%22%22%7D&query=%7B%22module%22%3A%2299%22%2C%22tab%22%3A%22all%22%7D'
	md.connect(url, res)

});


router.get('/boykind', function(req, res, next) {

	var url = 'http://api.chuchujie.com/api?client=%7B%22ageGroup%22%3A%22AG_0to24%22%2C%22channel%22%3A%22QD_web_webkit%22%2C%22deviceId%22%3A%220%22%2C%22gender%22%3A%221%22%2C%22imei%22%3A%220%22%2C%22packageName%22%3A%22com.culiu.purchase%22%2C%22platform%22%3A%22wap%22%2C%22sessionId%22%3A%220%22%2C%22shopToken%22%3A%220%22%2C%22userId%22%3A%220%22%2C%22version%22%3A%221.0%22%2C%22xingeToken%22%3A%22%22%7D&query=%7B%22module%22%3A%22search%22%2C%22function%22%3A%22v3%22%2C%22sort%22%3A%22favcount_desc%22%7D'
	md.connect(url, res)

});


router.get('/girlkind', function(req, res, next) {

	var url = 'http://api.chuchujie.com/api?client=%7B%22ageGroup%22%3A%22AG_0to24%22%2C%22channel%22%3A%22QD_web_webkit%22%2C%22deviceId%22%3A%220%22%2C%22gender%22%3A%220%22%2C%22imei%22%3A%220%22%2C%22packageName%22%3A%22com.culiu.purchase%22%2C%22platform%22%3A%22wap%22%2C%22sessionId%22%3A%220%22%2C%22shopToken%22%3A%220%22%2C%22userId%22%3A%220%22%2C%22version%22%3A%221.0%22%2C%22xingeToken%22%3A%22%22%7D&query=%7B%22module%22%3A%22search%22%2C%22function%22%3A%22v3%22%2C%22sort%22%3A%22favcount_desc%22%7D'
	md.connect(url, res)

});


module.exports = router;