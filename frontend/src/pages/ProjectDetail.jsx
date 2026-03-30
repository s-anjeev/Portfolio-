import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar, AlertTriangle, CheckCircle, Clock, FileText, Shield } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Separator } from '../components/ui/separator';
import { projects } from '../mock';

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find(p => p.id === parseInt(id));

  React.useEffect(() => {
    // Scroll to top on mount
    window.scrollTo(0, 0);

    // Animate elements on scroll
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    const revealElements = document.querySelectorAll('[class*="scroll-reveal"]');
    revealElements.forEach(el => observer.observe(el));

    return () => {
      revealElements.forEach(el => observer.unobserve(el));
    };
  }, []);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <div className="text-center space-y-4">
          <h2 className="text-2xl font-light text-white">Project not found</h2>
          <Button onClick={() => navigate('/')} className="bg-gradient-to-r from-blue-600 to-cyan-600">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
        </div>
      </div>
    );
  }

  const getTimelineIcon = (status) => {
    const icons = {
      detected: AlertTriangle,
      responded: Clock,
      analyzed: FileText,
      contained: Shield,
      recovery: CheckCircle,
      resolved: CheckCircle,
      communication: FileText
    };
    const IconComponent = icons[status] || Clock;
    return <IconComponent className="w-5 h-5" />;
  };

  const getSeverityColor = (severity) => {
    const colors = {
      critical: 'text-red-600 bg-red-50 border-red-200',
      high: 'text-orange-600 bg-orange-50 border-orange-200',
      medium: 'text-yellow-600 bg-yellow-50 border-yellow-200',
      low: 'text-blue-600 bg-blue-50 border-blue-200'
    };
    return colors[severity.toLowerCase()] || colors.medium;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Header */}
      <header className="sticky top-0 bg-slate-900/90 backdrop-blur-xl z-50 border-b border-blue-700/30 shadow-lg">
        <div className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
          <Button 
            variant="ghost" 
            onClick={() => navigate('/')}
            className="hover:translate-x-[-4px] transition-transform text-blue-200 hover:text-white hover:bg-blue-900/50"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Projects
          </Button>
          <Badge variant={project.severity === 'Critical' ? 'destructive' : 'secondary'}>
            {project.severity} Severity
          </Badge>
        </div>
      </header>

      {/* Hero Image */}
      <div className="relative h-96 overflow-hidden border-b-4 border-cyan-500 shadow-2xl shadow-blue-900/50">
        <img 
          src={project.thumbnail} 
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-12 text-white">
          <div className="max-w-6xl mx-auto">
            <Badge variant="outline" className="mb-4 border-cyan-400 text-cyan-300 bg-slate-900/60 backdrop-blur-sm">
              {project.category}
            </Badge>
            <h1 className="text-5xl font-light mb-4 tracking-tight drop-shadow-2xl">{project.title}</h1>
            <div className="flex items-center gap-4 text-sm">
              <span className="flex items-center gap-2 text-blue-200">
                <Calendar className="w-4 h-4" />
                {project.date}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-16 space-y-16">
        
        {/* Executive Summary */}
        <section className="space-y-6 scroll-reveal">
          <h2 className="text-4xl font-light tracking-tight text-white">Executive Summary</h2>
          <p className="text-lg text-blue-100 leading-relaxed bg-slate-800/60 backdrop-blur-sm p-8 rounded-xl border-l-4 border-cyan-400 shadow-xl hover:shadow-2xl hover:shadow-blue-900/30 transition-all duration-500">
            {project.detailedReport.executiveSummary}
          </p>
        </section>

        <Separator className="bg-blue-700/30" />

        {/* Timeline */}
        <section className="space-y-6 scroll-reveal stagger-1">
          <h2 className="text-4xl font-light tracking-tight text-white">Incident Timeline</h2>
          <div className="space-y-4">
            {project.detailedReport.timeline.map((event, index) => (
              <div 
                key={index}
                className={`flex gap-6 items-start group hover:translate-x-2 transition-transform duration-300 scroll-reveal-left stagger-${(index % 6) + 1}`}
              >
                <div className="flex flex-col items-center">
                  <div className="p-3 bg-slate-800 border border-blue-700/50 rounded-full group-hover:bg-gradient-to-br group-hover:from-blue-500 group-hover:to-cyan-500 group-hover:border-cyan-400 text-blue-300 group-hover:text-white transition-all duration-500 shadow-lg group-hover:scale-110">
                    {getTimelineIcon(event.status)}
                  </div>
                  {index < project.detailedReport.timeline.length - 1 && (
                    <div className="w-0.5 h-12 bg-blue-700/30 my-2 group-hover:bg-cyan-400 transition-colors duration-500" />
                  )}
                </div>
                <div className="flex-1 pb-4 bg-slate-800/40 backdrop-blur-sm p-4 rounded-lg border border-blue-700/20 group-hover:border-blue-500/50 group-hover:shadow-lg transition-all duration-500">
                  <div className="text-sm font-medium text-cyan-400 mb-1">{event.time}</div>
                  <p className="text-lg text-white mb-2">{event.event}</p>
                  <Badge variant="outline" className="mt-2 text-xs capitalize border-blue-400 text-blue-300 bg-blue-950/50">
                    {event.status}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </section>

        <Separator className="bg-blue-700/30" />

        {/* Key Findings */}
        <section className="space-y-6 scroll-reveal stagger-2">
          <h2 className="text-4xl font-light tracking-tight text-white">Key Findings</h2>
          <div className="grid gap-6">
            {project.detailedReport.findings.map((finding, index) => (
              <Card 
                key={index}
                className={`border-2 bg-slate-800/60 backdrop-blur-sm ${getSeverityColor(finding.severity)} shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 scroll-reveal-scale stagger-${index + 1}`}
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-xl font-light text-white">
                      {finding.title}
                    </CardTitle>
                    <Badge 
                      variant="outline" 
                      className={`capitalize ${getSeverityColor(finding.severity)}`}
                    >
                      {finding.severity}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-blue-100 leading-relaxed">
                    {finding.description}
                  </p>
                  <div className="pt-3 border-t border-blue-700/30 bg-slate-900/40 p-3 rounded-lg">
                    <span className="text-sm font-medium text-cyan-400">Evidence: </span>
                    <span className="text-sm text-blue-200 font-mono">{finding.evidence}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <Separator className="bg-blue-700/30" />

        {/* Recommendations */}
        <section className="space-y-6 scroll-reveal stagger-3">
          <h2 className="text-4xl font-light tracking-tight text-white">Recommendations</h2>
          <div className="grid gap-4">
            {project.detailedReport.recommendations.map((rec, index) => (
              <div 
                key={index}
                className={`flex gap-4 items-start p-6 bg-slate-800/60 backdrop-blur-sm rounded-xl hover:bg-slate-800/80 transition-all duration-500 border-l-4 border-cyan-400 shadow-lg hover:shadow-xl hover:shadow-blue-900/20 hover:translate-x-2 scroll-reveal-left stagger-${(index % 5) + 1}`}
              >
                <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 text-white rounded-full flex items-center justify-center text-sm font-light shadow-lg shadow-blue-500/40 ring-2 ring-blue-400/30 group-hover:scale-110 transition-transform duration-300">
                  {index + 1}
                </div>
                <p className="text-blue-100 pt-2">{rec}</p>
              </div>
            ))}
          </div>
        </section>

        <Separator className="bg-blue-700/30" />

        {/* Tools Used */}
        <section className="space-y-6 scroll-reveal stagger-4">
          <h2 className="text-4xl font-light tracking-tight text-white">Tools & Technologies</h2>
          <div className="flex flex-wrap gap-3">
            {project.detailedReport.toolsUsed.map((tool, index) => (
              <Badge 
                key={index}
                variant="outline"
                className={`px-5 py-2 text-sm border-blue-400 text-blue-200 hover:bg-gradient-to-r hover:from-blue-600 hover:to-cyan-600 hover:text-white hover:border-cyan-400 hover:scale-110 transition-all duration-500 cursor-default shadow-lg backdrop-blur-sm bg-slate-800/60 scroll-reveal-scale stagger-${(index % 6) + 1}`}
              >
                {tool}
              </Badge>
            ))}
          </div>
        </section>

        {/* Back Button */}
        <div className="pt-8 text-center scroll-reveal stagger-5">
          <Button 
            size="lg"
            onClick={() => navigate('/')}
            className="hover:scale-110 transition-all duration-500 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 shadow-xl shadow-blue-900/40 hover:shadow-2xl hover:shadow-blue-900/60"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            View All Projects
          </Button>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-24 py-8 px-6 bg-slate-950 border-t border-blue-900/30">
        <div className="max-w-6xl mx-auto text-center text-sm">
          <p className="text-blue-300">Incident Response Portfolio - Detailed Case Study</p>
        </div>
      </footer>
    </div>
  );
};

export default ProjectDetail;
