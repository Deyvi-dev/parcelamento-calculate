 var total = 100.50 // valor da camisa em reais
  2 var parcela = 3; // número de parcelas
  3 
  4 var valorParcela = Math.floor(total / parcela); // divisão arredondada para     baixo
  5 var valorTotalDasParcelas = valorParcela * parcela;
  6 console.log(valorTotalDasParcelas)
  7 if (total === valorTotalDasParcelas) {
  8     console.log(valorParcela)
  9   console.log("OK");
 10 } else {
 11   var diferenca = total - valorTotalDasParcelas;
 12   var valorUltimaParcela = valorParcela + diferenca;
 13   console.log("O valor das duas primeiras parcelas é: " + valorParcela);
 14   console.log("O valor da última parcela é: " + valorUltimaParcela);
 15 }
 16 

