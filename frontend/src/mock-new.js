export const studentInfo = {
  name: "Sanjeev Kumar",
  title: "Cybersecurity Professional | VAPT & SOC Specialist",
  headline: "Bridging the gap between Vulnerability Assessment and Incident Response",
  bio: "I don't just find vulnerabilities—I build the architectures to stop them.",
  tagline: "SECURITY ANALYST ACTIVE",
  email: "sanjeevkumar25857@gmail.com",
  phone: "+91 78768-21051",
  linkedin: "https://linkedin.com/in/sanjeevkumar",
  github: "https://github.com/sanjeevkumar",
  tryhackme: "https://tryhackme.com/p/sanjeevkumar",
  resumeUrl: "https://customer-assets.emergentagent.com/job_response-showcase/artifacts/kiyt4ww9_Sanjeev-kumar-SOC%20%282%29.pdf",
  location: "Himachal Pradesh, India"
};

export const experiences = [
  {
    id: 1,
    year: "2024-25",
    period: "Nov 2024 - Feb 2025",
    role: "Cyber Security Intern",
    company: "AMAHA (innerHour)",
    status: "Recent",
    description: "Conducted penetration testing on web applications and APIs, identifying 20+ vulnerabilities (5 critical). Managed VPN infrastructure for 400+ employees and implemented Cloudflare CDN, reducing web-based attacks by ~30%.",
    achievements: [
      "Identified 20+ vulnerabilities across web applications and APIs (5 critical severity)",
      "Reduced web-based attacks (XSS, SQLi, DDoS) by ~30% through Cloudflare CDN implementation",
      "Managed VPN infrastructure serving 400+ employees with high-availability access",
      "Led bug bounty program triage processing 35+ security reports",
      "Performed OSINT investigations identifying exposed credentials of C-level executives",
      "Triaged and analyzed 30+ security alerts including phishing campaigns and malware"
    ],
    tools: ["Burp Suite", "Cloudflare", "VPN Management", "OSINT Tools"]
  },
  {
    id: 2,
    year: "2024",
    period: "Aug 2024 - Nov 2024",
    role: "VAPT Intern",
    company: "SECURE SLEUTHS",
    status: "Past",
    description: "Performed VAPT on web applications, APIs, and network infrastructure for 5+ clients, identifying 25+ vulnerabilities across diverse environments.",
    achievements: [
      "Executed comprehensive VAPT assessments for 5+ enterprise clients",
      "Identified and documented 25+ vulnerabilities across diverse tech stacks",
      "Validated critical security flaws: SQLi, XSS, CSRF, and misconfigurations",
      "Collaborated with development teams for effective vulnerability remediation",
      "Improved security posture and reduced attack surface for client organizations"
    ],
    tools: ["Burp Suite", "OWASP ZAP", "Metasploit", "Nmap", "Nessus"]
  }
];

export const education = {
  degree: "Bachelor of Computer Applications",
  institution: "Himachal Pradesh Technical University",
  location: "Hamirpur, Himachal Pradesh",
  period: "Graduated",
  highlights: [
    "Computer Networks & Security Fundamentals",
    "Web Application Security & Cloud Computing",
    "Operating Systems & Programming"
  ]
};

export const technicalArsenal = [
  {
    id: 1,
    category: "SIEM & Monitoring",
    icon: "activity",
    color: "cyan",
    tools: [
      { name: "Splunk", level: "Advanced" },
      { name: "Wazuh", level: "Intermediate" },
      { name: "ELK Stack", level: "Intermediate" }
    ],
    description: "Alert triage, rule tuning, IOC correlation, false positive reduction",
    skills: ["Log aggregation", "Correlation rules", "Alert management", "Dashboard creation"]
  },
  {
    id: 2,
    category: "Vulnerability Assessment",
    icon: "search",
    color: "orange",
    tools: [
      { name: "Burp Suite", level: "Advanced" },
      { name: "OWASP ZAP", level: "Advanced" },
      { name: "Nmap", level: "Advanced" },
      { name: "Nessus", level: "Intermediate" }
    ],
    description: "Web application testing, API security, network vulnerability scanning",
    skills: ["SQLi detection", "XSS testing", "CSRF analysis", "Security misconfigurations"]
  },
  {
    id: 3,
    category: "Penetration Testing",
    icon: "target",
    color: "red",
    tools: [
      { name: "Metasploit", level: "Advanced" },
      { name: "Kali Linux", level: "Advanced" },
      { name: "Burp Suite", level: "Advanced" }
    ],
    description: "Exploitation, privilege escalation, post-exploitation techniques",
    skills: ["Exploit development", "Lateral movement", "Persistence mechanisms", "Pivoting"]
  },
  {
    id: 4,
    category: "Network Analysis",
    icon: "network",
    color: "blue",
    tools: [
      { name: "Wireshark", level: "Advanced" },
      { name: "TCP/IP", level: "Advanced" },
      { name: "DNS", level: "Intermediate" }
    ],
    description: "Packet analysis, traffic inspection, protocol forensics",
    skills: ["Traffic analysis", "Protocol debugging", "Network forensics", "Packet crafting"]
  },
  {
    id: 5,
    category: "Threat Intelligence",
    icon: "shield-alert",
    color: "purple",
    tools: [
      { name: "MITRE ATT&CK", level: "Advanced" },
      { name: "OSINT Tools", level: "Advanced" },
      { name: "VirusTotal", level: "Intermediate" }
    ],
    description: "Threat modeling, attack pattern analysis, IOC identification",
    skills: ["TTPs mapping", "Threat hunting", "Intelligence gathering", "Risk assessment"]
  },
  {
    id: 6,
    category: "Incident Response",
    icon: "alert-triangle",
    color: "yellow",
    tools: [
      { name: "Alert Triage", level: "Advanced" },
      { name: "Malware Analysis", level: "Intermediate" },
      { name: "Forensics", level: "Intermediate" }
    ],
    description: "Security alert handling, incident investigation, root cause analysis",
    skills: ["Phishing analysis", "Malware investigation", "Containment", "Recovery procedures"]
  },
  {
    id: 7,
    category: "Scripting & Automation",
    icon: "code",
    color: "green",
    tools: [
      { name: "Python", level: "Advanced" },
      { name: "Bash", level: "Intermediate" },
      { name: "PowerShell", level: "Beginner" }
    ],
    description: "Security automation, custom reconnaissance tools, log parsing",
    skills: ["Tool development", "Automation scripts", "API integration", "Data parsing"]
  },
  {
    id: 8,
    category: "Cloud & Infrastructure",
    icon: "cloud",
    color: "indigo",
    tools: [
      { name: "Cloudflare", level: "Advanced" },
      { name: "VPN Management", level: "Advanced" },
      { name: "CDN Security", level: "Intermediate" }
    ],
    description: "Cloud security posture, CDN hardening, infrastructure protection",
    skills: ["DDoS mitigation", "WAF configuration", "Access control", "High availability"]
  }
];

