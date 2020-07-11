const colors = ["red", "green", "blue"," orange"," purple"," yellow","rgb(128, 5, 81)",
"rgb(73, 11, 155)","rgb(185, 115, 45)","rgb(167, 5, 40)",  "#ee8b49","#fda404","#ff08ae","rgb(16, 41, 41)","#e00d2d59"];

const byc = document.querySelector(".bodyChange");
const btn = document.getElementById("button");
const color = document.querySelector(".color");


btn.addEventListener('click', ()=>{
    //TO GET THE COLOR SCHEMES LISTED ABOVE
     let randomColor = getRandomColor(); 
     byc.style.backgroundColor = colors[randomColor];
     color.textContent = colors[randomColor];
     color.style.color = colors[randomColor];
    //  console.log(randomColor);
});

function getRandomColor(){
    return Math.floor(Math.random() * colors.length);
}