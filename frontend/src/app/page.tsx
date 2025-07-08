"use client";
import React, { useState, useEffect, useCallback, useMemo } from "react";
import {
  Phone,
  MessageCircle,
  Clock,
  Shield,
  Users,
  Zap,
  BarChart3,
  CheckCircle,
  Star,
  Play,
  ArrowRight,
  Bot,
  Mic,
  Volume2,
  Menu,
  X,
  ChevronDown,
  TrendingUp,
  Award,
  Sparkles,
} from "lucide-react";

const InsureBotLanding = () => {
  const [currentFeature, setCurrentFeature] = useState(0);
  const [isWidgetLoaded, setIsWidgetLoaded] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState({});

  // Memoized data
  const features = useMemo(
    () => [
      {
        icon: <MessageCircle className="w-6 h-6 md:w-8 md:h-8" />,
        title: "Natural Voice AI",
        description:
          "Human-like conversations with advanced speech synthesis and natural language understanding",
        highlight: "97% accuracy rate",
        color: "from-blue-400 to-green-400",
      },
      {
        icon: <Clock className="w-6 h-6 md:w-8 md:h-8" />,
        title: "Lightning Fast",
        description:
          "Sub-second response times for seamless real-time conversations",
        highlight: "0.18s avg response",
        color: "from-green-400 to-cyan-400",
      },
      {
        icon: <Shield className="w-6 h-6 md:w-8 md:h-8" />,
        title: "Insurance Expert",
        description:
          "Trained on comprehensive insurance knowledge and real call recordings",
        highlight: "98% domain accuracy",
        color: "from-purple-400 to-green-400",
      },
      {
        icon: <Users className="w-6 h-6 md:w-8 md:h-8" />,
        title: "Smart Interruption",
        description:
          "Handles conversation flow and customer interruptions intelligently",
        highlight: "95% success rate",
        color: "from-orange-400 to-green-400",
      },
      {
        icon: <Bot className="w-6 h-6 md:w-8 md:h-8" />,
        title: "Empathetic AI",
        description:
          "Understands customer emotions and responds with appropriate empathy",
        highlight: "4.8/5 satisfaction",
        color: "from-pink-400 to-green-400",
      },
      {
        icon: <Zap className="w-6 h-6 md:w-8 md:h-8" />,
        title: "24/7 Available",
        description:
          "Always-on support that never sleeps, handling thousands of calls simultaneously",
        highlight: "100% uptime",
        color: "from-yellow-400 to-green-400",
      },
    ],
    []
  );

  const metrics = useMemo(
    () => [
      {
        value: "2,847",
        label: "Conversations Today",
        trend: "+12.5%",
        icon: <MessageCircle className="w-5 h-5" />,
      },
      {
        value: "0.18s",
        label: "Avg Response Time",
        trend: "-8.2%",
        icon: <Clock className="w-5 h-5" />,
      },
      {
        value: "97.3%",
        label: "Success Rate",
        trend: "+2.1%",
        icon: <CheckCircle className="w-5 h-5" />,
      },
      {
        value: "4.8/5",
        label: "Customer Rating",
        trend: "+0.3",
        icon: <Star className="w-5 h-5" />,
      },
    ],
    []
  );

  const testimonials = useMemo(
    () => [
      {
        quote:
          "InsureBot handles complex insurance queries with remarkable accuracy. It's like having our best agent available 24/7.",
        author: "Sarah Chen",
        role: "Insurance Operations Manager",
        company: "SecureLife Insurance",
        avatar: "SC",
      },
      {
        quote:
          "The voice quality is indistinguishable from human agents. Our customers love the instant, accurate responses.",
        author: "Raj Patel",
        role: "Customer Experience Lead",
        company: "Guardian Insurance",
        avatar: "RP",
      },
      {
        quote:
          "Implementation was seamless. InsureBot reduced our response time by 80% while maintaining high satisfaction scores.",
        author: "Emily Rodriguez",
        role: "Tech Director",
        company: "Modern Insurance Co.",
        avatar: "ER",
      },
    ],
    []
  );

  const techSpecs = useMemo(
    () => [
      {
        label: "Response Latency",
        value: "< 200ms",
        icon: <Clock className="w-4 h-4 md:w-5 md:h-5" />,
      },
      {
        label: "Concurrent Calls",
        value: "1000+",
        icon: <Users className="w-4 h-4 md:w-5 md:h-5" />,
      },
      {
        label: "Accuracy Rate",
        value: "97.3%",
        icon: <CheckCircle className="w-4 h-4 md:w-5 md:h-5" />,
      },
      {
        label: "Uptime",
        value: "99.9%",
        icon: <Shield className="w-4 h-4 md:w-5 md:h-5" />,
      },
    ],
    []
  );

  // Optimized scroll handler
  const handleScroll = useCallback(() => {
    setScrollY(window.scrollY);
  }, []);

  // Intersection Observer for animations
  const observeElements = useCallback(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({
              ...prev,
              [entry.target.id]: true,
            }));
          }
        });
      },
      { threshold: 0.1, rootMargin: "50px" }
    );

    const elements = document.querySelectorAll("[data-animate]");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  // useEffect(() => {
  //   // Load VAPI widget script
  //   const script = document.createElement("script");
  //   script.src =
  //     "https://unpkg.com/@vapi-ai/client-sdk-react/dist/embed/widget.umd.js";
  //   script.async = true;
  //   script.type = "text/javascript";
  //   script.onload = () => setIsWidgetLoaded(true);
  //   document.head.appendChild(script);

  //   // Scroll event listener
  //   window.addEventListener("scroll", handleScroll, { passive: true });

  //   // Intersection Observer
  //   const cleanup = observeElements();

  //   return () => {
  //     if (document.head.contains(script)) {
  //       document.head.removeChild(script);
  //     }
  //     window.removeEventListener("scroll", handleScroll);
  //     cleanup();
  //   };
  // }, [handleScroll, observeElements]);

  // Feature rotation effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % features.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [features.length]);

  // Memoized components
  const MemoizedNavigation = React.memo(() => (
    <nav className="fixed top-0 w-full bg-black/95 backdrop-blur-md z-50 border-b border-green-400/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-3">
            <div className="relative">
              <Shield className="w-8 h-8 text-green-400" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
            </div>
            <span className="text-xl md:text-2xl font-bold text-green-400">
              InsureBot
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#features"
              className="hover:text-green-400 transition-colors duration-300"
            >
              Features
            </a>
            <a
              href="#demo"
              className="hover:text-green-400 transition-colors duration-300"
            >
              Demo
            </a>
            <a
              href="#analytics"
              className="hover:text-green-400 transition-colors duration-300"
            >
              Analytics
            </a>
            <button className="bg-green-400 text-black px-6 py-2 rounded-lg font-semibold hover:bg-green-300 transition-all duration-300 transform hover:scale-105">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-green-400/20 transition-colors duration-300"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-green-400/20 bg-black/95 backdrop-blur-md">
            <div className="py-4 space-y-3">
              <a
                href="#features"
                className="block px-4 py-2 hover:bg-green-400/20 transition-colors duration-300"
              >
                Features
              </a>
              <a
                href="#demo"
                className="block px-4 py-2 hover:bg-green-400/20 transition-colors duration-300"
              >
                Demo
              </a>
              <a
                href="#analytics"
                className="block px-4 py-2 hover:bg-green-400/20 transition-colors duration-300"
              >
                Analytics
              </a>
              <button className="mx-4 bg-green-400 text-black px-6 py-2 rounded-lg font-semibold hover:bg-green-300 transition-all duration-300 w-full">
                Get Started
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  ));

  const AnimatedBackground = React.memo(() => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-gradient-to-br from-green-400/5 via-transparent to-green-400/3"></div>

      {/* Floating orbs - fixed positioning to prevent collapse */}
      <div
        className="absolute w-32 h-32 md:w-48 md:h-48 lg:w-72 lg:h-72 bg-green-400/10 rounded-full blur-3xl animate-float"
        style={{
          top: "20%",
          left: "10%",
          animationDuration: "6s",
          animationDelay: "0s",
        }}
      />
      <div
        className="absolute w-24 h-24 md:w-40 md:h-40 lg:w-96 lg:h-96 bg-green-400/5 rounded-full blur-3xl animate-float"
        style={{
          bottom: "20%",
          right: "10%",
          animationDuration: "8s",
          animationDelay: "2s",
        }}
      />
      <div
        className="absolute w-20 h-20 md:w-32 md:h-32 lg:w-64 lg:h-64 bg-green-400/8 rounded-full blur-3xl animate-float"
        style={{
          top: "60%",
          left: "70%",
          animationDuration: "10s",
          animationDelay: "4s",
        }}
      />
    </div>
  ));

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          25% {
            transform: translateY(-20px) rotate(90deg);
          }
          50% {
            transform: translateY(-10px) rotate(180deg);
          }
          75% {
            transform: translateY(-30px) rotate(270deg);
          }
        }

        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes pulse-glow {
          0%,
          100% {
            box-shadow: 0 0 20px rgba(34, 197, 94, 0.3);
          }
          50% {
            box-shadow: 0 0 40px rgba(34, 197, 94, 0.6);
          }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-slide-up {
          animation: slideInUp 0.8s ease-out forwards;
        }

        .animate-slide-left {
          animation: slideInLeft 0.8s ease-out forwards;
        }

        .animate-slide-right {
          animation: slideInRight 0.8s ease-out forwards;
        }

        .animate-pulse-glow {
          animation: pulse-glow 2s ease-in-out infinite;
        }

        .hover-lift {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .hover-lift:hover {
          transform: translateY(-8px) scale(1.02);
        }

        .gradient-border {
          position: relative;
          background: linear-gradient(
            45deg,
            transparent,
            rgba(34, 197, 94, 0.2),
            transparent
          );
        }

        .gradient-border::before {
          content: "";
          position: absolute;
          inset: 1px;
          background: rgba(0, 0, 0, 0.9);
          border-radius: inherit;
        }

        .gradient-border > * {
          position: relative;
          z-index: 1;
        }
      `}</style>

      <MemoizedNavigation />

      {/* Hero Section */}
      <section className="relative pt-20 pb-20 md:pb-32 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
        <AnimatedBackground />

        <div className="relative w-full max-w-7xl mx-auto">
          <div className="text-center">
            <div
              className="inline-flex items-center space-x-2 bg-green-400/10 text-green-400 px-4 py-2 rounded-full mb-8 border border-green-400/20 animate-slide-up"
              data-animate="hero-badge"
            >
              <Sparkles className="w-4 h-4 animate-pulse" />
              <span className="text-sm font-semibold">
                POWERED BY ADVANCED AI
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-black mb-8 leading-tight">
              <span
                className="text-white block animate-slide-left"
                style={{ animationDelay: "0.2s" }}
              >
                The Future of
              </span>
              <span
                className="text-green-400 block animate-slide-right"
                style={{ animationDelay: "0.4s" }}
              >
                Insurance AI
              </span>
            </h1>

            <p
              className="text-lg md:text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12 animate-slide-up"
              style={{ animationDelay: "0.6s" }}
            >
              Meet InsureBot - the most advanced voice AI assistant that
              delivers human-like insurance consultations with unprecedented
              accuracy, empathy, and lightning-fast response times.
            </p>

            <div
              className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center mb-16 animate-slide-up"
              style={{ animationDelay: "0.8s" }}
            >
              <button className="group bg-green-400 text-black px-6 md:px-8 py-3 md:py-4 rounded-xl text-base md:text-lg font-bold hover:bg-green-300 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-green-400/25 hover-lift">
                <Play className="w-5 h-5 md:w-6 md:h-6 inline mr-2 md:mr-3 group-hover:animate-pulse" />
                Try InsureBot Live
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5 inline ml-2 md:ml-3 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="border-2 border-green-400 text-green-400 px-6 md:px-8 py-3 md:py-4 rounded-xl text-base md:text-lg font-bold hover:bg-green-400 hover:text-black transition-all duration-300 hover-lift">
                <BarChart3 className="w-4 h-4 md:w-5 md:h-5 inline mr-2" />
                View Analytics
              </button>
            </div>

            {/* Scroll indicator */}
            <div className="animate-bounce mt-8">
              <ChevronDown className="w-6 h-6 text-green-400 mx-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* Live Metrics */}
      <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-green-400/5 border-y border-green-400/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-green-400/20 text-green-400 px-4 py-2 rounded-full mb-4">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-sm font-semibold">LIVE PERFORMANCE</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Real-Time Metrics
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {metrics.map((metric, index) => (
              <div key={index} className="text-center group">
                <div className="gradient-border rounded-2xl p-4 md:p-6 hover-lift">
                  <div className="text-green-400 mb-2 flex justify-center">
                    {metric.icon}
                  </div>
                  <div className="text-2xl md:text-3xl lg:text-4xl font-black text-green-400 mb-2 group-hover:animate-pulse">
                    {metric.value}
                  </div>
                  <div className="text-gray-300 text-xs md:text-sm lg:text-base mb-2">
                    {metric.label}
                  </div>
                  <div className="text-green-400 text-xs md:text-sm font-semibold">
                    {metric.trend}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-white">
              Cutting-Edge
              <span className="text-green-400 block">AI Technology</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              Built with state-of-the-art voice AI, trained on real insurance
              data and thousands of customer conversations
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group relative gradient-border rounded-2xl p-6 md:p-8 hover-lift"
                data-animate={`feature-${index}`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-green-400/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative">
                  <div
                    className={`bg-gradient-to-r ${feature.color} w-14 h-14 md:w-16 md:h-16 rounded-xl flex items-center justify-center mb-6 group-hover:animate-pulse-glow transition-all duration-300`}
                  >
                    <div className="text-black group-hover:scale-110 transition-transform duration-300">
                      {feature.icon}
                    </div>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-4 group-hover:text-green-400 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 mb-4 leading-relaxed text-sm md:text-base">
                    {feature.description}
                  </p>
                  <div className="flex items-center text-green-400 font-semibold text-sm">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    {feature.highlight}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section
        id="demo"
        className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-green-400/10 via-transparent to-green-400/5"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-white">
              Experience the
              <span className="text-green-400 block">Future Live</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              Try our voice AI assistant and see how it handles real insurance
              conversations with human-like intelligence
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative gradient-border rounded-3xl p-6 md:p-8 lg:p-12 backdrop-blur-sm">
              <div className="absolute inset-0 bg-gradient-to-br from-green-400/10 via-transparent to-green-400/5 rounded-3xl"></div>

              <div className="relative text-center mb-12">
                <div className="inline-flex items-center space-x-2 bg-green-400/20 text-green-400 px-6 py-3 rounded-full mb-6 border border-green-400/30">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="font-semibold">AI ASSISTANT READY</span>
                </div>

                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  Start Your Conversation
                </h3>
                <p className="text-gray-300 text-base md:text-lg mb-8">
                  Click the voice assistant below to begin talking with
                  InsureBot about insurance queries, policy information, or any
                  questions you have.
                </p>
              </div>

              <div className="flex justify-center mb-8">
                <div className="relative gradient-border rounded-2xl p-6 md:p-8 hover-lift">
                  <div className="absolute inset-0 bg-gradient-to-br from-green-400/10 to-transparent rounded-2xl"></div>
                  {isWidgetLoaded && (
                    <div
                      className="relative z-10"
                      dangerouslySetInnerHTML={{
                        __html: `
                        <vapi-widget 
                          assistant-id="276b5ef3-0f62-499d-bc2a-5afe1075da91" 
                          public-key="6ed82652-e2d2-4af4-9884-3d5991b976dd"
                        ></vapi-widget>
                      `,
                      }}
                    />
                  )}
                  {!isWidgetLoaded && (
                    <div className="flex items-center justify-center w-32 h-32 md:w-40 md:h-40 bg-gradient-to-br from-green-400/30 to-green-400/10 rounded-full border-2 border-green-400/50 animate-pulse-glow">
                      <Mic className="w-8 h-8 md:w-12 md:h-12 text-green-400 animate-pulse" />
                    </div>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div className="flex flex-col items-center">
                  <div className="bg-green-400/20 w-12 h-12 rounded-full flex items-center justify-center mb-3">
                    <Volume2 className="w-6 h-6 text-green-400" />
                  </div>
                  <span className="text-gray-300 font-medium">
                    Natural Voice
                  </span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="bg-green-400/20 w-12 h-12 rounded-full flex items-center justify-center mb-3">
                    <Zap className="w-6 h-6 text-green-400" />
                  </div>
                  <span className="text-gray-300 font-medium">
                    Real-time Processing
                  </span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="bg-green-400/20 w-12 h-12 rounded-full flex items-center justify-center mb-3">
                    <Shield className="w-6 h-6 text-green-400" />
                  </div>
                  <span className="text-gray-300 font-medium">
                    Insurance Expert
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-black/50 border-y border-green-400/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Technical Excellence
            </h2>
            <p className="text-gray-300 text-lg">
              Built for performance, accuracy, and reliability
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {techSpecs.map((spec, index) => (
              <div
                key={index}
                className="gradient-border rounded-xl p-4 md:p-6 text-center hover-lift"
              >
                <div className="text-green-400 mb-3 flex justify-center">
                  {spec.icon}
                </div>
                <div className="text-xl md:text-2xl font-bold text-white mb-2">
                  {spec.value}
                </div>
                <div className="text-gray-300 text-xs md:text-sm">
                  {spec.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-white">
              What Industry
              <span className="text-green-400 block">Leaders Say</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="gradient-border rounded-2xl p-6 md:p-8 hover-lift"
              >
                <div className="flex items-center mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-green-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic leading-relaxed">
                  "{testimonial.quote}"
                </p>
                <div className="border-t border-green-400/20 pt-6">
                  <div className="flex items-center mb-2">
                    <div className="w-10 h-10 bg-gradient-to-r from-green-400 to-cyan-400 rounded-full flex items-center justify-center text-black font-bold text-sm mr-3">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-bold text-white text-sm md:text-base">
                        {testimonial.author}
                      </div>
                      <div className="text-green-400 text-xs md:text-sm">
                        {testimonial.role}
                      </div>
                    </div>
                  </div>
                  <div className="text-gray-400 text-xs md:text-sm">
                    {testimonial.company}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-green-400/5 via-transparent to-green-400/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Proven Results
            </h2>
            <p className="text-gray-300">
              See how InsureBot is transforming insurance support globally
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-black text-green-400 mb-2">
                500K+
              </div>
              <div className="text-gray-300 text-sm md:text-base">
                Conversations Handled
              </div>
              <div className="text-green-400 text-xs md:text-sm font-semibold mt-1">
                Monthly
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-black text-green-400 mb-2">
                50+
              </div>
              <div className="text-gray-300 text-sm md:text-base">
                Insurance Companies
              </div>
              <div className="text-green-400 text-xs md:text-sm font-semibold mt-1">
                Worldwide
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-black text-green-400 mb-2">
                24/7
              </div>
              <div className="text-gray-300 text-sm md:text-base">
                Always Available
              </div>
              <div className="text-green-400 text-xs md:text-sm font-semibold mt-1">
                365 Days
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-black text-green-400 mb-2">
                95%
              </div>
              <div className="text-gray-300 text-sm md:text-base">
                Customer Satisfaction
              </div>
              <div className="text-green-400 text-xs md:text-sm font-semibold mt-1">
                Average Rating
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-green-400/20 via-green-400/10 to-transparent">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <Award className="w-16 h-16 md:w-20 md:h-20 text-green-400 mx-auto mb-6 animate-pulse" />
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-8 text-white">
            Ready to Transform
            <span className="text-green-400 block">Insurance Support?</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            Join the future of customer service with AI that understands,
            empathizes, and delivers exceptional results every time.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center">
            <button className="group bg-green-400 text-black px-8 md:px-10 py-4 md:py-5 rounded-xl text-lg md:text-xl font-bold hover:bg-green-300 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-green-400/25 hover-lift">
              <TrendingUp className="w-5 h-5 md:w-6 md:h-6 inline mr-2 md:mr-3 group-hover:animate-pulse" />
              Start Free Trial
              <ArrowRight className="w-5 h-5 md:w-6 md:h-6 inline ml-2 md:ml-3 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="border-2 border-green-400 text-green-400 px-8 md:px-10 py-4 md:py-5 rounded-xl text-lg md:text-xl font-bold hover:bg-green-400 hover:text-black transition-all duration-300 hover-lift">
              <BarChart3 className="w-5 h-5 md:w-6 md:h-6 inline mr-2 md:mr-3" />
              View Analytics
            </button>
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-400 text-sm md:text-base">
              No credit card required • 14-day free trial • Cancel anytime
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-black border-t border-green-400/20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div className="flex items-center space-x-3 mb-6 md:mb-0">
              <div className="relative">
                <Shield className="w-8 h-8 text-green-400" />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              </div>
              <span className="text-2xl font-bold text-green-400">
                InsureBot
              </span>
            </div>
            <div className="text-gray-400 text-center md:text-right">
              <div className="text-lg font-semibold text-green-400 mb-2">
                Built for InsureBot Quest 2025
              </div>
              <div className="text-sm md:text-base">
                ValuEnable Hackathon - Powered by Advanced AI
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-8">
            <div>
              <h4 className="text-white font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>
                  <a
                    href="#"
                    className="hover:text-green-400 transition-colors"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-green-400 transition-colors"
                  >
                    Pricing
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-green-400 transition-colors"
                  >
                    Demo
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-green-400 transition-colors"
                  >
                    API
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>
                  <a
                    href="#"
                    className="hover:text-green-400 transition-colors"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-green-400 transition-colors"
                  >
                    Careers
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-green-400 transition-colors"
                  >
                    News
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-green-400 transition-colors"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>
                  <a
                    href="#"
                    className="hover:text-green-400 transition-colors"
                  >
                    Documentation
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-green-400 transition-colors"
                  >
                    Help Center
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-green-400 transition-colors"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-green-400 transition-colors"
                  >
                    Community
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>
                  <a
                    href="#"
                    className="hover:text-green-400 transition-colors"
                  >
                    Privacy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-green-400 transition-colors"
                  >
                    Terms
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-green-400 transition-colors"
                  >
                    Security
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-green-400 transition-colors"
                  >
                    Cookies
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-green-400/20 text-center">
            <p className="text-gray-400 text-sm md:text-base">
              © 2025 InsureBot. Transforming insurance support with AI
              technology.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default InsureBotLanding;
