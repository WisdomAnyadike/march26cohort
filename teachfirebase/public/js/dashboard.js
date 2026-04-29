
   const firebaseConfig = {
    apiKey: "AIzaSyAeuw5CKyaxQrvNHskWTFWeHZ7cDXqJZiE",
    authDomain: "chatapp-fec30.firebaseapp.com",
    databaseURL: "https://chatapp-fec30-default-rtdb.firebaseio.com",
    projectId: "chatapp-fec30",
    storageBucket: "chatapp-fec30.firebasestorage.app",
    messagingSenderId: "484920290116",
    appId: "1:484920290116:web:f63038b4930cd517180511"
  };

  // Initialize Firebase
  const app = firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();
  const database = firebase.database();



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
  document.querySelector('.group-chat-feed').innerHTML = 'loading...'
document.querySelector('.group-chat-send').disabled = true


    auth.onAuthStateChanged((user) => {
  if (user) {

    var uid = user.uid;
    console.log(user);
      document.querySelector('.group-chat-feed').innerHTML = ''
document.querySelector('.group-chat-send').disabled = false
    document.querySelector('.welcome-tag').innerHTML = `Hello , ${user.displayName || 'USER'} `
      document.querySelector('.welcome-heading').innerHTML = `${JSON.parse(localStorage.getItem(user.email)) ? 'Welcome back' : 'Welcome'}, ${user.displayName || 'USER'} 👋`
    localStorage.setItem(`${user.email}`, JSON.stringify(true))
  } else {
    window.location.href = 'login.html'
   
  }
});
}

checkAuth()


function sendMessage(params) {
 let message = document.querySelector('.group-chat-input').value.trim()

 if (!message) {
  alert('input cannot be empty')
 }else {
 database.ref('chats/' + 0).set({
    sender:  auth.currentUser.displayName ,
    time: new Date().toLocaleTimeString() ,
    message  
  }).then(()=> {
alert('messge sent successfully')
  }).catch((err)=> {
alert(err.message)
  })


 }


}


function displayMessages(params) {
 




database.ref('chats').on('value', (snapshot) => {
  const data = snapshot.val();
console.log(data);

});
  
}

displayMessages()