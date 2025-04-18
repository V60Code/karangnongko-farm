import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  ChevronDown,
  LeafyGreen,
  Sprout,
  Activity,
  DollarSign,
} from "lucide-react";
import Navbar from "@/components/Navbar";

const Index = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="font-montserrat bg-farm-background min-h-screen overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section
        id="home"
        className="relative h-screen flex items-center justify-center text-white bg-gradient-to-br from-farm-secondary/90 to-farm-primary/90 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1517022812141-23620dba5c23?auto=format&fit=crop&w=2742")',
          backgroundBlendMode: "overlay",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40 z-0" />
        <div className="container mx-auto px-4 text-center space-y-6 animate-fade-in z-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight break-words">
            Welcome to <br />
            <span className="text-farm-tertiary">KarangnongkoFarm</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl max-w-xl mx-auto text-farm-tertiary/90">
            Digital Innovation for Local Goat Farming
          </p>
          <Button
            onClick={() => scrollToSection("about")}
            className="mt-8 bg-farm-tertiary hover:bg-farm-accent text-farm-secondary hover:text-farm-dark transition-all duration-300 scale-100 hover:scale-105"
          >
            Learn More <ChevronDown className="ml-2" />
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white">
        <div className="container px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-farm-dark text-center mb-16 relative">
            <span className="relative z-10">About Our Farm</span>
            <div className="absolute w-24 h-2 bg-farm-accent/50 bottom-0 left-1/2 transform -translate-x-1/2"></div>
          </h2>
          <div className="max-w-4xl mx-auto text-gray-600 space-y-8">
            <p className="text-lg leading-relaxed text-center">
              KarangnongkoFarm is leading the digital transformation of
              traditional goat farming in our village. We combine generations of
              farming expertise with modern technology to ensure the best care
              for our animals.
            </p>
            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <Card className="p-8 border-farm-accent/20 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-farm-tertiary/10">
                <h3 className="text-2xl font-semibold text-farm-primary mb-4">
                  Western Barn
                </h3>
                <p className="text-farm-dark/80">Managed by Mr. Samsuhadi</p>
              </Card>
              <Card className="p-8 border-farm-accent/20 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-farm-tertiary/10">
                <h3 className="text-2xl font-semibold text-farm-primary mb-4">
                  Eastern Barn
                </h3>
                <p className="text-farm-dark/80">Managed by Mr. Suliman</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section
        id="features"
        className="py-24 bg-gradient-to-br from-farm-background to-farm-tertiary/30"
      >
        <div className="container px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-farm-dark text-center mb-16 relative">
            <span className="relative z-10">Our Features</span>
            <div className="absolute w-24 h-2 bg-farm-accent/50 bottom-0 left-1/2 transform -translate-x-1/2"></div>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: LeafyGreen,
                title: "Animal Health",
                desc: "Regular health monitoring",
              },
              {
                icon: Sprout,
                title: "Feeding Schedule",
                desc: "Optimized nutrition plans",
              },
              {
                icon: Activity,
                title: "Birth Records",
                desc: "Comprehensive tracking",
              },
              {
                icon: DollarSign,
                title: "Sales Tracking",
                desc: "Financial management",
              },
            ].map((feature, i) => (
              <Card
                key={i}
                className="p-8 text-center hover:scale-105 transition-all duration-300 border-farm-accent/20 bg-white/80 backdrop-blur-sm"
              >
                <div className="bg-gradient-to-br from-farm-primary to-farm-secondary rounded-full p-4 w-16 h-16 mx-auto mb-6 text-white flex items-center justify-center">
                  <feature.icon className="w-8 h-8" />
                </div>
                <h3 className="font-semibold text-farm-dark text-xl mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-24 bg-white">
        <div className="container px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-farm-dark text-center mb-16 relative">
            <span className="relative z-10">What People Say</span>
            <div className="absolute w-24 h-2 bg-farm-accent/50 bottom-0 left-1/2 transform -translate-x-1/2"></div>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: "Pak Wahyu",
                role: "Local Farmer",
                quote:
                  "The digital system has made it so much easier to track our goats' health and growth.",
              },
              {
                name: "Ibu Siti",
                role: "Farm Manager",
                quote:
                  "Managing feeding schedules is now more efficient than ever before.",
              },
              {
                name: "Pak Hadi",
                role: "Village Elder",
                quote:
                  "This system brings our traditional farming methods into the modern age.",
              },
            ].map((testimonial, i) => (
              <Card
                key={i}
                className="p-8 border-farm-accent/20 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-farm-tertiary/10"
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-farm-primary to-farm-secondary flex items-center justify-center text-white">
                  <span className="text-2xl font-semibold">"{i + 1}"</span>
                </div>
                <p className="text-gray-600 italic mb-6">
                  "{testimonial.quote}"
                </p>
                <div className="text-farm-dark font-semibold text-lg">
                  {testimonial.name}
                </div>
                <div className="text-farm-primary">{testimonial.role}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        id="contact"
        className="py-24 bg-gradient-to-br from-farm-primary to-farm-secondary text-white relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-pattern opacity-10"></div>
        <div className="container px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Join the future of farming in Karangnongko
          </h2>
          <Button className="bg-white text-farm-secondary hover:bg-farm-tertiary hover:text-farm-dark transition-all duration-300 scale-100 hover:scale-105">
            See Our Farm
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-farm-dark text-white py-12">
        <div className="container px-4 text-center">
          <p className="text-lg opacity-90 font-light">
            KarangnongkoFarm
            <br />
            <span className="text-farm-tertiary">
              Desa Karangnongko, Kabupaten Klaten
              <br />
              Jawa Tengah, Indonesia
            </span>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
