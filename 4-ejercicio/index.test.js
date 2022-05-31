const edadesmayor = require('./index.js');

test('edades mayores que edad pasadas', () => {
    expect(edadesmayor([12,34,32,45,65,76], 40)).toBe(3);
});