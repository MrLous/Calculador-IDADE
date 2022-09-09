const dataAtual = new Date();
const mesAtual = (dataAtual.getMonth()+1);
const anoAtual = dataAtual.getFullYear();
var idademes = 0;
var idadeano = 0;

// funcao do botão
function salvar() {
    // captura de valores
    const nome = document.querySelector("#iNome");
    const dataNascimento = document.querySelector("#iData").valueAsDate;
    const mesNascimento = (dataNascimento.getUTCMonth() + 1);
    const anoNascimento = dataNascimento.getUTCFullYear();

    // Seguranca para nao ter de dados em branco
    if( nome.value == ""){
        alert("Preencher o Nome");
    }else if( dataNascimento.value == ""){
        alert("Selecione a data de Nascimento");
    }else{
        //calculador de idade
        //ano
        idadeano = anoAtual - anoNascimento ;

        //mes
        if (mesNascimento == mesAtual){
            idademes = 0;
        }else if (mesNascimento > mesAtual) {
            idademes = (12 - mesNascimento) + mesAtual;
            //como o mes de aniversario nao passou diminuir 1 ano
            idadeano = idadeano - 1;
        }else{
            idademes = mesAtual - mesNascimento;
        }
        
        //verificardo do tamanho do nome
        var tamanhoNome = nome.value.length;
        console.log(tamanhoNome);

        //resposta da idade
        var idade = "Sua Idade é: " + idadeano +" anos e " + idademes + " meses";
        document.querySelector('p').textContent = (idade);
    }
}