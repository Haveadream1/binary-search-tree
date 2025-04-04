import Node from "./node.js";

export default class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    buildTree(array) {
        // takes an array of data and turns it into a balanced binary tree full of Node objects appropriately placed
        // return the level-0 root node
        if (!array.length) {
            return null;
        }

        const mid = Math.floor(array.length / 2);
        const node = new Node(array[mid]);

        node.left = this.buildTree(array.slice(0, mid)); // Recursivly call with the left array
        node.right = this.buildTree(array.slice(mid + 1)); // Recursivly call with the right array

        return node; // Our root
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
        function removeNode(node, value) {
            if (!node) {
                return null;
            }
            if (value === node.value) {
                if (!node.left && !node.right) { // Handle node with no children
                    return null;
                }

                if (!node.left) { // Handle node with one child
                    return node.right; // Replace the node
                }
                if (!node.right) {
                    return node.left;
                }

                let tempNode = node.right; // Handle node with two children, found the smallest value and replace it
                while (tempNode.left) {
                    tempNode = tempNode.left;
                }
                node.value = tempNode.value;
                node.right = removeNode(node.right, tempNode.value);
                return node;
            } else if (value < node.value) {
                node.left = removeNode(node.left, value);
                return node;
            } else {
                node.right = removeNode(node.right, value);
                return node;
            }
        }
        this.root = removeNode(this.root, value);
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

    levelOrder() {
        // traverse the tree in breadth-first level order
        const tree = [];
        const queue = [this.root];

        while (queue.length > 0) {
            const node = queue.shift(); // Removes the first node from the queue and assign it
            tree.push(node.value);

            if (node.left) {
                queue.push(node.left);
            }
            if (node.right) {
                queue.push(node.right);
            }
        }
        return tree;
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
        // number of edges on the longest path
        if (!node) {
            return -1;
        } else {
            const leftHeight = this.height(node.left); // Recursivly calculate the height of left subtree
            const rightHeight = this.height(node.right); 

            return Math.max(leftHeight, rightHeight) + 1; // Compare and take the longest, +1 represents the current node
        }
    }

    depth(node) {
        // returns the given node’s depth
        // the number of edges in the path from a given node to the tree’s root node
        function recursiveDepth(node, currentDepth) { // We need to know the depth of the parent
            if (!node) {
                return currentDepth;
            } else {
                return recursiveDepth(node.parent, currentDepth + 1);
            }
        }
        return recursiveDepth(node, 0); // Init
    }

    isBalanced(node) {
        // balanced tree is one where the difference between heights of the left subtree and 
        // the right subtree of every node is not more than 1
        if (!node) {
            return true;
        }

        const leftHeight = this.height(node.left);
        const rightHeight = this.height(node.right);

        if (Math.abs(leftHeight - rightHeight) > 1) { // If the absolute difference is more than 1 then its not balanced
            return false;
        }
        return this.isBalanced(node.left) && this.isBalanced(node.right); // Recursivly call left and right node
    }

    rebalance() {
        // Rearrange the nodes of the tree as its not balanced
        const values = this.inOrder(); // Get the tree values in a sorted order
        this.root = this.buildTree(values);
    }
}
