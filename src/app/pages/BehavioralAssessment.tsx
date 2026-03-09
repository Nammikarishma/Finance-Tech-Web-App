import { useState } from "react";
import { useNavigate, useParams } from "react-router";
import { ArrowLeft, CheckCircle, BarChart3 } from "lucide-react";
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ResponsiveContainer, Legend } from "recharts";
import { Header } from "../components/Header";

export function BehavioralAssessment() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [isComplete, setIsComplete] = useState(false);

  const questions = [
    {
      question: "During a market downturn, how likely are you to sell your investments?",
      options: [
        "Very likely - I want to protect my capital",
        "Somewhat likely - I'd consider reducing exposure",
        "Neutral - I'd wait and see",
        "Unlikely - I'd stay the course",
        "Very unlikely - I might even buy more",
      ],
    },
    {
      question: "How do recent market events influence your investment decisions?",
      options: [
        "They heavily influence my decisions",
        "They somewhat influence my decisions",
        "They have moderate influence",
        "They have little influence",
        "They don't influence my decisions",
      ],
    },
    {
      question: "How confident are you in predicting market movements?",
      options: [
        "Very confident - I trust my instincts",
        "Somewhat confident",
        "Moderately confident",
        "Not very confident",
        "Not confident at all",
      ],
    },
    {
      question: "If friends or colleagues are selling stocks, how does that affect you?",
      options: [
        "I'd strongly consider doing the same",
        "I'd probably follow their lead",
        "I'd think about it",
        "I'd mostly ignore it",
        "I'd completely ignore it",
      ],
    },
    {
      question: "How do you feel about investment losses compared to equivalent gains?",
      options: [
        "Losses feel much more painful than gains feel good",
        "Losses feel somewhat more painful",
        "About equal",
        "Gains feel slightly better",
        "Gains and losses affect me equally",
      ],
    },
  ];

  const handleAnswer = (optionIndex: number) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = optionIndex;
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setIsComplete(true);
    }
  };

  const calculateRiskProfile = () => {
    const totalScore = answers.reduce((sum, answer) => sum + (answer + 1), 0);
    const maxScore = questions.length * 5;
    const percentage = (totalScore / maxScore) * 100;

    if (percentage >= 80) return { level: "Excellent Discipline", score: 92, color: "green" };
    if (percentage >= 60) return { level: "Good Discipline", score: 75, color: "blue" };
    if (percentage >= 40) return { level: "Moderate Risk", score: 58, color: "yellow" };
    return { level: "High Emotional Risk", score: 35, color: "red" };
  };

  const getBehavioralBreakdown = () => {
    return [
      { category: "Loss Aversion", score: 65 },
      { category: "Recency Bias", score: 72 },
      { category: "Overconfidence", score: 45 },
      { category: "Herding", score: 58 },
      { category: "Emotional Control", score: 68 },
    ];
  };

  const radarData = getBehavioralBreakdown().map((item) => ({
    subject: item.category,
    score: item.score,
    fullMark: 100,
  }));

  const profile = calculateRiskProfile();

  if (isComplete) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-950 to-black">
        <Header title="Assessment Results" />

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
            <div className="flex items-center gap-2 mb-2">
              <CheckCircle className="w-6 h-6 text-green-400" />
              <h1 className="text-2xl font-bold text-white">Assessment Complete</h1>
            </div>
            <p className="text-white/60">Behavioral risk profile has been generated.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            {/* Risk Profile Output */}
            <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-6 shadow-lg">
              <h2 className="text-lg font-semibold text-white mb-6">Risk Profile Output</h2>
              <div className="text-center py-6">
                <div
                  className={`text-6xl font-bold mb-3 ${
                    profile.color === "green"
                      ? "text-green-400"
                      : profile.color === "blue"
                      ? "text-blue-400"
                      : profile.color === "yellow"
                      ? "text-yellow-400"
                      : "text-red-400"
                  }`}
                >
                  {profile.score}
                </div>
                <div className="text-xl text-white/80 mb-4">{profile.level}</div>
                <div className="w-full bg-white/10 rounded-full h-4">
                  <div
                    className={`h-4 rounded-full ${
                      profile.color === "green"
                        ? "bg-green-500"
                        : profile.color === "blue"
                        ? "bg-blue-500"
                        : profile.color === "yellow"
                        ? "bg-yellow-500"
                        : "bg-red-500"
                    }`}
                    style={{ width: `${profile.score}%` }}
                  ></div>
                </div>
              </div>
              <div className="mt-6 space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-white/60">Questions Completed:</span>
                  <span className="font-medium text-white">{questions.length}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-white/60">Assessment Date:</span>
                  <span className="font-medium text-white">Feb 23, 2026</span>
                </div>
              </div>
            </div>

            {/* Scoring Breakdown */}
            <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-6 shadow-lg">
              <h2 className="text-lg font-semibold text-white mb-4">Scoring System Breakdown</h2>
              <div className="space-y-3">
                {getBehavioralBreakdown().map((item, index) => (
                  <div key={index}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-white/70">{item.category}</span>
                      <span className="text-sm font-bold text-white">{item.score}/100</span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full"
                        style={{ width: `${item.score}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Visualization Chart */}
          <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-6 mb-6 shadow-lg">
            <div className="flex items-center gap-2 mb-4">
              <BarChart3 className="w-5 h-5 text-blue-400" />
              <h2 className="text-lg font-semibold text-white">Behavioral Profile Visualization</h2>
            </div>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart data={radarData}>
                  <PolarGrid stroke="rgba(255,255,255,0.2)" />
                  <PolarAngleAxis dataKey="subject" tick={{ fill: "#ffffff", fontSize: 12 }} />
                  <PolarRadiusAxis angle={90} domain={[0, 100]} tick={{ fill: "#9ca3af" }} />
                  <Radar
                    name="Client Score"
                    dataKey="score"
                    stroke="#3b82f6"
                    fill="#3b82f6"
                    fillOpacity={0.6}
                  />
                  <Legend wrapperStyle={{ color: '#ffffff' }} />
                </RadarChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="flex gap-3">
            <button
              onClick={() => navigate(`/coaching/${id}`)}
              className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all shadow-lg"
            >
              View Coaching Recommendations
            </button>
            <button
              onClick={() => {
                setIsComplete(false);
                setCurrentQuestion(0);
                setAnswers([]);
              }}
              className="px-6 py-3 backdrop-blur-sm bg-white/10 border border-white/20 text-white rounded-xl hover:bg-white/20 transition-all"
            >
              Retake Assessment
            </button>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-950 to-black">
      <Header title="Behavioral Risk Assessment" />

      {/* Decorative Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <main className="relative z-10 max-w-4xl mx-auto px-6 py-8">
        <button
          onClick={() => navigate(`/client/${id}`)}
          className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors mb-6"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Client Profile
        </button>

        <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-6 mb-6 shadow-lg">
          <h1 className="text-2xl font-bold text-white mb-2">Behavioral Risk Assessment</h1>
          <p className="text-white/60">
            Answer the following questions to assess behavioral patterns and risk tolerance.
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-white/70">Progress</span>
            <span className="text-sm text-white/60">
              Question {currentQuestion + 1} of {questions.length}
            </span>
          </div>
          <div className="w-full bg-white/10 rounded-full h-3">
            <div
              className="bg-gradient-to-r from-blue-500 to-purple-500 h-3 rounded-full transition-all duration-300"
              style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Question Card */}
        <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-8 mb-6 shadow-lg">
          <h2 className="text-xl font-semibold text-white mb-6">
            {questions[currentQuestion].question}
          </h2>
          <div className="space-y-3">
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(index)}
                className={`w-full p-4 text-left border-2 rounded-xl transition-all ${
                  answers[currentQuestion] === index
                    ? "border-blue-400 bg-blue-500/20 backdrop-blur-sm"
                    : "border-white/20 hover:border-blue-400/50 hover:bg-white/10 backdrop-blur-sm"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                      answers[currentQuestion] === index
                        ? "border-blue-400 bg-blue-400"
                        : "border-white/40"
                    }`}
                  >
                    {answers[currentQuestion] === index && (
                      <div className="w-3 h-3 bg-white rounded-full"></div>
                    )}
                  </div>
                  <span className="text-white">{option}</span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between">
          <button
            onClick={() => setCurrentQuestion(Math.max(0, currentQuestion - 1))}
            disabled={currentQuestion === 0}
            className="px-4 py-2 backdrop-blur-sm bg-white/10 border border-white/20 text-white rounded-xl hover:bg-white/20 transition-all disabled:opacity-30 disabled:cursor-not-allowed"
          >
            Previous
          </button>
          <button
            onClick={() => {
              if (answers[currentQuestion] !== undefined) {
                if (currentQuestion < questions.length - 1) {
                  setCurrentQuestion(currentQuestion + 1);
                } else {
                  setIsComplete(true);
                }
              }
            }}
            disabled={answers[currentQuestion] === undefined}
            className="px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all shadow-lg disabled:opacity-30 disabled:cursor-not-allowed"
          >
            {currentQuestion === questions.length - 1 ? "Complete" : "Next"}
          </button>
        </div>
      </main>
    </div>
  );
}
