//PASTE THE STRING THAT GOES AFTER '=' SIGN IN YOUTUBE URL FOR CONST SEARCHLINK BELOW //


const searchLink = ["A2S4fZM8RRw"];
const getSearchTerm = () => searchLink[Math.floor(Math.random() * (searchLink.length-1))];
const API = 'AIzaSyBd4bK5luoPzsICNPSIJH3bSoewOmBfnts'
const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q=${getSearchTerm()}&key=${API}`;
// console.log(url);
fetch(url)
  .then(response => response.json())
  .then(data => {
console.log(data)
//PASTE THE CLASS YOU WANT THE VIDEO TO SHOW UP IN BELOW// 
    document.querySelector(".youtubeVideo").src = `https://www.youtube.com/embed/${data.items[0].id.videoId}`;
    
}).catch((error)=>{
  console.log(error)
})
