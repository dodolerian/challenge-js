import { Entreprise } from "./jeu.js";
const Merguezazor = new Entreprise(10, 1, 1.25, 45)
const Beuhnoie = new Entreprise(50, 3, 8.68, 150)
let argent = 100
// localStorage.setItem("argent", argent)
// localStorage.setItem("gain", Entreprise.gain)
// localStorage.setItem("prixUp", Entreprise.prixUp)
// console.log(localStorage)
 document.getElementById("argent").innerHTML = argent


//////////////////////////////////////////////////////////////////////////!
//?MERGUEZAZOR//?  
//////////////////////////////////////////////////////////////////////////!

document.getElementById('achmer-Merguezazor').addEventListener('click', () => {
    usine(document.getElementById("boutons-caches-Merguezazor"), document.getElementById("achmer-Merguezazor"), document.getElementById("bouton-gain-Merguezazor"), document.getElementById("bouton-up-Merguezazor"), Merguezazor)
})
document.getElementById('bouton-gain-Merguezazor').addEventListener('click', () => {
    vendre(Merguezazor, document.getElementById("bouton-gain-Merguezazor"), document.getElementById("bouton-up-Merguezazor"))
})
document.getElementById('achmana-Merguezazor').addEventListener('click', () => {
    manager(Merguezazor, document.getElementById("bouton-mana-Merguezazor"), document.getElementById("achmana-Merguezazor"), document.getElementById("boutons-caches2-Merguezazor"), document.getElementById("bouton-gain-Merguezazor"))
})

document.getElementById('bouton-up-Merguezazor').addEventListener('click', () => {
    ameliorerGain(Merguezazor, document.getElementById('bouton-gain-Merguezazor'), document.getElementById('bouton-Up-Merguezazor'), document.getElementById("bouton-mana-Merguezazor"))
    document.getElementById("argent").innerHTML = argent
})

//////////////////////////////////////////////////////////////////////////!
//?BEUHNOIE//?  
//////////////////////////////////////////////////////////////////////////!

document.getElementById('achmer-Beuhnoie').addEventListener('click', () => {
    usine(document.getElementById("boutons-caches-Beuhnoie"), document.getElementById("achmer-Beuhnoie"), document.getElementById("bouton-gain-Beuhnoie"), document.getElementById("bouton-up-Beuhnoie"), Beuhnoie)
})
document.getElementById('bouton-gain-Beuhnoie').addEventListener('click', () => {
    vendre(Beuhnoie, document.getElementById("bouton-gain-Beuhnoie"), document.getElementById("bouton-up-Beuhnoie"))
})
document.getElementById('achmana-Beuhnoie').addEventListener('click', () => {
    manager(Beuhnoie, document.getElementById("bouton-mana-Beuhnoie"), document.getElementById("achmana-Beuhnoie"), document.getElementById("boutons-caches2-Beuhnoie"), document.getElementById("Bouton-gain-Beuhnoie"))
})

document.getElementById('bouton-up-Beuhnoie').addEventListener('click', () => {
    ameliorerGain(Beuhnoie, document.getElementById('bouton-gain-Beuhnoie'), document.getElementById('bouton-Up-Beuhnoie'), document.getElementById("bouton-mana-Beuhnoie"))
    
    
})

//////////////////////////////////////////////////////////////////////////!

function usine(BoutonCaches, achmer, BoutonGain, BoutonUp, Entreprise) {
    argent -= Entreprise.prixAchat
    BoutonCaches.style.display = "block";
    achmer.style.display = "none";
    document.getElementById("argent").innerHTML = format(argent) + " 💶";
    BoutonGain.innerHTML = "vendre" + format(Entreprise.gain) + " 💶";
    BoutonUp.innerHTML = "ameliorer" + format(Entreprise.prixUp) + " 💶";
    storage(argent,prixUp,gain)
}

function vendre(Entreprise, BoutonGain, ButtonUp) {
    argent += Entreprise.gain
    document.getElementById("argent").innerHTML = format(argent) + " 💶";
    BoutonGain.innerHTML = "vendre" + format(Entreprise.gain) + " 💶";
    ButtonUp.innerHTML = "ameliorer" + format(Entreprise.prixUp) + " 💶";
    storage(argent,prixUp,gain)

}

function manager(Entreprise, BoutonMana, achmana, BoutonCache2, BoutonGain) {

    BoutonMana.innerHTML = "gain passif:" + format(Entreprise.gain);

    if (argent > Entreprise.PrixManager && !Entreprise.managerOn) {
        argent = argent - Entreprise.PrixManager
        achmana.style.display = "none";
        BoutonCache2.style.display = "block";
        document.getElementById("argent").innerHTML = format(argent) + " 💶";
        Entreprise.managerOn = true
        managerLoop()

    } else {
        console.log("pas argent")
        BoutonGain.innerHTML = "vendre" + format(Merguezazor.gain) + " 💶";
    }
    storage(argent,prixUp,gain)
}

function ameliorerGain(Entreprise, BoutonGain, BoutonUp, BoutonMana) {

    if (argent > Entreprise.prixUp) {
        Entreprise.gain *= 1.15
        argent = argent - Entreprise.prixUp
        document.getElementById("argent").innerHTML = format(argent) + " 💶";
        BoutonGain.innerHTML = "vendre" + format(Entreprise.gain) + " 💶";
        Entreprise.prixUp *= 1.25
        BoutonUp.innerHTML = "ameliorer" + format(Entreprise.prixUp) + " 💶";
        BoutonMana.innerHTML = format(Entreprise.gain) + "click par sec";
        BoutonUp.innerHTML = "ameliorer" + format(Entreprise.prixUp) + " 💶";

    } else {
        BoutonUp.innerHTML = "ameliorer" + format(Entreprise.prixUp) + " 💶";
        console.log("pas argent")
        BoutonGain.innerHTML = "vendre" + format(Entreprise.gain) + " 💶";
    }
    storage(argent,prixUp,gain)
}

 function managerLoop() {
     setInterval(Entreprise.vendre(), 500);
    document.getElementById("argent").innerHTML = format(argent) + " 💶";
 }

function format(argent) {
    //console.log(typeof argent);
    if (argent < 1000) {
        //console.log(typeof argent,"dqsd")
        return (argent.toFixed(2))
    } else {
        return (argent.toFixed(0))
    }
}

// function storage(argent,prixUp,gain) {
//     let argentactu= localStorage.getItem("argent")
//     argentactu= argent
//     localStorage.setItem("argent",argentactu)
//     let puactu= localStorage.getItem("prixUp")
//     puactu=prixUp
//     localStorage.setItem("prixUp",puactu)
//     let gactu= localStorage.getItem("gain")
//     gactu=gain
//     localStorage.setItem("gain",gactu)
// }