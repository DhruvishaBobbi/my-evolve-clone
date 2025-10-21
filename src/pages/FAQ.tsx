import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, HelpCircle, Smartphone, CreditCard, Heart, Settings } from "lucide-react";

interface FAQCategory {
  title: string;
  icon: React.ReactNode;
  questions: {
    question: string;
    answer: string;
  }[];
}

const faqCategories: FAQCategory[] = [
  {
    title: "Getting Started",
    icon: <HelpCircle className="w-5 h-5" />,
    questions: [
      {
        question: "What is Bobbi?",
        answer: "Bobbi is a women's fitness app that personalises workouts based on your menstrual cycle and fitness goals. We help you train smarter by syncing your workouts with your body's natural rhythm — so you can build strength, boost energy, and feel your best throughout the month.",
      },
      {
        question: "How does Bobbi personalise workouts for my cycle?",
        answer: "We tailor your training intensity and type based on where you are in your cycle. During high-energy phases, we recommend strength and power workouts. When your body needs rest, we guide you toward gentler movement and recovery.",
      },
      {
        question: "Do I need to track my period to use the app?",
        answer: "Yes, tracking your cycle helps Bobbi create the most accurate workout plan for you. You can log your period start date in the app, and we'll do the rest — adjusting your training plan as your cycle progresses.",
      },
      {
        question: "Is Bobbi suitable for beginners?",
        answer: "Absolutely! Bobbi is designed for all fitness levels. Whether you're new to exercise or a seasoned athlete, our workouts adapt to your experience, goals, and current phase of your cycle.",
      },
    ],
  },
  {
    title: "Using the App",
    icon: <Smartphone className="w-5 h-5" />,
    questions: [
      {
        question: "How do I update my cycle information?",
        answer: "You can update your cycle details anytime in the app's settings. Just head to your profile, select 'Cycle Tracking,' and log your period start date. Bobbi will automatically adjust your workouts based on the new information.",
      },
      {
        question: "Can I adjust my workout plan if I'm injured or tired?",
        answer: "Yes! Bobbi is flexible and designed to work with you. If you're feeling low energy or dealing with an injury, you can adjust your workout intensity or swap to a gentler option. Your wellbeing always comes first.",
      },
      {
        question: "What equipment do I need for the workouts?",
        answer: "Most Bobbi workouts use minimal equipment — think dumbbells, resistance bands, or just your body weight. We also offer equipment-free options, so you can train anywhere, anytime.",
      },
      {
        question: "Can I use Bobbi alongside other fitness apps?",
        answer: "Of course! Bobbi complements other fitness routines. Whether you're into yoga, running, or strength training, our app helps you understand how to time your workouts with your cycle for optimal results.",
      },
    ],
  },
  {
    title: "Membership & Payments",
    icon: <CreditCard className="w-5 h-5" />,
    questions: [
      {
        question: "How much does a Bobbi subscription cost?",
        answer: "We offer flexible pricing plans to suit your needs. Monthly and annual subscriptions are available, with the yearly plan offering the best value. Check out our pricing page for current offers.",
      },
      {
        question: "What's included in the free version?",
        answer: "Our free version gives you access to basic cycle tracking and a selection of workouts. Upgrading to premium unlocks personalized workout plans, in-depth insights, nutrition guidance, and unlimited access to our full library.",
      },
      {
        question: "How can I cancel or pause my subscription?",
        answer: "You can cancel or pause your subscription anytime in your account settings. No hidden fees or hassle — we want you to feel in control of your membership.",
      },
      {
        question: "Do you offer student or referral discounts?",
        answer: "Yes! We offer student discounts and a referral program where you and your friend both get perks. Check the app or reach out to our team for details on current promotions.",
      },
    ],
  },
  {
    title: "Health & Wellness",
    icon: <Heart className="w-5 h-5" />,
    questions: [
      {
        question: "Is Bobbi medically approved or based on science?",
        answer: "Yes! Bobbi's approach is grounded in research on female physiology and exercise science. Our workouts are designed with input from fitness experts, trainers, and health professionals who understand women's bodies.",
      },
      {
        question: "Can I use Bobbi if my cycles are irregular?",
        answer: "Absolutely. If your cycles are irregular, you can still use Bobbi by logging your period when it arrives. The app will adapt and provide guidance based on your unique patterns.",
      },
      {
        question: "What if I'm on birth control or have PCOS?",
        answer: "Bobbi works for women on birth control and those with conditions like PCOS. While hormonal birth control can affect your natural cycle, our workouts still support your overall fitness and wellbeing. If you have specific health concerns, we recommend consulting your doctor.",
      },
      {
        question: "Will Bobbi's workouts sync with my energy levels and hormones?",
        answer: "That's the whole idea! Bobbi is designed to match your training to your hormonal fluctuations. When your energy is high, we push you. When your body needs rest, we guide you toward recovery and gentle movement.",
      },
    ],
  },
  {
    title: "Technical Support",
    icon: <Settings className="w-5 h-5" />,
    questions: [
      {
        question: "The app isn't loading — what should I do?",
        answer: "Try closing and reopening the app, or check if there's an update available. If the issue persists, reach out to our support team — we're here to help get you back on track.",
      },
      {
        question: "How can I reset my password?",
        answer: "Head to the login screen and tap 'Forgot Password.' We'll send you a reset link via email. If you don't see it, check your spam folder or contact support.",
      },
      {
        question: "Who do I contact if I find a bug or issue?",
        answer: "We appreciate you letting us know! Drop us an email or use the in-app support feature. Our team reviews all reports and works quickly to fix any bugs.",
      },
    ],
  },
];

const FAQ = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black">
              Need a Hand?
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              We're here to help you get the most out of Bobbi. Find quick answers to common questions below.
            </p>
          </div>
        </section>

        {/* FAQ Categories */}
        <section className="py-16 md:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            {faqCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    {category.icon}
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold">
                    {category.title}
                  </h2>
                </div>
                <Accordion type="single" collapsible className="space-y-4">
                  {category.questions.map((faq, faqIndex) => (
                    <AccordionItem
                      key={faqIndex}
                      value={`${categoryIndex}-${faqIndex}`}
                      className="border rounded-lg px-6 bg-card"
                    >
                      <AccordionTrigger className="text-left hover:no-underline py-4">
                        <span className="font-semibold pr-4">{faq.question}</span>
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground leading-relaxed pb-4">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-16 md:py-20 bg-muted/30">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="bg-gradient-to-br from-primary/10 to-secondary/10 border-none">
              <CardContent className="p-8 md:p-12 text-center space-y-6">
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto">
                  <Mail className="w-8 h-8 text-primary" />
                </div>
                <h2 className="text-2xl md:text-3xl font-black">
                  Still Have Questions?
                </h2>
                <p className="text-lg text-muted-foreground max-w-xl mx-auto">
                  Couldn't find what you were looking for? Drop us a message — we love hearing from our users and we're always happy to help.
                </p>
                <Button size="lg" className="mt-4">
                  Contact the Bobbi Team
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default FAQ;
