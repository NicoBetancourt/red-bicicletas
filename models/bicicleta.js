var Bicicleta = function (id, color, modelo, ubicacion) {
    this.id = id;
    this.color = color;
    this.modelo = modelo;
    this.ubicacion = ubicacion;
}

Bicicleta.prototype.toString = () => {
    return 'id: ' + this.id.toString() + " | color: " + this.color.toString()
}

Bicicleta.allBicis = [];
Bicicleta.add = (aBici) => {
    Bicicleta.allBicis.push(aBici);
}

Bicicleta.findById = (aBiciId) => {
    var aBici = Bicicleta.allBicis.find(x => x.id == aBiciId);
    if (aBici)
        return aBici
    else
        throw new Error(`No existe una bicicleta con el id ${aBiciId} or ${aBici}`)
}

Bicicleta.removeById = (aBiciId) => {
    for (var i = 0; i < Bicicleta.allBicis.length; i++) {
        if (Bicicleta.allBicis[i].id == aBiciId){
            Bicicleta.allBicis.splice(i, 1);
            break;
        }
    }
}

var a = new Bicicleta(1, 'Rojo', 'urbana', [4.723720, -74.028368]);
var b = new Bicicleta(2, 'Blanca', 'urbana', [4.709408, -74.060735]);
var c = new Bicicleta(3, 'Azul', 'urbana', [4.701268, -74.092659]);

Bicicleta.add(a);
Bicicleta.add(b);
Bicicleta.add(c);


module.exports = Bicicleta;