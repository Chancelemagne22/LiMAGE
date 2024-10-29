let lastKnownScrollPosition = 0;
let ticking = false;





document.addEventListener("scroll", (event) => {
  lastKnownScrollPosition = window.scrollY;

  if (!ticking) {
    window.requestAnimationFrame(() => {

      logoVanishing(lastKnownScrollPosition);


      logoScaling(lastKnownScrollPosition);


      
      ticking = false;
    });
    ticking = true;
  }
});

function logoScaling(logoScroll){
    let iLogo = document.getElementById("logosvg");
    if(logoScroll >= 500){
        iLogo.style.width = "201px";
    }
    else{
        iLogo.style.width = "25.125em"
    }
}
function logoVanishing(logoScroll){
    let iLogo = document.getElementById("logosvg");
    
    if(logoScroll >= 1500){
      iLogo.hidden = true;
    }else{
      iLogo.hidden = false;
    }
}
let num = 0;
let temporary = 0;
let displayAbout = ["10", "9", "8", "7"];

let firstAbout = document.getElementById("one");
let secondAbout  = document.getElementById("two"); 
let thirdAbout = document.getElementById("three");  
let fourthAbout =document.getElementById("four");

document.getElementById("changeAbout").addEventListener('click', function(){
  let random = Math.floor(Math.random() * 2);
  if(num == 4){
    num = 0;
  }
  temporary = displayAbout[3];
  for(let loop = 4; loop > 0; loop--){
    if(displayAbout[0] != displayAbout[1]){

      displayAbout[loop - 1] = displayAbout[loop - 2];

    }    
  }

  
  displayAbout[0] = temporary;

  const numberAmount = ["firstAbout", "secondAbout", "thirdAbout", "fourthAbout"];


  for(let loop = 0; loop < 4; loop++){
    if(displayAbout[loop] == 10){
       
      if(numberAmount[loop] == "firstAbout"){
        fourthAbout.style.removeProperty('animation');

        switch(random){
          case 0:
            firstAbout.style.animation = "toRight 2s ease 0s 1 normal forwards";
            break;
          case 1:
            firstAbout.style.animation = "toLeft 2s ease 0s 1 normal forwards";
            break;
        }


      }else if(numberAmount[loop] == "secondAbout"){
        firstAbout.style.removeProperty('animation');
        switch(random){
          case 0:
            secondAbout.style.animation = "toRight 2s ease 0s 1 normal forwards";
            break;
          case 1:
            secondAbout.style.animation = "toLeft 2s ease 0s 1 normal forwards";
            break;
        }

      }else if(numberAmount[loop] == "thirdAbout"){
        secondAbout.style.removeProperty('animation');
        switch(random){
          case 0:
            thirdAbout.style.animation = "toRight 2s ease 0s 1 normal forwards";
            break;
          case 1:
            thirdAbout.style.animation = "toLeft 2s ease 0s 1 normal forwards";
            break;
        }
        
      }else if(numberAmount[loop] == "fourthAbout") {
        thirdAbout.style.removeProperty('animation');
        switch(random){
          case 0:
            fourthAbout.style.animation = "toRight 2s ease 0s 1 normal forwards";
            break;
          case 1:
            fourthAbout.style.animation = "toLeft 2s ease 0s 1 normal forwards";
            break;
        }

        fourthAbout.style.animation = "toRight 2s ease 0s 1 normal forwards";
      }
    }  
  }
  
  firstAbout.style.zIndex = displayAbout[0];
  secondAbout.style.zIndex = displayAbout[1];
  thirdAbout.style.zIndex = displayAbout[2];
  fourthAbout.style.zIndex = displayAbout[3];

  console.log(num);
  console.log(displayAbout[num]);
  

  num++;

  

});

