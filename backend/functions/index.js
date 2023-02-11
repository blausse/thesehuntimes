const functions = require("firebase-functions");


exports.gpt = functions.https.onRequest(require('./api'));
