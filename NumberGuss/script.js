let chance = 5;

let num = Math.floor(Math.random() * 10) + 1;

let result = document.getElementById("result");
let c = document.getElementById("chance");

function guessnumber(input)
{
    if(num === input && chance > 0)
    {
        result.textContent = "You Won";
        result.style.color = "green";
        setTimeout(() => {
        location.reload();
    }, 2000);

    }
    else if(num > input && chance > 1)
    {
        result.textContent = "Too Low";
        chance--;

        c.textContent = `Remaining Chance: ${chance}`;
        c.style.color = "red";
    }
    else if(num < input && chance > 1)
    {
        result.textContent = "Too High";
        chance--;

        c.textContent = `Remaining Chance: ${chance}`;
        c.style.color = "red";
    }
    else
    {
        chance--;

        result.textContent = `Game Over! Number was ${num}`;
        result.style.color = "red";

        c.textContent = `Remaining Chance: ${chance}`;
        setTimeout(() => {
        location.reload();
    }, 2000);

    }
}

let btn = document.getElementById("btn");

btn.addEventListener("click", function()
{
    let input = Number(
        document.getElementById("userNum").value
    );

    if(isNaN(input))
    {
        alert("Enter a valid number");
        return;
    }

    guessnumber(input);
});