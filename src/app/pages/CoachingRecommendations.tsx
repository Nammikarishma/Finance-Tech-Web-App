import { useNavigate, useParams } from "react-router";
import {
  ArrowLeft,
  Lightbulb,
  Shield,
  TrendingUp,
  MessageSquare,
  AlertCircle,
  CheckCircle,
} from "lucide-react";
import { Header } from "../components/Header";

export function CoachingRecommendations() {
  const navigate = useNavigate();
  const { id } = useParams();

  const aiSuggestions = [
    {
      title: "Address Loss Aversion Bias",
      priority: "High",
      description:
        "Client demonstrates strong loss aversion. Recommend reviewing historical market recovery data and long-term performance to build confidence.",
      actions: [
        "Schedule educational session on market cycles",
        "Share case studies of successful long-term investors",
        "Implement automated rebalancing to reduce emotional decisions",
      ],
    },
    {
      title: "Combat Recency Bias",
      priority: "High",
      description:
        "Client tends to overweight recent market events. Help them focus on long-term historical trends rather than short-term volatility.",
      actions: [
        "Review 10-year and 20-year market performance data",
        "Discuss the danger of market timing",
        "Set up quarterly reviews instead of daily monitoring",
      ],
    },
    {
      title: "Manage Overconfidence",
      priority: "Medium",
      description:
        "Moderate overconfidence detected in prediction abilities. Encourage humility and diversification strategy.",
      actions: [
        "Discuss the limits of market prediction",
        "Review diversification benefits",
        "Implement systematic investment approach",
      ],
    },
  ];

  const riskMitigationAdvice = [
    {
      category: "Portfolio Diversification",
      recommendation: "Increase fixed income allocation by 5% to reduce volatility exposure",
      impact: "Expected portfolio volatility reduction of 8-12%",
      urgency: "Medium",
    },
    {
      category: "Communication Strategy",
      recommendation: "Schedule proactive calls during high volatility periods (VIX > 25)",
      impact: "Reduces panic selling probability by 40%",
      urgency: "High",
    },
    {
      category: "Behavioral Guardrails",
      recommendation: "Implement 48-hour cooling-off period for major investment decisions",
      impact: "Prevents impulsive decisions during emotional stress",
      urgency: "High",
    },
    {
      category: "Education Program",
      recommendation: "Enroll in quarterly behavioral finance webinar series",
      impact: "Improves financial literacy and emotional discipline",
      urgency: "Low",
    },
  ];

  const rebalancingAdvice = {
    current: [
      { asset: "Equities", current: 60, target: 55, action: "Reduce" },
      { asset: "Fixed Income", current: 25, target: 30, action: "Increase" },
      { asset: "Real Estate", current: 10, target: 10, action: "Maintain" },
      { asset: "Cash", current: 5, target: 5, action: "Maintain" },
    ],
    rationale:
      "Given the client's high emotional risk score and current market volatility, a slight reduction in equity exposure will improve portfolio stability and reduce anxiety during downturns.",
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-950 to-black">
      <Header title="Coaching Recommendations" />

      {/* Decorative Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <main className="relative z-10 max-w-6xl mx-auto px-6 py-8">
        <button
          onClick={() => navigate(`/client/${id}`)}
          className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors mb-6"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Client Profile
        </button>

        <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-6 mb-6 shadow-lg">
          <h1 className="text-2xl font-bold text-white mb-2">
            Coaching Recommendation Engine
          </h1>
          <p className="text-white/60">
            AI-generated behavioral coaching strategies and portfolio recommendations based on
            client risk profile and market conditions.
          </p>
        </div>

        {/* AI-Generated Behavioral Suggestions */}
        <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-6 mb-6 shadow-lg">
          <div className="flex items-center gap-2 mb-6">
            <Lightbulb className="w-5 h-5 text-blue-400" />
            <h2 className="text-lg font-semibold text-white">
              AI-Generated Behavioral Suggestions
            </h2>
          </div>
          <div className="space-y-4">
            {aiSuggestions.map((suggestion, index) => (
              <div key={index} className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-xl p-5">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-semibold text-white">{suggestion.title}</h3>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm border ${
                      suggestion.priority === "High"
                        ? "bg-red-500/20 text-red-300 border-red-400/30"
                        : suggestion.priority === "Medium"
                        ? "bg-yellow-500/20 text-yellow-300 border-yellow-400/30"
                        : "bg-blue-500/20 text-blue-300 border-blue-400/30"
                    }`}
                  >
                    {suggestion.priority} Priority
                  </span>
                </div>
                <p className="text-white/70 mb-4">{suggestion.description}</p>
                <div className="bg-blue-500/20 backdrop-blur-sm rounded-xl p-4 border border-blue-400/30">
                  <div className="font-medium text-sm text-blue-300 mb-2">Recommended Actions:</div>
                  <ul className="space-y-2">
                    {suggestion.actions.map((action, actionIndex) => (
                      <li key={actionIndex} className="flex items-start gap-2 text-sm text-white/80">
                        <CheckCircle className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                        <span>{action}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Risk Mitigation Advice */}
        <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-6 mb-6 shadow-lg">
          <div className="flex items-center gap-2 mb-6">
            <Shield className="w-5 h-5 text-blue-400" />
            <h2 className="text-lg font-semibold text-white">Risk Mitigation Advice</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {riskMitigationAdvice.map((advice, index) => (
              <div key={index} className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-xl p-5">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-semibold text-white">{advice.category}</h3>
                  <span
                    className={`px-2 py-1 rounded text-xs font-medium backdrop-blur-sm border ${
                      advice.urgency === "High"
                        ? "bg-red-500/20 text-red-300 border-red-400/30"
                        : advice.urgency === "Medium"
                        ? "bg-yellow-500/20 text-yellow-300 border-yellow-400/30"
                        : "bg-green-500/20 text-green-300 border-green-400/30"
                    }`}
                  >
                    {advice.urgency}
                  </span>
                </div>
                <p className="text-sm text-white/70 mb-3">{advice.recommendation}</p>
                <div className="flex items-start gap-2 text-xs text-blue-300 bg-blue-500/20 backdrop-blur-sm p-2 rounded border border-blue-400/30">
                  <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                  <span>{advice.impact}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Portfolio Rebalancing Advice */}
        <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-6 shadow-lg">
          <div className="flex items-center gap-2 mb-6">
            <TrendingUp className="w-5 h-5 text-blue-400" />
            <h2 className="text-lg font-semibold text-white">Portfolio Rebalancing Advice</h2>
          </div>

          <div className="mb-6 p-4 bg-blue-500/20 backdrop-blur-sm border border-blue-400/30 rounded-xl">
            <div className="flex items-start gap-2">
              <MessageSquare className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
              <div>
                <div className="font-medium text-blue-300 mb-1">Strategic Rationale</div>
                <p className="text-sm text-white/80">{rebalancingAdvice.rationale}</p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            {rebalancingAdvice.current.map((item, index) => (
              <div key={index} className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-xl p-5">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-semibold text-white">{item.asset}</h3>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm border ${
                      item.action === "Reduce"
                        ? "bg-red-500/20 text-red-300 border-red-400/30"
                        : item.action === "Increase"
                        ? "bg-green-500/20 text-green-300 border-green-400/30"
                        : "bg-gray-500/20 text-gray-300 border-gray-400/30"
                    }`}
                  >
                    {item.action}
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-4 mb-3">
                  <div>
                    <div className="text-xs text-white/60 mb-1">Current Allocation</div>
                    <div className="text-2xl font-bold text-white">{item.current}%</div>
                  </div>
                  <div>
                    <div className="text-xs text-white/60 mb-1">Target Allocation</div>
                    <div className="text-2xl font-bold text-blue-400">{item.target}%</div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <div className="flex-1">
                    <div className="text-xs text-white/60 mb-1">Current</div>
                    <div className="w-full bg-white/10 rounded-full h-2">
                      <div
                        className="bg-gray-500 h-2 rounded-full"
                        style={{ width: `${item.current}%` }}
                      ></div>
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="text-xs text-white/60 mb-1">Target</div>
                    <div className="w-full bg-white/10 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full"
                        style={{ width: `${item.target}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 flex gap-3">
            <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all shadow-lg">
              Generate Rebalancing Proposal
            </button>
            <button className="px-6 py-3 backdrop-blur-sm bg-white/10 border border-white/20 text-white rounded-xl hover:bg-white/20 transition-all">
              Schedule Client Meeting
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}