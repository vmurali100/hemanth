function validate() {
  var user = captureUser();
  var emailPattern = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
  if (
    user.fname !== "" &&
    user.lname !== "" &&
    user.fname.length > 5 &&
    user.lname.length > 4 &&
    emailPattern.test(user.email)
  ) {
    document.getElementById("createUserBtn").removeAttribute("disabled");
  } else {
    document.getElementById("createUserBtn").setAttribute("disabled", true);
  }
}
