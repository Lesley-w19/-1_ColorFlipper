const rainColors = ["red", "orange","yellow", "green","blue", "indigo","violet"];

const byc = document.querySelector(".bodyChange");
const btn = document.getElementById("button");
const color = document.querySelector(".color");

 btn.addEventListener('click', ()=>{
    let  rainbowcolor = getRainbowColor();
//  console.log(rainbowcolor);
     byc.style.backgroundColor = rainColors[rainbowcolor];
     color.textContent = rainColors[rainbowcolor]; 
     color.style.textTransform = "uppercase";
     color.style.color = rainColors[rainbowcolor];
 })

 function getRainbowColor(){
     return Math.floor(Math.random() * rainColors.length);
 }