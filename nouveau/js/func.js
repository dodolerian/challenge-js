import { Entreprise } from "./jeu.js";

const Merguezazor = new Entreprise(99, 1, 1.25, 405)
const Beuhnoie = new Entreprise(5000, 18, 12.68, 6500)
const Pharmashit = new Entreprise(270000, 47, 47.57, 35080)
const Pisteaulait = new Entreprise(18530000, 93, 136.17, 415000)

let argent = 100
// let credit = 10000
// let prixbonus =1000
let managervalue = 0.65



 document.getElementById("argent").innerHTML = argent + " 💶";
//  document.getElementById("credit").innerHTML = credit + " 🪙";

//  


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
    manager(Merguezazor, document.getElementById("bouton-mana-Merguezazor"), document.getElementById("achmana-Merguezazor"), document.getElementById("boutons-caches2-Merguezazor"), document.getElementById("bouton-gain-Merguezazor"),document.getElementById("bouton-up-Merguezazor"))
})

document.getElementById('bouton-up-Merguezazor').addEventListener('click', () => {
    ameliorerGain(Merguezazor, document.getElementById('bouton-gain-Merguezazor') , document.getElementById('bouton-up-Merguezazor'), document.getElementById("bouton-mana-Merguezazor"))
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
    manager(Beuhnoie, document.getElementById("bouton-mana-Beuhnoie"), document.getElementById("achmana-Beuhnoie"), document.getElementById("boutons-caches2-Beuhnoie"), document.getElementById("Bouton-gain-Beuhnoie"),document.getElementById("bouton-up-Beuhnoie"))
})

document.getElementById('bouton-up-Beuhnoie').addEventListener('click', () => {
    ameliorerGain(Beuhnoie, document.getElementById("bouton-gain-Beuhnoie"), document.getElementById("bouton-up-Beuhnoie"), document.getElementById("bouton-mana-Beuhnoie"))
})

//////////////////////////////////////////////////////////////////////////!
//?Pharmashit//?  
//////////////////////////////////////////////////////////////////////////!

document.getElementById('achmer-Pharmashit').addEventListener('click', () => {
    usine(document.getElementById("boutons-caches-Pharmashit"), document.getElementById("achmer-Pharmashit"), document.getElementById("bouton-gain-Pharmashit"), document.getElementById("bouton-up-Pharmashit"), Pharmashit)
})
document.getElementById('bouton-gain-Pharmashit').addEventListener('click', () => {
    vendre(Pharmashit, document.getElementById("bouton-gain-Pharmashit"), document.getElementById("bouton-up-Pharmashit"))
})
document.getElementById('achmana-Pharmashit').addEventListener('click', () => {
    manager(Pharmashit, document.getElementById("bouton-mana-Pharmashit"), document.getElementById("achmana-Pharmashit"), document.getElementById("boutons-caches2-Pharmashit"), document.getElementById("Bouton-gain-Pharmashit"),document.getElementById("bouton-up-Pharmashit"))
})

document.getElementById('bouton-up-Pharmashit').addEventListener('click', () => {
    ameliorerGain(Pharmashit, document.getElementById("bouton-gain-Pharmashit"), document.getElementById("bouton-up-Pharmashit"), document.getElementById("bouton-mana-Pharmashit"))
})

//////////////////////////////////////////////////////////////////////////!
//?Pisteaulait//?  
//////////////////////////////////////////////////////////////////////////!

document.getElementById('achmer-Pisteaulait').addEventListener('click', () => {
    usine(document.getElementById("boutons-caches-Pisteaulait"), document.getElementById("achmer-Pisteaulait"), document.getElementById("bouton-gain-Pisteaulait"), document.getElementById("bouton-up-Pisteaulait"), Pisteaulait)
})
document.getElementById('bouton-gain-Pisteaulait').addEventListener('click', () => {
    vendre(Pisteaulait, document.getElementById("bouton-gain-Pisteaulait"), document.getElementById("bouton-up-Pisteaulait"))
})
document.getElementById('achmana-Pisteaulait').addEventListener('click', () => {
    manager(Pisteaulait, document.getElementById("bouton-mana-Pisteaulait"), document.getElementById("achmana-Pisteaulait"), document.getElementById("boutons-caches2-Pisteaulait"), document.getElementById("bouton-gain-Pisteaulait"),document.getElementById("bouton-up-Pisteaulait"))
})

