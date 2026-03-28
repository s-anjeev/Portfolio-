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

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center space-y-4">
          <h2 className="text-2xl font-light">Project not found</h2>
          <Button onClick={() => navigate('/')}>
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
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 bg-white/90 backdrop-blur-md z-50 border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
          <Button 
            variant="ghost" 
            onClick={() => navigate('/')}
            className="hover:translate-x-[-4px] transition-transform"
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
      <div className="relative h-96 overflow-hidden">
        <img 
          src={project.thumbnail} 
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-12 text-white">
          <div className="max-w-6xl mx-auto">
            <Badge variant="outline" className="mb-4 border-white text-white">
              {project.category}
            </Badge>
            <h1 className="text-5xl font-light mb-4 tracking-tight">{project.title}</h1>
            <div className="flex items-center gap-4 text-sm">
              <span className="flex items-center gap-2">
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
        <section className="space-y-6">
          <h2 className="text-4xl font-light tracking-tight">Executive Summary</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            {project.detailedReport.executiveSummary}
          </p>
        </section>

        <Separator />

        {/* Timeline */}
        <section className="space-y-6">
          <h2 className="text-4xl font-light tracking-tight">Incident Timeline</h2>
          <div className="space-y-4">
            {project.detailedReport.timeline.map((event, index) => (
              <div 
                key={index}
                className="flex gap-6 items-start group hover:translate-x-2 transition-transform duration-300"
              >
                <div className="flex flex-col items-center">
                  <div className="p-3 bg-gray-100 rounded-full group-hover:bg-black group-hover:text-white transition-colors">
                    {getTimelineIcon(event.status)}
                  </div>
                  {index < project.detailedReport.timeline.length - 1 && (
                    <div className="w-0.5 h-12 bg-gray-200 my-2" />
                  )}
                </div>
                <div className="flex-1 pb-4">
                  <div className="text-sm font-medium text-gray-500 mb-1">{event.time}</div>
                  <p className="text-lg text-gray-800">{event.event}</p>
                  <Badge variant="outline" className="mt-2 text-xs capitalize">
                    {event.status}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </section>

        <Separator />

        {/* Key Findings */}
        <section className="space-y-6">
          <h2 className="text-4xl font-light tracking-tight">Key Findings</h2>
          <div className="grid gap-6">
            {project.detailedReport.findings.map((finding, index) => (
              <Card 
                key={index}
                className={`border-2 ${getSeverityColor(finding.severity)}`}
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-xl font-light">
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
                  <p className="text-gray-700 leading-relaxed">
                    {finding.description}
                  </p>
                  <div className="pt-3 border-t border-gray-200">
                    <span className="text-sm font-medium text-gray-600">Evidence: </span>
                    <span className="text-sm text-gray-500 font-mono">{finding.evidence}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <Separator />

        {/* Recommendations */}
        <section className="space-y-6">
          <h2 className="text-4xl font-light tracking-tight">Recommendations</h2>
          <div className="grid gap-4">
            {project.detailedReport.recommendations.map((rec, index) => (
              <div 
                key={index}
                className="flex gap-4 items-start p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <div className="flex-shrink-0 w-8 h-8 bg-black text-white rounded-full flex items-center justify-center text-sm font-light">
                  {index + 1}
                </div>
                <p className="text-gray-800 pt-1">{rec}</p>
              </div>
            ))}
          </div>
        </section>

        <Separator />

        {/* Tools Used */}
        <section className="space-y-6">
          <h2 className="text-4xl font-light tracking-tight">Tools & Technologies</h2>
          <div className="flex flex-wrap gap-3">
            {project.detailedReport.toolsUsed.map((tool, index) => (
              <Badge 
                key={index}
                variant="outline"
                className="px-4 py-2 text-sm hover:bg-black hover:text-white transition-colors cursor-default"
              >
                {tool}
              </Badge>
            ))}
          </div>
        </section>

        {/* Back Button */}
        <div className="pt-8 text-center">
          <Button 
            size="lg"
            onClick={() => navigate('/')}
            className="hover:scale-105 transition-transform"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            View All Projects
          </Button>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-24 py-8 px-6 bg-black text-white">
        <div className="max-w-6xl mx-auto text-center text-sm text-gray-400">
          <p>Incident Response Portfolio - Detailed Case Study</p>
        </div>
      </footer>
    </div>
  );
};

export default ProjectDetail;
