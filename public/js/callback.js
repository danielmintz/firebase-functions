
// A callback function is a function result then processed in another function
// using that result

// So I ask for someones name in one function and then using that function rsult i.e. the callback
// I enter that into another function (which is calling back the result of the previous function)

function greeting(name) {
    alert('hey there ' + name)
}



function processInputUser(callback) {
    var name = prompt('hey tell me you name');
    callback(name)
}


processInputUser(greeting)












// function greeting(name) {
//     alert('hi there ' + name)
// }


// function processInputUser(callback) {
//     var name = prompt('How do you like to be called?')
//     callback(name)
// }

// processInputUser(greeting)







// console.log('name')
// function greeting(name) {
//     alert('hi there' + name)
// }



// function processInput(callback) {

//     var name = prompt('what is your name')
//     callback(name)
// }

// processInput(greeting)