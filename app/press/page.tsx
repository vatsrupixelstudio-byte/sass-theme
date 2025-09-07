"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Newspaper, Award, Users, Mail } from 'lucide-react'
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import ScrollToTop from "@/components/scroll-to-top"
import FloatingElements from "@/components/floating-elements"

export default function PressPage() {
  const pressReleases = [
    {
      image: "/ai-revolution.png",
      title: "SaasFlow Unveils AI-Powered Analytics Dashboard",
      date: "July 25, 2024",
      source: "TechCrunch",
      description: "SaasFlow announces a groundbreaking AI-powered analytics dashboard, revolutionizing how businesses gain insights from their data.",
      link: "#"
    },
    {
      image: "/partnership-handshake.png",
      title: "SaasFlow Partners with Global Cloud Provider for Enhanced Scalability",
      date: "July 10, 2024",
      source: "Business Wire",
      description: "A strategic partnership aimed at delivering unparalleled scalability and reliability for SaaS applications worldwide.",
      link: "#"
    },
    {
      image: "/award-ceremony.png",
      title: "SaasFlow Recognized as 'Innovator of the Year' at SaaS Awards 2024",
      date: "June 28, 2024",
      source: "SaaS Today",
      description: "SaasFlow receives prestigious award for its innovative platform and significant contributions to the SaaS industry.",
      link: "#"
    },
    {
      image: "/financial-report-analysis.png",
      title: "SaasFlow Reports Record Growth in Q2 2024",
      date: "June 15, 2024",
      source: "Financial Times",
      description: "Strong financial results driven by increased customer adoption and expansion into new markets.",
      link: "#"
    },
    {
      image: "/london-office-building.png",
      title: "SaasFlow Opens New European Headquarters in London",
      date: "May 30, 2024",
      source: "European Tech News",
      description: "Expansion into the European market with a new office to better serve our growing international customer base.",
      link: "#"
    },
  ];

  const mediaContacts = [
    {
      name: "Sarah Chen",
      role: "Head of Public Relations",
      email: "pr@saasflow.com",
      phone: "+1 (123) 456-7890",
    },
    {
      name: "Mark Davis",
      role: "Media Relations Specialist",
      email: "media@saasflow.com",
      phone: "+1 (987) 654-3210",
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
            SaasFlow in the
            <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-pulse">
              News
            </span>
          </h1>
          <p className="text-xl sm:text-2xl text-slate-600 dark:text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed">
            Stay updated with our latest announcements, press releases, and media coverage.
          </p>
        </div>
      </section>

      {/* Press Releases Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              Latest Press Releases
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Read our official announcements and stay informed about SaasFlow's milestones.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pressReleases.map((release, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg hover:-translate-y-1 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm">
                <Link href={release.link}>
                  <img
                    src={release.image || "/placeholder.svg?height=200&width=350&query=press release image"}
                    alt={release.title}
                    className="w-full h-48 object-cover rounded-t-lg group-hover:scale-105 transition-transform duration-300"
                  />
                </Link>
                <CardContent className="pt-6">
                  <div className="flex items-center text-sm text-slate-500 dark:text-slate-400 mb-3">
                    <Newspaper className="w-4 h-4 mr-2" />
                    <span>{release.date}</span>
                    <span className="mx-2">•</span>
                    <span>{release.source}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    <Link href={release.link}>{release.title}</Link>
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4 line-clamp-3">
                    {release.description}
                  </p>
                  <Link href={release.link} className="text-blue-600 dark:text-blue-400 font-medium flex items-center group-hover:underline">
                    Read More
                    <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Media Kit & Contact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="lg:pr-12">
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              Media Kit & Resources
            </h2>
            <p className="text-lg text-slate-700 dark:text-slate-300 mb-8 leading-relaxed">
              Access our official media kit, brand assets, and company information for your coverage.
            </p>
            <Button size="lg" variant="outline" className="group px-8 py-3 text-lg font-semibold hover:bg-blue-50 dark:hover:bg-blue-950 transition-all duration-300 hover:scale-105">
              Download Media Kit
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
          <Card className="p-6 md:p-8 shadow-xl bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm border border-slate-200 dark:border-slate-700">
            <CardHeader className="text-center lg:text-left space-y-2 mb-6">
              <CardTitle className="text-3xl font-bold text-slate-900 dark:text-white">Media Contacts</CardTitle>
              <CardDescription className="text-slate-600 dark:text-slate-400">
                For press inquiries, please reach out to our media relations team.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {mediaContacts.map((contact, index) => (
                <div key={index} className="space-y-2">
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{contact.name}</h3>
                  <p className="text-slate-600 dark:text-slate-300">{contact.role}</p>
                  <p className="text-slate-600 dark:text-slate-300 flex items-center gap-2">
                    <Mail className="w-4 h-4" /> {contact.email}
                  </p>
                  <p className="text-slate-600 dark:text-slate-300 flex items-center gap-2">
                    <Users className="w-4 h-4" /> {contact.phone}
                  </p>
                </div>
              ))}
              <Link href="/contact">
                <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-2">
                  General Inquiries
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </div>
  )
}
