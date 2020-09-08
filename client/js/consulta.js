var botaoAdicionar = document.querySelector("#buscar-api");

 botaoAdicionar.addEventListener("click", () => {
    var uf = document.getElementById('teste').value;
    var xhr = new XMLHttpRequest();

    xhr.open("GET", `http://localhost:4200/api/casos/total/${uf}`);

    xhr.addEventListener("load", () => {
        console.log("Load executado!");

        if (xhr.status == 200) {

            var resposta = xhr.response;
            console.log('Resposta:', resposta);
            var casos = JSON.parse(resposta);
            console.log('Casos:', casos.recuperados);
            casos.forEach(casos => {
                console.log(uf);
                console.log(casos);
                document.getElementById('estado--confirmados').value = casos.confirmados;
                document.getElementById('estado--recuperados').value = casos.recuperados;
                document.getElementById('estado--mortos').value = casos.mortes;
            });
        } else {
            console.log("Deu ruim!");
        }
    });

    console.log("Executar Send!");
    xhr.send();
});


botaoAdicionar.addEventListener("click", () => {
    var uf = document.getElementById('teste').value;
    var xhr = new XMLHttpRequest();
    var udDebug = document.getElementById('teste').value;
    var select = document.getElementById('teste');
    var option = select.options[select.selectedIndex];
    document.getElementById('filtrar-tabela').value = option.text;
    console.log(udDebug);

    xhr.open("GET", `http://localhost:4200/api/casos/totall`);

    xhr.addEventListener("load", () => {
        console.log("Load executado!");

        if (xhr.status == 200) {

            var resposta = xhr.response;
            console.log('Resposta:', resposta);
            var casos = JSON.parse(resposta);
            console.log('Casos:', casos.recuperados);
            casos.forEach(casos => {
                console.log(uf);
                console.log(casos);
                document.getElementById('brasil--confirmados').value = casos.confirmados;
                document.getElementById('brasil--recuperados').value = casos.recuperados;
                document.getElementById('brasil--mortos').value = casos.mortes;
            });
        } else {
            console.log("Deu ruim!");
        }
    });

    console.log("Executar Send!");
    xhr.send();
});
