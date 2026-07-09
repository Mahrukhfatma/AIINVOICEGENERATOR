import { useState, useEffect } from 'react';
import { Lightbulb, AlertCircle } from 'lucide-react';
import axiosInstance from '../utils/axiosInstance';
import { API_PATHS } from '../utils/apiPaths';
import { useAuth } from '../context/AuthContext'; // 1. Added Auth Import

const AIInsightsCard = () => {
  const { user } = useAuth(); // 2. Grabbed user preferences
  
  const [insights, setInsights] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchInsights = async () => {
      try {
        const response = await axiosInstance.get(
          API_PATHS.AI.GET_DASHBOARD_SUMMARY
        );
        setInsights(response.data.insights || []);
        setError(null); 
      } catch (error) {
        console.error("Failed to fetch AI insights", error);
        
        if (error.response?.status === 500 || error.response?.status === 429) {
           setError("AI Insights are taking a quick breather. Please refresh in a minute!");
        } else {
           setError("Failed to load AI insights. Please try again later.");
        }
        setInsights([]); 
      } finally {
        setIsLoading(false);
      }
    };

    fetchInsights();
  }, []);

  return (
    <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm shadow-gray-100">
      <div className="flex items-center mb-4">
        <Lightbulb className="w-6 h-6 text-yellow-500 mr-3" />
        <h3 className="text-lg font-semibold text-slate-900">AI Insights</h3>
      </div>
      
      {isLoading ? (
        <div className="space-y-3 animate-pulse"> 
          <div className="h-4 bg-slate-200 rounded w-3/4"></div>
          <div className="h-4 bg-slate-200 rounded w-5/6"></div>
          <div className="h-4 bg-slate-200 rounded w-2/3"></div>
        </div>
      ) : error ? (
        <div className="flex items-start text-amber-600 bg-amber-50 p-3 rounded-lg">
          <AlertCircle className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
          <p className="text-sm">{error}</p>
        </div>
      ) : insights.length > 0 ? (
        <ul className="space-y-3 list-disc list-inside text-slate-600 ml-3">
          {insights.map((insight, index) => (
            <li key={index} className="text-sm leading-relaxed">
              {/* 3. Replaced the dollar sign in the AI string with the user's preferred currency */}
              {insight.replace(/\$/g, user?.currency === 'INR' ? '₹' : user?.currency === 'EUR' ? '€' : user?.currency === 'GBP' ? '£' : '$')}
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-sm text-slate-500 italic">No insights available at the moment.</p>
      )}
    </div>
  );
};

export default AIInsightsCard;