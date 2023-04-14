let argent = 1000
canUp=true

     export class Entreprise{
      constructor(gain,prixUp,PrixManager){
        this.gain=gain
        this.prixUp=prixUp
        this.PrixManager=PrixManager
        this.managerOn=false
      }
      
    usine(){
      
      const boutonsCaches = document.getElementById("boutons-caches");
        boutonsCaches.style.display = "block";
       const achmer = document.getElementById("achmer");
        achmer.style.display = "none";

        document.getElementById("argent").innerHTML = format(argent)+ " 💶";
        document.getElementById("bouton-gain").innerHTML = "vendre " + format(this.gain) + " 💶";
        document.getElementById("bouton-up").innerHTML = "ameliorer " + format(this.prixUp) + " 💶";
    }
    vendre() {
      console.log(this.gain)
        argent+=this.gain
        document.getElementById("argent").innerHTML = format(argent)+ " 💶";
        document.getElementById("bouton-gain").innerHTML = "vendre " + format(this.gain) + " 💶";
        document.getElementById("bouton-up").innerHTML = "ameliorer " + format(this.prixUp) + " 💶";
    
		}
    manager (){

      document.getElementById("bouton-mana").innerHTML =  "gain passif:"+format(this.gain);

      if(argent>this.PrixManager && !this.managerOn){
        argent = argent-this.PrixManager
        document.getElementById("achmana").style.display = "none";
        document.getElementById("boutons-caches2").style.display="block";
        document.getElementById("argent").innerHTML = format(argent)+ " 💶";
        this.managerOn=true
        this.managerLoop
        

      }else{
        console.log("pas argent")
        document.getElementById("bouton-gain").innerHTML = "vendre " + format(this.gain) + " 💶";
      } 
}
    ameliorerGain() {
      
      if (argent>this.prixUp) {
        this.gain *= 1.15

        argent = argent-this.prixUp
        document.getElementById("argent").innerHTML = format(argent)+ " 💶";
        document.getElementById("bouton-gain").innerHTML = "vendre " + format(this.gain) + " 💶";
        console.log(argent)
        this.prixUp*=1.25
        document.getElementById("bouton-up").innerHTML = "ameliorer " + format(this.prixUp) + " 💶";
        document.getElementById("bouton-mana").innerHTML = format(this.gain) +" click par sec";

      }else{
        console.log("pas argent")
        document.getElementById("bouton-gain").innerHTML = "vendre " + format(this.gain) + " 💶";
      }
  }

  managerLoop(){
    setInterval(Merguezazor.vendre(), 500);
    document.getElementById("argent").innerHTML = format(argent)+ " 💶";
  }
    }
     const Merguezazor = new Entreprise(1,1.25,45)


    function format(argent){
      //console.log(typeof argent);
      if(argent<1000){
        //console.log(typeof argent,"dqsd")
        return argent.toFixed(2)
      }else{
        console.log( argent,"aaaaa")
        return argent.toFixed(0)
      }

    }
	