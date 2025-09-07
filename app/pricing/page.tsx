"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, ArrowRight } from 'lucide-react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import ScrollToTop from "@/components/scroll-to-top"
import FloatingElements from "@/components/floating-elements"

export default function PricingPage() {
  const pricingPlans = [
    {
      title: "Starter",
      price: "$29",
      period: "/month",
      description: "Ideal for small teams and startups getting off the ground.",
      features: [
        "Up to 5 users",
        "Basic analytics",
        "Email support",
        "10GB storage",
        "Standard integrations",
      ],
      buttonText: "Get Started",
      link: "/signup",
      highlight: false,
    },
    {
      title: "Pro",
      price: "$79",
      period: "/month",
      description: "Perfect for growing businesses needing more power and support.",
      features: [
        "Up to 20 users",
        "Advanced analytics",
        "Priority email & chat support",
        "100GB storage",
        "Custom integrations",
        "Automated workflows",
      ],
      buttonText: "Start Pro Trial",
      link: "/signup",
      highlight: true,
    },
    {
      title: "Enterprise",
      price: "Custom",
      period: "",
      description: "Tailored solutions for large organizations with complex needs.",
      features: [
        "Unlimited users",
        "Dedicated account manager",
        "24/7 phone & chat support",
        "Unlimited storage",
        "Advanced security & compliance",
        "On-premise deployment options",
      ],
      buttonText: "Contact Sales",
      link: "/contact",
      highlight: false,
    },
  ];

  const enterpriseBenefits = [
    {
      title: "Custom Solutions",
      description: "Tailored features and integrations to meet your unique business requirements.",
      icon: "✨"
    },
    {
      title: "Dedicated Support",
      description: "A dedicated account manager and technical support team for personalized assistance.",
      icon: "🤝"
    },
    {
      title: "Enhanced Security",
      description: "Advanced security protocols, compliance certifications, and data residency options.",
      icon: "🔒"
    },
    {
      title: "Scalability",
      description: "Infrastructure designed to scale with your business, no matter the size or demand.",
      icon: "📈"
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
            Flexible Pricing for Every
            <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-pulse">
              Business Size
            </span>
          </h1>
          <p className="text-xl sm:text-2xl text-slate-600 dark:text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed">
            Choose the perfect plan that aligns with your needs, from startups to large enterprises. No hidden fees, just transparent value.
          </p>
        </div>
      </section>

      {/* Pricing Plans Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <Card key={index} className={`flex flex-col border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 ${plan.highlight ? 'bg-gradient-to-br from-blue-600 to-purple-600 text-white' : 'bg-white dark:bg-slate-800'}`}>
                <CardHeader className="text-center pb-6">
                  <CardTitle className={`text-3xl font-bold ${plan.highlight ? 'text-white' : 'text-slate-900 dark:text-white'} mb-2`}>
                    {plan.title}
                  </CardTitle>
                  <CardDescription className={`text-base ${plan.highlight ? 'text-blue-100' : 'text-slate-600 dark:text-slate-300'} mb-4`}>
                    {plan.description}
                  </CardDescription>
                  <div className={`text-5xl font-extrabold ${plan.highlight ? 'text-white' : 'text-slate-900 dark:text-white'}`}>
                    {plan.price}
                    <span className={`text-xl font-medium ${plan.highlight ? 'text-blue-100' : 'text-slate-600 dark:text-slate-400'}`}>
                      {plan.period}
                    </span>
                  </div>
                </CardHeader>
                <CardContent className="flex-1 px-6 py-4">
                  <ul className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <li key={i} className={`flex items-center ${plan.highlight ? 'text-blue-100' : 'text-slate-600 dark:text-slate-300'}`}>
                        <Check className={`w-5 h-5 mr-2 ${plan.highlight ? 'text-white' : 'text-green-500'}`} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="p-6 pt-0">
                  <Link href={plan.link} className="w-full">
                    <Button size="lg" className={`w-full text-lg font-semibold py-3 ${plan.highlight ? 'bg-white text-blue-600 hover:bg-blue-50' : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white'}`}>
                      {plan.buttonText}
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            Enterprise Solutions
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 mb-16 max-w-2xl mx-auto">
            For large organizations with unique requirements, our Enterprise plan offers custom solutions and dedicated support.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {enterpriseBenefits.map((benefit, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg hover:-translate-y-2 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm">
                <CardHeader>
                  <div className="text-5xl mb-4">{benefit.icon}</div>
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

          <div className="mt-16">
            <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
              Ready for a Custom Quote?
            </h3>
            <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 max-w-xl mx-auto">
              Contact our sales team to discuss your specific needs and get a tailored plan.
            </p>
            <Link href="/contact">
              <Button size="lg" className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-10 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                Contact Sales
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section (reused from home page) */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Find answers to the most common questions about SaasFlow pricing.
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
            <AccordionItem value="item-1" className="border-b border-slate-200 dark:border-slate-700">
              <AccordionTrigger className="text-lg font-semibold text-left text-slate-900 dark:text-white hover:no-underline py-4">
                What payment methods do you accept?
              </AccordionTrigger>
              <AccordionContent className="text-slate-600 dark:text-slate-300 pb-4 leading-relaxed">
                We accept all major credit cards (Visa, Mastercard, American Express, Discover) and PayPal. For enterprise plans, we can arrange invoicing.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" className="border-b border-slate-200 dark:border-slate-700">
              <AccordionTrigger className="text-lg font-semibold text-left text-slate-900 dark:text-white hover:no-underline py-4">
                Can I change my plan later?
              </AccordionTrigger>
              <AccordionContent className="text-slate-600 dark:text-slate-300 pb-4 leading-relaxed">
                Yes, you can upgrade or downgrade your plan at any time directly from your dashboard. Changes will be prorated.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3" className="border-b border-slate-200 dark:border-slate-700">
              <AccordionTrigger className="text-lg font-semibold text-left text-slate-900 dark:text-white hover:no-underline py-4">
                Is there a discount for annual billing?
              </AccordionTrigger>
              <AccordionContent className="text-slate-600 dark:text-slate-300 pb-4 leading-relaxed">
                Yes, we offer a significant discount (typically 20%) when you choose annual billing compared to monthly payments.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4" className="border-b border-slate-200 dark:border-slate-700">
              <AccordionTrigger className="text-lg font-semibold text-left text-slate-900 dark:text-white hover:no-underline py-4">
                What happens if I exceed my storage limit?
              </AccordionTrigger>
              <AccordionContent className="text-slate-600 dark:text-slate-300 pb-4 leading-relaxed">
                If you exceed your storage limit, we will notify you and provide options to upgrade your plan or purchase additional storage.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </div>
  )
}
