
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-indigo-700 text-white shadow-lg no-print">
      <div className="max-w-7xl mx-auto px-4 py-6 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="bg-white p-2 rounded-lg">
            <i className="fas fa-dumbbell text-indigo-700 text-2xl"></i>
          </div>
          <h1 className="text-2xl font-bold tracking-tight">FitAI <span className="text-indigo-200 font-light">Planner</span></h1>
        </div>
        <nav className="hidden md:flex space-x-6">
          <a href="#" className="hover:text-indigo-200 transition-colors">How it works</a>
          <a href="#" className="hover:text-indigo-200 transition-colors">Resources</a>
          <a href="#" className="hover:text-indigo-200 transition-colors">Support</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
