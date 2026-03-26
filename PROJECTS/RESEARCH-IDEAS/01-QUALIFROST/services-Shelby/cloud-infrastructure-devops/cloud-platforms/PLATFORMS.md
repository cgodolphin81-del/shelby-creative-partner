# Cloud Platforms Comparison

**Comprehensive comparison of AWS, Azure, and GCP for agency recommendations**

---

## Executive Summary

| Platform | Market Share | Best For | Pricing Model | Enterprise Adoption |
|----------|--------------|----------|---------------|---------------------|
| **AWS** | ~32% | Startups, scale-ups, broadest services | Pay-as-you-go, complex | Very High |
| **Azure** | ~23% | Enterprise, Microsoft shops, hybrid | Enterprise agreements | Very High |
| **GCP** | ~10% | Data/ML, Kubernetes, modern apps | Sustained use discounts | Growing |

---

## 1. Amazon Web Services (AWS)

### Overview
- **Launched:** 2006
- **Global Regions:** 33 regions, 105+ availability zones
- **Services:** 200+ fully featured services
- **Market Position:** Market leader, most mature ecosystem

### Core Services

#### Compute
| Service | Description | Use Case | Pricing (approx.) |
|---------|-------------|----------|-------------------|
| EC2 | Virtual servers | General compute | $0.0116-$6.528/hr |
| Lambda | Serverless functions | Event-driven workloads | $0.20/1M requests |
| ECS/EKS | Container orchestration | Containerized apps | + EC2 costs |
| Fargate | Serverless containers | No node management | $0.04048/vCPU-hr |

#### Storage
| Service | Description | Use Case | Pricing (approx.) |
|---------|-------------|----------|-------------------|
| S3 | Object storage | Files, backups, static sites | $0.023/GB (standard) |
| EBS | Block storage | EC2 volumes | $0.08-$0.17/GB-mo |
| EFS | Managed NFS | Shared file storage | $0.30/GB-mo |
| Glacier | Archive storage | Long-term backup | $0.004/GB-mo |

#### Database
| Service | Description | Use Case | Pricing (approx.) |
|---------|-------------|----------|-------------------|
| RDS | Managed relational | MySQL, PostgreSQL, Oracle | $0.017/hr + storage |
| Aurora | MySQL/PostgreSQL compatible | High performance | $0.10/hr (minimal) |
| DynamoDB | NoSQL key-value | High-scale apps | $0.25/GB-mo + requests |
| Redshift | Data warehouse | Analytics | $0.25/hr (dc2.large) |

#### Networking
| Service | Description | Use Case | Pricing (approx.) |
|---------|-------------|----------|-------------------|
| VPC | Virtual network | Network isolation | Free |
| CloudFront | CDN | Content delivery | $0.085/GB (first 10TB) |
| Route 53 | DNS | Domain management | $0.50/zone-mo |
| Direct Connect | Dedicated connection | Hybrid connectivity | $0.30/hr + data transfer |

#### Security
| Service | Description | Use Case |
|---------|-------------|----------|
| IAM | Identity & access | User/role management |
| KMS | Key management | Encryption keys |
| WAF | Web application firewall | Web app protection |
| Shield | DDoS protection | DDoS mitigation |
| GuardDuty | Threat detection | Security monitoring |

### AWS Certifications (Recommended for Team)

| Certification | Level | Exam Cost | Validity |
|---------------|-------|-----------|----------|
| Cloud Practitioner | Foundational | $100 | 3 years |
| Solutions Architect Associate | Associate | $150 | 3 years |
| Developer Associate | Associate | $150 | 3 years |
| SysOps Administrator Associate | Associate | $150 | 3 years |
| Solutions Architect Professional | Professional | $300 | 3 years |
| DevOps Engineer Professional | Professional | $300 | 3 years |
| Security Specialty | Specialty | $300 | 3 years |
| Advanced Networking Specialty | Specialty | $300 | 3 years |

### AWS Pricing Tools
- **AWS Pricing Calculator:** https://calculator.aws/
- **Cost Explorer:** Built-in cost analysis
- **Budgets:** Set spending alerts
- **Reserved Instances:** Up to 72% discount
- **Savings Plans:** Flexible commitment discounts

### AWS Pros & Cons

**✅ Pros:**
- Most comprehensive service catalog
- Largest partner ecosystem
- Most mature and stable
- Best documentation and community
- Global reach and availability

**❌ Cons:**
- Complex pricing structure
- Can be expensive without optimization
- Steeper learning curve
- Console can be overwhelming

---

## 2. Microsoft Azure

### Overview
- **Launched:** 2010
- **Global Regions:** 60+ regions, 140+ countries
- **Services:** 200+ products and services
- **Market Position:** Enterprise favorite, strong hybrid capabilities

