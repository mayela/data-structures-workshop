class Grafo {

	constructor(){

		  this.nodo1 = [2,4];

	    this.nodo2 = [3,4,1];

	    this.nodo3 = [2,4];

	    this.nodo4 = [1,2,3];

	    this.nodos = [this.nodo1, this.nodo2, this.nodo3, this.nodo4];

	}

	getNodos(){

      return this.nodos

    }

    getNodo(posicion){

      return this.nodos[posicion]

    }

 }

//objeto

var grafo  = new Grafo();

// muestra todos los nodos

console.log(grafo.getNodos());

// muestra el nodo 3

console.log(grafo.getNodo(3));

