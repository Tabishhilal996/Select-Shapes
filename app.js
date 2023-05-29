var circlebtn = document.getElementById("circlebutton");
var squarebtn = document.getElementById("squarebutton");
var trainglebtn = document.getElementById("trainglebutton");
var shapescontainer = document.getElementById("shapecontainer");

circlebtn.addEventListener("click", function(){
    shapescontainer.innerHTML = '<div class = "circle"></div>';
});

squarebtn.addEventListener("click", function(){
    shapescontainer.innerHTML = '<div class = "square"> </div>';
});

trainglebtn.addEventListener("click", function(){
    shapescontainer.innerHTML = '<div class = "traingle"> </div>';
});