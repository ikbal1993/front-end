let images=[
    "https://images.unsplash.com/photo-1551033406-611cf9a28f67?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80",
    "https://images.unsplash.com/photo-1579403124614-197f69d8187b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1964&q=80",
    "https://images.unsplash.com/photo-1534137667199-675a46e143f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80",
    "https://images.unsplash.com/photo-1532012197267-da84d127e765?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80"
]
let currentIndex = 0;
console.log(images[currentIndex]);
function changebackground(){
    document.body.style.backgroundImage="url('"+images[currentIndex]+"')";
    currentIndex = currentIndex+1;
    if(currentIndex>=images.length){
        currentIndex = 0;
    }
}
setInterval(changebackground,5000)

const toggle= document.getElementsByClassName("toggle")[0];
toggle.addEventListener("click",()=>{
document.getElementsByClassName("link")[0].classList.toggle("link1")
document.getElementsByClassName("link")[1].classList.toggle("link1")
document.getElementsByClassName("link")[2].classList.toggle("link1")
})

const about1 = document.getElementsByClassName("about")[0]
about1.addEventListener("click",()=>{
  document.getElementsByClassName("text")[0].classList.toggle("text1")
})
