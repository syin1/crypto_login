$(document).ready(function() {
  // Initialize Firebase
  var config = {
    apiKey: 'AIzaSyDrUNEnNbR15kk7krapEo1QOb09pdTBYrA',
    authDomain: 'sharpr-crypto.firebaseapp.com',
    databaseURL: 'https://sharpr-crypto.firebaseio.com',
    projectId: 'sharpr-crypto',
    storageBucket: 'sharpr-crypto.appspot.com',
    messagingSenderId: '1053528505391'
  };
  firebase.initializeApp(config);

  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      $('#loginuser').text(user.displayName);

      console.log(user);
    } else {
      // No user is signed in.
      $('#loginuser').text('anonymous');
    }
  });
});
