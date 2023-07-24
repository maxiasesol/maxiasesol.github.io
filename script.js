const d = document;
const w = window;
const sobreMi = d.querySelector(".info");
const contiene = d.querySelector(".contiene");
const proyectos = d.querySelector(".proyectos");
const contacto = d.querySelector(".contacto");
const menu = d.querySelector(".menu");
const normal = d.querySelector(".normal");
const one = d.getElementById("one");
const texto = d.querySelector(".texto");


menu.addEventListener("click", function(){
normal.classList.add("responsive");
normal.style.display = "flex";
})
normal.addEventListener("click", function(){
normal.classList.remove("responsive");
normal.style.display = "";
})
w.addEventListener("scroll",e=>{
    let scrolltop = w.pageYOffset;
    if(scrolltop>200 & scrolltop<900){sobreMi.classList.add("mover");}
    else{sobreMi.classList.remove("mover");}
    if(scrolltop>300 & scrolltop<1300){contiene.classList.add("moverContiene");}
    else{contiene.classList.remove("moverContiene");}
    if(scrolltop>1200){proyectos.classList.add("visible");}
    if(scrolltop>2000){proyectos.classList.remove("visible");}
    if(scrolltop>1800 ){contacto.classList.add("convisible");}
    else{contacto.classList.remove("convisible");}
});


