import React, { useEffect, useState } from 'react';
import { ArrowRight, Play, Star, Users, Target, TrendingUp, Mail, Phone, MapPin, Menu, X } from 'lucide-react';

const portfolioVideos = [
  'AQMYbbct6Q1Yy9QLdOujTehfaLjuZj4wy4MiKp4B6nku39ack3NAqmzpb2izRNWemojhskgM_ySkUQYMjgkWWEoW3BzI3WKrj5u2ERg.mp4',
  'AQMipyEGGDkQFz3MT8JOviekHkaQ2ceqV-yNrFpVdRa3UkgmUCLQi-5I4lAwTEXoQK7SwTxmj9xC0puU9pM7xETZ2w19k3VVtSVzxWI (1).mp4',
  'AQMz-P8MWmhU6CoCluWblaGxOayN8lgb_IJ_QmyjPEwUzGTI8YZegBNnszs7YP6GeVcVnN4J8BJB88CCcWup87pCWuhs8P9jBRXL4b4.mp4',
  'AQNZixAHgo214gxV1No7uyz3ppyOS1hE3cBwSN0JFG23fOVGL4taVGQiZ9h8y57YgJbQlNFvmaIwfvZpqafnfqMWEzadvxocP63lu8s.mp4',
  'AQPEVexxGAsUuXPbXyzvj5lkHVPly0AOkBkcWvyHhXpDu2l__xovlpVYC6jlPnqrOBFa1rcQN159qzqFspYxv1wKPlH0XJ9VLhiDqcs.mp4',
  'AQPuiMaUdyHnwgEjGX3Q9WNPBlYQ4c4ikGroDZz8-kKblVe-6SOIvpINZNWHQvsY6N1yXiRHzrS3zUWnFBJ3AtcQwr-MU6oD9uuYR5c.mp4'
].map((video, index) => ({
  id: `video-${index + 1}`,
  src: `/${video}`,
  title: `Project ${index + 1}`,
  client: `Zorko Jorhat `
}));

const clientLogos = [
  '23417219_190574031511797_2627148121058050048_n.jpg',
  '454406864_1033760151479733_4087489619421499830_n.jpg',
  '461806440_1259206868294615_1179500325135367093_n.jpg',
  '462375667_1725972738234643_118844111912548940_n.jpg',
  '470043160_1212662949799398_9175767297572834839_n.jpg',
  '475946271_1131674394829512_4690654875343203918_n.jpg',
  '476475103_2809148452616407_6000995653861091031_n.jpg',
  '483046703_3082915668529894_1633718318472618787_n.jpg'
].map((logo, index) => ({
  id: `logo-${index + 1}`,
  src: `/${logo}`,
  alt: `Client Logo ${index + 1}`
}));
import { Button } from '@/components/ui/button';

