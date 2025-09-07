"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Shield, Zap, BarChart3, Users, Smartphone, Globe, Cloud, Lock, Repeat, Code, Lightbulb, Settings, FileText, MessageSquare, DollarSign, Layers, Rocket, Target, Clock, TrendingUp } from 'lucide-react'
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import ScrollToTop from "@/components/scroll-to-top"
import FloatingElements from "@/components/floating-elements"

export default function FeaturesPage() {
  const coreFeatures = [
    {
      icon: Shield,
      title: "Enterprise-Grade Security",
      description: "Protect your data with advanced encryption, multi-factor authentication, and continuous threat monitoring. We are SOC 2 compliant.",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Zap,
      title: "Blazing Fast Performance",
      description: "Experience lightning-fast load times and seamless operations powered by a global CDN and optimized infrastructure.",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics & Reporting",
      description: "Gain deep, actionable insights with customizable dashboards, real-time data, and comprehensive reporting tools.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Users,
      title: "Collaborative Team Management",
      description: "Streamline teamwork with robust user roles, permissions, and shared workspaces designed for efficient collaboration.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Smartphone,
      title: "Responsive Mobile Experience",
      description: "Access your data and manage your operations effortlessly from any device with our fully responsive design.",
      color: "from-indigo-500 to-blue-500"
    },
    {
      icon: Globe,
      title: "Global Scalability & Reliability",
      description: "Scale your application globally with multi-region deployment, auto-scaling, and 99.9% uptime guarantee.",
      color: "from-teal-500 to-green-500"
    }
  ];

  const advancedFeatures = [
    {
      icon: Cloud,
      title: "Cloud Infrastructure",
      description: "Leverage a robust, secure, and scalable cloud infrastructure designed for high availability.",
    },
    {
      icon: Lock,
      title: "Data Encryption",
      description: "All your data is encrypted at rest and in transit using industry-leading standards.",
    },
    {
      icon: Repeat,
      title: "Automated Workflows",
      description: "Automate repetitive tasks and streamline your business processes with custom workflows.",
    },
    {
      icon: Code,
      title: "Developer APIs",
      description: "Integrate seamlessly with your existing tools and build custom solutions using our comprehensive APIs.",
    },
    {
      icon: Lightbulb,
      title: "AI-Powered Insights",
      description: "Utilize artificial intelligence to uncover hidden patterns and make smarter business decisions.",
    },
    {
      icon: Settings,
      title: "Customizable Dashboards",
      description: "Tailor your dashboard to display the metrics and information most relevant to your business.",
    },
    {
      icon: FileText,
      title: "Document Management",
      description: "Securely store, organize, and share all your important documents in one centralized place.",
    },
    {
      icon: MessageSquare,
      title: "In-App Messaging",
      description: "Communicate directly with your team and customers through integrated messaging features.",
    },
    {
      icon: DollarSign,
      title: "Subscription Billing",
      description: "Manage recurring payments, subscriptions, and invoicing with our integrated billing system.",
    },
    {
      icon: Layers,
      title: "Multi-Tenant Architecture",
      description: "Designed for SaaS, our architecture supports multiple tenants securely and efficiently.",
    },
    {
      icon: Rocket,
      title: "Rapid Deployment",
      description: "Deploy new features and updates quickly with our streamlined CI/CD pipelines.",
    },
    {
      icon: Target,
      title: "Goal Tracking",
      description: "Set, track, and achieve your business goals with intuitive progress monitoring tools.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-950 dark:via-slate-900 dark:to-blue-950 overflow-hidden">
      <FloatingElements />
      <Navigation />

      {/* Hero Section for Features */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-slate-900 dark:text-white mb-8 leading-tight">
            Unleash the Full Power of
            <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-pulse">
              SaasFlow Features
            </span>
          </h1>
          <p className="text-xl sm:text-2xl text-slate-600 dark:text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed">
            Explore a comprehensive suite of tools designed to elevate your business, streamline operations, and drive unparalleled growth.
          </p>
          <Link href="/signup">
            <Button size="lg" className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-10 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
              Start Your Free Trial
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Core Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              Core Capabilities
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              The essential tools that form the backbone of your efficient operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreFeatures.map((feature, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg hover:-translate-y-2 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm">
                <CardHeader>
                  <div className={`w-14 h-14 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                    <feature.icon className="w-7 h-7 text-white" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Advanced Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              Advanced Functionality
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Dive deeper into specialized tools designed for specific business needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {advancedFeatures.map((feature, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg hover:-translate-y-2 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm">
                <CardHeader>
                  <div className="w-14 h-14 bg-gradient-to-r from-gray-400 to-gray-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                    <feature.icon className="w-7 h-7 text-white" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Join thousands of successful companies leveraging SaasFlow for their growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/signup">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 px-10 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                Start Your Free Trial
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </div>
  )
}
