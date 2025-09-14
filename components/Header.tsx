import { Button } from "./ui/button";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">L</span>
            </div>
            <span className="text-xl font-bold text-gray-900">Logora.design</span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-600 hover:text-orange-600 transition-colors duration-200">Features</a>
            <a href="#how-it-works" className="text-gray-600 hover:text-orange-600 transition-colors duration-200">How it works</a>
            <a href="#about" className="text-gray-600 hover:text-orange-600 transition-colors duration-200">About</a>
          </nav>
          
          <div className="flex items-center space-x-4">
            <Button variant="ghost" className="text-gray-600 hover:text-orange-600 hover:bg-orange-50">
              Sign in
            </Button>
            <Button className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-orange-200">
              Get started
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}