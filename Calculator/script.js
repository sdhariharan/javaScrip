const exp = document.getElementById("exp");

const buttons = document.querySelectorAll(".btn");

const ansBtn = document.getElementById("ans");

const clrBtn = document.getElementById("clr");


// Handle all number/operator buttons
buttons.forEach(button => {

    button.addEventListener("click", () => {

        exp.value += button.textContent;

    });

});


// Calculate answer
ansBtn.addEventListener("click", () => {

    try {

        const result = eval(exp.value);

        if (result === Infinity || result === -Infinity) {

            exp.value = "Cannot Divide By Zero";

            setTimeout(() => {
                exp.value = "";
            }, 2000);

            return;
        }
        if(exp.value!=="")
        exp.value = result;
    

    }
    catch {

        exp.value = "Invalid Expression";

        setTimeout(() => {
            exp.value = "";
        }, 2000);

    }

});


// Clear button
clrBtn.addEventListener("click", () => {

    exp.value = "";

});