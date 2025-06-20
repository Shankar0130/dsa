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

    insertAtEnd(val){
        let newNode = new Node(val);
        let curr = this.head;

        while(curr.next){
            curr = curr.next;
        }

        curr.next = newNode;

    }

    print(){
        let curr = this.head;

        while(curr){
            console.log(curr.value);
            curr = curr.next;
        }
    }
}


const linkedList = new LinkedList();

linkedList.insertAtbegin(10);
linkedList.insertAtbegin(20);
linkedList.insertAtbegin(30);

linkedList.insertAtEnd(5);

linkedList.print();