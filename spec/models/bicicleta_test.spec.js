var Bicicleta = require('../../models/bicicleta');

beforeEach(() => {
    Bicicleta.allBicis = [];
})

describe('Bicicleta.allBicis', () => {
    it('comienza vacia', () => {
        expect(Bicicleta.allBicis.length).toBe(0);
    });
});

describe('Bicicleta.add', () => {
    it('agregamos una bici', () => {

        var a = new Bicicleta(1, 'Rojo', 'urbana', [4.723720, -74.028368]);
        Bicicleta.add(a);

        expect(Bicicleta.allBicis.length).toBe(1);
        expect(Bicicleta.allBicis[0]).toBe(a);
    });
});

describe('Bicicleta.findById', () => {
    it('buscamos una bici por id = 1', () => {

        var a = new Bicicleta(1, 'Verde', 'urbana', [4.709408, -74.060735]);
        var b = new Bicicleta(2, 'Amarillo', 'urbana', [4.701268, -74.092659]);
        Bicicleta.add(a);
        Bicicleta.add(b);

        var targetBici = Bicicleta.findById(1);

        expect(targetBici.id).toBe(a.id);
        expect(targetBici.color).toBe(a.color);
        expect(targetBici.modelo).toBe(a.modelo);
    });
});

describe('Bicicleta.removeById', () => {
    it('retiramos una bici por id = 1', () => {

        var a = new Bicicleta(1, 'Verde', 'urbana', [4.709408, -74.060735]);
        var b = new Bicicleta(2, 'Amarillo', 'urbana', [4.701268, -74.092659]);
        Bicicleta.add(a);
        Bicicleta.add(b);

        Bicicleta.removeById(1);

        expect(Bicicleta.allBicis.length).toBe(1);
        expect(Bicicleta.allBicis[0]).toBe(b);
    });
});
