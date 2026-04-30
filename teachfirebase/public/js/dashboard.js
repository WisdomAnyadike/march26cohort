
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
  let chatIndex 



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
 database.ref('chats/' + chatIndex).set({
    sender:  auth.currentUser.displayName ,
    time: new Date().toLocaleTimeString() ,
    message  ,
    isDeleted : false 
  }).then(()=> {
    document.querySelector('.group-chat-input').value = ''
  }).catch((err)=> {
alert(err.message)
  })


 }


}


function displayMessages(params) {
 
firebase.database().ref('chats').on('value', (snapshot) => {
  const data = snapshot.val() || []
  chatIndex = data.length
  console.log(data);
   document.querySelector('.group-chat-feed').innerHTML = ''
  data.forEach((chat , i , arr) => {
    let itsMe = auth.currentUser.displayName === chat.sender


    document.querySelector('.group-chat-feed').innerHTML += `<div ondblclick="deleteMssg(${i} , ${itsMe} , ${chat.isDeleted})" class="group-message ${itsMe ?'is-self' : ''}">
              <div class="group-msg-avatar"> ${chat.sender[0].toUpperCase()}</div>
              <div class="group-msg-body">
                <p class="group-msg-meta"><span class="group-msg-name">${itsMe ? 'You' : chat.sender }</span> ${chat.time}</p>
                <p class="group-msg-bubble">${chat.isDeleted ? 'This message has been deleted' : chat.message}</p>
              </div>
            </div>`
    
  });



});
  




}






displayMessages()



function deleteMssg(index , itsMyMessage , MessageDeleted) {
if (!itsMyMessage) {
  alert('unauthorized')
  return
}

if (MessageDeleted) {
  alert('message already deleted')
  return
}



  let canDelete = confirm("are you sure?")
  if (canDelete) {
     database.ref(`chats/${index}`).update( { isDeleted : true});
    //  alert('message deleted successfully')
  }


  
}