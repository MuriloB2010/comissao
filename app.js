const valorVenda = Number(("valor da venda"));

function verificaComissao(venda) {
    if (venda <= 5000) {
        return 0.05;
    } else {
        if (venda <= 10000) {
            return 0.07;
        } else {
            return 0.10;
        }
    }
}

function calculaComissao(venda) {
    const taxa = verificaComissao(venda);
    const comissao = venda * taxa;
    return {
        valorVenda: venda,
        valorComissao: comissao
    };
}

const resultado = calculaComissao(valorVenda);

console.log(resultado)


