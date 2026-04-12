import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Shield, Mail, Linkedin, Github, Download, 
  Network, Brain, Database, HardDrive, Globe, Box, Search, 
  ChevronRight, Calendar, MapPin, Briefcase, Award, Clock
} from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { studentInfo, experiences, projects, tools, driveMotivation } from '../mock';

const Home = () => {
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Parallax effect for sections
      const scrolled = window.scrollY;
      const parallaxElements = document.querySelectorAll('.parallax');
      parallaxElements.forEach((el) => {
        const speed = el.dataset.speed || 0.5;
        el.style.transform = `translateY(${scrolled * speed}px)`;
      });
    };

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);

    // Intersection Observer for scroll animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
        }
      });
    }, observerOptions);

    // Observe all elements with scroll-reveal classes
    const revealElements = document.querySelectorAll('[class*="scroll-reveal"]');
    revealElements.forEach((el) => observer.observe(el));

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      revealElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const getToolIcon = (iconName) => {
    const icons = {
      Network, Brain, Database, HardDrive, Globe, Shield, Box, Search
    };
    const IconComponent = icons[iconName] || Shield;
    return <IconComponent className="w-8 h-8" />;
  };

  const handleResumeDownload = () => {
    // Mock download functionality
    alert('Resume download feature - will be connected to actual file in backend');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-slate-900">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-slate-900/80 backdrop-blur-xl shadow-lg shadow-blue-900/20 border-b border-blue-700/30' : 'bg-transparent'}`
      }>
        <div className="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center">
          <div className="text-2xl font-light tracking-tight text-white">{studentInfo.name}</div>
          <div className="flex gap-8 items-center">
            <a href="#projects" className="text-sm text-blue-200 hover:text-white hover:translate-y-[-2px] transition-all duration-200">Work</a>
            <a href="#tools" className="text-sm text-blue-200 hover:text-white hover:translate-y-[-2px] transition-all duration-200">Tools</a>
            <a href="#contact" className="text-sm text-blue-200 hover:text-white hover:translate-y-[-2px] transition-all duration-200">Contact</a>
            <Button
              onClick={handleResumeDownload}
              variant="outline"
              size="sm"
              className="border-blue-400 text-blue-200 hover:bg-blue-500 hover:text-white hover:scale-105 transition-all duration-200">

              <Download className="w-4 h-4 mr-2" />
              Resume
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero / Intro Section */}
      <section className="min-h-screen flex items-center justify-center px-6 pt-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 via-transparent to-transparent pointer-events-none parallax" data-speed="0.3" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-600/20 via-transparent to-transparent pointer-events-none" />
        <div className="max-w-4xl text-center space-y-8 relative z-10">
          <div className="inline-flex items-center justify-center w-28 h-28 rounded-full bg-gradient-to-br from-blue-400 via-blue-500 to-cyan-500 mb-8 float-animation pulse-glow-animation shadow-2xl ring-4 ring-blue-400/20">
            <Shield className="w-14 h-14 text-white drop-shadow-lg" />
          </div>
          <h1 className="text-7xl md:text-9xl font-extralight tracking-tight leading-none text-white drop-shadow-2xl scroll-reveal-scale">
            {studentInfo.name}
          </h1>
          <p className="text-2xl font-light text-blue-100 tracking-wide drop-shadow-lg scroll-reveal stagger-1">
            {studentInfo.title}
          </p>
          <p className="text-lg text-blue-200 max-w-2xl mx-auto leading-relaxed drop-shadow-md scroll-reveal stagger-2">
            {studentInfo.bio}
          </p>
          <div className="flex gap-4 justify-center pt-8 scroll-reveal stagger-3">
            <a href={studentInfo.linkedin} target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="icon" className="border-blue-300 text-blue-100 hover:bg-blue-500 hover:border-blue-400 hover:scale-110 hover:rotate-6 transition-all duration-300 backdrop-blur-sm">
                <Linkedin className="w-5 h-5" />
              </Button>
            </a>
            <a href={studentInfo.github} target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="icon" className="border-blue-300 text-blue-100 hover:bg-blue-500 hover:border-blue-400 hover:scale-110 hover:rotate-6 transition-all duration-300 backdrop-blur-sm">
                <Github className="w-5 h-5" />
              </Button>
            </a>
            <a href={`mailto:${studentInfo.email}`}>
              <Button variant="outline" size="icon" className="border-blue-300 text-blue-100 hover:bg-blue-500 hover:border-blue-400 hover:scale-110 hover:rotate-6 transition-all duration-300 backdrop-blur-sm">
                <Mail className="w-5 h-5" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Career Timeline Section */}
      <section id="timeline" className="py-24 px-6 bg-slate-900 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-slate-900 to-slate-900 pointer-events-none parallax" data-speed="0.2" />
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-5xl font-light mb-4 text-center tracking-tight text-white scroll-reveal">Career Timeline</h2>
          <p className="text-center text-blue-300/80 mb-16 scroll-reveal stagger-1">Key milestones in my cybersecurity journey — from education to hands-on threat detection.</p>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-[15px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-cyan-500/50 via-blue-500/30 to-transparent" />
            
            <div className="space-y-12">
              {/* Education - Bottom/First */}
              <div className="relative scroll-reveal-left stagger-1">
                {/* Timeline Dot */}
                <div className="absolute left-0 top-6 w-8 h-8 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 ring-4 ring-slate-900 flex items-center justify-center">
                  <Award className="w-4 h-4 text-white" />
                </div>
                
                <div className="ml-16 bg-slate-800/60 backdrop-blur-sm rounded-xl p-6 border border-blue-700/30 hover:border-cyan-500/50 transition-all duration-500 hover:shadow-xl hover:shadow-cyan-900/20">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-xl font-light text-white mb-1">Bachelor of Computer Applications</h3>
                      <p className="text-cyan-400 text-sm font-medium">Himachal Pradesh Technical University</p>
                    </div>
                    <Badge variant="outline" className="border-cyan-500/50 text-cyan-300 bg-cyan-950/30">
                      Graduated
                    </Badge>
                  </div>
                  <p className="text-blue-200/70 text-sm leading-relaxed">
                    Built strong foundations in networking, operating systems, web application security, and cloud computing that serve as the backbone of cybersecurity expertise.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    <Badge variant="outline" className="border-blue-500/30 text-blue-300 bg-blue-950/30 text-xs">
                      Networking
                    </Badge>
                    <Badge variant="outline" className="border-blue-500/30 text-blue-300 bg-blue-950/30 text-xs">
                      Web Security
                    </Badge>
                    <Badge variant="outline" className="border-blue-500/30 text-blue-300 bg-blue-950/30 text-xs">
                      Cloud Computing
                    </Badge>
                  </div>
                </div>
              </div>

              {/* First Internship - SECURE SLEUTHS */}
              <div className="relative scroll-reveal-left stagger-2">
                {/* Timeline Dot */}
                <div className="absolute left-0 top-6 w-8 h-8 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 ring-4 ring-slate-900 flex items-center justify-center">
                  <Briefcase className="w-4 h-4 text-white" />
                </div>
                
                <div className="ml-16 bg-slate-800/60 backdrop-blur-sm rounded-xl p-6 border border-blue-700/30 hover:border-orange-500/50 transition-all duration-500 hover:shadow-xl hover:shadow-orange-900/20 group">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-xl font-light text-white mb-1">VAPT Intern</h3>
                      <p className="text-orange-400 text-sm font-medium">SECURE SLEUTHS</p>
                    </div>
                    <Badge variant="outline" className="border-slate-600 text-slate-400 bg-slate-800/50">
                      Aug 2024 - Nov 2024
                    </Badge>
                  </div>
                  <p className="text-blue-200/70 text-sm leading-relaxed mb-3">
                    Performed VAPT on web applications, APIs, and network infrastructure for 5+ clients, identifying 25+ vulnerabilities. Analyzed and validated vulnerabilities (SQLi, XSS, CSRF) using Burp Suite, OWASP ZAP, Metasploit, and Nmap.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    <Badge variant="outline" className="border-orange-500/30 text-orange-300 bg-orange-950/30 text-xs">
                      VAPT
                    </Badge>
                    <Badge variant="outline" className="border-orange-500/30 text-orange-300 bg-orange-950/30 text-xs">
                      Burp Suite
                    </Badge>
                    <Badge variant="outline" className="border-orange-500/30 text-orange-300 bg-orange-950/30 text-xs">
                      Metasploit
                    </Badge>
                    <Badge variant="outline" className="border-orange-500/30 text-orange-300 bg-orange-950/30 text-xs">
                      Nmap
                    </Badge>
                    <Badge variant="outline" className="border-orange-500/30 text-orange-300 bg-orange-950/30 text-xs">
                      OWASP ZAP
                    </Badge>
                  </div>
                </div>
              </div>

              {/* Second Internship - AMAHA (Most Recent) */}
              <div className="relative scroll-reveal-left stagger-3">
                {/* Timeline Dot - Glowing for current */}
                <div className="absolute left-0 top-6 w-8 h-8 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 ring-4 ring-slate-900 flex items-center justify-center animate-pulse">
                  <Shield className="w-4 h-4 text-white" />
                </div>
                
                <div className="ml-16 bg-slate-800/60 backdrop-blur-sm rounded-xl p-6 border border-cyan-500/50 hover:border-cyan-400/70 transition-all duration-500 hover:shadow-xl hover:shadow-cyan-900/30 group">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-xl font-light text-white mb-1">Cyber Security Intern</h3>
                      <p className="text-cyan-400 text-sm font-medium">AMAHA (innerHour)</p>
                    </div>
                    <Badge className="bg-cyan-500/20 text-cyan-300 border-cyan-500/50">
                      Nov 2024 - Feb 2025
                    </Badge>
                  </div>
                  <p className="text-blue-200/70 text-sm leading-relaxed mb-3">
                    Conducted penetration testing on web applications and APIs, identifying 20+ vulnerabilities (5 critical). Managed VPN infrastructure for 400+ employees and implemented Cloudflare CDN, reducing web-based attacks by ~30%. Led bug bounty triage (35+ reports) and OSINT investigations.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    <Badge variant="outline" className="border-cyan-500/30 text-cyan-300 bg-cyan-950/30 text-xs">
                      VAPT
                    </Badge>
                    <Badge variant="outline" className="border-cyan-500/30 text-cyan-300 bg-cyan-950/30 text-xs">
                      Splunk
                    </Badge>
                    <Badge variant="outline" className="border-cyan-500/30 text-cyan-300 bg-cyan-950/30 text-xs">
                      Wazuh
                    </Badge>
                    <Badge variant="outline" className="border-cyan-500/30 text-cyan-300 bg-cyan-950/30 text-xs">
                      Nessus
                    </Badge>
                    <Badge variant="outline" className="border-cyan-500/30 text-cyan-300 bg-cyan-950/30 text-xs">
                      Burp Suite
                    </Badge>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Incident Response & Writeups Section */}
      <section id="projects" className="py-24 px-6 bg-gradient-to-br from-slate-800 via-blue-900 to-slate-800 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-600/10 via-transparent to-transparent pointer-events-none parallax" data-speed="0.15" />
        <div className="max-w-7xl mx-auto relative z-10">
          <h2 className="text-5xl font-light mb-6 text-center tracking-tight scroll-reveal">
            <span className="text-white">Incident Response & </span>
            <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">Writeups</span>
          </h2>
          <p className="text-center text-blue-200/80 mb-16 max-w-2xl mx-auto scroll-reveal stagger-1">
            Documentation of my journey through offensive security, digital forensics, and SOC operations.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Card 
                key={project.id}
                className={`group cursor-pointer overflow-hidden bg-slate-900/80 backdrop-blur-sm border-slate-700/50 hover:border-cyan-500/50 transition-all duration-500 hover:shadow-xl hover:shadow-cyan-900/20 scroll-reveal-scale stagger-${(index % 3) + 1}`}
                onClick={() => navigate(`/project/${project.id}`)}
              >
                <CardContent className="p-6 space-y-4">
                  {/* Header with category and read time */}
                  <div className="flex items-center justify-between">
                    <Badge className="bg-cyan-500/20 text-cyan-300 border-cyan-500/50 text-xs">
                      {project.category}
                    </Badge>
                    <span className="text-xs text-slate-400 flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {project.readTime || "5 min read"}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-light text-white group-hover:text-cyan-300 transition-colors line-clamp-2">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-blue-200/70 line-clamp-3 leading-relaxed">
                    {project.summary}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tags && project.tags.slice(0, 3).map((tag, idx) => (
                      <span key={idx} className="text-xs text-blue-400/70 hover:text-cyan-400 transition-colors">
                        #{tag.toLowerCase().replace(/\s+/g, '')}
                      </span>
                    ))}
                    {!project.tags && (
                      <>
                        <span className="text-xs text-blue-400/70">#incident</span>
                        <span className="text-xs text-blue-400/70">#response</span>
                      </>
                    )}
                  </div>

                  {/* Read Article Link */}
                  <div className="pt-2">
                    <span className="text-cyan-400 text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
                      Read Article
                      <ChevronRight className="w-4 h-4" />
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Arsenal Section */}
      <section id="tools" className="py-24 px-6 bg-slate-900 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-slate-900 to-slate-900 pointer-events-none parallax" data-speed="0.1" />
        <div className="max-w-7xl mx-auto relative z-10">
          <h2 className="text-5xl font-light mb-6 text-center tracking-tight scroll-reveal">
            <span className="text-white">Technical </span>
            <span className="bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 bg-clip-text text-transparent">Arsenal</span>
          </h2>
          <p className="text-center text-blue-200 mb-16 max-w-2xl mx-auto scroll-reveal stagger-1">
            A comprehensive toolkit honed through real-world security operations and continuous learning
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* SIEM & Monitoring */}
            <Card className="group bg-slate-800/60 backdrop-blur-sm border-cyan-700/30 hover:border-cyan-500/50 transition-all duration-500 hover:shadow-xl hover:shadow-cyan-900/20 scroll-reveal stagger-1">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-lg">
                    <Database className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-medium text-white">SIEM & Monitoring</h3>
                    <p className="text-xs text-cyan-400">3 tools</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-blue-200">Splunk</span>
                    <Badge variant="outline" className="border-cyan-500/50 text-cyan-300 bg-cyan-950/30 text-xs">Advanced</Badge>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-blue-200">Wazuh</span>
                    <Badge variant="outline" className="border-cyan-500/30 text-cyan-300 bg-cyan-950/20 text-xs">Intermediate</Badge>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-blue-200">ELK Stack</span>
                    <Badge variant="outline" className="border-cyan-500/30 text-cyan-300 bg-cyan-950/20 text-xs">Intermediate</Badge>
                  </div>
                </div>
                <p className="text-xs text-blue-300/60 mt-4 leading-relaxed">Alert triage, rule tuning, IOC correlation</p>
              </CardContent>
            </Card>

            {/* Vulnerability Assessment */}
            <Card className="group bg-slate-800/60 backdrop-blur-sm border-orange-700/30 hover:border-orange-500/50 transition-all duration-500 hover:shadow-xl hover:shadow-orange-900/20 scroll-reveal stagger-2">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg">
                    <Search className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-medium text-white">Vulnerability Assessment</h3>
                    <p className="text-xs text-orange-400">4 tools</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-blue-200">Burp Suite</span>
                    <Badge variant="outline" className="border-orange-500/50 text-orange-300 bg-orange-950/30 text-xs">Advanced</Badge>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-blue-200">OWASP ZAP</span>
                    <Badge variant="outline" className="border-orange-500/50 text-orange-300 bg-orange-950/30 text-xs">Advanced</Badge>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-blue-200">Nmap</span>
                    <Badge variant="outline" className="border-orange-500/50 text-orange-300 bg-orange-950/30 text-xs">Advanced</Badge>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-blue-200">Nessus</span>
                    <Badge variant="outline" className="border-orange-500/30 text-orange-300 bg-orange-950/20 text-xs">Intermediate</Badge>
                  </div>
                </div>
                <p className="text-xs text-blue-300/60 mt-4 leading-relaxed">Web app testing, API security, network scanning</p>
              </CardContent>
            </Card>

            {/* Penetration Testing */}
            <Card className="group bg-slate-800/60 backdrop-blur-sm border-red-700/30 hover:border-red-500/50 transition-all duration-500 hover:shadow-xl hover:shadow-red-900/20 scroll-reveal stagger-3">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-gradient-to-br from-red-500 to-red-600 rounded-lg">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-medium text-white">Penetration Testing</h3>
                    <p className="text-xs text-red-400">3 tools</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-blue-200">Metasploit</span>
                    <Badge variant="outline" className="border-red-500/50 text-red-300 bg-red-950/30 text-xs">Advanced</Badge>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-blue-200">Kali Linux</span>
                    <Badge variant="outline" className="border-red-500/50 text-red-300 bg-red-950/30 text-xs">Advanced</Badge>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-blue-200">Burp Suite</span>
                    <Badge variant="outline" className="border-red-500/50 text-red-300 bg-red-950/30 text-xs">Advanced</Badge>
                  </div>
                </div>
                <p className="text-xs text-blue-300/60 mt-4 leading-relaxed">Exploitation, privilege escalation, post-exploitation</p>
              </CardContent>
            </Card>

            {/* Network Analysis */}
            <Card className="group bg-slate-800/60 backdrop-blur-sm border-blue-700/30 hover:border-blue-500/50 transition-all duration-500 hover:shadow-xl hover:shadow-blue-900/20 scroll-reveal stagger-4">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg">
                    <Network className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-medium text-white">Network Analysis</h3>
                    <p className="text-xs text-blue-400">3 tools</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-blue-200">Wireshark</span>
                    <Badge variant="outline" className="border-blue-500/50 text-blue-300 bg-blue-950/30 text-xs">Advanced</Badge>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-blue-200">TCP/IP</span>
                    <Badge variant="outline" className="border-blue-500/50 text-blue-300 bg-blue-950/30 text-xs">Advanced</Badge>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-blue-200">DNS</span>
                    <Badge variant="outline" className="border-blue-500/30 text-blue-300 bg-blue-950/20 text-xs">Intermediate</Badge>
                  </div>
                </div>
                <p className="text-xs text-blue-300/60 mt-4 leading-relaxed">Packet analysis, traffic inspection, protocol forensics</p>
              </CardContent>
            </Card>

            {/* Threat Intelligence */}
            <Card className="group bg-slate-800/60 backdrop-blur-sm border-purple-700/30 hover:border-purple-500/50 transition-all duration-500 hover:shadow-xl hover:shadow-purple-900/20 scroll-reveal stagger-1">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg">
                    <Brain className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-medium text-white">Threat Intelligence</h3>
                    <p className="text-xs text-purple-400">3 tools</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-blue-200">MITRE ATT&CK</span>
                    <Badge variant="outline" className="border-purple-500/50 text-purple-300 bg-purple-950/30 text-xs">Advanced</Badge>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-blue-200">OSINT Tools</span>
                    <Badge variant="outline" className="border-purple-500/50 text-purple-300 bg-purple-950/30 text-xs">Advanced</Badge>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-blue-200">VirusTotal</span>
                    <Badge variant="outline" className="border-purple-500/30 text-purple-300 bg-purple-950/20 text-xs">Intermediate</Badge>
                  </div>
                </div>
                <p className="text-xs text-blue-300/60 mt-4 leading-relaxed">Threat modeling, attack pattern analysis, IOC identification</p>
              </CardContent>
            </Card>

            {/* Incident Response */}
            <Card className="group bg-slate-800/60 backdrop-blur-sm border-yellow-700/30 hover:border-yellow-500/50 transition-all duration-500 hover:shadow-xl hover:shadow-yellow-900/20 scroll-reveal stagger-2">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-lg">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-medium text-white">Incident Response</h3>
                    <p className="text-xs text-yellow-400">3 tools</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-blue-200">Alert Triage</span>
                    <Badge variant="outline" className="border-yellow-500/50 text-yellow-300 bg-yellow-950/30 text-xs">Advanced</Badge>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-blue-200">Malware Analysis</span>
                    <Badge variant="outline" className="border-yellow-500/30 text-yellow-300 bg-yellow-950/20 text-xs">Intermediate</Badge>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-blue-200">Forensics</span>
                    <Badge variant="outline" className="border-yellow-500/30 text-yellow-300 bg-yellow-950/20 text-xs">Intermediate</Badge>
                  </div>
                </div>
                <p className="text-xs text-blue-300/60 mt-4 leading-relaxed">Security alert handling, incident investigation, root cause analysis</p>
              </CardContent>
            </Card>

            {/* Scripting & Automation */}
            <Card className="group bg-slate-800/60 backdrop-blur-sm border-green-700/30 hover:border-green-500/50 transition-all duration-500 hover:shadow-xl hover:shadow-green-900/20 scroll-reveal stagger-3">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-gradient-to-br from-green-500 to-green-600 rounded-lg">
                    <Box className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-medium text-white">Scripting & Automation</h3>
                    <p className="text-xs text-green-400">3 tools</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-blue-200">Python</span>
                    <Badge variant="outline" className="border-green-500/50 text-green-300 bg-green-950/30 text-xs">Advanced</Badge>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-blue-200">Bash</span>
                    <Badge variant="outline" className="border-green-500/30 text-green-300 bg-green-950/20 text-xs">Intermediate</Badge>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-blue-200">PowerShell</span>
                    <Badge variant="outline" className="border-green-500/20 text-green-300 bg-green-950/10 text-xs">Beginner</Badge>
                  </div>
                </div>
                <p className="text-xs text-blue-300/60 mt-4 leading-relaxed">Security automation, custom tools, log parsing</p>
              </CardContent>
            </Card>

            {/* Cloud & Infrastructure */}
            <Card className="group bg-slate-800/60 backdrop-blur-sm border-indigo-700/30 hover:border-indigo-500/50 transition-all duration-500 hover:shadow-xl hover:shadow-indigo-900/20 scroll-reveal stagger-4">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-lg">
                    <Globe className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-medium text-white">Cloud & Infrastructure</h3>
                    <p className="text-xs text-indigo-400">3 tools</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-blue-200">Cloudflare</span>
                    <Badge variant="outline" className="border-indigo-500/50 text-indigo-300 bg-indigo-950/30 text-xs">Advanced</Badge>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-blue-200">VPN Management</span>
                    <Badge variant="outline" className="border-indigo-500/50 text-indigo-300 bg-indigo-950/30 text-xs">Advanced</Badge>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-blue-200">CDN Security</span>
                    <Badge variant="outline" className="border-indigo-500/30 text-indigo-300 bg-indigo-950/20 text-xs">Intermediate</Badge>
                  </div>
                </div>
                <p className="text-xs text-blue-300/60 mt-4 leading-relaxed">Cloud security posture, CDN hardening, DDoS mitigation</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Drive Section */}
      <section id="drive" className="py-24 px-6 bg-gradient-to-br from-slate-800 via-blue-900 to-slate-800 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-600/10 via-transparent to-transparent pointer-events-none parallax" data-speed="0.05" />
        <div className="max-w-4xl mx-auto text-center space-y-12 relative z-10">
          <h2 className="text-5xl font-light tracking-tight text-white scroll-reveal">{driveMotivation.title}</h2>
          <p className="text-lg text-blue-100 leading-relaxed scroll-reveal stagger-1">
            {driveMotivation.content}
          </p>
          <blockquote className="text-2xl font-light italic text-white border-l-4 border-cyan-400 pl-6 py-4 my-12 bg-slate-800/60 backdrop-blur-sm rounded-r-lg shadow-xl scroll-reveal-left stagger-2">
            "{driveMotivation.quote}"
          </blockquote>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8">
            {driveMotivation.passions.map((passion, index) =>
            <div
              key={index}
              className={`space-y-3 hover:translate-y-[-5px] transition-all duration-500 p-6 rounded-xl bg-slate-800/60 backdrop-blur-sm border border-blue-700/30 hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-900/20 scroll-reveal-scale stagger-${index + 3}`}>

                <Award className="w-10 h-10 mx-auto mb-4 text-cyan-400 group-hover:rotate-12 transition-transform duration-300" />
                <h3 className="text-xl font-light text-white">{passion.title}</h3>
                <p className="text-sm text-blue-200">{passion.description}</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMzYjgyZjYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE4YzAtOS45NC04LjA2LTE4LTE4LTE4UzAgOC4wNiAwIDE4czguMDYgMTggMTggMTggMTgtOC4wNiAxOC0xOHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30" />
        <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
          <h2 className="text-5xl font-light tracking-tight mb-6">Let's Connect</h2>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto">
            Interested in collaboration, opportunities, or discussing cybersecurity? 
            I'd love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <a href={`mailto:${studentInfo.email}`}>
              <Button
                size="lg"
                className="bg-white text-blue-900 hover:bg-blue-50 hover:scale-105 transition-transform shadow-lg">

                <Mail className="w-5 h-5 mr-2" />
                Send Email
              </Button>
            </a>
            <Button
              onClick={handleResumeDownload}
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-900 hover:scale-105 transition-all">

              <Download className="w-5 h-5 mr-2" />
              Download Resume
            </Button>
          </div>
          <div className="flex gap-6 justify-center pt-8">
            <a href={studentInfo.linkedin} target="_blank" rel="noopener noreferrer"
            className="hover:scale-110 transition-transform text-blue-100 hover:text-white">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href={studentInfo.github} target="_blank" rel="noopener noreferrer"
            className="hover:scale-110 transition-transform text-blue-100 hover:text-white">
              <Github className="w-6 h-6" />
            </a>
            <a href={`mailto:${studentInfo.email}`}
            className="hover:scale-110 transition-transform text-blue-100 hover:text-white">
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-blue-950 text-blue-100 border-t border-blue-900">
        <div className="max-w-7xl mx-auto text-center text-sm">
          <p>&copy; 2024 {studentInfo.name}. All rights reserved.</p>
          <p className="mt-2 text-blue-300">Cybersecurity Portfolio - Incident Response Specialist</p>
        </div>
      </footer>
    </div>);

};

export default Home;