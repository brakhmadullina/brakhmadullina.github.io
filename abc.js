function determine() {
    console.log("x, y")
    let x = parseInt(elementX.innerText);
    let y = parseInt(elementY.innerText);
    console.log(x, y)

    if (x===0 || y===0) {
        document.getElementById('result').innerText = "X и Y не могут быть равны нулю";
        return;
    }

    let z = 1 / (x * y);
    console.log("Z=", z);

    document.getElementById('result').textContent = `Z = ${z}`;
}

const elementX = document.getElementById("x");
const elementY = document.getElementById("y");

const elementDetermine = document.getElementById("determine");
elementDetermine.addEventListener('click', determine);