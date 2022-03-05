function calcular(n1, n2){
    n1 = parseFloat (document.getElementById("n1").value)
    n2 = parseFloat (document.getElementById("n2").value)

    selector = document.getElementById("selector").value

    switch(selector){
        case'+':
            calculo = (n1 + n2)
            document.getElementById("resultado").innerHTML = `O RESULTADO DA SOMA DE ${n1} + ${n2} = ${calculo}`
            break

        case'-':
        calculo = (n1 + n2)
            document.getElementById("resultado").innerHTML = `O RESULTADO DA SUBTRAÇÃO DE ${n1} - ${n2}  = ${calculo}`
            break
        

        case'/':
            calculo = Math.round(n1 / n2)
            if(calculo == NaN) {
                document.getElementById("resultado").innerHTML = `Insira um divisivel válido`
            } else {
            document.getElementById("resultado").innerHTML = `O RESULTADO DA DIVISÃO DE ${n1} / ${n2}  = ${calculo}`
            break}

        case'*':
            calculo = (n1 * n2)
                document.getElementById("resultado").innerHTML = `O RESULTADO DA MULTIPLICAÇÃO DE ${n1} x ${n2}  = ${calculo}`
                break
    }        

    

}

