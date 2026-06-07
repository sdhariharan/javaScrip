let colorbox = document.querySelector(".color-box");
let btn = document.querySelector("#generatecolor");

btn.addEventListener("click", () => {

    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);

    let color = `rgb(${r}, ${g}, ${b})`;

    colorbox.style.backgroundColor = color;
    btn.style.backgroundColor=color;

    document.querySelector("#color").textContent = color;
});