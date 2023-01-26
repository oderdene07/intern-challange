var firebaseConfig = {
  apiKey: "AIzaSyBquk9B99Xbv4Ivf8G5c6Jz3j_9ehwIpjc",
  authDomain: "intern-challange-4c04a.firebaseapp.com",
  projectId: "intern-challange-4c04a",
  storageBucket: "intern-challange-4c04a.appspot.com",
  messagingSenderId: "667265763112",
  appId: "1:667265763112:web:47f7dc9f47f30db1edb21d",
  measurementId: "G-R2LTCGLCKH",
};

firebase.initializeApp(firebaseConfig);
firebase.auth();

document
  .getElementById("facebook-login")
  .addEventListener("click", function () {
    var provider = new firebase.auth.FacebookAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(function (result) {
        var user = result.user;
        console.log("User logged in:", user);
        window.location.href = "home.html";
        localStorage.setItem("userName", user.displayName);
      })
      .catch(function (error) {
        console.log("Error:", error);
      });
  });

window.fbAsyncInit = function () {
  FB.init({
    appId: "1996794904003920",
    autoLogAppEvents: true,
    xfbml: true,
    version: "v9.0",
  });
};

(function (d, s, id) {
  var js,
    fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) {
    return;
  }
  js = d.createElement(s);
  js.id = id;
  js.src = "https://connect.facebook.net/en_US/sdk.js";
  fjs.parentNode.insertBefore(js, fjs);
})(document, "script", "facebook-jssdk");
