let myImg = document.querySelector("#slideshow");
let images = ["images/1.jpg" , "images/2.png","images/3.jpg","images/4.jpg"];
let i = 0;
function fun(){
myImg.setAttribute("src" , images[i]);
i++;
if(i==images.length){i=0};
setTimeout(function(){fun()} , 1000)
}
fun()