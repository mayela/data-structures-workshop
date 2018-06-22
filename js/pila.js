class Stack {

    constructor()
    {
        this.item = [];
        this.top = 0;
    }
 
    add(element)
    {
        this.item.push(element)[this.top ++];
    }

    estract()
    {
        this.item.pop();
    }
    
    getTopElement()
    {
        return this.item[this.top-1];
    }
    
    size()
    {
        return this.item.length;
    }
    
    clear()
    {
      return this.item[this.top === 0]
    }
    
    
}

var frutero = new Stack();

frutero.add("banana");
frutero.add("mango");
frutero.add("manzana");
frutero.add("pera");
frutero.add("guayaba");

document.write(frutero.size());

document.write(frutero.getTopElement());
