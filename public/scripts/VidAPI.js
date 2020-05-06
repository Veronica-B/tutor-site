const searchLink = ["HC13M8FGlNc&list=PLmkaw6oRnRv8UYcRLpxon4rPQm_pud8nd"];
const getSearchTerm = () => searchLink[Math.floor(Math.random() * (searchLink.length-1))];
const API = "AIzaSyDOCDFcZ-yRffL9Fgk0B0BcIfDLRI4Ayhk";
const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q=${getSearchTerm()}&key=${API}`;
// console.log(url);
fetch(url)
  .then(response => response.json())
  .then(data => {
    //console.log(data.items[0].id.videoId);
    document.querySelector(".youtubeVideo").src = `https://www.youtube.com/embed/${data.items[0].id.videoId}`;
});
