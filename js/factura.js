function valor(){

    let producto1
    producto1 = document.getElementById("producto-1")
    let cantidad
    cantidad = document.getElementById("cantidad").value 
    let valor_unitario
    valor_unitario = document.getElementById("valor").value 
    let valortotal 
    valortotal = cantidad*valor_unitario 

    let producto2
    producto2 = document.getElementById("producto-2")
    let cantidad2
    cantidad2 = document.getElementById("cantidad-2").value 
    let valor2
    valor2 = document.getElementById("valor-2").value
    let valortotal2
    valortotal2 = cantidad2*valor2

    let sumatotal
    sumatotal = valortotal+ valortotal2 

    
    document.getElementById("respuesta1").innerHTML = "<div> El valor es " + valortotal + "</div>"
    document.getElementById("respuesta2").innerHTML = "<div> El valor es " + valortotal2 + "</div>" 
    document.getElementById("respuesta3").innerHTML = "<div> El valor total es " + sumatotal + "</div>"
}

function factura(){

    let producto1 = document.getElementById("producto-1").value 
    let cantidad = document.getElementById("cantidad").value 
    let valor = document.getElementById("valor").value 
    let total = cantidad*valor
    
    document.getElementById("name-product-1").innerHTML = producto1
    document.getElementById("respuesta-cantidad").innerHTML = cantidad
    document.getElementById("respuesta-valor").innerHTML = valor 
    document.getElementById("valor-total").innerHTML = total 

    let producto2 = document.getElementById("producto-2").value 
    let cantidad2 = document.getElementById("cantidad-2").value 
    let valor2 = document.getElementById("valor-2").value 
    let total2 = cantidad2*valor2

    document.getElementById("name-product-2").innerHTML = producto2
    document.getElementById("respuesta-cantidad-2").innerHTML = cantidad2
    document.getElementById("respuesta-valor-2").innerHTML = valor2
    document.getElementById("valor-total-2").innerHTML = total2 

    let total3 = total+total2

    document.getElementById("total-3").innerHTML = total3
}