function Node (value) {
    constructor(value) {
        this.value = value; //Valor del nodo 
        this.izquierdo;
        this.derecho;

    }
}

function Tree () {
    this.root = null; // Referencia al nodo raíz
}
   isEmpty() {
       return this.root === null 
   }

   add(value) {
       //Arbol no tiene elementos
       if(this,isEmpty()){
           this.root = new Node(value)
           return
       }
   }

   var aux = this.root

   while (aux) {
     // vamos hacia la izquierda
     if (value < aux.value) {
       if (aux.left) {
         aux = aux.left
       } else {
         aux.left = new Node(value)
         return
       }
     } else { // vamos hacia la derecha
       if (aux.right) {
         aux = aux.right
       } else {
         aux.right = new Node(value)
         return
       }
     }
   }
 }



   /*
var NodoRaiz = new Nodo(1); // Nodo raíz
var NodoIzq = new Nodo(2); // Rama izquierda
var NodoDer = new Nodo(2); //Rama derecha 

NodoRaiz.izquierdo = NodoIzq;
*/