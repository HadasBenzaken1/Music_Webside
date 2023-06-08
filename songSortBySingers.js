//(כתובת דף חדש  (נשלח מרשימת זמרים
var url = new URL(window.location);
//הפרמטר שמראה איזה שירים של זמר להציג
var singerId = url.searchParams.get("singerId");

songListSortBySinger(singerId)


//מציג שירים של הזמר שבחר
function songListSortBySinger(element) {
    // debugger;
    document.getElementById('title').innerHTML = singersList[element - 1].singer;
    document.getElementById('singerList').innerHTML = "";
    let idSinger = singersList[element - 1].id
    let ul = document.createElement("div");
    for (let index = 0; index < songsList.length; index++) {
        if (songsList[index].id == idSinger) {
            let li = document.createElement("div");
            li.id = "name"+songsList[index].name
            let div = document.createElement("div");
            let img = singersList[idSinger - 1].img;
            var songId = songsList[index].idSong;
            
            div.innerHTML = "<div id=" + songId + ">" + songsList[index].name +
                "</div><div><img src='./img/singer/" + img + "'><br/></img>" + '<i class="icon bi-heart" id="addFavorite" onclick="addTofavorite(' + songId + ')"></i><br/>' +
                "<audio controls><source src='./song/" + idSinger + "/" + songsList[index].src + ".mp3'></audio></div>"
            li.appendChild(div);
            ul.appendChild(li);
        }
    }
    document.getElementById('singerList').appendChild(ul);
}

//חיפוש שיר
function searchSong(value) {
    let songSort=[]
    for (let index = 0; index < songsList.length; index++) {
        if(singerId==songsList[index].id){
            songSort.push(songsList[index].name)
        }
    }
    songSort.forEach(s => {  
        if (s.indexOf(value) > -1 ){
            document.getElementById('name'+s).style.display = "";
        }
        else {
            document.getElementById('name'+s).style.display = "none";
        }
    });
}


//מוסיף למועדפים אם השיר כבר לא נמצא
function addTofavorite(songId) {
    let currUser = localStorage.getItem('currentUser');
    if (currUser) {
        var usersList = JSON.parse(localStorage.getItem("users"));
        usersList.forEach(function (u, i) {
            if (u.userId == currUser) {
                // debugger;
                const place = u.favorites.findIndex(fav => fav == songId)
                if (place == -1) {
                    usersList[i].favorites.push(songId);
                    allHeart(songId);
                }
            }
        });
        localStorage.setItem("users", JSON.stringify(usersList));
    }
}

///לתקן
function allHeart(songId) {
    let Heart = document.getElementsByClassName('icon')
    for (let index = 0; index < Heart.length; index++) {
        Heart[index].addEventListener("click", () => {
            Heart[index].style.color = '#f44336';
        })
    }
}

