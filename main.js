import BinarySearchTree from "./tree.js";

const binarySearchTree = new BinarySearchTree();

// binarySearchTree.buildTree(array);

// binarySearchTree.prettyPrint();

console.log(binarySearchTree.insert(50));
console.log(binarySearchTree.insert(30));
console.log(binarySearchTree.insert(20));
console.log(binarySearchTree.insert(40));
console.log(binarySearchTree.insert(70));
console.log(binarySearchTree.insert(60));
console.log(binarySearchTree.insert(80));


// binarySearchTree.deleteItem(value);

console.log(binarySearchTree.find(20));
console.log(binarySearchTree.find(100));

console.log(binarySearchTree.levelOrder());

console.log(binarySearchTree.inOrder());
console.log(binarySearchTree.preOrder());
console.log(binarySearchTree.postOrder());

console.log(binarySearchTree.height(binarySearchTree.find(50)));
console.log(binarySearchTree.height(binarySearchTree.find(30)));

console.log(binarySearchTree.depth(binarySearchTree.find(70)));
console.log(binarySearchTree.depth(binarySearchTree.find(40)));

console.log(binarySearchTree.isBalanced(binarySearchTree.find(40)));

// binarySearchTree.rebalance();
