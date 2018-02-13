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
    table += '<tr><td>'+ lista[chave].desc +'</td><td>'+ lista[chave].quant +'</td><td>'+ lista[chave].valor +'</td><td>Editar | Excluir</td></tr>'
    table += '</tbody';
    document.getElementById('listaTabela').innerHTML = table;
  }
}

setList(lista);
console.log(getTotal(lista));