### Core Services

#### Compute
| Service | Description | Use Case | Pricing (approx.) |
|---------|-------------|----------|-------------------|
| Virtual Machines | Virtual servers | General compute | $0.009-$6.795/hr |
| Azure Functions | Serverless | Event-driven workloads | $0.20/1M executions |
| AKS | Managed Kubernetes | Container orchestration | Free (pay for nodes) |
| Container Instances | Serverless containers | Quick deployments | $0.048/vCPU-hr |

#### Storage
| Service | Description | Use Case | Pricing (approx.) |
|---------|-------------|----------|-------------------|
| Blob Storage | Object storage | Files, backups | $0.0184/GB (hot) |
| Managed Disks | Block storage | VM disks | $0.09-$0.18/GB-mo |
| Azure Files | Managed file shares | Shared storage | $0.06/GB-mo |
| Archive Storage | Long-term archive | Compliance, backup | $0.00099/GB-mo |

#### Database
| Service | Description | Use Case | Pricing (approx.) |
|---------|-------------|----------|-------------------|
| Azure SQL Database | Managed SQL | Enterprise apps | $0.115/hr (basic) |
| Cosmos DB | Multi-model NoSQL | Global apps | $0.25/100 RU-s |
| MySQL/PostgreSQL | Managed open source | Web apps | $0.013/hr (basic) |
| Synapse Analytics | Data warehouse | Big data analytics | $1.94/hr (DW100c) |

#### Networking
| Service | Description | Use Case | Pricing (approx.) |
|---------|-------------|----------|-------------------|
| Virtual Network | Network isolation | Network segmentation | Free |
| CDN | Content delivery | Global content | $0.077/GB |
| DNS | Domain management | DNS hosting | $0.50/zone-mo |
| ExpressRoute | Private connection | Hybrid connectivity | $400-$15,000/mo |

#### Security
| Service | Description | Use Case |
|---------|-------------|----------|
| Azure AD | Identity management | SSO, MFA |
| Key Vault | Secrets management | Keys, secrets, certs |
| WAF | Web application firewall | App protection |
| Security Center | Security management | Threat detection |
| Sentinel | SIEM | Security analytics |

### Azure Certifications (Recommended for Team)

| Certification | Level | Exam Cost | Validity |
|---------------|-------|-----------|----------|
| AZ-900: Fundamentals | Foundational | $99 | No expiry |
| AZ-104: Administrator Associate | Associate | $165 | 1 year |
| AZ-204: Developer Associate | Associate | $165 | 1 year |
| AZ-305: Solutions Architect Expert | Expert | $165 | 1 year |
| AZ-400: DevOps Engineer Expert | Expert | $165 | 1 year |
| AZ-500: Security Engineer Associate | Associate | $165 | 1 year |
| AZ-700: Network Engineer Associate | Associate | $165 | 1 year |

### Azure Pricing Tools
- **Azure Pricing Calculator:** https://azure.microsoft.com/pricing/calculator/
- **Cost Management + Billing:** Built-in cost tracking
- **Azure Advisor:** Optimization recommendations
- **Reserved VM Instances:** Up to 72% discount
- **Azure Hybrid Benefit:** Use existing Windows/SQL licenses

### Azure Pros & Cons

**✅ Pros:**
- Best for Microsoft-centric organizations
- Strong hybrid cloud capabilities
- Enterprise-grade compliance
- Active Directory integration
- Competitive pricing with discounts

**❌ Cons:**
- Portal can be slow and complex
- Some services less mature than AWS
- Licensing complexity
- Regional availability varies

---

## 3. Google Cloud Platform (GCP)

### Overview
- **Launched:** 2008 (as App Engine), 2013 (as GCP)
- **Global Regions:** 39 regions, 118+ zones
- **Services:** 100+ products and services
- **Market Position:** Data/ML leader, Kubernetes originator

### Core Services

#### Compute
| Service | Description | Use Case | Pricing (approx.) |
|---------|-------------|----------|-------------------|
| Compute Engine | Virtual machines | General compute | $0.010-$8.928/hr |
| Cloud Functions | Serverless | Event-driven workloads | $0.40/1M invocations |
| Cloud Run | Serverless containers | Containerized apps | $0.0000025/vCPU-sec |
| GKE | Managed Kubernetes | Container orchestration | $0.10/cluster-hr |

#### Storage
| Service | Description | Use Case | Pricing (approx.) |
|---------|-------------|----------|-------------------|
| Cloud Storage | Object storage | Files, backups | $0.020/GB (standard) |
| Persistent Disk | Block storage | VM disks | $0.04-$0.17/GB-mo |
| Filestore | Managed NFS | Shared file storage | $0.255/GB-mo |
| Archive Storage | Long-term archive | Cold data | $0.0012/GB-mo |

