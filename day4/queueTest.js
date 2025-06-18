class Queue{
    constructor(){
        this.queue = [];
    }

    enQueue(val){
        this.queue.push(val);
    }

    deQueue(){
        return this.queue.shift();
    }

    peek(){
        return this.queue[0];
    }

    isEmpty(){
        this.queue.length === 0;
    }

}


const queue = new Queue();

console.log(queue.peek());
console.log(queue.deQueue());
console.log(queue.peek());