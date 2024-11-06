import {ItemPedido} from "./ItemPedido.js";

class Pedido {
    constructor() {
        this.listaItens = []
    }
    adicionarItem(nome, quantidade, preco) {
        const novoPedido = new ItemPedido(nome, quantidade, preco)
        this.listaItens.push(novoPedido)
    }

    listarItens() {
        return this.listaItens;
    }

    calcularTotal() {
        return this.listaItens.reduce((total, item) => total + item.total, 0)
    }

    excluirItem(id) {
        this.listaItens = this.listaItens.filter(item => item.id !== id)

    }
}


export {Pedido}