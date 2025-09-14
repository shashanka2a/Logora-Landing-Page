import { Palette, Layers, Zap, Users, Download, Shield } from "lucide-react";

const features = [
  {
    icon: Palette,
    title: "Advanced Design Tools",
    description: "Professional-grade tools for creating stunning visuals with precision and creativity.",
    color: "bg-orange-100 text-orange-600"
  },
  {
    icon: Layers,
    title: "Smart Layers",
    description: "Organize your work with intelligent layer management and automatic grouping.",
    color: "bg-blue-100 text-blue-600"
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Optimized performance ensures smooth workflow even with complex projects.",
    color: "bg-yellow-100 text-yellow-600"
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Work together seamlessly with real-time collaboration and version control.",
    color: "bg-green-100 text-green-600"
  },
  {
    icon: Download,
    title: "Export Anywhere",
    description: "Export your designs in any format for web, print, or mobile applications.",
    color: "bg-purple-100 text-purple-600"
  },
  {
    icon: Shield,
    title: "Secure & Private",
    description: "Your creative work is protected with enterprise-grade security and privacy.",
    color: "bg-pink-100 text-pink-600"
  }
];

export function FeaturesGrid() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold text-gray-900">
              Everything you need to{" "}
              <span className="bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent">
                create
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Powerful features designed to help you bring your creative vision to life with ease and precision.
            </p>
          </div>
          
          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group p-8 bg-white border border-gray-100 rounded-2xl hover:shadow-xl hover:shadow-gray-100 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="space-y-4">
                  <div className={`w-12 h-12 ${feature.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-200`}>
                    <feature.icon className="h-6 w-6" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 group-hover:text-orange-600 transition-colors duration-200">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}