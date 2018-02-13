var lista = [
  {"desc":"manga", "quant":"1", "valor":"5.40"},
  {"desc":"graviola", "quant":"5", "valor":"8.75"},
  {"desc":"uva", "quant":"8", "valor":"6.00"},
  {"desc":"melão", "quant":"2", "valor":"3.50"}
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
    table += '<tr><td>'+ formatDesc (lista[chave].desc) +'</td><td>'+ lista[chave].quant +'</td><td>'+ formatValue(lista[chave].valor) +'</td><td>Editar | Excluir</td></tr>'
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

setList(lista);
console.log(getTotal(lista));
