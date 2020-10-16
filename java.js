var div1 = document.getElementById ("brab1")
var div2 = document.getElementById ("div2")
var div3 = document.getElementById ("div3")

// ocultar primeira div e surgir segunda div
function pagina2 () {
    div2.style.display = "block"
    div1.style.display = "none"

    var fsex = Boolean(document.getElementsByName ("radsex"))
    var fem = Boolean(document.getElementById ("femi").checked)
    //pegando nome do input text
    var nome = document.getElementById ("nome")
    //colocando nome na page2
    var pa = document.getElementById ("par2")
    //colocando nome na parte superior da page2
    var nomec = document.getElementById ("marq")

//nome nao preenchido
    if ( nome.value == "") {
        alert("[ERRO] O nome precisa ser preenchido")
        window.location.reload ()
    }
//nao marcou mulher
    else if (fsex != fem) {
        alert(`Não fornecemos auxílio sexual para esse gênero no momento, marque novamente \u{1F605}`)
        window.location.reload ()
    }  

//colocar nome embaixo e cima PAGE2
    var nome1 = String(nome.value)
    pa.innerHTML += `<b> Olá,${nome1.toUpperCase()}!</b>`
    nomec.innerHTML += `Tô te vendo <b> ${nome1.toUpperCase()} </b> \u{1F60F}`
}


// limitando as checkbox
function clicar () {
    var a = document.getElementsByName ('ops')
    var newvar = 0

    for (let count = 0; count < a.length ; count ++) {
        if (a[count].checked == true) {
            newvar += 1
        }
    }   
    if (newvar == 6) {
        var confir = confirm("Você selecionou 6 opções, continuar?")
        if (confir == true) {
    // fazendo sumir a div2 e aparecer a div3 final
            div2.style.display = "none"
            div3.style.display = 'block'
            var img = document.getElementsByTagName('img')
            var txt = document.getElementsByClassName ("txt")
        
            // escolhendo os gays
            //Ramon
            for (var c = 0; c <= 6; c++){
                if (a[0].checked & a[2].checked & a[3].checked  == true & c == 1 ){
                    img[0].src = "ramon.png"
                    txt[0].innerHTML = "<h3> Este é o Ramon! <h3>"
                    txt[0].innerHTML += "<h4>  <i>Certamente a pessoa mais gostosa que você verá nesse site!</i> </h4>"
                    txt[0].innerHTML += "<p> <strong> Nome: </strong> Ramon Araújo Ribeiro. </p>"
                    txt[0].innerHTML += "<p> <strong> Idade: </strong> 19 anos. </p>"
                    txt[0].innerHTML += "<p> <strong> Contato: </strong> 91meiamolemeiaDURA. </p>"
                    txt[0].innerHTML += "<p> <strong> Característica principal: </strong> Gostosão! </p>"
                    continue
                }    
            //Ian
                else if (a[9].checked & a[7].checked & a[6].checked  == true & c == 2){ 
                    img[1].src = "ian.jpg"
                    txt[1].innerHTML = "<h3> Este é o Ian! <h3>"
                    txt[1].innerHTML += "<h4>  <i>Certamente a pessoa memos gostosa que você verá nesse site!</i> </h4>"
                    txt[1].innerHTML += "<p> <strong> Nome: </strong> Ian Leandre. </p>"
                    txt[1].innerHTML += "<p> <strong> Idade: </strong> 19 anos. </p>"
                    txt[1].innerHTML += "<p> <strong> Contato: </strong> 91meiamolemeiaDURA. </p>"
                    txt[1].innerHTML += "<p> <strong> Característica principal: </strong> Viadinho! </p>"
                    continue
                }
            //Andre 
                else if (a[0].checked & a[9].checked & a[8].checked  == true & c == 3 ){    
                    img[2].src = "andre.jpg"
                    txt[2].innerHTML = "<h3> Este é o André! <h3>"
                    txt[2].innerHTML += "<p> <strong> Nome: </strong> André Marques. </p>"
                    txt[2].innerHTML += "<p> <strong> Idade: </strong> 19 anos. </p>"
                    txt[2].innerHTML += "<p> <strong> Contato: </strong> 91meiamolemeiaDURA. </p>"
                    txt[2].innerHTML += "<p> <strong> Característica principal: </strong> Ele é BrabU! </p>"
                    continue
                }
            //Marcio
                else if (a[0].checked & a[2].checked & a[4].checked  == true & c == 4 ){  
                    img[3].src = "marcio.jpg"
                    txt[3].innerHTML = "<h3> Este é o Marcio! <h3>"
                    txt[3].innerHTML += "<p> <strong> Nome: </strong> Marcio Pimentel. </p>"
                    txt[3].innerHTML += "<p> <strong> Idade: </strong> 19 anos. </p>"
                    txt[3].innerHTML += "<p> <strong> Contato: </strong> 91meiamolemeiaDURA. </p>"
                    txt[3].innerHTML += "<p> <strong> Característica principal: </strong> Ele que sabe ué! </p>"
                    continue
                }
            //Jordesson 
                else if (a[0].checked & a[2].checked & a[1].checked == true & c == 5){    
                    img[4].src = "gash.jpg"
                    txt[4].innerHTML = "<h3> Este é o Jordesom! <h3>"
                    txt[4].innerHTML += "<p> <strong> Nome: </strong> Jordesom. </p>"
                    txt[4].innerHTML += "<p> <strong> Idade: </strong> 19 anos. </p>"
                    txt[4].innerHTML += "<p> <strong> Contato: </strong> 91meiamolemeiaDURA. </p>"
                    txt[4].innerHTML += "<p> <strong> Característica principal: </strong> Main Yasuo! </p>"
                    continue
                }
            //Alfeu
                else if (a[1].checked & a[2].checked & a[4].checked == true & c == 6 ) {
                    img[5].src = "alfeu.jfif"
                    txt[5].innerHTML = "<h3> Este é o Alfeu! <h3>"
                    txt[5].innerHTML += "<p> <strong> Nome: </strong> Alfeu Nobre. </p>"
                    txt[5].innerHTML += "<p> <strong> Idade: </strong> 19 anos. </p>"
                    txt[5].innerHTML += "<p> <strong> Contato: </strong> 91meiamolemeiaDURA. </p>"
                    txt[5].innerHTML += "<p> <strong> Característica principal: </strong> Main Thresh! </p>"
                    continue
                } 
            }
        }   
        
// desmarcar todos as checkbox
        else if (confir == false) { 
            for (var i = 0; i < a.length ; i++){ 
                if (a[i].checked == true){
                    a[i].checked = false    
                }
            }    
        } 
    }
}
function pagina3() {
    window.location.reload()
}
