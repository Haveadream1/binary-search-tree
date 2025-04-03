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
0
    levelOrder(callback) {
        // traverse the tree in breadth-first level order and call the callback on each node as it traverses, passing the whole node as an argument
    }

    getRoot() {
        return this.root;
    }

    inOrder() {
        // Left -> Mid -> Right
        const tree = [];
        function traverse(node) {
            if (node !== null) {
                traverse(node.left); // Recursive call
                tree.push(node.value);
                traverse(node.right);
            }
        }
        traverse(this.root); // Init
        return tree;
    } 
    
    preOrder() {
        // Mid -> Left -> Right
        const tree = [];
        function traverse(node) {
            if (node !== null) {
                tree.push(node.value);
                traverse(node.left);
                traverse(node.right);
            }
        }
        traverse(this.root);
        return tree;
    } 
    
    postOrder() {
        // Left -> Right -> Mid
        const tree = [];
        function traverse(node) {
            if (node !== null) {
                traverse(node.left);
                traverse(node.right);
                tree.push(node.value);
            }
        }
        traverse(this.root);
        return tree;
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