const Index = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Format the message for WhatsApp
    const whatsappMessage = `New Contact Form Submission:%0A%0A` +
      `*Name:* ${formData.name}%0A` +
      `*Email:* ${formData.email}%0A` +
      `*Phone:* ${formData.phone}%0A` +
      `*Message:* ${formData.message}%0A`;
    
    // Open WhatsApp with the message
    window.open(`https://wa.me/916000630826?text=${whatsappMessage}`, '_blank');
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
  };
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [statsVisible, setStatsVisible] = useState(false);
  const [projectsCount, setProjectsCount] = useState(0);
  const [clientsCount, setClientsCount] = useState(0);
  const [successRate, setSuccessRate] = useState(0);
  const [displayedText, setDisplayedText] = useState('');

  const fullText = 'Vertias Media';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Check if stats section is visible and hasn't been animated yet
      if (!statsVisible) {
        const aboutSection = document.getElementById('about');
        if (aboutSection) {
          const rect = aboutSection.getBoundingClientRect();
          const windowHeight = window.innerHeight;
          // Trigger when 50% of the about section is visible
          if (rect.top < windowHeight * 0.5 && rect.bottom > 0) {
            setStatsVisible(true);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [statsVisible]);

  // Typewriter effect for loading animation
  useEffect(() => {
    let currentIndex = 0;
    const typewriterTimer = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayedText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typewriterTimer);
        // Wait a bit after typing is complete, then hide loading
        setTimeout(() => {
          setIsLoading(false);
        }, 500);
      }
    }, 150); // Adjust speed of typing here

    return () => clearInterval(typewriterTimer);
  }, []);

  // Animate stats when visible - this only runs once when statsVisible becomes true
  useEffect(() => {
    if (statsVisible) {
      // Animate projects count
      let projectsStart = 0;
      const projectsEnd = 50;
      const projectsIncrement = projectsEnd / 60;
      const projectsTimer = setInterval(() => {
        projectsStart += projectsIncrement;
        if (projectsStart >= projectsEnd) {
          setProjectsCount(projectsEnd);
          clearInterval(projectsTimer);
        } else {
          setProjectsCount(Math.floor(projectsStart));
        }
      }, 16);

      // Animate clients count
      let clientsStart = 0;
      const clientsEnd = 20;
      const clientsIncrement = clientsEnd / 60;
      const clientsTimer = setInterval(() => {
        clientsStart += clientsIncrement;
        if (clientsStart >= clientsEnd) {
          setClientsCount(clientsEnd);
          clearInterval(clientsTimer);
        } else {
          setClientsCount(Math.floor(clientsStart));
        }
      }, 16);

      // Animate success rate
      let successStart = 0;
      const successEnd = 98;
      const successIncrement = successEnd / 60;
      const successTimer = setInterval(() => {
        successStart += successIncrement;
        if (successStart >= successEnd) {
          setSuccessRate(successEnd);
          clearInterval(successTimer);
        } else {
          setSuccessRate(Math.floor(successStart));
        }
      }, 16);

      return () => {
        clearInterval(projectsTimer);
        clearInterval(clientsTimer);
        clearInterval(successTimer);
      };
    }
  }, [statsVisible]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
        <h1 className="text-6xl md:text-8xl font-bold gradient-text">
          {displayedText}
          <span className="animate-pulse">|</span>
        </h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/90 backdrop-blur-lg border-b border-gold/20' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold gradient-text">Vertias Media</h1>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <button onClick={() => scrollToSection('home')} className="hover:text-gold transition-colors duration-300">Home</button>
                <button onClick={() => scrollToSection('services')} className="hover:text-gold transition-colors duration-300">Services</button>
                <button onClick={() => scrollToSection('about')} className="hover:text-gold transition-colors duration-300">About</button>
                <button onClick={() => scrollToSection('contact')} className="hover:text-gold transition-colors duration-300">Contact</button>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-white hover:text-gold transition-colors duration-300"
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-lg">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <button onClick={() => scrollToSection('home')} className="block px-3 py-2 text-base font-medium hover:text-gold transition-colors duration-300">Home</button>
              <button onClick={() => scrollToSection('services')} className="block px-3 py-2 text-base font-medium hover:text-gold transition-colors duration-300">Services</button>
              <button onClick={() => scrollToSection('about')} className="block px-3 py-2 text-base font-medium hover:text-gold transition-colors duration-300">About</button>
              <button onClick={() => scrollToSection('contact')} className="block px-3 py-2 text-base font-medium hover:text-gold transition-colors duration-300">Contact</button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23D4AF37' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Elevate Your Brand with
            <span className="block gradient-text">Vertias Media</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 animate-slide-in-right">
            We craft compelling narratives and digital experiences that drive results
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in">
            <Button 
              onClick={() => scrollToSection('contact')}
              className="bg-gold hover:bg-gold-600 text-black font-semibold px-8 py-3 text-lg transition-all duration-300 hover:scale-105 animate-glow"
            >
              Get Started <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              onClick={() => scrollToSection('services')}
              className="border-gold text-gold hover:bg-gold hover:text-black px-8 py-3 text-lg transition-all duration-300 hover:scale-105"
            >
              <Play className="mr-2 h-5 w-5" /> Our Work
            </Button>
          </div>
        </div>
      </section>

      {/* Clients Logo Carousel */}
      <section className="py-12 bg-gray-900/50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Trusted by <span className="gradient-text">Industry Leaders</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              We're proud to collaborate with innovative companies across various industries
            </p>
          </div>
          
          <div className="relative overflow-hidden">
            <div className="flex items-center py-6 whitespace-nowrap">
              {/* First set of logos */}
              <div className="flex items-center animate-scroll">
                {clientLogos.map((logo) => (
                  <div key={logo.id} className="flex-shrink-0 px-4 opacity-80 hover:opacity-100 transition-opacity duration-300">
                    <div className="w-40 h-32 flex items-center justify-center p-2">
                      <img 
                        src={logo.src} 
                        alt={logo.alt}
                        className="max-h-full max-w-full object-contain"
                        loading="lazy"
                      />
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Duplicate for seamless loop */}
              <div className="flex items-center animate-scroll" aria-hidden="true">
                {clientLogos.map((logo) => (
                  <div key={`dup-${logo.id}`} className="flex-shrink-0 px-4 opacity-80 hover:opacity-100 transition-opacity duration-300">
                    <div className="w-40 h-32 flex items-center justify-center p-2">
                      <img 
                        src={logo.src} 
                        alt=""
                        className="max-h-full max-w-full object-contain"
                        loading="lazy"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        <style dangerouslySetInnerHTML={{
          __html: `
            @keyframes scroll {
              0% { transform: translateX(0); }
              100% { transform: translateX(calc(-200px * ${clientLogos.length / 2})); }
            }
            .animate-scroll {
              animation: scroll ${clientLogos.length * 5}s linear infinite;
            }
          `
        }} />
      </section>

      {/* About Section */}
      <section id="about" className="section-padding bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                About <span className="gradient-text">Vertias Media</span>
              </h2>
              <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                At Vertias Media, we believe in the power of authentic storytelling. Our team of creative professionals and strategic thinkers work together to build brands that matter.
              </p>
              <p className="text-lg text-gray-400 mb-8 leading-relaxed">
                With over a decade of experience in the industry, we've helped businesses of all sizes achieve their marketing goals through innovative strategies and compelling creative execution.
              </p>
              <div className="grid grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-gold mb-2 transition-all duration-1000">
                    {projectsCount}+
                  </div>
                  <div className="text-gray-300">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gold mb-2 transition-all duration-1000">
                    {clientsCount}+
                  </div>
                  <div className="text-gray-300">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gold mb-2 transition-all duration-1000">
                    {successRate}%
                  </div>
                  <div className="text-gray-300">Success Rate</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-gold/20 to-transparent rounded-full absolute -top-10 -right-10 w-72 h-72 blur-3xl"></div>
              <div className="relative z-10 bg-gray-900/50 backdrop-blur-sm p-8 rounded-2xl border border-gold/20">
                <h3 className="text-2xl font-semibold mb-4 gradient-text">Our Mission</h3>
                <p className="text-gray-300 leading-relaxed">
                  To empower businesses with marketing strategies that drive real results. We combine creativity with data-driven insights to create campaigns that not only look great but perform exceptionally.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section-padding bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Our <span className="gradient-text">Services</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              We deliver comprehensive marketing solutions that transform your business
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Target className="h-12 w-12 text-gold" />,
                title: "Brand Strategy",
                description: "Comprehensive brand positioning and strategy development that resonates with your target audience."
              },
              {
                icon: <TrendingUp className="h-12 w-12 text-gold" />,
                title: "Digital Marketing",
                description: "Data-driven digital campaigns across all platforms to maximize your reach and ROI."
              },
              {
                icon: <Users className="h-12 w-12 text-gold" />,
                title: "Social Media",
                description: "Engaging social media strategies that build communities and drive meaningful conversations."
              },
              {
                icon: <Star className="h-12 w-12 text-gold" />,
                title: "Creative Production",
                description: "Award-winning creative content that captures attention and drives action."
              },
              {
                icon: <Target className="h-12 w-12 text-gold" />,
                title: "Performance Analytics",
                description: "In-depth analysis and reporting to optimize campaigns and measure success."
              },
              {
                icon: <TrendingUp className="h-12 w-12 text-gold" />,
                title: "Consulting",
                description: "Strategic marketing consulting to guide your business growth and market expansion."
              }
            ].map((service, index) => (
              <div 
                key={index}
                className="bg-black/50 backdrop-blur-sm p-8 rounded-lg border border-gold/20 hover-lift group cursor-pointer"
              >
                <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-semibold mb-4 group-hover:text-gold transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Our <span className="gradient-text">Portfolio</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Check out our latest video projects and creative work
            </p>
          </div>
          
          <div className="relative">
            <div className="flex space-x-6 pb-8 overflow-x-auto snap-x snap-mandatory scrollbar-hide">
              {portfolioVideos.map((video) => (
                <div key={video.id} className="flex-shrink-0 w-80 h-[calc(80vh)] snap-center">
                  <div className="relative w-full h-full rounded-xl overflow-hidden bg-black border border-gold/20 group">
                    {/* Video Element */}
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover"
                    >
                      <source src={video.src} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                    
                    {/* Hover Overlay - Removed text elements as requested */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Navigation Arrows */}
            <button className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/80 text-gold p-3 rounded-full hover:bg-gold hover:text-black transition-all duration-300 z-10 hidden md:block">
              <ArrowRight className="h-6 w-6 rotate-180" />
            </button>
            <button className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/80 text-gold p-3 rounded-full hover:bg-gold hover:text-black transition-all duration-300 z-10 hidden md:block">
              <ArrowRight className="h-6 w-6" />
            </button>
          </div>
          
          <div className="text-center mt-12">
            <Button 
              variant="outline"
              className="border-gold text-gold hover:bg-gold hover:text-black px-8 py-3 text-lg transition-all duration-300"
            >
              View Full Portfolio
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Let's Work <span className="gradient-text">Together</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Ready to elevate your brand? Get in touch and let's create something amazing.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h3 className="text-2xl font-semibold mb-8">Get in Touch</h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-gold/20 p-3 rounded-lg">
                    <Mail className="h-6 w-6 text-gold" />
                  </div>
                  <div>
                    <div className="font-semibold">Email</div>
                    <div className="text-gray-300">hello@vertiasmedia.com</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="bg-gold/20 p-3 rounded-lg">
                    <Phone className="h-6 w-6 text-gold" />
                  </div>
                  <div>
                    <div className="font-semibold">Phone</div>
                    <div className="text-gray-300">+91 60006 30826</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="bg-gold/20 p-3 rounded-lg">
                    <MapPin className="h-6 w-6 text-gold" />
                  </div>
                  <div>
                    <div className="font-semibold">Location</div>
                    <div className="text-gray-300">Jorhat Assam 785001</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-black/50 backdrop-blur-sm p-8 rounded-lg border border-gold/20">
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg focus:border-gold focus:outline-none transition-colors duration-300"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg focus:border-gold focus:outline-none transition-colors duration-300"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Phone</label>
                  <input 
                    type="tel" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg focus:border-gold focus:outline-none transition-colors duration-300"
                    placeholder="+91 60006 30826"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg focus:border-gold focus:outline-none transition-colors duration-300"
                    placeholder="Tell us about your project..."
                    required
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  className="w-full bg-gold hover:bg-gold/90 text-black font-medium py-3 px-6 rounded-lg transition-colors duration-300 flex items-center justify-center space-x-2"
                >
                  <span>Send Message via WhatsApp</span>
                  <ArrowRight className="h-5 w-5" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-gold/20 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-bold gradient-text mb-4">Vertias Media</h3>
          <p className="text-gray-400 mb-4">Crafting authentic stories that drive results</p>
          <p className="text-sm text-gray-500">© 2024 Vertias Media. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
