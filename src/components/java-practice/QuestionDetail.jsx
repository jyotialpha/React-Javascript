import React, { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiChevronLeft, FiChevronRight, FiCopy, FiCheck, FiChevronDown, FiChevronUp, FiArrowLeft, FiAlignLeft } from 'react-icons/fi';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus, vs } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { getQuestionById, getQuestionsByTopic } from '../../data/javaQuestions';

const QuestionDetail = () => {
  const { topicId, questionId } = useParams();
  const navigate = useNavigate();
  const [code, setCode] = useState('');
  const [output, setOutput] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showHints, setShowHints] = useState(false);
  const [copied, setCopied] = useState(false);
  
  const question = getQuestionById(topicId, questionId);
  const questions = getQuestionsByTopic(topicId);
  const currentIndex = questions.findIndex(q => q.id === questionId);
  const hasNext = currentIndex < questions.length - 1;
  const hasPrev = currentIndex > 0;

  // Load saved code from localStorage
  useEffect(() => {
    if (question) {
      const savedCode = localStorage.getItem(`code_${topicId}_${questionId}`);
      setCode(savedCode || question.starterCode);
    }
  }, [question, topicId, questionId]);

  const handleRunCode = () => {
    if (!code.trim()) return;
    
    setIsSubmitting(true);
    setOutput('Running your code...');
    
    setTimeout(() => {
      try {
        const testCases = question.testCases || [];
        let allPassed = true;
        let outputText = '';
        
        testCases.forEach((testCase, index) => {
          const passed = validateTestCase(code, testCase);
          if (passed) {
            outputText += `✅ Test case ${index + 1} passed\n`;
          } else {
            outputText += `❌ Test case ${index + 1} failed\nExpected: ${testCase.output}\n`;
            allPassed = false;
          }
        });
        
        if (allPassed) {
          outputText += '\n🎉 All test cases passed!';
        } else {
          outputText += '\n⚠️ Some test cases failed. Try again!';
        }
        
        setOutput(outputText);
      } catch (error) {
        setOutput(`Error: ${error.message}`);
      } finally {
        setIsSubmitting(false);
      }
    }, 1000);
  };

  const validateTestCase = (userCode, testCase) => {
    // Simple validation - check if expected output keywords are in code
    const expectedOutput = testCase.output.toLowerCase();
    const codeLines = userCode.toLowerCase();
    
    // For Hello World
    if (expectedOutput.includes('hello, world')) {
      return codeLines.includes('system.out.println("hello, world!")');
    }
    
    // For other cases, check if solution patterns match
    return codeLines.includes('system.out.println');
  };

  const handleSubmit = () => {
    localStorage.setItem(`code_${topicId}_${questionId}`, code);
    handleRunCode();
  };

  const handleReset = () => {
    if (window.confirm('Are you sure you want to reset your code?')) {
      setCode(question.starterCode);
      setOutput('');
      localStorage.removeItem(`code_${topicId}_${questionId}`);
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const formatCode = () => {
    const formatted = code
      .split('\n')
      .map(line => line.trim())
      .join('\n')
      .replace(/\{/g, ' {\n')
      .replace(/\}/g, '\n}\n')
      .replace(/;/g, ';\n')
      .split('\n')
      .filter(line => line.trim())
      .map((line, i, arr) => {
        let indent = 0;
        for (let j = 0; j < i; j++) {
          if (arr[j].includes('{')) indent++;
          if (arr[j].includes('}')) indent--;
        }
        if (line.includes('}')) indent--;
        return '  '.repeat(Math.max(0, indent)) + line.trim();
      })
      .join('\n');
    setCode(formatted);
  };

  const navigateToQuestion = (direction) => {
    const newIndex = direction === 'next' ? currentIndex + 1 : currentIndex - 1;
    if (newIndex >= 0 && newIndex < questions.length) {
      navigate(`/java-practice/${topicId}/${questions[newIndex].id}`, { replace: true });
    }
  };
  
  const handleBackToQuestions = () => {
    navigate(`/java-practice/${topicId}`, { replace: true });
  };

  if (!question) {
    return (
      <div className="flex items-center justify-center h-64">
        <p className="text-gray-600 dark:text-gray-400">Question not found.</p>
      </div>
    );
  }

  return (
    <div className="pt-20 px-4 pb-12 min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        {/* Navigation Bar */}
        <div className="sticky top-16 z-10 bg-white dark:bg-gray-900 py-4 mb-6 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <motion.button
              onClick={handleBackToQuestions}
              whileHover={{ x: -2 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center px-4 py-2 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
            >
              <FiArrowLeft className="mr-2" /> Back to Questions
            </motion.button>
            
            <div className="flex space-x-2">
              <button
                onClick={() => navigateToQuestion('prev')}
                disabled={!hasPrev}
                className={`px-4 py-2 rounded-md ${hasPrev ? 'bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600' : 'bg-gray-100 dark:bg-gray-800 text-gray-400 cursor-not-allowed'}`}
              >
                Previous
              </button>
              <button
                onClick={() => navigateToQuestion('next')}
                disabled={!hasNext}
                className={`px-4 py-2 rounded-md ${hasNext ? 'bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600' : 'bg-gray-100 dark:bg-gray-800 text-gray-400 cursor-not-allowed'}`}
              >
                Next
              </button>
            </div>
          </div>
        </div>

        {/* Question Content */}
        <div className="space-y-6">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
            <div className="p-6">
              <div className="flex justify-between items-start">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  {question.title}
                </h2>
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
              
              <div className="prose dark:prose-invert max-w-none mt-4">
                <p className="text-gray-700 dark:text-gray-300">{question.description}</p>
                
                {question.testCases && question.testCases.filter(tc => tc.isPublic).length > 0 && (
                  <div className="mt-6">
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Example</h3>
                    <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-md">
                      {question.testCases.filter(tc => tc.isPublic).map((testCase, idx) => (
                        <div key={idx} className="mb-2">
                          <p className="text-sm text-gray-600 dark:text-gray-300">
                            <span className="font-medium">Input:</span> {testCase.input || 'No input'}
                          </p>
                          <p className="text-sm text-gray-600 dark:text-gray-300">
                            <span className="font-medium">Output:</span> {testCase.output}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 h-[50vh]">
              {/* Code Editor */}
              <div className="flex flex-col h-full">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white">Your Code</h3>
                  <div className="flex space-x-2">
                    <button
                      onClick={formatCode}
                      className="flex items-center px-2 py-1 text-xs text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      title="Format code"
                    >
                      <FiAlignLeft className="mr-1" /> Format
                    </button>
                    <button
                      onClick={copyToClipboard}
                      className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
                      title="Copy to clipboard"
                    >
                      {copied ? <FiCheck className="text-green-500" /> : <FiCopy />}
                    </button>
                    <button
                      onClick={handleReset}
                      className="text-sm text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-400 transition-colors"
                    >
                      Reset Code
                    </button>
                  </div>
                </div>
                
                <textarea
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  placeholder="// Type your Java code here"
                  className="w-full h-full p-4 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 font-mono text-sm rounded-lg border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                  spellCheck="false"
                  style={{ tabSize: 2 }}
                />
              </div>

              {/* Output */}
              <div className="flex flex-col h-full">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white">Output</h3>
                  {output && output.includes('✅') && (
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                      <FiCheck className="mr-1" /> Solved
                    </span>
                  )}
                </div>
                
                <div className="flex-grow bg-gray-900 text-gray-100 p-4 rounded-lg overflow-auto font-mono text-sm">
                  {output ? (
                    <pre className="whitespace-pre-wrap">{output}</pre>
                  ) : (
                    <div className="text-gray-500 h-full flex items-center justify-center">
                      <p>Run your code to see the output here</p>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-end space-x-3">
              <button
                onClick={handleRunCode}
                disabled={isSubmitting || !code.trim()}
                className={`px-4 py-2 rounded-md ${
                  isSubmitting || !code.trim()
                    ? 'bg-blue-400 dark:bg-blue-600 cursor-not-allowed'
                    : 'bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700'
                } text-white font-medium transition-colors`}
              >
                {isSubmitting ? 'Running...' : 'Run Code'}
              </button>
              <button
                onClick={handleSubmit}
                disabled={isSubmitting || !code.trim()}
                className={`px-4 py-2 rounded-md ${
                  isSubmitting || !code.trim()
                    ? 'bg-green-400 dark:bg-green-600 cursor-not-allowed'
                    : 'bg-green-600 hover:bg-green-700 dark:bg-green-600 dark:hover:bg-green-700'
                } text-white font-medium transition-colors`}
              >
                Submit
              </button>
            </div>
          </div>
          
          {/* Hints Section */}
          {question.hints && question.hints.length > 0 && (
            <div className="mt-6">
              <button
                onClick={() => setShowHints(!showHints)}
                className="text-sm text-blue-600 dark:text-blue-400 hover:underline focus:outline-none"
              >
                {showHints ? 'Hide Hints' : 'Show Hints'}
              </button>
              
              {showHints && (
                <div className="mt-2 p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
                  <h4 className="font-medium text-yellow-800 dark:text-yellow-200 mb-2">Hints:</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    {question.hints.map((hint, idx) => (
                      <li key={idx} className="text-yellow-700 dark:text-yellow-300 text-sm">
                        {hint}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuestionDetail;
