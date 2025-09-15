import { Palette, Layers, Zap, Users, Download, Shield } from "lucide-react";

const features = [
  {
    icon: Palette,
    title: "Pro Design Tools",
    description: "Everything you need to create",
    color: "bg-orange-100 text-orange-600"
  },
  {
    icon: Layers,
    title: "Smart Layers",
    description: "Organize with intelligence",
    color: "bg-blue-100 text-blue-600"
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Smooth, optimized workflow",
    color: "bg-yellow-100 text-yellow-600"
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Real-time teamwork",
    color: "bg-green-100 text-green-600"
  },
  {
    icon: Download,
    title: "Export Anywhere",
    description: "Any format, any platform",
    color: "bg-purple-100 text-purple-600"
  },
  {
    icon: Shield,
    title: "Secure & Private",
    description: "Enterprise-grade protection",
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
                className="group p-6 bg-white border border-gray-100 rounded-2xl hover:shadow-xl hover:shadow-gray-100 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="space-y-4 text-center">
                  <div className={`w-16 h-16 ${feature.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-200 mx-auto`}>
                    <feature.icon className="h-8 w-8" />
                  </div>
                  
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-orange-600 transition-colors duration-200">
                    {feature.title}
                  </h3>
                  
                  <p className="text-sm text-gray-500 font-medium">
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