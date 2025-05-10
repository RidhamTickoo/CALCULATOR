let screen = document.querySelector("#screen td");
let currentInput = "";
let memory = 0;

document.querySelectorAll(".btns td, .btns input").forEach((button) => {
    button.addEventListener("click", function () {
        let value = button.tagName === "INPUT" ? button.value : button.innerText;

        switch (value) {
            case "ON":
                currentInput = "";
                screen.innerText = "0";
                break;
            case "OFF":
                currentInput = "";
                screen.innerText = "";
                break;
            case "AC":
                currentInput = "";
                screen.innerText = "0";
                break;
            case "CE":
                currentInput = currentInput.slice(0, -1);
                screen.innerText = currentInput || "0";
                break;
            case "=":
                try {
                    currentInput = currentInput.replace(/X/g, "*").replace(/÷/g, "/");
                    let result = eval(currentInput);
                    screen.innerText = result;
                    currentInput = result.toString();
                } catch {
                    screen.innerText = "Error";
                    currentInput = "";
                }
                break;
            case "+/-":
                if (currentInput.startsWith("-")) {
                    currentInput = currentInput.slice(1);
                } else {
                    currentInput = "-" + currentInput;
                }
                screen.innerText = currentInput;
                break;
            case "Sqrt":
                currentInput = Math.sqrt(parseFloat(currentInput)).toString();
                screen.innerText = currentInput;
                break;
            case "%":
                currentInput = (parseFloat(currentInput) / 100).toString();
                screen.innerText = currentInput;
                break;
            case "M+":
                memory += parseFloat(currentInput || "0");
                break;
            case "M-":
                memory -= parseFloat(currentInput || "0");
                break;
            case "MR":
                currentInput = memory.toString();
                screen.innerText = currentInput;
                break;
            case "MC":
                memory = 0;
                break;
            default:
                currentInput += value;
                screen.innerText = currentInput;
        }
    });
});
