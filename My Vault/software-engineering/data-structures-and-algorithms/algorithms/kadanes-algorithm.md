---
tags:
- algorithm
title: Kadanes Algorithm
---

It is used to find the Maximum Subarray Sum Optimally  
This is an Example of Dynamic Programming (Smaller sub-problem + Reusing Results)

````python
def kadane(A):
	max_current = max_global = A[0]
	for i in range(1, len(A)):
		max_current = max(A[i], max_current + A[i])
		if max_current > max_global:
			max_global = max_current
	return max_global

A = [-2, 3, 2, -1]
print(kadane(A))
````

Time Complexity: O(n)  
Space Complexity: O(1)

Kadane's Algorithm is generally found in solution where the "shortest/longest, minimized/maximized, least/most, fewest/greatest, biggest/smallest" value needs to be found