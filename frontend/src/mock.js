export const studentInfo = {
  name: "Sanjeev Kumar",
  title: "Cybersecurity Professional | VAPT & SOC Specialist",
  bio: "Cybersecurity professional specializing in Vulnerability Assessment & Penetration Testing (VAPT) and Security Operations, with proven hands-on experience in detecting, analyzing, and exploiting security weaknesses across corporate environments and real-world lab simulations.",
  email: "sanjeevkumar25857@gmail.com",
  phone: "+91 78768-21051",
  linkedin: "https://www.linkedin.com/in/sanjeev-kumar-270b6321a/",
  github: "https://github.com/s-anjeev",
  tryhackme: "https://tryhackme.com/p/sanjeevkumar25857",
  resumeUrl: "https://customer-assets.emergentagent.com/job_response-showcase/artifacts/kiyt4ww9_Sanjeev-kumar-SOC%20%282%29.pdf"
};

export const experiences = [
  {
    id: 1,
    year: "2024-25",
    role: "Cyber Security Intern",
    company: "AMAHA (innerHour)",
    description: "Conducted penetration testing on web applications and APIs, identifying 20+ vulnerabilities (5 critical). Managed VPN infrastructure for 400+ employees and implemented Cloudflare CDN, reducing web-based attacks by ~30%. Led bug bounty triage (35+ reports) and triaged 30+ security alerts, performing phishing and malware analysis."
  },
  {
    id: 2,
    year: "2024",
    role: "VAPT Intern",
    company: "SECURE SLEUTHS",
    description: "Performed VAPT on web applications, APIs, and network infrastructure for 5+ clients, identifying 25+ vulnerabilities. Analyzed and validated vulnerabilities (SQLI, XSS, CSRF) using Burp Suite, OWASP ZAP, Metasploit, and Nmap, improving accuracy and reducing false positives."
  }
];

