"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ShieldCheck, Lock, Cloud, Server, FileText, Users, ArrowRight, Fingerprint, Key, Database, Globe } from 'lucide-react'
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import ScrollToTop from "@/components/scroll-to-top"
import FloatingElements from "@/components/floating-elements"

export default function SecurityPage() {
  const securityFeatures = [
    {
      icon: Lock,
      title: "Data Encryption",
      description: "All data is encrypted at rest and in transit using industry-leading AES-256 encryption.",
    },
    {
      icon: Fingerprint,
      title: "Multi-Factor Authentication (MFA)",
      description: "Add an extra layer of security to user accounts with MFA options.",
    },
    {
      icon: Key,
      title: "Access Control",
      description: "Granular role-based access control ensures users only access what they need.",
    },
    {
      icon: Database,
      title: "Regular Backups",
      description: "Automated daily backups with point-in-time recovery for data integrity.",
    },
    {
      icon: Server,
      title: "Network Security",
      description: "Robust firewalls, intrusion detection, and DDoS protection for our infrastructure.",
    },
    {
      icon: Cloud,
      title: "Cloud Security",
      description: "Built on secure cloud infrastructure with continuous monitoring and compliance.",
    },
    {
      icon: FileText,
      title: "Audit Logs",
      description: "Comprehensive audit trails for all activities, ensuring transparency and accountability.",
    },
    {
      icon: Users,
      title: "Employee Training",
      description: "Regular security awareness training for all employees to maintain a strong security posture.",
    },
  ];

  const complianceStandards = [
    {
      logo: "/placeholder-e1qei.png",
      name: "SOC 2 Type II",
      description: "Audited for security, availability, processing integrity, confidentiality, and privacy.",
    },
    {
      logo: "/gdpr-logo.png",
      name: "GDPR Compliant",
      description: "Adherence to strict data protection and privacy regulations for EU citizens.",
    },
    {
      logo: "/iso-27001-logo.png",
      name: "ISO 27001",
      description: "Certified for information security management systems.",
    },
    {
      logo: "/generic-medical-compliance-symbol.png",
      name: "HIPAA Ready",
      description: "Designed to support HIPAA compliance for healthcare-related data.",
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
            Your Security is Our
            <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-pulse">
              Top Priority
            </span>
          </h1>
          <p className="text-xl sm:text-2xl text-slate-600 dark:text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed">
            We implement industry-leading security measures to protect your data and ensure the integrity of our platform.
          </p>
          <Link href="#security-features">
            <Button size="lg" className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-10 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
              Explore Security Features
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Security Overview Section */}
      <section id="security-features" className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="lg:pr-12">
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              Comprehensive Security Measures
            </h2>
            <p className="text-lg text-slate-700 dark:text-slate-300 mb-8 leading-relaxed">
              Our multi-layered security approach protects your data from every angle, from infrastructure to application level.
            </p>
            <ul className="space-y-4 text-lg text-slate-700 dark:text-slate-300">
              <li className="flex items-start">
                <ShieldCheck className="w-6 h-6 text-blue-600 dark:text-blue-400 mr-3 mt-1 flex-shrink-0" />
                <span>**Proactive Monitoring:** 24/7 surveillance for suspicious activities and immediate response.</span>
              </li>
              <li className="flex items-start">
                <Globe className="w-6 h-6 text-blue-600 dark:text-blue-400 mr-3 mt-1 flex-shrink-0" />
                <span>**Global Compliance:** Adherence to international data protection standards.</span>
              </li>
              <li className="flex items-start">
                <Server className="w-6 h-6 text-blue-600 dark:text-blue-400 mr-3 mt-1 flex-shrink-0" />
                <span>**Secure Infrastructure:** Built on leading cloud providers with robust physical and digital security.</span>
              </li>
            </ul>
          </div>
          <div className="relative">
            <img
              src="/cybersecurity-shield.png"
              alt="Cybersecurity Shield"
              className="rounded-xl shadow-2xl w-full h-auto object-cover"
            />
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
            <div className="absolute -top-4 -left-4 w-32 h-32 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
          </div>
        </div>
      </section>

      {/* Detailed Security Features */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-16">
            Key Security Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {securityFeatures.map((feature, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg hover:-translate-y-2 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm">
                <CardHeader>
                  <div className="w-14 h-14 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
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

      {/* Compliance Standards Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-16">
            Compliance & Certifications
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 mb-12 max-w-2xl mx-auto">
            We adhere to the highest industry standards and regulations to ensure your data's integrity and privacy.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {complianceStandards.map((standard, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg hover:-translate-y-1 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm">
                <CardContent className="pt-6 flex flex-col items-center">
                  <img
                    src={standard.logo || "/placeholder.svg"}
                    alt={`${standard.name} logo`}
                    className="w-20 h-20 object-contain mb-4 group-hover:scale-105 transition-transform duration-300"
                  />
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
                    {standard.name}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 text-center leading-relaxed">
                    {standard.description}
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
            Have More Security Questions?
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Our security team is ready to provide detailed answers and insights.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 px-10 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
              Contact Security Team
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </div>
  )
}
