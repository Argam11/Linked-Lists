class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  // add an element to the end of the list
  add(data) {
    // create a new node
    let node = new Node(data);
    let current;

    // if the list is empty, set the head
    if (!this.head) {
      this.head = node;
    } else {
      current = this.head;

      // iterate through the list until the last node
      while (current.next) {
        current = current.next;
      }

      // set the next property on the last node to our new node
      current.next = node;
    }

    this.size++;
  }

  // remove an element from the list
  remove(data) {
    let current = this.head;
    let previous;

    // iterate through the list, keeping track of the previous node
    while (current) {
      if (current.data === data) {
        // if the head is the node to be removed
        if (!previous) {
          this.head = current.next;
        } else {
          previous.next = current.next;
        }

        this.size--;
        return current.data;
      }

      previous = current;
      current = current.next;
    }

    return null;
  }

  // find the size of the list
  size() {
    return this.size;
  }

  // check if the list is empty
  isEmpty() {
    return this.size === 0;
  }
}

const myLinkedList = new LinkedList();

myLinkedList.add(1);
myLinkedList.add(2);
myLinkedList.add(3);

myLinkedList.remove(2);

console.log(myLinkedList);
