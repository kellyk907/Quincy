var fans = document.querySelector(".fans");
var fishs = document.querySelector(".fish");
var pets = document.querySelector(".pets");
var themeSwitchInput = document.querySelector (#toggle);
var ball = document.querySelector(".ball");
var h1 = document.querySelector("h1");
var body = document.querySelector("body");

fans.addEventListener("click",function(){
    fans.innerText = "123K";
});

fish.addEventListener("click",function(){
    fans.innerText = "47K";
});

pets.addEventListener("click",function(){
    fans.innerText = "20K";
});

themeSwitchInput.addEventListener("click",function (){
if (body.classList.contains ("light")){
    body.classList.remove ("light");
    h1.innerText = "Stealth Quincy";
}else{ 
body.classList.add ("light");
ball.classList.add("move-right");
h1.innerText = "Party Qunicy";
}
});