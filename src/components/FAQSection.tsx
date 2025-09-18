import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";

export function FAQSection() {
  const faqs = [
    {
      question: "How are solutions personalized?",
      answer: "We take the time to understand your unique business operations, challenges, and goals. Our personalized approach involves in-depth consultations and analysis to craft solutions that align with your specific objectives and growth plans."
    },
    {
      question: "What experience does the team have?",
      answer: "Our team consists of seasoned professionals with over 8 years of combined experience across various industries including technology, finance, healthcare, and e-commerce. We bring expertise in software development, digital marketing, operations consultancy, and business strategy."
    },
    {
      question: "How do strategies save costs?",
      answer: "Our cost-saving strategies focus on process optimization, automation implementation, and waste elimination. We identify inefficiencies in your current operations and implement solutions that reduce manual work, minimize errors, and maximize resource utilization, resulting in significant cost reductions."
    },
    {
      question: "How is success measured?",
      answer: "We use comprehensive KPIs and performance metrics tailored to your business goals. This includes tracking ROI, operational efficiency improvements, cost savings, customer satisfaction scores, and project completion rates. We provide regular reports and analytics to demonstrate tangible results."
    }
  ];

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-sm text-blue-400 uppercase tracking-wider mb-2">Some Current FAQ</h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-4 text-white">Tailored Business Solutions</h3>
            <p className="text-gray-300 text-lg">
              We offer tailored services in mobile development, cross-platform apps, digital marketing, software development, and web design for businesses
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border border-gray-700 rounded-lg px-6 bg-gray-800">
                <AccordionTrigger className="text-left font-semibold hover:no-underline text-white">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 pt-2 pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}