export const projects = [
  {
    id: 1,
    title: "Ransomware Attack Investigation",
    category: "Incident Response",
    thumbnail: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=600&fit=crop",
    summary: "Complete forensic investigation of a ransomware attack affecting corporate infrastructure.",
    date: "December 2024",
    severity: "Critical",
    socReport: {
      detection: {
        summary: "On December 15, 2024 at 09:15 AM, our SOC detected anomalous encryption activity across multiple file servers through SIEM correlation rules.",
        alertSource: "SIEM - File Integrity Monitoring (FIM) + EDR Alerts",
        initialIndicators: [
          "Mass file modifications across 5 file servers (3,247 files affected)",
          "Unusual process spawning (suspicious executable in %TEMP% directory)",
          "Spike in SMB traffic from compromised user workstation",
          "Multiple users reporting inability to access network shares"
        ],
        mitreAttack: ["T1486 - Data Encrypted for Impact", "T1059 - Command and Scripting Interpreter"],
        killChainPhase: "Actions on Objectives"
      },
      investigation: {
        summary: "Deep-dive forensic analysis revealed a LockBit 3.0 ransomware variant delivered via spear-phishing campaign targeting HR department.",
        rootCause: "Phishing email with malicious macro-enabled Excel attachment bypassed email gateway filters. User executed macro, downloading ransomware payload.",
        timeline: [
          { time: "09:15 AM", event: "Initial SIEM alert - Mass file encryption detected", phase: "Detection" },
          { time: "09:30 AM", event: "IR team activated, affected systems isolated", phase: "Containment" },
          { time: "09:45 AM", event: "Memory dump collected from patient zero workstation", phase: "Forensics" },
          { time: "10:30 AM", event: "Ransomware variant identified as LockBit 3.0 via YARA rules", phase: "Analysis" },
          { time: "11:00 AM", event: "Lateral movement vector identified (compromised admin credentials)", phase: "Analysis" },
          { time: "11:45 AM", event: "All IOCs extracted and threat hunting initiated network-wide", phase: "Threat Hunting" }
        ],
        forensicFindings: [
          {
            title: "Initial Access Vector",
            description: "Phishing email delivered to HR inbox with malicious Excel attachment (Invoice_2024.xlsm). Macro executed PowerShell script downloading ransomware from hxxp://185[.]220[.]101[.]42/payload.exe",
            evidence: "Email logs, attachment hash: 7a3f5e9c2b1d..., PowerShell logs (Event ID 4104)",
            mitreAttack: "T1566.001 - Spearphishing Attachment"
          },
          {
            title: "Privilege Escalation & Lateral Movement",
            description: "Attackers leveraged compromised credentials (HR manager account) to authenticate to domain controller, then moved laterally via SMB to file servers.",
            evidence: "Windows Event Logs (Event ID 4624 - Logon Type 3, Event ID 4672 - Special Logon), Kerberos ticket analysis",
            mitreAttack: "T1078 - Valid Accounts, T1021.002 - SMB/Windows Admin Shares"
          },
          {
            title: "Encryption Execution",
            description: "Ransomware encrypted 3,247 files across 5 file servers using AES-256 encryption. Ransom note dropped in each directory: README_RESTORE.txt",
            evidence: "File system analysis, MFT timeline, encryption markers, ransom note analysis",
            mitreAttack: "T1486 - Data Encrypted for Impact"
          }
        ],
        toolsUsed: ["Splunk SIEM", "Volatility (Memory Forensics)", "FTK Imager", "Wireshark", "YARA", "CrowdStrike Falcon EDR"]
      },
      impact: {
        severity: "Critical",
        scope: {
          affectedSystems: "5 file servers, 1 workstation (patient zero), 247 user accounts affected",
          dataLoss: "No data exfiltration confirmed. 3,247 files encrypted (100% recovered from backups)",
          downtime: "4 hours total - File server unavailability from 09:15 AM to 01:15 PM",
          businessImpact: "Minimal - Operations continued with degraded file access. No customer-facing impact."
        },
        affectedAssets: [
          "FILESRV-01 through FILESRV-05 (Windows Server 2019)",
          "HR-WORKSTATION-42 (Patient Zero)",
          "Domain: CORP.LOCAL (admin credentials compromised)"
        ],
        estimatedCost: "$45,000 (incident response labor, backup restoration, 4 hours productivity loss)"
      },
      response: {
        containment: [
          "Immediately isolated affected file servers from network (09:30 AM)",
          "Disabled compromised HR manager account across all systems",
          "Blocked malicious IP (185.220.101.42) at firewall and web proxy",
          "Quarantined patient zero workstation for forensic imaging"
        ],
        eradication: [
          "Removed ransomware artifacts from all affected systems",
          "Reset passwords for all privileged accounts (200+ accounts)",
          "Rebuilt patient zero workstation from gold image",
          "Deployed updated EDR signatures for LockBit 3.0 variant"
        ],
        recovery: [
          "Restored 3,247 encrypted files from backup (verified integrity: 100%)",
          "File servers brought back online at 01:15 PM (verified clean)",
          "Conducted post-recovery integrity checks via file hashing",
          "Monitored for 72 hours post-incident - no reinfection detected"
        ],
        communication: [
          "Notified executive leadership within 30 minutes of detection",
          "Coordinated with Legal and Compliance teams (no breach notification required)",
          "Sent company-wide security advisory on phishing awareness",
          "Briefed IT staff on IOCs and defensive measures implemented"
        ]
      },
      lessonsLearned: {
        whatWorkedWell: [
          "SIEM detection rules triggered within minutes of encryption activity",
          "Incident response team mobilized rapidly (15-minute response time)",
          "Backup strategy proved effective - 100% data recovery with no loss",
          "Network segmentation limited ransomware spread to file servers only"
        ],
        areasForImprovement: [
          "Email gateway failed to detect malicious macro - needs tuning",
          "Privileged account credentials stored in browser on user workstation",
          "Lack of MFA on administrative accounts enabled lateral movement",
          "EDR agent not installed on 2 of 5 file servers (visibility gap)"
        ],
        recommendations: [
          {
            priority: "Critical",
            action: "Implement MFA for all administrative and privileged accounts",
            owner: "IT Security Team",
            timeline: "30 days"
          },
          {
            priority: "High",
            action: "Deploy advanced email threat protection (sandbox analysis for attachments)",
            owner: "Email Security Team",
            timeline: "60 days"
          },
          {
            priority: "High",
            action: "Conduct organization-wide phishing simulation and security awareness training",
            owner: "Security Awareness Team",
            timeline: "45 days"
          },
          {
            priority: "Medium",
            action: "Implement application whitelisting on all endpoints to prevent unauthorized executable execution",
            owner: "Endpoint Security Team",
            timeline: "90 days"
          },
          {
            priority: "Medium",
            action: "Enhance network segmentation - isolate file servers in dedicated VLAN with stricter access controls",
            owner: "Network Team",
            timeline: "90 days"
          }
        ],
        mitreMapping: "This incident mapped to MITRE ATT&CK tactics: Initial Access (T1566), Execution (T1059), Privilege Escalation (T1078), Lateral Movement (T1021), Impact (T1486)",
        killChainMapping: "Cyber Kill Chain phases observed: Delivery (phishing) → Exploitation (macro execution) → Installation (ransomware payload) → Command & Control (minimal) → Actions on Objectives (encryption)"
      }
    }
  },
  {
    id: 2,
    title: "Advanced Persistent Threat Detection",
    category: "Threat Hunting",
    thumbnail: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop",
    summary: "Proactive threat hunting operation that uncovered a long-term APT campaign.",
    date: "November 2024",
    severity: "High",
    detailedReport: {
      executiveSummary: "Through proactive threat hunting activities, we identified indicators of an Advanced Persistent Threat that had maintained access to the network for approximately 47 days. The threat actor was using sophisticated evasion techniques and had established multiple persistence mechanisms.",
      timeline: [
        { time: "Week 1", event: "Anomalous DNS queries detected during routine analysis", status: "detected" },
        { time: "Week 2", event: "Memory forensics revealed injected processes", status: "analyzed" },
        { time: "Week 2", event: "Command and control infrastructure identified", status: "analyzed" },
        { time: "Week 3", event: "All persistence mechanisms located and documented", status: "contained" },
        { time: "Week 3", event: "Coordinated remediation across all affected systems", status: "resolved" }
      ],
      findings: [
        {
          title: "Command & Control Communication",
          description: "Beacon traffic to external IP every 6 hours using DNS tunneling technique.",
          severity: "critical",
          evidence: "DNS logs, packet captures, IOC: 185.220.101.x"
        },
        {
          title: "Persistence Mechanisms",
          description: "Registry run keys, scheduled tasks, and WMI event subscriptions discovered.",
          severity: "high",
          evidence: "Registry analysis, task scheduler logs"
        },
        {
          title: "Data Staging",
          description: "Compressed archives found in temp directories containing sensitive documents.",
          severity: "high",
          evidence: "File system forensics, 14.7 GB staged data"
        }
      ],
      recommendations: [
        "Deploy EDR solution across all endpoints",
        "Implement DNS monitoring and filtering",
        "Establish baseline for normal network behavior",
        "Conduct regular threat hunting exercises",
        "Review and harden registry and WMI configurations"
      ],
      toolsUsed: ["Splunk", "Volatility", "YARA", "Wireshark"]
    }
  },
  {
    id: 3,
    title: "Insider Threat Investigation",
    category: "Digital Forensics",
    thumbnail: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&h=600&fit=crop",
    summary: "Investigation of suspected data exfiltration by internal employee.",
    date: "October 2024",
    severity: "Medium",
    detailedReport: {
      executiveSummary: "Following an alert from DLP systems, we investigated potential data exfiltration by an employee scheduled to depart the organization. Analysis confirmed unauthorized transfer of proprietary data to personal cloud storage.",
      timeline: [
        { time: "Day 1 - 02:30 PM", event: "DLP alert triggered for large file upload", status: "detected" },
        { time: "Day 1 - 03:00 PM", event: "User activity review initiated", status: "responded" },
        { time: "Day 2 - 10:00 AM", event: "Forensic imaging of workstation completed", status: "analyzed" },
        { time: "Day 3 - 02:00 PM", event: "Evidence of data exfiltration confirmed", status: "analyzed" },
        { time: "Day 4 - 11:00 AM", event: "Legal and HR notified, account disabled", status: "resolved" }
      ],
      findings: [
        {
          title: "Unauthorized Data Transfer",
          description: "127 files containing proprietary information uploaded to personal Dropbox account.",
          severity: "high",
          evidence: "Browser history, DLP logs, cloud service logs"
        },
        {
          title: "USB Device Usage",
          description: "Multiple USB storage devices connected to workstation outside normal use.",
          severity: "medium",
          evidence: "Windows USB history, registry artifacts"
        },
        {
          title: "Email Forwarding",
          description: "Auto-forward rule created to send emails to personal Gmail account.",
          severity: "medium",
          evidence: "Exchange server logs, mailbox rules"
        }
      ],
      recommendations: [
        "Enhance DLP policies for departing employees",
        "Disable USB ports for high-risk users",
        "Implement email forwarding restrictions",
        "Conduct exit interviews with security checklist",
        "Regular audits of data access patterns"
      ],
      toolsUsed: ["FTK Imager", "EnCase", "DLP System", "Network Monitor"]
    }
  },
  {
    id: 4,
    title: "Phishing Campaign Analysis",
    category: "Email Security",
    thumbnail: "https://images.unsplash.com/photo-1563206767-5b18f218e8de?w=800&h=600&fit=crop",
    summary: "Analysis and response to targeted phishing campaign affecting 200+ employees.",
    date: "September 2024",
    severity: "Medium",
    detailedReport: {
      executiveSummary: "A sophisticated spear-phishing campaign targeted employees with spoofed executive emails. Quick detection and response prevented credential compromise, though 23 users initially clicked malicious links.",
      timeline: [
        { time: "08:00 AM", event: "First phishing email reported by vigilant employee", status: "detected" },
        { time: "08:15 AM", event: "Email security team alerted", status: "responded" },
        { time: "08:30 AM", event: "All related emails quarantined (217 total)", status: "contained" },
        { time: "09:00 AM", event: "Affected users identified and contacted", status: "analyzed" },
        { time: "10:30 AM", event: "Credential resets completed, no compromise confirmed", status: "resolved" }
      ],
      findings: [
        {
          title: "Email Spoofing",
          description: "Attacker used display name spoofing to impersonate CEO, bypassing initial filters.",
          severity: "high",
          evidence: "Email headers, SPF/DKIM analysis"
        },
        {
          title: "Credential Harvesting Page",
          description: "Sophisticated fake login page hosted on compromised legitimate domain.",
          severity: "high",
          evidence: "URL analysis, domain reputation, page source"
        },
        {
          title: "User Interaction",
          description: "23 users clicked links, 5 entered credentials before page was taken down.",
          severity: "medium",
          evidence: "Proxy logs, user reports, web server logs"
        }
      ],
      recommendations: [
        "Implement DMARC policy to reject spoofed emails",
        "Deploy email banner for external senders",
        "Enhanced security awareness training",
        "Implement URL rewriting and sandboxing",
        "Regular phishing simulation exercises"
      ],
      toolsUsed: ["Email Security Gateway", "PhishTool", "URLScan", "VirusTotal"]
    }
  },
  {
    id: 5,
    title: "Web Application Breach",
    category: "Application Security",
    thumbnail: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=600&fit=crop",
    summary: "Investigation of SQL injection attack on customer-facing web application.",
    date: "August 2024",
    severity: "Critical",
    detailedReport: {
      executiveSummary: "Automated scanning detected suspicious database queries originating from a customer portal. Investigation revealed successful SQL injection attack that exposed customer records. Immediate patching and customer notification procedures were initiated.",
      timeline: [
        { time: "11:45 PM", event: "Database monitoring alerts on abnormal query patterns", status: "detected" },
        { time: "12:00 AM", event: "On-call engineer initiated investigation", status: "responded" },
        { time: "12:30 AM", event: "SQL injection vulnerability confirmed", status: "analyzed" },
        { time: "01:00 AM", event: "Application taken offline for emergency patching", status: "contained" },
        { time: "03:30 AM", event: "Patch deployed, application restored", status: "resolved" },
        { time: "Next Day", event: "Customer notification process initiated", status: "communication" }
      ],
      findings: [
        {
          title: "SQL Injection Vulnerability",
          description: "Unvalidated user input in search parameter allowed SQL injection in login form.",
          severity: "critical",
          evidence: "Application logs, database query logs, code review"
        },
        {
          title: "Data Exposure",
          description: "1,847 customer records accessed including names, emails, and hashed passwords.",
          severity: "critical",
          evidence: "Database audit logs, query analysis"
        },
        {
          title: "Attack Attribution",
          description: "Automated scanning tools from multiple IPs, likely opportunistic attack.",
          severity: "medium",
          evidence: "Web server logs, IP geolocation, user-agent analysis"
        }
      ],
      recommendations: [
        "Implement prepared statements for all database queries",
        "Deploy Web Application Firewall (WAF)",
        "Conduct regular security code reviews",
        "Implement input validation and sanitization",
        "Regular penetration testing of web applications",
        "Enhanced database activity monitoring"
      ],
      toolsUsed: ["Burp Suite", "SQLMap", "WAF Logs", "Database Auditing"]
    }
  },
  {
    id: 6,
    title: "Malware Outbreak Response",
    category: "Malware Analysis",
    thumbnail: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop",
    summary: "Rapid response to malware outbreak affecting multiple departments.",
    date: "July 2024",
    severity: "High",
    detailedReport: {
      executiveSummary: "A worm variant propagated through a network share, affecting 42 workstations across three departments. The malware was designed for cryptocurrency mining and network reconnaissance. Complete remediation achieved within 8 hours.",
      timeline: [
        { time: "01:00 PM", event: "Users report slow system performance", status: "detected" },
        { time: "01:30 PM", event: "Antivirus alerts on multiple endpoints", status: "responded" },
        { time: "02:00 PM", event: "Network share identified as infection vector", status: "analyzed" },
        { time: "02:30 PM", event: "Affected systems isolated", status: "contained" },
        { time: "05:00 PM", event: "Malware analysis completed", status: "analyzed" },
        { time: "09:00 PM", event: "All systems cleaned and verified", status: "resolved" }
      ],
      findings: [
        {
          title: "Propagation Method",
          description: "Worm spread through open network share with write permissions using autorun functionality.",
          severity: "high",
          evidence: "Network share logs, file creation timestamps"
        },
        {
          title: "Malicious Activity",
          description: "Cryptocurrency miner consuming 80%+ CPU, network scanning module active.",
          severity: "high",
          evidence: "Process analysis, network traffic, memory forensics"
        },
        {
          title: "Persistence Mechanism",
          description: "Created scheduled tasks and modified startup registry keys.",
          severity: "medium",
          evidence: "Task scheduler, registry analysis"
        }
      ],
      recommendations: [
        "Disable autorun functionality across all endpoints",
        "Review and restrict network share permissions",
        "Update endpoint protection signatures",
        "Implement network segmentation",
        "Deploy next-generation antivirus with behavioral detection"
      ],
      toolsUsed: ["Cuckoo Sandbox", "Process Hacker", "Autoruns", "Network Miner"]
    }
  }
];

