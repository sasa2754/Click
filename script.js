const num = document.getElementById("contador")
const botao = document.getElementById("butao")
let contador = 0;

botao.addEventListener("click", () => {
    // alert("");
    contador += 1;
    num.textContent = "Clicks: " + contador;
    if (contador == 50) {
        
    }
});
