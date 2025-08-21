import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, Code, Wrench, Users } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "AI/ML",
      icon: Brain,
      color: "ai-green",
      skills: [
        "LLMs", "RAG Pipelines", "LangChain", "Hugging Face", 
        "Prompt Engineering", "NLP", "Conversational AI"
      ]
    },
    {
      title: "Programming",
      icon: Code,
      color: "ai-blue",
      skills: [
        "Python", "Java", "SQL", "JavaScript", 
        "MERN Stack", "FastAPI"
      ]
    },
    {
      title: "Tools",
      icon: Wrench,
      color: "ai-purple",
      skills: [
        "Git", "GitHub", "Docker", "Firebase", 
        "LangSmith (familiar)", "Weights & Biases (familiar)"
      ]
    },
    {
      title: "Soft Skills",
      icon: Users,
      color: "ai-green",
      skills: [
        "Problem Solving", "Teamwork", "Communication", "Leadership"
      ]
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case "ai-green":
        return {
          border: "border-ai-green/20 hover:border-ai-green/40",
          icon: "text-ai-green bg-ai-green/20",
          badge: "bg-ai-green/10 text-ai-green border-ai-green/30"
        };
      case "ai-blue":
        return {
          border: "border-ai-blue/20 hover:border-ai-blue/40",
          icon: "text-ai-blue bg-ai-blue/20",
          badge: "bg-ai-blue/10 text-ai-blue border-ai-blue/30"
        };
      case "ai-purple":
        return {
          border: "border-ai-purple/20 hover:border-ai-purple/40",
          icon: "text-ai-purple bg-ai-purple/20",
          badge: "bg-ai-purple/10 text-ai-purple border-ai-purple/30"
        };
      default:
        return {
          border: "border-ai-green/20 hover:border-ai-green/40",
          icon: "text-ai-green bg-ai-green/20",
          badge: "bg-ai-green/10 text-ai-green border-ai-green/30"
        };
    }
  };

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 slide-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Technical <span className="text-ai-blue">Skills</span>
            </h2>
            <div className="w-24 h-1 bg-ai-blue mx-auto mb-6 neural-pulse"></div>
            <p className="text-xl text-muted-foreground">
              Technologies and tools I work with to build intelligent systems
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 xl:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => {
              const colorClasses = getColorClasses(category.color);
              const IconComponent = category.icon;
              
              return (
                <Card 
                  key={category.title}
                  className={`bg-card/50 ${colorClasses.border} transition-all duration-300 hover:shadow-lg slide-up`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-3">
                      <div className={`w-10 h-10 rounded-full ${colorClasses.icon} flex items-center justify-center`}>
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <span className="text-xl">{category.title}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, skillIndex) => (
                        <Badge 
                          key={skill}
                          variant="outline"
                          className={`${colorClasses.badge} hover:scale-105 transition-transform duration-200 fade-in`}
                          style={{ animationDelay: `${(index * 0.1) + (skillIndex * 0.05)}s` }}
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Additional Info */}
          <div className="mt-16 text-center slide-up">
            <Card className="bg-secondary/20 border-ai-green/20">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-ai-green">
                  Current Focus Areas
                </h3>
                <p className="text-lg text-muted-foreground mb-6">
                  I'm constantly learning and staying updated with the latest developments in AI and ML
                </p>
                <div className="flex flex-wrap justify-center gap-3">
                  {[
                    "Large Language Models",
                    "Retrieval Augmented Generation",
                    "AI Agents",
                    "Vector Databases",
                    "MLOps",
                    "AI-Powered Development Tools"
                  ].map((focus, index) => (
                    <Badge 
                      key={focus}
                      className="bg-ai-green/10 text-ai-green border-ai-green/30 px-4 py-2 text-sm fade-in"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      {focus}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;