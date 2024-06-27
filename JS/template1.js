//Check If There's Local Storage Color OPtion
let maincolors = localStorage.getItem("color_option");
if (maincolors !== null){
  document.documentElement.style.setProperty('--main-color', localStorage.getItem("color_option"));
  //Remove Active Class From All Colors List Item
  document.querySelectorAll(".color-list li").forEach(element => {
    element.classList.remove("active");
    //Add Active Class On Element With Data-color === Local Storage Item
    if (element.dataset.color === maincolors) {
      //Add Active Class 
      element.classList.add("active");
    }
  }); 
}

//Random Background Option
let BackOption = true;
//Varibal To Control The Interval
let backgrounInteerval;

//Check If There's Local Storage Random Background Item
let backgroundLockalItem = localStorage.getItem("background_option");
//Check If Random Background Local Storage Is Not Empty
if(backgroundLockalItem !== null) {
  if(backgroundLockalItem === 'true'){
    BackOption = true;
  } else{
    BackOption = false;
  }
//Remove Active Class From All Spans
  document.querySelectorAll(".random-backgrounds span").forEach(element => {
  element.classList.remove("active");
  });
  if(backgroundLockalItem === 'true'){
  document.querySelector(".random-backgrounds .yes").classList.add("active");
  } else{
    document.querySelector(".random-backgrounds .no").classList.add("active");

  }
}
//console.log(backgroundLockalItem);
//Click On Toggle Spin Settings Gear
document.querySelector(".toggle-settings .fa-gear").onclick = function () {
  //Togle Class fa-gear for rotation on self
  this.classList.toggle("fa-spin");
  //togle class open on main setting box
  document.querySelector(".settings-box").classList.toggle("open");
};


//Switch Color
const ColorsLi = document.querySelectorAll(".color-list li");
//Loop On All List Items
ColorsLi.forEach(li => {
  //Click On Every List Item
  li.addEventListener("click", (e) => {
    //Set Color On Root
    document.documentElement.style.setProperty('--main-color',e.target.dataset.color);
    //Set Color On Local Storage
    localStorage.setItem("color_option",e.target.dataset.color );
    handleActive(e);
  });
});

//Switch Random Backgrounds Option
const randombackEl = document.querySelectorAll(".random-backgrounds span");
//Loop On All Spans
randombackEl.forEach(span => {
  //Click On Every Span
  span.addEventListener("click", (e) => {
    handleActive(e);
    if (e.target.dataset.background === 'yes') {
      BackOption = true;
      RandomizeImgs();
      localStorage.setItem("background_option", true);
    } else{
      BackOption = false;
      clearInterval(backgrounInteerval);
      localStorage.setItem("background_option", false);
    } 
  });
});


//Select Landing Page Element
let landingPage =document.querySelector(".landing-page");
//Get Array Of Image
let imgsArray = [ "1.jpg", "2.jpg", "3.jpg", "4.jpg"];


//Function To Randomize Imgs
function RandomizeImgs () {
  if (BackOption === true) {
    backgrounInteerval = setInterval(() => {
      //Get Random Number
      let randomNumber = Math.floor(Math.random() * imgsArray.length);
      //Change Background Image   
      landingPage.style.backgroundImage = 'url("IMAGE/' +imgsArray[randomNumber] + '")';
    }, 1000); 
  }
}
RandomizeImgs();

//Select Skills Selector
let OurSkills = document.querySelector(".skills");
window.onscroll = function () {
  //Skills Offset Top
  let  = OurSkills.OffsetTop;
  //Skills Outer Height
  let SkillsOuterHeight = OurSkills.offsetHeight;
  //Window Height
  let WindowHeight = this.innerHeight;
  //Window ScrollTop
  let WindowScrollTop = this.pageYOffset;
  if (WindowScrollTop > (WindowScrollTop + SkillsOuterHeight - WindowHeight)) {
    let AllSkills = document.querySelectorAll(".skill-box .skill-progress span");
    AllSkills.forEach(skill => {
      skill.style.width = skill.dataset.progress;
    });
  }
};


