class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class LinkedList{
    constructor(){
        this.head = null;
    }

    insertAtbegin(val){
        const newNode = new Node(val);
        newNode.next = this.head;
        this.head = newNode;
        
    }

    print(){
        
    }
}