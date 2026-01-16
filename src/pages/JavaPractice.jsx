import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useParams, useNavigate, Routes, Route, useLocation, Outlet } from 'react-router-dom';
import { javaTopics, getQuestionsByTopic } from '../data/javaQuestions';
import QuestionDetail from '../components/java-practice/QuestionDetail';

const JavaPractice = () => {
  const { topicId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
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
  // If there's a question ID in the URL, render the QuestionDetail component
  const { questionId } = useParams();
  
  if (questionId) {
    return <QuestionDetail />;
  }

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-white dark:bg-gray-900 pt-20 px-4 pb-12"
    >
      <div className="max-w-6xl mx-auto">
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
                Java Coding Practice
              </h1>
              <p className="text-gray-600 dark:text-gray-300 mt-2">
                Practice Java programming with hands-on coding challenges
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
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {javaTopics.map((topic) => (
                <motion.div 
                  key={topic.id}
                  whileHover={{ y: -5 }}
                  className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300 cursor-pointer"
                  onClick={() => handleTopicClick(topic.id)}
                >
                  <div className="text-4xl mb-4">{topic.icon}</div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{topic.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{topic.description}</p>
                  <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                    <div 
                      className="bg-blue-600 h-2.5 rounded-full transition-all duration-500" 
                      style={{ 
                        width: `${(topic.completed / topic.total) * 100}%`,
                        minWidth: '8px'
                      }}
                    ></div>
                  </div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                    {topic.completed}/{topic.total} completed
                  </p>
                </motion.div>
              ))}
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
                      className="bg-white dark:bg-gray-800 rounded-lg shadow p-4 hover:shadow-md transition-shadow cursor-pointer"
                      onClick={() => navigate(`/java-practice/${selectedTopic}/${question.id}`)}
                    >
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                            {index + 1}. {question.title}
                          </h3>
                          <p className="text-sm text-gray-600 dark:text-gray-300 mt-1 line-clamp-2">
                            {question.description}
                          </p>
                        </div>
                        <span className={`px-2 py-1 text-xs rounded-full ${
                          question.difficulty === 'Easy' 
                            ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                            : question.difficulty === 'Medium'
                            ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
                            : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
                        }`}>
                          {question.difficulty}
                        </span>
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
