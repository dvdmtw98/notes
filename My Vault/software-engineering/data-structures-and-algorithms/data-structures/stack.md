---
tags:
- data-structure
title: Stack
---

Stack can be implemented with [Linked List](linked-list.md) or [Array](array.md)  
With Array as the data is stored contiguously due to Cache Locality it will be faster to access than Linked List  
However when the size limit of Array is reached the entire Array has to be copied over to create a larger array

### Uses

Undo, Back, Forward  
Compiler Matching Brackets  
Recursion  
DFS

### Time Complexity

| Operations | Time Complexity |
| ---------- | --------------- |
| Lookup     | O(n)            |
| Push       | O(1)            |
| Pop        | O(1)            |
| Peek       | O(1)            |

Lookup operations are generally not performed as they are expensive

### Programs

<u>Balanced Brackets</u>  
* If Left Bracket Push to Stack  
* If Right Bracket Check if Stack Empty If True Invalid  
* Else if Right Bracket == Left Bracket Pop  
* If Empty String check if Stack Empty if True Valid

<u>Tower of Hanoi</u>

````python
def TowerOfHanoi(n , from_rod, to_rod, aux_rod):
	if n == 1:
		print ("Move disk 1 from rod",from_rod,"to rod",to_rod)
		return

	TowerOfHanoi(n-1, from_rod, aux_rod, to_rod)
	print ("Move disk" + n + " from rod" + from_rod + "to rod" + to_rod)
	TowerOfHanoi(n-1, aux_rod, to_rod, from_rod)
	
if __name__ == '__main__':
	TowerOfHanoi(3, 'A', 'C', 'B')
````