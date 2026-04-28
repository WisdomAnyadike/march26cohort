console.log(firebase);

 
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



 function signUpUser(ev) {
  

    let email = document.getElementById('email').value.trim()
    let password = document.getElementById('password').value.trim()
     let fullname = document.getElementById('fullname').value.trim()
      let confirm = document.getElementById('confirm').value.trim()


    if (!email || !password || !fullname || !confirm){
        alert('all fields are mandatory')
    }else if (confirm !== password){
        alert('passwords must match')
    }else if (/[0-9]/.test(fullname)) {
alert('fullname must not include a number')
    }else {
          ev.target.innerHTML = 'loading...'
     ev.target.disabled = true

   firebase.auth().createUserWithEmailAndPassword(email, password)
  .then((userCredential) => {
    var user = userCredential.user;
    alert( 'sign up successful');
      ev.target.innerHTML = 'Sign Up →'
     ev.target.disabled = false
    window.location.href = 'login.html'
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    alert(errorMessage);
    ev.target.innerHTML = 'Sign Up →'
     ev.target.disabled = false
  });
    }
 }



// console.log(/[0-9]/.test('nuel123'));
