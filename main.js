function linkedList() {
    let head = null; // Puntero al primer nodo de la lista

    return {
        append: function(value) {
            const newNode = node(value); // Crea un nuevo nodo
            if (head === null) {
                head = newNode; // Si la lista está vacía, el nuevo nodo se convierte en la cabeza
            } else {
                let current = head;
                while (current.nextNode !== null) {
                    current = current.nextNode; // Avanza al último nodo
                }
                current.nextNode = newNode; // Enlaza el nuevo nodo al último nodo
            }
        },
        prepend: function(value) {
            const newNode = node(value); // Crea un nuevo nodo
            newNode.nextNode = head; // Hace que el nuevo nodo apunte al actual cabeza
            head = newNode; // El nuevo nodo se convierte en la nueva cabeza
        }, 
        getHead: function() {
            return head; 
        },
        size: function(x = 0){
            
            let current = head;
            while (current !== null) {
                current = current.nextNode; 
                x++
            }
            return "The size  of the linked List is "+x
            
        },

        headLinked : function(){
            console.log(head)
            return head.value
        },

        lastNode : function(){
            let current = head
            while(current!== null ){
                current = current.nextNode
                //console.log("hi")
                if(current.nextNode === null){
                    return current.value
                }
            }

        
        },
        atIndex: function(index){
            if(index >= this.size()){
                console.log("There's no element here with that index")
            } else {

                let current = head
                let track = 0
                    while(current!== null){
                        if(track=== index){
                            return current
                        }
                        track++
                        current = current.nextNode
                    }

                
            }
        },

        removeLast: function(){
            if (head === null) return "No puedo borrar" 
            else {

                let current = head 
                let previous = null
                while(current.nextNode !== null){
                    previous = current;
                    current = current.nextNode;
                }

                previous.nextNode = null
                return "Ha sido borrado el ultimo elemento"
                
            }
        },
        contains : function(value){
            let current = head
            while(current !== null){
                if(current.value === value){
                    return true
                }
                current = current.nextNode
            }

            return false
        },

        find: function(value){
            let current = head
            let count = 0
            while(current !== null){
                if(current.value === value){
                    return count
                }
                count++
                current = current.nextNode
            }

            return null

        },
        toString : function(){
            let string = ""
            let current = head
            while(current !== null){
                string += `(${current.value}) -> `
                current = current.nextNode 
            }

            string += "null"
            return string 
        },
        insertAt: function(value,index){ //x => z => d => g and i want to add new node
            let current = head
            let count = 0
           // let newInd = index - 1
            while(current !== null ){
/*                 another way to do it *
                    let momentoCurrent = current.nextNode
                    const nuevo =  node(value)
                    current.nextNode = nuevo
                    nuevo.nextNode = momentoCurrent*/ 
                
                if(count === index ){
                    
                    const nuevo = node(value);
                    nuevo.nextNode = current.nextNode;
                    current.nextNode = nuevo; 
                    break
                } 
                count++
                current = current.nextNode
            }
        },
        removeAt: function(index){
            let current = head 
            let count = 0
            let previous = null
            while(current !== null){
                previous = current;
                current = current.nextNode

                if(index === 0){
                    head = previous.nextNode
                    return
                }
                else if(count === index ){
                    previous.nextNode = current.nextNode 
                    return 
                }
                count++
            }
        }
    };
}

function node(value) {
    return {
        value: value,
        nextNode: null
    };
}



const myList = linkedList();

myList.append(1);
myList.append("Elefante");
myList.append(3);




myList.prepend(0);




myList.append(4);
myList.append(5);

// La lista ahora contiene: 0 -> 1 -> 2 -> 3 -> 4 -> 5

// Imprimir los valores de la lista
let current = myList.getHead(); 
while (current !== null) {
    //console.log(current.value); 
    current = current.nextNode; 
}

//console.log(myList.headLinked())
//console.log(myList.lastNode())
//console.log(myList.size())
//console.log(myList.removeLast())
//console.log(myList.headLinked())
//console.log(myList.size())
//console.log(myList.contains('Elefantesssss'))
//console.log(myList.find(4))
console.log(myList.toString())
myList.insertAt("perro",5)
console.log(myList.toString())
console.log(myList.removeAt(3))
console.log(myList.toString())



