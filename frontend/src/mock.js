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
    title: "AWS Phishing Campaign - Email Security Investigation",
    category: "Email Security",
    thumbnail: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop",
    summary: "First-ever email analysis investigating AWS Free Tier spoofed alert with malicious executable attachment delivered via anonymous mailer.",
    date: "February 2026",
    severity: "High",
    socReport: {
      detection: {
        summary: "On February 28, 2026 at 06:20 UTC, a sophisticated phishing email impersonating AWS Free Tier alert was detected in user inbox. Spoofed sender used emkei.cz anonymous mailer with executable disguised as PDF billing receipt.",
        alertSource: "Proton Mail Spam Filter (Score: 101/100) + Manual User Report",
        initialIndicators: [
          "SPF/DKIM/DMARC authentication failures (all 3 failed)",
          "Suspicious attachment: AWS_Billing_receipt.pdf.exe (PE32 executable)",
          "Reply-To mismatch: bobtheattacker@proton.me (not AWS domain)",
          "Origin from emkei.cz [114.29.236.247] - known anonymous mail relay",
          "Message-ID domain (emkei.cz) diverges from claimed sender (amazonaws.com)"
        ],
        mitreAttack: [
          "T1566.001 - Spearphishing Attachment",
          "T1204.002 - User Execution: Malicious File",
          "T1036.007 - Masquerading: Double File Extension"
        ],
        killChainPhase: "Delivery (Weaponization complete, Exploitation blocked)"
      },
      investigation: {
        summary: "Deep email forensics analysis using header inspection, authentication validation (SPF/DKIM/DMARC), body analysis, and attachment examination. Phishing email originated from emkei.cz anonymous relay service, spoofing AWS infrastructure to deliver Windows malware disguised as PDF.",
        rootCause: "Attacker leveraged emkei.cz public anonymous mailer to spoof AWS Free Tier alert. Email authentication bypass attempt using subdomain spoofing (costalerts.amazonaws.com - non-existent AWS subdomain). Double-extension technique used to disguise PE32 executable as PDF document.",
        timeline: [
          { time: "06:20:23 UTC", event: "Phishing email delivered to alicethevictim@proton.me from emkei.cz [114.29.236.247]", phase: "Detection" },
          { time: "06:25:00 UTC", event: "L1 SOC analyst initiated investigation - email artifact loaded for triage", phase: "Triage" },
          { time: "06:28:00 UTC", event: "Email header analysis complete - all authentication checks failed (SPF/DKIM/DMARC)", phase: "Analysis" },
          { time: "06:33:00 UTC", event: "HTML body decoded - impersonation technique documented, legitimate AWS logo fetched from CDN", phase: "Analysis" },
          { time: "06:40:00 UTC", event: "Attachment identified as PE32 executable (not PDF) - MZ magic bytes confirmed", phase: "Forensics" },
          { time: "06:45:00 UTC", event: "IOCs extracted (file hashes, attacker email, relay IP) - escalated to L2 for malware analysis", phase: "Escalation" }
        ],
        forensicFindings: [
          {
            title: "Email Header Analysis - Domain Spoofing",
            description: "From header claims 'freetier@costalerts.amazonaws.com' but Message-ID reveals origin: emkei.cz. Subdomain 'costalerts' is fabricated - AWS billing alerts originate from @aws.amazon.com or @amazon.com, not costalerts subdomain. Return-Path spoofed to match From address.",
            evidence: "Message-ID: <20260228062015.B553193F@emkei.cz>, From: freetier@costalerts.amazonaws.com, Received: from emkei.cz [114.29.236.247]",
            mitreAttack: "T1598.003 - Phishing for Information (Email Spoofing)"
          },
          {
            title: "Email Authentication Failures - SPF/DKIM/DMARC",
            description: "SPF: NONE/FAIL - Origin IP 114.29.236.247 (emkei.cz) not authorized sender for amazonaws.com. DKIM: NONE - No signature present, message integrity unverifiable. DMARC: FAIL (p=quarantine) - Both SPF and DKIM alignment failed, confirming domain spoofing.",
            evidence: "Authentication-Results: spf=none smtp.mailfrom=costalerts.amazonaws.com; dkim=none; dmarc=fail (p=quarantine dis=none)",
            mitreAttack: "T1071.003 - Application Layer Protocol: Mail Protocols"
          },
          {
            title: "Reply-To Hijacking - Credential Collection Tactic",
            description: "Reply-To explicitly set to 'bobtheattacker@proton.me' - attacker-controlled Proton Mail inbox. Any victim reply with credentials goes directly to attacker, bypassing network-layer detection. Low-tech exfiltration method that evades URL scanners.",
            evidence: "Reply-To: bobtheattacker@proton.me (diverges from From: amazonaws.com), X-Spam-Score: 101",
            mitreAttack: "T1078 - Valid Accounts (AWS Credential Targeting)"
          },
          {
            title: "Social Engineering - Fabricated AWS Account Data",
            description: "HTML body contained realistic AWS Free Tier usage data: Account ID 533261676, 85% usage threshold, EC2 644.73 hrs, VPC 646 hrs. Genuine AWS logo fetched from legitimate CDN (d1.awsstatic.com). Financial anxiety trigger (overage implies unexpected charges) reduces victim's critical thinking.",
            evidence: "HTML body analysis, AWS logo URL: https://d1.awsstatic.com/logos/aws-logo-square-300.png, Call-to-action links to real https://aws.amazon.com/console/",
            mitreAttack: "T1566 - Phishing (Social Engineering)"
          },
          {
            title: "Malicious Attachment - Double Extension Masquerade",
            description: "Attachment 'AWS_Billing_receipt.pdf.exe' identified as PE32 executable (console) Intel 80386, compiled with MinGW GCC. Windows hides '.exe' extension by default, displaying as 'AWS_Billing_receipt.pdf' to unprepared users. MZ magic bytes (4D 5A 90 00) confirm Windows PE format, not PDF.",
            evidence: "SHA-256: e444306db6a33902958eabc0c0db7b4e05cd756834cd6cff7923ce930972140d, MD5: 428ecfdddcccc962a2cd9ca317da94da, File Type: PE32 executable, MIME: application/x-msdownload, Size: 41.2 KB",
            mitreAttack: "T1036.007 - Masquerading: Double File Extension"
          }
        ],
        toolsUsed: [
          "Email Header Analyzer",
          "SPF Record Checker",
          "DKIM Validator",
          "DMARC Policy Analyzer",
          "PhishTool (Email Forensics Platform)",
          "Base64 Decoder (HTML Body Analysis)",
          "File Magic Bytes Inspector",
          "SHA-256/MD5 Hash Generator",
          "WHOIS Lookup (emkei.cz)",
          "Proton Mail Webmail Interface"
        ]
      },
      impact: {
        severity: "High",
        scope: {
          affectedSystems: "1 user email account (alicethevictim@proton.me) - no execution occurred, attachment not opened",
          dataLoss: "No data exfiltration - user did not reply or execute attachment. Potential AWS credential theft blocked.",
          downtime: "0 minutes - proactive detection prevented compromise",
          businessImpact: "Minimal - Single targeted user, no credential compromise, no AWS account access. High potential impact if executed (account takeover, resource abuse, unexpected billing)."
        },
        affectedAssets: [
          "Email Account: alicethevictim@proton.me",
          "Target Platform: AWS Free Tier Account (ID: 533261676 - fabricated)",
          "Credential Store: ~/.aws/credentials (targeted for exfiltration if malware executed)"
        ],
        estimatedCost: "$0 (incident blocked) | Potential: $5,000+ (AWS resource abuse if account compromised)"
      },
      response: {
        containment: [
          "Quarantined phishing email in Proton Mail - moved to spam folder immediately",
          "Blocked sender domain 'emkei.cz' at mail gateway level (expected IP rotation - domain block more durable)",
          "Flagged attacker email 'bobtheattacker@proton.me' as known malicious actor across mail platforms",
          "Added attachment SHA-256 hash to email gateway attachment filter deny list"
        ],
        eradication: [
          "Deleted malicious email from user inbox after IOC extraction",
          "Pushed file hash (SHA-256: e444306d..., MD5: 428ecfdd...) to EDR endpoint deny list",
          "Removed any cached copies of attachment from email client",
          "Verified no execution occurred via process logs and file access logs"
        ],
        recovery: [
          "User account verified clean - no compromise detected",
          "No AWS credential reset required (credentials never exposed)",
          "Email filtering rules updated to catch similar patterns",
          "User informed and provided phishing awareness guidance"
        ],
        communication: [
          "Notified user (alicethevictim) within 25 minutes of detection - explained phishing tactic",
          "Security advisory sent to IT team highlighting emkei.cz anonymous relay abuse",
          "IOCs shared with email gateway admin for filter tuning",
          "L2 malware analysis team briefed on PE32 executable for sandboxing (escalated at +25 min)"
        ]
      },
      lessonsLearned: {
        whatWorkedWell: [
          "Proton Mail spam filter scored email 101/100 - correctly flagged as suspicious",
          "User reported suspicious email instead of clicking - security awareness training effective",
          "Rapid L1 triage (5 min response time) prevented potential compromise",
          "Email header analysis immediately identified anonymous relay origin (emkei.cz Message-ID)",
          "Comprehensive IOC extraction (hashes, IPs, emails) completed within 20 minutes"
        ],
        areasForImprovement: [
          "Spam filter routed flagged email to inbox despite 101/100 score - threshold may need adjustment",
          "No automatic quarantine of emails from known anonymous relay services (emkei.cz, guerrillamail, etc.)",
          "Email gateway lacked Reply-To mismatch detection rule (From domain vs Reply-To domain divergence)",
          "No attachment sandboxing before delivery - double-extension executables should auto-quarantine",
          "DMARC policy on amazonaws.com is 'quarantine' not 'reject' - allows some spoofed emails through"
        ],
        mitreMapping: "This incident mapped to MITRE ATT&CK tactics: Initial Access (T1566 - Phishing), Execution (T1204 - User Execution - blocked), Defense Evasion (T1036 - Masquerading via double extension), Collection (T1078 - Valid Accounts targeting), Command & Control (T1071 - Mail Protocols via Reply-To hijack)",
        killChainMapping: "Cyber Kill Chain phases observed: Reconnaissance (AWS Free Tier user profiling) → Weaponization (PE32 compiled, double extension applied) → Delivery (spoofed email via emkei.cz) → Exploitation (BLOCKED - user did not execute) → Installation (BLOCKED) → C2 (Reply-To hijack ready but not triggered) → Actions on Objectives (AWS credential theft intended but not achieved)"
      }
    }
  },
  {
    id: 2,
    title: "SSH Brute-Force Attack on AWS EC2",
    category: "Threat Hunting",
    thumbnail: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=800&h=600&fit=crop",
    summary: "Detected and mitigated coordinated SSH brute-force attack targeting AWS EC2 instance with automated credential enumeration.",
    date: "January 2025",
    severity: "High",
    detailedReport: {
      executiveSummary: "Detected a coordinated SSH brute-force attack targeting self-managed AWS EC2 Ubuntu instance through routine log monitoring. Analyzed hundreds of failed authentication attempts from two external IPs attempting username enumeration and root account compromise. Extracted IOCs, validated threat intelligence correlation with known botnet activity, and successfully mitigated the attack by blocking malicious sources and enforcing SSH key-based authentication. No unauthorized access achieved; system integrity validated clean.",
      timeline: [
        { time: "T+0", event: "AWS EC2 Ubuntu instance deployed with SSH (port 22) exposed for SOC lab practice", status: "deployment" },
        { time: "T+3 days", event: "Routine monitoring of /var/log/auth.log identified anomalous authentication patterns", status: "detected" },
        { time: "T+3d 10min", event: "Executed targeted log parsing: grep 'sshd' /var/log/auth.log | grep -i 'Failed password' - isolated attack signatures", status: "analyzed" },
        { time: "T+3d 25min", event: "Identified two primary source IPs (172.235.168.148, 209.38.92.76) with hundreds of failed login attempts", status: "analyzed" },
        { time: "T+3d 35min", event: "Behavioral analysis revealed 6-7 second request intervals indicating automated tooling (Hydra/Medusa pattern)", status: "analyzed" },
        { time: "T+3d 45min", event: "Threat intelligence lookup confirmed both IPs flagged for brute-force campaigns, unauthorized scanning, credential stuffing", status: "validated" },
        { time: "T+3d 50min", event: "Attack classified as SSH Brute-Force with username enumeration (T1110.001, T1078)", status: "classified" },
        { time: "T+3d 55min", event: "Blocked malicious IPs at firewall level - immediate containment achieved", status: "contained" },
        { time: "T+3d 60min", event: "Disabled password-based authentication in /etc/ssh/sshd_config (PasswordAuthentication no)", status: "hardened" },
        { time: "T+3d 65min", event: "Enforced SSH key-based authentication - eliminated password attack surface", status: "hardened" },
        { time: "T+3d 75min", event: "Validated system integrity via process inspection, file integrity checks - confirmed no compromise", status: "resolved" }
      ],
      findings: [
        {
          title: "High-Volume Automated Attack Pattern",
          description: "Parsed logs revealed hundreds of failed SSH login attempts within compressed timeframes. Consistent 6-7 second intervals between authentication requests indicated automated brute-force tooling (likely Hydra, Medusa, or custom scripts). Attack sustained over multiple hours demonstrating persistent credential enumeration effort.",
          severity: "high",
          evidence: "grep output: 400+ 'Failed password' entries, timestamps showing 6-7s intervals, user-agent fingerprint consistent with automation"
        },
        {
          title: "Username Enumeration & Dictionary Attack",
          description: "Attacker systematically attempted multiple invalid usernames (admin, test, user, ubuntu, oracle, postgres) before focusing on root account. Pattern indicates dictionary-based username enumeration followed by targeted root compromise attempts. Sequential username variation confirms reconnaissance phase preceding brute-force escalation.",
          severity: "high",
          evidence: "Log analysis: 15+ unique invalid usernames attempted, 200+ root login failures, sequential alphabetical/common username patterns"
        },
        {
          title: "Malicious Source IP Correlation - Botnet Activity",
          description: "Threat intelligence analysis of source IPs (172.235.168.148, 209.38.92.76) returned reputation scores flagging both as active brute-force nodes. IPs previously associated with credential stuffing campaigns, SSH scanning operations, and distributed attack infrastructure. Geographic origin mismatched legitimate business access patterns (unauthorized foreign source).",
          severity: "critical",
          evidence: "AbuseIPDB reputation: 172.235.168.148 (98% malicious confidence, 47 reports), 209.38.92.76 (95% confidence, 33 reports), linked to botnet C2 infrastructure"
        },
        {
          title: "Root Account Targeting - Privilege Escalation Intent",
          description: "Following failed username enumeration, attacker concentrated 80% of attempts on root account compromise. Demonstrates understanding of Linux privilege hierarchy and intent to achieve immediate full system control. Attack methodology aligned with T1078 (Valid Accounts) MITRE technique - targeting default administrative credentials.",
          severity: "critical",
          evidence: "Log grep: 320+ 'Failed password for root' entries, root-focused attack sustained 90+ minutes after initial failed generic usernames"
        }
      ],
      recommendations: [
        "Implement fail2ban or OSSEC intrusion prevention to auto-block IPs after threshold failed attempts (e.g., 5 failures = 1-hour ban)",
        "Deploy CloudWatch or centralized SIEM (Splunk/ELK) for real-time SSH authentication alerting - reduce detection lag from manual log review",
        "Enforce SSH key-based authentication organization-wide - disable password auth on all production/lab instances",
        "Change default SSH port from 22 to non-standard high port (e.g., 2222) to reduce automated scanner hits",
        "Implement IP allowlisting for SSH access where feasible - restrict connection sources to known administrator IPs",
        "Enable MFA for SSH using Google Authenticator PAM module for defense-in-depth even with key-based auth",
        "Schedule regular threat intelligence enrichment of auth.log source IPs to proactively block known malicious actors"
      ],
      toolsUsed: ["grep (Linux CLI)", "auth.log Analysis", "Threat Intelligence Platforms", "AWS EC2 Firewall", "SSH Configuration Hardening", "AbuseIPDB", "Ubuntu UFW Firewall"]
    }
  },
  {
    id: 3,
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
    id: 4,
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
    id: 5,
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
    id: 6,
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
    id: 7,
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
