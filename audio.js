var data = {
    title: [
        "Atlantis",
        "Another Love",
        "Treat You Better"
    ],
    song: [
        "music/Seafret - Atlantis (Lyrics).mp3",
        "music/Tom Odell - Another Love (Lyrics).mp3",
        "music/Shawn Mendes - Treat You Better (Lyrics).mp3"
    ],
    poster: ["https://i.gifer.com/44zG.gif",
        "https://i.gifer.com/Nt6v.gif",
        "https://i.gifer.com/1RW2.gif",
    ]

}

var song = new Audio()



window.onload = function () {
    playSong()
}



var currentSong = 0

function playSong() {
    song.src = data.song[currentSong];
    let songTitle = document.getElementById("songTitle");
    songTitle.textContent = data.title[currentSong];
    let img = document.getElementById("row1");


    img.style.backgroundImage = "url(" + data.poster[currentSong] + ")";
    let main = document.getElementById("main")
    main.style.backgroundImage = "url(" + data.poster[currentSong] + ")";
    song.play();
}


function playOrPauseSong() {
    let play = document.getElementById("play")
  

    if (song.paused) {
        song.play();
        play.src = "images/pause.png" 
    } else {
        song.pause();
        play.src = "images/play-button-arrowhead.png"
    }
}





song.addEventListener("timeupdate", function () {
  
    let fill = document.getElementById("fill")
   
    let position = song.currentTime / song.duration;
    fill.style.width = position * 100 + "%"; 

    convertTime(song.currentTime) 

    if (song.ended) {
        next()
    }
})

function convertTime(seconds) {

    let currentTime = document.getElementById("currentTime")
    
    

    let min = Math.floor(seconds / 60)
    let sec = Math.floor(seconds % 60)

    min = (min < 10) ? "0" + min : min;
    sec = (sec < 10) ? "0" + sec : sec;


    currentTime.textContent = min + ":" + sec

    totalTime(song.duration)
 
};




function totalTime(seconds) {
    //  currentTime= document.getElementById("currentTime")
    var min = Math.floor(seconds / 60)
    var sec = Math.floor(seconds % 60)


    min = (min < 10) ? "0" + min : min;
    sec = (sec < 10) ? "0" + sec : sec;
    if(isNaN(min) || isNaN(sec)){
        return false
    }
    else{
    currentTime.textContent += " / " + min + ":" + sec
    }

};


function next() {
    currentSong++;
    if (currentSong >= data.song.length) {
        currentSong = 0
    }
    playSong();
    play.src = "images/pause.png"
}
function pre() {
    currentSong--;
    if (currentSong < 0) {
        currentSong = data.song.length - 1;
    }
    playSong();
    play.src = "images/pause.png"
}


function muted(){
    var mute = document.getElementById("mute")
    if(song.muted){
        song.muted = false
        mute.src = "images/volume.png"
        
    }
    else{
    song.muted = true
    mute.src = "images/volume-mute.png"
    }
}


function increase(){
    
    if(!(song.volume+0.2 > 1)){
    song.volume += 0.2
    }
    console.log(song.volume);
    
}

function decrease(){
   if(!(song.volume-0.2 < 0)){
    song.volume -= 0.2
   }
    
  
    console.log(song.volume);
}   
