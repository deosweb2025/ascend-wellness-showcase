import { motion } from "framer-motion";
import { PageLayout } from "@/components/layout";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Link } from "react-router-dom";
import { ArrowRight, HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "What types of addiction does ASCEND treat?",
    answer:
      "ASCEND treats a wide range of addictions including alcohol, drugs, prescription medications, screen/internet addiction, gambling, food disorders, workaholism, and other behavioural addictions. Our comprehensive approach addresses both substance abuse and lifestyle disorders.",
  },
  {
    question: "How long is the rehabilitation program?",
    answer:
      "The duration of our rehabilitation program varies based on individual needs. Our residential program typically ranges from 30 to 90 days, with many patients benefiting from extended care. We also offer flexible outpatient options for those who need to maintain their daily responsibilities.",
  },
  {
    question: "What is the 12-Step program?",
    answer:
      "The 12-Step program is a set of guiding principles outlining a course of action for recovery from addiction. Originally developed by Alcoholics Anonymous, it has been adapted for various forms of addiction. At ASCEND, we integrate these principles with evidence-based therapeutic approaches for comprehensive care.",
  },
  {
    question: "Is family involvement part of the treatment?",
    answer:
      "Yes, family involvement is a crucial component of our treatment approach. We offer family counselling sessions, education programs, and support groups to help families understand addiction, improve communication, and create a supportive home environment for lasting recovery.",
  },
  {
    question: "What amenities are available at the centre?",
    answer:
      "ASCEND offers premium amenities including private and shared accommodation options, nutritious meals prepared fresh daily, therapy rooms, common areas for group activities, meditation spaces, and recreational facilities. Our environment is designed to promote healing and comfort.",
  },
  {
    question: "Do you accept insurance?",
    answer:
      "We work with various insurance providers and can help you navigate your coverage options. Please contact our admissions team for specific information about insurance acceptance and payment plans available.",
  },
  {
    question: "Is confidentiality maintained?",
    answer:
      "Absolutely. Patient confidentiality is paramount at ASCEND. All medical records, treatment details, and personal information are protected under strict privacy protocols. We adhere to all applicable healthcare privacy regulations.",
  },
  {
    question: "What makes ASCEND different from other rehabilitation centres?",
    answer:
      "ASCEND combines luxury amenities with world-class medical care. Our multidisciplinary team of psychiatrists, psychologists, and counsellors provides personalized treatment plans. We focus on the 12-Step philosophy, individual and group therapy, holistic wellness practices, and long-term recovery support.",
  },
  {
    question: "Can I visit the facility before admission?",
    answer:
      "Yes, we encourage prospective patients and their families to visit our facility before making a decision. Please contact us to schedule a tour and consultation with our admissions team.",
  },
  {
    question: "What support is available after completing the program?",
    answer:
      "We offer comprehensive aftercare support including our daycare program, outpatient services, alumni support groups, and ongoing counselling. Recovery is a lifelong journey, and we remain committed to supporting our patients long after they complete the primary program.",
  },
];

const FAQ = () => {
  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="bg-secondary/50 pt-24 sm:pt-32 pb-12 sm:pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
              <HelpCircle className="w-8 h-8 sm:w-10 sm:h-10 text-primary" />
            </div>
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl text-foreground mb-4 sm:mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-muted-foreground text-base sm:text-lg px-2">
              Find answers to common questions about our programs, facilities,
              and the recovery process at ASCEND.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Accordion type="single" collapsible className="space-y-3 sm:space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-card rounded-xl sm:rounded-2xl border-none shadow-soft overflow-hidden"
                >
                  <AccordionTrigger className="px-4 sm:px-6 py-4 sm:py-5 text-left font-display text-base sm:text-lg text-foreground hover:no-underline hover:bg-secondary/30 transition-colors">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-4 sm:px-6 pb-4 sm:pb-5 text-muted-foreground leading-relaxed text-sm sm:text-base">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center mt-12 sm:mt-16"
          >
            <p className="text-muted-foreground mb-4 sm:mb-6 text-sm sm:text-base">
              Still have questions? We're here to help.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium text-sm sm:text-base transition-all duration-300 hover:shadow-glow hover:scale-105 w-full sm:w-auto max-w-xs mx-auto sm:max-w-none"
            >
              Contact Us
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
};

export default FAQ;
