const conteudoCarrinho = document.querySelector('#conteudo-carrinho');

// RENDERIZA O CARRINHO NA TELA
const renderizarCarrinho = () => {
    // Busca os itens salvos sob a chave 'carrinhoDeCompras'
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
            <tr data-id="${item.id_produto}">
                <td><img src="${item.caminho_da_imagem}" alt="${item.descricao_produto}" style="width: 60px; height: 60px; object-fit: cover;"></td>
                <td>${item.descricao_produto}</td>
                <td>
                    <input type="number" 
                           class="input-qtd" 
                           data-id="${item.id_produto}" 
                           value="${item.quantidade}" 
                           min="1" 
                           step="1"
                           style="width: 60px; padding: 5px; text-align: center;">
                </td>
                <td>R$ ${parseFloat(item.valor_unitario).toFixed(2).replace('.', ',')}</td>
                <td class="total-item">R$ ${totalItem.toFixed(2).replace('.', ',')}</td>
                <td><button class="btn-remover" data-id="${item.id_produto}">Remover</button></td>
            </tr>
        `;
    });

    tabelaHTML += `
            </tbody>
        </table>
        
        <div class="resumo-carrinho" style="margin-top: 20px; display: flex; flex-direction: column; align-items: flex-end; gap: 15px;">
            <div style="font-weight: bold; font-size: 1.3em;">
                Total da Compra: <span id="valor-total-geral">R$ ${valorTotalGeral.toFixed(2).replace('.', ',')}</span>
            </div>
            <button id="btn-finalizar" style="
                background-color: var(--cor_botao01, #049d09); 
                color: white; 
                border: none; 
                padding: 12px 30px; 
                font-size: 1.1em; 
                font-weight: bold; 
                text-transform: uppercase; 
                letter-spacing: 2px; 
                cursor: pointer; 
                border-radius: 4px;
                transition: background 0.2s;
            ">
                Finalizar Compra
            </button>
        </div>
    `;

    conteudoCarrinho.innerHTML = tabelaHTML;

    // Inicializa os event listeners nos novos elementos do DOM
    configurarBotoesRemover();
    configurarInputsQuantidade();
    configurarBotaoFinalizar();
};

// RECALCULA E ATUALIZA OS VALORES EM TEMPO REAL (SEM RELOAD)
const atualizarTotais = () => {
    let carrinho = JSON.parse(localStorage.getItem('carrinhoDeCompras')) || [];
    let valorTotalGeral = 0;

    carrinho.forEach(item => {
        const totalItem = item.valor_unitario * item.quantidade;
        valorTotalGeral += totalItem;

        // Atualiza o total individual diretamente na respectiva linha da tabela
        const linha = document.querySelector(`tr[data-id="${item.id_produto}"]`);
        if (linha) {
            const tdTotal = linha.querySelector('.total-item');
            if (tdTotal) {
                tdTotal.textContent = `R$ ${totalItem.toFixed(2).replace('.', ',')}`;
            }
        }
    });

    // Atualiza o total geral
    const spanTotalGeral = document.querySelector('#valor-total-geral');
    if (spanTotalGeral) {
        spanTotalGeral.textContent = `R$ ${valorTotalGeral.toFixed(2).replace('.', ',')}`;
    }
};

// GERENCIA AS ALTERAÇÕES DE QUANTIDADE E VALIDA OS DADOS
const configurarInputsQuantidade = () => {
    const inputs = document.querySelectorAll('.input-qtd');
    
    inputs.forEach(input => {
        // Evento 'input' dispara a cada dígito ou alteração pelas setas
        input.addEventListener('input', (e) => {
            const idProduto = parseInt(e.target.getAttribute('data-id'));
            let stringDigitada = e.target.value;

            // Validação: Remove qualquer caractere que não seja número inteiro
            stringDigitada = stringDigitada.replace(/[^0-9]/g, '');
            e.target.value = stringDigitada; 

            let quantidade = parseInt(stringDigitada);

            // Evita quantidades nulas, negativas ou vazias durante a digitação ativa
            if (isNaN(quantidade) || quantidade <= 0) {
                quantidade = 1; // Fallback seguro
            }

            // Atualiza os dados salvos no localStorage
            let carrinho = JSON.parse(localStorage.getItem('carrinhoDeCompras')) || [];
            const item = carrinho.find(item => item.id_produto === idProduto);
            if (item) {
                item.quantidade = quantidade;
                localStorage.setItem('carrinhoDeCompras', JSON.stringify(carrinho));
            }

            // Recalcula e atualiza os valores na interface
            atualizarTotais();
        });

        // Evento 'blur' garante consistência caso o usuário apague tudo e clique fora do campo
        input.addEventListener('blur', (e) => {
            if (e.target.value === '' || parseInt(e.target.value) <= 0) {
                e.target.value = 1;
                
                const idProduto = parseInt(e.target.getAttribute('data-id'));
                let carrinho = JSON.parse(localStorage.getItem('carrinhoDeCompras')) || [];
                const item = carrinho.find(item => item.id_produto === idProduto);
                if (item) {
                    item.quantidade = 1;
                    localStorage.setItem('carrinhoDeCompras', JSON.stringify(carrinho));
                }
                atualizarTotais();
            }
        });
    });
};

// CONFIGURA A EXCLUSÃO DE PRODUTOS
const configurarBotoesRemover = () => {
    const botoes = document.querySelectorAll('.btn-remover');
    botoes.forEach(botao => {
        botao.addEventListener('click', (e) => {
            const idParaRemover = parseInt(e.target.getAttribute('data-id'));
            let carrinho = JSON.parse(localStorage.getItem('carrinhoDeCompras')) || [];

            // Remove o item selecionado
            carrinho = carrinho.filter(item => item.id_produto !== idParaRemover);

            // Atualiza o local storage e renderiza novamente a tela
            localStorage.setItem('carrinhoDeCompras', JSON.stringify(carrinho));
            renderizarCarrinho();
        });
    });
};

// CONFIGURA A AÇÃO DO BOTÃO "FINALIZAR COMPRA"
const configurarBotaoFinalizar = () => {
    const btnFinalizar = document.querySelector('#btn-finalizar');
    if (!btnFinalizar) return;

    btnFinalizar.addEventListener('click', () => {
        let carrinho = JSON.parse(localStorage.getItem('carrinhoDeCompras')) || [];

        if (carrinho.length === 0) {
            alert('Seu carrinho está vazio. Adicione produtos antes de finalizar!');
            return;
        }

        // Mensagem de sucesso amigável
        alert('🎉 Compra realizada com sucesso! Obrigado pela preferência.');

        // Esvazia o carrinho de compras no localStorage
        localStorage.removeItem('carrinhoDeCompras');

        // Atualiza a tela para mostrar o estado de carrinho vazio
        renderizarCarrinho();
    });
};

// Executa ao carregar a página do carrinho
renderizarCarrinho();