#### Database
| Service | Description | Use Case | Pricing (approx.) |
|---------|-------------|----------|-------------------|
| Cloud SQL | Managed MySQL/PostgreSQL | Web apps | $0.075/hr (db-f1-micro) |
| Firestore | NoSQL document DB | Mobile/web apps | $0.036/GB-mo |
| Bigtable | Wide-column NoSQL | Big data | $0.65/node-hr |
| BigQuery | Data warehouse | Analytics | $5/TB queried |

#### Networking
| Service | Description | Use Case | Pricing (approx.) |
|---------|-------------|----------|-------------------|
| VPC | Virtual network | Network isolation | Free |
| Cloud CDN | Content delivery | Global content | $0.08/GB |
| Cloud DNS | Domain management | DNS hosting | $0.20/zone-mo |
| Cloud Interconnect | Private connection | Hybrid connectivity | $750-$5,000/mo |

#### Security
| Service | Description | Use Case |
|---------|-------------|----------|
| Cloud IAM | Identity & access | User/role management |
| Cloud KMS | Key management | Encryption keys |
| Cloud Armor | DDoS & WAF | Web app protection |
| Security Command Center | Security management | Threat detection |
| Chronicle | Security analytics | SIEM |

### GCP Certifications (Recommended for Team)

| Certification | Level | Exam Cost | Validity |
|---------------|-------|-----------|----------|
| Cloud Digital Leader | Foundational | $99 | 2 years |
| Associate Cloud Engineer | Associate | $125 | 2 years |
| Professional Cloud Architect | Professional | $200 | 2 years |
| Professional Cloud Developer | Professional | $200 | 2 years |
| Professional Data Engineer | Professional | $200 | 2 years |
| Professional DevOps Engineer | Professional | $200 | 2 years |
| Professional Security Engineer | Professional | $200 | 2 years |
| Professional Network Engineer | Professional | $200 | 2 years |

### GCP Pricing Tools
- **Google Cloud Pricing Calculator:** https://cloud.google.com/products/calculator
- **Cost Table:** Built-in cost analysis
- **Budgets & Alerts:** Spending notifications
- **Committed Use Discounts:** Up to 57% discount
- **Sustained Use Discounts:** Automatic for long-running VMs

### GCP Pros & Cons

**✅ Pros:**
- Best-in-class data and ML services
- Kubernetes native (GKE)
- Simple, transparent pricing
- Sustained use discounts (automatic)
- High-performance network

**❌ Cons:**
- Smaller service catalog than AWS/Azure
- Less enterprise penetration
- Fewer regions and availability zones
- Smaller partner ecosystem

---

## Platform Comparison Matrix

### Feature Comparison

| Feature | AWS | Azure | GCP |
|---------|-----|-------|-----|
| **Compute** | EC2, Lambda | VMs, Functions | Compute Engine, Cloud Functions |
| **Containers** | ECS, EKS, Fargate | ACI, AKS | Cloud Run, GKE |
| **Object Storage** | S3 | Blob Storage | Cloud Storage |
| **SQL Database** | RDS, Aurora | Azure SQL, Database | Cloud SQL |
| **NoSQL** | DynamoDB | Cosmos DB | Firestore, Bigtable |
| **Data Warehouse** | Redshift | Synapse | BigQuery |
| **ML/AI** | SageMaker | Azure ML | Vertex AI |
| **Kubernetes** | EKS | AKS | GKE (originator) |
| **Serverless** | Lambda | Functions | Cloud Functions, Run |
| **CDN** | CloudFront | Azure CDN | Cloud CDN |
| **DNS** | Route 53 | Azure DNS | Cloud DNS |
| **WAF** | AWS WAF | Azure WAF | Cloud Armor |
| **Secrets** | Secrets Manager | Key Vault | Secret Manager |
| **Monitoring** | CloudWatch | Azure Monitor | Cloud Monitoring |
| **Logging** | CloudWatch Logs | Azure Monitor Logs | Cloud Logging |

### Pricing Comparison (Sample Workloads)

#### Small Web Application (Monthly Estimate)
| Component | AWS | Azure | GCP |
|-----------|-----|-------|-----|
| 2x VMs (2 vCPU, 4GB) | $60 | $58 | $52 |
| Managed Database | $45 | $42 | $40 |
| Object Storage (100GB) | $2.30 | $1.84 | $2.00 |
| Load Balancer | $22 | $20 | $18 |
| CDN (500GB) | $42.50 | $38.50 | $40 |
| **Total** | **~$172** | **~$160** | **~$152** |

