import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight } from 'lucide-react'

export function BlogPostsSection() {
  const blogPosts = [
    {
      image: "/ai-revolution.png",
      title: "The AI Revolution: How SaasFlow is Leading the Way",
      description: "Explore how artificial intelligence is transforming the SaaS landscape and SaasFlow's role in this exciting evolution.",
      link: "/blog/ai-revolution"
    },
    {
      image: "/business-growth-chart.png",
      title: "5 Strategies for Rapid SaaS Growth in 2024",
      description: "Discover actionable strategies and best practices to accelerate your SaaS business growth this year.",
      link: "/blog/saas-growth-strategies"
    },
    {
      image: "/react-code-components.png",
      title: "Building Scalable UIs with Modern React Components",
      description: "Learn about the best practices and tools for developing high-performance, scalable user interfaces.",
      link: "/blog/scalable-react-uis"
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 animate-fade-in-up">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            Latest from Our Blog
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Stay updated with the latest trends, insights, and product news.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg hover:-translate-y-1 bg-gradient-to-br from-white to-slate-50 dark:from-slate-800 dark:to-slate-900">
              <Link href={post.link}>
                <img src={post.image || "/placeholder.svg"} alt={post.title} className="w-full h-48 object-cover rounded-t-lg group-hover:scale-105 transition-transform duration-300" />
              </Link>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
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
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/blog">
            <Button size="lg" variant="outline" className="group px-8 py-3 text-lg font-semibold hover:bg-blue-50 dark:hover:bg-blue-950 transition-all duration-300 hover:scale-105">
              View All Articles
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
