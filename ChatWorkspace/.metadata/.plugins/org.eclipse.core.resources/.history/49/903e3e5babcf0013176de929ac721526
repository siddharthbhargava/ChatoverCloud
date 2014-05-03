/*Pending Tasks
 *Handle JSON objects properly in all functions. 
 *Describe requirements of JSON objects - Schema.
 *Validate user input against requirements of each collection.
 *Code all possible queries.
 *Export all functions.*/


// Include MongoDb to Node.js

var mongojs = require('mongojs');
var Db = require('mongojs').Db;
var MongoClient = require('mongojs').MongoClient;
var Server = require('mongojs').Server;
var ReplSetServers = require('mongojs').ReplSetServers;
var ObjectID = require('mongojs').ObjectID;
var Binary = require('mongojs').Binary;
var GridStore = require('mongojs').GridStore;
var Grid = require('mongojs').Grid;
var Code = require('mongojs').Code;
var BSON = require('mongojs').pure().BSON;
var assert = require('assert');
var express = require('express');
var app = express();


//connect to collections existing in the url: chatOverCloud.com/chatDB 
//url can be replaced with the link to a file on cloud which creates & contains these collections.

var dbC = mongojs('chatOverCloud.com/chatdb', ['Client']);  //Client collection - connection object.
var dbCO = mongojs('chatOverCloud.com/chatdb', ['conversation']); //conversation collection - connection object.
var dbK = mongojs('chatOverCloud.com/chatdb', ['knowledgeDB']); //knowledge collection - connection object.
var dbO = mongojs('chatOverCloud.com/chatdb', ['offlineDB']); //offline collection - connection object.


/*
 * 
 * Not Sure if this is the correct for creating collections and connecting to them :-
 * 
 * 
var databaseUrl = "chatDB"; 
var collections1 = ['Client'];

var dbC = (createAndConnectOfflineDB(), function(err,db1){

function createAndConnectClientDB(){
//var collections1 = ['Client'];
db1.require('mongojs').connect(databaseUrl, collections1);

}});

var dbO = (createAndConnectOfflineDB(), function(err,db4){

function createAndConnectOfflineDB(){
var collections4 = ['OfflineDB'];
db4.require('mongojs').connect(databaseUrl, collections4);

}});

var dbCO = (createAndConnectConversationDB(), function(err,db2){

function createAndConnectConversationDB(){	
var collections2 = ['conversationDB'];
db2.require('mongojs').connect(databaseUrl, collections2);
}});

var dbK = (createAndConnectknowledgeDB(), function(err,db3){

function createAndConnectknowledgeDB(){
var collections3 = ['knowledgeDB'];
db3.require('mongojs').connect(databaseUrl, collections3);
}});

*/

//Code to insert docs to collections.

function insertToClient(json){

dbC.Client.insert(json, function(err, success) {
if( err || !saved ) console.log("Insert Failed.");
else console.log("Insert operation Succesful");
});
}

function insertToOfflineDB(json){

dbO.offlineDB.insert(json, function(err, success) {
if( err || !saved ) console.log("Insert Failed.");
else console.log("Insert operation Succesful");
});
}

function insertToConversationDB(json){

dbCO.conversationDB.insert(json, function(err, success) {
  if( err || !saved ) console.log("Insert Failed.");
  else console.log("Insert operation Succesful");
});
}


function insertToKnowledgeDB(json){

dbK.knowledgeDB.insert(json, function(err, success) {
  if( err || !saved ) console.log("Insert Failed.");
  else console.log("Insert operation Succesful");
});
}


//Update docs to collections

function updateClient(json){

dbC.Client.update(json, function(err, success) {
if( err || !saved ) console.log("Update Failed.");
else console.log("Update operation Succesful");
});
}

function updateKnowledgeDB(json){

dbK.knowledgeDB.update(json, function(err, success) {
if( err || !saved ) console.log("Update Failed.");
else console.log("Update operation Succesful");
});
}


//Remove docs from collections

function removeClient(json){

dbC.Client.remove(json, function(err, success) {
if( err || !saved ) console.log("Remove operation Failed.");
else console.log("Remove operation Succesful");
});
}

function removeOfflineMessages(json){

dbO.offlineDB.remove(json, function(err, success) {
if( err || !saved ) console.log("Remove operation Failed.");
else console.log("Remove operation Succesful");
});
}

function removeConversations(json){

dbCO.conversationDB.remove(json, function(err, success) {
if( err || !saved ) console.log("Remove operation Failed.");
else console.log("Remove operation Succesful");
});
}


function removeKnowledgeFAQ(json){

dbK.knowledgeDB.remove(json, function(err, success) {
if( err || !saved ) console.log("Remove operation Failed.");
else console.log("Remove operation Succesful");
});
}

//Query Clients 

function findAllClients(json){

dbC.Client.find(json.name);
	
}

//Query Conversation based on Clients

function conversationByClient(json){

dbCO.conversation.find("{json.clientName, json.customerName}");
	
}

//Query for offline messages

function offlineMessages(json){

dbO.offlineDB.find("{json.clientName, json.clientMessage, json.customerName, json.customerMessage.},{json.unread: 1}")

}

function knowledgeQuery(json){
	
dbK.knowledgeDB.find(/*Match Keywords of user entered chat with the keywords in the collection */)
	
}

/*MongoDB Reference for creating collections.
db.collection('clientDB', {strict:true}, function(err, collection) {});
db.collection('conversationDB', {strict:true}, function(err, collection) {});
db.collection('knowledgeDB', {strict:true}, function(err, collection) {});
*/

