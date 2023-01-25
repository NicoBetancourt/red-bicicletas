const Bicicleta = require('../../models/bicicleta');
const request = require('request');
const server = require('../../bin/www')

beforeEach(() => {
    Bicicleta.allBicis = [];
    clg
});


beforeEach(() => {console.log("testeando…");});

const URL = 'http://localhost:3000/api/bicicletas'

describe('Bicicleta API', () => {
    describe('GET Bicicletas', () => {
        it('status 200', () => {

            var a = new Bicicleta(1, 'Rojo', 'urbana', [4.723720, -74.028368]);
            Bicicleta.add(a);

            request.get(URL, (error, response, body) => {
                expect(response.statusCode).toBe(200);
            });
        });
    });

    describe('Post Bicicletas/create', () => {
        it('status 200', (done) => {
            var headers = { 'content-type': 'application/json' };
            var aBici = {
                "id": 4,
                "color": "Gris",
                "modelo": "urbana",
                "lat": 4.752466,
                "long": -74.064737
            };

            var a = new Bicicleta(3, 'Rojo', 'urbana', [4.723720, -74.028368]);
            Bicicleta.add(a);

            request.post({
                headers: headers,
                url: URL + '/create',
                body: JSON.stringify(aBici)
            }, (error, response, body) => {
                expect(response.statusCode).toBe(200);
                expect(Bicicleta.findById(4).color).toBe('Gris');
                done(); // Hasta que donde no se ejecuta, no termina el request
            });
        });
    });


});
