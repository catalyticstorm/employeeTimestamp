config = {
    apiKey: "AIzaSyB8NkUEwv0VV7fUghbb7m21acmlO4mBMkI",
    authDomain: "mytestproject-d68d0.firebaseapp.com",
    databaseURL: "https://mytestproject-d68d0.firebaseio.com",
    projectId: "mytestproject-d68d0",
    storageBucket: "mytestproject-d68d0.appspot.com",
    messagingSenderId: "904116186015"
  };
    firebase.initializeApp(config);
    // Create a variable to reference the database
    var database = firebase.database();
    // Initial Values
    var name = "";
    var role = "";
    var startdate = "";
    var rate = "";
    // Capture Button Click
    $("#addEmployeeBtn").on("click", function() {
      // Don't refresh the page!
      event.preventDefault();
      // YOUR TASK!!!
      // Code in the logic for storing and retrieving the most recent user.
      // Don't forget to provide initial data to your Firebase database.
      name = $("#employeeNameInput").val().trim();
      role = $("#roleInput").val().trim();
      startdate = $("#startInput").val().trim();
      rate = $("#rateInput").val().trim();
      database.ref().push({
        name: name,
        role: role,
        startdate: rate,
        rate: startdate
      });
    });
    // Firebase watcher + initial loader HINT: .on("value")
    database.ref().on("value", function(snapshot) {
      // Log everything that's coming out of snapshot
      console.log(snapshot.val());
      console.log(snapshot.val().name);
      console.log(snapshot.val().role);
      console.log(snapshot.val().rate);
      console.log(snapshot.val().startdate);
      // Change the HTML to reflect
      $("#name-display").text(snapshot.val().name);
      $("#role-display").text(snapshot.val().role);
      $("#startdate-display").text(snapshot.val().startdate);
      $("#rate-display").text(snapshot.val().rate);
      // Handle the errors
    }, function(errorObject) {
      console.log("Errors handled: " + errorObject.code);
    });