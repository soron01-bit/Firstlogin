// const signUpButton=document.getElementById('signUpButton');
// const signInButton=document.getElementById('signInButton');
// const signInForm=document.getElementById('signIn');
// const signUpForm=document.getElementById('signup');

// signUpButton.addEventListener('click',function(){
//     signInForm.style.display="none";
//     signUpForm.style.display="block";
// })
// signInButton.addEventListener('click', function(){
//     signInForm.style.display="block";
//     signUpForm.style.display="none";
// })


const signUpBtn = document.getElementById("signUpButton");
const signInBtn = document.getElementById("signInButton");

const signUpForm = document.getElementById("signup");
const signInForm = document.getElementById("signIn");

signUpBtn.addEventListener("click", () => {
    signInForm.style.display = "none";
    signUpForm.style.display = "block";
});

signInBtn.addEventListener("click", () => {
    signUpForm.style.display = "none";
    signInForm.style.display = "block";
});