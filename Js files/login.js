// console.log('checking connection');
document.getElementById('register-button').addEventListener('click', function(){
    // console.log('register button clicked');
    const userEmail = document.getElementById('user-email');
    const targetEmail = userEmail.value;
    // console.log(targetEmail);

    const userPassword = document.getElementById('user-password');
    const targetPassword = userPassword.value;
    // console.log(targetEmail, targetPassword);

    // DANGER: DO NOT verify used ID & password on the client server;
    if(targetEmail === 'minime@hero.com' && targetPassword === 'entering'){
        window.location.href= 'Bank-balance.html' ;
    }
    else{
        console.log('invalid user');
    }
})



