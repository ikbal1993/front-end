document.getElementById("register").addEventListener("click",()=>{
    document.getElementsByClassName("ikbal")[0].classList.toggle("card1")
    document.getElementsByClassName("ikbal1")[0].classList.remove("jadu")
    document.getElementsByClassName("ikbal1")[0].classList.add("jadu1")
})

document.getElementById("home").addEventListener("click",()=>{
    document.getElementsByClassName("ikbal")[0].classList.remove("card1")
})

// login

document.getElementById("login1").addEventListener("click",()=>{
    document.getElementsByClassName("ikbal1")[0].classList.add("jadu")
    document.getElementsByClassName("ikbal")[0].classList.remove("card1")
    document.getElementsByClassName("ikbal1")[0].classList.remove("jadu1")
})

document.getElementById("home").addEventListener("click",()=>{
    document.getElementsByClassName("ikbal1")[0].classList.remove("jadu")
    document.getElementsByClassName("ikbal1")[0].classList.add("jadu1")
})


// signin and signup color change
let colorChange = ()=>{
    var color = ["navy", "green", "red", "teal"];
    for(let y = 0; y < 4; y++){
      document.getElementsByClassName("signup")[0].style.color = color[Math. floor(Math. random() * 3)];
      document.getElementsByClassName("signupl")[0].style.color = color[Math. floor(Math. random() * 3)];
    
      }
  }
  setInterval(colorChange,300)