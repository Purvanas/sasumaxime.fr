var cpt=0;
let number = 0;

function sleep(ms) {
    return new Promise(
      resolve => setTimeout(resolve, ms)
    );
  }


async function showNav(){
    document.getElementById("boutonDeNav").classList.toggle('loaded'); 
    if(cpt%2 == 0){
        document.getElementById("nav-link-button-div").style.display = "contents";
        await sleep(120)
        document.getElementById('link1').style.opacity = "1";
        await sleep(120)
        document.getElementById('link2').style.opacity = "1";
        await sleep(120)
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
        await sleep(100)
        document.getElementById('link2').style.opacity = "0";  
        await sleep(100)       
        document.getElementById('link1').style.opacity = "0";      
        await sleep(120) 
        document.getElementById("nav-link-button-div").style.display = "none";   
        cpt++;
    }
}

let nbSlide = 3
async function slider(direction){

  if(direction === -1){
   /* document.getElementById("slide"+Math.abs(number%nbSlide)).classList.add("slided-left")
    await sleep(300);*/
    document.getElementById("slide"+Math.abs(number%nbSlide)).style.display = "none"
    document.getElementById("slide"+Math.abs(number%nbSlide)).classList.remove("slided-left")
    number += direction
    document.getElementById("slide"+Math.abs(number%nbSlide)).style.display = "grid"
  }

  if(direction === 1){
    /*document.getElementById("slide"+Math.abs(number%nbSlide)).classList.add("slided-right")
    await sleep(300);*/
    document.getElementById("slide"+Math.abs(number%nbSlide)).style.display = "none"
    document.getElementById("slide"+Math.abs(number%nbSlide)).classList.remove("slided-right")
    number += direction
    document.getElementById("slide"+Math.abs(number%nbSlide)).style.display = "grid"
  }
}

window.onresize = function(){
    if(window.screen.width >= 991){
    document.getElementById("boutonDeNav").style.height = "0";
    document.getElementById("nav-link-button-div").style.display = "none";
    cpt=0;
  }
}