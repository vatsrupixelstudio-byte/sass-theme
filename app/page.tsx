"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ArrowRight, Check, Star, Zap, Shield, Smartphone, BarChart3, Users, Globe, ChevronUp, Play, Sparkles, TrendingUp, Award, Clock, Lightbulb, Settings, Code, HelpCircle, BookOpen, MessageSquare, DollarSign, Layers, Rocket, Target, TrendingUpIcon, UserPlus, LayoutDashboard, FileText, Lock, Cloud, Repeat, ZapIcon } from 'lucide-react'
import Link from "next/link"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import ScrollToTop from "@/components/scroll-to-top"
import AnimatedCounter from "@/components/animated-counter"
import FloatingElements from "@/components/floating-elements"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

import { HeroSection } from "@/components/sections/hero-section"
import { DashboardPreviewSection } from "@/components/sections/dashboard-preview-section"
import { FeaturesSection } from "@/components/sections/features-section"
import { HowItWorksSection } from "@/components/sections/how-it-works-section"
import { TestimonialsSection } from "@/components/sections/testimonials-section"
import { PricingSection } from "@/components/sections/pricing-section"
import { FAQSection } from "@/components/sections/faq-section"
import { BlogPostsSection } from "@/components/sections/blog-posts-section"
import { CTASection } from "@/components/sections/cta-section"

export default function HomePage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-950 dark:via-slate-900 dark:to-blue-950 overflow-hidden">
      <FloatingElements />
      <Navigation />

      <HeroSection />
      <DashboardPreviewSection />
      <FeaturesSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <PricingSection />
      <FAQSection />
      <BlogPostsSection />
      <CTASection />

      <Footer />
      <ScrollToTop />
    </div>
  )
}
