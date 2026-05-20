import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Section */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Aspiring Software Engineer & Problem Solver
            </h3>

            <p className="text-muted-foreground">
              I’m a 4th-year Computer Science student passionate about software
              engineering, AI-powered backend systems, scalable architectures,
              and building efficient full stack applications.
            </p>

            <p className="text-muted-foreground">
              Strong foundation in Data Structures & Algorithms, Competitive
              Programming, backend engineering, and full stack development with
              practical experience in Java, Golang, MERN stack, REST APIs,
              microservices, and modern databases.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>

              <a
                href="#"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download Resume
              </a>
            </div>
          </div>

          {/* Right Cards */}
          <div className="grid grid-cols-1 gap-6">
            {/* Card 1 */}
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    DSA & Competitive Programming
                  </h4>
                  <p className="text-muted-foreground">
                    Solved 1800+ LeetCode problems, achieved 3★ on CodeChef,
                    Specialist on Codeforces, and built strong expertise in
                    algorithms, optimization, and data structures.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    AI + Backend + Full Stack
                  </h4>
                  <p className="text-muted-foreground">
                    Building scalable backend and full stack applications using
                    Java, Golang, MERN stack, REST APIs, microservices,
                    databases, and exploring AI-powered backend solutions.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    MERN, Java, Golang & Scalable Systems
                  </h4>
                  <p className="text-muted-foreground">
                    Hands-on experience building scalable applications with
                    MongoDB, Express.js, React.js, Node.js, PostgreSQL, Docker,
                    Golang, CI/CD, and modern web technologies.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Right Cards End */}
        </div>
      </div>
    </section>
  );
};