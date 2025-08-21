import { Card, CardContent } from "@/components/ui/card";
import { Trophy, Award, BookOpen, Star, Calendar } from "lucide-react";

const Achievements = () => {
  const achievements = [
    {
      title: "Winner - HackIndia 2025",
      description: "Web3 & AI Hackathon",
      details: "Won first place for developing an innovative Financial Chatbot with RAG architecture, competing against 500+ teams nationwide.",
      icon: Trophy,
      color: "ai-green",
      date: "2025",
      type: "Competition"
    },
    {
      title: "Finalist - GeeksforGeeks Algorithmist 2024",
      description: "National Coding Championship",
      details: "Reached the national finals among top 50 participants out of 10,000+ contestants in competitive programming.",
      icon: Award,
      color: "ai-blue",
      date: "2024",
      type: "Competition"
    },
    {
      title: "Published Research Paper",
      description: "Multilingual Tech Support Chatbot",
      details: "Co-authored and published research on NLP-based multilingual customer support systems with sentiment analysis capabilities.",
      icon: BookOpen,
      color: "ai-purple",
      date: "2024",
      type: "Research"
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case "ai-green":
        return {
          border: "border-ai-green/20 hover:border-ai-green/40",
          icon: "text-ai-green bg-ai-green/20",
          accent: "text-ai-green"
        };
      case "ai-blue":
        return {
          border: "border-ai-blue/20 hover:border-ai-blue/40",
          icon: "text-ai-blue bg-ai-blue/20",
          accent: "text-ai-blue"
        };
      case "ai-purple":
        return {
          border: "border-ai-purple/20 hover:border-ai-purple/40",
          icon: "text-ai-purple bg-ai-purple/20",
          accent: "text-ai-purple"
        };
      default:
        return {
          border: "border-ai-green/20 hover:border-ai-green/40",
          icon: "text-ai-green bg-ai-green/20",
          accent: "text-ai-green"
        };
    }
  };

  return (
    <section id="achievements" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 slide-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-ai-green">Achievements</span> & Recognition
            </h2>
            <div className="w-24 h-1 bg-ai-green mx-auto mb-6 neural-pulse"></div>
            <p className="text-xl text-muted-foreground">
              Milestones that mark my journey in AI and technology
            </p>
          </div>

          {/* Achievements Grid */}
          <div className="space-y-8">
            {achievements.map((achievement, index) => {
              const colorClasses = getColorClasses(achievement.color);
              const IconComponent = achievement.icon;
              
              return (
                <Card 
                  key={achievement.title}
                  className={`bg-card/50 ${colorClasses.border} transition-all duration-300 hover:shadow-xl slide-up group overflow-hidden`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <CardContent className="p-8">
                    <div className="flex flex-col md:flex-row md:items-center gap-6">
                      {/* Icon and Type Badge */}
                      <div className="flex items-center space-x-4">
                        <div className={`w-16 h-16 rounded-full ${colorClasses.icon} flex items-center justify-center group-hover:scale-110 transition-transform duration-200 neural-pulse`}>
                          <IconComponent className="w-8 h-8" />
                        </div>
                        <div className="flex flex-col">
                          <span className={`text-sm font-medium ${colorClasses.accent} mb-1`}>
                            {achievement.type}
                          </span>
                          <div className="flex items-center space-x-2 text-muted-foreground">
                            <Calendar className="w-4 h-4" />
                            <span className="text-sm">{achievement.date}</span>
                          </div>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <h3 className="text-xl md:text-2xl font-bold mb-2 group-hover:text-ai-green transition-colors duration-200">
                          {achievement.title}
                        </h3>
                        <p className={`text-lg mb-3 ${colorClasses.accent} font-medium`}>
                          {achievement.description}
                        </p>
                        <p className="text-muted-foreground leading-relaxed">
                          {achievement.details}
                        </p>
                      </div>

                      {/* Star Rating Visual */}
                      <div className="hidden lg:flex flex-col items-center space-y-1">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className={`w-5 h-5 ${colorClasses.accent} opacity-80 particle-float`}
                            style={{ animationDelay: `${i * 0.1}s` }}
                          />
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Additional Recognition */}
          <div className="mt-16 slide-up">
            <Card className="bg-secondary/20 border-ai-blue/20">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-6 text-ai-blue">
                  Additional Recognition
                </h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="fade-in" style={{ animationDelay: "0.1s" }}>
                    <div className="text-3xl font-bold text-ai-green mb-2">8.68/10</div>
                    <p className="text-muted-foreground">Academic CGPA</p>
                  </div>
                  <div className="fade-in" style={{ animationDelay: "0.2s" }}>
                    <div className="text-3xl font-bold text-ai-blue mb-2">500+</div>
                    <p className="text-muted-foreground">Hackathon Participants Beaten</p>
                  </div>
                  <div className="fade-in" style={{ animationDelay: "0.3s" }}>
                    <div className="text-3xl font-bold text-ai-purple mb-2">Top 50</div>
                    <p className="text-muted-foreground">National Coding Finalist</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;