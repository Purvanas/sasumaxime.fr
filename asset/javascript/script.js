var slide = new Array("template/chantier/chantier1.jpg", "template/chantier/chantier2.jpg", "template/chantier/chantier3.jpg", "template/chantier/chantier4.jpg");
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
        await sleep(120)
        document.getElementById('link4').style.opacity = "1";
        await sleep(120)
        document.getElementById('link5').style.opacity = "1";
        cpt++;
    }
    else{    
        document.getElementById('link5').style.opacity = "0"; 
        await sleep(100)
        document.getElementById('link4').style.opacity = "0";
        await sleep(100) 
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

function highlightNav() {
    // Obtenez la position actuelle de la fenêtre
    var scrollPosition = $(window).scrollTop();
  
    // Parcourez chaque élément de navigation
    $('.nav-item').each(function () {
      var currentLink = $(this);
      var targetSection = $(currentLink.find('a').attr('href'));
  
      // Vérifiez si la section est visible à l'écran
      if (
        targetSection.position().top <= scrollPosition &&
        targetSection.position().top + targetSection.height() > scrollPosition
      ) {
        // Supprimez la classe "active" de tous les éléments de navigation
        $('.nav-item').removeClass('active');
        // Ajoutez la classe "active" à l'élément de navigation correspondant
        currentLink.addClass('active');
      } else {
        // Si la section n'est pas visible, supprimez la classe "active"
        currentLink.removeClass('active');
      }
    });
  }
  
  // Appelez la fonction lorsque la page est chargée et lors du défilement
  $(document).ready(function () {
    $(window).on('load scroll', highlightNav);
  });

window.onresize = function(){
    if(window.screen.width >= 991){
    document.getElementById("boutonDeNav").style.height = "0";
    document.getElementById("nav-link-button-div").style.display = "none";
    cpt=0;
  }
}