import { useState } from 'react';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Campus from './pages/Campus';
import Curriculum from './pages/Curriculum';
import Team from './pages/Team';
import Admissions from './pages/Admissions';
import Contact from './pages/Contact';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home />;
      case 'campus':
        return <Campus />;
      case 'curriculum':
        return <Curriculum />;
      case 'team':
        return <Team />;
      case 'admissions':
        return <Admissions />;
      case 'contact':
        return <Contact />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation currentPage={currentPage} onNavigate={setCurrentPage} />
      {renderPage()}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Sri Bharathi Vidya Nikethan</h3>
              <p className="text-gray-400 leading-relaxed">
                E.M School - Nurturing Next Generation with Purpose Driven Learning
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <button onClick={() => setCurrentPage('home')} className="text-gray-400 hover:text-white transition-colors">
                    Home
                  </button>
                </li>
                <li>
                  <button onClick={() => setCurrentPage('campus')} className="text-gray-400 hover:text-white transition-colors">
                    Campus Life
                  </button>
                </li>
                <li>
                  <button onClick={() => setCurrentPage('curriculum')} className="text-gray-400 hover:text-white transition-colors">
                    Curriculum
                  </button>
                </li>
                <li>
                  <button onClick={() => setCurrentPage('admissions')} className="text-gray-400 hover:text-white transition-colors">
                    Admissions
                  </button>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Contact Info</h3>
              <p className="text-gray-400 mb-2">8919990688</p>
              <p className="text-gray-400 mb-2">9052104849</p>
              <p className="text-gray-400">
                Beside Shivalayam, Anandapuram Village,<br />
                Visakhapatnam District, 530052
              </p>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Sri Bharathi Vidya Nikethan E.M School. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
