const hexa = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const byc = document.querySelector(".bodyChange");
const btn = document.getElementById("button");
const color = document.querySelector(".color");


btn.addEventListener('click', ()=>{
    let hexaColor = "#";
//the hexa-color is of six values
    for( i=0 ; i < 6; i++){
     hexaColor += hexa[getRandomColor()];
    }
    // console.log(hexaColor);
    
     byc.style.backgroundColor = hexaColor;
     color.textContent = hexaColor;
     color.style.color = hexaColor;
})



function getRandomColor(){
    return Math.floor(Math.random() * hexa.length);
}