// IMPORTANDO O ARRAY DOS PRODUTOS
import { produtos } from "./produtos.js";

// PEGANDO ELEMENTOS DO DOM
const section_cards = document.querySelector('#cards');
const inputPesquisa = document.querySelector('#pesquisa input'); // Seleciona o input dentro da seção de pesquisa

// ==========================================
// 1. DECLARAÇÃO DAS FUNÇÕES
// ==========================================

// FILTRANDO AS SEÇÕES COM A COLEÇÃO map
const listarSecoes = () => {
    const secoesFiltrada = new Map();

    produtos.forEach((elem, i) => {
        secoesFiltrada.set(elem.id_secao, elem);
    });

    const secoesMenu = Array.from(secoesFiltrada.values());
    return secoesMenu;
};

// FILTRANDO PRODUTOS POR SEÇÃO
const produtosFiltrados = (idSecao) => {
    return produtos.filter(elem => elem.id_secao === idSecao);
};

// MONTANDO CARDS NA TELA
const montandoCards = (objProdutos) => {
    section_cards.innerHTML = '';

    // Se nenhum produto for encontrado na busca, exibe uma mensagem amigável
    if (objProdutos.length === 0) {
        const mensagem = document.createElement('p');
        mensagem.style.fontSize = '1.5em';
        mensagem.style.gridColumn = '1 / -1'; // Faz a mensagem ocupar toda a largura do grid
        mensagem.style.textAlign = 'center';
        mensagem.style.margin = '50px 0';
        mensagem.innerHTML = 'Nenhum produto encontrado 😞';
        section_cards.appendChild(mensagem);
        return;
    }

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

// FUNÇÃO PARA CARREGAR TODOS OS PRODUTOS INICIALMENTE
const listarProdutos = () => {
    section_cards.innerHTML = '';
    montandoCards(produtos);
};

// MONTANDO OS LINKS DAS SEÇÕES NO MENU
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
        // Quando clicar em "Todos", limpamos o campo de pesquisa e mostramos tudo
        if (inputPesquisa) inputPesquisa.value = '';
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
            // Quando clicar em uma categoria específica, limpamos a barra de pesquisa
            if (inputPesquisa) inputPesquisa.value = '';
            montandoCards(produtosFiltrados(elem.id_secao));
        });

        liSecao.appendChild(aSecao);
        ulMenu.appendChild(liSecao);
    });
};

// CONFIGURANDO A BARRA DE PESQUISA
const configurarPesquisa = () => {
    if (!inputPesquisa) return;

    inputPesquisa.addEventListener('input', (evento) => {
        // Pega o que o usuário digitou e transforma em minúsculo
        const termoBusca = evento.target.value.toLowerCase().trim();

        // Filtra a lista de produtos baseada no termo digitado
        const produtosEncontrados = produtos.filter(produto => {
            return produto.descricao_produto.toLowerCase().includes(termoBusca);
        });

        // Atualiza a tela exibindo apenas os produtos encontrados
        montandoCards(produtosEncontrados);
    });
};


// ==========================================
// 2. EXECUÇÃO DAS FUNÇÕES
// ==========================================

listarProdutos();
montarSecoes();
configurarPesquisa(); // Ativa o monitoramento do campo de busca