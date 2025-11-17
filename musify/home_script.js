const curr = document.getElementById('myaudio');
const currimg = document.getElementById('songimg');
const songs = [
  {
    index: '0',
    title: "Ishq Wala Love",
    music: "song_mp3/ishqwalalove.m4a",
    image: "song_image/ishqwalalove.jpg",
    Movie: "Student of The Year"
  },
  {
    index: '1',
    title: "Dil to Baccha Hai",
    music: "song_mp3/diltobacchahai.m4a",
    image: "song_image/diltobacchahai.jpg",
    Movie: "Ishqiya"
  },
  {
    index: '2',
    title: "Ajj Din Chadeya",
    music: "song_mp3/ajjdinchadeya.m4a",
    image: "song_image/ajjdinchadeya.jpg",
    Movie: "Love Aaj Kal"
  },
  {
    index: '3',
    title: "Enna Sona",
    music: "song_mp3/ennasona.m4a",
    image: "song_image/ennasona.jpg",
    Movie: "Ok Jaanu"
  },
  {
    index: '4',
    title: "Tum Hi Ho",
    music: "song_mp3/tumhiho.m4a",
    image: "song_image/tumhiho.jpg",
    Movie: "Aashiqui 2"
  },
  {
    index: '5',
    title: "Raabta",
    music: "song_mp3/raabta.m4a",
    image: "song_image/raabta.jpg",
    Movie: "Agent Vinod"
  },
  {
    index: '6',
    title: "Tera Ban Jaunga",
    music: "song_mp3/terabanjaunga.m4a",
    image: "song_image/terabanjaunga.jpeg",
    Movie: "Kabir Singh"
  },
  {
    index: '7',
    title: "Sun Saathiya",
    music: "song_mp3/sunsaathiya.m4a",
    image: "song_image/sunsaathiya.jpg",
    Movie: "ABCD 2"
  },
  {
    index: '8',
    title: "Tera Yaar Hoon Main",
    music: "song_mp3/terayaarhoonmain.m4a",
    image: "song_image/terayaarhoonmain.jpg",
    Movie: "Sonu Ke Titu Ki Sweety"
  },
  {
    index: '9',
    title: "Pee Loon",
    music: "song_mp3/peeloon.m4a",
    image: "song_image/peeloon.jpg",
    Movie: "Once Upon a Time in Mumbaai"
  },
  {
    index: '10',
    title: "Galliyan",
    music: "song_mp3/galliyan.m4a",
    image: "song_image/galliyan.jpg",
    Movie: "Ek Villain"
  },
  {
    index: '11',
    title: "Jeene Laga Hoon",
    music: "song_mp3/jeenelagahoon.m4a",
    image: "song_image/jeenelagahoon.jpg",
    Movie: "Ramaiya Vastavaiya"
  },
  {
    index: '12',
    title: "Samjhawan",
    music: "song_mp3/samjhawan.m4a",
    image: "song_image/samjhawan.jpg",
    Movie: "Humpty Sharma Ki Dulhania"
  },
  {
    index: '13',
    title: "Tum Se Hi",
    music: "song_mp3/tumsehi.m4a",
    image: "song_image/tumsehi.jpg",
    Movie: "Jab We Met"
  },
  {
    index: '14',
    title: "Kaise Hua",
    music: "song_mp3/kaisehua.m4a",
    image: "song_image/kaisehua.jpg",
    Movie: "Kabir Singh"
  },
  {
    index: '15',
    title: "Agar Tum Saath Ho",
    music: "song_mp3/agartumsaathho.m4a",
    image: "song_image/agartumsaathho.jpg",
    Movie: "Tamasha"
  }
];
const liked = [];
const fav =[];
function renderSongs() {
  const container = document.getElementById("all");
  container.innerHTML = "";

  songs.forEach((song, index) => {
    const item = document.createElement("div");
    item.className = "songitem";
    item.onclick =()=>load(index);
    const title = document.createElement("span");
    title.textContent = song.title;

    const like = document.createElement("button");
    like.className = "like-btn";
    like.innerHTML = "🤍";

    item.appendChild(title);
    container.appendChild(item);
  });
}

// add song to liked songs 
function addtolike(){
  const index = document.getElementById('index').textContent;
  const song = songs[index];

  if (!liked.some(s => s.title === song.title)) {
    alert(document.getElementById('title').textContent+" added to Liked Song");
    liked.push(song);
    renderLikedSongs();
  }
  else{
    alert("Already Liked")
  }
}
function renderLikedSongs() {
  const container = document.getElementById("liked");
  container.innerHTML = "";

  liked.forEach((song,index) => {
    const item = document.createElement("div");
    item.className = "songitem";
    item.onclick =()=>load(song.index);
    const title = document.createElement("span");
    title.textContent = song.title;

    item.appendChild(title);
    container.appendChild(item);
  });
}

// add song to playlist
function addtofav(){
  const index = document.getElementById('index').textContent;
  const song = songs[index];
  
  if (!fav.some(s => s.title === song.title)) {
    alert(document.getElementById('title').textContent+" added to Playlist");
    fav.push(song);
    renderFavSongs();
  }
  else {
    alert("Already in Playlist");
  }
}
function renderFavSongs() {
  const container = document.getElementById("fav");
  container.innerHTML = "";

  fav.forEach((song,index) => {
    const item = document.createElement("div");
    item.className = "songitem";
    item.onclick =()=>load(song.index);
    const title = document.createElement("span");
    title.textContent = song.title;

    item.appendChild(title);
    container.appendChild(item);
  });
}
function load(i){
  const song = songs[i];
  document.getElementById('title').innerHTML = song.title;
  document.getElementById('movie').innerHTML = song.Movie;
  document.getElementById('songimg').src = song.image;
  document.getElementById('myaudio').src = song.music;
  document.getElementById('index').innerText = i;
  curr.play();
  currimg.classList.add("rotate");
}
function remove(i){
  liked.splice(i,1);
}
function displayAll(){
  let content = document.getElementById('all');
  let like = document.getElementById('liked');
  let fav = document.getElementById('fav');
  if(content.style.display === "none") {
    content.style.display = "block";
    like.style.display = "none";
    fav.style.display = "none";
  } else {
    content.style.display ="none";
  }
}
function displayLiked(){
  let content = document.getElementById('liked');
  let all = document.getElementById('all');
  let fav = document.getElementById('fav');
  if(content.style.display === "none") {
    content.style.display = "block";
    all.style.display = "none";
    fav.style.display = "none";
  } else {
    content.style.display ="none";
  }
}
function displayFav(){
  let content = document.getElementById('fav');
  let all = document.getElementById('all');
  let like = document.getElementById('liked');
  if(content.style.display === "none") {
    content.style.display = "block";
    all.style.display = "none";
    like.style.display = "none";
  } else {
    content.style.display ="none";
  }
}
function play() {
  let title=document.getElementById('title').textContent;
  if(title !== "Select a Song") {
    curr.play();
    currimg.classList.add("rotate");
  }
}
function pause (){
  let title=document.getElementById('title').textContent;
  if(title !== "Select a Song") {
    curr.pause ();
    currimg.classList.remove("rotate");
  }
}
renderSongs();
// load(0);