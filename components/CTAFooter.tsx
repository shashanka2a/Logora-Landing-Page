import { Button } from "./ui/button";
import { ArrowRight, Mail, Twitter, Github, Linkedin } from "lucide-react";

export function CTAFooter() {
  return (
    <footer className="relative bg-gray-900 text-white">
      {/* CTA Section */}
      <div className="relative py-20 overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-600/20 via-gray-900 to-purple-600/20"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="space-y-6">
              <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
                Ready to make your{" "}
                <span className="bg-gradient-to-r from-orange-400 to-orange-300 bg-clip-text text-transparent">
                  mark?
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
                Join thousands of designers who are already creating amazing work with Logora.design. Start your journey today.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-xl transition-all duration-200 hover:shadow-xl hover:shadow-orange-600/25 group"
              >
                Start creating for free
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="border-2 border-gray-600 hover:border-orange-400 text-gray-300 hover:text-white px-8 py-4 rounded-xl transition-all duration-200 hover:bg-orange-600/10"
              >
                Contact sales
              </Button>
            </div>
            
            <div className="flex items-center justify-center space-x-8 text-sm text-gray-400">
              <span>✓ Free 14-day trial</span>
              <span>✓ No credit card required</span>
              <span>✓ Cancel anytime</span>
            </div>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-orange-500 rounded-full blur-3xl opacity-10"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-purple-500 rounded-full blur-3xl opacity-10"></div>
      </div>
      
      {/* Footer Links */}
      <div className="border-t border-gray-800 py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Logo and description */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">L</span>
                </div>
                <span className="text-xl font-bold">Logora.design</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Professional design tools for creators who want to make their mark on the world.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors duration-200">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors duration-200">
                  <Github className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors duration-200">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors duration-200">
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </div>
            
            {/* Product */}
            <div className="space-y-4">
              <h4 className="font-semibold text-white">Product</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-gray-400 hover:text-orange-400 transition-colors duration-200">Features</a></li>
                <li><a href="#" className="text-gray-400 hover:text-orange-400 transition-colors duration-200">Pricing</a></li>
                <li><a href="#" className="text-gray-400 hover:text-orange-400 transition-colors duration-200">Templates</a></li>
                <li><a href="#" className="text-gray-400 hover:text-orange-400 transition-colors duration-200">Integrations</a></li>
              </ul>
            </div>
            
            {/* Company */}
            <div className="space-y-4">
              <h4 className="font-semibold text-white">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-gray-400 hover:text-orange-400 transition-colors duration-200">About</a></li>
                <li><a href="#" className="text-gray-400 hover:text-orange-400 transition-colors duration-200">Blog</a></li>
                <li><a href="#" className="text-gray-400 hover:text-orange-400 transition-colors duration-200">Careers</a></li>
                <li><a href="#" className="text-gray-400 hover:text-orange-400 transition-colors duration-200">Contact</a></li>
              </ul>
            </div>
            
            {/* Support */}
            <div className="space-y-4">
              <h4 className="font-semibold text-white">Support</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-gray-400 hover:text-orange-400 transition-colors duration-200">Help Center</a></li>
                <li><a href="#" className="text-gray-400 hover:text-orange-400 transition-colors duration-200">Documentation</a></li>
                <li><a href="#" className="text-gray-400 hover:text-orange-400 transition-colors duration-200">Community</a></li>
                <li><a href="#" className="text-gray-400 hover:text-orange-400 transition-colors duration-200">Status</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom bar */}
      <div className="border-t border-gray-800 py-6">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2024 Logora.design. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors duration-200">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors duration-200">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors duration-200">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}