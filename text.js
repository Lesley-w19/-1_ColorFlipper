const hexa = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById("button");
const color = document.querySelector(".color");
const tChange= document.querySelector(".textChange");
const txtChange = document.querySelector(".txtChange");


btn.addEventListener('click', ()=>{
    let hexaText = "#";

  for(i=0; i < 6; i++){
      hexaText += hexa[textRandomColor()];
  }

  color.textContent = hexaText;
   color.style.color = hexaText;
   tChange.style.color = hexaText;

});

function textRandomColor(){
   return Math.floor(Math.random() * hexa.length);
}

let textColor = ()=>{
    let hexaText = "#";

  for(i=0; i < 6; i++){
      hexaText += hexa[textRandomColor()];
  }
  return hexaText;
}
  
let changeTextColor = ()=>{
    let colorText = textColor();
    // console.log(colorText);
  txtChange.style.color = colorText;    

}
 setInterval(changeTextColor, 1500);

 textRandomColor();
