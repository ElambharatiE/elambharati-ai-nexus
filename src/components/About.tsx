import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Brain, Code, Target } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 slide-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              About <span className="text-ai-green">Me</span>
            </h2>
            <div className="w-24 h-1 bg-ai-green mx-auto mb-6 neural-pulse"></div>
            <p className="text-xl text-muted-foreground">
              Passionate about AI, ML, and building intelligent systems
            </p>
          </div>

          {/* Main Content */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="slide-up">
              <h3 className="text-2xl font-bold mb-6 text-ai-blue">
                Hello, I'm Elambharati E
              </h3>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                I'm a Computer Science undergraduate (B.Tech CSE) with a strong academic record 
                (CGPA 8.68/10) and an unwavering passion for Artificial Intelligence and Machine Learning. 
                My journey in tech is driven by curiosity and the desire to build AI-native systems 
                that can make a real impact.
              </p>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                With hands-on experience in RAG architectures, LangChain, Hugging Face, and NLP, 
                I specialize in creating intelligent conversational systems and AI-powered developer tools. 
                I'm particularly fascinated by the intersection of AI and software engineering, 
                constantly exploring how AI can augment human capabilities.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Currently, I'm actively seeking <span className="text-ai-green font-semibold">
                AI Engineering Intern roles</span> where I can contribute to cutting-edge projects 
                and further develop my expertise in building production-ready AI systems.
              </p>
              
              {/* Key Focus Areas */}
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <Brain className="w-5 h-5 text-ai-green" />
                  <span className="text-sm">AI/ML Research</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Code className="w-5 h-5 text-ai-blue" />
                  <span className="text-sm">Full-Stack Development</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Target className="w-5 h-5 text-ai-purple" />
                  <span className="text-sm">Problem Solving</span>
                </div>
                <div className="flex items-center space-x-3">
                  <GraduationCap className="w-5 h-5 text-ai-green" />
                  <span className="text-sm">Continuous Learning</span>
                </div>
              </div>
            </div>

            {/* Stats Cards */}
            <div className="space-y-6 slide-up">
              <Card className="bg-card/50 border-ai-green/20 hover:border-ai-green/40 transition-all duration-300 neural-pulse">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-full bg-ai-green/20 flex items-center justify-center">
                      <GraduationCap className="w-6 h-6 text-ai-green" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">Education</h4>
                      <p className="text-muted-foreground">B.Tech CSE</p>
                      <p className="text-ai-green font-bold">CGPA: 8.68/10</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card/50 border-ai-blue/20 hover:border-ai-blue/40 transition-all duration-300 glow-pulse">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-full bg-ai-blue/20 flex items-center justify-center">
                      <Brain className="w-6 h-6 text-ai-blue" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">Specialization</h4>
                      <p className="text-muted-foreground">AI & Machine Learning</p>
                      <p className="text-ai-blue font-bold">RAG Systems & NLP</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card/50 border-ai-purple/20 hover:border-ai-purple/40 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-full bg-ai-purple/20 flex items-center justify-center">
                      <Target className="w-6 h-6 text-ai-purple" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">Goal</h4>
                      <p className="text-muted-foreground">AI Engineering Intern</p>
                      <p className="text-ai-purple font-bold">Building AI Solutions</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;