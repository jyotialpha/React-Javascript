import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useParams, useNavigate } from 'react-router-dom';
import { javaTopics, getQuestionsByTopic } from '../data/javaQuestions';
import { FiExternalLink } from 'react-icons/fi';

const JavaPractice = () => {
  const { topicId } = useParams();
  const navigate = useNavigate();
  const [selectedTopic, setSelectedTopic] = useState(topicId || null);
  
  const questions = selectedTopic ? getQuestionsByTopic(selectedTopic) : [];
  
  // Update selectedTopic when URL changes
  useEffect(() => {
    if (topicId && topicId !== selectedTopic) {
      setSelectedTopic(topicId);
    }
  }, [topicId, selectedTopic]);
  
  const handleTopicClick = (topicId) => {
    setSelectedTopic(topicId);
    navigate(`/java-practice/${topicId}`);
  };
  
  const handleBackToTopics = () => {
    setSelectedTopic(null);
    navigate('/java-practice');
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-white dark:bg-gray-900 pt-20 px-4 pb-12"
    >
      <div className="max-w-6xl mx-auto">
        {/* Back Button */}
        <motion.button
          onClick={() => navigate('/roadmap')}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2 mb-6 px-4 py-2 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Roadmap
        </motion.button>

        <div className="mb-8 text-center">
          {selectedTopic ? (
            <>
              <button
                onClick={handleBackToTopics}
                className="flex items-center text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 mb-4 mx-auto"
              >
                <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Back to Topics
              </button>
              <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
                {javaTopics.find(t => t.id === selectedTopic)?.title || 'Practice Questions'}
              </h1>
              <p className="text-gray-600 dark:text-gray-300 mt-2">
                {javaTopics.find(t => t.id === selectedTopic)?.description}
              </p>
            </>
          ) : (
            <>
              <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
                Master Java with DSA
              </h1>
              <p className="text-gray-600 dark:text-gray-300 mt-2">
                Complete roadmap from basics to advanced - Learn Data Structures & Algorithms with Java
              </p>
            </>
          )}
        </div>
        
        <AnimatePresence mode="wait">
          {!selectedTopic ? (
            <motion.div
              key="topics"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {/* Beginner Level */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                  <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-3 py-1 rounded-full text-sm mr-3">Beginner</span>
                  Start Your Journey
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {javaTopics.filter(t => t.level === 'Beginner').map((topic) => (
                    <motion.div 
                      key={topic.id}
                      whileHover={{ y: -5 }}
                      className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300 cursor-pointer border-l-4 border-green-500"
                      onClick={() => handleTopicClick(topic.id)}
                    >
                      <div className="text-4xl mb-4">{topic.icon}</div>
                      <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{topic.title}</h3>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">{topic.description}</p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Intermediate Level */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                  <span className="bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 px-3 py-1 rounded-full text-sm mr-3">Intermediate</span>
                  Build Strong Foundation
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {javaTopics.filter(t => t.level === 'Intermediate').map((topic) => (
                    <motion.div 
                      key={topic.id}
                      whileHover={{ y: -5 }}
                      className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300 cursor-pointer border-l-4 border-yellow-500"
                      onClick={() => handleTopicClick(topic.id)}
                    >
                      <div className="text-4xl mb-4">{topic.icon}</div>
                      <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{topic.title}</h3>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">{topic.description}</p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Advanced Level */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                  <span className="bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 px-3 py-1 rounded-full text-sm mr-3">Advanced</span>
                  Master Complex Concepts
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {javaTopics.filter(t => t.level === 'Advanced').map((topic) => (
                    <motion.div 
                      key={topic.id}
                      whileHover={{ y: -5 }}
                      className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300 cursor-pointer border-l-4 border-orange-500"
                      onClick={() => handleTopicClick(topic.id)}
                    >
                      <div className="text-4xl mb-4">{topic.icon}</div>
                      <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{topic.title}</h3>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">{topic.description}</p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Expert Level */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                  <span className="bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 px-3 py-1 rounded-full text-sm mr-3">Expert</span>
                  Become a Pro
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {javaTopics.filter(t => t.level === 'Expert').map((topic) => (
                    <motion.div 
                      key={topic.id}
                      whileHover={{ y: -5 }}
                      className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300 cursor-pointer border-l-4 border-red-500"
                      onClick={() => handleTopicClick(topic.id)}
                    >
                      <div className="text-4xl mb-4">{topic.icon}</div>
                      <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{topic.title}</h3>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">{topic.description}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="questions"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-4"
            >
              {questions.length > 0 ? (
                <div className="space-y-3">
                  {questions.map((question, index) => (
                    <motion.div
                      key={question.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className="bg-white dark:bg-gray-800 rounded-lg shadow p-4 hover:shadow-md transition-shadow"
                    >
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                            {index + 1}. {question.title}
                          </h3>
                          <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                            {question.description}
                          </p>
                        </div>
                        <div className="flex items-center gap-2 ml-4">
                          <span className={`px-2 py-1 text-xs rounded-full whitespace-nowrap ${
                            question.difficulty === 'Easy' 
                              ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                              : question.difficulty === 'Medium'
                              ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
                              : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
                          }`}>
                            {question.difficulty}
                          </span>
                          <a
                            href={question.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1 px-3 py-1 bg-primary-600 hover:bg-primary-700 text-white text-sm rounded-md transition-colors"
                            onClick={(e) => e.stopPropagation()}
                          >
                            Solve <FiExternalLink className="w-4 h-4" />
                          </a>
                        </div>
                      </div>
                      <div className="mt-2 text-xs text-gray-500 dark:text-gray-400">
                        Platform: {question.platform}
                      </div>
                    </motion.div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <div className="text-6xl mb-4">📝</div>
                  <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-2">No questions available</h3>
                  <p className="text-gray-600 dark:text-gray-400">Check back later for new questions in this topic.</p>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default JavaPractice;
