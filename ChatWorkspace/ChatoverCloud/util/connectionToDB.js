var assert = require('assert');
var mongojs = require('mongojs');
var db = mongojs('chatDB', ['clientDB']);

function clientDBConnection(){

	db.createCollection('clientDB', function(err,collection) {
	assert(!err);
	return collection;
	});
}

exports.clientDBConnection = clientDBConnection;

function conversationDBConnection(){

	db.createCollection('conversationDB', function(err,collection) {
	assert(!err);
	return collection;
	});
}

exports.conversationDBConnection = conversationDBConnection;

function offlineDBConnection(){

	db.createCollection('offlineDB', function(err,collection) {
	assert(!err);
	return collection;
	});
}

exports.offlineDBConnection = offlineDBConnection;

function knowledgeDBConnection(){

	db.createCollection('knowledgeDB', function(err,collection) {
	assert(!err);
	return collection;
	});
}

exports.knowledgeDBConnection = knowledgeDBConnection;

function closeDBConnection(collection) {
	collection.end();
}

exports.closeDBConnection = closeDBConnection;