var users = [];
function readUsers() {
  var info = new XMLHttpRequest();
  info.onreadystatechange = function () {
    if (info.readyState == 4 && info.status == 200) {
      users = JSON.parse(info.response);
      displayUsers();
    }
  };
  info.open("GET", "http://localhost:3000/users");
  info.send();
}
readUsers();

function displayUsers() {
  document.querySelector("ul").innerHTML = "";
  users.forEach(function (user, i) {
    var myLi = document.createElement("li");
    myLi.innerHTML =
      user.fname +
      " " +
      user.lname +
      "<button onclick='editUser(" +
      i +
      ")'>Edit</button> <button onclick='deleteUser(" +
      i +
      ")'>Delete</button>";
    document.querySelector("ul").appendChild(myLi);
  });
}
