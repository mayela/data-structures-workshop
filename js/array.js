class Array {
    constructor() {
        this.item = [];
    }
    //Agregar elemento:
    add(element) {
        this.item.push(element)
    }
    //Eliminar elemento
    remove(element) {
        this.item.shift(element);
    }
};