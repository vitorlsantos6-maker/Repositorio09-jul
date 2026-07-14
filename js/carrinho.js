//CRIANDO O ARRAY DE ITENS DO CARRINHO
const itensCarrinho = JSON.parse(localStorage('itenSessão')) || []

//FUNÇÃO PARA O ITEM NO ARRAY
const addItem = (objItem) => {
    itensCarrinho.push(objItem)

    localStorage.setItem('itenSessao' , itensCarrinho)
}

//LISTAR ITENS DO CARRINHO
const listItens = () => {
    const itensSelecionados = JSON.stringify(localStorage.getItem('itenSessao'))

    return itensSelecionados
}

//MONTANDO A TELA CARRINHO
const montaTelaCarrinho = () => {
    //PEGNDO ELEMENTOS DO DOM
    const sectionItensCarrinho = document.querySelector('#itens-carrinho')


}
