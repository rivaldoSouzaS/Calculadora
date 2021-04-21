var teclas = document.getElementsByClassName("classeBotao"); //pega todos os botoes
var botaoOn = document.getElementById('botaoOn');
var campoTexto = document.getElementById('impute');
var expressao = new Array;


botaoOn.addEventListener('click', limparLigar);



/**
 * metodo responsavel pela adicao de eventos aos botoes da calculadra
 * 
 * @param lista
 * @returns int
 */
function adicionarEventos(lista){

    
    for (var i = 0; i < lista.length; i++) {
        lista[i].index = i;
        lista[i].addEventListener("click", function (e) {
            

            if(!campoTexto.disabled){

                if(this.index == 18 || this.index == 13){ //CE e ON/CE
                    removerItens(expressao);
                    campoTexto.value = "0";
                }
                else{
                    
                    adicaoCorreta(this.index);
                    string = expressao.toString().replace(/[,|\s]+/g,"");
                    campoTexto.value = string;
                }
                if(this.index ==1){//botao off
                    removerItens(expressao);
                    campoTexto.value = "";
                    campoTexto.disabled = true;
                }
                if(this.index ==17){
                    
                    campoTexto.value = eval(campoTexto.value);
                }
            }
            
        });
    }
}

function percorrer(string){
    var correrto;
    for (let index = 0; index < string.length; index++) {
        correrto.charAt(index) = parseInt(string.charAt(index));
    }
    return correrto;
}


function operacao(minhaString){
    for (let index = 0; index < minhaString.length; index++) {
        minhaString.charAt(index);

        
    }
}

function removerItens(listaItens){
    while(listaItens.length != 0){
        listaItens.pop();
    }
}


function limparLigar(){
    campoTexto.disabled = false;
    if(teclas[0].index !== 0){
        adicionarEventos(teclas);
    }
}


//importante
function adicaoCorreta(indice){ 
    if(indice == 5){
        expressao.push(0);
    }
    if(indice == 4){
        expressao.push(1);
    }
    if(indice == 10){
        expressao.push(2);
    }
    if(indice == 16){
        expressao.push(3);
    }
    if(indice ==3 ){
        expressao.push(4);
    }
    if(indice ==9 ){
        expressao.push(5);
    }
    if(indice == 15){
        expressao.push(6);
    }
    if(indice == 2){
        expressao.push(7);
    }
    if(indice == 8){
        expressao.push(8);
    }
    if(indice == 14){
        expressao.push(9);
    }
     
    //------------------------------------------
    if(indice == 19){ // dividir
        expressao.push('/');
    }
    if(indice == 20){
        expressao.push('*');
    }
    if(indice == 21){
        expressao.push('-');
    }
    if(indice == 22){
        expressao.push('+');
    }
    
}



