const requestModal = document.querySelector('.new-request');
const requestLink = document.querySelector('.add-request');
const requestForm = document.querySelector('.new-request form');

//open request model

requestLink.addEventListener('click', () => {
requestModal.classList.add('open');
})

requestModal.addEventListener('click', (e) => {
    if (e.target.classList.contains('new-request')){ 
        requestModal.classList.remove('open')
}
})

//adding a tutorial 
requestForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const addRequest = functions.httpsCallable('addRequest');
    addRequest({
        text: requestForm.request.value,
    })
    .then(() => {
        requestForm.reset();
        requestModal.classList.remove('open');
        requestForm.querySelector('.error').textContent = ``;

    })
    .catch(error => { 
        requestForm.querySelector('.error').textContent = error.message;
    });
});



//sayHello function call
// const button = document.querySelector('.call');
// button.addEventListener('click', () =>{
//     // get function reference (nb for ease name const the same as function)
//     const sayHello = functions.httpsCallable('sayHello');
//     //call the function and pull in data i.e. here name data .. //this is asynchronyous as takes time... so returns a promise so use .then to make it happen
//     sayHello({name: 'Daniel'}).then(result => {
//         console.log(result.data);
//     });
// })