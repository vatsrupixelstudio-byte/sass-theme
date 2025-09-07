import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQSection() {
  const faqs = [
    {
      question: "What is SaasFlow?",
      answer: "SaasFlow is a comprehensive platform designed to help businesses build, deploy, and scale their SaaS applications faster. It provides pre-built components, authentication, payments, and analytics."
    },
    {
      question: "How secure is my data with SaasFlow?",
      answer: "We prioritize your data security with enterprise-grade encryption, SOC 2 compliance, and continuous threat monitoring to ensure your information is always protected."
    },
    {
      question: "Can I integrate SaasFlow with my existing tools?",
      answer: "Yes, SaasFlow is built with extensibility in mind. We offer a wide range of integrations and a robust API to connect with your existing tech stack seamlessly."
    },
    {
      question: "Do you offer a free trial?",
      answer: "We offer a generous free trial period so you can explore all the features of SaasFlow and see how it can benefit your business before committing."
    },
    {
      question: "What kind of support do you offer?",
      answer: "We provide 24/7 customer support through various channels, including email, chat, and a comprehensive knowledge base, to ensure you always get the help you need."
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm animate-fade-in-up">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Find answers to the most common questions about SaasFlow.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border-b border-slate-200 dark:border-slate-700">
              <AccordionTrigger className="text-lg font-semibold text-left text-slate-900 dark:text-white hover:no-underline py-4">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-slate-600 dark:text-slate-300 pb-4 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
