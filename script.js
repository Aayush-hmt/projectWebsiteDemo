let tar = document.querySelector(".image-play");
let video = document.querySelector(".custom-image");
tar.addEventListener("click", () => {
    video.setAttribute("controls", true);

});


let mainBox = document.querySelector(".main-hov-box");
let box1 = document.querySelector("#counting-div-1");
let box2 = document.querySelector("#counting-div-2");
let box3 = document.querySelector("#counting-div-3");
let box4 = document.querySelector("#counting-div-4");

console.log(mainBox)
console.log(box1)
console.log(box2)
console.log(box3)
console.log(box4)
let i = 0;
mainBox.addEventListener('mouseover', () => {

   
  let id= setInterval(() => {

        if (i <= 2.5) {
            box1.innerHTML = `${i.toFixed(1)}M+`;
        }
        if (i <= 12) {
            box2.innerHTML = `${i.toFixed(1)}M+`;


        } if (i <= 5) {
            box3.innerHTML = `${i.toFixed(1)}+`;

        } if (i <= 12) {
            box4.textContent= `${i.toFixed(1)}`;

        }
        i = i+0.1;
     
        
        console.log("execetue is")
        if(i>15){
            clearInterval(id);
        }
    },100);
});

