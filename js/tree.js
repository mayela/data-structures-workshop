class Node {
  constructor (value) {
    this.value = value
    this.right = null
    this.left = null
  }
}

class Tree {
  constructor () {
    this.root = null
  }

  isEmpty () {
    return this.root === null
  }

  add (value) {
    // arbol no tiene elementos
    if (this.isEmpty()) {
      this.root = new Node(value)
      return
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

   addRecursive (value, node = this.root) {
    if (!node) {
      this.root = new Node(value)
      return
    }

    if (value < node.value) {
      if (node.left) {
        return this.addRecursive(value, node.left)
      }
      node.left = new Node(value)
      return
    } else { // vamos hacia la derecha
      if (node.right) {
        return this.addRecursive(value, node.right)
      }
      node.right = new Node(value)
      return
    }
  }

  var t = new Tree()
var arr = [5,2,3,-4,12,9,21,19,25]

for (var i = 0; i < arr.length; i++) {
  t.addRecursive(arr[i])
}
t.print()