document.getElementById('bouton-up-Pisteaulait').addEventListener('click', () => {
    ameliorerGain(Pisteaulait, document.getElementById('bouton-gain-Pisteaulait') , document.getElementById('bouton-up-Pisteaulait'), document.getElementById("bouton-mana-Pisteaulait"))
})

//////////////////////////////////////////////////////////////////////////!

function usine(BoutonCaches, achmer, BoutonGain, BoutonUp, Entreprise) {
    if(argent>Entreprise.prixAchat){
        argent -= Entreprise.prixAchat
        BoutonCaches.style.display = "block";
        achmer.style.display = "none";
        document.getElementById("argent").innerHTML = format(argent) + " 💶";
        BoutonGain.innerHTML ="vendre " + format(Entreprise.gain) + " 💶";
        BoutonUp.innerHTML ="ameliorer " + format(Entreprise.prixUp) + " 💶";
    }else{
        alert ("tu n'as pas asser, vas bosser")
    }
   
}

function vendre(Entreprise, BoutonGain, BoutonUp,IsManager=false ) {
    if(!IsManager){
        argent+=Entreprise.gain
    }else{
        argent +=Entreprise.gain*managervalue
    }
    
    
    document.getElementById("argent").innerHTML = format(argent) + " 💶";
    BoutonGain.innerHTML ="vendre: " + format(Entreprise.gain) + " 💶";
    BoutonUp.innerHTML ="ameliorer: " + format(Entreprise.prixUp) + " 💶";
}

function manager(Entreprise, BoutonMana, achmana, BoutonCache2, BoutonGain, BoutonUp) {

    
    BoutonMana.innerHTML = format(Entreprise.gain*managervalue) +" de gain passif" ;
    if (argent > Entreprise.PrixManager && !Entreprise.managerOn) {
        argent = argent - Entreprise.PrixManager
        achmana.style.display = "none";
        BoutonCache2.style.display = "block";
        document.getElementById("argent").innerHTML = format(argent) + " 💶";
        Entreprise.managerOn = true
        managerLoop(Entreprise, BoutonGain, BoutonUp)
    } else {
        console.log("pas argent")
        BoutonGain.innerHTML = "vendre: " + format(Entreprise.gain) + " 💶";
    }
}

function ameliorerGain(Entreprise, BoutonGain,BoutonUp, BoutonMana) {
    console.log(BoutonMana)
    if (argent > Entreprise.prixUp) {
        Entreprise.gain *= 1.15
        argent = argent - Entreprise.prixUp
        // document.getElementById("credit").innerHTML = format(credit) + " 💶";
        document.getElementById("argent").innerHTML = format(argent) + " 💶";
        BoutonGain.innerHTML = "vendre: " + format(Entreprise.gain) + " 💶";
        Entreprise.prixUp *= 1.27
        BoutonMana.innerHTML = format(Entreprise.gain*managervalue) + " de gain passif";
        BoutonUp.innerHTML ="ameliorer: " + format(Entreprise.prixUp) + " 💶";
        console.log("la")
        // credit++
        // document.getElementById("credit").innerHTML = format(credit) + " 🪙";
        // console.log(credit)
        
        

    } else {
        BoutonUp.innerHTML = "ameliorer: " + format(Entreprise.prixUp) + " 💶";
        console.log("pas argent")
        BoutonGain.innerHTML = "vendre: " + format(Entreprise.gain) + " 💶";
    }
}




 function managerLoop(Entreprise, BoutonGain, BoutonUp) {
    setInterval(() =>{vendre(Entreprise, BoutonGain, BoutonUp,true)}, 700);
    console.log("test");
    document.getElementById("argent").innerHTML = format(argent) + " 💶";
    
 }
 
//  function bonus(){
//     if(credit>=prixbonus){
//         credit-=prixbonus
//         managervalue+=0.07
//         console.log(managervalue)
//     }else{
//         alert ("tu n'as pas asser, vas bosser")
//     }
//  }
 




function format(argent) {
    
    if (argent < 100) {
        return parseInt(argent).toFixed(2); //ou 2 
    } else {
        return parseInt(argent).toFixed(0);
    }
}

