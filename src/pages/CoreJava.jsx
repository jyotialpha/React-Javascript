import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate, useParams } from 'react-router-dom';
import { coreJavaTopics, getCoreJavaTopicById } from '../data/coreJavaData';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

const CoreJava = () => {
  const navigate = useNavigate();
  const { topicId } = useParams();
  const [selectedTopic, setSelectedTopic] = useState(topicId || null);

  const topicContent = selectedTopic ? getCoreJavaTopicById(selectedTopic) : null;

  const handleTopicClick = (topic) => {
    if (topic.status === 'active') {
      setSelectedTopic(topic.id);
      navigate(`/core-java/${topic.id}`);
    }
  };

  const handleBackToTopics = () => {
    setSelectedTopic(null);
    navigate('/core-java');
  };

  // Topics List View
  if (!selectedTopic) {
    return (
      <div className="min-h-screen bg-white dark:bg-gray-900 pt-20 px-4 pb-12">
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

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Core Java
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Master Java fundamentals with comprehensive theory and real-world examples
            </p>
          </motion.div>

          {/* Topics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreJavaTopics.map((topic, index) => (
              <motion.div
                key={topic.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => handleTopicClick(topic)}
                className={`bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border-2 ${
                  topic.status === 'active'
                    ? 'border-green-500 cursor-pointer hover:shadow-2xl'
                    : 'border-gray-200 dark:border-gray-700 opacity-60'
                } transition-all duration-300`}
              >
                <div className="text-4xl mb-4">{topic.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {topic.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                  {topic.description}
                </p>
                {topic.status === 'active' ? (
                  <span className="inline-block px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-xs font-semibold rounded-full">
                    Start Learning
                  </span>
                ) : (
                  <span className="inline-block px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 text-xs font-semibold rounded-full">
                    Coming Soon
                  </span>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Content View
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 pt-20 px-4 pb-12">
      <div className="max-w-5xl mx-auto">
        {/* Back Button */}
        <motion.button
          onClick={handleBackToTopics}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2 mb-6 px-4 py-2 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Topics
        </motion.button>

        {/* Content Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            {topicContent?.title}
          </h1>
        </motion.div>

        {/* Sections */}
        <div className="space-y-8">
          {topicContent?.sections.map((section, index) => (
            <motion.div
              key={section.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-xl shadow-lg p-8 border border-gray-200 dark:border-gray-700 hover:shadow-2xl transition-shadow duration-300"
            >
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 pb-3 border-b-2 border-blue-500">
                {section.title}
              </h2>
              
              <div className="prose dark:prose-invert max-w-none mb-6">
                <div className="text-gray-700 dark:text-gray-300 whitespace-pre-line leading-relaxed text-base">
                  {section.content.split('\n').map((line, i) => {
                    // Bold text handling
                    if (line.trim().startsWith('**') && line.trim().endsWith('**')) {
                      const text = line.trim().slice(2, -2);
                      return (
                        <h3 key={i} className="text-xl font-bold text-gray-900 dark:text-white mt-6 mb-3">
                          {text}
                        </h3>
                      );
                    }
                    // Bullet points
                    if (line.trim().startsWith('- ')) {
                      return (
                        <li key={i} className="ml-6 mb-2 text-gray-700 dark:text-gray-300">
                          {line.trim().slice(2)}
                        </li>
                      );
                    }
                    // Empty lines
                    if (line.trim() === '') {
                      return <div key={i} className="h-3" />;
                    }
                    // Regular text
                    return (
                      <p key={i} className="mb-3 text-gray-700 dark:text-gray-300">
                        {line}
                      </p>
                    );
                  })}
                </div>
              </div>

              {section.code && (
                <div className="mb-6">
                  <div className="bg-gray-900 rounded-xl overflow-hidden shadow-xl border border-gray-700">
                    <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-2 flex items-center justify-between">
                      <span className="text-white text-sm font-semibold">💻 Code Example</span>
                      <span className="text-white text-xs opacity-80">Java</span>
                    </div>
                    <SyntaxHighlighter
                      language="java"
                      style={vscDarkPlus}
                      customStyle={{
                        margin: 0,
                        padding: '1.5rem',
                        fontSize: '0.9rem',
                        lineHeight: '1.6',
                        background: '#1e1e1e'
                      }}
                      showLineNumbers={true}
                    >
                      {section.code.trim()}
                    </SyntaxHighlighter>
                  </div>
                </div>
              )}

              {section.explanation && (
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border-l-4 border-blue-500 p-5 rounded-r-lg shadow-sm">
                  <div className="flex items-start">
                    <span className="text-2xl mr-3">💡</span>
                    <div className="flex-1">
                      <h4 className="text-sm font-bold text-blue-900 dark:text-blue-200 mb-2">Key Points:</h4>
                      <div className="text-blue-900 dark:text-blue-200 text-sm whitespace-pre-line leading-relaxed">
                        {section.explanation}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Practice Questions */}
        {topicContent?.practiceQuestions && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-8 bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 rounded-xl p-8 border-2 border-yellow-300 dark:border-yellow-700 shadow-lg"
          >
            <div className="flex items-center mb-6">
              <span className="text-4xl mr-3">💪</span>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                Practice Questions
              </h2>
            </div>
            <div className="space-y-4">
              {topicContent.practiceQuestions.map((q) => (
                <div key={q.id} className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-200 dark:border-gray-700">
                  <div className="flex items-start justify-between gap-4">
                    <p className="text-gray-700 dark:text-gray-300 flex-1 leading-relaxed">
                      <span className="inline-block bg-blue-500 text-white font-bold px-2 py-1 rounded mr-2 text-sm">{q.id}</span>
                      {q.question}
                    </p>
                    <span className={`px-3 py-1 text-xs font-semibold rounded-full whitespace-nowrap ${
                      q.difficulty === 'Easy' 
                        ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                        : q.difficulty === 'Medium'
                        ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
                        : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
                    }`}>
                      {q.difficulty}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Key Takeaways */}
        {topicContent?.keyTakeaways && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-8 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl p-8 border-2 border-green-300 dark:border-green-700 shadow-lg"
          >
            <div className="flex items-center mb-6">
              <span className="text-4xl mr-3">🎯</span>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                Key Takeaways
              </h2>
            </div>
            <ul className="space-y-3">
              {topicContent.keyTakeaways.map((takeaway, index) => (
                <li key={index} className="flex items-start bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
                  <span className="text-green-600 dark:text-green-400 mr-3 text-xl font-bold flex-shrink-0">✓</span>
                  <span className="text-gray-700 dark:text-gray-300 leading-relaxed">{takeaway}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default CoreJava;
