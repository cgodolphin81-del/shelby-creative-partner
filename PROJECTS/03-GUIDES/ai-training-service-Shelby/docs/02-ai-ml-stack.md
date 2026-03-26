# AI/ML Technology Stack

## Overview

Our technology stack is carefully selected for performance, flexibility, and enterprise readiness. We leverage industry-standard tools and frameworks while maintaining the flexibility to adopt emerging technologies as needed.

---

## Core Frameworks

### Deep Learning Frameworks

#### PyTorch
**Primary Framework for Research & Development**

```python
# Standard training setup
import torch
import torch.nn as nn
from torch.utils.data import DataLoader, Dataset

class CustomModel(nn.Module):
    def __init__(self, config):
        super().__init__()
        self.config = config
        # Model architecture
        
    def forward(self, x):
        # Forward pass
        return output

# Training loop with best practices
def train_model(model, dataloader, optimizer, scheduler, epochs):
    for epoch in range(epochs):
        for batch in dataloader:
            # Training step
            loss = compute_loss(model, batch)
            loss.backward()
            optimizer.step()
            scheduler.step()
```

**Why PyTorch:**
- Dynamic computation graphs for flexibility
- Strong research community and latest model support
- Excellent for custom architectures
- Native support for distributed training
- TorchServe for production deployment

**Use Cases:**
- Custom model development
- Research and experimentation
- Fine-tuning transformer models
- Computer vision applications

#### TensorFlow / Keras
**Production-Ready Alternative**

```python
import tensorflow as tf
from tensorflow import keras

# Model definition
model = keras.Sequential([
    keras.layers.Dense(512, activation='relu'),
    keras.layers.Dropout(0.3),
    keras.layers.Dense(num_classes, activation='softmax')
])

# Compilation and training
model.compile(
    optimizer='adam',
    loss='categorical_crossentropy',
    metrics=['accuracy']
)

model.fit(train_data, epochs=10, validation_data=val_data)
```

**Why TensorFlow:**
- TFX for ML pipelines
- TensorFlow Serving for production
- Strong mobile/embedded support (TensorFlow Lite)
- TensorFlow.js for web deployment

---

## Transformer & LLM Libraries

### Hugging Face Ecosystem

**Transformers Library:**
```python
from transformers import (
    AutoModelForCausalLM,
    AutoTokenizer,
    TrainingArguments,
    Trainer,
    DataCollatorForLanguageModeling
)

# Load pre-trained model
model = AutoModelForCausalLM.from_pretrained(
    "meta-llama/Llama-3-8B",
    torch_dtype=torch.bfloat16,
    device_map="auto"
)

tokenizer = AutoTokenizer.from_pretrained("meta-llama/Llama-3-8B")

# Fine-tuning configuration
training_args = TrainingArguments(
    output_dir="./results",
    per_device_train_batch_size=8,
    gradient_accumulation_steps=4,
    learning_rate=2e-5,
    num_train_epochs=3,
    fp16=True,
    save_strategy="epoch",
    logging_steps=10,
)

trainer = Trainer(
    model=model,
    args=training_args,
    train_dataset=train_dataset,
    eval_dataset=eval_dataset,
    data_collator=DataCollatorForLanguageModeling(tokenizer, mlm=False),
)

trainer.train()
```

**Key Hugging Face Libraries:**
| Library | Purpose |
|---------|---------|
| transformers | Model architectures and pipelines |
| datasets | Dataset loading and processing |
| accelerate | Distributed training simplified |
| peft | Parameter-Efficient Fine-Tuning (LoRA, etc.) |
| evaluate | Model evaluation metrics |
| hub | Model sharing and versioning |

### Parameter-Efficient Fine-Tuning (PEFT)

```python
from peft import LoraConfig, get_peft_model, TaskType

# LoRA configuration
lora_config = LoraConfig(
    r=16,  # Rank
    lora_alpha=32,
    target_modules=["q_proj", "v_proj"],
    lora_dropout=0.05,
    bias="none",
    task_type=TaskType.CAUSAL_LM
)

# Apply to model
model = get_peft_model(model, lora_config)
model.print_trainable_parameters()
# Output: trainable params: 4,194,304 || all params: 8,030,261,248 || trainable%: 0.0522%
```

---

## Orchestration & Workflow

### LangChain

**Application Framework for LLMs:**