export const tools = [
  {
    id: 1,
    name: "Wireshark",
    category: "Network Analysis",
    description: "Network protocol analyzer for packet capture and analysis",
    usage: "Captured and analyzed network traffic to identify command & control communications, data exfiltration attempts, and malicious network patterns. Used in 80% of investigations.",
    findings: "Discovered DNS tunneling, identified C2 beacon intervals, detected lateral movement via SMB, found data exfiltration over HTTPS.",
    icon: "Network"
  },
  {
    id: 2,
    name: "Volatility",
    category: "Memory Forensics",
    description: "Advanced memory forensics framework for RAM analysis",
    usage: "Performed memory dump analysis to uncover running processes, injected code, network connections, and encryption keys. Critical for APT investigations.",
    findings: "Revealed process injection techniques, uncovered hidden malware, extracted encryption keys, identified rootkit presence.",
    icon: "Brain"
  },
  {
    id: 3,
    name: "Splunk",
    category: "SIEM",
    description: "Security Information and Event Management platform",
    usage: "Aggregated and correlated logs from multiple sources to detect anomalies, track user activities, and identify security incidents in real-time.",
    findings: "Detected abnormal login patterns, identified privilege escalation, tracked lateral movement, correlated security events across systems.",
    icon: "Database"
  },
  {
    id: 4,
    name: "FTK Imager",
    category: "Digital Forensics",
    description: "Forensic imaging and data preview tool",
    usage: "Created forensic images of hard drives, extracted files, and analyzed file systems while maintaining chain of custody.",
    findings: "Recovered deleted files, found hidden partitions, extracted browser artifacts, preserved evidence for legal proceedings.",
    icon: "HardDrive"
  },
  {
    id: 5,
    name: "Burp Suite",
    category: "Web Security",
    description: "Web application security testing platform",
    usage: "Tested web applications for vulnerabilities including SQL injection, XSS, and authentication flaws during security assessments.",
    findings: "Identified SQL injection vulnerabilities, discovered XSS flaws, found authentication bypass, detected insecure API endpoints.",
    icon: "Globe"
  },
  {
    id: 6,
    name: "YARA",
    category: "Malware Detection",
    description: "Pattern matching tool for malware identification",
    usage: "Created custom rules to detect malware families and suspicious file patterns across file systems and memory dumps.",
    findings: "Identified malware variants, detected packed executables, found ransomware signatures, discovered APT toolsets.",
    icon: "Shield"
  },
  {
    id: 7,
    name: "Cuckoo Sandbox",
    category: "Malware Analysis",
    description: "Automated malware analysis system",
    usage: "Executed suspicious files in isolated environment to observe behavior, network activity, and system modifications.",
    findings: "Analyzed malware behavior, identified C2 infrastructure, documented file system changes, captured network indicators.",
    icon: "Box"
  },
  {
    id: 8,
    name: "EnCase",
    category: "Enterprise Forensics",
    description: "Enterprise digital forensics platform",
    usage: "Conducted comprehensive forensic investigations including data recovery, timeline analysis, and evidence documentation.",
    findings: "Created detailed timelines, recovered encrypted files, analyzed registry hives, documented chain of evidence.",
    icon: "Search"
  }
];

export const driveMotivation = {
  title: "What Drives Me",
  content: "Cybersecurity is not just about technology—it's about protecting people, organizations, and digital trust. Every incident investigation is a puzzle that requires analytical thinking, persistence, and creativity. I'm passionate about staying ahead of evolving threats and building robust defense mechanisms.",
  quote: "In cybersecurity, you're only as strong as your weakest link. My mission is to identify and strengthen those links before adversaries can exploit them.",
  passions: [
    {
      title: "Continuous Learning",
      description: "The threat landscape evolves daily. I dedicate time to studying new attack techniques, tools, and defense strategies."
    },
    {
      title: "Problem Solving",
      description: "Every security incident is unique. I thrive on the challenge of piecing together evidence and uncovering the full story."
    },
    {
      title: "Community Contribution",
      description: "Sharing knowledge through blogs, CTF participation, and mentoring aspiring security professionals."
    }
  ]
};
