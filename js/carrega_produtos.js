// IMPORTANDO O ARRAY DOS PRODUTOS
import { produtos } from "./produtos.js";

// PEGANDO ELEMENTO DO DOM
const section_cards = document.querySelector('#cards');

// 1. PRIMEIRO DECLARAMOS TODAS AS FUNÇÕES...

// FILTRANDO AS SEÇÕES COM A COLEÇÃO map
const listarSecoes = () => {
    const secoesFiltrada = new Map();

    produtos.forEach((elem, i) => {
        secoesFiltrada.set(elem.id_secao, elem);
    });

    const secoesMenu = Array.from(secoesFiltrada.values());
    return secoesMenu;
};

// FILTRANDO PRODUTOS 
const produtosFiltrados = (idSecao) => {
    return produtos.filter(elem => elem.id_secao === idSecao);
};

// MONTANDO CARDS
const montandoCards = (objProdutos) => {
    section_cards.innerHTML = '';

    objProdutos.forEach((elem, i) => {
        const divCard = document.createElement('div');
        divCard.setAttribute('class', 'card');

        const imgProduto = document.createElement('img');
        imgProduto.setAttribute('src', elem.caminho_da_imagem);
        imgProduto.setAttribute('alt', elem.descricao_produto);
        imgProduto.setAttribute('class', 'img_card');

        const h2Titulo = document.createElement('h2');
        h2Titulo.innerHTML = elem.descricao_produto;

        const h3Valor = document.createElement('h3');
        h3Valor.setAttribute('class', 'valor_card');
        h3Valor.innerHTML = `R$ ${parseFloat(elem.valor_unitario).toFixed(2).replace('.', ',')}`;

        const btnCard = document.createElement('button');
        btnCard.setAttribute('class', 'btn_card');
        btnCard.innerHTML = 'Adicionar';

        divCard.appendChild(imgProduto);
        divCard.appendChild(h2Titulo);
        divCard.appendChild(h3Valor);
        divCard.appendChild(btnCard);

        section_cards.appendChild(divCard);
    });
};

// FUNÇÃO PARA CARREGAR OS PRODUTOS
const listarProdutos = () => {
    section_cards.innerHTML = '';
    montandoCards(produtos); // Agora o JS já sabe quem é montandoCards!
};

// MONTANDO OS LINKS SEÇÕES
const montarSecoes = () => {
    const ulMenu = document.querySelector('#menu-secoes');
    ulMenu.innerHTML = '';

    // CRIANDO O BOTÃO "TODOS" DINAMICAMENTE
    const liTodos = document.createElement('li');
    const aTodos = document.createElement('a');
    aTodos.setAttribute('href', '#');
    aTodos.setAttribute('class', 'lnk-secao');
    aTodos.innerHTML = 'Todos';

    aTodos.addEventListener('click', () => {
        montandoCards(produtos);
    });

    liTodos.appendChild(aTodos);
    ulMenu.appendChild(liTodos);

    // PERCORRENDO O ARRAY DAS SEÇÕES FILTRADAS DO BANCO
    listarSecoes().forEach((elem, i) => {
        const liSecao = document.createElement('li');

        const aSecao = document.createElement('a');
        aSecao.setAttribute('href', '#');
        aSecao.setAttribute('class', 'lnk-secao');
        aSecao.innerHTML = elem.nome_secao;

        aSecao.addEventListener('click', () => {
            montandoCards(produtosFiltrados(elem.id_secao));
        });

        liSecao.appendChild(aSecao);
        ulMenu.appendChild(liSecao);
    });
};


// 2. POR FIM, EXECUTAMOS AS FUNÇÕES QUE INICIAM A PÁGINA
// (Agora que tudo já foi devidamente inicializado acima)

listarProdutos();
montarSecoes();