#!/usr/bin/env node
var pictureTube = require('picture-tube')
var tube = pictureTube();
var url = process.argv[3] || process.argv[2];
tube.pipe(process.stdout);


var request = require('request');
request.get(url).pipe(tube);

/*
var pictureTube = require('picture-tube')
var tube = pictureTube();
tube.pipe(process.stdout);

var fs = require('fs');
fs.createReadStream('cat_PNG1631.png').pipe(tube);
*/

/*
var pictureTube = require('picture-tube')
var tube = pictureTube();
var url = process.argv[3] || process.argv[2];
tube.pipe(process.stdout);

var request = require('request');
request.get(url).pipe(tube);
*/