console.log("Morfeo iniciado.");

/* -------------------- */
/* CREAR ESTRELLAS */
/* -------------------- */

const stars = document.getElementById("stars");

const STAR_COUNT = 250;

for(let i = 0; i < STAR_COUNT; i++){

    const star = document.createElement("div");

    star.className = "star";

    const size = Math.random() * 3 + 1;

    star.style.width = size + "px";
    star.style.height = size + "px";

    star.style.left = Math.random() * window.innerWidth + "px";
    star.style.top = Math.random() * window.innerHeight + "px";

    star.style.animationDelay = Math.random() * 4 + "s";

    stars.appendChild(star);

}

/* -------------------- */
/* BOTÓN */
/* -------------------- */

const enterButton = document.getElementById("enterButton");

enterButton.addEventListener("click",()=>{

    alert("Bienvenido a Morfeo.");

});
