function inserir(dados)
{
    var contatos = buscarTudo();

    contatos.push(dados);

    salvarTudo(contatos);

    alert('Novo contato inserido');
}

function buscar()
{
    var contatos = buscarTudo();

    var tabela = $('#lista');
    tabela.html('');

    console.log(contatos);

    for (var cada_con in contatos){
        if(contatos[cada_con] == null){
            continue;
        }

        tabela.prepend(
            '<tr id="contato-' + cada_con + '">' +
             '<td>' + cada_con + '</td>' +
             '<td>' + contatos[cada_con].nome + '</td>' +
             '<td>' + contatos[cada_con].email + '</td>' +
             '<td>' + contatos[cada_con].telefone + '</td>' +
             '<td>' +
                '<a id="excluir" onclick="remove('+ cada_con +')" value="'+ cada_con +'" href="#" class="btn btn-sm btn-danger"> <span class="glyphicon glyphicon-trash"> </span></a>&nbsp;&nbsp;' +
                '<a id="editar" value="'+ cada_con +'" href="#" class="btn btn-sm btn-warning"> <span class="glyphicon glyphicon-pencil"> </span></a>' +
             '</td>' +
             '<td><input type="checkbox" id="check-contatos"></td>' +
            '</tr>'
        );
    }
}

function buscarPorId(id) {

    var contatos = buscarTudo();
    
    return contatos[id];
}

function atualizar(dados, id) {

    var contatos = buscarTudo();

    contatos[id] = dados;

    salvarTudo(contatos);

    alert('Contato Atualizado');
}

function remove(id) {

    var contatos = buscarTudo();

    contatos[id] = undefined;

    salvarTudo(contatos);

    $('#contato-' + id).remove();

    alert('Contato Excluido');
}

function limparTudo() {
    localStorage.setItem('contatos', '[]');
}

function buscarTudo() {

    var contatos = [];

    if(localStorage.getItem('contatos')){
    var stringDados = localStorage.getItem('contatos');
    contatos = JSON.parse(stringDados);
    }
    return contatos;
}

function salvarTudo(dados) {
    var stringDados = JSON.stringify(dados);
    localStorage.setItem('contatos', stringDados);
}

