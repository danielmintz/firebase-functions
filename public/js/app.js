const requestModal = document.querySelector('.new-request');
const requestLink = document.querySelector('.add-request');


//open request model

requestLink.addEventListener('click', () => {
requestModal.classList.add('open');
})

requestModal.addEventListener('click', (e) => {
    if (e.target.classList.contains('new-request')){ 
        requestModal.classList.remove('open')
}
})

//sayHello function call
const button = document.querySelector('.call');
button.addEventListener('click', () =>{
    // get function reference (nb for ease name const the same as function)
    const sayHello = functions.httpsCallable('sayHello');
    //call the function and pull in data i.e. here name data .. //this is asynchronyous as takes time... so returns a promise so use .then to make it happen
    sayHello({name: 'Daniel'}).then(result => {
        console.log(result.data);
    });
   
})