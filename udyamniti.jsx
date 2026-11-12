import { useState } from "react";
import { Smartphone, Lock, Eye, EyeOff, ArrowRight, Sprout } from "lucide-react";

export default function LoginScreen() {
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const next = {};
    if (!/^[6-9]\d{9}$/.test(mobile.trim())) {
      next.mobile = "Enter a valid 10-digit mobile number";
    }
    if (password.length < 8) {
      next.password = "Password must be at least 8 characters";
    }
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Logging in with", { mobile, password });
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[#EFF3E9] p-4">
      <div className="relative w-full max-w-sm bg-[#F7F8F2] rounded-[2.5rem] shadow-xl overflow-hidden flex flex-col">
        {/* Content */}
        <div className="px-7 pt-10 pb-6 flex flex-col items-center text-center">
          {/* Logo */}
          <div className="flex items-center gap-1 mb-1">
            <span
              className="text-5xl font-extrabold"
              style={{ color: "#1E3A8A", fontFamily: "'Poppins', sans-serif" }}
            >
              U
            </span>
            <span className="relative">
              <span
                className="text-5xl font-extrabold"
                style={{ color: "#C88A2E", fontFamily: "'Poppins', sans-serif" }}
              >
                N
              </span>
              <Sprout
                size={22}
                strokeWidth={2.5}
                className="absolute -top-3 -right-1 text-[#2F7A3D] rotate-12"
              />
            </span>
          </div>
          <h1 className="text-2xl font-bold text-[#1B4332] tracking-tight">
            UdyamNiti
          </h1>
          <p className="text-sm text-[#5B7A6A] mt-1">
            Right Business. Better Tomorrow.
          </p>

          {/* Welcome */}
          <div className="w-full mt-8 mb-2">
            <h2 className="text-xl font-bold text-[#1B4332] text-left">
              Welcome back!
            </h2>
            <p className="text-sm text-[#5B7A6A] text-left mt-1 leading-snug">
              Log in to continue your journey towards a better tomorrow.
            </p>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleLogin} className="px-7 flex flex-col gap-4">
          {/* Mobile */}
          <div>
            <label className="block text-xs font-medium text-[#5B7A6A] mb-1 ml-1">
              Mobile number
            </label>
            <div
              className={`flex items-center gap-3 rounded-xl border bg-white px-4 h-14 ${
                errors.mobile ? "border-red-400" : "border-[#DDE3D4]"
              }`}
            >
              <Smartphone size={18} className="text-[#1B4332] shrink-0" />
              <input
                type="tel"
                inputMode="numeric"
                maxLength={10}
                placeholder="+91 98765 43210"
                value={mobile}
                onChange={(e) =>
                  setMobile(e.target.value.replace(/\D/g, "").slice(0, 10))
                }
                className="w-full outline-none text-sm text-[#1B4332] placeholder:text-[#A7B3A1] bg-transparent"
              />
            </div>
            {errors.mobile && (
              <p className="text-xs text-red-500 mt-1 ml-1">{errors.mobile}</p>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="block text-xs font-medium text-[#5B7A6A] mb-1 ml-1">
              Password
            </label>
            <div
              className={`flex items-center gap-3 rounded-xl border bg-white px-4 h-14 ${
                errors.password ? "border-red-400" : "border-[#DDE3D4]"
              }`}
            >
              <Lock size={18} className="text-[#1B4332] shrink-0" />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Min. 8 characters"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full outline-none text-sm text-[#1B4332] placeholder:text-[#A7B3A1] bg-transparent"
              />
              <button
                type="button"
                onClick={() => setShowPassword((s) => !s)}
                aria-label={showPassword ? "Hide password" : "Show password"}
                className="text-[#A7B3A1] shrink-0"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
            {errors.password && (
              <p className="text-xs text-red-500 mt-1 ml-1">{errors.password}</p>
            )}
          </div>

          {/* Login button */}
          <button
            type="submit"
            className="mt-2 w-full h-14 rounded-xl bg-[#1B4332] text-white font-semibold text-base flex items-center justify-center gap-2 active:scale-[0.98] transition"
          >
            Log in
            <ArrowRight size={18} />
          </button>

          {/* Divider */}
          <div className="flex items-center gap-3 my-1">
            <div className="flex-1 h-px bg-[#DDE3D4]" />
            <span className="text-xs text-[#A7B3A1]">OR</span>
            <div className="flex-1 h-px bg-[#DDE3D4]" />
          </div>

          {/* Create account */}
          <button
            type="button"
            className="w-full h-14 rounded-xl border-2 border-[#1B4332] text-[#1B4332] font-semibold text-base active:scale-[0.98] transition"
          >
            Create new account
          </button>

          {/* Forgot password */}
          <button
            type="button"
            className="text-sm text-[#1B4332] font-medium text-center mt-1 mb-4"
          >
            Forgot password?
          </button>
        </form>

        {/* Illustration footer */}
        <div className="relative mt-auto h-32 overflow-hidden">
          <svg
            viewBox="0 0 400 140"
            preserveAspectRatio="none"
            className="w-full h-full"
          >
            <rect width="400" height="140" fill="#EFF3E9" />
            <path d="M0 90 Q100 60 200 85 T400 75 V140 H0 Z" fill="#CFE0B8" />
            <path d="M0 105 Q120 85 220 105 T400 95 V140 H0 Z" fill="#A9CC85" />
            <path d="M0 120 Q140 105 260 120 T400 112 V140 H0 Z" fill="#8CBB63" />
            <circle cx="330" cy="45" r="18" fill="#F4EFD8" opacity="0.7" />
            <rect x="290" y="98" width="24" height="18" fill="#E8DCC0" />
            <polygon points="286,98 302,84 318,98" fill="#B0855A" />
            <line x1="255" y1="70" x2="255" y2="112" stroke="#5C7A3E" strokeWidth="3" />
            <ellipse cx="255" cy="68" rx="10" ry="20" fill="#5C7A3E" />
            <line x1="270" y1="80" x2="270" y2="112" stroke="#5C7A3E" strokeWidth="3" />
            <ellipse cx="270" cy="78" rx="8" ry="16" fill="#6B8C48" />
          </svg>
          <p className="absolute bottom-3 left-0 right-0 text-center text-[11px] font-medium text-[#4B6350]">
            Empowering rural entrepreneurs
          </p>
        </div>
      </div>
    </div>
  );
}