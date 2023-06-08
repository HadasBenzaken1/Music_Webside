
//התחברות
function logIn() {
debugger;
    let userName = document.getElementById('username').value;
    let psw = document.getElementById('password').value;
    let usersList = JSON.parse(localStorage.getItem("users"));
    if (!usersList) {//אם משתמש ראשון אז יוצר מערך משתמשים
        localStorage.setItem("users", JSON.stringify([]));
        document.getElementById('notConect').innerHTML = "this user not found"
    }
    else {
        for (let index = 0; index < usersList.length; index++) {
            if (usersList[index].userName == userName && usersList[index].password == psw) {
                localStorage.removeItem("currentUser");
                localStorage.setItem("currentUser", usersList[index].userId)
                window.self.open("home.html");
            }
            
            else { document.getElementById('notConect').innerHTML = "this user not fount" }
        }
    }
}

//משתמש חדש
function createUser() {
    // debugger;
    let name = document.getElementById('username').value;
    let pass = document.getElementById('password').value;
    var users = JSON.parse(localStorage.getItem("users"));
    if (!users)
        users = [];
    var id = 1111;
    if (users.length > 0)
        id = users[users.length - 1].userId + 1;
    users.push({ userId: id, userName: name, password: pass, favorites: [] });
    localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem("currentUser", id);
    window.self.open("home.html");
}

//יציאת משתמש
function out() {
    localStorage.removeItem("currentUser");
}

//שמירת המשתמש הנוכחי
if (localStorage.getItem("currentUser") == undefined)
    document.getElementById('guess').innerText = "Guess";
else {
    var userList = JSON.parse(localStorage.getItem("users"));
    document.getElementById('guess').innerText = userList.find(user => user.userId == localStorage.getItem("currentUser")).userName;
}




