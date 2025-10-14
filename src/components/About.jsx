import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiAward, FiBriefcase, FiCode } from 'react-icons/fi';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const experience = [
    {
      icon: <FiCode className="text-3xl" />,
      title: "Clean Code",
      description: "Writing maintainable, scalable, and efficient code following best practices"
    },
    {
      icon: <FiBriefcase className="text-3xl" />,
      title: "5+ Years Experience",
      description: "Proven track record of delivering successful projects across various industries"
    },
    {
      icon: <FiAward className="text-3xl" />,
      title: "Problem Solver",
      description: "Analytical mindset with a passion for solving complex technical challenges"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800/50" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="section-title"
        >
          About Me
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary-600 shadow-2xl">
                {/* Replace this with your actual photo */}
                <div className="w-full h-full bg-gradient-to-br from-primary-400 to-purple-500 flex items-center justify-center">
                  <span className="text-white text-6xl font-bold">YN</span>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary-600 rounded-full flex items-center justify-center shadow-xl">
                <FiCode className="text-white text-4xl" />
              </div>
            </div>
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-3xl font-bold mb-4 text-gray-800 dark:text-white">
              Passionate Developer & Creative Thinker
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
              I'm a software developer with a strong foundation in modern web technologies. 
              My journey in tech began with a curiosity about how things work, which evolved 
              into a passion for creating innovative solutions that make a difference.
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
              With expertise in full-stack development, I specialize in building responsive, 
              user-friendly applications. I'm constantly learning and staying up-to-date with 
              the latest technologies to deliver cutting-edge solutions.
            </p>

            <div className="grid sm:grid-cols-3 gap-4 mt-8">
              {experience.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  className="text-center p-4 bg-white dark:bg-gray-700 rounded-lg shadow-md"
                >
                  <div className="text-primary-600 dark:text-primary-400 mb-2 flex justify-center">
                    {item.icon}
                  </div>
                  <h4 className="font-semibold text-gray-800 dark:text-white mb-1">
                    {item.title}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
