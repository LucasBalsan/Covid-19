async function cadastrarCaso() {
    try {
        let dados = {
            uf: document.getElementById("estados").value,
            cidade: document.getElementById("cidade").value,
            confirmados: document.getElementById("confirmados").value,
            recuperados: document.getElementById("recuperados").value,
            mortes: document.getElementById("mortos").value,
        };

        var xhr = new window.XMLHttpRequest();
        xhr.open('POST', 'http://localhost:4200/api/casos/', true)
        xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
        xhr.send(JSON.stringify(dados));

        alert('Dados cadastrados com sucesso!');
        document.getElementById("form-casos").reset();
    } catch (err) {
        alert('Ops, ocorreu um erro com a conexão.');
    }
}