//Arrays

let esperanca = [
    '"Mas tudo o que uma vez viveu, vive para sempre. Na eternidade do tempo."',
    '"Não importa o quanto lutemos, estamos conectados pelo nosso sangue."',
    '"Talvez o Big Bang não seja nada mais do que o ato de criação de Deus."',
    '"As coisas grandes e as pequenas não seguem as mesmas regras."',
    '"Os sonhos mudam. Outras coisas se tornam importantes."',
    '"Sua dor define quem você é, mas não tem mais poder sobre você."',
    '"Todos nós estamos cheios de pecado. Nenhum ser humano puro existe."',
    '"Mas não importa o que façamos, nunca caímos mais do que nas mãos de Deus."',
    '"Ontem, hoje e amanhã não são consecutivos, estão conectados em um círculo sem fim. Tudo está conectado."',
    '"Podemos nos sentir distantes de nossas famílias e não entender o que elas fazem. E ainda assim, no final, faremos qualquer coisa por eles."',
    '"A verdade é uma coisa estranha. Você pode tentar suprimi-la, mas ela sempre encontrará o caminho para a superfície."'    
];

let incerteza = [
    '"Mas de vez em quando é bom questionar quem questiona as coisas."',
    '"Se agora eu mudar meu passado, mudarei quem sou agora."',
    '"Existem coisas por aí que nossas pequenas mentes nunca compreenderão."',
    '"Eles não nos julgam. Na morte estou sozinho, e meu único juiz sou eu."',
    '"E se tudo que veio do passado fosse influenciado pelo futuro."',
    '"E se tudo que veio do passado foi influenciado pelo futuro?"',
    '"Preto, branco. Bem, mal. Tudo aparece como pares opostos. Mas isso está errado."',
    '"Deus não tem um plano. Não há plano algum. Não há nada além de caos lá fora."',
    '"Acreditamos que o tempo é linear. Que prossiga eternamente, uniformemente. Ao infinito."',
    '"O que sabemos é uma gota. O que não conhecemos é um oceano."',
    '"Não existe mágica, apenas ilusão. As coisas só mudam quando as mudamos."',
    '"Somente quando nos libertamos da emoção podemos ser verdadeiramente livres."',
    '"Somos andarilhos na escuridão."',
    '"O bem e o mal são uma questão de perspectiva."',
    '"Não somos livres no que fazemos porque não somos livres no que queremos."',
    '"Não conhecemos nem metade dos mistérios deste mundo. Somos andarilhos na escuridão."',
    '"E se Deus não souber o que está fazendo? Se o plano está errado? Se Deus está errado?"',
    '"Tudo está se repetindo. Tudo isso já aconteceu antes. Como um déjó vu maciço."',
    '"A distinção entre passado, presente e futuro é apenas uma ilusão teimosamente persistente."',
    '"O homem é uma criatura estranha. Todas as suas ações são motivadas pelo desejo, seu caráter forjado pela dor."',
    '"Sou apenas uma pequena parte de um enorme tumor que é muito maior do que qualquer um de nós pode imaginar."',
    '"Em suma, o deus que a humanidade rezou por milhares de anos ao deus com o qual tudo está vinculado, esse deus existe como nada além do próprio tempo."',
    '"O mundo está cheio de tais paradoxos que simplesmente escolhemos ignorá-los na maioria das vezes."',
    '"Agora acordei e não sei mais se sou uma pessoa que sonhou que é uma borboleta ou se sou uma borboleta que está sonhando que é uma pessoa."',
    '"O que está por trás de um buraco negro? Junto com as coisas, o espaço e o tempo também desaparecem ali?"',
    '"O espaço e o tempo estariam ligados e fariam parte de um ciclo sem fim? E se tudo que veio do passado fosse influenciado pelo futuro?"'   
];

