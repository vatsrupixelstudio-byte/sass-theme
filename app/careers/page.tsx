"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Briefcase, MapPin, Users, ArrowRight, Lightbulb, Handshake, TrendingUp } from 'lucide-react'
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import ScrollToTop from "@/components/scroll-to-top"
import FloatingElements from "@/components/floating-elements"

export default function CareersPage() {
  const jobOpenings = [
    {
      title: "Senior Software Engineer (Fullstack)",
      location: "Remote / San Francisco, CA",
      department: "Engineering",
      description: "We're looking for a seasoned fullstack engineer to build scalable web applications and services.",
      link: "#"
    },
    {
      title: "Product Manager",
      location: "San Francisco, CA",
      department: "Product",
      description: "Drive the product roadmap and strategy for our core platform features.",
      link: "#"
    },
    {
      title: "UX/UI Designer",
      location: "Remote / New York, NY",
      department: "Design",
      description: "Create intuitive and beautiful user experiences for our SaaS product.",
      link: "#"
    },
    {
      title: "Sales Development Representative",
      location: "Austin, TX",
      department: "Sales",
      description: "Identify and qualify new business opportunities to fuel our growth.",
      link: "#"
    },
    {
      title: "Customer Success Manager",
      location: "Remote",
      department: "Customer Success",
      description: "Build strong relationships with our customers and ensure their long-term success.",
      link: "#"
    },
    {
      title: "Data Scientist",
      location: "San Francisco, CA",
      department: "Data & Analytics",
      description: "Analyze complex data sets to provide actionable insights and improve product features.",
      link: "#"
    },
  ];

  const cultureValues = [
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We foster a culture of continuous learning and encourage bold ideas.",
    },
    {
      icon: Handshake,
      title: "Collaboration",
      description: "Teamwork is at our core; we believe in supporting each other to achieve shared goals.",
    },
    {
      icon: TrendingUp,
      title: "Growth",
      description: "We invest in our employees' development and provide opportunities for career advancement.",
    },
    {
      icon: Users,
      title: "Inclusivity",
      description: "We celebrate diversity and create an environment where everyone feels valued and belongs.",
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
            Join Our
            <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-pulse">
              Growing Team
            </span>
          </h1>
          <p className="text-xl sm:text-2xl text-slate-600 dark:text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed">
            Be a part of a dynamic and innovative company that's shaping the future of SaaS. We're always looking for passionate talent.
          </p>
          <Link href="#openings">
            <Button size="lg" className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-10 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
              View Open Positions
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Our Culture Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-16">
            Our Culture & Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {cultureValues.map((value, index) => (
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

      {/* Why Work With Us Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img
              src="/diverse-team-collaboration.png"
              alt="Why Work With Us"
              className="rounded-xl shadow-2xl w-full h-auto object-cover"
            />
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-green-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
            <div className="absolute -top-4 -left-4 w-32 h-32 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
          </div>
          <div className="lg:pl-12">
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              Why Work With Us?
            </h2>
            <ul className="space-y-4 text-lg text-slate-700 dark:text-slate-300">
              <li className="flex items-start">
                <ArrowRight className="w-6 h-6 text-blue-600 dark:text-blue-400 mr-3 mt-1 flex-shrink-0" />
                <span>Be part of a fast-growing company with a global impact.</span>
              </li>
              <li className="flex items-start">
                <ArrowRight className="w-6 h-6 text-blue-600 dark:text-blue-400 mr-3 mt-1 flex-shrink-0" />
                <span>Work on challenging and meaningful projects that push the boundaries of technology.</span>
              </li>
              <li className="flex items-start">
                <ArrowRight className="w-6 h-6 text-blue-600 dark:text-blue-400 mr-3 mt-1 flex-shrink-0" />
                <span>Enjoy a flexible work environment with opportunities for remote work.</span>
              </li>
              <li className="flex items-start">
                <ArrowRight className="w-6 h-6 text-blue-600 dark:text-blue-400 mr-3 mt-1 flex-shrink-0" />
                <span>Comprehensive benefits package, including health, dental, and vision.</span>
              </li>
              <li className="flex items-start">
                <ArrowRight className="w-6 h-6 text-blue-600 dark:text-blue-400 mr-3 mt-1 flex-shrink-0" />
                <span>Opportunities for professional development and continuous learning.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Job Openings Section */}
      <section id="openings" className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              Current Job Openings
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Find your next career opportunity with SaasFlow.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {jobOpenings.map((job, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg hover:-translate-y-1 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm">
                <CardContent className="pt-6">
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {job.title}
                  </h3>
                  <div className="flex items-center text-slate-600 dark:text-slate-400 text-sm mb-4">
                    <Briefcase className="w-4 h-4 mr-2" />
                    <span>{job.department}</span>
                    <span className="mx-2">•</span>
                    <MapPin className="w-4 h-4 mr-2" />
                    <span>{job.location}</span>
                  </div>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4 line-clamp-3">
                    {job.description}
                  </p>
                  <Link href={job.link}>
                    <Button variant="outline" className="group px-6 py-2 text-base font-semibold hover:bg-blue-50 dark:hover:bg-blue-950 transition-all duration-300">
                      Apply Now
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
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
            Can't Find Your Role?
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            We're always growing! Send us your resume and tell us how you can contribute.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 px-10 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
              Contact Us
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </div>
  )
}
