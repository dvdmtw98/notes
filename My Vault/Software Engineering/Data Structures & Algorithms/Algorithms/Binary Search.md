---
tags: [algorithm]
---

It is an Divide and Conquer Algorithm  
The input list provided to the algorithm has to be **<u>sorted</u>**

````python
arr = [-2, 3, 4, 7, 8, 9, 11, 13]
target = 11

def search(arr, target):
    left = 0
    right = len(arr) - 1
    
    while left <= right:
        mid = (left + right) // 2
        if arr[mid] == target:
            return mid
        elif target < arr[mid]:
            right = mid - 1
        else:
            left = mid + 1
    return -1
````

Time Complexity : O($\log_2 n$)  
Space Complexity : O(1)

---

### Rotated Sorted Array

Given array that was sorted at then rotated by n places (split at an unknown pivot) then we make use of this algorithm

````python;
def search(arr, target):
	left = 0
	right = len(arr) - 1
	
	while left <= right:
		mid = (left + right) // 2
		if arr[mid] == target:
			return mid
		elif arr[left] <= arr[mid]:
			if target > arr[mid] or target < arr[left]:
				left = mid + 1
			else:
				right = mid - 1
		else:
			if target < arr[mid] or target > arr[right]:
				right = mid - 1
			else:
				left = mid + 1
	
	return -1
````

Time Complexity : O($\log_2 n$)  
Space Complexity : O(1)
