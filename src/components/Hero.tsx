import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ArrowDown } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section 
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(17, 24, 39, 0.8), rgba(17, 24, 39, 0.9)), url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Content */}
      <div className="container mx-auto px-4 text-center z-10 slide-up">
        <div className="max-w-4xl mx-auto">
          {/* Animated Greeting */}
          <div className="mb-6 fade-in">
            <span className="text-ai-blue text-lg font-mono">&lt;hello_world&gt;</span>
          </div>
          
          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 slide-up">
            <span className="text-foreground">I'm </span>
            <span className="text-ai-green neural-pulse">Elambharati E</span>
          </h1>
          
          {/* Tagline */}
          <h2 className="text-xl md:text-3xl mb-8 text-muted-foreground slide-up">
            AI & ML Engineer | Building the Future with 
            <span className="text-ai-blue"> Data</span>, 
            <span className="text-ai-green"> Intelligence</span>, and 
            <span className="text-ai-purple"> Code</span>
          </h2>
          
          {/* Description */}
          <p className="text-lg mb-8 text-muted-foreground max-w-2xl mx-auto fade-in">
            Computer Science undergraduate passionate about creating AI-native systems, 
            RAG architectures, and intelligent solutions that push the boundaries of what's possible.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 fade-in">
            <Button 
              size="lg" 
              className="bg-ai-green hover:bg-ai-green/80 text-background font-semibold px-8 py-6 text-lg glow-green"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View My Work
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-ai-blue/30 text-ai-blue hover:bg-ai-blue/10 hover:border-ai-blue/50 px-8 py-6 text-lg glow-blue"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get In Touch
            </Button>
          </div>
          
          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-12 fade-in">
            <a 
              href="https://github.com/elambharati" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-ai-green transition-colors duration-200 p-2 rounded-full hover:bg-ai-green/10"
            >
              <Github size={24} />
            </a>
            <a 
              href="https://linkedin.com/in/elambharati" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-ai-blue transition-colors duration-200 p-2 rounded-full hover:bg-ai-blue/10"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="mailto:elambharati@example.com"
              className="text-muted-foreground hover:text-ai-purple transition-colors duration-200 p-2 rounded-full hover:bg-ai-purple/10"
            >
              <Mail size={24} />
            </a>
          </div>
          
          {/* Closing Tag */}
          <div className="mb-8 fade-in">
            <span className="text-ai-blue text-lg font-mono">&lt;/hello_world&gt;</span>
          </div>
        </div>
      </div>
      
      {/* Animated Scroll Indicator */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-ai-green hover:text-ai-blue transition-colors duration-200 particle-float"
      >
        <ArrowDown size={32} />
      </button>
    </section>
  );
};

export default Hero;