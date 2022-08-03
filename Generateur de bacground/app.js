//----------------------------------
// projet 3 - generateur de couleur
//----------------------------------

const btn = document.querySelector(".btn");
const color = document.querySelector(".color");
const btnCopy = document.querySelector(".copy");
const success = document.querySelector(".success")

const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];
let copyColor;

btn.addEventListener("click", () => {

    let hexcolor = "#";

    for (let i = 0; i < 6; i++) {
        hexcolor += hex[getRandom()];
    }
    color.textContent = hexcolor
    document.body.style.backgroundColor = hexcolor;
    // console.log(hexcolor);
});

// creer une fontion de random de centre 0 a f
function getRandom() {
    return Math.floor(Math.random() * hex.length);
}

btnCopy.addEventListener("click", () =>{

    function copy() {
        copyColor = navigator.clipboard.writeText(color.innerText)
       console.log(color.innerText); 
    }

    copy();
    success.style.display = "block";

    setTimeout(()=>{
        success.style.display ="none"
    },1500);

})

color.addEventListener("click", () =>{

    function copy() {
        copyColor = navigator.clipboard.writeText(color.innerText)
       console.log(color.innerText); 
    }

    copy();
    success.style.display = "block";

    setTimeout(()=>{
        success.style.display ="none"
    },1500);

})