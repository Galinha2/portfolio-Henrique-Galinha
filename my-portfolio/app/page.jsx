"use client";
import Home from "@/components/home/Home";
import Stack from "@/components/stack/Stack";
import Featured from "@/components/featured/Featured";
import About from "@/components/about/About";
import Contact from "@/components/contact/Contact";
import Projects from "@/components/projects/Projects";

export default function HomePage() {
  return (
    <div>
      {/* HOME */}
      <Home />

      <Stack />

      <Featured />
      
      <Projects />

      <About />

      <Contact />

    </div>
  );
}
