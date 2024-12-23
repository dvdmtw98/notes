---
title: Bloom Filter
tags:
  - data-structure
date: 2024-01-28 14:15:56 -0600
updated: 2024-10-12 13:05:11 -0500
---

It is an space-efficient probabilistic DS that is based on the concept of hashing  
It is used to efficiently check for the existence of an element in a set  
If element does not exist it returns No else it returns Probable Yes (i.e. False Positives are possible)

### Properties

* Unlike a standard hash table, a Bloom filter of a fixed size can represent a set with an arbitrarily large number of elements.
* Adding an element never fails. However, the false positive rate increases steadily as elements are added until all bits in the filter are set to 1, at which point all queries yield a positive result.
* Bloom filters never generate false negative result
* Deleting elements from filter is not possible because, if we delete a single element by clearing bits at indices generated by k hash functions, it might cause deletion of few other elements.

### Working

The Hash Functions selected should be fast, should evenly and randomly distribute the data in the set, collisions are okay provided they are rare

#### Inserting Element
  
Bloom Filter in an Bit Array of an m bits where all the elements are set to 0 initially  
Making use of k Hash functions we calculate the hash values for the inputs  
K1("X") = 1  
K2("X") = 7  
K3("X") = 16  
The bits 1, 7 and 16 are set to 1 in the Bit Array. We repeats the same process for all the values added in the Bit Array

![[bloom-filter-check-1.png|540]]

#### Checking Element

![[bloom-filter-check-2.png|540]]
  
For checking the element we perform the same steps but in reverse order  
We calculate the hash for the values for the word to be search if the Bit for all the hashes are set to 1 we can say that the element could be present in the set  
If even one of the hash values is 0 then with 100% guarantee we can say that the element is not present in the set

 > [!INFO]
 > * We cannot guarantee that the element is present with certainty is due to the fact that it's possible that there is an word whose hashes sets the same bits that are already set as 1
 > * It is a trade off between space used and accuracy

### Time and Space Complexity

| Operation | Complexity |
| --------- | ---------- |
| Insertion | O(k)       |
| Search    | O(k)       |
| Space     | O(m)       |

### Applications

- Bloom Filters are used by lightweight clients on the [[bitcoin-network-communication|Bitcoin network]] to request information about transactions from peers without revealing the exact transaction it is interested in
- Quora implemented a shared bloom filter in the feed backend to filter out stories that people have seen before  
- Google Chrome web browser used to use a Bloom filter to identify malicious URLs  
- Google Bigtable, Apache HBase, Apache Cassandra, and PostgreSQL use Bloom filters to reduce the disk lookups for non-existent rows or columns

[Bloom Filter | Brilliant Math & Science Wiki](https://brilliant.org/wiki/bloom-filter/)  

[Bloom Filters - Introduction and Implementation - GeeksforGeeks](https://www.geeksforgeeks.org/bloom-filters-introduction-and-python-implementation/)
