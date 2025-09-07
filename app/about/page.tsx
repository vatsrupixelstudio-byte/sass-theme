"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Lightbulb, Rocket, ArrowRight, Check } from 'lucide-react'
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import ScrollToTop from "@/components/scroll-to-top"
import FloatingElements from "@/components/floating-elements"

export default function AboutPage() {
  const teamMembers = [
    {
      name: "Jane Doe",
      role: "CEO & Founder",
      image: "/professional-woman-diverse.png",
      bio: "Jane is the visionary behind SaasFlow, with over 15 years of experience in software development and entrepreneurship. Her passion for innovation drives our mission.",
    },
    {
      name: "John Smith",
      role: "CTO",
      image: "/professional-man.png",
      bio: "John leads our technology and engineering efforts, ensuring our platform is robust, scalable, and at the forefront of technological advancements.",
    },
    {
      name: "Emily White",
      role: "Head of Product",
      image: "/professional-woman-diverse.png",
      bio: "Emily is responsible for our product strategy and roadmap, focusing on delivering intuitive and powerful features that solve real-world problems for our users.",
    },
    {
      name: "David Green",
      role: "Chief Marketing Officer",
      image: "/professional-man.png",
      bio: "David spearheads our marketing initiatives, building brand awareness and connecting with our audience through compelling stories and strategic campaigns.",
    },
  ];

  const values = [
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We constantly push the boundaries of what's possible, embracing new technologies and ideas to deliver cutting-edge solutions.",
    },
    {
      icon: Users,
      title: "Customer Success",
      description: "Our customers' success is our top priority. We are dedicated to providing exceptional support and building products that truly empower them.",
    },
    {
      icon: Check,
      title: "Integrity",
      description: "We operate with transparency, honesty, and a strong ethical compass in all our interactions and decisions.",
    },
    {
      icon: Rocket,
      title: "Excellence",
      description: "We strive for the highest standards in everything we do, from product development to customer service, ensuring quality and reliability.",
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
            About
            <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-pulse">
              SaasFlow
            </span>
          </h1>
          <p className="text-xl sm:text-2xl text-slate-600 dark:text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed">
            Empowering businesses to build, deploy, and scale their SaaS applications with unparalleled speed and efficiency.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="lg:pr-12">
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              Our Story
            </h2>
            <p className="text-lg text-slate-700 dark:text-slate-300 mb-6 leading-relaxed">
              Founded in 20XX, SaasFlow was born from a simple idea: to democratize access to powerful SaaS development tools. We saw a gap in the market for a platform that combined ease of use with enterprise-grade capabilities, allowing businesses of all sizes to innovate faster.
            </p>
            <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
              From our humble beginnings, we've grown into a passionate team dedicated to helping our customers succeed. We believe in building strong relationships, listening to feedback, and continuously evolving our platform to meet the ever-changing demands of the modern digital landscape.
            </p>
          </div>
          <div className="relative">
            <img
              src="/collaborative-teamwork.png"
              alt="Our Story"
              className="rounded-xl shadow-2xl w-full h-auto object-cover"
            />
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
            <div className="absolute -top-4 -left-4 w-32 h-32 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
          </div>
        </div>
      </section>

      {/* Our Mission & Vision Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-16">
            Our Mission & Vision
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <Card className="p-6 shadow-lg bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-slate-200 dark:border-slate-700">
              <CardHeader>
                <Lightbulb className="w-12 h-12 text-blue-600 dark:text-blue-400 mx-auto mb-4" />
                <CardTitle className="text-2xl font-bold text-slate-900 dark:text-white">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                  To provide an intuitive, powerful, and secure platform that empowers developers and businesses to rapidly build, deploy, and scale innovative SaaS applications, fostering a new era of digital transformation.
                </p>
              </CardContent>
            </Card>
            <Card className="p-6 shadow-lg bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-slate-200 dark:border-slate-700">
              <CardHeader>
                <Rocket className="w-12 h-12 text-purple-600 dark:text-purple-400 mx-auto mb-4" />
                <CardTitle className="text-2xl font-bold text-slate-900 dark:text-white">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                  To be the leading platform for SaaS development worldwide, recognized for our innovation, reliability, and unwavering commitment to customer success, driving the future of cloud-native applications.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-16">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg hover:-translate-y-2 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm">
                <CardHeader>
                  <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                    <value.icon className="w-7 h-7 text-white" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {value.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-16">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg hover:-translate-y-1 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm">
                <CardContent className="pt-6 flex flex-col items-center">
                  <img
                    src={member.image || "/placeholder.svg?height=150&width=150&query=person avatar"}
                    alt={member.name}
                    className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-blue-200 dark:border-blue-800 group-hover:scale-105 transition-transform duration-300"
                  />
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-1">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 dark:text-blue-400 text-sm font-medium mb-4">
                    {member.role}
                  </p>
                  <p className="text-slate-600 dark:text-slate-300 text-center leading-relaxed">
                    {member.bio}
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
            Join Our Journey
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Be a part of a team that's shaping the future of SaaS development.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/careers">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 px-10 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                View Openings
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
