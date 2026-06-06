export const OpenToWorkSection = () => {
  return (
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-5xl">
        <div
          className="
            bg-white/5
            border border-primary/30
            backdrop-blur-md
            rounded-3xl
            p-8 md:p-12
            text-center
            shadow-[0_0_30px_rgba(130,69,236,0.15)]
          "
        >
          {/* Status */}
          <div className="flex justify-center items-center gap-3 mb-6">
            <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></span>

            <span className="text-green-400 font-semibold text-lg">
              Open To Work
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Looking for{" "}
            <span className="text-primary">
              SDE-1 Opportunities
            </span>
          </h2>
          <p className="text-primary font-medium text-lg mb-4">
  🎓 Final Year B.Tech CSE Student (2023–2027) | CGPA: 8.53
</p>

          {/* Description */}
          <p className="text-gray-400 text-lg max-w-3xl mx-auto mb-10">
            Actively seeking Software Development Engineer,
            Backend Developer, Full Stack Developer and
            Internship opportunities.
          </p>

          {/* Roles */}
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            <span className="px-5 py-2 rounded-full bg-primary/10 border border-primary/20">
              Java Developer
            </span>

            <span className="px-5 py-2 rounded-full bg-primary/10 border border-primary/20">
              Backend Engineer
            </span>

            <span className="px-5 py-2 rounded-full bg-primary/10 border border-primary/20">
              Golang Developer
            </span>

            <span className="px-5 py-2 rounded-full bg-primary/10 border border-primary/20">
              Full Stack Developer
            </span>
          </div>

          {/* CTA */}
          <a
            href="#contact"
            className="
              inline-block
              px-8
              py-4
              rounded-full
              bg-primary
              text-white
              font-semibold
              hover:scale-105
              transition-all
            "
          >
            Let's Connect
          </a>
        </div>
      </div>
    </section>
  );
};

export default OpenToWorkSection;