import { useNavigate, useParams } from "react-router";
import {
  ArrowLeft,
  Target,
  Activity,
  TrendingUp,
  Brain,
  AlertCircle,
  PieChart,
} from "lucide-react";
import { PieChart as RechartsPie, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts";
import { Header } from "../components/Header";

export function ClientProfile() {
  const navigate = useNavigate();
  const { id } = useParams();

  // Mock client data
  const client = {
    name: "John Peterson",
    email: "john.peterson@email.com",
    phone: "(555) 123-4567",
    joinedDate: "Jan 2024",
  };

  const financialGoals = [
    { goal: "Retirement Planning", target: "$2.5M", timeline: "15 years", progress: 45 },
    { goal: "College Fund", target: "$200K", timeline: "8 years", progress: 62 },
    { goal: "Emergency Fund", target: "$50K", timeline: "Completed", progress: 100 },
  ];

  const riskProfile = {
    tolerance: "Moderate-Aggressive",
    score: 7.2,
    emotionalRisk: "High",
  };

  const behavioralBiases = [
    { bias: "Loss Aversion", severity: "High", description: "Strong tendency to avoid losses" },
    { bias: "Recency Bias", severity: "Medium", description: "Overweights recent market events" },
    { bias: "Herding Behavior", severity: "Low", description: "Minimal peer influence" },
    { bias: "Overconfidence", severity: "Medium", description: "Moderate confidence in predictions" },
  ];

  const allocationData = [
    { name: "Equities", value: 60, color: "#1e3a8a" },
    { name: "Fixed Income", value: 25, color: "#3b82f6" },
    { name: "Real Estate", value: 10, color: "#60a5fa" },
    { name: "Cash", value: 5, color: "#93c5fd" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-950 to-black">
      <Header title="Client Profile" />

      {/* Decorative Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <main className="relative z-10 max-w-7xl mx-auto px-6 py-8">
        <button
          onClick={() => navigate("/dashboard")}
          className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors mb-6"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Dashboard
        </button>

        {/* Client Header */}
        <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-6 mb-6 shadow-lg">
          <div className="flex items-start justify-between">
            <div>
              <h1 className="text-2xl font-bold text-white mb-2">{client.name}</h1>
              <div className="space-y-1 text-sm text-white/60">
                <p>{client.email}</p>
                <p>{client.phone}</p>
                <p>Client since {client.joinedDate}</p>
              </div>
            </div>
            <div className="flex gap-3">
              <button
                onClick={() => navigate(`/market-volatility/${id}`)}
                className="px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all shadow-lg"
              >
                Run Simulation
              </button>
              <button
                onClick={() => navigate(`/assessment/${id}`)}
                className="px-4 py-2 backdrop-blur-sm bg-white/10 border border-white/20 text-white rounded-xl hover:bg-white/20 transition-all"
              >
                Assessment
              </button>
              <button
                onClick={() => navigate(`/coaching/${id}`)}
                className="px-4 py-2 backdrop-blur-sm bg-white/10 border border-white/20 text-white rounded-xl hover:bg-white/20 transition-all"
              >
                Coaching
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {/* Financial Goals */}
          <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-6 shadow-lg">
            <div className="flex items-center gap-2 mb-4">
              <Target className="w-5 h-5 text-blue-400" />
              <h2 className="text-lg font-semibold text-white">Financial Goals</h2>
            </div>
            <div className="space-y-4">
              {financialGoals.map((goal, index) => (
                <div key={index} className="border-b border-white/10 pb-4 last:border-0 last:pb-0">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <div className="font-medium text-white">{goal.goal}</div>
                      <div className="text-sm text-white/60">Target: {goal.target}</div>
                    </div>
                    <span className="text-sm font-medium text-blue-400">{goal.timeline}</span>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full"
                      style={{ width: `${goal.progress}%` }}
                    ></div>
                  </div>
                  <div className="text-xs text-white/50 mt-1">{goal.progress}% Complete</div>
                </div>
              ))}
            </div>
          </div>

          {/* Risk Profile */}
          <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-6 shadow-lg">
            <div className="flex items-center gap-2 mb-4">
              <Activity className="w-5 h-5 text-blue-400" />
              <h2 className="text-lg font-semibold text-white">Risk Profile</h2>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between items-center p-4 bg-blue-500/20 backdrop-blur-sm rounded-xl border border-blue-400/30">
                <span className="text-sm font-medium text-white/80">Risk Tolerance Level</span>
                <span className="text-lg font-bold text-white">{riskProfile.tolerance}</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-blue-500/20 backdrop-blur-sm rounded-xl border border-blue-400/30">
                <span className="text-sm font-medium text-white/80">Risk Score</span>
                <span className="text-lg font-bold text-white">{riskProfile.score}/10</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-red-500/20 backdrop-blur-sm border border-red-400/30 rounded-xl">
                <div className="flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 text-red-400" />
                  <span className="text-sm font-medium text-white/80">Emotional Risk Indicator</span>
                </div>
                <span className="text-lg font-bold text-red-400">{riskProfile.emotionalRisk}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Behavioral Biases */}
          <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-6 shadow-lg">
            <div className="flex items-center gap-2 mb-4">
              <Brain className="w-5 h-5 text-blue-400" />
              <h2 className="text-lg font-semibold text-white">Behavioral Bias Tags</h2>
            </div>
            <div className="space-y-3">
              {behavioralBiases.map((bias, index) => (
                <div key={index} className="p-4 backdrop-blur-sm bg-white/5 border border-white/10 rounded-xl">
                  <div className="flex justify-between items-start mb-2">
                    <span className="font-medium text-white">{bias.bias}</span>
                    <span
                      className={`px-2 py-1 rounded text-xs font-medium backdrop-blur-sm border ${
                        bias.severity === "High"
                          ? "bg-red-500/20 text-red-300 border-red-400/30"
                          : bias.severity === "Medium"
                          ? "bg-yellow-500/20 text-yellow-300 border-yellow-400/30"
                          : "bg-green-500/20 text-green-300 border-green-400/30"
                      }`}
                    >
                      {bias.severity}
                    </span>
                  </div>
                  <p className="text-sm text-white/60">{bias.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Investment Allocation */}
          <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-6 shadow-lg">
            <div className="flex items-center gap-2 mb-4">
              <PieChart className="w-5 h-5 text-blue-400" />
              <h2 className="text-lg font-semibold text-white">Investment Allocation</h2>
            </div>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <RechartsPie>
                  <Pie
                    data={allocationData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, value }) => `${name}: ${value}%`}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {allocationData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip contentStyle={{ backgroundColor: '#1e293b', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '8px', color: '#fff' }} />
                </RechartsPie>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}