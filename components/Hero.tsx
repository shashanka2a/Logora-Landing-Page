import { Button } from "./ui/button";
import { ArrowRight, Play } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Hero() {
  return (
    <section className="relative pt-20 sm:pt-32 pb-12 sm:pb-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-white to-orange-50/30 -z-10"></div>
      
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Content */}
            <div className="space-y-4 md:space-y-8">
              <div className="space-y-3 md:space-y-6">
                <div className="inline-flex items-center px-4 py-2 bg-orange-100 text-orange-800 rounded-full text-sm font-medium">
                  ✨ New: Advanced design tools available
                </div>
                
                <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Make your{" "}
                  <span className="bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent">
                    mark.
                  </span>
                </h1>
                
                <p className="text-lg sm:text-xl text-gray-600 max-w-lg leading-relaxed">
                  Design tools that help you create stunning visuals, build meaningful brands, and leave a lasting impression on the world.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-xl transition-all duration-200 hover:shadow-xl hover:shadow-orange-200 group"
                >
                  Start creating for free
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
                </Button>
                
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-2 border-gray-200 hover:border-orange-300 px-8 py-4 rounded-xl transition-all duration-200 hover:bg-orange-50 group"
                >
                  <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform duration-200" />
                  Watch demo
                </Button>
              </div>
              
              <div className="flex items-center space-x-8 text-sm text-gray-500">
                <div className="flex items-center space-x-2">
                  <span className="font-semibold text-gray-900">✨</span>
                  <span>Coming Soon</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="font-semibold text-gray-900">🎨</span>
                  <span>Design Better</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="font-semibold text-gray-900">🚀</span>
                  <span>Launch Faster</span>
                </div>
              </div>
            </div>
            
            {/* Right side - Hero image */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
                <img
                  src="/attached_assets/generated_images/Logora_design_tool_interface_20caf41a.png"
                  alt="Logora design tool interface showing brand identity creation in progress"
                  className="w-full h-96 object-cover"
                />
                
                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center shadow-lg animate-bounce">
                  <span className="text-white font-bold text-xl">✦</span>
                </div>
                
                <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full shadow-lg animate-pulse"></div>
              </div>
              
              {/* Background decorative elements */}
              <div className="absolute -z-10 top-8 right-8 w-72 h-72 bg-orange-200 rounded-full blur-3xl opacity-20"></div>
              <div className="absolute -z-10 bottom-8 left-8 w-48 h-48 bg-purple-200 rounded-full blur-2xl opacity-20"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}