```python
from langchain.chains import RetrievalQA
from langchain.vectorstores import Chroma, Pinecone
from langchain.embeddings import HuggingFaceEmbeddings
from langchain.llms import HuggingFacePipeline

# Vector store setup
embeddings = HuggingFaceEmbeddings(
    model_name="sentence-transformers/all-mpnet-base-v2"
)

vectorstore = Chroma(
    persist_directory="./chroma_db",
    embedding_function=embeddings
)

# RAG pipeline
qa_chain = RetrievalQA.from_chain_type(
    llm=llm,
    chain_type="stuff",
    retriever=vectorstore.as_retriever(
        search_type="similarity_score_threshold",
        search_kwargs={"score_threshold": 0.7}
    ),
    return_source_documents=True
)

response = qa_chain({"query": "What is our refund policy?"})
```

**LangChain Components:**
- **Chains:** Composable workflows
- **Agents:** Tool-using autonomous systems
- **Memory:** Conversation and session management
- **Tools:** External API and function integration
- **Callbacks:** Monitoring and observability

### LlamaIndex

**Data Framework for LLM Applications:**

```python
from llama_index import (
    VectorStoreIndex,
    SimpleDirectoryReader,
    StorageContext,
    load_index_from_storage
)
from llama_index.vector_stores import PineconeVectorStore

# Document loading
documents = SimpleDirectoryReader("./data").load_data()

# Index creation
index = VectorStoreIndex.from_documents(
    documents,
    embed_model="local:BAAI/bge-small-en-v1.5"
)

# Query engine
query_engine = index.as_query_engine(
    similarity_top_k=5,
    response_mode="compact"
)

response = query_engine.query("Explain our onboarding process")
```

---

## Vector Databases

### Production Vector Stores

#### Pinecone
**Managed Vector Database**

```python
import pinecone

pinecone.init(api_key="YOUR_API_KEY", environment="us-west1-gcp")

index = pinecone.Index("company-knowledge")

# Upsert embeddings
index.upsert([
    ("doc1", embedding1, {"source": "handbook.pdf", "page": 12}),
    ("doc2", embedding2, {"source": "policy.docx", "section": "3.2"})
])

# Query
results = index.query(
    vector=query_embedding,
    top_k=5,
    include_metadata=True
)
```

**Best For:** Production deployments, managed service, scalability

#### Chroma
**Lightweight, Self-Hosted**

```python
import chromadb
from chromadb.config import Settings

client = chromadb.Client(Settings(
    chroma_db_impl="duckdb+parquet",
    persist_directory="./chroma_data"
))

collection = client.create_collection("documents")

collection.add(
    embeddings=[embedding],
    documents=["Document text"],
    metadatas=[{"source": "file.pdf"}],
    ids=["doc_001"]
)

results = collection.query(
    query_embeddings=[query_embedding],
    n_results=5
)
```

**Best For:** Development, prototyping, small-medium deployments

#### Weaviate
**Feature-Rich Open Source**

```python
import weaviate

client = weaviate.Client("http://localhost:8080")

client.schema.create_class({
    "class": "Document",
    "properties": [
        {"name": "content", "dataType": ["text"]},
        {"name": "source", "dataType": ["string"]},
        {"name": "timestamp", "dataType": ["date"]}
    ]
})

# Hybrid search (semantic + keyword)
results = client.query.get(
    "Document",
    ["content", "source"]
).with_hybrid(
    query="employee benefits",
    alpha=0.7  # Balance between semantic and keyword
).with_limit(5).do()
```

**Best For:** Complex queries, hybrid search, GraphQL API

#### Qdrant
**High-Performance Open Source**

```python
from qdrant_client import QdrantClient
from qdrant_client.models import Distance, VectorParams, PointStruct

client = QdrantClient(host="localhost", port=6333)

client.create_collection(
    collection_name="documents",
    vectors_config=VectorParams(size=768, distance=Distance.COSINE)
)

client.upsert(
    collection_name="documents",
    points=[
        PointStruct(
            id=1,
            vector=embedding,
            payload={"source": "doc.pdf", "text": "content..."}
        )
    ]
)
```

**Best For:** High-performance requirements, filtering, self-hosted

---

## Cloud GPU Infrastructure

### GPU Cloud Providers

| Provider | GPU Options | Pricing (A100/hr) | Best For |
|----------|-------------|-------------------|----------|
| AWS | A100, H100, V100, T4 | ~$3-4 | Enterprise, scale |
| GCP | A100, H100, V100, T4 | ~$3-4 | TPUs, integration |
| Azure | A100, V100, T4 | ~$3-4 | Enterprise existing |
| Lambda Labs | A100, H100, A6000 | ~$1.5-2 | Cost-effective |
| RunPod | A100, H100, RTX 4090 | ~$1.5-2 | Flexible, cheap |
| Vast.ai | Various (marketplace) | ~$0.5-2 | Budget, spot |
| CoreWeave | H100, A100 | ~$2-3 | Large scale |

