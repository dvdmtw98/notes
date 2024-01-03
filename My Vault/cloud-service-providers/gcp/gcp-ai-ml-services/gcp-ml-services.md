---
tags:
- gcp
- cloud
- ml
title: GCP ML Services
---

### Vertex AI

Unified ML platform for building ML solutions end-to-end  
Provides Deep Learning Environments (DL VM, DL Containers)  
Supports Vertex Notebooks for writing code (JupyterLab under the hood)  
Provides powerful pretrained ML models trained using Google's data

 > [!NOTE]
 > * Vertex AI is the unification of AI Platform and the addition of AutoML
 > * Even though the name contains AI this service is used for ML and DL

### AutoML

Allows to easily train high-quality, custom ML models  
Upload data to AutoML tables and choose what needs to be predicted and the rest is handles on its own

### AI Platform

This service is **<u>deprecated</u>** and Vertex AI is now recommended  
Supports preparing of datasets for supervised training with Data Labeling  
Notebooks to write and document building ML models  
A Model registry to hold all your trained models  
Pipelines for setting up automated CI/CD to rapidly deploy new changes (MLOps)

### TensorFlow Enterprise

Low-level **deep learning machine learning platform** created by the Google Brain Team  
Written in [Python](../../../software-engineering/programming-languages/python/python.md), C++ and CUDA, provides APIs to use other languages

A Tensor is a multi-dimensional [Array](../../../software-engineering/data-structures-and-algorithms/data-structures/array.md) (Similar to NumPy ndarray objects)  
They can reside in accelerator memory (like a GPU)  
It is an special data structure that is created for machine learning workloads

Google has their own hardware called Tensor Processing Units (TPU) which is specially optimized for tensor data structure  
TPUs are ~ **50 times** more powerful that traditional chips

### Cloud GPUs

Add GPUs to your workloads for machine learning, scientific computing and 3D Visualization  
These are referred to as **fractional GPUs**  
The preconfigured ML/DL VMs and Containers that contain GPUs are extremely costly so in place of them Fractional GPUs can be used for light and short workloads

#gcp-compute-service #gcp-ml-service