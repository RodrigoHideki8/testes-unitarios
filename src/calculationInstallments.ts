interface Params {
    valorTotal: number, numeroParcelas: number, taxaJuros: number
}

export default class CalculationInstallments {
    calculation(param: Params) {

        return param.valorTotal / param.numeroParcelas * (1 + param.taxaJuros * param.numeroParcelas);

    }
}