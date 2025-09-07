"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Plug, Settings, Code, LayoutDashboard, Zap, Cloud, Database, Mail, MessageSquare, BarChart3, Shield, Users, Globe, Brush } from 'lucide-react'
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import ScrollToTop from "@/components/scroll-to-top"
import FloatingElements from "@/components/floating-elements"

export default function IntegrationsPage() {
  const categories = [
    "All", "Analytics", "CRM", "Marketing", "Payments", "Communication", "Development", "Productivity", "Security"
  ];

  const integrations = [
    {
      name: "Stripe",
      category: "Payments",
      description: "Seamlessly process payments and manage subscriptions.",
      icon: "/stripe-logo.png",
      link: "#"
    },
    {
      name: "Segment",
      category: "Analytics",
      description: "Collect, unify, and route your customer data.",
      icon: "/segment-logo-abstract.png",
      link: "#"
    },
    {
      name: "Salesforce",
      category: "CRM",
      description: "Manage customer relationships and sales processes.",
      icon: "/salesforce-logo.png",
      link: "#"
    },
    {
      name: "Mailchimp",
      category: "Marketing",
      description: "Automate your email marketing campaigns.",
      icon: "/mailchimp-logo.png",
      link: "#"
    },
    {
      name: "Slack",
      category: "Communication",
      description: "Real-time team communication and collaboration.",
      icon: "/slack-logo.png",
      link: "#"
    },
    {
      name: "GitHub",
      category: "Development",
      description: "Version control and collaborative code development.",
      icon: "/github-logo.png",
      link: "#"
    },
    {
      name: "Google Analytics",
      category: "Analytics",
      description: "Track website traffic and user behavior.",
      icon: "/google-analytics-logo.png",
      link: "#"
    },
    {
      name: "Zendesk",
      category: "Communication",
      description: "Customer service and support ticketing system.",
      icon: "/zendesk-logo.png",
      link: "#"
    },
    {
      name: "Jira",
      category: "Productivity",
      description: "Project tracking and agile software development.",
      icon: "/jira-logo.png",
      link: "#"
    },
    {
      name: "Auth0",
      category: "Security",
      description: "Secure authentication and authorization for your applications.",
      icon: "/auth0-logo.png",
      link: "#"
    },
    {
      name: "Twilio",
      category: "Communication",
      description: "Add voice, video, and messaging capabilities.",
      icon: "/twilio-logo.png",
      link: "#"
    },
    {
      name: "HubSpot",
      category: "CRM",
      description: "All-in-one marketing, sales, and service platform.",
      icon: "/hubspot-logo.png",
      link: "#"
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-950 dark:via-slate-900 dark:to-blue-950 overflow-hidden">
      <FloatingElements />
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-slate-900 dark:text-white mb-8 leading-tight">
            Integrate SaasFlow with
            <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-pulse">
              Your Favorite Tools
            </span>
          </h1>
          <p className="text-xl sm:text-2xl text-slate-600 dark:text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed">
            Connect SaasFlow with hundreds of apps and services to automate your workflows and enhance your productivity.
          </p>
          <Link href="/contact">
            <Button size="lg" className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-10 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
              Request an Integration
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Integrations Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category, index) => (
              <Button key={index} variant="outline" className="bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-800 hover:bg-blue-100 dark:hover:bg-blue-800">
                {category}
              </Button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {integrations.map((integration, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg hover:-translate-y-1 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm">
                <CardContent className="pt-6 flex flex-col items-center text-center">
                  <img
                    src={integration.icon || "/placeholder.svg"}
                    alt={`${integration.name} logo`}
                    className="w-16 h-16 object-contain mb-4 group-hover:scale-110 transition-transform duration-300"
                  />
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
                    {integration.name}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-4 line-clamp-2">
                    {integration.description}
                  </p>
                  <Link href={integration.link} className="text-blue-600 dark:text-blue-400 font-medium flex items-center group-hover:underline">
                    Learn More
                    <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How Integrations Work Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="lg:pr-12">
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              How Our Integrations Work
            </h2>
            <p className="text-lg text-slate-700 dark:text-slate-300 mb-8 leading-relaxed">
              Our robust API and seamless integration framework allow you to connect SaasFlow with your existing tools effortlessly.
            </p>
            <ul className="space-y-4 text-lg text-slate-700 dark:text-slate-300">
              <li className="flex items-start">
                <Plug className="w-6 h-6 text-blue-600 dark:text-blue-400 mr-3 mt-1 flex-shrink-0" />
                <span>**Easy Setup:** Connect apps in minutes with guided setup processes.</span>
              </li>
              <li className="flex items-start">
                <Settings className="w-6 h-6 text-blue-600 dark:text-blue-400 mr-3 mt-1 flex-shrink-0" />
                <span>**Customizable Workflows:** Tailor integrations to fit your unique business logic.</span>
              </li>
              <li className="flex items-start">
                <Code className="w-6 h-6 text-blue-600 dark:text-blue-400 mr-3 mt-1 flex-shrink-0" />
                <span>**Developer-Friendly API:** Build custom integrations with our well-documented API.</span>
              </li>
              <li className="flex items-start">
                <LayoutDashboard className="w-6 h-6 text-blue-600 dark:text-blue-400 mr-3 mt-1 flex-shrink-0" />
                <span>**Centralized Management:** Manage all your integrations from a single dashboard.</span>
              </li>
            </ul>
          </div>
          <div className="relative">
            <img
              src="/api-integration-diagram.png"
              alt="How Integrations Work"
              className="rounded-xl shadow-2xl w-full h-auto object-cover"
            />
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
            <div className="absolute -top-4 -left-4 w-32 h-32 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
          </div>
        </div>
      </section>

      {/* Integration Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-16">
            Benefits of Integrating
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Zap,
                title: "Boost Productivity",
                description: "Automate tasks and reduce manual effort across your tools.",
              },
              {
                icon: BarChart3,
                title: "Unified Data",
                description: "Centralize data from various sources for comprehensive insights.",
              },
              {
                icon: Shield,
                title: "Enhanced Security",
                description: "Maintain consistent security policies across all connected applications.",
              },
              {
                icon: Users,
                title: "Improved Collaboration",
                description: "Facilitate seamless information flow between teams and departments.",
              },
            ].map((benefit, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg hover:-translate-y-2 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm">
                <CardHeader>
                  <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                    <benefit.icon className="w-7 h-7 text-white" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {benefit.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                    {benefit.description}
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
            Ready to Connect Your Ecosystem?
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Explore our integrations or talk to sales about custom solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/signup">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 px-10 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                Start Free Trial
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
