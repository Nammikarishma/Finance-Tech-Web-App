import { useState } from "react";
import { useNavigate } from "react-router";

export function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/840843081452.jpg" 
          alt="Background" 
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Palm Leaf Top Right */}
        <div className="absolute -top-20 -right-20 w-96 h-96 opacity-40">
          <svg viewBox="0 0 400 400" className="w-full h-full">
            <path
              d="M200 200 Q250 150 300 100 Q280 150 260 200 Q240 250 220 300 M200 200 Q250 180 300 160 Q280 180 260 200 Q240 220 220 240"
              stroke="white"
              strokeWidth="2"
              fill="none"
              opacity="0.6"
            />
            <path
              d="M200 200 Q230 140 260 80 Q250 140 240 200 Q230 260 220 320 M200 200 Q230 170 260 140 Q250 170 240 200 Q230 230 220 260"
              stroke="white"
              strokeWidth="2"
              fill="none"
              opacity="0.4"
            />
          </svg>
        </div>

        {/* Palm Leaf Bottom Left */}
        <div className="absolute -bottom-20 -left-20 w-96 h-96 opacity-40 rotate-180">
          <svg viewBox="0 0 400 400" className="w-full h-full">
            <path
              d="M200 200 Q250 150 300 100 Q280 150 260 200 Q240 250 220 300 M200 200 Q250 180 300 160 Q280 180 260 200 Q240 220 220 240"
              stroke="white"
              strokeWidth="2"
              fill="none"
              opacity="0.6"
            />
            <path
              d="M200 200 Q230 140 260 80 Q250 140 240 200 Q230 260 220 320 M200 200 Q230 170 260 140 Q250 170 240 200 Q230 230 220 260"
              stroke="white"
              strokeWidth="2"
              fill="none"
              opacity="0.4"
            />
          </svg>
        </div>
      </div>

      <div className="relative z-10 min-h-screen flex items-center justify-center px-4">
        <div className="w-full max-w-md">
          {/* Glassmorphism Login Card */}
          <div className="relative backdrop-blur-2xl bg-white/10 border border-white/20 rounded-3xl p-8 shadow-2xl">
            {/* Glass Effect Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-3xl"></div>
            
            <div className="relative z-10">
              {/* Title */}
              <div className="text-center mb-8">
                <h2 className="text-5xl font-light text-white/90 tracking-wider">LOGIN</h2>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-6 py-3.5 bg-white/20 backdrop-blur-sm border border-white/30 rounded-2xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all"
                    placeholder="Email"
                    required
                  />
                </div>

                <div>
                  <input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-6 py-3.5 bg-white/20 backdrop-blur-sm border border-white/30 rounded-2xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all"
                    placeholder="Password"
                    required
                  />
                  <div className="text-right mt-2">
                    <a href="#" className="text-xs text-white/60 hover:text-white transition-colors">
                      Forgot Password ?
                    </a>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-white/30 to-white/20 backdrop-blur-sm text-white py-3.5 rounded-2xl hover:from-white/40 hover:to-white/30 transition-all border border-white/30 font-medium mt-6 shadow-lg"
                >
                  Login
                </button>
              </form>

              {/* Sign Up Option */}
              <div className="text-center mt-6">
                <p className="text-white/60 text-sm">
                  Don't have an account?{" "}
                  <a href="#" className="text-white hover:text-white/80 font-medium underline transition-colors">
                    Sign up instead
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Footer Text */}
          <div className="text-center mt-8">
            <p className="text-white/50 text-sm">
              Client Behavioral Coaching Toolkit
            </p>
            <p className="text-white/30 text-xs mt-2">
              Academic Project - Demo Version
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
