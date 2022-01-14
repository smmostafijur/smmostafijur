function login() {
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;
  var demail = "smmostafijur555@gmail.com";
  var dpassword = "0000";
  
  if(ValidateEmail(email)==false){
    return;
  }
  
  if (password.length < 4) {
    alert("your passwordword is too sort");
    return;
  }
  if (password.length > 16) {
    alert("your passwordword is too long")
    return;
  }

  if (email == "" || password == "") {
    alert("khali rakhso");
    return;
  };

  if (email == demail && password == dpassword) {

    window.location.href = "https://smmostafijur.github.io/portfolio/";
    return;
  };
  ValidateEmail(email);
  if (email != demail) {
    alert("invalid email");
    return;
  };
  if (password != dpassword) {
    alert("invalid passwordword");
    return;
  };
}
function ValidateEmail(inputText) {
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (inputText.match(mailformat)) {
    return true;
  } else
  {
    alert("You have entered an invalid email address!");
    
    return false;
  }
}