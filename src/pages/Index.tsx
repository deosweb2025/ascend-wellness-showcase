import { PageLayout } from "@/components/layout";
import {
  HeroSection,
  StatsSection,
  AboutPreview,
  ServicesOverview,
  WhyAscend,
  TestimonialsSection,
  CTASection,
} from "@/components/home";

const Index = () => {
  return (
    <PageLayout>
      <HeroSection />
      <StatsSection />
      <AboutPreview />
      <ServicesOverview />
      <WhyAscend />
      <TestimonialsSection />
      <CTASection />
    </PageLayout>
  );
};

export default Index;
