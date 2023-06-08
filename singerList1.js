
let singerSong

drowSingerList(singersList);

//רשימת זמרים
function drowSingerList(singers) {
    let ul = document.createElement("div");
    for (let index = 0; index < singers.length; index++) {
        let li = document.createElement("div");
        li.id = "singer" + singers[index].id;
        let div = document.createElement("div");
        div.innerHTML = "<div>" + singers[index].singer +
            "</div><div><img src='./img/singer/" + singers[index].img + "'><br/></img>"
        li.appendChild(div);
        ul.appendChild(li);
        li.addEventListener("click", () => {
            window.location = 'songSortBySinger.html?singerId=' + singers[index].id;
        })
    }
    document.getElementById('singerList').appendChild(ul);

}

//חיפוש זמר לפי השם
function searchSinger(value) {
    singersList.forEach(s => {
        if (s.singer.indexOf(value) > -1) {
            document.getElementById("singer" + s.id).style.display = "";
        }
        else {
            document.getElementById("singer" + s.id).style.display = "none";
        }
    });
}

//מיון זמרים ושולח חזרה ליצירת זמרים
function sortSingerList(SortType) {
    switch (SortType) {
        case 'ASC':
            singersList.sort((a,b) => (a.singer > b.singer) ? 1 : ((b.singer > a.singer) ? -1 : 0));
            break;
        case 'DESC':
            singersList.sort((a,b) => (a.singer > b.singer) ? 1 : ((b.singer > a.singer) ? -1 : 0)).reverse();
            break;
    }
    cleanSingersList();
    drowSingerList(singersList);
}

//מנקה את הרשימת זמרים לפני המיון
function cleanSingersList() {
    document.getElementById('singerList').innerHTML = "";
}

