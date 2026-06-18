import { Typewriter } from "react-simple-typewriter";
import resume from "../assets/resume/Vishal_Singh_Resume.pdf";
export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-6 bg-[#050414] overflow-hidden"
    >
      <div className="absolute inset-0 -z-10">
       
        <div className="absolute top-24 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-primary/10 blur-[130px] rounded-full" />

        <div className="absolute bottom-20 right-16 w-[260px] h-[260px] bg-primary/5 blur-[100px] rounded-full" />

        <div className="absolute top-16 left-12 w-[180px] h-[180px] bg-white/5 blur-[80px] rounded-full" />
      </div>

      <div className="container max-w-5xl mx-auto text-center relative z-10 pt-24 md:pt-0">
        <div className="space-y-8">
          {/* Top Intro */}
          <p className="text-sm md:text-base tracking-[0.35em] uppercase text-primary font-medium opacity-90">
            Software Engineer • Backend Developer • Problem Solver
          </p>
          <h1 className="text-5xl sm:text-6xl md:text-8xl font-extrabold tracking-tight leading-tight">
            <span className="text-white">Hi, I'm</span>
            <br />

            <span className="text-primary">Vishal</span>

            <span className="ml-3 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Singh
            </span>
          </h1>
    <div className="flex justify-center mt-4 mb-4">
  <div
    className="
      flex items-center gap-2
      px-4 py-2
      rounded-full
      bg-green-500/10
      border border-green-500/30
      text-green-400
      font-semibold
      text-sm md:text-base
    "
  >
    <span className="w-2.5 h-2.5 bg-green-400 rounded-full animate-pulse"></span>

    Open To SDE-1 Opportunities
  </div>
  
</div>
<div className="flex flex-wrap justify-center gap-4 mt-6 mb-6 text-sm">

  <span className="text-yellow-400">
    🏆 2200+ DSA Problems
  </span>

  <span className="text-orange-400">
    ⭐ 4★ CodeChef
  </span>

  <span className="text-blue-400">
    💙 Specialist
  </span>

  <span className="text-green-400">
    🚀 60+ Repositories
  </span>

</div>
          <h2 className="text-xl sm:text-2xl md:text-4xl font-semibold text-gray-300 min-h-[55px]">
            <Typewriter
              words={[
                "AI Backend Engineer ⚡",
                "Full Stack Developer 💻",
                "Java + Golang Developer ☕",
                "DSA Enthusiast 🔥",
                "Scalable Systems Builder 🚀",
              ]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={80}
              deleteSpeed={45}
              delaySpeed={1700}
            />
          </h2>

          {/* Description */}
          <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            I build{" "}
            <span className="text-white font-medium">
              scalable backend systems
            </span>
            , efficient APIs, and full stack applications focused on
            performance, reliability, and clean architecture using{" "}
            <span className="text-primary font-medium">
              Java, Golang, MERN Stack, REST APIs, Microservices,
              PostgreSQL, and Cloud technologies.
            </span>
          </p>

          {/* CTA Buttons */}
         <div className="flex flex-col sm:flex-row gap-5 justify-center pt-4">
  
  <a
    href="#projects"
    className="px-8 py-4 rounded-full bg-primary text-white font-semibold text-lg hover:scale-105 transition-all duration-300 shadow-[0_0_25px_rgba(130,69,236,0.35)]"
  >
    View My Work
  </a>

  <a
    href={resume}
    target="_blank"
    rel="noopener noreferrer"
    className="px-8 py-4 rounded-full border border-primary bg-primary/10 text-white font-semibold text-lg hover:scale-105 transition-all duration-300"
  >
    View Resume
  </a>

  <a
    href="#contact"
    className="px-8 py-4 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-white font-semibold text-lg hover:border-primary hover:text-primary transition-all duration-300"
  >
    Let's Connect
  </a>

</div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;