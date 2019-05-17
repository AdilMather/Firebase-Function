const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.helloWorld1 = functions.https.onRequest((request, response) => {

    response.send("Hello world 1 function from Firebase!");

});

exports.helloWorld2 = functions.https.onRequest((request, response) => {

    response.send("Hello world 2 function from Firebase!");
    
});

exports.helloWorld3 = functions.https.onRequest((request, response) => {

    response.send("Hello world 3 function from Firebase!");
    
});
