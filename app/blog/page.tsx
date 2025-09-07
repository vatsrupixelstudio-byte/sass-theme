"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Search, CalendarDays, Tag } from 'lucide-react'
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import ScrollToTop from "@/components/scroll-to-top"
import FloatingElements from "@/components/floating-elements"

export default function BlogPage() {
  const blogPosts = [
    {
      image: "/ai-revolution.png",
      title: "The AI Revolution: How SaasFlow is Leading the Way",
      description: "Explore how artificial intelligence is transforming the SaaS landscape and SaasFlow's role in this exciting evolution. Learn about our latest AI-powered features and what's next.",
      date: "July 25, 2024",
      tags: ["AI", "Innovation", "SaaS"],
      link: "/blog/ai-revolution"
    },
    {
      image: "/business-growth-chart.png",
      title: "5 Strategies for Rapid SaaS Growth in 2024",
      description: "Discover actionable strategies and best practices to accelerate your SaaS business growth this year. From customer acquisition to retention, we cover it all.",
      date: "July 18, 2024",
      tags: ["Growth", "Strategy", "Business"],
      link: "/blog/saas-growth-strategies"
    },
    {
      image: "/react-code-components.png",
      title: "Building Scalable UIs with Modern React Components",
      description: "Learn about the best practices and tools for developing high-performance, scalable user interfaces using React and our component library.",
      date: "July 10, 2024",
      tags: ["Development", "React", "UI/UX"],
      link: "/blog/scalable-react-uis"
    },
    {
      image: "/cloud-computing-concept.png",
      title: "The Future of Cloud Computing in SaaS",
      description: "Dive into the evolving landscape of cloud computing and its impact on SaaS applications. Understand how to leverage cloud for maximum efficiency.",
      date: "July 01, 2024",
      tags: ["Cloud", "Technology", "Infrastructure"],
      link: "/blog/future-of-cloud"
    },
    {
      image: "/cybersecurity-network.png",
      title: "Cybersecurity Best Practices for SaaS Companies",
      description: "A comprehensive guide to implementing robust cybersecurity measures to protect your SaaS platform and customer data from emerging threats.",
      date: "June 25, 2024",
      tags: ["Security", "Compliance", "Data Protection"],
      link: "/blog/cybersecurity-best-practices"
    },
    {
      image: "/team-collaboration.png",
      title: "Enhancing Team Collaboration with SaasFlow Integrations",
      description: "Discover how SaasFlow's seamless integrations with popular collaboration tools can boost your team's productivity and communication.",
      date: "June 18, 2024",
      tags: ["Collaboration", "Integrations", "Productivity"],
      link: "/blog/team-collaboration"
    },
  ];

  const categories = ["All", "AI", "Growth", "Development", "Security", "Cloud", "Business"];
  const popularPosts = blogPosts.slice(0, 3); // Get top 3 for popular posts

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-950 dark:via-slate-900 dark:to-blue-950 overflow-hidden">
      <FloatingElements />
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-slate-900 dark:text-white mb-8 leading-tight">
            Our
            <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-pulse">
              Blog
            </span>
          </h1>
          <p className="text-xl sm:text-2xl text-slate-600 dark:text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed">
            Stay informed with the latest insights, trends, and news from the world of SaaS and technology.
          </p>
          <div className="max-w-md mx-auto flex gap-2">
            <Input type="email" placeholder="Enter your email for updates" className="flex-1 bg-white dark:bg-slate-800 border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white" />
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold">
              Subscribe
            </Button>
          </div>
        </div>
      </section>

      {/* Blog Content Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Main Blog Posts */}
          <div className="lg:col-span-3 space-y-12">
            {blogPosts.map((post, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="md:col-span-1">
                    <Link href={post.link}>
                      <img
                        src={post.image || "/placeholder.svg?height=250&width=400&query=blog post image"}
                        alt={post.title}
                        className="w-full h-full object-cover rounded-t-lg md:rounded-l-lg md:rounded-t-none group-hover:scale-105 transition-transform duration-300"
                      />
                    </Link>
                  </div>
                  <CardContent className="md:col-span-2 pt-6 md:pt-4">
                    <div className="flex items-center text-sm text-slate-500 dark:text-slate-400 mb-3">
                      <CalendarDays className="w-4 h-4 mr-2" />
                      <span>{post.date}</span>
                      <span className="mx-2">•</span>
                      <Tag className="w-4 h-4 mr-2" />
                      <div className="flex flex-wrap gap-2">
                        {post.tags.map((tag, tagIndex) => (
                          <span key={tagIndex} className="bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300 px-2 py-0.5 rounded-full text-xs font-medium">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      <Link href={post.link}>{post.title}</Link>
                    </h3>
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4 line-clamp-3">
                      {post.description}
                    </p>
                    <Link href={post.link} className="text-blue-600 dark:text-blue-400 font-medium flex items-center group-hover:underline">
                      Read More
                      <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-8">
            {/* Search */}
            <Card className="p-6 shadow-lg bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm border border-slate-200 dark:border-slate-700">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl font-bold text-slate-900 dark:text-white">Search</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="relative">
                  <Input type="text" placeholder="Search articles..." className="w-full pr-10 bg-white dark:bg-slate-800 border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white" />
                  <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500 dark:text-slate-400" />
                </div>
              </CardContent>
            </Card>

            {/* Categories */}
            <Card className="p-6 shadow-lg bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm border border-slate-200 dark:border-slate-700">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl font-bold text-slate-900 dark:text-white">Categories</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {categories.map((category, index) => (
                    <Button key={index} variant="outline" className="bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-800 hover:bg-blue-100 dark:hover:bg-blue-800">
                      {category}
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Popular Posts */}
            <Card className="p-6 shadow-lg bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm border border-slate-200 dark:border-slate-700">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl font-bold text-slate-900 dark:text-white">Popular Posts</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {popularPosts.map((post, index) => (
                    <div key={index} className="flex items-center gap-4 group">
                      <Link href={post.link}>
                        <img
                          src={post.image || "/placeholder.svg?height=80&width=80&query=small blog post image"}
                          alt={post.title}
                          className="w-20 h-20 object-cover rounded-lg flex-shrink-0 group-hover:scale-105 transition-transform duration-300"
                        />
                      </Link>
                      <div>
                        <h4 className="text-base font-semibold text-slate-900 dark:text-white mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                          <Link href={post.link} className="line-clamp-2">{post.title}</Link>
                        </h4>
                        <p className="text-sm text-slate-500 dark:text-slate-400 flex items-center">
                          <CalendarDays className="w-3 h-3 mr-1" />
                          {post.date}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </div>
  )
}
