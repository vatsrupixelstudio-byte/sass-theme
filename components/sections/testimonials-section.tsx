import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star } from 'lucide-react'

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechStart",
      avatar: "/professional-woman-diverse.png",
      content: "“SaasFlow transformed our development process. We shipped our MVP 3x faster than expected and saw immediate results. The intuitive interface and robust features are a game-changer!”",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "CTO, InnovateLab",
      avatar: "/professional-man.png",
      content: "“The security features are enterprise-grade, giving us complete peace of mind. We migrated our entire infrastructure seamlessly, and the support team was incredibly helpful throughout the process.”",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      role: "Product Manager, GrowthCo",
      avatar: "/professional-woman-diverse.png",
      content: "“Outstanding customer support! They helped us integrate custom features perfectly and were always responsive. SaasFlow has truly empowered our product team to deliver more value faster.”",
      rating: 5
    },
    {
      name: "David Lee",
      role: "Founder, StartupX",
      avatar: "/man-avatar.png",
      content: "“As a startup, speed is everything. SaasFlow provided us with the tools to build and scale rapidly without compromising on quality or performance. Highly recommend!”",
      rating: 5
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm animate-fade-in-up">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            What Our Customers Say
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Hear from businesses that have transformed their operations with SaasFlow.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg hover:-translate-y-1 bg-gradient-to-br from-white to-slate-50 dark:from-slate-800 dark:to-slate-900">
              <CardContent className="pt-8">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-slate-700 dark:text-slate-200 mb-6 leading-relaxed text-lg italic">
                  {testimonial.content}
                </p>
                <div className="flex items-center">
                  <Avatar className="w-14 h-14 mr-4 ring-2 ring-blue-200 dark:ring-blue-800">
                    <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                    <AvatarFallback>{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold text-slate-900 dark:text-white text-lg">{testimonial.name}</div>
                    <div className="text-sm text-slate-600 dark:text-slate-400">{testimonial.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
