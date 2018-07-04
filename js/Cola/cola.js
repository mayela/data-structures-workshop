    // Clase cola
    class Cola
    {
        // el arreglo se usa para implementar la cola
        constructor()
        {
            this.items = [];
        }
    
    // Funcion añadir
    añadir(element)
    {    
        // Añadir elemento a la cola
        this.items.push(element);
    }
    //funcion eliminar
    eliminar()
    {
        // remueve elemnto de la cola
        // si la cola esta vacia retorna sobreflujo
    
        if(this.estavacio())
            return "Sobreflujo";
        return this.items.shift();
    }
    // funcion frente
    frente()
    {
        //muestra el elemento que se encuentra al inicio sin removerlo
    
        if(this.estavacio())
            return "Sin elementos en la cola";
            //el indice 0 que es el inicial
        return this.items[0];
    }
    // funcion comprobar si esta vacio
    estavacio()
    {
        //regresa verdadero si la cola esta vacia
        return this.items.length == 0;
    }
    // ImprimirCola funcion
    recorrerCola()
    {
        var str = "";
        //recorremos la lista y mostramos los valores
        for(var i = 0; i < this.items.length; i++)
            str += this.items[i] +" ";
        return str;
    }
    }
    module.exports=Cola;