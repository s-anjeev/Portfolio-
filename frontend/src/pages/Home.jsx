import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Shield, Mail, Linkedin, Github, Download, 
  Network, Brain, Database, HardDrive, Globe, Box, Search, 
  ChevronRight, Calendar, MapPin, Briefcase, Award
} from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { studentInfo, experiences, projects, tools, driveMotivation } from '../mock';

const Home = () => {
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
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
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center">
          <div className="text-2xl font-light tracking-tight">{studentInfo.name}</div>
          <div className="flex gap-8 items-center">
            <a href="#projects" className="text-sm hover:translate-y-[-2px] transition-transform duration-200">Projects</a>
            <a href="#tools" className="text-sm hover:translate-y-[-2px] transition-transform duration-200">Tools</a>
            <a href="#contact" className="text-sm hover:translate-y-[-2px] transition-transform duration-200">Contact</a>
            <Button 
              onClick={handleResumeDownload}
              variant="outline" 
              size="sm"
              className="hover:scale-105 transition-transform duration-200"
            >
              <Download className="w-4 h-4 mr-2" />
              Resume
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero / Intro Section */}
      <section className="min-h-screen flex items-center justify-center px-6 pt-24">
        <div className="max-w-4xl text-center space-y-8 animate-in fade-in duration-1000">
          <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-black/5 mb-8 rotate-animation">
            <Shield className="w-12 h-12" />
          </div>
          <h1 className="text-7xl md:text-8xl font-extralight tracking-tight leading-none">
            {studentInfo.name}
          </h1>
          <p className="text-2xl font-light text-gray-600 tracking-wide">
            {studentInfo.title}
          </p>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
            {studentInfo.bio}
          </p>
          <div className="flex gap-4 justify-center pt-8">
            <a href={studentInfo.linkedin} target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="icon" className="hover:scale-110 transition-transform">
                <Linkedin className="w-5 h-5" />
              </Button>
            </a>
            <a href={studentInfo.github} target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="icon" className="hover:scale-110 transition-transform">
                <Github className="w-5 h-5" />
              </Button>
            </a>
            <a href={`mailto:${studentInfo.email}`}>
              <Button variant="outline" size="icon" className="hover:scale-110 transition-transform">
                <Mail className="w-5 h-5" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-light mb-16 text-center tracking-tight">Experience</h2>
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div 
                key={exp.id} 
                className="group hover:translate-x-2 transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex gap-8 items-start">
                  <div className="text-4xl font-extralight text-gray-400 min-w-[100px]">
                    {exp.year}
                  </div>
                  <div className="flex-1 pb-8 border-b border-gray-200 group-hover:border-gray-400 transition-colors">
                    <h3 className="text-2xl font-light mb-2">{exp.role}</h3>
                    <div className="flex items-center gap-2 text-gray-600 mb-3">
                      <Briefcase className="w-4 h-4" />
                      <span className="text-sm">{exp.company}</span>
                    </div>
                    <p className="text-gray-600 leading-relaxed">{exp.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid Section */}
      <section id="projects" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-light mb-6 text-center tracking-tight">Incident Response Projects</h2>
          <p className="text-center text-gray-500 mb-16 max-w-2xl mx-auto">
            Comprehensive investigations and forensic analysis of real-world security incidents
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card 
                key={project.id}
                className="group cursor-pointer overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                onClick={() => navigate(`/project/${project.id}`)}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={project.thumbnail} 
                    alt={project.title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                  />
                </div>
                <CardContent className="p-6 space-y-3">
                  <div className="flex items-center justify-between">
                    <Badge variant="outline" className="text-xs">
                      {project.category}
                    </Badge>
                    <Badge 
                      variant={project.severity === 'Critical' ? 'destructive' : 'secondary'}
                      className="text-xs"
                    >
                      {project.severity}
                    </Badge>
                  </div>
                  <h3 className="text-xl font-light group-hover:translate-x-1 transition-transform">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-600 line-clamp-2">
                    {project.summary}
                  </p>
                  <div className="flex items-center justify-between pt-2">
                    <span className="text-xs text-gray-400 flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {project.date}
                    </span>
                    <ChevronRight className="w-5 h-5 text-gray-400 group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section id="tools" className="py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-light mb-6 text-center tracking-tight">Tools & Methodology</h2>
          <p className="text-center text-gray-500 mb-16 max-w-2xl mx-auto">
            Arsenal of forensic and analysis tools used in incident investigations
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {tools.map((tool, index) => (
              <Card 
                key={tool.id}
                className="group hover:shadow-lg transition-all duration-300"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <CardContent className="p-8 space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-black rounded-lg text-white group-hover:scale-110 transition-transform">
                      {getToolIcon(tool.icon)}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl font-light">{tool.name}</h3>
                        <Badge variant="outline" className="text-xs">
                          {tool.category}
                        </Badge>
                      </div>
                      <p className="text-sm text-gray-600 mb-4">{tool.description}</p>
                    </div>
                  </div>
                  <div className="space-y-3 pt-4 border-t border-gray-100">
                    <div>
                      <h4 className="text-sm font-medium mb-1">Usage in Investigations:</h4>
                      <p className="text-sm text-gray-600">{tool.usage}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium mb-1">Key Findings:</h4>
                      <p className="text-sm text-gray-600">{tool.findings}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Drive Section */}
      <section id="drive" className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <h2 className="text-5xl font-light tracking-tight">{driveMotivation.title}</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            {driveMotivation.content}
          </p>
          <blockquote className="text-2xl font-light italic text-gray-800 border-l-4 border-black pl-6 py-4 my-12">
            "{driveMotivation.quote}"
          </blockquote>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8">
            {driveMotivation.passions.map((passion, index) => (
              <div 
                key={index}
                className="space-y-3 hover:translate-y-[-5px] transition-transform duration-300"
              >
                <Award className="w-10 h-10 mx-auto mb-4" />
                <h3 className="text-xl font-light">{passion.title}</h3>
                <p className="text-sm text-gray-600">{passion.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-5xl font-light tracking-tight mb-6">Let's Connect</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Interested in collaboration, opportunities, or discussing cybersecurity? 
            I'd love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <a href={`mailto:${studentInfo.email}`}>
              <Button 
                size="lg" 
                className="bg-white text-black hover:bg-gray-200 hover:scale-105 transition-transform"
              >
                <Mail className="w-5 h-5 mr-2" />
                Send Email
              </Button>
            </a>
            <Button 
              onClick={handleResumeDownload}
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-black hover:scale-105 transition-all"
            >
              <Download className="w-5 h-5 mr-2" />
              Download Resume
            </Button>
          </div>
          <div className="flex gap-6 justify-center pt-8">
            <a href={studentInfo.linkedin} target="_blank" rel="noopener noreferrer" 
               className="hover:scale-110 transition-transform">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href={studentInfo.github} target="_blank" rel="noopener noreferrer"
               className="hover:scale-110 transition-transform">
              <Github className="w-6 h-6" />
            </a>
            <a href={`mailto:${studentInfo.email}`}
               className="hover:scale-110 transition-transform">
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-black text-white border-t border-gray-800">
        <div className="max-w-7xl mx-auto text-center text-sm text-gray-400">
          <p>&copy; 2024 {studentInfo.name}. All rights reserved.</p>
          <p className="mt-2">Cybersecurity Portfolio - Incident Response Specialist</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
