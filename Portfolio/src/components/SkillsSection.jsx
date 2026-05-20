import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  // Programming
  { name: "Java", level: 95, category: "programming" },
  { name: "Golang", level: 85, category: "programming" },
  { name: "Python", level: 75, category: "programming" },
  { name: "JavaScript", level: 88, category: "programming" },
  { name: "SQL", level: 90, category: "programming" },
  { name: "DSA / Problem Solving", level: 95, category: "programming" },

  // Backend / Full Stack
  { name: "Node.js", level: 85, category: "backend" },
  { name: "Golang", level: 85, category: "backend" },
  { name: "Spring Boot", level: 75, category: "backend" },
  { name: "Express.js", level: 85, category: "backend" },
  { name: "REST APIs", level: 90, category: "backend" },
  { name: "Microservices", level: 80, category: "backend" },
  { name: "MERN Stack", level: 88, category: "backend" },
  { name: "MongoDB", level: 85, category: "backend" },
  { name: "PostgreSQL", level: 85, category: "backend" },

  // Tools & DevOps
  { name: "Git / GitHub", level: 90, category: "tools" },
  { name: "System Design", level: 72, category: "tools" },
  { name: "LLD", level: 72, category: "tools" },
  { name: "Docker", level: 80, category: "tools" },
  { name: "AWS", level: 75, category: "tools" },
  { name: "Linux", level: 85, category: "tools" },
  { name: "CI/CD", level: 78, category: "tools" },
  { name: "Postman", level: 88, category: "tools" },
];

const categories = ["all", "programming", "backend", "tools"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) =>
      activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section
      id="skills"
      className="py-24 px-4 relative bg-secondary/30"
    >
      <div className="container mx-auto max-w-5xl">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Skills</span>
        </h2>

        {/* Category Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize font-medium",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bg-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skill Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, index) => (
            <div
              key={`${skill.name}-${skill.category}-${index}`}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              {/* Skill Name */}
              <div className="text-left mb-4">
                <h3 className="font-semibold text-lg">
                  {skill.name}
                </h3>
              </div>

              {/* Progress Bar */}
              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                  style={{ width: `${skill.level}%` }}
                />
              </div>

              {/* Percentage */}
              <div className="text-right mt-2">
                <span className="text-sm text-muted-foreground">
                  {skill.level}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};