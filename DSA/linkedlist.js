class Node{
    constructor(data, next = null){
        this.data = data;
        this.next = next;
     }
}


class LinkedList{
    constructor(){
        this.head = null
        this.size = 0
    }

    // insert first node
    insertFirstnode(data){
        this.head = new Node(data, this.head);
    }
}

const ll = new LinkedList()

ll.insertFirstnode(100);
ll.insertFirstnode(200);

console.log(ll);
