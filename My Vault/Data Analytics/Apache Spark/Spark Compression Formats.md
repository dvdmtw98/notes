---
title: Spark Compression Formats
---

Gzip better compression. Higher CPU usage. Good for cold data  
Snappy, lzo lesser compression. Good for hot data. Snappy better than lzo mostly  
bzip2 can provide better compression than gzip on some files but higher CPU usage.  HBase not supported  
lz4 and zstd are Splitable

### Saving of Normal Files

**Supported Codecs:** bzip2, deflate, uncompressed, lz4, gzip, snappy, none  
**Default:** none

````python
salesdf.write.option("codec","bzip2").csv("file:///home/ruser/target/zipfile")
````

### When saving as a Parquet, ORC

**Supported Codec (Parquet):** brotli, uncompressed, lz4, gzip, lzo, snappy, none, zstd  
**Supported Codec (ORC):** uncompressed, lzo, snappy, zlib, none  
**Default:** snappy

````python
spark.conf.get("spark.sql.parquet.compression.codec")
spark.conf.set("spark.sql.parquet.compression.codec","gzip")

ds.write.format("parquet").option("compression","gzip").save("file:///home/ak/data/dsgzip")
````

---

**<u>References</u>**:

* [Choosing a Data Compression Format | 5.6.x | Cloudera Documentation](https://docs.cloudera.com/documentation/enterprise/5-6-x/topics/admin_data_compression_performance.html)