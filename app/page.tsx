import BookCallModal from "@/components/BookCallModal";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import InquirySection from "@/components/InquirySection";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <HowItWorks />
      <Services />
      <InquirySection />
      <Footer />
      {/* <BookCallModal /> */}
    </main>
  );
}