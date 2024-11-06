import {Pedido} from "./Pedido.js";

document.getElementById("list").addEventListener("click", listarItensPedido)
const pedido = new Pedido()
document.getElementById("send").addEventListener("click", fazerPedido);

function fazerPedido(e) {
    e.preventDefault();
    const nome = document.getElementById("product-name").value;
    const quantidade = parseInt(document.getElementById("product-quantity").value);
    const preco = parseFloat(document.getElementById("product-price").value);

    pedido.adicionarItem(nome,quantidade,preco);
    console.log(pedido);
    
}
function listarItensPedido(e) {
    e.preventDefault();
    const tabelaPedidos = document.getElementById("listaPedidos");
    tabelaPedidos.innerHTML = "";

    const itens = pedido.listarItens();

    itens.forEach((item) => {
        const linha = tabelaPedidos.insertRow(0);
        const cellNome = linha.insertCell(0);
        const cellQuantidade = linha.insertCell(1)
        const cellPreco = linha.insertCell(2);
        const cellTotal = linha.insertCell(3);
        const cellExcluir = linha.insertCell(4);

        cellNome.textContent = item.nome;
        cellQuantidade.textContent = item.quantidade;
        cellPreco.textContent = `R$ ${item.preco.toFixed(2)}`
        cellTotal.textContent = `R$ ${item.total.toFixed(2)}`

        const btnExcluir = document.createElement("button"); //Esse elemento cria um novo elemento html com o javaScript
        btnExcluir.textContent = "Excluir";
        btnExcluir.onclick = () => {
            pedido.excluirItem(item.id)
            listarItensPedido(e)
        }
        cellExcluir.appendChild(btnExcluir)
    })
    calcularTotal()
}


function calcularTotal() {
    const totalElement = document.getElementById("total")
    const totalPedido = pedido.calcularTotal()
    totalElement.textContent = `Total: R$ ${totalPedido.toFixed(2)}`
}