export class TreeNode<T> {
  data: T;
  left: TreeNode<T> | null;
  right: TreeNode<T> | null;

  constructor(data: T) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

export class BinaryTree<T> {
  root: TreeNode<T> | null;
  totalNode: number = 0;

  constructor() {
    this.root = null;
    this.totalNode = 0;
  }

  getSize(): number {
    return this.totalNode;
  }

  insert(data: T) {
    if (!this.root) {
      this.root = new TreeNode(data);
      this.totalNode++;
      return this.root;
    } else {
      let node = new TreeNode(data);
      let currentNode = this.root;
      while (currentNode) {
        if (data < currentNode.data) {
          if (!currentNode.left) {
            currentNode.left = node;
            break;
          }
          currentNode = currentNode.left;
        } else if (data > currentNode.data) {
          if (!currentNode.right) {
            currentNode.right = node;
            break;
          }
          currentNode = currentNode.right;
        } else if (data === currentNode.data) {
          return `Error!`;
        }
      }
      this.totalNode++;
      return currentNode;
    }
  }

  findValue(num: T) {
    let currentNode = this.root;
    while (currentNode) {
      if (currentNode.data === num) {
        return currentNode;
      } else if (currentNode.data < num) {
        currentNode = currentNode.right;
      } else {
        currentNode = currentNode.left;
      }
    }
    return null;
  }

  inorder(node: TreeNode<T> | null): void {
    if (node) {
      console.log(node.data);
      if (node.left) {
        this.inorder(node.left);
      }
      if (node.right) {
        this.inorder(node.right);
      }
    }
  }
}

let tree = new BinaryTree();
tree.insert(10);
tree.insert(12);
tree.insert(15);
tree.insert(11);
tree.insert(8);
tree.insert(9);
tree.insert(2);
// console.log(tree);
console.log(tree.findValue(8));
