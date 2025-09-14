import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ArrowRight } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Plan & Conceptualize",
    description: "Start with your ideas and transform them into a clear creative vision using our intuitive planning tools.",
    image: "/Design_planning_conceptualization_illustration_92bcf755.png"
  },
  {
    number: "02", 
    title: "Design & Create",
    description: "Bring your vision to life with our powerful design tools and extensive library of assets and templates.",
    image: "/Design_creation_tools_interface_d82b560a.png"
  },
  {
    number: "03",
    title: "Share & Collaborate", 
    description: "Collaborate with your team in real-time and share your creations with the world across any platform.",
    image: "/Design_collaboration_sharing_illustration_9171da27.png"
  }
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 bg-gradient-to-br from-gray-50 to-orange-50/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold text-gray-900">
              How it{" "}
              <span className="bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent">
                works
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Three simple steps to transform your creative ideas into stunning designs that make an impact.
            </p>
          </div>
          
          {/* Steps */}
          <div className="space-y-16">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                  {/* Content */}
                  <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                    <div className="inline-flex items-center space-x-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-lg">
                        <span className="text-white font-bold text-lg">{step.number}</span>
                      </div>
                      <div className="h-px bg-gradient-to-r from-orange-300 to-transparent w-20"></div>
                    </div>
                    
                    <div className="space-y-4">
                      <h3 className="text-3xl font-bold text-gray-900">
                        {step.title}
                      </h3>
                      <p className="text-lg text-gray-600 leading-relaxed max-w-md">
                        {step.description}
                      </p>
                    </div>
                    
                    <button className="inline-flex items-center text-orange-600 hover:text-orange-700 font-medium group transition-colors duration-200">
                      Learn more
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                    </button>
                  </div>
                  
                  {/* Image */}
                  <div className={`relative ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
                      <ImageWithFallback
                        src={step.image}
                        alt={step.title}
                        className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      
                      {/* Overlay gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    
                    {/* Decorative elements */}
                    <div className={`absolute -z-10 w-64 h-64 bg-orange-200 rounded-full blur-3xl opacity-20 ${index % 2 === 0 ? '-top-8 -right-8' : '-bottom-8 -left-8'}`}></div>
                  </div>
                </div>
                
                {/* Connecting line (except for last item) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute left-8 bottom-0 w-px h-16 bg-gradient-to-b from-orange-300 to-transparent transform translate-y-full"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}