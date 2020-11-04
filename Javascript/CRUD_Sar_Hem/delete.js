function deleteUser(i) {
  var info = new XMLHttpRequest();
  info.onreadystatechange = function () {
    if (info.readyState == 4 && info.status == 200) {
      readUsers();
    }
  };
  info.open("DELETE", "http://localhost:3000/users/" + users[i].id);
  info.send();
}
