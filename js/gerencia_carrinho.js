const conteudoCarrinho = document.querySelector('#conteudo-carrinho');

const renderizarCarrinho = () => {
    // Busca os itens salvos
    let carrinho = JSON.parse(localStorage.getItem('carrinhoDeCompras')) || [];

    if (carrinho.length === 0) {
        conteudoCarrinho.innerHTML = '<p style="text-align:center; font-size:1.5em; margin: 40px 0;">Seu carrinho está vazio 🛒</p>';
        return;
    }

    // Cria a estrutura da tabela
    let tabelaHTML = `
        <table class="tabela-carrinho">
            <thead>
                <tr>
                    <th>Imagem</th>
                    <th>Produto</th>
                    <th>Qtd</th>
                    <th>Unitário</th>
                    <th>Total</th>
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody>
    `;

    let valorTotalGeral = 0;

    // Preenche as linhas da tabela com os produtos selecionados
    carrinho.forEach(item => {
        const totalItem = item.valor_unitario * item.quantidade;
        valorTotalGeral += totalItem;

        tabelaHTML += `
            <tr>
                <td><img src="${item.caminho_da_imagem}" alt="${item.descricao_produto}"></td>
                <td>${item.descricao_produto}</td>
                <td>${item.quantidade}</td>
                <td>R$ ${item.valor_unitario.toFixed(2).replace('.', ',')}</td>
                <td>R$ ${totalItem.toFixed(2).replace('.', ',')}</td>
                <td><button class="btn-remover" data-id="${item.id_produto}">Remover</button></td>
            </tr>
        `;
    });

    tabelaHTML += `
            </tbody>
        </table>
        <div class="resumo-carrinho">
            Total da Compra: R$ ${valorTotalGeral.toFixed(2).replace('.', ',')}
        </div>
    `;

    conteudoCarrinho.innerHTML = tabelaHTML;

    // Adiciona evento nos botões de remover criados dinamicamente
    configurarBotoesRemover();
};

const configurarBotoesRemover = () => {
    const botoes = document.querySelectorAll('.btn-remover');
    botoes.forEach(botao => {
        botao.addEventListener('click', (e) => {
            const idParaRemover = parseInt(e.target.getAttribute('data-id'));
            let carrinho = JSON.parse(localStorage.getItem('carrinhoDeCompras')) || [];

            // Filtra removendo o item clicado
            carrinho = carrinho.filter(item => item.id_produto !== idParaRemover);

            // Atualiza o local storage e a tela
            localStorage.setItem('carrinhoDeCompras', JSON.stringify(carrinho));
            renderizarCarrinho();
        });
    });
};

// Executa ao abrir a página do carrinho
renderizarCarrinho();