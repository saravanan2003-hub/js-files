const container = document.getElementById("contanier");
const butt = document.getElementById("button");



butt.addEventListener("click", ()=>{
    const ab = document.createElement("img");
    ab.setAttribute("src","https://pixlr.com/images/generator/text-to-image.webp");
    ab.style.height="300px";
    ab.style.width="300px"

    container.appendChild(ab)

    document.getElementById("button").disabled = true;
})


