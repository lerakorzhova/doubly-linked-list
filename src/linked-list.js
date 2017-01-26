const Node = require('./node');

class LinkedList {
    constructor() {
        this.length = 0;
        this._head = this._tail = null;
    }
    append(data) {
        var node = new Node(data);
        if (this.length) {
            this._tail.next = node;
            node.prev = this._tail;
            this._tail = node;
        } else {
            this._head = node;
            this._tail = node;
        }
        this.length++;
        return this;
    }
    head() {
        if (this._head == null) return null;
        return this._head.data;
    }
    tail() {
        if (this._tail == null) return null;
        return this._tail.data;
    }
    at(index) {
        if (index < 0 || this.length === 0 || index > this.length) {
            throw new Error("error of index");
        }

        var currNode = this._head,
            count = 0,
            length = this.length;

        while (count !== index) {
            currNode = currNode.next;
            count++;
        }
        return currNode.data;
    }
    isEmpty() {
        return (this.length) ? false : true;
    }
    indexOf(data) {
        var curNode = this._head,
            index = 0;
        while (index < this.length) {
            if (curNode.data === data) {
                return index;
            } else {
                index++;
                curNode = curNode.next;
            }
        }
        return -1;
    }
    insertAt(index, data) {
        var currNode = this._head,
            count = 0,
            length = this.length;
        do {
            currNode = currNode.next;
            count++;
        } while (count !== index)
        var temp = currNode.data;
        currNode.data = data;
        if (isNaN(currNode.next)) {
            while (index < this.length) {
                currNode = currNode.next;
                currNode.data = temp;
                temp = currNode.next;
                index++;
            }
        }
    }
    clear() {
        /*var curNode = this._head.next;
        for (var i = 0; i < this.length - 1; i++) {
            curNode.prev = null;
            curNode = curNode.next;
        }*/
        this._head = this._tail = null;
        this.length = 0;

    }
    deleteAt(index) {
        var curNode = this._head,
            length = this.length,
            count = 0,
            beforeNodeToDelete = null,
            nodeToDelete = null,
            deletedNode = null;

        if (index < 0 || index > length) {
            throw new Error("error of index");
        }

        if (index === 1) {
            this._head = curNode.next;
            deletedNode = curNode;
            curNode = null;
            this.length--;
            return deletedNode;
        }

        while (count < index) {
            beforeNodeToDelete = curNode;
            nodeToDelete = curNode.next;
            count++;
        }

        beforeNodeToDelete.next = nodeToDelete.next;
        deletedNode = nodeToDelete;
        nodeToDelete = null;
        this.length--;
        
         return this;
    }
    reverse() {
        var arr = [],
            cur = this._head;
        for (var i = 0; i < this.length; i++) {
            arr[i] = cur.data;
            cur = cur.next;
        }
        arr = arr.reverse();
        cur = this._head;
        for (var i = 0; i < this.length; i++) {
            if (cur != null) {
                cur.data = arr[i];
                cur = cur.next;
            } else break;
        }
        return this;
    }

}

module.exports = LinkedList;