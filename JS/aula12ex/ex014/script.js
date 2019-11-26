var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()
var cabeca = window.document.getElementById('cabeca')

function carregar(){
    msg.innerHTML = `Agora são <strong>${hora}</strong> horas.`
    if(hora >= 0 && hora < 12){
        img.src = "manha.png"
        cabeca.innerHTML = "Bom <strong>Dia</strong>"
        document.body.style.background = "#e2cd9f"

    }else if(hora >= 12 && hora < 18){
        img.src = "tarde.png"
        cabeca.innerHTML = "Boa <strong>Tarde</strong>"
        document.body.style.background = "#b9846f"
    }else{
        img.src = "noite.png"
        cabeca.innerHTML = "Boa <strong>Noite</strong>"
        document.body.style.background = "#515154"
    }
}