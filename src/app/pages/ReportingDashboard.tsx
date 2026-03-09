import { useNavigate } from "react-router";
import {
  ArrowLeft,
  TrendingUp,
  Activity,
  BarChart3,
  Calendar,
  Download,
  Filter,
} from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Area,
  AreaChart,
} from "recharts";
import { Header } from "../components/Header";

export function ReportingDashboard() {
  const navigate = useNavigate();

  const progressData = [
    { month: "Aug", discipline: 58, market: 65 },
    { month: "Sep", discipline: 62, market: 60 },
    { month: "Oct", discipline: 65, market: 55 },
    { month: "Nov", discipline: 68, market: 58 },
    { month: "Dec", discipline: 70, market: 62 },
    { month: "Jan", discipline: 72, market: 64 },
    { month: "Feb", discipline: 75, market: 68 },
  ];

  const disciplineImprovementData = [
    { client: "John P.", start: 58, current: 72, improvement: 14 },
    { client: "Sarah C.", start: 70, current: 85, improvement: 15 },
    { client: "Michael R.", start: 65, current: 78, improvement: 13 },
    { client: "Emily D.", start: 55, current: 73, improvement: 18 },
    { client: "Robert W.", start: 75, current: 88, improvement: 13 },
  ];

  const volatilityResponseData = [
    { scenario: "5% Drop", score: 85, date: "Feb 15" },
    { scenario: "10% Drop", score: 72, date: "Feb 10" },
    { scenario: "15% Drop", score: 65, date: "Feb 5" },
    { scenario: "20% Drop", score: 48, date: "Jan 28" },
    { scenario: "25% Drop", score: 35, date: "Jan 20" },
  ];

  const aggregateMetrics = [
    { label: "Avg Discipline Score", value: "75.2%", change: "+8.4% vs 6mo ago", trend: "up" },
    { label: "Clients at Risk", value: "8", change: "-4 from last quarter", trend: "down" },
    { label: "Completed Assessments", value: "42", change: "87.5% completion rate", trend: "up" },
    { label: "Avg Emotional Risk", value: "Medium", change: "Improved from High", trend: "down" },
  ];

  return (
    <div className="min-h-screen bg-black relative">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/eu8_01.jpg" 
          alt="Background" 
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <Header title="Reporting Dashboard" />

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

        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold text-white mb-2">Client Progress Reports</h1>
            <p className="text-white/60">
              Track behavioral improvements and volatility response over time
            </p>
          </div>
          <div className="flex gap-3">
            <button className="flex items-center gap-2 px-4 py-2 backdrop-blur-sm bg-white/10 border border-white/20 text-white rounded-xl hover:bg-white/20 transition-all">
              <Filter className="w-4 h-4" />
              Filters
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all shadow-lg">
              <Download className="w-4 h-4" />
              Export Report
            </button>
          </div>
        </div>

        {/* Aggregate Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {aggregateMetrics.map((metric, index) => (
            <div key={index} className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-6 shadow-lg">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm text-white/60">{metric.label}</span>
                <div
                  className={`w-2 h-2 rounded-full ${
                    metric.trend === "up" ? "bg-green-400" : "bg-blue-400"
                  }`}
                ></div>
              </div>
              <div className="text-3xl font-bold text-white mb-1">{metric.value}</div>
              <div className="text-xs text-white/50">{metric.change}</div>
            </div>
          ))}
        </div>

        {/* Client Progress Over Time */}
        <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-6 mb-6 shadow-lg">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-blue-400" />
              <h2 className="text-lg font-semibold text-white">
                Client Progress Over Time (6 Months)
              </h2>
            </div>
            <div className="flex items-center gap-2 text-sm text-white/60">
              <Calendar className="w-4 h-4" />
              <span>Aug 2025 - Feb 2026</span>
            </div>
          </div>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={progressData}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                <XAxis dataKey="month" tick={{ fill: "#9ca3af" }} />
                <YAxis tick={{ fill: "#9ca3af" }} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#1e293b',
                    border: '1px solid rgba(255,255,255,0.2)',
                    borderRadius: '12px',
                    color: '#fff'
                  }}
                />
                <Legend wrapperStyle={{ color: '#ffffff' }} />
                <Area
                  type="monotone"
                  dataKey="discipline"
                  stroke="#3b82f6"
                  fill="#3b82f6"
                  fillOpacity={0.6}
                  name="Avg Discipline Score"
                />
                <Area
                  type="monotone"
                  dataKey="market"
                  stroke="#8b5cf6"
                  fill="#8b5cf6"
                  fillOpacity={0.4}
                  name="Market Confidence"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {/* Discipline Improvement Score */}
          <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-6 shadow-lg">
            <div className="flex items-center gap-2 mb-6">
              <Activity className="w-5 h-5 text-blue-400" />
              <h2 className="text-lg font-semibold text-white">
                Discipline Improvement Score
              </h2>
            </div>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={disciplineImprovementData} layout="horizontal">
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                  <XAxis type="number" tick={{ fill: "#9ca3af" }} />
                  <YAxis dataKey="client" type="category" tick={{ fill: "#9ca3af" }} width={80} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: '#1e293b',
                      border: '1px solid rgba(255,255,255,0.2)',
                      borderRadius: '12px',
                      color: '#fff'
                    }}
                  />
                  <Legend wrapperStyle={{ color: '#ffffff' }} />
                  <Bar dataKey="start" fill="#60a5fa" name="Starting Score" />
                  <Bar dataKey="current" fill="#3b82f6" name="Current Score" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Volatility Response History */}
          <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-6 shadow-lg">
            <div className="flex items-center gap-2 mb-6">
              <BarChart3 className="w-5 h-5 text-blue-400" />
              <h2 className="text-lg font-semibold text-white">Volatility Response History</h2>
            </div>
            <div className="space-y-4 mb-4">
              {volatilityResponseData.map((response, index) => (
                <div key={index} className="border-b border-white/10 pb-4 last:border-0">
                  <div className="flex justify-between items-center mb-2">
                    <div>
                      <span className="font-medium text-white">{response.scenario}</span>
                      <span className="text-sm text-white/50 ml-2">({response.date})</span>
                    </div>
                    <span
                      className={`text-lg font-bold ${
                        response.score >= 70
                          ? "text-green-400"
                          : response.score >= 50
                          ? "text-yellow-400"
                          : "text-red-400"
                      }`}
                    >
                      {response.score}
                    </span>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full ${
                        response.score >= 70
                          ? "bg-green-500"
                          : response.score >= 50
                          ? "bg-yellow-500"
                          : "bg-red-500"
                      }`}
                      style={{ width: `${response.score}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
            <div className="p-4 bg-blue-500/20 backdrop-blur-sm border border-blue-400/30 rounded-xl mt-4">
              <p className="text-sm text-white/80">
                <strong>Analysis:</strong> Client shows improved resilience in moderate volatility
                scenarios (5-15% drops) but requires additional coaching for severe market stress.
              </p>
            </div>
          </div>
        </div>

        {/* Summary Insights */}
        <div className="backdrop-blur-xl bg-blue-500/20 border border-blue-400/30 rounded-2xl p-6 shadow-lg">
          <h2 className="text-lg font-semibold text-white mb-4">Key Insights & Recommendations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="backdrop-blur-sm bg-white/10 rounded-xl p-4 border border-white/10">
              <h3 className="font-medium text-white mb-2">Overall Trend</h3>
              <p className="text-sm text-white/70">
                Portfolio-wide behavioral discipline has improved by 8.4% over the past 6 months,
                indicating successful coaching interventions and client education programs.
              </p>
            </div>
            <div className="backdrop-blur-sm bg-white/10 rounded-xl p-4 border border-white/10">
              <h3 className="font-medium text-white mb-2">Areas for Focus</h3>
              <p className="text-sm text-white/70">
                8 clients remain at elevated risk levels. Recommend prioritizing proactive outreach
                during the next market volatility event.
              </p>
            </div>
            <div className="backdrop-blur-sm bg-white/10 rounded-xl p-4 border border-white/10">
              <h3 className="font-medium text-white mb-2">Success Metrics</h3>
              <p className="text-sm text-white/70">
                87.5% assessment completion rate demonstrates strong client engagement. Continue
                quarterly assessment schedule to maintain momentum.
              </p>
            </div>
            <div className="backdrop-blur-sm bg-white/10 rounded-xl p-4 border border-white/10">
              <h3 className="font-medium text-white mb-2">Next Steps</h3>
              <p className="text-sm text-white/70">
                Schedule Q2 review meetings with all clients scoring below 60 on discipline metrics.
                Prepare customized coaching materials for each.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
