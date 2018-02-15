var lista = [
  // {"desc":"manga", "quant":"1", "valor":"5.40"},
  // {"desc":"graviola", "quant":"5", "valor":"8.75"},
  // {"desc":"uva", "quant":"8", "valor":"6.00"},
  // {"desc":"melão", "quant":"2", "valor":"3.50"}
];


function getTotal(lista){
  var total = 0;
  for (var chave in lista){
    total += lista[chave].valor * lista[chave].quant;
  }

  return total;
}

function setList(lista){
  var table = '<thead><tr><th>Descrição</th><th>Quantidade</th><th>Valor</th><th>Ação</th></tr></thead><tbody>';
  for(var chave in lista){
    table += '<tr><td>'+ formatDesc (lista[chave].desc) +'</td><td>'+ lista[chave].quant +'</td><td>'+ formatValue(lista[chave].valor) +'</td><td><button class="btn btn-default" onclick="setUpdate('+chave+');">EDITAR</button> | EXCLUIR</td></tr>'
    table += '</tbody';
    document.getElementById('listaTabela').innerHTML = table;
  }
}

//FORMATANDO A DESCRIÇÃO DOS PRODUTOS
function formatDesc(desc){
   var str = desc.toLowerCase(); // deixa todos os textos em caixa baixa.
   str = str.charAt(0).toUpperCase() + str.slice(1); // Pega o primeiro caracter do valor deixa em caixa alta e concatena com o restante da palavra.
   return str;
}

//FORMATANDO O VALOR DOS PRODUTOS

function formatValue(value){
  // PEGANDO O VALOR TRANSFORMANDO EM FLOAT, INFORMANDO QUE EU QUERO DUAS CASAS DECIMAIS E TRANSFORMANDO NOVAMENTE EM STRING.
  //SUBSTITUINDO O PONTO POR VÍRGULA EM FORMATO REAL
  // ADICIONANDO O CIFRÃO
  var str = parseFloat(value).toFixed(2) + "";
  str = str.replace(".",",");
  str = "R$ " + str;
  return str;
}

function addProduto(){
  var desc = document.getElementById("desc").value;
  var quant = document.getElementById("quant").value;
  var valor = document.getElementById("valor").value;

  lista.unshift({"desc": desc, "quant": quant, "valor": valor});
  setList(lista);
}

function setUpdate(id){
  var obj = lista[id];
  document.getElementById("desc").value = obj.desc;
  document.getElementById("quant").value = obj.quant;
  document.getElementById("valor").value = obj.valor;
  document.getElementById("btnUpdate").style.display = "inline-block";
  document.getElementById("btnAdd").style.display = "none";

  document.getElementById("inputIDUpdate").innerHTML = '<input id="IdUpdate" type="hidden" value="'+id+'">';
}

function resetForm(){
  document.getElementById("desc").value = "";
  document.getElementById("quant").value = "";
  document.getElementById("valor").value = "";
  document.getElementById("btnUpdate").style.display = "none";
  document.getElementById("btnAdd").style.display = "inline-block";

  document.getElementById("inputIDUpdate").innerHTML = "";
}

function updateProduto(){

    var id = document.getElementById("IdUpdate").value;
    var desc = document.getElementById("desc").value;
    var quant = document.getElementById("quant").value;
    var valor = document.getElementById("valor").value;

    lista[id] = {"desc": desc, "quant": quant, "valor": valor};
    resetForm();
    setList(lista);
}

setList(lista);
console.log(getTotal(lista));
