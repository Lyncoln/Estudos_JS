function conta(){
    var inicio = Number(window.document.getElementById("inicio").value)
    var fim = Number(window.document.getElementById("fim").value)
    var passo = Number(window.document.getElementById("pass").value)
    var cont = window.document.getElementById("cont")
    var aux = ""

    if(passo <= 0 ) {
        window.alert("Passo invalido, assumido 1")
        passo = 1
    }

    if(inicio < fim){
        for(inicio; inicio <= fim; inicio += passo){
            if(inicio + passo > fim){
                aux += inicio 
            }
            else{
                aux += inicio +" -> "
            }
            
        }
    }else{
        for(inicio; inicio>= fim; inicio -= passo){
            if(inicio - passo < fim){
                aux += inicio 
            }
            else{
                aux += inicio +" -> "
            }
            
        }

    }

    cont.innerHTML = `A contagem é: ${aux}`
}