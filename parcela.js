let total = 100.50 // valor do produto total
let parcela = 3; // número de parcelas
let valorParcela = Math.floor(total / parcela); // divisão arredondada para baixo

let valorTotalDasParcelas = valorParcela * parcela;
  console.log(valorTotalDasParcelas)
  if (total === valorTotalDasParcelas) {
     console.log(valorParcela)
     console.log("OK");
 } else {
    diferenca = total - valorTotalDasParcelas;
    let valorUltimaParcela = valorParcela + diferenca;
   console.log("O valor das duas primeiras parcelas é: " + valorParcela);
   console.log("O valor da última parcela é: " + valorUltimaParcela);
  }
