import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  FaReact, FaNodeJs, FaPython, FaJs, FaHtml5, FaCss3Alt, 
  FaGitAlt, FaDocker, FaAws, FaFigma 
} from 'react-icons/fa';
import { 
  SiTypescript, SiMongodb, SiPostgresql, SiTailwindcss, 
  SiNextdotjs, SiExpress, SiRedis, SiGraphql 
} from 'react-icons/si';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React", icon: <FaReact />, level: 90 },
        { name: "TypeScript", icon: <SiTypescript />, level: 85 },
        { name: "JavaScript", icon: <FaJs />, level: 95 },
        { name: "Next.js", icon: <SiNextdotjs />, level: 80 },
        { name: "Tailwind CSS", icon: <SiTailwindcss />, level: 90 },
        { name: "HTML5", icon: <FaHtml5 />, level: 95 },
        { name: "CSS3", icon: <FaCss3Alt />, level: 90 },
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", icon: <FaNodeJs />, level: 88 },
        { name: "Python", icon: <FaPython />, level: 82 },
        { name: "Express", icon: <SiExpress />, level: 85 },
        { name: "GraphQL", icon: <SiGraphql />, level: 75 },
      ]
    },
    {
      title: "Database & Tools",
      skills: [
        { name: "MongoDB", icon: <SiMongodb />, level: 85 },
        { name: "PostgreSQL", icon: <SiPostgresql />, level: 80 },
        { name: "Redis", icon: <SiRedis />, level: 70 },
        { name: "Git", icon: <FaGitAlt />, level: 90 },
        { name: "Docker", icon: <FaDocker />, level: 75 },
        { name: "AWS", icon: <FaAws />, level: 70 },
        { name: "Figma", icon: <FaFigma />, level: 80 },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800/50" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="section-title"
        >
          Skills & Expertise
        </motion.h2>

        <div className="max-w-6xl mx-auto">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
              className="mb-12"
            >
              <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">
                {category.title}
              </h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: categoryIndex * 0.2 + skillIndex * 0.1 }}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl text-primary-600 dark:text-primary-400">
                          {skill.icon}
                        </span>
                        <span className="font-medium text-gray-800 dark:text-white">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        {skill.level}%
                      </span>
                    </div>
                    
                    {/* Progress Bar */}
                    <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : {}}
                        transition={{ duration: 1, delay: categoryIndex * 0.2 + skillIndex * 0.1 + 0.3 }}
                        className="h-full bg-gradient-to-r from-primary-600 to-purple-600 rounded-full"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
