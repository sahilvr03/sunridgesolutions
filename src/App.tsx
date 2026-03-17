// App.tsx
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ServicePage from "./pages/ServicePage";
import ContactPage from "./pages/ContactPage";
import ConsultationPage from "./pages/ConsultationPage";
import AboutPage from "./pages/AboutPage";
import NotFound from "./pages/NotFound";
import TechnologyPage from "./pages/Technology";
import PricingPage from "./pages/Pricing";
import SpecialtiesPage from "./pages/Specialities";
import ScrollToTop from "./hooks/ScrollToTop";
import HowItWorksPage from "./pages/HowItWorkpage";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import OnboardingPage from "@/pages/OnboardingPage";

const queryClient = new QueryClient();

// Create a Layout component
const PageLayout = ({ children }: { children: React.ReactNode }) => (
  <div className="min-h-screen">
    <Header />
    <main className="pt-16 lg:pt-20">
      {children}
    </main>
    <Footer />
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={
            <PageLayout>
              <Index />
            </PageLayout>
          } />
          <Route path="/services/:serviceSlug" element={
            <PageLayout>
              <ServicePage />
            </PageLayout>
          } />
          <Route path="/contact" element={
            <PageLayout>
              <ContactPage />
            </PageLayout>
          } />
          <Route path="/consultation" element={
            <PageLayout>
              <ConsultationPage />
            </PageLayout>
          } />
          <Route path="/about" element={
            <PageLayout>
              <AboutPage />
            </PageLayout>
          } />
          <Route path="/technology" element={
            <PageLayout>
              <TechnologyPage />
            </PageLayout>
          } />
          <Route path="/pricing" element={
            <PageLayout>
              <PricingPage />
            </PageLayout>
          } />
          <Route path="/specialties" element={
            <PageLayout>
              <SpecialtiesPage />
            </PageLayout>
          } />
          <Route path="/how-it-works" element={
            <PageLayout>
              <HowItWorksPage />
            </PageLayout>
          } />
          <Route path="/onboarding" element={
            <PageLayout>
              <OnboardingPage />
            </PageLayout>
          } />

          <Route path="/services" element={
  <PageLayout>
    <ServicePage />
  </PageLayout>
} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;