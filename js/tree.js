function Node () {
    constructor(value) {
        this.value = value; //Valor del nodo 
        this.children = []; // lista de los nodos hijos

    }
}

function Tree () {
    this.root = null; // Referencia al nodo raíz
}
   isEmpty() {
       return this.root === null 
   }

   add (value) {
       //Arbol no tiene elementos
       if (this.isEmpty()){
           this.root = new Node(value)
           return
       }
   }

   var aux = this.root 