import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Sample projects - Replace with your actual projects
  const projects = [
    {
      title: "ICARDA",
      description: "A full-stack e-commerce application with payment integration, user authentication, and admin dashboard.",
      image: "https://cgspace.cgiar.org/server/api/core/bitstreams/25c93f75-06a3-4b54-a4d3-df231a1c48d5/content",
      tags: ["React", "MySQL", "Spring Boot"],
      // github: "https://github.com/yourusername/project1",
      demo: "https://icarda.ajatus.in/"
    },
    {
      title: "Task Management App",
      description: "Collaborative task management tool with real-time updates, drag-and-drop interface, and team features.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&auto=format&fit=crop",
      tags: ["React", "Firebase", "Tailwind CSS"],
      github: "https://github.com/yourusername/project2",
      demo: "https://project2-demo.com"
    },
    {
      title: "Weather Dashboard",
      description: "Real-time weather application with forecasts, interactive maps, and location-based alerts.",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=800&auto=format&fit=crop",
      tags: ["React", "OpenWeather API", "Chart.js"],
      github: "https://github.com/yourusername/project3",
      demo: "https://project3-demo.com"
    },
    {
      title: "Social Media Dashboard",
      description: "Analytics dashboard for social media metrics with data visualization and reporting features.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop",
      tags: ["React", "D3.js", "Express", "PostgreSQL"],
      github: "https://github.com/yourusername/project4",
      demo: "https://project4-demo.com"
    },
    {
      title: "AI Chat Application",
      description: "Intelligent chatbot powered by AI with context awareness and natural language processing.",
      image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&auto=format&fit=crop",
      tags: ["React", "OpenAI API", "WebSocket"],
      github: "https://github.com/yourusername/project5",
      demo: "https://project5-demo.com"
    },
    {
      title: "Portfolio CMS",
      description: "Content management system for portfolio websites with drag-and-drop page builder.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&auto=format&fit=crop",
      tags: ["Next.js", "Prisma", "PostgreSQL"],
      github: "https://github.com/yourusername/project6",
      demo: "https://project6-demo.com"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="section-title"
        >
          Featured Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="card group"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden rounded-lg mb-4 h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                  <div className="flex gap-4">
                    {/* <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-white rounded-full hover:bg-primary-600 hover:text-white transition-colors duration-300"
                    >
                      <FiGithub size={20} />
                    </a> */}
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-white rounded-full hover:bg-primary-600 hover:text-white transition-colors duration-300"
                    >
                      <FiExternalLink size={20} />
                    </a>
                  </div>
                </div>
              </div>

              {/* Project Info */}
              <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">
                {project.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 text-sm rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
