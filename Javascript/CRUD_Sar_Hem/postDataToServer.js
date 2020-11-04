function postDataToServer(user) {
  var info = new XMLHttpRequest();
  info.onreadystatechange = function () {
    if (info.readyState == 4 && info.status == 201) {
      readUsers();
      clearUser();
    }
  };
  info.open("POST", "http://localhost:3000/users");
  info.setRequestHeader("Content-Type", "application/json");
  info.send(JSON.stringify(user));
}
