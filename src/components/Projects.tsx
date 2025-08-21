import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, Award, Globe, Smartphone, Beaker, Shield } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Financial Chatbot with RAG",
      description: "An intelligent financial advisory chatbot built using RAG architecture with LangChain, FAISS vector database, and Python-MeTTa integration. Won HackIndia 2025 for innovative approach to financial Q&A.",
      technologies: ["LangChain", "FAISS", "Python-MeTTa", "RAG", "NLP"],
      icon: Award,
      color: "ai-green",
      github: "https://github.com/elambharati/financial-chatbot-rag",
      demo: "#",
      achievement: "🏆 Winner - HackIndia 2025"
    },
    {
      title: "Multilingual Tech Support Chatbot",
      description: "Advanced NLP-powered support system with Google Translate API integration. Features intelligent query routing, sentiment analysis, and multi-language support. Published research paper on implementation.",
      technologies: ["NLP", "Google Translate API", "Python", "Machine Learning"],
      icon: Globe,
      color: "ai-blue",
      github: "https://github.com/elambharati/multilingual-support-bot",
      demo: "#",
      achievement: "📄 Published Research Paper"
    },
    {
      title: "JobHub Mobile App",
      description: "Flutter-based mobile application connecting unorganized workers with potential clients. Features real-time matching, secure payments, and location-based services with Node.js backend.",
      technologies: ["Flutter", "Node.js", "Express", "MongoDB", "Socket.io"],
      icon: Smartphone,
      color: "ai-purple",
      github: "https://github.com/elambharati/jobhub-mobile",
      demo: "#",
      achievement: "📱 Production Mobile App"
    },
    {
      title: "Raman Spectrometer GUI (AI-Enhanced)",
      description: "Python-based desktop application for Raman spectroscopy with AI-powered preprocessing, real-time visualization, automatic calibration, and intelligent peak detection algorithms.",
      technologies: ["Python", "Tkinter", "NumPy", "SciPy", "AI Preprocessing"],
      icon: Beaker,
      color: "ai-green",
      github: "https://github.com/elambharati/raman-spectrometer-gui",
      demo: "#",
      achievement: "🔬 Scientific Application"
    },
    {
      title: "METAX Decentralized Social Platform",
      description: "Web3-based social media platform leveraging IPFS for decentralized storage, smart contracts for content monetization, and blockchain technology for user privacy and data ownership.",
      technologies: ["Web3", "IPFS", "Smart Contracts", "React", "Ethereum"],
      icon: Shield,
      color: "ai-blue",
      github: "https://github.com/elambharati/metax-social-platform",
      demo: "#",
      achievement: "🌐 Decentralized App"
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case "ai-green":
        return {
          border: "border-ai-green/20 hover:border-ai-green/40",
          icon: "text-ai-green bg-ai-green/20",
          button: "text-ai-green hover:bg-ai-green/10 border-ai-green/30"
        };
      case "ai-blue":
        return {
          border: "border-ai-blue/20 hover:border-ai-blue/40",
          icon: "text-ai-blue bg-ai-blue/20",
          button: "text-ai-blue hover:bg-ai-blue/10 border-ai-blue/30"
        };
      case "ai-purple":
        return {
          border: "border-ai-purple/20 hover:border-ai-purple/40",
          icon: "text-ai-purple bg-ai-purple/20",
          button: "text-ai-purple hover:bg-ai-purple/10 border-ai-purple/30"
        };
      default:
        return {
          border: "border-ai-green/20 hover:border-ai-green/40",
          icon: "text-ai-green bg-ai-green/20",
          button: "text-ai-green hover:bg-ai-green/10 border-ai-green/30"
        };
    }
  };

  return (
    <section id="projects" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 slide-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Featured <span className="text-ai-purple">Projects</span>
            </h2>
            <div className="w-24 h-1 bg-ai-purple mx-auto mb-6 neural-pulse"></div>
            <p className="text-xl text-muted-foreground">
              Innovative solutions spanning AI, mobile development, and Web3
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => {
              const colorClasses = getColorClasses(project.color);
              const IconComponent = project.icon;
              
              return (
                <Card 
                  key={project.title}
                  className={`bg-card/50 ${colorClasses.border} transition-all duration-300 hover:shadow-xl hover:transform hover:scale-[1.02] slide-up group`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <div className={`w-12 h-12 rounded-full ${colorClasses.icon} flex items-center justify-center group-hover:scale-110 transition-transform duration-200`}>
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <Badge className="bg-primary/10 text-primary border-primary/30">
                        {project.achievement}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl mb-2">{project.title}</CardTitle>
                    <CardDescription className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge 
                          key={tech}
                          variant="outline"
                          className="bg-muted/50 text-muted-foreground border-muted hover:scale-105 transition-transform duration-200"
                          style={{ animationDelay: `${(index * 0.1) + (techIndex * 0.05)}s` }}
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3">
                      <Button
                        variant="outline"
                        size="sm"
                        className={`${colorClasses.button} transition-all duration-200`}
                        asChild
                      >
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4 mr-2" />
                          Code
                        </a>
                      </Button>
                      {project.demo !== "#" && (
                        <Button
                          variant="outline"
                          size="sm"
                          className={`${colorClasses.button} transition-all duration-200`}
                          asChild
                        >
                          <a href={project.demo} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Demo
                          </a>
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Additional Info */}
          <div className="mt-16 text-center slide-up">
            <Card className="bg-card/30 border-ai-green/20">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-ai-green">
                  Explore More Projects
                </h3>
                <p className="text-lg text-muted-foreground mb-6">
                  Check out my GitHub for more projects including experimental AI tools, 
                  open-source contributions, and learning repositories.
                </p>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-ai-green/30 text-ai-green hover:bg-ai-green/10 hover:border-ai-green/50"
                  asChild
                >
                  <a href="https://github.com/elambharati" target="_blank" rel="noopener noreferrer">
                    <Github className="w-5 h-5 mr-2" />
                    View All Projects
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;