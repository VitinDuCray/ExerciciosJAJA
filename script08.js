let preco = parseInt (prompt("Digite o preço da compra:"))
let perDesconto = parseInt (prompt("Digite o valor do desconto"))
let desconto = (preco * (perDesconto / 100))
let resultado = preco - desconto
alert("O valor final é de: " + resultado + ".")