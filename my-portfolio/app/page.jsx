"use client";
import Home from "@/components/home/Home";

export default function HomePage() {
  return (
    <div className="mt-20">
      {/* HOME */}
      <Home />


      {/* SECTIONS */}
      <main className="pt-20">
        <section id="about" className="min-h-screen flex items-center justify-center">
          <h1>About Me</h1>
        </section>

        <section id="projects" className="min-h-screen flex items-center justify-center bg-gray-100">
          <h1>Projects</h1>
        </section>

        <section id="contacts" className="min-h-screen flex items-center justify-center bg-gray-200">
          <h1>Contacts</h1>
        </section>
      </main>
    </div>
  );
}