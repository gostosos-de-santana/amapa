function clicar () {
    var a = document.getElementsByName ('ops')
    var newvar = 0
    
    for (var count = 0 ; count < a.length ; count ++) {
        if (a[count].checked == true) {
            newvar += 1
        }
    }

        if (newvar >= 6) {
        var confir = confirm("Você selecionou 5 opções, continuar?")
            if (confir == true) {
                window.location.replace ('page3.html')
            }
            else {
                window.location.reload ()
            }
        }







}