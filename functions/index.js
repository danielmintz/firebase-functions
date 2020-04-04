const functions = require('firebase-functions');


//http request 1 (endpoint (assertable url)request function) i.e. works by calling the url

exports.randomNumber = functions.https.onRequest((request, response) => {
const number = Math.round(Math.random() * 100);
console.log(number)
response.send(number.toString());

});

//htttp request 2 (endpoint (assertable url) request function)
// redirect url..
exports.toTheDo = functions.https.onRequest((request, response) => {
    response.redirect('https://www.ibikeride.com');
});

// http callable function (function you call from within thecode rather than url method above)
exports.sayHello = functions.https.onCall((data, context) => {
    const name = data.name
return `hello, ${name}`;
});

// firebase deploy --only functions

