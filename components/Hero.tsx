import { Button } from "./ui/button";
import { ArrowRight, Play } from "lucide-react";

export function Hero() {
  return (
    <section className="relative pt-20 sm:pt-32 pb-12 sm:pb-20 overflow-hidden">
      
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-center">
            {/* Content */}
            <div className="space-y-4 md:space-y-8 text-center max-w-4xl">
              <div className="space-y-3 md:space-y-6">
                <div className="inline-flex items-center px-4 py-2 bg-orange-100 text-orange-800 rounded-full text-sm font-medium">
                  ✨ New: Advanced design tools available
                </div>
                
                <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Make your{" "}
                  <span className="text-orange-600">
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
                  className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-xl transition-colors duration-200 group"
                >
                  Start creating for free
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-2 border-gray-200 hover:border-orange-300 px-8 py-4 rounded-xl transition-colors duration-200 hover:bg-orange-50 group"
                >
                  <Play className="mr-2 h-5 w-5" />
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
          </div>
        </div>
      </div>
    </section>
  );
}