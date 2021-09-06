const btnMenuClose = document.querySelector('.btnMenu-close')
const btnMenuOpen = document.querySelector('.btnMenu-open')
const menu = document.querySelector('.menu')
const content = document.querySelector('#menu-content')
console.log(btnMenuClose)
console.log(btnMenuOpen)

content.innerHTML = `
<ul>
        <a href="creditos.html"><li class="menu-item menu-new">Créditos</li></a>
        <li class="menu-item menu-title"><h3>Reportagens</h3></li>
        <a href="report-draBianca.html"><li class="menu-item menu-new">"Uma hora de atividades físicas vale por um comprimido de antidepressivo".</li></a>
        <a href="report-draAlinePugliese.html"><li class="menu-item menu-new">Atrofia muscular na quarentena.</li></a>
        <li class="menu-item menu-title"><h3>Entretenimento</h3></li>
        <a href="entr-filmesSeriesNaPandemia.html"><li class="menu-item menu-new">3 Séries e Filmes que você precisa assistir durante a quarentena...</li></a>
        <li class="menu-item menu-title"><h3>Os Dois Lados da Moeda</h3></li>
        <a href="odldm-AImportanciaDoFeminismo.html"><li class="menu-item menu-new">A Importância do Feminismo</li></a>
        <a href="odldm-mulheresoprimidasouprivilegiadas.html"><li class="menu-item menu-new">Mulheres: Oprimidas ou Privilegiadas?</li></a>
        
</ul>
`

btnMenuClose.addEventListener('click', function(){
    menu.classList.remove('menu-open')
})

btnMenuOpen.addEventListener('click', function(){
    menu.classList.add('menu-open')
})


//gerador de notícias aleatórias

let noticias = [
    `<a href="entr-filmesSeriesNaPandemia.html"><h3>3 Séries e Filmes que você precisa assistir durante a quarentena...</h3><p>Sabemos que, durante o isolamento, um dos nossos maiores inimigos é o tédio. Por isso, nossos maiores aliados têm sido as plataformas de streaming...</p></a>`,
    `<a href="report-draAlinePugliese.html"><h3>As causas da atrofia muscular.</h3>
    <p>A prática da atividade física, mesmo aquelas que fazíamos após muita reclamação, faz falta a todos nós. Essa rotina tem destruído cotidianos em todos...</p></a>`,
    `<a href="report-draBianca.html"><h3>Especialista afirma "Uma hora de atividades físicas vale por um comprimido de antidepressivo".</h3>
    <p>Diante do isolamento em virtude da pandemia, as crises de transtornos de ordem psicológica apresentaram aumento significativo...</p></a>`,
    `<a href="odldm-AImportanciaDoFeminismo.html"><h3>A Importância do Feminismo</h3>
    <p>Bolsa estupro, exatamente. Esta proposta tem por objetivo inibir as ocorrências de aborto quando o feto for concebido mediante ato de estupro...</p></a>`,
    `<a href="odldm-mulheresoprimidasouprivilegiadas.html"><h3>Mulheres: Oprimidas ou Privilegiadas?</h3>
    <p>O movimento feminista afirma que as mulheres sempre foram oprimidas pelo sexo, mas o que a história...</p></a>`,
]

/*
ID DE NOTICIAS
-----------------------------------------------------------------------------
3 FILMES E SERIES == 0
ATROFIA MUSCULAR == 1
UMA HORA DE ATIVIDADES FISICAS VALE POR UM COMPRIMIDO DE ANTIDEPRESSIVO == 2
A IMPORTANCIA DO FEMINISMO == 3
MULHERES: OPRIMIDAS OU PRIVILEGIADAS == 4

-----------------------------------------------------------------------------
*/


const new_first = document.querySelector('#noticia_1')
const new_second = document.querySelector('#noticia_2')
const new_third = document.querySelector('#noticia_3')

const idNews = document.querySelector('#id').innerHTML


//FUNCTION IMPORT EMBARALHAR()

function embaralhar(array){
    var indice_atual = array.length, valor_temporário, indice_aleatório
    while(indice_atual !== 0){
      indice_aleatório = Math.floor(Math.random() * indice_atual)
      
      indice_atual--
      
      valor_temporário = array[indice_atual]
      
      array[indice_atual] = array[indice_aleatório]
      
      array[indice_aleatório] = valor_temporário
      
    }
    return(array)
}

function selecionarNoticias(){
    if(idNews != -1){
        noticias.splice(idNews, 1)
    }
    let randomNews = embaralhar(noticias)
    new_first.innerHTML = randomNews[0]
    new_second.innerHTML = randomNews[1]
    new_third.innerHTML = randomNews[2]
}

if(idNews != -2){
    selecionarNoticias()
}
