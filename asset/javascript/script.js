var slide = new Array("asset/image/chantier1.jpg", "asset/image/chantier2.jpg", "asset/image/chantier3.jpg", "asset/image/chantier4.jpg");
var numero = 0;
var cpt=0;




function ChangeSlide(sens) {
    numero = numero + sens;
    if (numero < 0)
        numero = slide.length - 1;
    if (numero > slide.length - 1)
        numero = 0;
    document.getElementById("slide").src = slide[numero];
}

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

function toggleInfo(id) {
  var infoSupp = document.getElementById(id);
  if (infoSupp.style.display === "none") {
      infoSupp.style.display = "block";
  } else {
      infoSupp.style.display = "none";
  }
}

window.onresize = function(){
    if(window.screen.width >= 991){
    document.getElementById("boutonDeNav").style.height = "0";
    document.getElementById("nav-link-button-div").style.display = "none";
    cpt=0;
  }
}