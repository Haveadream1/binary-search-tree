import Node from "./node.js";

export default class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    buildTree(array) {
        // takes an array of data and turns it into a balanced binary tree full of Node objects appropriately placed
        // return the level-0 root node


    }

    prettyPrint(node, prefix = "", isLeft = true) {
        //  console.log our binary search tree
        if (node === null) {
            return;
        }
        if (node.right !== null) {
            prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
        }
        console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
        if (node.left !== null) {
            prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
        }
    }

    insert(value) {
        // insert a value into the tree
        if (!this.root) {
            this.root = new Node(value);
            return this.root;
        }

        let currentNode = this.root;
        while (currentNode) {
            if (value < currentNode.value) {
                if (!currentNode.left) {
                    currentNode.left = new Node(value);
                    break;
                }
                currentNode = currentNode.left;
            } else if (value > currentNode.value) {
                if (!currentNode.right) {
                    currentNode.right = new Node(value);
                    break;
                }
                currentNode = currentNode.right;
            } else { // Otherwise, value is already present
                break;
            }
        }
        return this.root;
    }

    deleteItem(value) {
        // delete a value from the tree
    }

    find(value) {
        // returns the node with the given value
        let currentNode = this.root;
        while (currentNode.value !== value) {
            if (value < currentNode.value) {
                currentNode = currentNode.left;
            } else {
                currentNode = currentNode.right;
            } 
            if (!currentNode) {
                return null;
            }
        }
        return currentNode;
    }

    levelOrder(callback) {
        // traverse the tree in breadth-first level order and call the callback on each node as it traverses, passing the whole node as an argument
    }

    inOrder(callback) {
        if (this.root === null) {
            return;
        }
        this.inOrder(this.root.left, callback);
        callback(this.root.value);
        this.inOrder(this.root.right, callback);
    } 
    
    preOrder(callback) {

    } 
    
    postOrder(callback) {

    }

    height(node) {
        // returns the given node’s height
    }

    depth(node) {
        // returns the given node’s depth
        // the number of edges in the path from a given node to the tree’s root node
    }

    isBalanced() {
        // balanced tree is one where the difference between heights of the left subtree and the right subtree of every node is not more than 1
    }

    rebalance() {

    }
}