//Creat Popup With The Image
let ourgallary = document.querySelectorAll(".gallary img");
ourgallary.forEach(img => {
  img.addEventListener('click', (e) => {
    //Creat Overlay Element
    let overlay = document.createElement("div");
    //Add Class To Overlay 
    overlay.className = 'popup-overlay';
    //Append Overlay To The Body
    document.body.appendChild(overlay); 
    //Creat The Popup Box
    let popupbox = document.createElement("div");
    //Add Class To The Popup Box
    popupbox.className = 'popup-box';

     
    if (img.alt !== null) {
      //Creat Heading
      let imgHeading = document.createElement("h3");
      //Creat Text For Heading
      let imgText = document.createTextNode(img.alt);
      //Append The Text To The Heading
      imgHeading.appendChild(imgText);
      //Append The Heading To The Popup Box
      popupbox.appendChild(imgHeading);
    }


    //Creat The Image
    let popupimage = document.createElement("img");
    //Set Image Source
    popupimage.src = img.src;
    //Add Image To Popup Box
    popupbox.appendChild(popupimage);
    //Append The Popup Box To Body
    document.body.appendChild(popupbox);
    //Creat The Close Span 
    let closeButtom = document.createElement("span");
    //Creat The Close Buttom Text
    let closeButtomText = document.createTextNode("X");
    //Append Text To Close Buttom
    closeButtom.appendChild(closeButtomText);
    //Add Class To Close Buttom
    closeButtom.className = 'close-buttom';
    //Add Close Buttom To The Popup Box
    popupbox.appendChild(closeButtom);
  });
});

//Close Popup
document.addEventListener("click", function (e) {
  if (e.target.className == 'close-buttom') {
    //Remove The Current.popup
    e.target.parentNode.remove();
    //Remove overlay
    document.querySelector(".popup-overlay").remove();
  }
});


//Select All Bullets
const allbullets = document.querySelectorAll(".nav-bullets .bullet");

//Select All Links
const allLinks = document.querySelectorAll(".links a");

function scrollTOSomewhere(elements) {

  elements.forEach(ele => {

    ele.addEventListener("click", (e) => {

      e.preventDefult();

      document.querySelector(e.target.dataset.section).scrollIntoView({

        behavior: 'smooth'

      });
    });
  });
}

scrollTOSomewhere(allbullets);
scrollTOSomewhere(allLinks);


//Handle Active State
function handleActive(ev) {
  //Remove Active Class Fome All Childrens
  ev.target.parentElement.querySelectorAll(".active").forEach(element => {
    element.classList.remove("active");
  });
  //Add Active Class On Self
  ev.target.classList.add("active");
}


let bulletsSnap = document.querySelectorAll(".bullets-option span");

let bulletsContainer = document.querySelector(".nav-bullets");

let bulletsItem = document.querySelector("bullets_option");

if(bulletsItem !== null){

  bulletsSnap.forEach(span => {
    span.classList.remove("active");
  });

  if(bulletsItem === 'block') {
    bulletsContainer.style.display = 'block';
    document.querySelector(".bullets-option .yes").classList.add("active");
    
  } else {
    bulletsContainer.style.display = 'none';
    document.querySelector(".bullets-option .no").classList.add("active");

  }

}
bulletsSnap.forEach(span =>{

  span.addEventListener("click", (e) =>{

    if(span.dataset.display === 'show') {

      bulletsContainer.style.display = 'block';

      localStorage.setItem("bullets_option", 'block');
      
    }

    else{

      bulletsContainer.style.display = 'none';

      localStorage.setItem("bullets_option", 'none');

    }

    handleActive(e);

  });
});


document.querySelector(".reset-options").onclick = function () {
  localStorage.clear();
  /*localStorage.removeItem(color_option);
  localStorage.removeItem(background_option);
  localStorage.removeItem(bullets_option);*/
};