### RAM

Reserved Memory  
User Memory  
Execution Memory (Working Memory) - Operations on data is performed here  
Storage Memory (Cache) - Place where the result is stored. Not permanent storage

### Static Memory

Execution Memory - 2GB, Storage Memory - 6GB (Example) (When cache gets full evict  LRU block to disk) - Spark 1.0  
LRU: Least Recently Used (Cache Management Policy)

### Dynamic Memory

Execution Memory gets full it access more space of the Storage Memory and evict LRU block from Storage memory to disk - Spark 1.6 and above

---

**<u>References</u>**:

* [Apache Spark Memory Management. This blog describes the concepts behind… | by Suhas N M | Analytics Vidhya | Medium](https://medium.com/analytics-vidhya/apache-spark-memory-management-49682ded3d42)
