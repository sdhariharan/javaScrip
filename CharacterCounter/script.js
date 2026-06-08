let input = document.querySelector("#inp");
let res = document.querySelector(".counter");

res.textContent = 0;

input.addEventListener("input", () => {
    res.textContent = input.value.length;

    if(input.value.length > 0){
        res.classList.add("active");
    }else{
        res.classList.remove("active");
    }
});