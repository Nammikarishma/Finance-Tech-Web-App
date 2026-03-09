import { useState } from "react";
import { useNavigate, useParams } from "react-router";
import { ArrowLeft, TrendingDown, AlertTriangle, Lightbulb, Brain } from "lucide-react";
import { Header } from "../components/Header";

export function MarketVolatility() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [dropPercentage, setDropPercentage] = useState(10);

  const calculateReactionScore = () => {
    // Simple calculation based on drop percentage
    if (dropPercentage <= 5) return { score: 85, level: "Excellent" };
    if (dropPercentage <= 15) return { score: 65, level: "Moderate Concern" };
    if (dropPercentage <= 25) return { score: 45, level: "High Anxiety" };
    return { score: 25, level: "Panic Response" };
  };

  const reaction = calculateReactionScore();

  const getCoachingAction = () => {
    if (dropPercentage <= 5) return "Reinforce long-term strategy. Client showing resilience.";
    if (dropPercentage <= 15) return "Review risk tolerance. Discuss historical recovery patterns.";
    if (dropPercentage <= 25) return "Immediate call recommended. Review portfolio fundamentals.";
    return "Urgent intervention needed. Schedule face-to-face meeting to prevent panic selling.";
  };

  const getEmotionalBiases = () => {
    const biases = [];
    if (dropPercentage > 10) biases.push("Loss Aversion Triggered");
    if (dropPercentage > 15) biases.push("Recency Bias Active");
    if (dropPercentage > 20) biases.push("Panic Behavior Risk");
    if (dropPercentage > 25) biases.push("Herd Mentality Concern");
    return biases.length > 0 ? biases : ["Rational Response"];
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-950 to-black">
      <Header title="Market Volatility Simulation" />

      {/* Decorative Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <main className="relative z-10 max-w-5xl mx-auto px-6 py-8">
        <button
          onClick={() => navigate(`/client/${id}`)}
          className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors mb-6"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Client Profile
        </button>

        <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-6 mb-6 shadow-lg">
          <h1 className="text-2xl font-bold text-white mb-2">Market Drop Simulation</h1>
          <p className="text-white/60">
            Simulate market volatility scenarios to assess client emotional response and identify
            coaching opportunities.
          </p>
        </div>

        {/* Market Drop Slider */}
        <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-8 mb-6 shadow-lg">
          <div className="flex items-center gap-2 mb-6">
            <TrendingDown className="w-5 h-5 text-blue-400" />
            <h2 className="text-lg font-semibold text-white">Market Drop Scenario</h2>
          </div>

          <div className="mb-8">
            <div className="flex justify-between items-center mb-4">
              <span className="text-sm font-medium text-white/70">Market Drop Percentage</span>
              <span className="text-3xl font-bold text-red-400">-{dropPercentage}%</span>
            </div>
            <input
              type="range"
              min="0"
              max="40"
              step="1"
              value={dropPercentage}
              onChange={(e) => setDropPercentage(Number(e.target.value))}
              className="w-full h-3 bg-white/10 rounded-lg appearance-none cursor-pointer"
              style={{
                background: `linear-gradient(to right, #3b82f6 0%, #ef4444 ${(dropPercentage / 40) * 100}%, rgba(255,255,255,0.1) ${(dropPercentage / 40) * 100}%, rgba(255,255,255,0.1) 100%)`,
              }}
            />
            <div className="flex justify-between text-xs text-white/50 mt-2">
              <span>0%</span>
              <span>10%</span>
              <span>20%</span>
              <span>30%</span>
              <span>40%</span>
            </div>
          </div>

          {/* Portfolio Impact Visualization */}
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 bg-blue-500/20 backdrop-blur-sm rounded-xl border border-blue-400/30">
              <div className="text-sm text-white/60 mb-1">Portfolio Value Before</div>
              <div className="text-2xl font-bold text-white">$850,000</div>
            </div>
            <div className="p-4 bg-red-500/20 backdrop-blur-sm border border-red-400/30 rounded-xl">
              <div className="text-sm text-white/60 mb-1">Portfolio Value After</div>
              <div className="text-2xl font-bold text-red-400">
                ${(850000 * (1 - dropPercentage / 100)).toLocaleString()}
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {/* Client Reaction Score */}
          <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-6 shadow-lg">
            <div className="flex items-center gap-2 mb-4">
              <AlertTriangle className="w-5 h-5 text-blue-400" />
              <h2 className="text-lg font-semibold text-white">Client Reaction Score</h2>
            </div>
            <div className="text-center py-6">
              <div className="text-6xl font-bold text-white mb-2">{reaction.score}</div>
              <div className="text-lg text-white/60 mb-4">{reaction.level}</div>
              <div className="w-full bg-white/10 rounded-full h-3">
                <div
                  className={`h-3 rounded-full ${
                    reaction.score >= 70
                      ? "bg-green-500"
                      : reaction.score >= 50
                      ? "bg-yellow-500"
                      : "bg-red-500"
                  }`}
                  style={{ width: `${reaction.score}%` }}
                ></div>
              </div>
            </div>
            <p className="text-sm text-white/60 mt-4">
              Score based on historical behavior patterns, risk tolerance, and emotional stability
              indicators.
            </p>
          </div>

          {/* Emotional Bias Detection */}
          <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-6 shadow-lg">
            <div className="flex items-center gap-2 mb-4">
              <Brain className="w-5 h-5 text-blue-400" />
              <h2 className="text-lg font-semibold text-white">Emotional Bias Detection</h2>
            </div>
            <div className="space-y-3">
              {getEmotionalBiases().map((bias, index) => (
                <div
                  key={index}
                  className={`p-4 rounded-xl backdrop-blur-sm border ${
                    bias === "Rational Response"
                      ? "border-green-400/30 bg-green-500/20"
                      : "border-red-400/30 bg-red-500/20"
                  }`}
                >
                  <div className="font-medium text-white">{bias}</div>
                </div>
              ))}
            </div>
            {dropPercentage > 15 && (
              <div className="mt-4 p-3 bg-yellow-500/20 backdrop-blur-sm border border-yellow-400/30 rounded-xl">
                <p className="text-sm text-white/80">
                  <strong>Warning:</strong> Multiple emotional biases detected. Increased risk of
                  impulsive decision-making.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Suggested Coaching Action */}
        <div className="backdrop-blur-xl bg-blue-500/20 border border-blue-400/30 rounded-2xl p-6 shadow-lg">
          <div className="flex items-center gap-2 mb-4">
            <Lightbulb className="w-5 h-5 text-blue-400" />
            <h2 className="text-lg font-semibold text-white">Suggested Coaching Action</h2>
          </div>
          <p className="text-white/80 mb-4">{getCoachingAction()}</p>
          <div className="flex gap-3">
            <button
              onClick={() => navigate(`/coaching/${id}`)}
              className="px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all shadow-lg"
            >
              View Coaching Recommendations
            </button>
            <button
              onClick={() => navigate(`/assessment/${id}`)}
              className="px-4 py-2 backdrop-blur-sm bg-white/10 border border-white/20 text-white rounded-xl hover:bg-white/20 transition-all"
            >
              Run Full Assessment
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}