export const company = {
  name: "Celaris Tech",
  tagline: "AWS Cloud, Data & DevOps Solutions",
  description: "Specializing in AWS infrastructure, cloud migrations, data warehousing, DevOps automation, and Amazon Connect contact center solutions.",
  
  services: [
    {
      id: "data",
      name: "Data & Analytics",
      icon: "Database",
      description: "Build scalable data warehouses and analytics pipelines on AWS. Transform raw data into actionable insights.",
      features: [
        "Data Warehouse Design",
        "ETL/ELT Pipelines",
        "AWS Redshift & Athena",
        "Business Intelligence"
      ]
    },
    {
      id: "migrations",
      name: "Cloud Migrations", 
      icon: "Cloud",
      description: "Migrate your infrastructure to AWS with minimal downtime. From planning to execution, we handle the complexity.",
      features: [
        "Migration Assessment",
        "Lift & Shift / Refactoring",
        "Database Migration (DMS)",
        "Zero-downtime Strategies"
      ]
    },
    {
      id: "devops",
      name: "DevOps & Automation",
      icon: "Zap",
      description: "Streamline deployments, automate infrastructure, and accelerate your delivery pipeline.",
      features: [
        "CI/CD Pipelines",
        "Infrastructure as Code",
        "Container Orchestration",
        "Monitoring & Observability"
      ]
    },
    {
      id: "contact-center",
      name: "Contact Centers",
      icon: "Headphones",
      description: "Build cloud-native contact centers with Amazon Connect. Scalable, flexible, and cost-effective.",
      features: [
        "Amazon Connect Setup",
        "IVR & Call Flows",
        "CRM Integrations",
        "Real-time Analytics"
      ]
    }
  ],
  
  values: [
    { 
      title: "AWS Specialists", 
      description: "Deep expertise across the AWS ecosystem",
      icon: "Users"
    },
    { 
      title: "Dedicated Support", 
      description: "We're with you from kickoff to production",
      icon: "Clock"
    },
    { 
      title: "Results-Focused", 
      description: "Solutions designed around your business goals",
      icon: "TrendingUp"
    }
  ],
  
  contact: {
    // EmailJS credentials (safe to include - public key only)
    emailjs: {
      serviceId: "service_f0k0p22",
      templateId: "template_km80ez6", 
      publicKey: "zksgSZ2gKtHhPLBtt"
    }
  }
};