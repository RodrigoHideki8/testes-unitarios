import CalculationInstallments from '../src/calculationInstallments';

describe('Teste para calcular parcelas no cartão de crédito', () => {
    test('Deve calcular corretamente o valor das parcelas', () => {
        const valorTotal = 1000;
        const numeroParcelas = 4;
        const taxaJuros = 0.05;

        const calculationInstallments = new CalculationInstallments();

        const valorParcela = calculationInstallments.calculation({valorTotal, numeroParcelas, taxaJuros})
        const valorEsperado = valorTotal / numeroParcelas * (1 + taxaJuros * numeroParcelas);

        expect(valorParcela).toBe(valorEsperado);
    });
});