let medo = [
    '"Todos enfrentamos o mesmo fim. Aqueles acima há muito se esqueceram de nós."',
    '"Toda dor nos leva a agir, forma nossa vontade."',
    '"O inferno está vazio e todos os demônios estão aqui."',
    '"Nosso pensamento é moldado pelo dualismo. Entrada, saída."',
    '"Fazemos de uma mentira a nossa verdade, para sobreviver."',
    '"Diferença entre passado, presente e futuro não passa de uma ilusão."',
    '"Deus tem um plano para cada ser humano."',
    '"A dor é seu vaso, deseje sua bússola. É tudo de que o homem é capaz."',
    '"No final, todos teremos exatamente o que merecemos."',
    '"O medo é o pior inimigo do progresso."',
    '"Enquanto a tempestade rugir dentro dele, ele não poderá encontrar paz."',
    '"A maioria das pessoas não passa de peões em um tabuleiro de xadrez liderado por uma mão desconhecida."',
    '"Algumas pessoas vagam a vida inteira procurando uma saída, mas só há um caminho e ele te leva cada vez mais fundo."',
    '"Nós tornamos uma mentira em nossa verdade para sobreviver. Tentamos esquecer, até não podermos mais."'
];

let mudanca = [
    '"Mas você tem que fazer isso com habilidade, em segredo. Então parece mágica."',
    '"Não somos livres no que fazemos, porque não somos livres no que queremos."',
    '"Não podemos superar o que está dentro de nós."',
    '"A morte é incompreensível. Mas pode-se reconciliar-se com isso."',
    '"Tudo é causa e efeito."',
    '"A vida é um presente… para quem sabe usá-la."',
    '"O fim é o começo, e o começo é o fim."',
    '"Por mais que tente suprimir essa dor, reprimir o desejo, não pode libertar-se da eterna servidão aos seus sentimentos."',
    '"Há momentos em que devemos entender que as decisões que tomamos influenciam mais do que apenas nossos próprios destinos."',
    '"A morte é sempre inevitável. O destino nada mais é do que a conexão de causa e efeito. Na luz, na sombra."',
    '"Não poderemos mudar o grande esquema das coisas, mas os detalhes. Mudamos um grão de areia e, com isso, o mundo inteiro."',
    '"Os buracos negros são considerados as bocas do inferno do universo. Aqueles que caem dentro desaparecem. Para todo sempre. Mas para onde?"'    
];

let btn = document.querySelector('#btnSearch');
let btnNewSearch = document.querySelector('#newSearch');
let selectItem = document.querySelector('#humor');
let retornoFrase = document.querySelector('#retornoFrase');



function modal () {
    let modal = document.querySelector('.contentPhrase');    
    modal.classList.add("contentPhraseAppers", "backgroundOriginalImg1");
}

function modalFade () {
    let modal = document.querySelector('.contentPhrase');
    modal.classList.remove("contentPhraseAppers");
}

function gerarFrase() {
    let lengthArray = 0;
    let itemPosition = 0;
    let arrayName = '';
    let frase = '';

    switch (selectItem.value) {
        case 'esperanca':
            lengthArray = esperanca.length - 1;
            itemPosition = Math.floor(Math.random() * (lengthArray - 0) + 0);
            frase = esperanca[itemPosition];
            break;
        case 'incerteza':
            lengthArray = incerteza.length - 1;
            itemPosition = Math.floor(Math.random() * (lengthArray - 0) + 0);
            frase = incerteza[itemPosition];
            break;
        case 'medo':
            lengthArray = medo.length - 1;
            itemPosition = Math.floor(Math.random() * (lengthArray - 0) + 0);
            frase = medo[itemPosition];
            break;
        case 'mudanca':
            lengthArray = mudanca.length - 1;
            itemPosition = Math.floor(Math.random() * (lengthArray - 0) + 0);
            frase = mudanca[itemPosition];
            break;
        default:
            break;
    }

    itemPosition = Math.floor(Math.random() * (lengthArray - 0) + 0);
    retornoFrase.innerHTML = frase;
    modal();
}

btn.addEventListener('click', gerarFrase);
btnNewSearch.addEventListener('click', modalFade);


