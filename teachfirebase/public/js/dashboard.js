
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



function signUserOut(params) {
let canSignOut = confirm('are you sure?')
if (canSignOut) {
        auth.signOut().then(() => {
        alert('sign out successful')
  window.location.href = 'login.html'
}).catch((error) => {
   alert(error.message)
});
}
}



function checkAuth() {
    auth.onAuthStateChanged((user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/v8/firebase.User
    var uid = user.uid;
    console.log(user);
    
    document.querySelector('.welcome-tag').innerHTML = `Hello , ${user.displayName || 'USER'} `
      document.querySelector('.welcome-heading').innerHTML = `Welcome back, ${user.displayName || 'USER'} 👋`
    // ...
  } else {
    window.location.href = 'login.html'
    // User is signed out
    // ...
  }
});
}

checkAuth()