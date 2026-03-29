  // Import the functions you need from the SDKs you need
  // import { last } from "firebase/firestore/pipelines";
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.11.0/firebase-app.js";
    import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.11.0/firebase-auth.js";
  import { getFirestore, setDoc, doc } from "https://www.gstatic.com/firebasejs/12.11.0/firebase-firestore.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyADgEL0zawmR2qlUWTq3r2ZNJVSxFCwA4M", 
    authDomain: "login-form-122cb.firebaseapp.com",
    projectId: "login-form-122cb",
    storageBucket: "login-form-122cb.firebasestorage.app",
    messagingSenderId: "192959769573",
    appId: "1:192959769573:web:83ac0ae380777aea611d0c"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

function showMessage(message, divId){
    var messageDiv = document.getElementById(divId);
    messageDiv.style.display = "block";
    messageDiv.innerHTML = message;
    messageDiv.style.opacity = 1;
    setTimeout(function(){
      messageDiv.style.opacity = 0;
    },5000);
}

  const signUp = document.getElementById("submitSignUp");
  signUp.addEventListener('click', (event)=>{
    event.preventDefault();
    const email = document.getElementById("rEmail").value;
    const password = document.getElementById("rPassword").value;
    const firstName = document.getElementById("fName").value;
    const lastName = document.getElementById("lName").value;
    const auth = getAuth();
    const db = getFirestore();
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential)=>{
        const user = userCredential.user;
        const userData = {
          email: email,
          firstName: firstName,
          lastName: lastName
        };

        showMessage('Account created successfully!', 'signUpMessage');
        const docRef = doc(db, "users", user.uid);
        setDoc(docRef, userData)
        .then(()=>{
          window.location.href = "index.html";
        })
        .catch((error)=>{
          console.error("Error adding documenrt:",error);

        })
    })
    .catch((error)=>{
        const errorCode = error.code;
        if(errorCode== 'auth/email-already-in-use'){
            showMessage('Email already in use!-!-!', 'signUpMessage');
        }
        else{
          showMessage('Unable to create account', 'signUpMessage');
        }
    })
});