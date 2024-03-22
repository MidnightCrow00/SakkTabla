import {tablaAlapHelyzet, tablaMozgas } from "./fuggveny.js";
import { BABUK } from "./adatok.js";

const figuraElem = document.querySelector(".tarolo");
figuraElem.innerHTML = tablaAlapHelyzet(BABUK);


const cimElem = document.querySelector(".cim");
cimElem.innerHTML = "<h1>Sakktábla</h1>";

const szovegElem = document.querySelector(".kiiras");
szovegElem.innerHTML = "<h2>Lépések:</h2>";


