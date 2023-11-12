---
tags: [data-structure]
---

Hash Function H(x) maps key 'x' to whole number in fixed range  
The whole number forms the location in memory at which the key value provided is stored  
The location in memory where the key and value is stored is called a Bucket

### Properties

H(x) = y (Hash functions are Idempotent)  
If H(x) = H(y) then collision has occurred

### Time Complexity

| Operation | Average | Worst |
| --------- | ------- | ----- |
| Access    | N/A     | N/A   |
| Insertion | O(1)    | O(n)  |
| Removal   | O(1)    | O(n)  |
| Search    | O(1)    | O(n)  |

Access in not defined for Hash Tables as the elements are not stored in order so we cannot access the `ith` element like in arrays  
Hash function directly gives us the location of the element hence all operations are performed in O(1)  
The worst case time complexity occurs when there are collisions at a certain address space

### Collision Resolution Techniques

<u>Separate Chaining</u>  
If objects have the same Hash represent them as a Linked List

<u>Open Addressing</u>  
If collision occurs use Probing Sequence P(x) to find Empty Position

### Hash Map Resizing Condition

Load Factor(α) = Items in Table / Size of Table  
Threshold = Nα (If filled cells exceeds Threshold we need to resize)

### Operations

<u>Insertion</u>  
Calculate Hash and add K,V at that index  
If collision occurs use collision resolution techniques.

<u>Searching</u>  
Calculate the Hash check if Searching K = Present K if same return V if not same then collision might have occurred use P(k) and try to find the Element

<u>Deletion</u>  
Calculate the Hash check if Searching K = Present K if same Remove Element if not same then collision might have occurred calculate P(k) and try to find the Element  
However if some element in the middle is removed and we try to get a value and if the Index/Bucket points to Null then it will mean that the searching element does not exist which is not true (Naïve Approach)  
To solve this if we delete any V we place a Tombstone in place of it so if we find Tombstone we just continue searching.

### Optimization

If we encounter a lot of Tombstones while searching we can save the location of the tombstones and once we find the V we are looking for move it to the location of the 1st Tombstone that we encountered and delete value from the original position.  
Called as Lazy Optimization

---

**<u>References</u>**:

* [Hash table - Wikipedia](https://en.wikipedia.org/wiki/Hash_table)
