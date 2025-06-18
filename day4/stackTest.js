class Stack{
    constructor(){
        this.stack = [];
    }

    push(val){
        this.stack.push(val);
    }

    pop(){
        return this.stack.pop();
    }

    peek(){
        return this.stack[this.stack.length-1];
    }

    isEmpty(){
        return this.stack.length === 0;
    }


}

const stack = new Stack();

stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);

console.log(stack.pop());
console.log(stack.peek());
console.log(stack.isEmpty());