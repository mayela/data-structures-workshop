var assert = require ('chai').assert;

var cola =require('../cola');

var colas =new cola();
describe ('cola',function (){
    it('Debe ser  numero',function()
    {
        colas.añadir(100);
        assert.typeOf(colas.frente(),'number');
    });
    it('No debe tener elementos',function()
    {
        colas.eliminar();
        assert.equal(colas.eliminar(),'Sobreflujo');
    });
    it('Tiene un elemento en el indice 0 la cola',function()
    {
    colas.añadir(9);
    assert.equal(colas.estavacio(),0);
    });
});