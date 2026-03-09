import { useNavigate } from "react-router";
import {
  Users,
  TrendingUp,
  Brain,
  AlertTriangle,
  Bell,
  BarChart3,
  User,
  ArrowRight,
  Shield,
} from "lucide-react";
import { Header } from "../components/Header";

export function Dashboard() {
  const navigate = useNavigate();

  const stats = [
    { label: "Total Clients", value: "48", icon: Users, change: "+3 this month" },
    { label: "Avg Risk Score", value: "6.8/10", icon: TrendingUp, change: "Moderate" },
    { label: "Behavioral Discipline Score", value: "72%", icon: Brain, change: "+5% vs last quarter" },
    { label: "Market Stress Indicator", value: "Medium", icon: AlertTriangle, change: "VIX: 24.5" },
  ];

  const alerts = [
    { client: "John Peterson", message: "High emotional risk detected during recent volatility", severity: "high" },
    { client: "Sarah Chen", message: "Portfolio rebalancing needed - drift detected", severity: "medium" },
    { client: "Michael Ross", message: "Upcoming review scheduled for next week", severity: "low" },
  ];

  const clients = [
    { id: 1, name: "John Peterson", riskScore: 8.2, disciplineScore: 65, status: "At Risk" },
    { id: 2, name: "Sarah Chen", riskScore: 5.4, disciplineScore: 82, status: "Stable" },
    { id: 3, name: "Michael Ross", riskScore: 6.8, disciplineScore: 78, status: "Stable" },
    { id: 4, name: "Emily Davis", riskScore: 7.5, disciplineScore: 70, status: "Monitor" },
    { id: 5, name: "Robert Wilson", riskScore: 4.2, disciplineScore: 88, status: "Excellent" },
    { id: 6, name: "Jennifer Taylor", riskScore: 6.1, disciplineScore: 75, status: "Stable" },
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

      <Header title="Advisor Dashboard" />

      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <main className="relative z-10 max-w-7xl mx-auto px-6 py-8">
        {/* Stats Grid with Glassmorphism */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all shadow-lg"
              >
                <div className="flex items-center justify-between mb-3">
                  <Icon className="w-6 h-6 text-blue-400" />
                </div>
                <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-sm text-white/70 mb-2">{stat.label}</div>
                <div className="text-xs text-white/50">{stat.change}</div>
              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Alerts Panel with Glassmorphism */}
          <div className="lg:col-span-1 backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-6 shadow-lg">
            <div className="flex items-center gap-2 mb-4">
              <Bell className="w-5 h-5 text-blue-400" />
              <h2 className="text-lg font-semibold text-white">Active Alerts</h2>
            </div>
            <div className="space-y-3">
              {alerts.map((alert, index) => (
                <div
                  key={index}
                  className={`p-4 rounded-xl backdrop-blur-sm border ${
                    alert.severity === "high"
                      ? "border-red-400/30 bg-red-500/20"
                      : alert.severity === "medium"
                      ? "border-yellow-400/30 bg-yellow-500/20"
                      : "border-blue-400/30 bg-blue-500/20"
                  }`}
                >
                  <div className="font-medium text-sm text-white mb-1">
                    {alert.client}
                  </div>
                  <div className="text-xs text-white/70">{alert.message}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Client Summary Cards with Glassmorphism */}
          <div className="lg:col-span-2 backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-6 shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <BarChart3 className="w-5 h-5 text-blue-400" />
                <h2 className="text-lg font-semibold text-white">Client Overview</h2>
              </div>
              <button
                onClick={() => navigate("/reporting")}
                className="text-sm text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-1"
              >
                View Reports
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
            <div className="space-y-3">
              {clients.map((client) => (
                <div
                  key={client.id}
                  onClick={() => navigate(`/client/${client.id}`)}
                  className="flex items-center justify-between p-4 backdrop-blur-sm bg-white/5 border border-white/10 rounded-xl hover:border-blue-400/50 hover:bg-white/10 cursor-pointer transition-all"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500/30 to-purple-500/30 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20">
                      <User className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="font-medium text-white">{client.name}</div>
                      <div className="text-sm text-white/60">
                        Risk: {client.riskScore} | Discipline: {client.disciplineScore}%
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm border ${
                        client.status === "At Risk"
                          ? "bg-red-500/20 text-red-300 border-red-400/30"
                          : client.status === "Monitor"
                          ? "bg-yellow-500/20 text-yellow-300 border-yellow-400/30"
                          : client.status === "Excellent"
                          ? "bg-green-500/20 text-green-300 border-green-400/30"
                          : "bg-blue-500/20 text-blue-300 border-blue-400/30"
                      }`}
                    >
                      {client.status}
                    </span>
                    <ArrowRight className="w-4 h-4 text-white/40" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
