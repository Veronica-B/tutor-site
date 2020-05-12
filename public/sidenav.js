const hamburgerIcon= document.querySelector(".hamburger--container");
const navBar=document.querySelector(".nav");
const sidenav=document.querySelector(".nav--mobile");

let i=0;

hamburgerIcon.addEventListener('click', ()=>{
navBar.classList.toggle('change')


if (i==0){
    sidenav.style.display="block"
    i++;
}else{
    sidenav.style.display="none"
    i--;
}
}
)