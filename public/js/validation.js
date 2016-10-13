

var registerForm = document.getElementById("register");

//runs password confirmation on form submittion
registerForm.addEventListener("submit", function(e){
  e.preventDefault();
  return (e.target[1].value !== e.target[2].value)? incorrectPass() : this.submit();
});

function incorrectPass() {
  var message = document.getElementById("message");
  message.className += "error show";
  message.innerHTML = "password do not match";
}
