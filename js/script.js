console.log("Morfeo iniciado.");

const starsContainer = document.getElementById("stars");

for(let i = 0; i < 200; i++){

    const star = document.createElement("div");

    star.classList.add("star");

    const size = Math.random() * 3 + 1;

    star.style.width = size + "px";
    star.style.height = size + "px";

    star.style.left = Math.random() * 100 + "%";
    star.style.top = Math.random() * 100 + "%";

    star.style.opacity = Math.random();

    starsContainer.appendChild(star);

}

const enterButton = document.getElementById("enterButton");

enterButton.addEventListener("click", () => {

    alert("Bienvenido a Morfeo.");

});
