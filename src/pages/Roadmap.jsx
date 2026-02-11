import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { FiCode, FiDatabase, FiServer, FiLayers, FiGitBranch, FiBox, FiTool } from 'react-icons/fi';

const Roadmap = () => {
  const navigate = useNavigate();

  const roadmapChapters = [
    {
      id: 1,
      title: 'DSA with Java',
      description: 'Master Data Structures & Algorithms with Java',
      icon: <FiCode className="w-8 h-8" />,
      status: 'active',
      topics: ['Arrays', 'Strings', 'Recursion', 'Trees', 'Graphs', 'DP'],
      route: '/java-practice',
      color: 'from-blue-500 to-blue-600'
    },
    {
      id: 2,
      title: 'Core Java',
      description: 'Java Fundamentals & OOP Concepts',
      icon: <FiCode className="w-8 h-8" />,
      status: 'active',
      topics: ['OOP', 'Collections', 'Exception Handling', 'Multithreading', 'Java 8+'],
      route: '/core-java',
      color: 'from-green-500 to-green-600'
    },
    {
      id: 3,
      title: 'SQL & Database',
      description: 'Database Design, SQL Queries & Optimization',
      icon: <FiDatabase className="w-8 h-8" />,
      status: 'coming-soon',
      topics: ['SQL Queries', 'Joins', 'Indexing', 'Normalization', 'Transactions'],
      route: null,
      color: 'from-cyan-500 to-cyan-600'
    },
    {
      id: 4,
      title: 'Advanced Java',
      description: 'Servlets, JSP, JSTL & Web Development',
      icon: <FiServer className="w-8 h-8" />,
      status: 'coming-soon',
      topics: ['Servlets', 'JSP', 'JSTL', 'Filters', 'Session Management'],
      route: null,
      color: 'from-purple-500 to-purple-600'
    },
    {
      id: 5,
      title: 'JDBC & Hibernate',
      description: 'Database Connectivity & ORM',
      icon: <FiDatabase className="w-8 h-8" />,
      status: 'coming-soon',
      topics: ['JDBC', 'Hibernate', 'JPA', 'HQL', 'Caching'],
      route: null,
      color: 'from-yellow-500 to-yellow-600'
    },
    {
      id: 6,
      title: 'Spring Framework',
      description: 'Spring Core, MVC, AOP & Security',
      icon: <FiLayers className="w-8 h-8" />,
      status: 'coming-soon',
      topics: ['Spring Core', 'Spring MVC', 'Spring AOP', 'Spring Security'],
      route: null,
      color: 'from-green-500 to-emerald-600'
    },
    {
      id: 7,
      title: 'Spring Boot',
      description: 'Build Production-Ready Applications',
      icon: <FiBox className="w-8 h-8" />,
      status: 'coming-soon',
      topics: ['Auto Configuration', 'REST APIs', 'Spring Data JPA', 'Actuator'],
      route: null,
      color: 'from-teal-500 to-teal-600'
    },
    {
      id: 8,
      title: 'Microservices',
      description: 'Microservices Architecture & Design',
      icon: <FiServer className="w-8 h-8" />,
      status: 'coming-soon',
      topics: ['Service Discovery', 'API Gateway', 'Circuit Breaker', 'Config Server'],
      route: null,
      color: 'from-indigo-500 to-indigo-600'
    },
    {
      id: 9,
      title: 'Testing & Quality',
      description: 'Unit Testing, Integration Testing & TDD',
      icon: <FiTool className="w-8 h-8" />,
      status: 'coming-soon',
      topics: ['JUnit', 'Mockito', 'TDD', 'Integration Tests', 'Code Coverage'],
      route: null,
      color: 'from-violet-500 to-violet-600'
    },
    {
      id: 10,
      title: 'DevOps & Tools',
      description: 'CI/CD, Docker, Kubernetes & Cloud',
      icon: <FiGitBranch className="w-8 h-8" />,
      status: 'coming-soon',
      topics: ['Git', 'Docker', 'Kubernetes', 'Jenkins', 'AWS/Azure'],
      route: null,
      color: 'from-orange-500 to-orange-600'
    },
    {
      id: 11,
      title: 'Message Queues & Kafka',
      description: 'Asynchronous Communication & Event Streaming',
      icon: <FiServer className="w-8 h-8" />,
      status: 'coming-soon',
      topics: ['RabbitMQ', 'Apache Kafka', 'Event-Driven', 'Message Brokers'],
      route: null,
      color: 'from-rose-500 to-rose-600'
    },
    {
      id: 12,
      title: 'Low Level Design (LLD)',
      description: 'SOLID Principles & Design Patterns',
      icon: <FiTool className="w-8 h-8" />,
      status: 'coming-soon',
      topics: ['SOLID', 'Design Patterns', 'UML', 'Code Quality'],
      route: null,
      color: 'from-pink-500 to-pink-600'
    },
    {
      id: 13,
      title: 'High Level Design (HLD)',
      description: 'System Design & Architecture',
      icon: <FiLayers className="w-8 h-8" />,
      status: 'coming-soon',
      topics: ['Scalability', 'Load Balancing', 'Caching', 'Database Design'],
      route: null,
      color: 'from-red-500 to-red-600'
    }
  ];

  const handleChapterClick = (chapter) => {
    if (chapter.status === 'active' && chapter.route) {
      navigate(chapter.route);
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 pt-20 px-4 pb-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Java Developer Roadmap
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Complete roadmap to become a high-paying Java Developer. Master each chapter step by step from basics to advanced concepts.
          </p>
        </motion.div>

        {/* Roadmap Chapters */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {roadmapChapters.map((chapter, index) => (
            <motion.div
              key={chapter.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              onClick={() => handleChapterClick(chapter)}
              className={`relative bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden border-2 ${
                chapter.status === 'active' 
                  ? 'border-primary-500 cursor-pointer hover:shadow-2xl' 
                  : 'border-gray-200 dark:border-gray-700'
              } transition-all duration-300`}
            >
              {/* Chapter Number Badge */}
              <div className="absolute top-4 right-4 w-10 h-10 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center">
                <span className="text-sm font-bold text-gray-700 dark:text-gray-300">{chapter.id}</span>
              </div>

              {/* Status Badge */}
              {chapter.status === 'coming-soon' && (
                <div className="absolute top-4 left-4 px-3 py-1 bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 text-xs font-semibold rounded-full">
                  Coming Soon
                </div>
              )}
              {chapter.status === 'active' && (
                <div className="absolute top-4 left-4 px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-xs font-semibold rounded-full">
                  Active
                </div>
              )}

              {/* Icon Section */}
              <div className={`bg-gradient-to-r ${chapter.color} p-6 text-white`}>
                <div className="flex items-center justify-center mb-4">
                  {chapter.icon}
                </div>
                <h3 className="text-xl font-bold text-center">{chapter.title}</h3>
              </div>

              {/* Content Section */}
              <div className="p-6">
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                  {chapter.description}
                </p>

                {/* Topics */}
                <div className="flex flex-wrap gap-2">
                  {chapter.topics.map((topic, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-md"
                    >
                      {topic}
                    </span>
                  ))}
                </div>

                {/* Action Button */}
                {chapter.status === 'active' && (
                  <button className="mt-4 w-full py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-medium transition-colors">
                    Start Learning →
                  </button>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer Note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-12 text-center"
        >
          <div className="inline-block px-6 py-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
            <p className="text-sm text-blue-800 dark:text-blue-200">
              💡 <strong>Tip:</strong> Complete each chapter in order for the best learning experience. More chapters coming soon!
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Roadmap;
