const change = document.getElementById("change")

function change_data(){

document.getElementsByTagName('div')[3].innerText='Akhmadullina'
document.getElementsByTagName('div')[4].innerText='Bella'
document.getElementsByTagName('div')[5].innerText='Ramilevna'

}


change.addEventListener("click", change_data)