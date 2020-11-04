var gindex;
function editUser(i) {
  gindex = i;
  document.getElementById("fname").value = users[i].fname;
  document.getElementById("lname").value = users[i].lname;
}

function updateUser() {
  var updatedUser = captureUser();
  console.log(updatedUser);
  var info = new XMLHttpRequest();
  info.onreadystatechange = function () {
    if (info.readyState == 4 && info.status == 200) {
      readUsers();
      clearUser();
    }
  };
  info.open("PUT", "http://localhost:3000/users/" + users[gindex].id);
  info.setRequestHeader("Content-Type", "application/json");
  info.send(JSON.stringify(updatedUser));
}
