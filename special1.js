document.addEventListener("DOMContentLoaded", function () {
    let randomSongsList = getRandomSong();
    drawRandomSongList(randomSongsList);
    console.log(randomSongsList);
});

function getRandomSong() {
    let randomSongs = [];
    for (let index = 0; index < 5; index++) {
        let randNum = Math.floor(Math.random() * 12);
        if (randomSongs.includes(songsList[randNum]))
            index--;
        else
            randomSongs[index] = songsList[randNum];
    }
    return randomSongs;
}

function drawRandomSongList(randomSongsList) {

    let ul = document.createElement("div");
    for (let index = 0; index < randomSongsList.length; index++) {
        let li = document.createElement("div");
        let div = document.createElement("div");
        let img = singersList[randomSongsList[index].id - 1].img        
        div.innerHTML = "<div>" + randomSongsList[index].name +
            "</div><div><img src='./img/singer/" + img + "'><br/></img>" +
            "<audio controls><source src='./song/" + randomSongsList[index].id + "/" + randomSongsList[index].src + ".mp3'></audio></div>"
        li.appendChild(div);
        ul.appendChild(li);
    }
    document.getElementById('drawRandomSong').appendChild(ul);
}

