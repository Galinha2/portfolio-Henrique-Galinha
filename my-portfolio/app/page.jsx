"use client";
import Home from "@/components/home/Home";
import Stack from "@/components/stack/Stack";
import Featured from "@/components/featured/Featured";
import About from "@/components/about/About";
import Contact from "@/components/contact/Contact";

export default function HomePage() {
  return (
    <div>
      {/* HOME */}
      <Home />

      <Stack />

      <Featured />
      
      <section
        id="projects"
        className="min-h-screen flex items-center justify-center bg-gray-100"
      >
        <h1>Projects</h1>
      </section>

      <About />

      <Contact />
      
    </div>
  );
}
