// MENU
const hamburger=document.querySelector(".hamburger");
const nav=document.querySelector(".nav-links");

hamburger.onclick=()=>nav.classList.toggle("active");

// TYPING
const words=["cinematic moments","powerful stories","visual experiences"];
let i=0,j=0,isDeleting=false;

function type(){
let word=words[i];
j=isDeleting?j-1:j+1;

document.getElementById("typing").textContent=word.substring(0,j);

if(!isDeleting && j===word.length){
isDeleting=true;setTimeout(type,1000);return;
}
if(isDeleting && j===0){
isDeleting=false;i=(i+1)%words.length;
}

setTimeout(type,120);
}
type();

// VIDEO HOVER + MODAL
document.querySelectorAll(".video-card").forEach(card=>{
const video=card.querySelector("video");

card.onmouseenter=()=>video.play();
card.onmouseleave=()=>{video.pause();video.currentTime=0;}

card.onclick=()=>{
document.querySelector(".video-modal").style.display="flex";
document.getElementById("modalVideo").src=video.querySelector("source").src;
document.getElementById("modalVideo").play();
}
});

document.querySelector(".video-modal").onclick=()=>{
document.querySelector(".video-modal").style.display="none";
document.getElementById("modalVideo").pause();
};

// LIGHTBOX
const lightbox=document.querySelector(".lightbox");
document.querySelectorAll(".lightbox-img").forEach(img=>{
img.onclick=()=>{
lightbox.style.display="flex";
lightbox.innerHTML=`<img src="${img.src}">`;
}
});
lightbox.onclick=()=>lightbox.style.display="none";