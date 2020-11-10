function captureUser() {
  var person = {
    fname: document.getElementById("fname").value,
    lname: document.getElementById("lname").value,
    email: document.getElementById("email").value,
  };
  return person;
}
