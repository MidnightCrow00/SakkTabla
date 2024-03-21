import { tablazatbaHelyezes } from "./fuggveny.js";
import { BABUK } from "./adatok.js";

const figuraElem = document.querySelector(".tarolo");
figuraElem.innerHTML = tablazatbaHelyezes(BABUK);


/*
//elemek elérése

document.getElementByID("idvelmegadottnev")

doucument. querySelectorAll("tetszolegesCssSzelector")[index]

document.getElementsByClassName("classnevvelmegadottnev")[0]



//eseménykezelők regisztrálása

 
elemnev. addEventListener("click",fvenynev)


elemnev.style.border="1px solid gray"

elemnev.className="cssosztalynev"


//eseménykezelő(A figurával a megfelelő helyre lépni.)
for (let index = 0; index < kiskepElemek.length; index++) {
    kiskepElemek[index].addEventListener("click", katt)
    
}

function katt(event){
    console.log(event.target.src)
    nagykepImg.src = event.target.src
}
*/
