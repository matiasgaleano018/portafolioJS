const typed = new Typed('.typed', {
    strings: ['Desarrollador', 'Frontend'],
    typeSpeed: 75,
    startDelay: 300,
    backSpeed: 75,
    loop: true
})

/*Menu desplegable */
const menuButton = document.getElementById("menu-button");
const navegation = document.querySelector(".header .container .navegation ul");
let show = false;
menuButton.addEventListener("click", ()=>{
    if(show == false){
        navegation.style.display = "block";
        show = true;
    }else{
        navegation.style.display = "none";
        show = false;
    }
})

/*Portafolio links */
const tateti = document.getElementById("tatetigame");
const dolarpy = document.getElementById("dolarpy");
const calculadora = document.getElementById("calculadora");

tateti.addEventListener("click", ()=>{
    window.open("https://matiasgaleano018.github.io/tatetiJS/", "_blank")
})
dolarpy.addEventListener("click", ()=>{
    window.open("https://matiasgaleano018.github.io/dolarParaguay/", "_blank")
})
calculadora.addEventListener("click", ()=>{
    window.open("https://matiasgaleano018.github.io/calculadoraJS/", "_blank")
})

/*Contacts*/

const github = document.getElementById("github");
const linkedin = document.getElementById("linkedin");
const whatsapp = document.getElementById("whatsapp");

github.addEventListener("click", ()=>{
    window.open("https://github.com/matiasgaleano018", "_blank")
})
linkedin.addEventListener("click", ()=>{
    window.open("https://www.linkedin.com/in/matias-galeano-626371184/", "_blank")
})
whatsapp.addEventListener("click", ()=>{
    window.open("https://wa.me/595986565897", "_blank")
})


/*typed */

