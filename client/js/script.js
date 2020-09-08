buscaEstados()
const qs = (el) => document.querySelector(el);
const qsa = (el) => document.querySelectorAll(el);

//Lista prevenções
infoJson.map((item, index) => {
    let infoItem = qs('.modelss .info-item').cloneNode(true);

    infoItem.setAttribute('data-key', index);
    infoItem.querySelector('.info-item--img img').src = item.img;
    infoItem.querySelector('.info-item--name').innerHTML = item.name;
    infoItem.querySelector('.info-item--desc').innerHTML = item.description

    qs('.info-area').append(infoItem);
});

//configs mapa SVG  
!function (s) { s(function () { function a(s) { s.appendTo(s.parents("svg>g")) } s(".mapa-svg-estados").click(function () { s(this).siblings().removeClass("mapa-svg-estados-active"), s(this).addClass("mapa-svg-estados-active"), s(".class-select").val(s(this).attr("id")).trigger("change"), a(s(this)) }), s(".class-select > option").each(function () { s(this).addClass(s(this).attr("value")) }), s(".class-select").change(function () { s("." + s(this).val() + "-class").siblings().removeClass("mapa-svg-estados-active"), s("." + s(this).val() + "-class").addClass("mapa-svg-estados-active"), a(s("." + s(this).val() + "-class")) }) }) }(jQuery);

//Pop up cadastro
var modal = document.getElementById('cadastro');

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

//Consulta Estado
async function buscaEstados() {
  try {
      const xmlHttp = new XMLHttpRequest();
      await xmlHttp.open("GET", 'https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome', false);
      xmlHttp.send(null);
      let response = JSON.parse(xmlHttp.responseText);

      let estados = document.getElementById("estados");
      for (index in response) {
          estados.options[estados.options.length] = new Option(response[index]['nome'], response[index]['sigla']);
      }

  } catch (err) {
      alert('Erro');
  }
}

//Consulta Cidade
async function buscarCidadesUF() {
  let uf = document.getElementById("estados").value;

  try {
      const xmlHttp = new XMLHttpRequest();
      await xmlHttp.open("GET", `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${uf}/municipios?orderBy=nome`, false);
      xmlHttp.send(null);
      let response = JSON.parse(xmlHttp.responseText);

      var cidade = document.getElementById("cidade");
      cidade.options = [];
      for (index in response) {
          cidade.options[cidade.options.length] = new Option(response[index]['nome'], response[index]['sigla']);
      }

  } catch (err) {
      alert('Erro')
  }
}


