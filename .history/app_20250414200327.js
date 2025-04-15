"""
Text Summarization Tool - Main Application (Simplified)
Author: Emilbek
Last Modified by: Emibek
Date Last Modified: 04.03.2025
Description: Flask web application for text summarization
Revision History: Initial version 1.0
"""
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);

module.exports = app;
