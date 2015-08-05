var fs = require('fs');
var svg2ttf = require('svg2ttf');

var svgStr = fs.readFileSync('./svg/sample.svg', 'utf-8');

var result = svg2ttf(svgStr);
