---
title: Floyds Algorithm
tags:
  - algorithm
date: 2024-01-28 14:15:56 -0600
updated: 2024-01-29 15:45:59 -0600
---

It is used to Detect a loop in a Linked List  
It can be also used to find a repeating element in an array of size n with elements from 1 to n  
The array items is considered as nodes in a linked list  
Any particular index is pointing to value at that index

#### Python Code for Array

````python
def findduplicate(arr, n): 
	if (n <= 1): 
		return -1

	slow = arr[0] 
	fast = arr[arr[0]] 

	while (fast != slow): 
		slow = arr[slow] 
		fast = arr[arr[fast]] 

	fast = 0
	while (slow != fast): 
		slow = arr[slow] 
		fast = arr[fast] 
	return slow 

if __name__ == "__main__": 
	arr = [1, 2, 3, 4, 5, 6, 3] 
	n = len(arr)
	print(findduplicate(arr, n)) 
````

#### C Code for Linked List

````c
node *find_loop(node *head)
{
	node *p1;
	node *p2;

	if (head == NULL)
		return (NULL);
		
	p1 = head;
	p2 = head;
	
	while (p2->next != NULL && p2->next->next != NULL)
	{
		p1 = p1->next;
		p2 = p2->next->next;
		if (p1 == p2)
		{
			p1 = head;
			while (p1 != p2)
			{
				p1 = p1->next;
				p2 = p2->next;
			}
			return (p2);
		}
	}
	return (NULL);
}
````

Time Complexity : O(n)  
Space Complexity : O(1)

[Decoding the Hare-Tortoise Algorithm for detecting a loop in a Linked List in a very simpler fashion and understanding it’s time complexity ! | by Riddhi Dutta | Medium](https://rite2riddhi.medium.com/decoding-thehare-tortoise-algorithm-for-detecting-loop-in-a-linked-list-in-a-very-simpler-fashion-db491efa22b4)
