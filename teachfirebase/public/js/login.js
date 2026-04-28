 const firebaseConfig = {
    apiKey: "AIzaSyAeuw5CKyaxQrvNHskWTFWeHZ7cDXqJZiE",
    authDomain: "chatapp-fec30.firebaseapp.com",
    projectId: "chatapp-fec30",
    storageBucket: "chatapp-fec30.firebasestorage.app",
    messagingSenderId: "484920290116",
    appId: "1:484920290116:web:f63038b4930cd517180511"
  };

  // Initialize Firebase
  const app = firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();


  function logInUser(ev) {
let email = document.getElementById('login-email').value.trim()
let password = document.getElementById('login-password').value.trim()

if (!email || !password) {
    alert('all fields are mandatory')
} else {
 ev.target.innerHTML = 'loading..'
    ev.target.disabled = true



  auth.signInWithEmailAndPassword(email, password)
  .then((userCredential) => {
    var user = userCredential.user;
    alert('sign in succesful')
    window.location.href = 'dashboard.html'
   ev.target.innerHTML = 'Log in →'
    ev.target.disabled = false
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    if (errorMessage === 'Firebase: The supplied auth credential is incorrect, malformed or has expired. (auth/invalid-credential).') {
         alert('user not found , please try signing up') 
         location.href = 'login'
    }else {
        alert(errorMessage)
    }
  
    ev.target.innerHTML = 'Log in →'
    ev.target.disabled = false
    
  });


}


  
  }