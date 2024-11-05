 function determine() {
let x = parseInt(document.getElementById("x").value);
let y = parseInt(document.getElementById("y").value);

 console.log(x, y)

    if (x===0 || y===0) {
        document.getElementById('result').innerText = "X и Y не могут быть равны нулю";
        check = false;
        return;
    }

    let z = 1 / (x * y);
    console.log("Z=", z);

    document.getElementById('result').value = `Z = ${z}`;

    result = z;
    check = true;
}

function send() {
    if (check) {
        let textCondition = document.getElementsByTagName('p')[0].innerText
        document.getElementsByName('formulation')[0].value = textCondition;
        document.getElementsByName('result')[0].value = result;
        document.getElementById("UserEnter").submit();
    } else {
        alert("Есть недостатки. Повторите ввод")
    }
}

function determine_send() {
    determine();
    send();
}

let messageText = document.getElementById("result").innerText
console.log(messageText)
let result;
let check;

const elementX = document.getElementById("x");
elementX.addEventListener('input', determine);

const elementY = document.getElementById("y");
elementY.addEventListener('input', determine);

const elementDetermine = document.getElementById("determine");
elementDetermine.addEventListener('click', determine);

const elementSend = document.getElementById("send");
elementSend.addEventListener('click', send);
