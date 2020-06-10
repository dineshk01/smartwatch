var heartBtn= document.getElementById('btn6');
var heartDisplay=document.getElementById('heart');
var timeDisplay=document.getElementById('timer');

//heart display
heartBtn.addEventListener('click',function(){
    heartDisplay.style.display='block';
    timeDisplay.style.display='none';
    

})

//time display

var timeBtn =document.getElementById("btn5");

// add event listner to timer

timeBtn.addEventListener("click" , function(){
    heartDisplay.style.display="none";
    timeDisplay.style.display="block";
})


var blueBtn= document.getElementById("btn1");
var watchcolor =document.getElementById("watch");
// console.log(watchcolor);

// add event listener on it

blueBtn.addEventListener("click", function(){
    watchcolor.src="./assets/bluewatch.png";
})

var col2Btn= document.getElementById("btn2");
var watchcolor =document.getElementById("watch");
// console.log(watchcolor);

// add event listener on it

col2Btn.addEventListener("click", function(){
    watchcolor.src="./assets/creamwatch.png";

})


var col3Btn= document.getElementById("btn3");
var watchcolor =document.getElementById("watch");
// console.log(watchcolor);

// add event listener on it

col3Btn.addEventListener("click", function(){
    watchcolor.src="./assets/redwatch.png";

})


var col4Btn= document.getElementById("btn4");
var watchcolor =document.getElementById("watch");
// console.log(watchcolor);

// add event listener on it

col4Btn.addEventListener("click", function(){
    watchcolor.src="./assets/blackwatch.png";

})

setInterval(function() {
    timeDisplay.innerText= ""+ new Date().getHours() + ":" + new Date().getMinutes() +":" + new Date().getSeconds();
    
}, 1000);