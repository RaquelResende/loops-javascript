var n
var soma=0
var i=0
var media
do{
    n = Number(prompt("Digite um número:"))
    if(n %3==0  ) {
        i++
        soma += n
    }
}
while ( n != 0 )
i--;
media = soma / i 
alert(`A soma dos múltiplos de 3 são: ${media}`)