export const projects = [
  {
    id: 1,
    title: "SIEM/Splunk Lab Setup & Analysis",
    category: "Security Monitoring",
    tags: ["SIEM LAB", "THREAT DETECTION"],
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    summary: "Built and configured enterprise SIEM lab using Splunk to detect and analyze attack patterns including brute force, DDoS, RCE, and malware persistence.",
    description: "Designed and deployed a comprehensive SIEM lab environment using Splunk Enterprise to simulate real-world security monitoring scenarios. Successfully ingested logs from multiple sources, created correlation rules, and detected various attack patterns.",
    tools: ["Splunk Enterprise", "Sysmon", "Wireshark", "Python"],
    outcomes: [
      "Real-time threat detection and alert generation",
      "Custom correlation rules for attack pattern identification",
      "Comprehensive dashboard for security operations monitoring",
      "Automated log parsing and analysis workflows"
    ],
    diagram: "siem-lab-architecture"
  },
  {
    id: 2,
    title: "Linux-Based Penetration Testing Lab",
    category: "VAPT",
    tags: ["PENETRATION TESTING", "RED TEAM"],
    thumbnail: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?w=800&h=600&fit=crop",
    summary: "Simulated real-world penetration testing scenarios including reconnaissance, exploitation, traffic analysis, and malware analysis on Linux environments.",
    description: "Established a comprehensive penetration testing lab using Kali Linux and Ubuntu to practice offensive security techniques. Executed full kill-chain attacks from reconnaissance through post-exploitation.",
    tools: ["Kali Linux", "Metasploit", "Burp Suite", "Nmap", "Wireshark"],
    outcomes: [
      "Hands-on experience with complete attack lifecycle",
      "Proficiency in exploitation and privilege escalation",
      "Network packet analysis and traffic inspection skills",
      "Malware analysis and reverse engineering fundamentals"
    ],
    diagram: "pentest-lab-network"
  },
  {
    id: 3,
    title: "Python Security Automation Tools",
    category: "Automation",
    tags: ["AUTOMATION", "PYTHON"],
    thumbnail: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=800&h=600&fit=crop",
    summary: "Developed Python automation tools for reconnaissance workflows including Google dorking, URL/parameter extraction, and URL categorization.",
    description: "Created custom Python scripts to automate repetitive security tasks and enhance reconnaissance efficiency. The tools streamline information gathering and improve assessment accuracy.",
    tools: ["Python", "Requests", "BeautifulSoup", "Regex", "Selenium"],
    outcomes: [
      "Automated Google dorking for information disclosure",
      "Intelligent URL and parameter extraction from web apps",
      "Smart categorization for targeted vulnerability testing",
      "Significant time reduction in reconnaissance phase"
    ],
    diagram: "automation-workflow"
  }
];

export const skills = {
  core: [
    "Vulnerability Assessment & Penetration Testing (VAPT)",
    "Security Operations Center (SOC) Analysis",
    "MITRE ATT&CK Framework",
    "Network Security & Analysis",
    "Phishing & Malware Analysis",
    "IDS/IPS Configuration",
    "SIEM/Splunk Administration",
    "Threat Intelligence & Hunting"
  ],
  tools: [
    "Burp Suite Pro",
    "Metasploit Framework",
    "OWASP ZAP",
    "Nmap",
    "Wireshark",
    "Splunk",
    "Wazuh",
    "Nessus",
    "Cloudflare",
    "Python"
  ]
};

export const driveMotivation = {
  title: "What Drives Me",
  content: "Cybersecurity is not just about finding vulnerabilities—it's about building resilient architectures that prevent them. Every security gap I identify is an opportunity to strengthen digital defenses and protect what matters most.",
  quote: "I bridge the gap between Vulnerability Assessment and Incident Response. I don't just find vulnerabilities—I build the architectures to stop them.",
  openTo: "Open to SOC Analyst roles and offensive security opportunities"
};
