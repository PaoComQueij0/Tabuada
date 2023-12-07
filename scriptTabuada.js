   function Confirmar() {

     var n = document.getElementById ('Número')
     var n1 = Number (n.value)
     var resTexto = ''


    if (n1 == 0) {

        alert('[ERRO] Por favor, digite um número!')


    } else {

    for (var cont = 0 ; cont <= 10 ; cont ++ ) {

     var mult = n1 * cont

    resTexto += (` ${n1} x ${cont} = ${mult} \n`) }

    // tabuada funcionando perfeitamente

} 
    var res = document.getElementById ('res')
    res.innerText = resTexto
 } 





 
 
 
 
 
 
 
 
 
 
 