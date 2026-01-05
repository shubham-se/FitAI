
import React from 'react';
import { WorkoutPlan } from '../types';

interface WorkoutChartProps {
  plan: WorkoutPlan;
}

const WorkoutChart: React.FC<WorkoutChartProps> = ({ plan }) => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-3xl font-extrabold text-slate-900">{plan.title}</h2>
          <p className="text-slate-500 mt-2 max-w-2xl">{plan.summary}</p>
        </div>
        <button
          onClick={handlePrint}
          className="no-print inline-flex items-center justify-center px-6 py-3 border border-indigo-600 text-indigo-600 rounded-xl hover:bg-indigo-50 transition-colors font-semibold"
        >
          <i className="fas fa-print mr-2"></i> Print / Export PDF
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {plan.days.map((day, idx) => (
          <div key={idx} className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden flex flex-col h-full">
            <div className="bg-slate-50 px-6 py-4 border-b border-slate-200 flex justify-between items-center">
              <div>
                <h3 className="text-xl font-bold text-slate-800">{day.dayName}</h3>
                <span className="text-xs font-semibold text-indigo-600 uppercase tracking-wider">{day.focus}</span>
              </div>
              <div className="text-sm font-medium text-slate-500">
                <i className="far fa-clock mr-1"></i> {day.duration}
              </div>
            </div>
            
            <div className="p-0 flex-grow">
              <table className="w-full text-left text-sm">
                <thead className="bg-slate-50/50 text-slate-400 font-medium border-b border-slate-100">
                  <tr>
                    <th className="px-6 py-3">Exercise</th>
                    <th className="px-4 py-3 text-center">Sets</th>
                    <th className="px-4 py-3 text-center">Reps</th>
                    <th className="px-4 py-3 text-center">Rest</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {day.exercises.map((ex, eIdx) => (
                    <tr key={eIdx} className="hover:bg-slate-50 transition-colors">
                      <td className="px-6 py-4 font-semibold text-slate-700">{ex.name}</td>
                      <td className="px-4 py-4 text-center text-slate-600">{ex.sets}</td>
                      <td className="px-4 py-4 text-center text-slate-600">{ex.reps}</td>
                      <td className="px-4 py-4 text-center text-slate-600">{ex.rest}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {day.exercises.length === 0 && (
                <div className="py-12 text-center text-slate-400 bg-slate-50/30 italic">
                  Rest & Recovery Day
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="bg-amber-50 border border-amber-200 p-6 rounded-2xl flex items-start gap-4">
        <i className="fas fa-triangle-exclamation text-amber-500 text-xl mt-1"></i>
        <div>
          <h4 className="font-bold text-amber-800">Safety First</h4>
          <p className="text-amber-700 text-sm mt-1">
            This plan is AI-generated based on your inputs. Always consult with a qualified medical professional or certified fitness trainer before starting a new exercise program. If you feel sharp pain, dizziness, or shortness of breath, stop immediately and seek medical advice.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WorkoutChart;
