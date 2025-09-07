import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Check } from 'lucide-react'

export function PricingSection() {
  const pricingPlans = [
    {
      title: "Starter",
      price: "$29",
      period: "/month",
      features: [
        "Up to 5 users",
        "Basic analytics",
        "Email support",
        "10GB storage",
      ],
      buttonText: "Get Started",
      link: "/signup",
      highlight: false,
    },
    {
      title: "Pro",
      price: "$79",
      period: "/month",
      features: [
        "Up to 20 users",
        "Advanced analytics",
        "Priority support",
        "100GB storage",
        "Custom integrations",
      ],
      buttonText: "Start Pro Trial",
      link: "/signup",
      highlight: true,
    },
    {
      title: "Enterprise",
      price: "Custom",
      period: "",
      features: [
        "Unlimited users",
        "Dedicated support",
        "Custom solutions",
        "Advanced security",
        "On-premise options",
      ],
      buttonText: "Contact Sales",
      link: "/contact",
      highlight: false,
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 animate-fade-in-up">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            Simple & Transparent Pricing
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Choose the plan that best fits your needs, with no hidden fees.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <Card key={index} className={`flex flex-col border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 ${plan.highlight ? 'bg-gradient-to-br from-blue-600 to-purple-600 text-white' : 'bg-white dark:bg-slate-800'}`}>
              <CardHeader className="text-center pb-6">
                <CardTitle className={`text-3xl font-bold ${plan.highlight ? 'text-white' : 'text-slate-900 dark:text-white'} mb-2`}>
                  {plan.title}
                </CardTitle>
                <CardDescription className={`text-5xl font-extrabold ${plan.highlight ? 'text-white' : 'text-slate-900 dark:text-white'}`}>
                  {plan.price}
                  <span className={`text-xl font-medium ${plan.highlight ? 'text-blue-100' : 'text-slate-600 dark:text-slate-400'}`}>
                    {plan.period}
                  </span>
                </CardDescription>
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

        <div className="text-center mt-12">
          <Link href="/pricing">
            <Button size="lg" variant="outline" className="group px-8 py-3 text-lg font-semibold hover:bg-blue-50 dark:hover:bg-blue-950 transition-all duration-300 hover:scale-105">
              View All Plans
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
