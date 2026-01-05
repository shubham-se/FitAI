
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-slate-200 py-12 mt-auto no-print">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <div className="flex items-center justify-center space-x-2 mb-4">
          <i className="fas fa-dumbbell text-indigo-600"></i>
          <span className="text-slate-900 font-bold">FitAI</span>
        </div>
        <p className="text-slate-500 text-sm max-w-lg mx-auto mb-6">
          Providing personalized fitness guidance using cutting-edge artificial intelligence. 
          Your journey to health is unique, and so is your plan.
        </p>
        <p className="text-slate-400 text-xs">
          © {new Date().getFullYear()} FitAI Planner. All rights reserved.
        </p>
        <div className="mt-4 text-slate-400 text-xs italic">
          Disclaimer: This tool is for educational purposes only. Always consult a physician.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