#### Medium Enterprise Application (Monthly Estimate)
| Component | AWS | Azure | GCP |
|-----------|-----|-------|-----|
| 10x VMs (4 vCPU, 16GB) | $1,200 | $1,150 | $1,040 |
| Managed Database (HA) | $450 | $420 | $400 |
| Object Storage (1TB) | $23 | $18.40 | $20 |
| Load Balancer | $22 | $20 | $18 |
| CDN (5TB) | $382.50 | $385 | $400 |
| **Total** | **~$2,078** | **~$1,993** | **~$1,878** |

### Certification Path Recommendations

#### For AWS-Focused Team
```
Month 1-2: Cloud Practitioner (all team)
Month 3-4: Solutions Architect Associate (architects)
Month 5-6: Developer Associate (engineers)
Month 7-9: Solutions Architect Professional (leads)
Month 10-12: DevOps Engineer Professional (DevOps team)
```

#### For Azure-Focused Team
```
Month 1-2: AZ-900 Fundamentals (all team)
Month 3-4: AZ-104 Administrator (engineers)
Month 5-6: AZ-204 Developer (developers)
Month 7-9: AZ-305 Architect Expert (architects)
Month 10-12: AZ-400 DevOps Expert (DevOps team)
```

#### For GCP-Focused Team
```
Month 1-2: Cloud Digital Leader (all team)
Month 3-4: Associate Cloud Engineer (engineers)
Month 5-7: Professional Cloud Architect (architects)
Month 8-10: Professional Cloud Developer (developers)
Month 11-12: Professional DevOps Engineer (DevOps team)
```

---

## Multi-Cloud Strategy

### When to Recommend Multi-Cloud

**✅ Good Reasons:**
- Avoid vendor lock-in
- Leverage best-of-breed services
- Geographic coverage requirements
- Compliance and data sovereignty
- Disaster recovery across providers

**❌ Bad Reasons:**
- "Just because"
- Without proper team expertise
- Without cost management strategy
- For simple workloads

### Multi-Cloud Patterns

#### Pattern 1: Active-Active
- Workloads run on multiple clouds simultaneously
- Best for: High availability, global scale
- Complexity: High
- Cost: High

#### Pattern 2: Active-Passive (DR)
- Primary cloud for production, secondary for DR
- Best for: Disaster recovery, compliance
- Complexity: Medium
- Cost: Medium

#### Pattern 3: Workload-Specific
- Different workloads on different clouds
- Best for: Leveraging unique services
- Complexity: Medium
- Cost: Variable

### Multi-Cloud Tools

| Category | Tools |
|----------|-------|
| **Infrastructure as Code** | Terraform, Pulumi, Crossplane |
| **Container Orchestration** | Kubernetes (portable) |
| **CI/CD** | GitHub Actions, GitLab CI, Jenkins |
| **Monitoring** | Datadog, New Relic, Grafana |
| **Cost Management** | CloudHealth, CloudCheckr, Kubecost |
| **Security** | Prisma Cloud, Wiz, Lacework |

---

## Recommendation Framework

### Decision Matrix

| Factor | Weight | AWS Score | Azure Score | GCP Score |
|--------|--------|-----------|-------------|-----------|
| Existing Microsoft Investment | 20% | 3 | 10 | 4 |
| Kubernetes Focus | 15% | 7 | 7 | 10 |
| Data/ML Workloads | 15% | 8 | 7 | 10 |
| Enterprise Compliance | 15% | 9 | 10 | 7 |
| Cost Sensitivity | 15% | 6 | 7 | 9 |
| Global Reach | 10% | 10 | 9 | 7 |
| Team Expertise | 10% | Variable | Variable | Variable |

### Client Recommendation Template

```markdown
## Cloud Platform Recommendation: [Client Name]

### Recommended Platform: [AWS/Azure/GCP/Multi-Cloud]

### Rationale
[Explain key factors driving recommendation]

### Key Considerations
1. [Factor 1]
2. [Factor 2]
3. [Factor 3]

### Estimated Monthly Costs
- Compute: $X,XXX
- Storage: $XXX
- Database: $XXX
- Network: $XXX
- **Total: $X,XXX/month**

### Migration Timeline
- Assessment: X weeks
- Planning: X weeks
- Migration: X weeks
- Optimization: X weeks

### Risks & Mitigations
| Risk | Likelihood | Impact | Mitigation |
|------|------------|--------|------------|
| [Risk 1] | Medium | High | [Mitigation] |
| [Risk 2] | Low | Medium | [Mitigation] |
```

---

**Document Version:** 1.0  
**Last Updated:** 2026-03-23
