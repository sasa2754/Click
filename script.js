const contador = document.getElementById("contador");
const panda = document.getElementById("panda");
const raposa = document.getElementById("raposa");
let num = 0;

let larguraTela = window.innerWidth;
let alturaTela = window.innerHeight;
// console.log(`Largura: ${larguraTela}\nAltura: ${alturaTela}`)

function numAleatorio () {
    return Math.floor(Math.random() * (larguraTela - alturaTela + 1)) + alturaTela;
}

panda.addEventListener("click", () => {
    // alert("");
    contador += 1;
    contador.textContent = "Clicks: " + num;
    if (num == 50) {
        
    }
});
