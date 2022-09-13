
var idade =0
var pessoasmenores21=0
var pessoasmenores50=0
while(idade != -99 )
{
    idade = prompt("Digite sua idade (para parar o programa digite -99)")
  
 if( idade < 21 ){
  pessoasmenores21++      
}
 else if ( idade > 50 ){
    pessoasmenores50++
 }
}
alert(`O número de pessoas com 21 anos são: ${pessoasmenores21} e pessoas com 50 anos são ${pessoasmenores50}` )
 

// total = idade++


