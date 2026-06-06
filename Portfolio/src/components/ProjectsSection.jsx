import { ArrowRight, ExternalLink } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Grocery Web App",
    description:
      "A full stack grocery shopping web application with product listing, cart management, authentication, and responsive UI.",
    image: "/projects/project1.png",
    tags: ["React", "Node.js", "MongoDB", "Express"],
    demoUrl: "#",
    githubUrl: "https://github.com/VISHAL55UIET/Grocery-delivery-",
  },
  {
    id: 2,
    title: "Car Rental Application",
    description:
      "A scalable car rental platform with booking management, vehicle listings, authentication, and clean user experience.",
    image: "/projects/project2.png",
    tags: ["MERN", "REST APIs", "MongoDB"],
    demoUrl: "#",
    githubUrl: "https://github.com/VISHAL55UIET/CarRental-fullstack",
  },
  {
    id: 3,
    title: "Portfolio Website",
    description:
      "A responsive personal portfolio showcasing skills, projects, backend focus, and software engineering experience.",
    image: "/projects/project3.png",
    tags: ["React", "TailwindCSS", "Vite"],
    demoUrl: "#",
    githubUrl: "https://github.com/VISHAL55UIET/Vishal-New-PortFolio",
  },
  {
    id: 4,
    title: "MERN Backend API Project",
    description:
      "Built scalable backend services with authentication, REST APIs, CRUD operations, and database integration.",
    image: "/projects/project5.png",
    tags: ["Node.js", "Express.js", "MongoDB", "JWT"],
    demoUrl: "#",
    githubUrl: "https://github.com/VISHAL55UIET/tax-harvest",
  },
  {
    id: 5,
    title: "Java DSA Problem Solving",
    description:
      "Solved 1800+ algorithmic problems with optimized Java solutions focused on data structures, complexity, and logic building.",
    image: "/projects/project4.png",
    tags: ["Java", "DSA", "Algorithms"],
    demoUrl: "#",
    githubUrl: "https://codolio.com/profile/Vishall",
  },
  {
    id: 6,
    title: "AI + Backend Exploration",
    description:
      "Exploring AI-integrated backend systems with scalable architecture, APIs, and modern backend engineering concepts.",
    image: "/projects/project6.png",
    tags: ["Java", "Golang", "AI", "Backend"],
    demoUrl: "#",
    githubUrl: "https://github.com/VISHAL55UIET/ApplicationTracker",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          A collection of full stack, backend, problem-solving, and scalable
          system-focused projects reflecting my software engineering journey.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              {/* Image */}
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold mb-2">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>

                {/* Links */}
                <div className="flex justify-between items-center">
                  <div className="flex space-x-4">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>

                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300 text-sm font-medium"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Button */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/VISHAL55UIET"
            target="_blank"
            rel="noopener noreferrer"
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
          >
            Check My GitHub <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};