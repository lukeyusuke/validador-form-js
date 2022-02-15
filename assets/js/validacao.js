const form = document.querySelector(".form-box");

form.addEventListener('submit', (recebeFormulario) => {
    recebeFormulario.preventDefault();

    const pegaNome = document.getElementById("nome");
    const pegaCelular = document.getElementById("celular");
    const pegaEmail = document.getElementById("email");
    const pegaFaturamento = document.getElementById("faturamento");

    validaNome(pegaNome.value);
    validaCelular(pegaCelular.value);
    validaEmail(pegaEmail.value);
    validaFaturamento(pegaFaturamento.value);
});

const validaNome = (nome) => {
    const regex = /[0-9]/;

    if(nome == ""){
        const mensagem = document.querySelector("#aviso-nome");
        msg(mensagem)
    }else if(regex.test(nome) == true){
        const mensagem = document.querySelector("#aviso-nome");
        mensagem.innerHTML = "Nome inválido";
    }
};

const validaCelular = (celular) =>{
    if(celular == ""){
        const mensagem = document.querySelector("#aviso-celular");
        msg(mensagem)
    }else if(isNaN(celular) == true){
        const mensagem = document.querySelector("#aviso-celular");
        mensagem.innerHTML = "Número inválido";
    }else if(celular.length !== 11){
        const mensagem = document.querySelector("#aviso-celular");
        mensagem.innerHTML = "Número inválido";
    }
};

const validaEmail = (email) => {
    if(email == ""){
        const mensagem = document.querySelector("#aviso-email");
        msg(mensagem);
    }else if(email.indexOf("@") == -1 || email.indexOf(".") == -1 || email.indexOf(".") - email.indexOf("@") == 1){
        const mensagem = document.querySelector("#aviso-email");
        mensagem.innerHTML = "Email inválido";
    }
};

const validaFaturamento = (faturamento) => {
    if(faturamento == ""){
        const mensagem = document.querySelector("#aviso-faturamento");
        msg(mensagem);
    }
};

const msg = (mensagem) => {
    mensagem.innerHTML = "Este campo é obrigatório";
}; 