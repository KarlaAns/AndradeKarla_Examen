const { percentile, calcWeightedGrade }= require('./calcWeightedGrade');

test('Calcula la nota ponderada correctamente', () => {
    const notas = [80, 90];
    const pesos = [0.4, 0.6];
    const resultado = calcWeightedGrade(notas, pesos);
    expect(resultado).toBe(86);
});

test('Percentile 1', () => {
    const valores = [1, 2, 3];
    const resultado = percentile(0, valores);
    expect(resultado).toBe(1.00);
});

test('Percentile 2', () => {
    const valores = [1, 2, 3];
    const resultado = percentile(100, valores);
    expect(resultado).toBe(3.00);
});

test('Percentile 3', () => {
    const valores = [1, 2, 3, 4];
    const resultado = percentile(50, valores);
    expect(resultado).toBe(2.00);
});

