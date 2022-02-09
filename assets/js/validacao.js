const form = document.querySelector(".form-box");

form.addEventListener('submit', function (recebeFormulario){
    recebeFormulario.preventDefault();

    const pegaNome = document.getElementById("nome");
    const pegaCelular = document.getElementById("celular");
    const pegaEmail = document.getElementById("email");
    const pegaFaturamento = document.getElementById("faturamento");


    validaNome(pegaNome.value);
    //validaCelular(pegaCelular.value);
    validaEmail(pegaEmail.value);
    //validaFaturamento(pegaFaturamento.value);
});

function validaNome(nome){
    if(nome == ""){
        const mensagem = document.querySelector("#aviso-nome");
        msg(mensagem)
    }
}

/*
function validaCelular(celular){
    if(celular == ""){
        const mensagem = document.querySelector("#aviso-celular");
        msg(mensagem);
    }
} */

function validaEmail(email){
    if(email == ""){
        const mensagem = document.querySelector("#aviso-email");
        msg(mensagem);
    }

    if(email.indexOf("@") == -1 || email.indexOf(".") == -1 || email.indexOf(".") - email.indexOf("@") == 1){
        const mensagem = document.querySelector("#aviso-email");
        mensagem.innerHTML = "Email inválido";
    }
};

/* function validaFaturamento(faturamento){
    if(email == ""){
        const mensagem = document.querySelector("#aviso-faturamento");
        msg(mensagem);
    }
} */

function msg(mensagem){
    mensagem.innerHTML = "Este campo é obrigatório";
}
