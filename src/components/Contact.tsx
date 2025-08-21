import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { 
  Mail, 
  Linkedin, 
  Github, 
  MapPin, 
  Phone, 
  Send, 
  Download,
  Calendar,
  MessageCircle
} from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    // Reset form
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const downloadResume = () => {
    // Create a dummy PDF download - replace with actual resume URL
    const link = document.createElement("a");
    link.href = "#"; // Replace with actual resume URL
    link.download = "Elambharati_E_Resume.pdf";
    link.click();
  };

  return (
    <section id="contact" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 slide-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Let's <span className="text-ai-blue">Connect</span>
            </h2>
            <div className="w-24 h-1 bg-ai-blue mx-auto mb-6 neural-pulse"></div>
            <p className="text-xl text-muted-foreground">
              Ready to collaborate on exciting AI projects? Let's discuss opportunities!
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-6">
              {/* Available for Work */}
              <Card className="bg-ai-green/5 border-ai-green/20 slide-up">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-3 h-3 bg-ai-green rounded-full animate-pulse"></div>
                    <Badge className="bg-ai-green/10 text-ai-green border-ai-green/30">
                      Available for Internships
                    </Badge>
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Seeking AI Engineering Intern Roles</h3>
                  <p className="text-muted-foreground text-sm">
                    Open to exciting opportunities in AI/ML, RAG systems, and AI-powered applications.
                  </p>
                </CardContent>
              </Card>

              {/* Contact Methods */}
              <Card className="bg-card/50 border-ai-blue/20 hover:border-ai-blue/40 transition-all duration-300 slide-up">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <MessageCircle className="w-5 h-5 text-ai-blue" />
                    <span>Get In Touch</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3 group cursor-pointer">
                    <div className="w-10 h-10 rounded-full bg-ai-green/20 flex items-center justify-center group-hover:bg-ai-green/30 transition-colors">
                      <Mail className="w-5 h-5 text-ai-green" />
                    </div>
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-sm text-muted-foreground">elambharati@example.com</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3 group cursor-pointer">
                    <div className="w-10 h-10 rounded-full bg-ai-blue/20 flex items-center justify-center group-hover:bg-ai-blue/30 transition-colors">
                      <Linkedin className="w-5 h-5 text-ai-blue" />
                    </div>
                    <div>
                      <p className="font-medium">LinkedIn</p>
                      <p className="text-sm text-muted-foreground">@elambharati</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3 group cursor-pointer">
                    <div className="w-10 h-10 rounded-full bg-ai-purple/20 flex items-center justify-center group-hover:bg-ai-purple/30 transition-colors">
                      <Github className="w-5 h-5 text-ai-purple" />
                    </div>
                    <div>
                      <p className="font-medium">GitHub</p>
                      <p className="text-sm text-muted-foreground">@elambharati</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3 group">
                    <div className="w-10 h-10 rounded-full bg-ai-green/20 flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-ai-green" />
                    </div>
                    <div>
                      <p className="font-medium">Location</p>
                      <p className="text-sm text-muted-foreground">India</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Resume Download */}
              <Card className="bg-card/50 border-ai-green/20 hover:border-ai-green/40 transition-all duration-300 slide-up">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-4 flex items-center space-x-2">
                    <Download className="w-5 h-5 text-ai-green" />
                    <span>Resume</span>
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Download my detailed resume with complete project descriptions and technical skills.
                  </p>
                  <Button
                    onClick={downloadResume}
                    className="w-full bg-ai-green hover:bg-ai-green/80 text-background font-semibold glow-green"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download Resume
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="bg-card/50 border-ai-blue/20 hover:border-ai-blue/40 transition-all duration-300 slide-up">
                <CardHeader>
                  <CardTitle className="text-2xl">Send me a message</CardTitle>
                  <p className="text-muted-foreground">
                    Have a project in mind or want to discuss AI opportunities? I'd love to hear from you!
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Name *</label>
                        <Input
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Your full name"
                          required
                          className="bg-background/50 border-muted focus:border-ai-blue"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Email *</label>
                        <Input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="your.email@example.com"
                          required
                          className="bg-background/50 border-muted focus:border-ai-blue"
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Subject *</label>
                      <Input
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="What's this about?"
                        required
                        className="bg-background/50 border-muted focus:border-ai-blue"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Message *</label>
                      <Textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell me about your project, opportunity, or just say hello!"
                        required
                        rows={6}
                        className="bg-background/50 border-muted focus:border-ai-blue resize-none"
                      />
                    </div>
                    
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-ai-blue hover:bg-ai-blue/80 text-background font-semibold glow-blue"
                    >
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Quick Connect Section */}
          <div className="mt-16 text-center slide-up">
            <Card className="bg-gradient-to-r from-ai-green/5 to-ai-blue/5 border-ai-green/20">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">
                  <span className="text-ai-green">Quick</span> <span className="text-ai-blue">Connect</span>
                </h3>
                <p className="text-muted-foreground mb-6">
                  Prefer social media? Connect with me on these platforms
                </p>
                <div className="flex justify-center space-x-4">
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-ai-green/30 text-ai-green hover:bg-ai-green/10"
                    asChild
                  >
                    <a href="https://linkedin.com/in/elambharati" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="w-5 h-5 mr-2" />
                      LinkedIn
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-ai-blue/30 text-ai-blue hover:bg-ai-blue/10"
                    asChild
                  >
                    <a href="https://github.com/elambharati" target="_blank" rel="noopener noreferrer">
                      <Github className="w-5 h-5 mr-2" />
                      GitHub
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;