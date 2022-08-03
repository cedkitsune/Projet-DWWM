// ------------------------
// Project 2 - ShiFuMi
// ------------------------

//  Hey pour ce projet nous allons avoir besoin de :
// querySelector() & querrySelectorAll
// forEach()
// e.target.id ou value
// Math
// innerText / textContent



// variables

const choixJoueurId = document.querySelector("#joueur-choix");
const choixPcId = document.querySelector("#pc-choix");
const resultat = document.querySelector("#resultat");
const choixBtn = document.querySelectorAll(".btn");
let choixPc;
let choixJoueur;
let result;

choixBtn.forEach(choix => choix.addEventListener("click", (e) => {
    choixJoueur = e.target.value;
    choixJoueurId.textContent = choixJoueur
    choixOrdinateur();
    afficherResultat()
}));

function choixOrdinateur() {

    const random = Math.ceil(Math.random() * choixBtn.length);
    // console.log(random);

    if (random === 1) {
        choixPc = "石"
    }
    if (random === 2) {
        choixPc = "紙"
    }
    if (random === 3) {
        choixPc = "鋏"
    }

    choixPcId.textContent = choixPc;

};


function afficherResultat() {

    if (choixPc === choixJoueur) {
        result = "Egalité";
    }
    if (choixPc === "石" && choixJoueur === "紙") {
        result = "Tu as gagné!!"
    }
    if (choixPc === "石" && choixJoueur === "鋏") {
        result = "Tu as perdu!"
    }
    if (choixPc === "紙" && choixJoueur === "鋏") {
        result = "Tu as gagné!"
    }
    if (choixPc === "紙" && choixJoueur === "石") {
        result = "Tu as perdu!"
    }
    if (choixPc === "鋏" && choixJoueur === "石") {
        result = "Tu as gagné!"
    }
    if (choixPc === "鋏" && choixJoueur === "紙") {
        result = "Tu as perdu!"
    }
    resultat.textContent = result
};

