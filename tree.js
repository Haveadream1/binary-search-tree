export default class Tree {
    constructor(root) {
        this.root = root;
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
    }

    deleteItem(value) {
        // delete a value from the tree
    }

    find(value) {
        // returns the node with the given value
    }

    levelOrder(callback) {
        // traverse the tree in breadth-first level order and call the callback on each node as it traverses, passing the whole node as an argument
    }

    inOrder(callback) {

    } 
    
    preOrder(callback) {

    } 
    
    postOrder(callback){

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