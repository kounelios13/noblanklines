#!/usr/bin/env node
var log  = (o)=>console.log(o);
log("Hello from arrow");
var program = require("commander");
program
	.arguments("<file>")
	.option("-i,--input"," The file to remove blank lines from")