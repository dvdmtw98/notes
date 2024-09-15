---
title: AVL Tree
tags:
  - data-structure
date: 2024-01-28 14:15:56 -0600
updated: 2024-01-28 14:15:56 -0600
---

AVL Tree is an type of BST that will automatically balance itself which in turn ensures that we have log(n) time complexity for all the operations

### Time Complexity

| Operation | Worst     |
| --------- | --------- |
| Insert    | O(log(n)) |
| Delete    | O(log(n)) |
| Search    | O(log(n)) |

### Tree Rotations

Binary Tree Invariant should be preserved even after rotation

<u>Right Rotation</u>

````csharp
function rightRotate(A) 
{
	B = A.left
	A.left = B.right
	B.right = A
	return B
}
````

<u>Left Rotation</u>  
Reverse of Above Function

### AVL Tree Invariant (Balanced Factor)

BF(node) = H(node.right) - H(node.left)  
Value of BF: -1,0, +1  
If Value of BF: -2, +2 perform Rotation on the node to make it balanced

<u>Left Left Case</u>  
Right Rotation

<u>Left Right Case</u>  
Left Rotation then Right Rotation

<u>Right Right Case</u>  
Left Rotation

<u>Right Left Case</u>  
Right Rotation then Left Rotation
