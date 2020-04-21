const authSwitchLinks = document.querySelectorAll('.switch');
const authModals = document.querySelectorAll('.auth .modal');
const authWrapper = document.querySelector('.auth');
const registerForm = document.querySelector('.register');
const loginForm = document.querySelector('.login');
const signOut = document.querySelector('.sign-out');



//toggle login / register modals
authSwitchLinks.forEach(link => {
    link.addEventListener('click', () =>{
        authModals.forEach(modal => modal.classList.toggle('active'));
    });
})

// register form
registerForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = registerForm.email.value;
    const password = registerForm.password.value;
    // console.log(email, password);
    auth.createUserWithEmailAndPassword(email, password)
    //asynchronous.. takes time so deliver a promise 
    //hence use the then() method. firebase returns user object we can use
        .then((user) => {
            console.log('registered', user)
            registerForm.reset();
        })
       // if we have errors and esp if want to print them out then
       // we need the catch() methos
        .catch((error)=>{
            console.log('error is', error)
            //neat way to do a queryselector below that is very specific
            registerForm.querySelector('.error').textContent = error.message;
        });
});

// Log-in form
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = loginForm.email.value;
    const password =loginForm.password.value;
    // console.log(email, password);
    auth.signInWithEmailAndPassword(email, password)
    //asynchronous.. takes time so deliver a promise 
    //hence use the then() method. firebase returns user object we can use
        .then((user) => {
            console.log('logged in', user)
          loginForm.reset();
        })
       // if we have errors and esp if want to print them out then
       // we need the catch() methos
        .catch((error)=>{
            console.log('error is', error)
            //neat way to do a queryselector below that is very specific
            loginForm.querySelector('.error').textContent = error.message;
        })
})
// Loggin out
signOut.addEventListener('click', () => {
    auth.signOut()
        .then(() => {
            console.log('signed out')
        })
})

//auth listlener 
//to control if modal is seen i.e. logged out or not shown ie logged in

auth.onAuthStateChanged((user) => {
    if (user) {
        authWrapper.classList.remove('open');
        authModals.forEach(modal => modal.classList.remove('active'))

    } else {
        authWrapper.classList.add('open');
        authModals[0].classList.add('active');
    }

})


