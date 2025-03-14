let lista = [];

function adicionarAmigo() {
    let nome = document.querySelector('input').value;

    if (!nome){
        alert('Por favor insira um nome');
        return;
    }
    lista.push(nome);
    console.log(lista);
    limpaCampo();
       
    if (lista.length < 2){
        alert('É necessário pelo menos 2 participantes para o sorteio.');
    }else{
        alert('Adicionado com sucesso');
    } 
    
    atualizarLista();
}

function atualizarLista(){
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = '';

    for(let i = 0; i < lista.length; i++){
        let item = document.createElement("li");
        item.textContent = lista[i];
        listaAmigos.appendChild(item);
    }

}

function limpaCampo() {
    nome = document.querySelector('input');
    nome.value = '';

}

function sortearAmigo() {
    if(lista.length == 0 ) {
        alert('Adicione pelo menos 2 amigos');
        return;
    }
    let sorteado = lista[Math.floor(Math.random() * lista.length)];
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `O amigo sorteado foi : ${sorteado}`;

    nomeInput.addEventListener("keyup", function(event) {
        if (event.key === "Enter") {
            adicionarAmigo();
        }
    });

}

