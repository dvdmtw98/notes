---
tags:
  - analytics
  - hive
title: Hive File Formats
date: 2024-01-28 14:15:56 -0600
---

* The default delimiter for reading from file in Hive is `\t`.
* We can save data to the below formats only by using INSERT INTO/ INSERT OVERWRITE command
* Parquet, ORC, RCF store the metadata along with the data (So if we use an small file the compressed file will be larger than the original)
* Formats like Parquet and ORC are called "Compression File Formats"

 > [!NOTE]
 > **Supported File Formats:** Text, ORC, RCF, Parquet, Sequence File
 > **Not Supported Format:** Avro
 