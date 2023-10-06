var cpt=0;
let number = 0;

function sleep(ms) {
  return new Promise(
    resolve => setTimeout(resolve, ms)
  );
}




// Variables pour suivre la position précédente du défilement
let prevScrollPos = window.scrollY;
// Hauteur de la barre de navigation
const navbarHeight = document.querySelector('.navbar').offsetHeight;

// Fonction pour afficher ou masquer la barre de navigation en fonction du défilement
async function toggleNavbarOnScroll() {
  const currentScrollPos = window.scrollY;

  if (prevScrollPos > currentScrollPos) {
    // L'utilisateur fait défiler vers le haut, réafficher la barre de navigation
    document.querySelector('.navbar').style.top = '0';
    document.getElementById('boutonDeNav').style.display = "block"
  } else {
    // L'utilisateur fait défiler vers le bas, masquer la barre de navigation
    document.querySelector('.navbar').style.top = `-${navbarHeight}px`;

    if(document.getElementById("boutonDeNav").classList.contains("loaded")){
      //document.getElementById('boutonDeNav').style.display = "none"
      showNav(0)
    }
  }

  // Mettre à jour la position précédente du défilement
  prevScrollPos = currentScrollPos;
}

// Ajouter un écouteur d'événement pour le défilement
window.addEventListener('scroll', toggleNavbarOnScroll);



async function showNav(time){
    document.getElementById("boutonDeNav").classList.toggle('loaded'); 
    if(cpt%2 == 0){
        document.getElementById("nav-link-button-div").style.display = "contents";
        document.getElementById('boutonDeNav').style.visibility = "visible"
        await sleep(time)
        document.getElementById('link1').style.opacity = "1";
        await sleep(time)
        document.getElementById('link2').style.opacity = "1";
        await sleep(time)
        document.getElementById('link3').style.opacity = "1";
        //await sleep(120)
        //document.getElementById('link4').style.opacity = "1";
        //await sleep(120)
        //document.getElementById('link5').style.opacity = "1";
        cpt++;
    }
    else{    
        //document.getElementById('link5').style.opacity = "0"; 
        //await sleep(100)
        //document.getElementById('link4').style.opacity = "0";
        //await sleep(100) 
        document.getElementById('link3').style.opacity = "0"; 
        await sleep(time)
        document.getElementById('link2').style.opacity = "0";  
        await sleep(time)       
        document.getElementById('link1').style.opacity = "0";      
        await sleep(time) 
        document.getElementById("nav-link-button-div").style.display = "none";
        document.getElementById('boutonDeNav').style.visibility = "hidden"   
        cpt++;
    }
}

let nbSlide = 3
async function slider(direction){

  if(direction === -1){
    /*document.getElementById("slide"+Math.abs(number%nbSlide)).classList.add("slided-left")
    await sleep(300);*/
    document.getElementById("slide"+Math.abs(number%nbSlide)).style.display = "none"
    document.getElementById("text"+Math.abs(number%nbSlide)).style.display = "none"

    document.getElementById("slide"+Math.abs(number%nbSlide)).classList.remove("slided-left")
    number += direction
    document.getElementById("slide"+Math.abs(number%nbSlide)).style.display = "grid"
    document.getElementById("text"+Math.abs(number%nbSlide)).style.display = "grid"
  }

  if(direction === 1){
    /*document.getElementById("slide"+Math.abs(number%nbSlide)).classList.add("slided-right")
    await sleep(300);*/
    document.getElementById("slide"+Math.abs(number%nbSlide)).style.display = "none"
    document.getElementById("text"+Math.abs(number%nbSlide)).style.display = "none"

    document.getElementById("slide"+Math.abs(number%nbSlide)).classList.remove("slided-right")
    number += direction
    document.getElementById("slide"+Math.abs(number%nbSlide)).style.display = "grid"
    document.getElementById("text"+Math.abs(number%nbSlide)).style.display = "grid"
  }
}

window.onresize = function(){
    if(window.screen.width >= 991){
    document.getElementById("boutonDeNav").style.height = "0";
    document.getElementById("nav-link-button-div").style.display = "none";
    cpt=0;
  }
}