### Training Configuration Examples

**Single GPU (Development):**
```yaml
# docker-compose.yml
version: '3.8'
services:
  training:
    image: pytorch/pytorch:2.1.0-cuda12.1-cudnn8-runtime
    deploy:
      resources:
        reservations:
          devices:
            - driver: nvidia
              count: 1
              capabilities: [gpu]
    volumes:
      - ./data:/data
      - ./models:/models
    environment:
      - CUDA_VISIBLE_DEVICES=0
```

**Multi-GPU Distributed Training:**
```bash
# PyTorch Distributed
torchrun --nproc_per_node=8 \
    --nnodes=2 \
    --node_rank=0 \
    --master_addr="10.0.0.1" \
    --master_port=29500 \
    train.py --config config.yaml
```

**Kubernetes with GPU:**
```yaml
# k8s-gpu-job.yaml
apiVersion: batch/v1
kind: Job
metadata:
  name: model-training
spec:
  template:
    spec:
      containers:
      - name: trainer
        image: training-image:latest
        resources:
          limits:
            nvidia.com/gpu: 8
        volumeMounts:
        - name: data
          mountPath: /data
      volumes:
      - name: data
        persistentVolumeClaim:
          claimName: training-data-pvc
      restartPolicy: OnFailure
```

---

## MLOps & Deployment

### Model Serving

#### vLLM (High-Throughput LLM Serving)
```bash
# Installation
pip install vllm

# Serve model
python -m vllm.entrypoints.api_server \
    --model meta-llama/Llama-3-8B \
    --host 0.0.0.0 \
    --port 8000 \
    --tensor-parallel-size 2
```

#### TGI (Text Generation Inference)
```bash
# Docker deployment
docker run --gpus all \
    -p 8080:80 \
    ghcr.io/huggingface/text-generation-inference:latest \
    --model-id meta-llama/Llama-3-8B \
    --num-shard 2
```

#### TorchServe
```python
# Model archiver
torch-model-archiver \
    --model-name my_llm \
    --version 1.0 \
    --model-file model.py \
    --serialized-file model.pt \
    --handler text_generation.py

# Start server
torchserve --start --model-store ./model-store --models my_llm.mar
```

### Monitoring & Observability

| Tool | Purpose | Integration |
|------|---------|-------------|
| Prometheus + Grafana | Metrics and dashboards | All infrastructure |
| Jaeger | Distributed tracing | Microservices |
| MLflow | Experiment tracking | Training pipelines |
| Weights & Biases | Experiment tracking | Training pipelines |
| Arize | Model monitoring | Production models |
| WhyLabs | Model drift detection | Production models |

---

## Development Tools

### Version Control & Collaboration
- **Git + GitHub/GitLab:** Code versioning
- **DVC (Data Version Control):** Dataset and model versioning
- **MLflow:** Experiment tracking and model registry

### Testing & Quality
- **pytest:** Unit and integration testing
- **Great Expectations:** Data validation
- **DeepChecks:** ML model validation
- **Guardrails:** Output validation for LLMs

### Security
- **Secrets Management:** HashiCorp Vault, AWS Secrets Manager
- **Container Security:** Trivy, Snyk
- **Model Security:** Adversarial robustness testing

---

## Technology Selection Guide

| Requirement | Recommended Stack |
|-------------|-------------------|
| Rapid prototyping | Hugging Face + Chroma + LangChain |
| Production RAG | Pinecone + FastAPI + vLLM |
| Custom model training | PyTorch + Weights & Biases + Kubernetes |
| Enterprise deployment | TensorFlow + TFX + Kubernetes + Istio |
| Cost-sensitive | LoRA fine-tuning + RunPod + Qdrant |
| Maximum performance | H100 cluster + vLLM + custom kernels |

---

## Infrastructure Requirements

### Minimum (Development)
- 1x GPU (RTX 4090 / A10 / T4)
- 32GB RAM
- 500GB SSD storage
- Cost: ~$500-1000/month

### Standard (Small Production)
- 2-4x GPUs (A100 40GB)
- 128GB RAM
- 2TB SSD storage
- Cost: ~$3000-6000/month

### Enterprise (Large Scale)
- 8+ GPUs (H100 / A100 80GB)
- 512GB+ RAM
- 10TB+ storage
- Multi-region deployment
- Cost: ~$20000-50000/month
