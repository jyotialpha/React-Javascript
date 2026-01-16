import { BrowserRouter as Router, Routes, Route, useLocation, useParams } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';
import JavaPractice from './pages/JavaPractice';
import QuestionDetail from './components/java-practice/QuestionDetail';

// Nested routes for Java practice section
const JavaPracticeRoutes = () => {
  return (
    <Routes>
      <Route index element={<JavaPractice />} />
      <Route path=":topicId" element={<JavaPractice />} />
      <Route path=":topicId/:questionId" element={<JavaPractice />} />
    </Routes>
  );
};

function App() {
  return (
    <Router>
      <ThemeProvider>
        <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
          <main className="relative">
            <Navbar />
            <div className="bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
              <Routes>
                <Route path="/" element={
                  <>
                    <Hero />
                    <About />
                    <Projects />
                    <Skills />
                    <Contact />
                    <Footer />
                  </>
                } />
                <Route path="/java-practice/*" element={<JavaPracticeRoutes />} />
              </Routes>
              <Chatbot />
            </div>
          </main>
        </div>
      </ThemeProvider>
    </Router>
  );
}

export default App;
