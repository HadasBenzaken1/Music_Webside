
if (localStorage.getItem("currentUser") == undefined) {
    document.getElementById('conect').innerText = 'Sorry, but you are not logged in. Will connect and we will show your favorites songs';
}

showFavoriteList()

//מציג את המועדפים
function showFavoriteList() {
    // debugger;
    var usersList = JSON.parse(localStorage.getItem("users"))
    var user = localStorage.getItem("currentUser")
    for (let index = 0; index < usersList.length; index++) { //עובר כל כל המשתמשים
        if (usersList[index].userId == user) { //מחפש את המשתמש הנוכחי
            for (let index2 = 0; index2 <= usersList[index].favorites.length; index2++) { //עוברת על המערך של המועדפים של המשתמש
                if (usersList[index].favorites.length == 0) {
                    document.getElementById('conect').innerText = 'your favorite list is empty';
                }
                else {
                    for (let index3 = 0; index3 < songsList.length; index3++) {//במקביל עוברת גם על רשימת כל השירים
                        if (songsList[index3].idSong == usersList[index].favorites[index2]) {//אם מצא ששיר שווה לשיר לפי הID
                            document.getElementById('favorite').innerHTML += "<div>" 
                            + singersList[songsList[index3].id - 1].singer + ' ' 
                            + songsList[index3].name 
                            +'<div><img src="./img/delete.png" id="deleteFromFavorite" onclick="deleteFromFavorite(' + songsList[index3].idSong + ')" width="40px"></img></div>'
                            +"</div>"
                            +"<audio controls id='audioFan'><source src='./song/" + songsList[index3].id + "/" + songsList[index3].src + ".mp3'></audio>"                
                        }
                    }

                }
            }
            break;
        }
    }

}

//מוחק שיר מהמועדפים
function deleteFromFavorite(element) {
    // debugger;
    var usersList = JSON.parse(localStorage.getItem("users"))
    var user = localStorage.getItem("currentUser")
    for (let index = 0; index < usersList.length; index++) { //עובר כל כל המשתמשים
        if (usersList[index].userId == user) { //מחפש את המשתמש הנוכחי
            for (let index2 = 0; index2 < usersList[index].favorites.length; index2++) {
                if (usersList[index].favorites[index2] == element) {
                    debugger;
                    usersList[index].favorites.splice(index2, 1);
                    localStorage.setItem("users", JSON.stringify(usersList))
                    document.getElementById('favorite').innerHTML = "";

                    showFavoriteList();
                }
            }
        }
    }
}
