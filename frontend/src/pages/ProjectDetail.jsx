import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar, Shield, Search, Target, AlertTriangle, CheckCircle2, LightbulbIcon, Activity } from 'lucide-react';
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
    window.scrollTo(0, 0);

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

  // Check if this is a SOC-formatted report
  const isSocReport = project.socReport !== undefined;
  const report = isSocReport ? project.socReport : project.detailedReport;

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

      {/* Hero Section */}
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
        
        {isSocReport ? (
          /* SOC Incident Report Structure */
          <>
            {/* 1. DETECTION */}
            <section className="space-y-6 scroll-reveal">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-gradient-to-br from-red-500 to-orange-500 rounded-lg shadow-lg">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-4xl font-light tracking-tight text-white">1. Detection</h2>
              </div>
              
              <Card className="bg-slate-800/60 backdrop-blur-sm border-red-500/30 shadow-xl">
                <CardContent className="p-8 space-y-6">
                  <p className="text-lg text-blue-100 leading-relaxed">{report.detection.summary}</p>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-sm font-semibold text-cyan-400 mb-3 uppercase tracking-wider">Alert Source</h4>
                      <p className="text-blue-200 bg-slate-900/50 p-4 rounded-lg border-l-4 border-cyan-400">
                        {report.detection.alertSource}
                      </p>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-cyan-400 mb-3 uppercase tracking-wider">Kill Chain Phase</h4>
                      <Badge variant="outline" className="border-orange-400 text-orange-300 bg-orange-950/50 text-sm px-4 py-2">
                        {report.detection.killChainPhase}
                      </Badge>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-cyan-400 mb-3 uppercase tracking-wider">Initial Indicators of Compromise (IOCs)</h4>
                    <ul className="space-y-2">
                      {report.detection.initialIndicators.map((indicator, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-blue-100 bg-slate-900/40 p-3 rounded-lg">
                          <AlertTriangle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                          <span>{indicator}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-cyan-400 mb-3 uppercase tracking-wider">MITRE ATT&CK Mapping</h4>
                    <div className="flex flex-wrap gap-2">
                      {report.detection.mitreAttack.map((technique, idx) => (
                        <Badge key={idx} variant="outline" className="border-purple-400 text-purple-200 bg-purple-950/50">
                          {technique}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            <Separator className="bg-blue-700/30" />

            {/* 2. INVESTIGATION */}
            <section className="space-y-6 scroll-reveal stagger-1">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg shadow-lg">
                  <Search className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-4xl font-light tracking-tight text-white">2. Investigation</h2>
              </div>

              <Card className="bg-slate-800/60 backdrop-blur-sm border-blue-500/30 shadow-xl">
                <CardContent className="p-8 space-y-6">
                  <div>
                    <h4 className="text-sm font-semibold text-cyan-400 mb-3 uppercase tracking-wider">Summary</h4>
                    <p className="text-lg text-blue-100 leading-relaxed">{report.investigation.summary}</p>
                  </div>

                  <div className="bg-red-950/30 border border-red-500/30 p-6 rounded-lg">
                    <h4 className="text-sm font-semibold text-red-400 mb-3 uppercase tracking-wider flex items-center gap-2">
                      <Target className="w-5 h-5" />
                      Root Cause Analysis
                    </h4>
                    <p className="text-blue-100 leading-relaxed">{report.investigation.rootCause}</p>
                  </div>

                  {/* Investigation Timeline */}
                  <div>
                    <h4 className="text-sm font-semibold text-cyan-400 mb-4 uppercase tracking-wider">Investigation Timeline</h4>
                    <div className="space-y-3">
                      {report.investigation.timeline.map((event, idx) => (
                        <div key={idx} className="flex gap-4 items-start group">
                          <div className="flex flex-col items-center">
                            <div className="p-2 bg-slate-800 border border-blue-700/50 rounded-full group-hover:bg-gradient-to-br group-hover:from-blue-500 group-hover:to-cyan-500 transition-all">
                              <Activity className="w-4 h-4 text-blue-300 group-hover:text-white" />
                            </div>
                            {idx < report.investigation.timeline.length - 1 && (
                              <div className="w-0.5 h-8 bg-blue-700/30 my-1" />
                            )}
                          </div>
                          <div className="flex-1 pb-2">
                            <div className="flex items-center gap-3 mb-1">
                              <span className="text-sm font-medium text-cyan-400">{event.time}</span>
                              <Badge variant="outline" className="text-xs border-blue-400 text-blue-300 bg-blue-950/50">
                                {event.phase}
                              </Badge>
                            </div>
                            <p className="text-blue-100">{event.event}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Forensic Findings */}
                  <div>
                    <h4 className="text-sm font-semibold text-cyan-400 mb-4 uppercase tracking-wider">Forensic Findings</h4>
                    <div className="space-y-4">
                      {report.investigation.forensicFindings.map((finding, idx) => (
                        <Card key={idx} className="bg-slate-900/60 border-blue-700/30">
                          <CardHeader>
                            <CardTitle className="text-lg font-light text-white flex items-center justify-between">
                              <span>{finding.title}</span>
                              <Badge variant="outline" className="border-purple-400 text-purple-200 bg-purple-950/50 text-xs">
                                {finding.mitreAttack}
                              </Badge>
                            </CardTitle>
                          </CardHeader>
                          <CardContent className="space-y-3">
                            <p className="text-blue-100 leading-relaxed">{finding.description}</p>
                            <div className="bg-slate-950/60 p-3 rounded-lg border-l-4 border-cyan-400">
                              <span className="text-xs font-semibold text-cyan-400 uppercase">Evidence: </span>
                              <span className="text-sm text-blue-200 font-mono">{finding.evidence}</span>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>

                  {/* Tools Used */}
                  <div>
                    <h4 className="text-sm font-semibold text-cyan-400 mb-3 uppercase tracking-wider">Tools & Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {report.investigation.toolsUsed.map((tool, idx) => (
                        <Badge key={idx} variant="outline" className="border-blue-400 text-blue-200 bg-slate-900/50 px-4 py-2">
                          {tool}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            <Separator className="bg-blue-700/30" />

            {/* 3. IMPACT */}
            <section className="space-y-6 scroll-reveal stagger-2">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg shadow-lg">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-4xl font-light tracking-tight text-white">3. Impact Assessment</h2>
              </div>

              <Card className="bg-slate-800/60 backdrop-blur-sm border-orange-500/30 shadow-xl">
                <CardContent className="p-8 space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-red-950/30 border border-red-500/30 p-6 rounded-lg">
                      <h4 className="text-sm font-semibold text-red-400 mb-2 uppercase tracking-wider">Severity Level</h4>
                      <Badge variant="destructive" className="text-lg px-4 py-2">
                        {report.impact.severity}
                      </Badge>
                    </div>
                    <div className="bg-orange-950/30 border border-orange-500/30 p-6 rounded-lg">
                      <h4 className="text-sm font-semibold text-orange-400 mb-2 uppercase tracking-wider">Estimated Cost</h4>
                      <p className="text-2xl font-light text-white">{report.impact.estimatedCost}</p>
                    </div>
                  </div>

                  <div className="bg-slate-900/60 p-6 rounded-lg space-y-4">
                    <h4 className="text-sm font-semibold text-cyan-400 uppercase tracking-wider">Scope of Impact</h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <span className="text-xs text-blue-400 uppercase tracking-wider">Affected Systems</span>
                        <p className="text-blue-100 mt-1">{report.impact.scope.affectedSystems}</p>
                      </div>
                      <div>
                        <span className="text-xs text-blue-400 uppercase tracking-wider">Data Loss</span>
                        <p className="text-blue-100 mt-1">{report.impact.scope.dataLoss}</p>
                      </div>
                      <div>
                        <span className="text-xs text-blue-400 uppercase tracking-wider">Downtime</span>
                        <p className="text-blue-100 mt-1">{report.impact.scope.downtime}</p>
                      </div>
                      <div>
                        <span className="text-xs text-blue-400 uppercase tracking-wider">Business Impact</span>
                        <p className="text-blue-100 mt-1">{report.impact.scope.businessImpact}</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-cyan-400 mb-3 uppercase tracking-wider">Affected Assets</h4>
                    <ul className="space-y-2">
                      {report.impact.affectedAssets.map((asset, idx) => (
                        <li key={idx} className="flex items-center gap-3 text-blue-100 bg-slate-900/40 p-3 rounded-lg">
                          <div className="w-2 h-2 bg-orange-500 rounded-full" />
                          <span className="font-mono text-sm">{asset}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </section>

            <Separator className="bg-blue-700/30" />

            {/* 4. RESPONSE */}
            <section className="space-y-6 scroll-reveal stagger-3">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg shadow-lg">
                  <CheckCircle2 className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-4xl font-light tracking-tight text-white">4. Response Actions</h2>
              </div>

              <div className="grid gap-6">
                {/* Containment */}
                <Card className="bg-slate-800/60 backdrop-blur-sm border-yellow-500/30 shadow-xl">
                  <CardHeader>
                    <CardTitle className="text-xl font-light text-white flex items-center gap-3">
                      <div className="w-3 h-3 bg-yellow-500 rounded-full animate-pulse" />
                      Containment Actions
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {report.response.containment.map((action, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-blue-100">
                          <CheckCircle2 className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                          <span>{action}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                {/* Eradication */}
                <Card className="bg-slate-800/60 backdrop-blur-sm border-orange-500/30 shadow-xl">
                  <CardHeader>
                    <CardTitle className="text-xl font-light text-white flex items-center gap-3">
                      <div className="w-3 h-3 bg-orange-500 rounded-full animate-pulse" />
                      Eradication Actions
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {report.response.eradication.map((action, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-blue-100">
                          <CheckCircle2 className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5" />
                          <span>{action}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                {/* Recovery */}
                <Card className="bg-slate-800/60 backdrop-blur-sm border-green-500/30 shadow-xl">
                  <CardHeader>
                    <CardTitle className="text-xl font-light text-white flex items-center gap-3">
                      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                      Recovery Actions
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {report.response.recovery.map((action, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-blue-100">
                          <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                          <span>{action}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                {/* Communication */}
                <Card className="bg-slate-800/60 backdrop-blur-sm border-blue-500/30 shadow-xl">
                  <CardHeader>
                    <CardTitle className="text-xl font-light text-white flex items-center gap-3">
                      <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse" />
                      Communication & Coordination
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {report.response.communication.map((action, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-blue-100">
                          <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                          <span>{action}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </section>

            <Separator className="bg-blue-700/30" />

            {/* 5. LESSONS LEARNED */}
            <section className="space-y-6 scroll-reveal stagger-4">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg shadow-lg">
                  <LightbulbIcon className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-4xl font-light tracking-tight text-white">5. Lessons Learned</h2>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {/* What Worked Well */}
                <Card className="bg-slate-800/60 backdrop-blur-sm border-green-500/30 shadow-xl">
                  <CardHeader>
                    <CardTitle className="text-xl font-light text-green-400">✅ What Worked Well</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {report.lessonsLearned.whatWorkedWell.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-blue-100 bg-green-950/20 p-3 rounded-lg">
                          <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                {/* Areas for Improvement */}
                <Card className="bg-slate-800/60 backdrop-blur-sm border-red-500/30 shadow-xl">
                  <CardHeader>
                    <CardTitle className="text-xl font-light text-red-400">⚠️ Areas for Improvement</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {report.lessonsLearned.areasForImprovement.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-blue-100 bg-red-950/20 p-3 rounded-lg">
                          <AlertTriangle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>

              {/* Recommendations */}
              <Card className="bg-slate-800/60 backdrop-blur-sm border-purple-500/30 shadow-xl">
                <CardHeader>
                  <CardTitle className="text-2xl font-light text-white">Action Plan & Recommendations</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {report.lessonsLearned.recommendations.map((rec, idx) => (
                    <div 
                      key={idx}
                      className="bg-slate-900/60 p-6 rounded-lg border-l-4 border-purple-400 hover:shadow-lg transition-all"
                    >
                      <div className="flex items-start justify-between mb-3">
                        <Badge 
                          variant={rec.priority === 'Critical' ? 'destructive' : 'outline'}
                          className={rec.priority === 'High' ? 'border-orange-400 text-orange-300 bg-orange-950/50' : ''}
                        >
                          {rec.priority} Priority
                        </Badge>
                        <span className="text-sm text-blue-300">{rec.timeline}</span>
                      </div>
                      <p className="text-lg text-white mb-2">{rec.action}</p>
                      <div className="flex items-center gap-2 text-sm text-blue-400">
                        <span className="font-semibold">Owner:</span>
                        <span>{rec.owner}</span>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Framework Mapping */}
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="bg-purple-950/30 border-purple-500/30">
                  <CardHeader>
                    <CardTitle className="text-lg font-light text-purple-300">MITRE ATT&CK Mapping</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-blue-100 text-sm leading-relaxed">{report.lessonsLearned.mitreMapping}</p>
                  </CardContent>
                </Card>
                <Card className="bg-indigo-950/30 border-indigo-500/30">
                  <CardHeader>
                    <CardTitle className="text-lg font-light text-indigo-300">Cyber Kill Chain Mapping</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-blue-100 text-sm leading-relaxed">{report.lessonsLearned.killChainMapping}</p>
                  </CardContent>
                </Card>
              </div>
            </section>
          </>
        ) : (
          /* Legacy Report Structure (fallback for other projects) */
          <>
            {/* Executive Summary */}
            <section className="space-y-6 scroll-reveal">
              <h2 className="text-4xl font-light tracking-tight text-white">Executive Summary</h2>
              <p className="text-lg text-blue-100 leading-relaxed bg-slate-800/60 backdrop-blur-sm p-8 rounded-xl border-l-4 border-cyan-400 shadow-xl">
                {report.executiveSummary}
              </p>
            </section>

            <Separator className="bg-blue-700/30" />

            {/* Timeline */}
            <section className="space-y-6 scroll-reveal stagger-1">
              <h2 className="text-4xl font-light tracking-tight text-white">Incident Timeline</h2>
              <div className="space-y-4">
                {report.timeline.map((event, index) => (
                  <div key={index} className="flex gap-6 items-start group hover:translate-x-2 transition-transform duration-300">
                    <div className="flex flex-col items-center">
                      <div className="p-3 bg-slate-800 border border-blue-700/50 rounded-full text-blue-300">
                        <Activity className="w-5 h-5" />
                      </div>
                      {index < report.timeline.length - 1 && (
                        <div className="w-0.5 h-12 bg-blue-700/30 my-2" />
                      )}
                    </div>
                    <div className="flex-1 pb-4 bg-slate-800/40 p-4 rounded-lg">
                      <div className="text-sm font-medium text-cyan-400 mb-1">{event.time}</div>
                      <p className="text-lg text-white mb-2">{event.event}</p>
                      <Badge variant="outline" className="mt-2 text-xs capitalize">
                        {event.status}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <Separator className="bg-blue-700/30" />

            {/* Findings */}
            <section className="space-y-6 scroll-reveal stagger-2">
              <h2 className="text-4xl font-light tracking-tight text-white">Key Findings</h2>
              <div className="grid gap-6">
                {report.findings.map((finding, index) => (
                  <Card key={index} className="bg-slate-800/60 backdrop-blur-sm shadow-xl">
                    <CardHeader>
                      <CardTitle className="text-xl font-light text-white">{finding.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <p className="text-blue-100 leading-relaxed">{finding.description}</p>
                      <div className="bg-slate-900/40 p-3 rounded-lg">
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
                {report.recommendations.map((rec, index) => (
                  <div key={index} className="flex gap-4 items-start p-6 bg-slate-800/60 rounded-xl">
                    <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 text-white rounded-full flex items-center justify-center">
                      {index + 1}
                    </div>
                    <p className="text-blue-100 pt-2">{rec}</p>
                  </div>
                ))}
              </div>
            </section>

            <Separator className="bg-blue-700/30" />

            {/* Tools */}
            <section className="space-y-6 scroll-reveal stagger-4">
              <h2 className="text-4xl font-light tracking-tight text-white">Tools & Technologies</h2>
              <div className="flex flex-wrap gap-3">
                {report.toolsUsed.map((tool, index) => (
                  <Badge key={index} variant="outline" className="px-5 py-2 text-sm">
                    {tool}
                  </Badge>
                ))}
              </div>
            </section>
          </>
        )}

        {/* Back Button */}
        <div className="pt-8 text-center scroll-reveal stagger-5">
          <Button 
            size="lg"
            onClick={() => navigate('/')}
            className="hover:scale-110 transition-all duration-500 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 shadow-xl"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            View All Projects
          </Button>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-24 py-8 px-6 bg-slate-950 border-t border-blue-900/30">
        <div className="max-w-6xl mx-auto text-center text-sm">
          <p className="text-blue-300">SOC Incident Response Report - Professional Case Study</p>
        </div>
      </footer>
    </div>
  );
};

export default ProjectDetail;
