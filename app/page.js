import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen w-full flex-col overflow-x-hidden bg-white">
      <Navbar />
      <Hero />
      <Projects />
      <Footer />
    </main>
  );
}
