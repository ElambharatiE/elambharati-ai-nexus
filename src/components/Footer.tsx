const Footer = () => {
  return (
    <footer className="border-t border-ai-green/20 bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-muted-foreground">
              © 2025 Elambharati E. Built with React, TypeScript, and AI-powered design.
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-sm text-muted-foreground">Made with</span>
            <div className="flex items-center space-x-2">
              <span className="text-ai-green">●</span>
              <span className="text-ai-blue">●</span>
              <span className="text-ai-purple">●</span>
            </div>
            <span className="text-sm text-muted-foreground">and lots of coffee</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;