
class ItemPedido{
    constructor(nome, quantidade, preco) {
        this.id = Math.trunc(Math.random() * 100)
        this.nome = nome;
        this.quantidade = quantidade;
        this.preco = preco;
        this.total = quantidade * preco;
    }
}

export {ItemPedido}