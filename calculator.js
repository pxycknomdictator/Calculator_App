const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");
let string = "";

const converter = Array.from(buttons);

converter.forEach((items) => {
    items.addEventListener("click", (e) => {

        if (e.target.innerHTML == "C") {
            string = "";
            display.value = string;
        } else if (e.target.innerHTML == "DEL") {
            string = string.substring(0, string.length - 1);
            display.value = string;
        } else if (e.target.innerHTML == "=") {
            string = eval(string);
            display.value = string;
        } else {
            string += e.target.innerHTML;
            display.value = string;
        }
    });
});
