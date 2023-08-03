const d = document;
const w = window;
const sobreMi = d.querySelector(".about");
const proyectos = d.querySelector(".proyect");
const menu = d.querySelector(".menu");
const header = d.querySelector(".header");




menu.addEventListener("click", function(){
    menu.style.display="none"
    header.classList.add("visible");
})
header.addEventListener("click", function(){
    header.classList.remove("visible");
    menu.style.display = "flex";

})

w.addEventListener("scroll",e=>{
    let scrolltop = w.pageYOffset;
    if(scrolltop>250 & scrolltop<900){sobreMi.classList.add("fadein");}
    else{sobreMi.classList.remove("fadein");}

    if(scrolltop>950 & scrolltop<1300){proyectos.classList.add("fadein");}
    else{proyectos.classList.remove("fadein");}


});


