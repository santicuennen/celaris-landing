export const company = {
  name: "Celaris Tech",
  tagline: "Enterprise Cloud & DevOps Solutions",
  description: "Specializing in AWS infrastructure, DevOps automation, security compliance, and Amazon Connect contact center solutions.",
  
  services: [
    {
      id: "devops",
      name: "DevOps Solutions",
      icon: "Zap",
      description: "Streamline deployment pipelines, automate infrastructure, reduce time-to-market with proven CI/CD strategies.",
      features: [
        "CI/CD Pipeline Automation",
        "Infrastructure as Code", 
        "Container Orchestration",
        "Monitoring & Logging"
      ]
    },
    {
      id: "cloud",
      name: "Cloud Infrastructure", 
      icon: "Cloud",
      description: "Design, migrate, and optimize AWS infrastructure for scale, performance, and cost efficiency.",
      features: [
        "Architecture Design",
        "Migration Planning", 
        "Cost Optimization",
        "Auto-scaling Solutions"
      ]
    },
    {
      id: "security",
      name: "Security & Compliance",
      icon: "Shield", 
      description: "Comprehensive audits, compliance frameworks (SOC2, HIPAA, ISO), and security hardening.",
      features: [
        "Security Audits",
        "Compliance Assessment",
        "Vulnerability Scanning", 
        "Policy Implementation"
      ]
    },
    {
      id: "contact-center",
      name: "Contact Center (Amazon Connect)",
      icon: "Headphones",
      description: "Build and scale customer engagement centers with Amazon Connect - cloud-native, flexible, cost-effective.",
      features: [
        "Amazon Connect Setup",
        "IVR Configuration", 
        "Analytics & Reporting",
        "Integration Services"
      ]
    }
  ],
  
  values: [
    { 
      title: "Expert Team", 
      description: "15+ years combined AWS & enterprise experience",
      icon: "Users"
    },
    { 
      title: "24/7 Support", 
      description: "Always here when you need us",
      icon: "Clock"
    },
    { 
      title: "Proven ROI", 
      description: "Data-driven results that matter to your business",
      icon: "TrendingUp"
    }
  ],
  
  contact: {
    email: "s.cuennen@outlook.com",
    // EmailJS credentials (safe to include - public key only)
    emailjs: {
      serviceId: "service_f0k0p22",
      templateId: "template_km80ez6", 
      publicKey: "zksgSZ2gKtHhPLBtt"
    }
  }
};