import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ArrowRight } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Plan & Conceptualize",
    description: "Start with your ideas and transform them into a clear creative vision using our intuitive planning tools.",
    image: "/attached_assets/generated_images/Planning_phase_icon_0810122d.png"
  },
  {
    number: "02", 
    title: "Design & Create",
    description: "Bring your vision to life with our powerful design tools and extensive library of assets and templates.",
    image: "/attached_assets/generated_images/Design_creation_icon_c2401407.png"
  },
  {
    number: "03",
    title: "Share & Collaborate", 
    description: "Collaborate with your team in real-time and share your creations with the world across any platform.",
    image: "/attached_assets/generated_images/Sharing_collaboration_icon_b8c190fb.png"
  }
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold text-gray-900">
              How it{" "}
              <span className="text-orange-600">
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
                      <div className="w-16 h-16 bg-orange-600 rounded-2xl flex items-center justify-center">
                        <span className="text-white font-bold text-lg">{step.number}</span>
                      </div>
                      <div className="h-px bg-orange-300 w-20"></div>
                    </div>
                    
                    <div className="space-y-4">
                      <h3 className="text-3xl font-bold text-gray-900">
                        {step.title}
                      </h3>
                      <p className="text-lg text-gray-600 leading-relaxed max-w-md">
                        {step.description}
                      </p>
                    </div>
                    
                    <button className="inline-flex items-center text-orange-600 hover:text-orange-700 font-medium transition-colors duration-200">
                      Learn more
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </button>
                  </div>
                  
                  {/* Image */}
                  <div className={`relative ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                    <div className="flex items-center justify-center p-12 bg-white rounded-2xl">
                      <img
                        src={step.image}
                        alt={step.title}
                        className="w-32 h-32 object-contain"
                      />
                    </div>
                  </div>
                </div>
                
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}