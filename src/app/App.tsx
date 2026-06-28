import { useState } from "react";
import {
  Globe,
  HelpCircle,
  Mail,
  Lock,
  Eye,
  EyeOff,
  MessageCircle,
  Bell,
  ArrowLeft,
  ArrowRight,
  Camera,
  Check,
  CheckCircle,
  ChevronRight,
  Code2,
  LayoutDashboard,
  Building2,
  Smartphone,
  MessageSquare,
  Wrench,
  ClipboardCheck,
  HeadphonesIcon,
  BarChart2,
  Settings,
  LogOut,
  ChevronDown,
  TrendingUp,
  TrendingDown,
  Plus,
  Search,
  ChevronLeft,
  X,
  Upload,
  Copy,
  MoreVertical,
  Shield,
  Zap,
  Clock,
  Database,
  FileText,
  Monitor,
  Activity,
  AlertCircle,
  BookOpen,
  ImageIcon,
  Info,
  Lightbulb,
  UserCheck,
  CreditCard,
  Calendar,
  Download,
  LayoutGrid,
  RefreshCw,
  Users,
  AlertTriangle,
  UserCog,
  Package,
  Trash2,
  Pencil,
  Send,
  RotateCcw,
  Store,
} from "lucide-react";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

// ─── Photos ────────────────────────────────────────────────────────────────
const WOMAN_PHOTO =
  "https://images.unsplash.com/photo-1701760171969-9f1f985ca956?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMHdvbWFuJTIwc21pbGluZyUyMGhvbGRpbmclMjBib29rcyUyMGNhc3VhbCUyMHBvcnRyYWl0fGVufDF8fHx8MTc4MjM1MzYzOXww&ixlib=rb-4.1.0&q=80&w=400";
const MAN_PHOTO_1 =
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW4lMjBhdmF0YXIlMjBwcm9maWxlJTIwcGhvdG8lMjBwcm9mZXNzaW9uYWwlMjBoZWFkc2hvdHxlbnwxfHx8fDE3ODIzNTM2NDF8MA&ixlib=rb-4.1.0&q=80&w=100";
const MAN_PHOTO_2 =
  "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxtYW4lMjBhdmF0YXIlMjBwcm9maWxlJTIwcGhvdG8lMjBwcm9mZXNzaW9uYWwlMjBoZWFkc2hvdHxlbnwxfHx8fDE3ODIzNTM2NDF8MA&ixlib=rb-4.1.0&q=80&w=100";

type Screen = "signin" | "dashboard" | "doanhNghiep" | "chiTietDoanhNghiep" | "chiTietThanhVien" | "chiTietMiniApp" | "developer" | "miniApp" | "donViSuDung" | "chiTietDonViSuDung" | "apiManagement" | "chiTietAPI" | "apiMonitoring" | "mauMiniApp" | "trinhTaoMau" | "xemMauMiniApp" | "hoTro" | "baoCao" | "quanLyHeThong" | "dnDashboard" | "dnMiniApp" | "dnCreateMiniApp" | "dnCreateMiniAppStep2" | "dnCreateMiniAppStep3";

// ─── Logo ──────────────────────────────────────────────────────────────────
function LogoIcon({ size = 32 }: { size?: number }) {
  const s = size / 32;
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
    >
      <rect
        x={0 * s}
        y={8 * s}
        width={12 * s}
        height={12 * s}
        rx={2 * s}
        fill="#00458B"
      />
      <rect
        x={10 * s}
        y={0 * s}
        width={12 * s}
        height={12 * s}
        rx={2 * s}
        fill="#D1E4FF"
      />
      <rect
        x={10 * s}
        y={16 * s}
        width={12 * s}
        height={12 * s}
        rx={2 * s}
        fill="#2563EB"
      />
      <rect
        x={20 * s}
        y={8 * s}
        width={12 * s}
        height={12 * s}
        rx={2 * s}
        fill="#4CAF50"
        opacity="0.85"
      />
    </svg>
  );
}

// ─── Sidebar ───────────────────────────────────────────────────────────────
const NAV_ITEMS: {
  icon: React.ElementType;
  label: string;
  screen?: Screen;
}[] = [
  {
    icon: LayoutDashboard,
    label: "Tổng quan",
    screen: "dashboard",
  },
  {
    icon: Building2,
    label: "Doanh nghiệp",
    screen: "doanhNghiep",
  },
  // { icon: Smartphone, label: "Developer", screen: "developer" },
  { icon: MessageSquare, label: "Mini App", screen: "miniApp" },
  { icon: Users, label: "Đơn vị sử dụng", screen: "donViSuDung" },
  { icon: MessageSquare, label: "API", screen: "apiManagement" },
  { icon: MessageSquare, label: "API Monitoring", screen: "apiMonitoring" },
  { icon: Wrench, label: "Mẫu Mini App", screen: "mauMiniApp" },
  { icon: HeadphonesIcon, label: "Hỗ trợ", screen: "hoTro" },
  { icon: BarChart2, label: "Báo cáo", screen: "baoCao" },
  { icon: Settings, label: "Quản lý hệ thống", screen: "quanLyHeThong" },
  { icon: LogOut, label: "Đăng xuất", screen: "signin" },
];

function Sidebar({
  current,
  onNavigate,
}: {
  current: Screen;
  onNavigate: (s: Screen) => void;
}) {
  return (
    <aside className="w-[260px] bg-white flex flex-col border-r border-gray-100 shrink-0">
      <div className="flex items-center gap-3 px-5 h-16 border-b border-gray-100">
        <LogoIcon size={24} />
        <div>
          <div className="text-sm font-bold text-gray-800 leading-tight">
            Quản trị viên
          </div>
          <div className="text-xs text-gray-500">
            Enterprise Portal
          </div>
        </div>
      </div>
      <nav className="flex-1 p-3 overflow-y-auto">
        {NAV_ITEMS.map(({ icon: Icon, label, screen }) => {
          const active = screen === current;
          return (
            <button
              key={label}
              onClick={() => screen && onNavigate(screen)}
              className={`w-full flex items-center gap-3 px-3 py-2.5 text-sm transition-colors text-left rounded-lg ${
                active
                  ? "bg-[#00458B] text-white font-bold"
                  : "text-gray-600 hover:bg-gray-50 font-medium"
              }`}
            >
              <Icon size={16} className="shrink-0" />
              <span className="truncate">{label}</span>
            </button>
          );
        })}
      </nav>
    </aside>
  );
}

// ─── Doanh Nghiep Sidebar ──────────────────────────────────────────────────
const DN_NAV_ITEMS: { icon: React.ElementType; label: string; screen?: Screen }[] = [
  { icon: LayoutDashboard, label: "Dashboard",                screen: "dnDashboard" },
  { icon: Smartphone,      label: "Mini App",             screen: "dnMiniApp"       },
  { icon: Zap,             label: "API"                                             },
  { icon: Users,           label: "Nhân viên"                                       },
  { icon: UserCog,         label: "Vai trò & Phân quyền"                            },
  { icon: BarChart2,       label: "Báo cáo"                                         },
  { icon: HeadphonesIcon,  label: "Hỗ trợ"                                          },
  { icon: Building2,       label: "Thông tin doanh nghiệp"                          },
  { icon: LogOut,          label: "Đăng xuất",               screen: "signin"       },
];

function SidebarDN({
  current,
  onNavigate,
}: {
  current: Screen;
  onNavigate: (s: Screen) => void;
}) {
  return (
    <aside className="w-[260px] bg-white flex flex-col border-r border-gray-100 shrink-0">
      <div className="flex items-center gap-3 px-5 h-16 border-b border-gray-100">
        <LogoIcon size={24} />
        <div>
          <div className="text-sm font-bold text-gray-800 leading-tight">
            Công ty ABC
          </div>
          <div className="text-xs text-gray-500">Doanh nghiệp</div>
        </div>
      </div>
      <nav className="flex-1 p-3 overflow-y-auto">
        {DN_NAV_ITEMS.map(({ icon: Icon, label, screen }) => {
          const active = screen === current;
          return (
            <button
              key={label}
              onClick={() => screen && onNavigate(screen)}
              className={`w-full flex items-center gap-3 px-3 py-2.5 text-sm transition-colors text-left rounded-lg ${
                active
                  ? "bg-[#00458B] text-white font-bold"
                  : "text-gray-600 hover:bg-gray-50 font-medium"
              }`}
            >
              <Icon size={16} className="shrink-0" />
              <span className="truncate">{label}</span>
            </button>
          );
        })}
      </nav>
    </aside>
  );
}

// ─── Top Bar ───────────────────────────────────────────────────────────────
function TopBar({ title }: { title: string }) {
  return (
    <header className="bg-white border-b border-gray-100 px-8 h-16 flex items-center justify-between shrink-0">
      <div className="flex items-center gap-2 text-sm text-gray-500">
        <span>Trang chủ</span>
        <ChevronRight size={14} />
        <h1 className="text-lg font-bold text-gray-800">
          {title}
        </h1>
      </div>
      <div className="flex items-center gap-3">
        
        <button className="relative p-1.5 text-gray-500 hover:text-gray-800">
          <Bell size={18} />
          <span className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-red-500 rounded-full" />
        </button>
        <button className="p-1.5 text-gray-500 hover:text-gray-800">
          <HelpCircle size={18} />
        </button>
        <img
          src={MAN_PHOTO_2}
          alt="Avatar"
          className="w-8 h-8 rounded-full object-cover border border-gray-200"
        />
      </div>
    </header>
  );
}

// ─── Sign In ───────────────────────────────────────────────────────────────
function SignIn({ onSignIn }: { onSignIn: (target?: Screen) => void }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);

  return (
    <div
      className="min-h-screen bg-gray-50 flex flex-col"
      style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}
    >
      <header className="flex items-center justify-between px-8 py-4 bg-white border-b border-gray-100">
        <div className="flex items-center gap-2">
          <LogoIcon />
          <span className="text-sm font-semibold tracking-widest text-gray-700 uppercase">
            Logo
          </span>
        </div>
        <div className="flex items-center gap-3">
          <button className="p-1.5 text-gray-500 hover:text-gray-800 transition-colors">
            <Globe size={20} />
          </button>
          <button className="p-1.5 text-gray-500 hover:text-gray-800 transition-colors">
            <HelpCircle size={20} />
          </button>
        </div>
      </header>

      <main className="flex-1 flex items-center justify-center px-6 py-12">
        <div className="w-full max-w-5xl flex items-center gap-12 lg:gap-20">
          <div className="hidden lg:flex flex-1 items-center justify-center relative min-h-[420px]">
            <div
              className="absolute rounded-full"
              style={{
                width: 300,
                height: 300,
                background: "#C7C2F0",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              }}
            />
            <div
              className="absolute rounded-lg border-2 border-pink-300"
              style={{
                width: 260,
                height: 260,
                top: "50%",
                left: "50%",
                transform: "translate(-46%, -52%)",
              }}
            />
            <img
              src={WOMAN_PHOTO}
              alt="Woman smiling"
              className="relative z-10 object-cover object-top rounded-full"
              style={{
                width: 280,
                height: 320,
                objectPosition: "center top",
              }}
            />
            <div
              className="absolute z-20 rounded-full overflow-hidden border-2 border-white shadow-md"
              style={{
                width: 54,
                height: 54,
                top: "8%",
                right: "12%",
              }}
            >
              <img
                src={MAN_PHOTO_2}
                alt="Avatar"
                className="w-full h-full object-cover"
              />
            </div>
            <div
              className="absolute z-20 rounded-full overflow-hidden border-2 border-white shadow-md"
              style={{
                width: 44,
                height: 44,
                top: "34%",
                left: "4%",
              }}
            >
              <img
                src={MAN_PHOTO_1}
                alt="Avatar"
                className="w-full h-full object-cover"
              />
            </div>
            <div
              className="absolute z-20 flex items-center justify-center rounded-md shadow-md"
              style={{
                width: 48,
                height: 40,
                bottom: "20%",
                left: "8%",
                background: "#3ECFB2",
              }}
            >
              <MessageCircle size={22} color="white" />
            </div>
            <div
              className="absolute z-20 rounded-full"
              style={{
                width: 14,
                height: 14,
                background: "#F97316",
                top: "22%",
                left: "38%",
              }}
            />
            <div
              className="absolute z-20 rounded-full"
              style={{
                width: 18,
                height: 18,
                background: "#EC4899",
                bottom: "12%",
                right: "22%",
              }}
            />
            <div
              className="absolute z-20"
              style={{
                top: "28%",
                right: "30%",
                transform: "rotate(-20deg)",
              }}
            >
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#555"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="22" y1="2" x2="11" y2="13" />
                <polygon points="22 2 15 22 11 13 2 9 22 2" />
              </svg>
            </div>
          </div>

          <div className="flex-1 max-w-md w-full">
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 px-10 py-10">
              <div className="mb-8">
                <h1 className="text-2xl font-semibold text-gray-900 mb-1 flex items-center gap-2">
                  Welcome back <span>👋</span>
                </h1>
                <p className="text-sm text-gray-500">
                  Log in your account
                </p>
              </div>
              <form
                className="space-y-4"
                onSubmit={(e) => {
                  e.preventDefault();
                  onSignIn();
                }}
              >
                <div className="relative">
                  <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400">
                    <Mail size={16} />
                  </span>
                  <input
                    type="email"
                    placeholder="What is your e-mail?"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 rounded-md bg-gray-100 border border-transparent text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-[#094D8A] focus:bg-white transition-colors"
                  />
                </div>
                <div className="relative">
                  <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400">
                    <Lock size={16} />
                  </span>
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) =>
                      setPassword(e.target.value)
                    }
                    className="w-full pl-10 pr-10 py-3 rounded-md bg-gray-100 border border-transparent text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-[#094D8A] focus:bg-white transition-colors"
                  />
                  <button
                    type="button"
                    onClick={() =>
                      setShowPassword(!showPassword)
                    }
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    {showPassword ? (
                      <EyeOff size={16} />
                    ) : (
                      <Eye size={16} />
                    )}
                  </button>
                </div>
                <div className="flex items-center justify-between pt-1">
                  <label className="flex items-center gap-2 cursor-pointer select-none">
                    <input
                      type="checkbox"
                      checked={rememberMe}
                      onChange={(e) =>
                        setRememberMe(e.target.checked)
                      }
                      className="w-4 h-4 accent-[#094D8A] rounded"
                    />
                    <span className="text-sm text-gray-600">
                      Remember me
                    </span>
                  </label>
                  <button
                    type="button"
                    className="text-sm text-[#094D8A] hover:text-[#073A63] font-medium transition-colors"
                  >
                    Forgot password?
                  </button>
                </div>
                <button
                  type="submit"
                  className="w-full py-3 rounded-md text-white font-semibold text-sm transition-opacity hover:opacity-90 mt-2"
                  style={{
                    background:
                      "linear-gradient(90deg, #094D8A 0%, #094D8A 100%)",
                  }}
                >
                  Continue
                </button>
              </form>
              <p className="text-center text-sm text-gray-500 mt-8">
                {"Don't have an account? "}
                <button className="text-[#094D8A] hover:text-[#073A63] font-medium transition-colors">
                  Sign up
                </button>
              </p>

              {/* Quick demo */}
              <div className="mt-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex-1 h-px bg-gray-100" />
                  <span className="text-[11px] text-gray-400 font-medium whitespace-nowrap">Demo nhanh theo vai trò</span>
                  <div className="flex-1 h-px bg-gray-100" />
                </div>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { label: "Quản trị viên", icon: Shield,   bg: "#EDE9FE", color: "#7C3AED", desc: "Toàn bộ hệ thống", target: undefined          as Screen | undefined },
                    { label: "Doanh nghiệp",  icon: Building2, bg: "#DBEAFE", color: "#2563EB", desc: "Portal DN",       target: "dnDashboard"      as Screen | undefined },
                    { label: "Nhân viên",     icon: Zap,       bg: "#DCFCE7", color: "#16A34A", desc: "Portal Nhân viên",target: undefined          as Screen | undefined },
                  ].map(({ label, icon: Icon, bg, color, desc, target }) => (
                    <button
                      key={label}
                      type="button"
                      onClick={() => onSignIn(target)}
                      className="flex flex-col items-center gap-1.5 px-2 py-3 rounded-md border border-gray-100 hover:border-gray-200 hover:shadow-sm transition-all text-center"
                    >
                      <div className="w-8 h-8 rounded flex items-center justify-center" style={{ background: bg }}>
                        <Icon size={14} style={{ color }} />
                      </div>
                      <span className="text-[11px] font-semibold text-gray-700 leading-tight">{label}</span>
                      <span className="text-[10px] text-gray-400 leading-tight">{desc}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

// ─── Dashboard data ────────────────────────────────────────────────────────
const growthData = [
  { month: "T1", miniApp: 20, doanhNghiep: 35, developer: 25 },
  { month: "T2", miniApp: 35, doanhNghiep: 28, developer: 40 },
  { month: "T3", miniApp: 25, doanhNghiep: 45, developer: 30 },
  { month: "T4", miniApp: 50, doanhNghiep: 20, developer: 55 },
  { month: "T5", miniApp: 38, doanhNghiep: 60, developer: 35 },
  { month: "T6", miniApp: 60, doanhNghiep: 40, developer: 20 },
  { month: "T7", miniApp: 45, doanhNghiep: 55, developer: 45 },
  { month: "T8", miniApp: 70, doanhNghiep: 30, developer: 60 },
  { month: "T9", miniApp: 55, doanhNghiep: 65, developer: 40 },
  { month: "T10", miniApp: 80, doanhNghiep: 50, developer: 70 },
  { month: "T11", miniApp: 65, doanhNghiep: 75, developer: 55 },
  { month: "T12", miniApp: 90, doanhNghiep: 60, developer: 80 },
];

const overviewCards = [
  {
    label: "Doanh nghiệp",
    value: "+720",
    color: "#EF4444",
    barColor: "#EF4444",
    bars: [3, 5, 4, 7, 5, 8, 6, 9, 7, 10],
  },
  {
    label: "Developer",
    value: "+600",
    color: "#3B82F6",
    barColor: "#3B82F6",
    bars: [4, 6, 5, 8, 6, 7, 5, 9, 8, 10],
  },
  {
    label: "Mini App",
    value: "-10",
    color: "#10B981",
    barColor: "#10B981",
    bars: [9, 7, 8, 5, 7, 6, 8, 5, 6, 4],
  },
  {
    label: "Người dùng",
    value: "+1000",
    color: "#8B5CF6",
    barColor: "#8B5CF6",
    bars: [3, 5, 6, 8, 7, 9, 8, 10, 9, 11],
  },
];

const alertsData = [
  {
    icon: "📱",
    label: "Mini App chờ kiểm duyệt",
    count: 8,
    bg: "#FFF7ED",
    border: "#FED7AA",
  },
  {
    icon: "🏢",
    label: "Doanh nghiệp chờ phê duyệt",
    count: 12,
    bg: "#FFF7ED",
    border: "#FED7AA",
  },
  {
    icon: "👤",
    label: "Developer chờ xác minh",
    count: 3,
    bg: "#FFFBEB",
    border: "#FDE68A",
  },
];

const topMiniApps = [
  {
    rank: 1,
    name: "Số liên lạc điện tử",
    value: "20.000",
    color: "#EF4444",
  },
  {
    rank: 2,
    name: "Căng tin",
    value: "20.000",
    color: "#F97316",
  },
  {
    rank: 3,
    name: "Vệ sinh trường học",
    value: "20.000",
    color: "#3B82F6",
  },
  {
    rank: 4,
    name: "Xe đưa đón",
    value: "20.000",
    color: "#8B5CF6",
  },
  {
    rank: 5,
    name: "Chất lượng giảng dạy",
    value: "20.000",
    color: "#10B981",
  },
];

const activities = [
  {
    title: "Từ chối doanh nghiệp",
    time: "8 Phút | 3:00 SA",
    desc: "Duyệt đơn đăng ký doanh nghiệp 'Trường học liên kết phát triển liên kết'",
  },
  {
    title: "Từ chối doanh nghiệp",
    time: "8 Phút | 3:00 SA",
    desc: "Duyệt đơn đăng ký doanh nghiệp 'Trường học liên kết phát triển liên kết'",
  },
  {
    title: "Từ chối doanh nghiệp",
    time: "8 Phút | 3:00 SA",
    desc: "Duyệt đơn đăng ký doanh nghiệp 'Trường học liên kết phát triển liên kết'",
  },
  {
    title: "Từ chối doanh nghiệp",
    time: "10 Phút | 3:00 SA",
    desc: "Duyệt đơn đăng ký doanh nghiệp 'Trường học liên kết phát triển liên kết'",
  },
  {
    title: "Từ chối doanh nghiệp",
    time: "10 Phút | 3:00 SA",
    desc: "Duyệt đơn đăng ký doanh nghiệp 'Trường học liên kết phát triển liên kết'",
  },
];

const chartSeries = [
  { key: "miniApp", label: "Mini App", color: "#EC4899" },
  {
    key: "doanhNghiep",
    label: "Doanh nghiệp",
    color: "#094D8A",
  },
  { key: "developer", label: "Developer", color: "#2DD4BF" },
] as const;

type SeriesKey = (typeof chartSeries)[number]["key"];

function MiniBarChart({
  bars,
  color,
}: {
  bars: number[];
  color: string;
}) {
  const max = Math.max(...bars);
  return (
    <div className="flex items-end gap-0.5 h-10">
      {bars.map((v, i) => (
        <div
          key={i}
          className="flex-1 rounded-sm"
          style={{
            height: `${(v / max) * 100}%`,
            background: color,
            opacity: 0.85,
          }}
        />
      ))}
    </div>
  );
}

// ─── Dashboard ─────────────────────────────────────────────────────────────
function Dashboard({
  onNavigate,
}: {
  onNavigate: (s: Screen) => void;
}) {
  const [visibleLines, setVisibleLines] = useState<
    Record<SeriesKey, boolean>
  >({ miniApp: true, doanhNghiep: true, developer: true });
  const toggleLine = (key: SeriesKey) =>
    setVisibleLines((prev) => ({ ...prev, [key]: !prev[key] }));

  return (
    <div
      className="flex h-screen bg-gray-50 overflow-hidden"
      style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}
    >
      <Sidebar current="dashboard" onNavigate={onNavigate} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <TopBar title="Dashboard" />
        <div className="flex-1 overflow-y-auto px-6 py-5 space-y-5">
          {/* Overview + Alerts */}
          <div className="flex gap-4">
            <div className="flex-1">
              <h2 className="text-sm font-semibold text-gray-700 mb-3">
                Overview
              </h2>
              <div className="grid grid-cols-2 gap-3">
                {overviewCards.map((card) => (
                  <div
                    key={card.label}
                    className="bg-white rounded-md border border-gray-100 p-4 flex flex-col gap-3 shadow-sm"
                  >
                    <div className="text-xs font-medium text-gray-500">
                      {card.label}
                    </div>
                    <div className="flex items-end justify-between">
                      <span
                        className="text-xl font-semibold"
                        style={{ color: card.color }}
                      >
                        {card.value}
                      </span>
                      <div className="w-24">
                        <MiniBarChart
                          bars={card.bars}
                          color={card.barColor}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="w-72 shrink-0">
              <div className="bg-white rounded-md border border-orange-100 shadow-sm h-full flex flex-col">
                <div className="flex items-center gap-2 px-4 pt-4 pb-2 border-b border-orange-50">
                  <span className="text-orange-400">⚠️</span>
                  <span className="text-sm font-semibold text-gray-800">
                    Cảnh báo cần xử lý
                  </span>
                </div>
                <div className="px-4 py-2 text-xs text-gray-400 border-b border-gray-50">
                  Các nội dung cần xử lý
                </div>
                <div className="flex-1 divide-y divide-gray-50">
                  {alertsData.map((a, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 cursor-pointer"
                    >
                      <div
                        className="w-8 h-8 rounded flex items-center justify-center text-base shrink-0"
                        style={{
                          background: a.bg,
                          border: `1px solid ${a.border}`,
                        }}
                      >
                        {a.icon}
                      </div>
                      <span className="flex-1 text-xs text-gray-700 leading-snug">
                        {a.label}
                      </span>
                      <span className="text-sm font-semibold text-gray-800 shrink-0">
                        {a.count}
                      </span>
                      <ChevronRight
                        size={12}
                        className="text-gray-400 shrink-0"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Growth chart */}
          <div className="bg-white rounded-md border border-gray-100 shadow-sm p-5">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-sm font-semibold text-gray-800">
                Tăng trưởng hệ sinh thái
              </h2>
              <div className="flex items-center gap-4">
                {chartSeries.map(({ key, label, color }) => (
                  <label
                    key={key}
                    className="flex items-center gap-1.5 cursor-pointer select-none"
                  >
                    <span
                      className="w-4 h-4 rounded flex items-center justify-center shrink-0 transition-colors"
                      style={{
                        border: `2px solid ${color}`,
                        background: visibleLines[key]
                          ? color
                          : "transparent",
                      }}
                      onClick={() => toggleLine(key)}
                    >
                      {visibleLines[key] && (
                        <svg
                          width="9"
                          height="7"
                          viewBox="0 0 9 7"
                          fill="none"
                        >
                          <path
                            d="M1 3.5L3.5 6L8 1"
                            stroke="white"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      )}
                    </span>
                    <span className="text-xs text-gray-500">
                      {label}
                    </span>
                  </label>
                ))}
              </div>
            </div>
            <ResponsiveContainer width="100%" height={200}>
              <LineChart
                data={growthData}
                margin={{
                  top: 4,
                  right: 8,
                  left: -24,
                  bottom: 0,
                }}
              >
                <CartesianGrid
                  strokeDasharray="3 3"
                  stroke="#F3F4F6"
                />
                <XAxis
                  dataKey="month"
                  tick={{ fontSize: 10, fill: "#9CA3AF" }}
                  axisLine={false}
                  tickLine={false}
                />
                <YAxis
                  tick={{ fontSize: 10, fill: "#9CA3AF" }}
                  axisLine={false}
                  tickLine={false}
                />
                <Tooltip
                  contentStyle={{
                    fontSize: 11,
                    borderRadius: 8,
                    border: "1px solid #E5E7EB",
                  }}
                />
                {visibleLines.miniApp && (
                  <Line
                    type="monotone"
                    dataKey="miniApp"
                    stroke="#EC4899"
                    strokeWidth={2}
                    dot={false}
                  />
                )}
                {visibleLines.doanhNghiep && (
                  <Line
                    type="monotone"
                    dataKey="doanhNghiep"
                    stroke="#094D8A"
                    strokeWidth={2}
                    dot={false}
                  />
                )}
                {visibleLines.developer && (
                  <Line
                    type="monotone"
                    dataKey="developer"
                    stroke="#2DD4BF"
                    strokeWidth={2}
                    dot={false}
                  />
                )}
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Top 5 + Activity */}
          <div className="flex gap-4">
            <div className="flex-1 bg-white rounded-md border border-gray-100 shadow-sm p-5">
              <div className="flex items-center gap-2 mb-1">
                <TrendingUp
                  size={15}
                  className="text-[#094D8A]"
                />
                <h2 className="text-sm font-semibold text-gray-800">
                  Top 5 Mini App
                </h2>
              </div>
              <p className="text-xs text-gray-400 mb-4">
                Xếp hạng theo số lượng người dùng
              </p>
              <div className="space-y-3">
                {topMiniApps.map((app) => (
                  <div
                    key={app.rank}
                    className="flex items-center gap-3"
                  >
                    <span
                      className="w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-semibold text-white shrink-0"
                      style={{ background: app.color }}
                    >
                      {app.rank}
                    </span>
                    <div className="w-7 h-7 rounded bg-gray-100 flex items-center justify-center shrink-0">
                      <Smartphone
                        size={13}
                        className="text-gray-400"
                      />
                    </div>
                    <span className="flex-1 text-xs text-gray-700">
                      {app.name}
                    </span>
                    <div className="text-right">
                      <div className="text-sm font-semibold text-gray-800">
                        {app.value}
                      </div>
                      <div className="text-[10px] text-gray-400">
                        ngàn đồng
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex-1 bg-white rounded-md border border-gray-100 shadow-sm p-5">
              <h2 className="text-sm font-semibold text-gray-800 mb-4">
                Hoạt động gần đây
              </h2>
              <div className="space-y-3">
                {activities.map((a, i) => (
                  <div key={i} className="flex gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#094D8A] mt-1.5 shrink-0" />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2 mb-0.5">
                        <span className="text-xs font-semibold text-gray-800 truncate">
                          {a.title}
                        </span>
                        <span className="text-[10px] text-gray-400 shrink-0 whitespace-nowrap">
                          {a.time}
                        </span>
                      </div>
                      <p className="text-[10px] text-gray-400 leading-snug line-clamp-2">
                        {a.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Doanh Nghiep Role Dashboard ───────────────────────────────────────────
const DN_STAT_CARDS = [
  { label: "Mini App",          value: "18",          icon: Smartphone,   color: "#094D8A", bg: "#EEF2FF" },
  { label: "API",               value: "46",          icon: Zap,          color: "#F59E0B", bg: "#FEF3C7" },
  { label: "Đơn vị sử dụng",   value: "326",         icon: Building2,    color: "#10B981", bg: "#D1FAE5" },
  { label: "Người dùng",        value: "528.614",     icon: Users,        color: "#3B82F6", bg: "#DBEAFE" },
  { label: "API Calls hôm nay", value: "1.248.356",   icon: Activity,     color: "#8B5CF6", bg: "#EDE9FE" },
];

const DN_MINIAPP_TOP = [
  { rank: 1, name: "Sổ liên lạc", units: 326 },
  { rank: 2, name: "Điểm danh",   units: 285 },
  { rank: 3, name: "Học phí",     units: 190 },
  { rank: 4, name: "Khảo sát",    units: 122 },
];

const DN_VERSION_ALERT = {
  name:    "Sổ liên lạc",
  version: "v2.1.0",
  pending: 84,
};

const DN_API_TOP = [
  { endpoint: "GET /students", requests: "485.326 requests" },
  { endpoint: "GET /profile",  requests: "322.185 requests" },
];

const DN_API_ERRORS = [
  { endpoint: "POST /attendance", errors: 248 },
  { endpoint: "GET /grade",       errors: 115 },
];

const DN_VERSION_TABLE = [
  { name: "Sổ liên lạc", version: "v2.1.0", updated: 242, pending: 84, percent: 74  },
  { name: "Điểm danh",   version: "v1.5.0", updated: 280, pending: 5,  percent: 98  },
  { name: "Học phí",     version: "v1.0.3", updated: 190, pending: 0,  percent: 100 },
];

const DN_RECENT_ACTIVITY = [
  { time: "10:25", text: 'Mini App "Sổ liên lạc" được phát hành phiên bản v2.1.0'    },
  { time: "09:42", text: 'Đơn vị "THPT Lê Quý Đôn" cập nhật Mini App Sổ liên lạc'   },
  { time: "09:10", text: 'API "GET /students" đạt 100.000 requests'                   },
  { time: "08:25", text: 'Đơn vị "THCS Nguyễn Du" cài đặt Mini App Học phí'          },
  { time: "08:05", text: 'API "POST /attendance" ghi nhận tỷ lệ lỗi tăng cao'        },
];

const DN_ACTION_ITEMS = [
  "Có 2 Mini App đang ở trạng thái Nháp.",
  "Có 84 đơn vị chưa cập nhật Mini App Sổ liên lạc lên phiên bản mới.",
  "API POST /attendance có tỷ lệ lỗi cao.",
  "Có 3 API đang chưa được sử dụng bởi Mini App nào.",
];

const RANK_COLORS = ["#094D8A", "#10B981", "#F59E0B", "#3B82F6"];

function DoanhNghiepDashboard({
  onNavigate,
}: {
  onNavigate: (s: Screen) => void;
}) {
  return (
    <div
      className="flex h-screen bg-gray-50 overflow-hidden"
      style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}
    >
      <SidebarDN current="dnDashboard" onNavigate={onNavigate} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <TopBar title="Dashboard" />
        <div className="flex-1 overflow-y-auto px-6 py-5 space-y-6">

          {/* ── TỔNG QUAN ────────────────────────────────────────────── */}
          <div>
            <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">
              Tổng quan doanh nghiệp
            </h2>
            <div className="grid grid-cols-5 gap-3">
              {DN_STAT_CARDS.map(({ label, value, icon: Icon, color, bg }) => (
                <div
                  key={label}
                  className="bg-white rounded-md border border-gray-100 shadow-sm p-4 flex flex-col gap-3"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-medium text-gray-500">{label}</span>
                    <div
                      className="w-8 h-8 rounded flex items-center justify-center shrink-0"
                      style={{ background: bg }}
                    >
                      <Icon size={15} style={{ color }} />
                    </div>
                  </div>
                  <span
                    className="text-2xl font-bold"
                    style={{ color }}
                  >
                    {value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* ── MINI APP ─────────────────────────────────────────────── */}
          <div>
            <h2 className="text-sm font-semibold text-gray-700 mb-3 flex items-center gap-2">
              <Smartphone size={14} className="text-[#094D8A]" />
              Mini App
            </h2>
            <div className="grid grid-cols-2 gap-4">
              {/* Top installed */}
              <div className="bg-white rounded-md border border-gray-100 shadow-sm">
                <div className="px-5 py-4 border-b border-gray-50">
                  <span className="text-sm font-semibold text-gray-700">
                    Mini App được cài nhiều nhất
                  </span>
                </div>
                <div className="px-5 py-3 divide-y divide-gray-50">
                  {DN_MINIAPP_TOP.map(({ rank, name, units }) => (
                    <div
                      key={rank}
                      className="flex items-center gap-3 py-2.5"
                    >
                      <span
                        className="w-5 h-5 rounded-full text-[10px] font-bold text-white flex items-center justify-center shrink-0"
                        style={{ background: RANK_COLORS[rank - 1] }}
                      >
                        {rank}
                      </span>
                      <span className="flex-1 text-sm text-gray-700">{name}</span>
                      <span className="text-sm font-semibold text-gray-800">
                        {units.toLocaleString()} đơn vị
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Version alert */}
              <div className="bg-white rounded-md border border-orange-100 shadow-sm">
                <div className="px-5 py-4 border-b border-orange-50">
                  <span className="text-sm font-semibold text-gray-700">
                    Phiên bản cần cập nhật
                  </span>
                </div>
                <div className="px-5 py-4 flex flex-col gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded bg-orange-50 flex items-center justify-center">
                      <Package size={16} className="text-orange-500" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-gray-800">
                        {DN_VERSION_ALERT.name}
                      </div>
                      <div className="text-xs text-gray-500">
                        Phiên bản mới: {DN_VERSION_ALERT.version}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 bg-orange-50 rounded px-4 py-3">
                    <AlertTriangle size={14} className="text-orange-500 shrink-0" />
                    <span className="text-xs text-orange-700">
                      Chưa cập nhật:{" "}
                      <span className="font-bold">{DN_VERSION_ALERT.pending} đơn vị</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ── API ──────────────────────────────────────────────────── */}
          <div>
            <h2 className="text-sm font-semibold text-gray-700 mb-3 flex items-center gap-2">
              <Zap size={14} className="text-yellow-500" />
              API
            </h2>
            <div className="grid grid-cols-2 gap-4">
              {/* Top API */}
              <div className="bg-white rounded-md border border-gray-100 shadow-sm">
                <div className="px-5 py-4 border-b border-gray-50">
                  <span className="text-sm font-semibold text-gray-700">
                    API sử dụng nhiều nhất
                  </span>
                </div>
                <div className="px-5 py-3 divide-y divide-gray-50">
                  {DN_API_TOP.map(({ endpoint, requests }) => (
                    <div key={endpoint} className="py-3">
                      <div className="text-sm font-mono font-semibold text-[#094D8A]">
                        {endpoint}
                      </div>
                      <div className="text-xs text-gray-500 mt-0.5">{requests}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* API errors */}
              <div className="bg-white rounded-md border border-red-100 shadow-sm">
                <div className="px-5 py-4 border-b border-red-50">
                  <span className="text-sm font-semibold text-gray-700">
                    API có lỗi nhiều nhất hôm nay
                  </span>
                </div>
                <div className="px-5 py-3 divide-y divide-gray-50">
                  {DN_API_ERRORS.map(({ endpoint, errors }) => (
                    <div key={endpoint} className="flex items-center justify-between py-3">
                      <span className="text-sm font-mono font-semibold text-gray-700">
                        {endpoint}
                      </span>
                      <span className="text-sm font-bold text-red-500">
                        {errors} lỗi
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* ── PHIÊN BẢN MINI APP ───────────────────────────────────── */}
          <div>
            <h2 className="text-sm font-semibold text-gray-700 mb-3 flex items-center gap-2">
              <Package size={14} className="text-[#094D8A]" />
              Phiên bản Mini App
            </h2>
            <div className="bg-white rounded-md border border-gray-100 shadow-sm overflow-hidden">
              <table className="w-full text-xs">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-100 text-gray-500 font-semibold">
                    <th className="text-left px-5 py-3">Mini App</th>
                    <th className="text-left px-4 py-3">Phiên bản mới</th>
                    <th className="text-right px-4 py-3">Đơn vị đã cập nhật</th>
                    <th className="text-right px-4 py-3">Chưa cập nhật</th>
                    <th className="text-left px-4 py-3 w-40">Tiến độ</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {DN_VERSION_TABLE.map(({ name, version, updated, pending, percent }) => (
                    <tr key={name} className="hover:bg-gray-50">
                      <td className="px-5 py-3 text-sm font-medium text-gray-800">{name}</td>
                      <td className="px-4 py-3">
                        <span className="bg-[#D1E9FF] text-[#073A63] font-semibold px-2 py-0.5 rounded">
                          {version}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-right text-gray-700 font-semibold">
                        {updated}
                      </td>
                      <td className="px-4 py-3 text-right">
                        <span
                          className={`font-semibold ${
                            pending === 0 ? "text-green-600" : "text-orange-500"
                          }`}
                        >
                          {pending}
                        </span>
                      </td>
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-2">
                          <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                            <div
                              className="h-full rounded-full transition-all"
                              style={{
                                width: `${percent}%`,
                                background: percent === 100 ? "#10B981" : "#094D8A",
                              }}
                            />
                          </div>
                          <span
                            className="text-[11px] font-bold shrink-0"
                            style={{ color: percent === 100 ? "#10B981" : "#094D8A" }}
                          >
                            {percent}%
                          </span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* ── 2-COLUMN: ACTIVITY + ACTION ITEMS ───────────────────── */}
          <div className="grid grid-cols-2 gap-4 pb-4">
            {/* Hoạt động gần đây */}
            <div>
              <h2 className="text-sm font-semibold text-gray-700 mb-3 flex items-center gap-2">
                <Clock size={14} className="text-[#094D8A]" />
                Hoạt động gần đây
              </h2>
              <div className="bg-white rounded-md border border-gray-100 shadow-sm px-5 py-4 space-y-0">
                {DN_RECENT_ACTIVITY.map(({ time, text }, i) => (
                  <div key={i} className="flex gap-3 py-3 border-b border-gray-50 last:border-0">
                    <span className="text-xs text-gray-400 shrink-0 pt-0.5 w-10">{time}</span>
                    <span className="text-xs text-gray-700 leading-relaxed">{text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Cần xử lý */}
            <div>
              <h2 className="text-sm font-semibold text-gray-700 mb-3 flex items-center gap-2">
                <AlertTriangle size={14} className="text-orange-500" />
                Cần xử lý
              </h2>
              <div className="bg-white rounded-md border border-orange-100 shadow-sm px-5 py-4 space-y-3">
                {DN_ACTION_ITEMS.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 bg-orange-50 rounded px-4 py-3"
                  >
                    <AlertTriangle
                      size={14}
                      className="text-orange-500 shrink-0 mt-0.5"
                    />
                    <span className="text-xs text-orange-800 leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── DN Mini App Screen ────────────────────────────────────────────────────
interface DNMiniAppListRow {
  appId: string;
  ten: string;
  danhMuc: string;
  phienBan: string;
  trangThai: MiniAppGlobalStatus;
  donViSuDung: number;
  luotCaiDat: number;
}

const DN_MA_LIST_DATA: DNMiniAppListRow[] = [
  { appId: "APP-000001", ten: "Sổ liên lạc điện tử",  danhMuc: "Giáo dục",  phienBan: "v2.3.0", trangThai: "Đã xuất bản", donViSuDung: 326, luotCaiDat: 48200 },
  { appId: "APP-000002", ten: "Xe đưa đón học sinh",   danhMuc: "Giáo dục",  phienBan: "v1.8.0", trangThai: "Đã xuất bản", donViSuDung: 285, luotCaiDat: 32100 },
  { appId: "APP-000007", ten: "Điểm danh thông minh",  danhMuc: "Giáo dục",  phienBan: "v4.0.0", trangThai: "Đã xuất bản", donViSuDung: 0,   luotCaiDat: 0     },
  { appId: "APP-000004", ten: "Khảo sát phụ huynh",    danhMuc: "Tiện ích",  phienBan: "v0.8.0", trangThai: "Bản nháp",    donViSuDung: 0,   luotCaiDat: 0     },
  { appId: "APP-000010", ten: "Thư viện học liệu",     danhMuc: "Giáo dục",  phienBan: "v1.0.0", trangThai: "Bản nháp",    donViSuDung: 0,   luotCaiDat: 0     },
  { appId: "APP-000006", ten: "Tuyển sinh trực tuyến", danhMuc: "Tiện ích",  phienBan: "v1.5.0", trangThai: "Từ chối",     donViSuDung: 0,   luotCaiDat: 0     },
  { appId: "APP-000011", ten: "Cổng thông tin phụ huynh", danhMuc: "Dịch vụ", phienBan: "v0.5.0", trangThai: "Chờ duyệt",  donViSuDung: 0,   luotCaiDat: 0     },
  { appId: "APP-000012", ten: "Quản lý học phí online", danhMuc: "Tài chính", phienBan: "v1.1.0", trangThai: "Chờ duyệt",  donViSuDung: 0,   luotCaiDat: 0     },
];

const DN_MA_TABS: { label: string; status: MiniAppGlobalStatus | "all" }[] = [
  { label: "Tất cả",    status: "all"         },
  { label: "Published", status: "Đã xuất bản" },
  { label: "Chờ duyệt", status: "Chờ duyệt"   },
  { label: "Draft",     status: "Bản nháp"     },
  { label: "Từ chối",   status: "Từ chối"      },
];

const DN_MA_DANH_MUC = ["Tất cả danh mục", "Giáo dục", "Tiện ích", "Tài chính", "Dịch vụ"];

function DNMiniAppListActions({
  row,
  onView,
  onStatusChange,
  onDelete,
}: {
  row: DNMiniAppListRow;
  onView: () => void;
  onStatusChange: (next: MiniAppGlobalStatus) => void;
  onDelete: () => void;
}) {
  const { trangThai, donViSuDung } = row;
  const btn = (
    label: string,
    onClick: () => void,
    cls: string,
    Icon?: React.ElementType,
  ) => (
    <button
      onClick={onClick}
      className={`flex items-center gap-1 px-2.5 py-1 rounded text-[11px] font-medium border transition-colors whitespace-nowrap ${cls}`}
    >
      {Icon && <Icon size={10} />}
      {label}
    </button>
  );

  if (trangThai === "Đã xuất bản") {
    return (
      <div className="flex items-center justify-center gap-1.5 flex-wrap">
        {btn("Xem", onView, "border-gray-300 text-gray-600 bg-white hover:bg-gray-50")}
        {btn("Upload Version", () => {}, "border-[#094D8A] text-[#094D8A] bg-[#D1E9FF] hover:bg-[#D1E9FF]", Upload)}
        {donViSuDung === 0 &&
          btn("Thu hồi", () => onStatusChange("Bản nháp"), "border-orange-300 text-orange-600 bg-orange-50 hover:bg-orange-100", RotateCcw)}
      </div>
    );
  }

  if (trangThai === "Bản nháp") {
    return (
      <div className="flex items-center justify-center gap-1.5 flex-wrap">
        {btn("Xem", onView, "border-gray-300 text-gray-600 bg-white hover:bg-gray-50")}
        {btn("Chỉnh sửa", () => {}, "border-blue-300 text-blue-600 bg-blue-50 hover:bg-blue-100", Pencil)}
        {btn("Gửi duyệt", () => onStatusChange("Chờ duyệt"), "border-green-400 text-green-600 bg-green-50 hover:bg-green-100", Send)}
        {btn("Xóa", onDelete, "border-red-300 text-red-500 bg-red-50 hover:bg-red-100", Trash2)}
      </div>
    );
  }

  if (trangThai === "Từ chối") {
    return (
      <div className="flex items-center justify-center gap-1.5 flex-wrap">
        {btn("Xem lý do", onView, "border-red-300 text-red-500 bg-red-50 hover:bg-red-100")}
        {btn("Chỉnh sửa", () => {}, "border-blue-300 text-blue-600 bg-blue-50 hover:bg-blue-100", Pencil)}
        {btn("Gửi lại", () => onStatusChange("Chờ duyệt"), "border-green-400 text-green-600 bg-green-50 hover:bg-green-100", Send)}
      </div>
    );
  }

  if (trangThai === "Chờ duyệt") {
    return (
      <div className="flex items-center justify-center gap-1.5">
        {btn("Xem", onView, "border-gray-300 text-gray-600 bg-white hover:bg-gray-50")}
        {btn("Rút yêu cầu", () => onStatusChange("Bản nháp"), "border-orange-300 text-orange-600 bg-orange-50 hover:bg-orange-100", RotateCcw)}
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center">
      {btn("Xem", onView, "border-gray-300 text-gray-600 bg-white hover:bg-gray-50")}
    </div>
  );
}

function DNMiniAppScreen({
  onNavigate,
  onViewMiniApp,
}: {
  onNavigate: (s: Screen) => void;
  onViewMiniApp: (appId: string) => void;
}) {
  const [activeTab, setActiveTab] = useState<MiniAppGlobalStatus | "all">("all");
  const [search, setSearch] = useState("");
  const [danhMucFilter, setDanhMucFilter] = useState("Tất cả danh mục");
  const [page, setPage] = useState(1);
  const rowsPerPage = 8;
  const [listData, setListData] = useState<DNMiniAppListRow[]>(DN_MA_LIST_DATA);

  const handleStatusChange = (appId: string, next: MiniAppGlobalStatus) => {
    setListData((prev) =>
      prev.map((r) => (r.appId === appId ? { ...r, trangThai: next } : r))
    );
    setPage(1);
  };

  const handleDelete = (appId: string) => {
    setListData((prev) => prev.filter((r) => r.appId !== appId));
    setPage(1);
  };

  const counts: Record<MiniAppGlobalStatus | "all", number> = {
    all:           listData.length,
    "Đã xuất bản": listData.filter((d) => d.trangThai === "Đã xuất bản").length,
    "Chờ duyệt":   listData.filter((d) => d.trangThai === "Chờ duyệt").length,
    "Bản nháp":    listData.filter((d) => d.trangThai === "Bản nháp").length,
    "Từ chối":     listData.filter((d) => d.trangThai === "Từ chối").length,
    "Tạm ẩn":      listData.filter((d) => d.trangThai === "Tạm ẩn").length,
  };

  const totalDonViSuDung = listData.reduce((s, r) => s + r.donViSuDung, 0);
  const totalLuotCaiDat  = listData.reduce((s, r) => s + r.luotCaiDat, 0);

  const filtered = listData.filter((r) => {
    const matchTab    = activeTab === "all" || r.trangThai === activeTab;
    const matchSearch = search === "" || r.ten.toLowerCase().includes(search.toLowerCase());
    const matchDM     = danhMucFilter === "Tất cả danh mục" || r.danhMuc === danhMucFilter;
    return matchTab && matchSearch && matchDM;
  });

  const totalPages = Math.max(1, Math.ceil(filtered.length / rowsPerPage));
  const paged = filtered.slice((page - 1) * rowsPerPage, page * rowsPerPage);

  return (
    <div
      className="flex h-screen bg-gray-50 overflow-hidden"
      style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}
    >
      <SidebarDN current="dnMiniApp" onNavigate={onNavigate} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <TopBar title="Mini App" />
        <div className="flex-1 overflow-y-auto px-6 py-5 space-y-4">

          {/* Page header */}
          <div className="flex items-start justify-between">
            <div>
              <h2 className="text-xl font-semibold text-gray-900">Mini App</h2>
              <p className="text-xs text-gray-400 mt-0.5">Quản lý Mini App của doanh nghiệp</p>
            </div>
            <button
              onClick={() => onNavigate("dnCreateMiniApp")}
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-md text-xs font-semibold text-white transition-opacity hover:opacity-90 whitespace-nowrap"
              style={{ background: "linear-gradient(90deg,#094D8A 0%,#094D8A 100%)" }}
            >
              <span className="text-base leading-none">+</span> Tạo Mini App
            </button>
          </div>

          {/* KPI cards */}
          <div className="grid grid-cols-4 gap-4">
            {[
              { label: "Mini App",         value: listData.length,                     color: "#1F2937", icon: Smartphone  },
              { label: "Business API",     value: 46,                                  color: "#D97706", icon: Zap         },
              { label: "Đơn vị sử dụng",  value: totalDonViSuDung,                    color: "#2563EB", icon: Building2   },
              { label: "Lượt cài đặt",    value: totalLuotCaiDat,                     color: "#16A34A", icon: Download    },
            ].map(({ label, value, color, icon: Icon }) => (
              <div key={label} className="bg-white rounded-lg border border-gray-100 shadow-sm px-5 py-4 flex items-center gap-4">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                  style={{ background: color + "18" }}
                >
                  <Icon size={18} style={{ color }} />
                </div>
                <div>
                  <div className="text-xs text-gray-500 mb-1">{label}</div>
                  <div className="text-2xl font-semibold" style={{ color }}>
                    {value.toLocaleString("vi-VN")}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Search + Filters */}
          <div className="flex items-center gap-3">
            <div className="relative flex-1">
              <Search size={13} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Tìm kiếm theo tên Mini App"
                value={search}
                onChange={(e) => { setSearch(e.target.value); setPage(1); }}
                className="w-full pl-8 pr-3 py-2 text-xs border border-gray-200 rounded-md bg-white placeholder-gray-400 focus:outline-none focus:border-[#094D8A] transition-colors"
              />
            </div>
            <select
              value={danhMucFilter}
              onChange={(e) => { setDanhMucFilter(e.target.value); setPage(1); }}
              className="text-xs border border-gray-200 rounded-md px-3 py-2 bg-white text-gray-600 focus:outline-none focus:border-[#094D8A] cursor-pointer"
            >
              {DN_MA_DANH_MUC.map((d) => <option key={d}>{d}</option>)}
            </select>
          </div>

          {/* Table card */}
          <div className="bg-white rounded-lg border border-gray-100 shadow-sm">
            {/* Status tabs */}
            <div className="flex items-center gap-0 px-4 pt-3 border-b border-gray-100 overflow-x-auto">
              {DN_MA_TABS.map((t) => {
                const cnt = counts[t.status];
                const active = activeTab === t.status;
                return (
                  <button
                    key={String(t.status)}
                    onClick={() => { setActiveTab(t.status); setPage(1); }}
                    className={`px-3 py-2 text-xs font-medium whitespace-nowrap border-b-2 transition-colors ${
                      active
                        ? "border-[#094D8A] text-[#094D8A]"
                        : "border-transparent text-gray-500 hover:text-gray-700"
                    }`}
                  >
                    {t.label}{" "}
                    <span className={`ml-1 ${active ? "text-[#094D8A]" : "text-gray-400"}`}>
                      ({cnt})
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Table */}
            <table className="w-full text-xs">
              <thead>
                <tr className="border-b border-gray-100 bg-gray-50/60">
                  <th className="text-left px-4 py-3 text-gray-500 font-semibold w-10">STT</th>
                  <th className="text-left px-4 py-3 text-gray-500 font-semibold">MINI APP</th>
                  <th className="text-center px-4 py-3 text-gray-500 font-semibold w-24">VERSION</th>
                  <th className="text-center px-4 py-3 text-gray-500 font-semibold w-28">ĐƠN VỊ SỬ DỤNG</th>
                  <th className="text-center px-4 py-3 text-gray-500 font-semibold w-32">TRẠNG THÁI</th>
                  <th className="text-center px-4 py-3 text-gray-500 font-semibold w-52">THAO TÁC</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {paged.map((row, idx) => {
                  const sc = MA_STATUS_CFG[row.trangThai];
                  return (
                    <tr key={row.appId} className="hover:bg-gray-50/60 transition-colors">
                      <td className="px-4 py-3.5 text-gray-500">
                        {(page - 1) * rowsPerPage + idx + 1}
                      </td>
                      <td className="px-4 py-3.5">
                        <div className="flex items-center gap-2.5">
                          <div className="w-7 h-7 rounded-md bg-[#D1E9FF] flex items-center justify-center shrink-0">
                            <Smartphone size={13} className="text-[#094D8A]" />
                          </div>
                          <div>
                            <div className="font-semibold text-gray-800">{row.ten}</div>
                            <div className="text-gray-400 text-[11px] mt-0.5">{row.danhMuc}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-3.5 text-center text-gray-600 font-mono">
                        {row.phienBan}
                      </td>
                      <td className="px-4 py-3.5 text-center">
                        <span
                          className={`text-sm font-semibold ${
                            row.donViSuDung > 0 ? "text-blue-600" : "text-gray-400"
                          }`}
                        >
                          {row.donViSuDung.toLocaleString("vi-VN")}
                        </span>
                      </td>
                      <td className="px-4 py-3.5 text-center">
                        <span
                          className="inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-medium"
                          style={{ color: sc.color, background: sc.bg }}
                        >
                          {sc.label}
                        </span>
                      </td>
                      <td className="px-4 py-3.5">
                        <DNMiniAppListActions
                          row={row}
                          onView={() => onViewMiniApp(row.appId)}
                          onStatusChange={(next) => handleStatusChange(row.appId, next)}
                          onDelete={() => handleDelete(row.appId)}
                        />
                      </td>
                    </tr>
                  );
                })}
                {paged.length === 0 && (
                  <tr>
                    <td colSpan={6} className="px-4 py-10 text-center text-gray-400">
                      Không có dữ liệu
                    </td>
                  </tr>
                )}
              </tbody>
            </table>

            {/* Pagination */}
            <div className="flex items-center justify-between px-4 py-3 border-t border-gray-100">
              <span className="text-xs text-gray-400">
                Hiển thị{" "}
                {filtered.length === 0
                  ? 0
                  : (page - 1) * rowsPerPage + 1}
                –{Math.min(page * rowsPerPage, filtered.length)} / {filtered.length} Mini App
              </span>
              <div className="flex items-center gap-1">
                <button
                  onClick={() => setPage((p) => Math.max(1, p - 1))}
                  disabled={page === 1}
                  className="w-7 h-7 flex items-center justify-center rounded border border-gray-200 text-gray-500 hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  <ChevronLeft size={12} />
                </button>
                {Array.from({ length: Math.min(totalPages, 3) }, (_, i) => i + 1).map((p) => (
                  <button
                    key={p}
                    onClick={() => setPage(p)}
                    className={`w-7 h-7 flex items-center justify-center rounded text-xs font-medium transition-colors ${
                      p === page
                        ? "bg-[#094D8A] text-white"
                        : "border border-gray-200 text-gray-600 hover:bg-gray-50"
                    }`}
                  >
                    {p}
                  </button>
                ))}
                {totalPages > 3 && (
                  <span className="px-1 text-gray-400 text-xs">...</span>
                )}
                {totalPages > 3 && (
                  <button
                    onClick={() => setPage(totalPages)}
                    className={`w-7 h-7 flex items-center justify-center rounded text-xs font-medium transition-colors ${
                      page === totalPages
                        ? "bg-[#094D8A] text-white"
                        : "border border-gray-200 text-gray-600 hover:bg-gray-50"
                    }`}
                  >
                    {totalPages}
                  </button>
                )}
                <button
                  onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                  disabled={page === totalPages}
                  className="w-7 h-7 flex items-center justify-center rounded border border-gray-200 text-gray-500 hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  <ChevronRight size={12} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Doanh Nghiep data ─────────────────────────────────────────────────────
type TrangThai =
  | "Hoạt động"
  | "Chờ duyệt"
  | "Tạm khóa"
  | "Ngừng hoạt động";

interface DoanhNghiepRow {
  id: number;
  ten: string;
  mst: string;
  thanhVien: number;
  miniApp: number;
  daPublish: number;
  nguoiDung: number;
  thamGia: string;
  lanCuoiHoatDong: string;
  trangThai: TrangThai;
  moTa: string;
  loaiHinh: string;
  website: string;
  nguoiDaiDien: string;
  email: string;
  sdt: string;
  diaChi: string;
}

const DN_DATA: DoanhNghiepRow[] = [
  {
    id: 1, ten: "Công ty Cổ phần Công nghệ XYZ", mst: "0101234567",
    thanhVien: 15, miniApp: 8, daPublish: 5, nguoiDung: 2500,
    thamGia: "12/05/2023", lanCuoiHoatDong: "24/06/2026 08:32", trangThai: "Hoạt động",
    moTa: "Chuyên cung cấp giải pháp phần mềm và tích hợp hệ thống chuyển đổi số cho doanh nghiệp vừa và nhỏ.",
    loaiHinh: "Công ty cổ phần", website: "https://xyz-tech.vn",
    nguoiDaiDien: "Nguyễn Văn A", email: "contact@xyz-tech.vn", sdt: "0901234567",
    diaChi: "Tầng 15, Tòa nhà Innovation, Quận Cầu Giấy, Hà Nội",
  },
  {
    id: 2, ten: "Tập đoàn Viễn thông ABC", mst: "0309785541",
    thanhVien: 42, miniApp: 24, daPublish: 18, nguoiDung: 18400,
    thamGia: "15/05/2023", lanCuoiHoatDong: "25/06/2026 06:14", trangThai: "Hoạt động",
    moTa: "Tập đoàn viễn thông hàng đầu Việt Nam, cung cấp hạ tầng kết nối và dịch vụ số trên toàn quốc.",
    loaiHinh: "Tập đoàn", website: "https://abc-telecom.vn",
    nguoiDaiDien: "Trần Thị B", email: "info@abc-telecom.vn", sdt: "0287654321",
    diaChi: "268 Lý Thường Kiệt, Quận 10, TP. Hồ Chí Minh",
  },
  {
    id: 3, ten: "Công ty TNHH Phần mềm 123", mst: "0407122234",
    thanhVien: 6, miniApp: 2, daPublish: 0, nguoiDung: 0,
    thamGia: "18/05/2023", lanCuoiHoatDong: "20/06/2026 14:05", trangThai: "Chờ duyệt",
    moTa: "Startup phát triển các ứng dụng di động và giải pháp quản lý doanh nghiệp cho thị trường SME.",
    loaiHinh: "Công ty TNHH", website: "https://phanmem123.vn",
    nguoiDaiDien: "Lê Văn C", email: "hello@phanmem123.vn", sdt: "0933112233",
    diaChi: "25 Nguyễn Huệ, Quận 1, TP. Hồ Chí Minh",
  },
  {
    id: 4, ten: "Hợp tác xã Công nghệ Mới", mst: "0505566778",
    thanhVien: 3, miniApp: 1, daPublish: 1, nguoiDung: 320,
    thamGia: "20/05/2023", lanCuoiHoatDong: "10/05/2026 09:47", trangThai: "Tạm khóa",
    moTa: "Đơn vị chuyên nghiên cứu và ứng dụng công nghệ mới vào sản xuất nông nghiệp và thương mại điện tử.",
    loaiHinh: "Hợp tác xã", website: "https://htxcongnghe.vn",
    nguoiDaiDien: "Phạm Thị D", email: "lienhe@htxcongnghe.vn", sdt: "0911223344",
    diaChi: "12 Trần Phú, TP. Đà Lạt, Lâm Đồng",
  },
  {
    id: 5, ten: "Công ty TNHH Giáo dục Thông minh", mst: "0612345678",
    thanhVien: 28, miniApp: 12, daPublish: 9, nguoiDung: 7800,
    thamGia: "22/05/2023", lanCuoiHoatDong: "25/06/2026 07:58", trangThai: "Hoạt động",
    moTa: "Phát triển nền tảng học tập số và các công cụ quản lý trường học thông minh cho hệ sinh thái giáo dục Việt Nam.",
    loaiHinh: "Công ty TNHH", website: "https://edusmart.vn",
    nguoiDaiDien: "Hoàng Văn E", email: "support@edusmart.vn", sdt: "0245678901",
    diaChi: "88 Láng Hạ, Quận Đống Đa, Hà Nội",
  },
  {
    id: 6, ten: "Startup AI Việt Nam", mst: "0798765432",
    thanhVien: 10, miniApp: 5, daPublish: 3, nguoiDung: 1100,
    thamGia: "25/05/2023", lanCuoiHoatDong: "18/06/2026 11:30", trangThai: "Chờ duyệt",
    moTa: "Đơn vị tiên phong ứng dụng trí tuệ nhân tạo vào phân tích dữ liệu và tự động hóa quy trình kinh doanh.",
    loaiHinh: "Công ty cổ phần", website: "https://aivietnam.io",
    nguoiDaiDien: "Vũ Thị F", email: "contact@aivietnam.io", sdt: "0366778899",
    diaChi: "Tầng 8, Toà nhà FPT, Quận Nam Từ Liêm, Hà Nội",
  },
  {
    id: 7, ten: "Công ty CP Dịch vụ Số", mst: "0811223344",
    thanhVien: 55, miniApp: 30, daPublish: 22, nguoiDung: 12000,
    thamGia: "01/06/2023", lanCuoiHoatDong: "02/01/2026 16:20", trangThai: "Ngừng hoạt động",
    moTa: "Cung cấp dịch vụ chuyển đổi số toàn diện, từ tư vấn chiến lược đến triển khai hạ tầng công nghệ thông tin.",
    loaiHinh: "Công ty cổ phần", website: "https://dichvuso.vn",
    nguoiDaiDien: "Đinh Văn G", email: "cskh@dichvuso.vn", sdt: "0281234567",
    diaChi: "102 Nguyễn Văn Linh, Quận 7, TP. Hồ Chí Minh",
  },
  {
    id: 8, ten: "Tổng công ty Viễn thông Quốc gia", mst: "0987654321",
    thanhVien: 200, miniApp: 80, daPublish: 65, nguoiDung: 95000,
    thamGia: "05/06/2023", lanCuoiHoatDong: "25/06/2026 09:01", trangThai: "Hoạt động",
    moTa: "Doanh nghiệp nhà nước chủ lực trong lĩnh vực viễn thông, cung cấp đa dạng dịch vụ từ internet đến truyền hình số trên toàn quốc.",
    loaiHinh: "Tổng công ty nhà nước", website: "https://vntelco.vn",
    nguoiDaiDien: "Nguyễn Thị H", email: "contact@vntelco.vn", sdt: "02433445566",
    diaChi: "57 Huỳnh Thúc Kháng, Quận Đống Đa, Hà Nội",
  },
];

const STATUS_CONFIG: Record<
  TrangThai,
  { color: string; bg: string; label: string }
> = {
  "Hoạt động": {
    color: "#16A34A",
    bg: "#DCFCE7",
    label: "Hoạt động",
  },
  "Chờ duyệt": {
    color: "#D97706",
    bg: "#FEF3C7",
    label: "Chờ duyệt",
  },
  "Tạm khóa": {
    color: "#2563EB",
    bg: "#DBEAFE",
    label: "Tạm khóa",
  },
  "Ngừng hoạt động": {
    color: "#374151",
    bg: "#E5E7EB",
    label: "Ngừng hoạt động",
  },
};

const TABS: { label: string; status: TrangThai | "all" }[] = [
  { label: "Tất cả", status: "all" },
  { label: "Chờ duyệt", status: "Chờ duyệt" },
  { label: "Hoạt động", status: "Hoạt động" },
  { label: "Tạm khóa", status: "Tạm khóa" },
  { label: "Ngừng hoạt động", status: "Ngừng hoạt động" },
];

function ActionBtn({
  label,
  variant,
  onClick,
}: {
  label: string;
  variant:
    | "view"
    | "approve"
    | "reject"
    | "lock"
    | "unlock"
    | "stop";
  onClick?: () => void;
}) {
  const styles: Record<string, string> = {
    view: "border border-gray-300 text-gray-600 bg-white hover:bg-gray-50",
    approve:
      "border border-green-500 text-green-600 bg-green-50 hover:bg-green-100",
    reject:
      "border border-red-400 text-red-500 bg-red-50 hover:bg-red-100",
    lock: "border border-amber-400 text-amber-600 bg-amber-50 hover:bg-amber-100",
    unlock:
      "border border-blue-400 text-blue-600 bg-blue-50 hover:bg-blue-100",
    stop: "border border-gray-400 text-gray-500 bg-gray-50 hover:bg-gray-100",
  };
  return (
    <button
      onClick={onClick}
      className={`px-2.5 py-1 rounded text-[11px] font-medium transition-colors whitespace-nowrap ${styles[variant]}`}
    >
      {label}
    </button>
  );
}

function ActionButtons({ status, onView, onStatusChange }: { status: TrangThai; onView?: () => void; onStatusChange?: (next: TrangThai) => void }) {
  return (
    <div className="flex items-center gap-1.5">
      <button onClick={onView} className="px-2.5 py-1 rounded text-[11px] font-medium transition-colors whitespace-nowrap border border-gray-300 text-gray-600 bg-white hover:bg-gray-50">Xem</button>
      {status === "Hoạt động" && (
        <>
          <ActionBtn label="Tạm khóa" variant="lock" onClick={() => onStatusChange?.("Tạm khóa")} />
          <ActionBtn label="Ngừng" variant="stop" onClick={() => onStatusChange?.("Ngừng hoạt động")} />
        </>
      )}
      {status === "Chờ duyệt" && (
        <>
          <ActionBtn label="Duyệt" variant="approve" onClick={() => onStatusChange?.("Hoạt động")} />
          <ActionBtn label="Từ chối" variant="reject" onClick={() => onStatusChange?.("Chờ duyệt")} />
        </>
      )}
      {status === "Tạm khóa" && (
        <>
          <ActionBtn label="Mở khóa" variant="unlock" onClick={() => onStatusChange?.("Hoạt động")} />
          <ActionBtn label="Ngừng" variant="stop" onClick={() => onStatusChange?.("Ngừng hoạt động")} />
        </>
      )}
    </div>
  );
}

// ─── Doanh Nghiep Screen ───────────────────────────────────────────────────
function DoanhNghiepScreen({
  onNavigate,
  onViewDetail,
}: {
  onNavigate: (s: Screen) => void;
  onViewDetail: (id: number) => void;
}) {
  const [activeTab, setActiveTab] = useState<TrangThai | "all">(
    "all",
  );
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const rowsPerPage = 6;
  const [dnData, setDnData] = useState(DN_DATA);

  const handleStatusChange = (id: number, next: TrangThai) => {
    setDnData((prev) => prev.map((d) => d.id === id ? { ...d, trangThai: next } : d));
    setPage(1);
  };

  const counts: Record<TrangThai | "all", number> = {
    all: dnData.length,
    "Hoạt động": dnData.filter(
      (d) => d.trangThai === "Hoạt động",
    ).length,
    "Chờ duyệt": dnData.filter(
      (d) => d.trangThai === "Chờ duyệt",
    ).length,
    "Tạm khóa": dnData.filter(
      (d) => d.trangThai === "Tạm khóa",
    ).length,
    "Ngừng hoạt động": dnData.filter(
      (d) => d.trangThai === "Ngừng hoạt động",
    ).length,
  };

  const filtered = dnData.filter((d) => {
    const matchTab =
      activeTab === "all" || d.trangThai === activeTab;
    const matchSearch =
      search === "" ||
      d.ten.toLowerCase().includes(search.toLowerCase()) ||
      d.mst.includes(search);
    return matchTab && matchSearch;
  });

  const totalPages = Math.ceil(filtered.length / rowsPerPage);
  const paged = filtered.slice(
    (page - 1) * rowsPerPage,
    page * rowsPerPage,
  );

  return (
    <div
      className="flex h-screen bg-gray-50 overflow-hidden"
      style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}
    >
      <Sidebar current="doanhNghiep" onNavigate={onNavigate} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <TopBar title="Doanh nghiệp" />
        <div className="flex-1 overflow-y-auto px-6 py-5">
          {/* Page header */}
          <div className="flex items-start justify-between mb-5">
            <div>
              <h2 className="text-xl font-semibold text-gray-900">
                Doanh nghiệp
              </h2>
              <p className="text-xs text-gray-400 mt-0.5">
                Quản lý các đơn vị phát triển và phát hành Mini
                App trên nền tảng
              </p>
            </div>
          </div>

          {/* Stat cards */}
          <div className="grid grid-cols-5 gap-4 mb-5">
            {[
              {
                label: "Tổng doanh nghiệp",
                value: DN_DATA.length,
                color: "#1F2937",
              },
              {
                label: "Chờ duyệt",
                value: counts["Chờ duyệt"],
                color: "#D97706",
              },
              {
                label: "Hoạt động",
                value: counts["Hoạt động"],
                color: "#16A34A",
              },
              {
                label: "Tạm khóa",
                value: counts["Tạm khóa"],
                color: "#2563EB",
              },
              {
                label: "Ngừng hoạt động",
                value: counts["Ngừng hoạt động"],
                color: "#2563EB",
              },
            ].map((s) => (
              <div
                key={s.label}
                className="bg-white rounded-md border border-gray-100 shadow-sm px-5 py-4"
              >
                <div className="text-xs text-gray-500 mb-1">
                  {s.label}
                </div>
                <div
                  className="text-2xl font-semibold"
                  style={{ color: s.color }}
                >
                  {s.value}
                </div>
              </div>
            ))}
          </div>

          {/* Search — above tabs */}
          <div className="relative max-w-sm mb-3">
            <Search
              size={13}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            />
            <input
              type="text"
              placeholder="Tìm kiếm theo tên doanh nghiệp, MST, email liên hệ"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setPage(1);
              }}
              className="w-full pl-8 pr-3 py-2 text-xs border border-gray-200 rounded bg-white placeholder-gray-400 focus:outline-none focus:border-[#094D8A] transition-colors shadow-sm"
            />
          </div>

          {/* Main table card */}
          <div className="bg-white rounded-md border border-gray-100 shadow-sm">
            {/* Tabs */}
            <div className="flex border-b border-gray-100 px-4">
              {TABS.map((tab) => (
                <button
                  key={tab.status}
                  onClick={() => {
                    setActiveTab(tab.status);
                    setPage(1);
                  }}
                  className={`px-3 py-3 text-xs font-medium whitespace-nowrap transition-colors border-b-2 -mb-px ${
                    activeTab === tab.status
                      ? "border-[#094D8A] text-[#094D8A]"
                      : "border-transparent text-gray-500 hover:text-gray-700"
                  }`}
                >
                  {tab.label} ({counts[tab.status]})
                </button>
              ))}
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-xs">
                <thead>
                  <tr className="border-b border-gray-100 bg-gray-50/60">
                    <th className="text-left px-4 py-3 text-gray-500 font-semibold w-10">
                      STT
                    </th>
                    <th className="text-left px-4 py-3 text-gray-500 font-semibold">
                      DOANH NGHIỆP
                    </th>
                    <th className="text-center px-4 py-3 text-gray-500 font-semibold w-28">
                      NGÀY ĐĂNG KÝ
                    </th>
                    <th className="text-center px-4 py-3 text-gray-500 font-semibold w-36">
                      LẦN CUỐI HOẠT ĐỘNG
                    </th>
                    <th className="text-center px-4 py-3 text-gray-500 font-semibold w-32">
                      TRẠNG THÁI
                    </th>

                    <th className="text-center px-4 py-3 text-gray-500 font-semibold w-48">
                      THAO TÁC
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {paged.map((row, idx) => {
                    const st = STATUS_CONFIG[row.trangThai];
                    return (
                      <tr
                        key={row.id}
                        className="hover:bg-gray-50/60 transition-colors"
                      >
                        <td className="px-4 py-3.5 text-gray-500">
                          {(page - 1) * rowsPerPage + idx + 1}
                        </td>
                        <td className="px-4 py-3.5">
                          <div className="font-semibold text-gray-800">
                            {row.ten}
                          </div>
                          <div className="text-gray-400 text-[11px] mt-0.5">
                            MST: {row.mst}
                          </div>
                          <div className="text-gray-400 text-[11px] mt-1">
                            {row.miniApp} Mini App&nbsp;•&nbsp;{row.thanhVien} Developer&nbsp;•&nbsp;{row.daPublish} Published
                          </div>
                        </td>
                        <td className="px-4 py-3.5 text-center text-gray-500">
                          {row.thamGia}
                        </td>
                        <td className="px-4 py-3.5 text-center text-gray-500">
                          {row.lanCuoiHoatDong}
                        </td>
                        <td className="px-4 py-3.5 text-center">
                          <span
                            className="inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-medium"
                            style={{
                              color: st.color,
                              background: st.bg,
                            }}
                          >
                            {st.label}
                          </span>
                        </td>
                        <td className="px-4 py-3.5">
                          <div className="flex justify-center">
                            <ActionButtons
                              status={row.trangThai}
                              onView={() => onViewDetail(row.id)}
                              onStatusChange={(next) => handleStatusChange(row.id, next)}
                            />
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                  {paged.length === 0 && (
                    <tr>
                      <td
                        colSpan={8}
                        className="px-4 py-10 text-center text-gray-400"
                      >
                        Không có dữ liệu
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-between px-4 py-3 border-t border-gray-100">
              <span className="text-xs text-gray-400">
                Hiển thị{" "}
                {Math.min(
                  (page - 1) * rowsPerPage + 1,
                  filtered.length,
                )}
                –{Math.min(page * rowsPerPage, filtered.length)}{" "}
                / {filtered.length} doanh nghiệp
              </span>
              <div className="flex items-center gap-1">
                <button
                  onClick={() =>
                    setPage((p) => Math.max(1, p - 1))
                  }
                  disabled={page === 1}
                  className="w-7 h-7 flex items-center justify-center rounded border border-gray-200 text-gray-500 hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  <ChevronLeft size={12} />
                </button>
                {Array.from(
                  { length: totalPages },
                  (_, i) => i + 1,
                ).map((p) => (
                  <button
                    key={p}
                    onClick={() => setPage(p)}
                    className={`w-7 h-7 flex items-center justify-center rounded text-xs font-medium transition-colors ${
                      p === page
                        ? "bg-[#094D8A] text-white"
                        : "border border-gray-200 text-gray-600 hover:bg-gray-50"
                    }`}
                  >
                    {p}
                  </button>
                ))}
                <button
                  onClick={() =>
                    setPage((p) => Math.min(totalPages, p + 1))
                  }
                  disabled={
                    page === totalPages || totalPages === 0
                  }
                  className="w-7 h-7 flex items-center justify-center rounded border border-gray-200 text-gray-500 hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  <ChevronRight size={12} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Chi tiết Doanh Nghiệp ─────────────────────────────────────────────────
const DETAIL_TABS = ["Tổng quan", "Mini App", "Hoạt động"];

interface Member {
  id: string;
  ten: string;
  email: string;
  vaiTro: string;
  thamGia: string;
  // detail fields
  sdt: string;
  chucDanh: string;
  ghiChu: string;
  hoatDongGanNhat: string;
  developerID: string;
  trangThaiTK: "Hoạt động" | "Tạm khóa" | "Ngừng hoạt động";
  soDoanhNghiep: number;
  soMiniApp: number;
  soPublished: number;
}

interface MemberDN { dnId: number; ten: string; vaiTro: string; thamGia: string; trangThai: TrangThai; }
interface MemberMiniApp { appId: string; ten: string; doanhNghiep: string; trangThai: MiniAppStatus; vaiTro: string; }
const MEMBER_DNS: Record<string, MemberDN[]> = {
  "123456": [
    { dnId: 1, ten: "Công ty Cổ phần Công nghệ XYZ",     vaiTro: "Owner",     thamGia: "12/10/2023", trangThai: "Hoạt động" },
    { dnId: 5, ten: "Công ty TNHH Giáo dục Thông minh",  vaiTro: "Developer", thamGia: "05/01/2024", trangThai: "Hoạt động" },
  ],
  "123457": [
    { dnId: 1, ten: "Công ty Cổ phần Công nghệ XYZ",     vaiTro: "Developer", thamGia: "15/11/2023", trangThai: "Hoạt động" },
  ],
  "234001": [
    { dnId: 2, ten: "Tập đoàn Viễn thông ABC",            vaiTro: "Owner",     thamGia: "15/05/2023", trangThai: "Hoạt động" },
  ],
};
const MEMBER_MINI_APPS: Record<string, MemberMiniApp[]> = {
  "123456": [
    { appId: "APP-000001", ten: "Sổ liên lạc điện tử",   doanhNghiep: "Công nghệ XYZ",  trangThai: "Đã xuất bản", vaiTro: "Owner"     },
    { appId: "APP-000002", ten: "Xe đưa đón học sinh",    doanhNghiep: "Công nghệ XYZ",  trangThai: "Đã xuất bản", vaiTro: "Developer" },
    { appId: "APP-000003", ten: "Cổng thông tin",         doanhNghiep: "Giáo dục ABC",   trangThai: "Chờ duyệt",   vaiTro: "Developer" },
    { appId: "APP-000004", ten: "Khảo sát phụ huynh",     doanhNghiep: "Công nghệ XYZ",  trangThai: "Bản nháp",    vaiTro: "Tester"    },
    { appId: "APP-000005", ten: "Thông báo học đường",     doanhNghiep: "Giáo dục ABC",   trangThai: "Đã xuất bản", vaiTro: "Developer" },
    { appId: "APP-000006", ten: "Học liệu số",            doanhNghiep: "Công nghệ XYZ",  trangThai: "Đã xuất bản", vaiTro: "Developer" },
    { appId: "APP-000007", ten: "Tuyển sinh trực tuyến",  doanhNghiep: "Giáo dục ABC",   trangThai: "Từ chối",     vaiTro: "Developer" },
    { appId: "APP-000008", ten: "Điểm danh thông minh",   doanhNghiep: "Công nghệ XYZ",  trangThai: "Đã xuất bản", vaiTro: "Owner"     },
  ],
};

const MEMBERS_BY_DN: Record<number, Member[]> = {
  1: [
    { id: "123456", ten: "Nguyễn Văn A", email: "nguyenvana@gmail.com", vaiTro: "Quản trị viên", thamGia: "12/10/2023", sdt: "0901234567", chucDanh: "Senior Developer", ghiChu: "Thành viên tích cực", hoatDongGanNhat: "24/06/2026 08:32", developerID: "DEV-000123", trangThaiTK: "Hoạt động", soDoanhNghiep: 2, soMiniApp: 8, soPublished: 5 },
    { id: "123457", ten: "Trần Thị B",   email: "tranthib@gmail.com",   vaiTro: "Developer",      thamGia: "15/11/2023", sdt: "0912345678", chucDanh: "Frontend Developer", ghiChu: "", hoatDongGanNhat: "23/06/2026 14:10", developerID: "DEV-000124", trangThaiTK: "Hoạt động", soDoanhNghiep: 1, soMiniApp: 3, soPublished: 2 },
    { id: "123458", ten: "Lê Văn C",     email: "levanc@gmail.com",     vaiTro: "Biên tập viên",  thamGia: "01/01/2024", sdt: "0933445566", chucDanh: "Content Editor", ghiChu: "", hoatDongGanNhat: "20/06/2026 09:00", developerID: "DEV-000125", trangThaiTK: "Hoạt động", soDoanhNghiep: 1, soMiniApp: 0, soPublished: 0 },
    { id: "123459", ten: "Phạm Thị D",   email: "phamthid@gmail.com",   vaiTro: "Developer",      thamGia: "10/02/2024", sdt: "0944556677", chucDanh: "Backend Developer", ghiChu: "", hoatDongGanNhat: "25/06/2026 11:22", developerID: "DEV-000126", trangThaiTK: "Tạm khóa", soDoanhNghiep: 1, soMiniApp: 2, soPublished: 1 },
    { id: "123460", ten: "Hoàng Văn E",  email: "hoangvane@gmail.com",  vaiTro: "Kiểm duyệt viên",thamGia: "20/03/2024", sdt: "0955667788", chucDanh: "QA Engineer", ghiChu: "", hoatDongGanNhat: "24/06/2026 16:05", developerID: "DEV-000127", trangThaiTK: "Hoạt động", soDoanhNghiep: 1, soMiniApp: 1, soPublished: 1 },
  ],
  2: [
    { id: "234001", ten: "Vũ Thị F",  email: "vuthif@abc.vn",   vaiTro: "Quản trị viên", thamGia: "15/05/2023", sdt: "0988112233", chucDanh: "CTO", ghiChu: "", hoatDongGanNhat: "25/06/2026 06:14", developerID: "DEV-000201", trangThaiTK: "Hoạt động", soDoanhNghiep: 1, soMiniApp: 15, soPublished: 12 },
    { id: "234002", ten: "Đặng Văn G", email: "dangvang@abc.vn", vaiTro: "Developer",     thamGia: "20/06/2023", sdt: "0966778899", chucDanh: "Mobile Developer", ghiChu: "", hoatDongGanNhat: "24/06/2026 10:30", developerID: "DEV-000202", trangThaiTK: "Hoạt động", soDoanhNghiep: 1, soMiniApp: 7, soPublished: 5 },
    { id: "234003", ten: "Bùi Thị H",  email: "buithih@abc.vn",  vaiTro: "Developer",     thamGia: "01/07/2023", sdt: "0977889900", chucDanh: "Backend Developer", ghiChu: "", hoatDongGanNhat: "22/06/2026 08:00", developerID: "DEV-000203", trangThaiTK: "Hoạt động", soDoanhNghiep: 1, soMiniApp: 4, soPublished: 3 },
  ],
};

function InfoRow({ label, value, isLink }: { label: string; value: string; isLink?: boolean }) {
  return (
    <div className="flex py-3 border-b border-gray-50 last:border-0">
      <span className="w-44 shrink-0 text-xs text-gray-400">{label}</span>
      {isLink ? (
        <a href={value} target="_blank" rel="noopener noreferrer" className="text-xs text-[#094D8A] hover:underline">{value}</a>
      ) : (
        <span className="text-xs font-medium text-gray-800">{value}</span>
      )}
    </div>
  );
}

// ─── DN Activity data ──────────────────────────────────────────────────────
interface DNActivityItem {
  ngay: string;
  gio: string;
  icon: string;
  loai: string;
  tieuDe: string;
  chiTiet?: { label: string; value?: string; lines?: string[] }[];
}

const DN_ACTIVITY_LOAI = ["Tất cả loại", "Phê duyệt", "Thành viên", "Mini App", "Cập nhật", "Gửi hồ sơ", "Khóa/Mở khóa"] as const;
const DN_ACTIVITY_THOIGIAN = ["Tất cả thời gian", "Hôm nay", "7 ngày qua", "30 ngày qua"] as const;

const DN_ACTIVITY: Record<number, DNActivityItem[]> = {
  1: [
    { ngay: "Hôm nay", gio: "14:32", loai: "Khóa/Mở khóa", icon: "🔓", tieuDe: "Doanh nghiệp được mở khóa", chiTiet: [{ label: "Thực hiện bởi", value: "Nguyễn Văn Admin" }, { label: "Ghi chú", value: "Hoàn tất xác minh hồ sơ" }] },
    { ngay: "Hôm nay", gio: "09:15", loai: "Thành viên", icon: "👤", tieuDe: "Thêm thành viên Nguyễn Văn A", chiTiet: [{ label: "Vai trò", value: "Owner" }] },
    { ngay: "20/06/2026", gio: "08:30", loai: "Mini App", icon: "🚀", tieuDe: "Tạo Mini App \"Sổ liên lạc điện tử\"" },
    { ngay: "20/06/2026", gio: "16:20", loai: "Phê duyệt", icon: "✅", tieuDe: "Doanh nghiệp được phê duyệt", chiTiet: [{ label: "Thực hiện bởi", value: "Nguyễn Văn Admin" }, { label: "Ghi chú", value: "Hồ sơ hợp lệ" }] },
    { ngay: "15/06/2026", gio: "10:15", loai: "Gửi hồ sơ", icon: "📤", tieuDe: "Gửi hồ sơ doanh nghiệp để xét duyệt", chiTiet: [{ label: "Thực hiện bởi", value: "Trần Văn B" }] },
    { ngay: "15/06/2026", gio: "09:00", loai: "Cập nhật", icon: "📝", tieuDe: "Cập nhật thông tin hồ sơ doanh nghiệp", chiTiet: [{ label: "Trường thay đổi", value: "Logo, Website, Mô tả doanh nghiệp" }] },
  ],
  2: [
    { ngay: "Hôm nay", gio: "08:00", loai: "Thành viên", icon: "👤", tieuDe: "Thêm thành viên Đặng Văn G", chiTiet: [{ label: "Vai trò", value: "Developer" }] },
    { ngay: "22/06/2026", gio: "11:30", loai: "Mini App", icon: "🚀", tieuDe: "Xuất bản Mini App \"Ví điện tử ABC\"" },
    { ngay: "20/06/2026", gio: "14:00", loai: "Phê duyệt", icon: "✅", tieuDe: "Doanh nghiệp được phê duyệt", chiTiet: [{ label: "Thực hiện bởi", value: "Admin" }] },
  ],
};

function TabDNActivity({ dnId }: { dnId: number }) {
  const items = DN_ACTIVITY[dnId] ?? [];
  const [search, setSearch] = useState("");
  const [loaiFilter, setLoaiFilter] = useState("Tất cả loại");
  const [timeFilter, setTimeFilter] = useState("Tất cả thời gian");

  const filtered = items.filter((a) => {
    const matchSearch = search === "" || a.tieuDe.toLowerCase().includes(search.toLowerCase());
    const matchLoai = loaiFilter === "Tất cả loại" || a.loai === loaiFilter;
    const matchTime = timeFilter === "Tất cả thời gian"
      || (timeFilter === "Hôm nay" && a.ngay === "Hôm nay")
      || timeFilter === "7 ngày qua" || timeFilter === "30 ngày qua";
    return matchSearch && matchLoai && matchTime;
  });

  const grouped = filtered.reduce<Record<string, DNActivityItem[]>>((acc, a) => {
    (acc[a.ngay] = acc[a.ngay] ?? []).push(a);
    return acc;
  }, {});

  return (
    <div className="space-y-4">
      {/* Toolbar */}
      <div className="flex items-center gap-3">
        <div className="relative flex-1">
          <Search size={13} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input type="text" placeholder="Tìm kiếm hoạt động" value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-8 pr-3 py-2 text-xs border border-gray-200 rounded bg-white shadow-sm placeholder-gray-400 focus:outline-none focus:border-[#094D8A] transition-colors" />
        </div>
        <select value={loaiFilter} onChange={(e) => setLoaiFilter(e.target.value)}
          className="text-xs border border-gray-200 rounded px-3 py-2 bg-white text-gray-600 shadow-sm focus:outline-none focus:border-[#094D8A] cursor-pointer shrink-0">
          {DN_ACTIVITY_LOAI.map((l) => <option key={l}>{l}</option>)}
        </select>
        <select value={timeFilter} onChange={(e) => setTimeFilter(e.target.value)}
          className="text-xs border border-gray-200 rounded px-3 py-2 bg-white text-gray-600 shadow-sm focus:outline-none focus:border-[#094D8A] cursor-pointer shrink-0">
          {DN_ACTIVITY_THOIGIAN.map((t) => <option key={t}>{t}</option>)}
        </select>
      </div>

      {/* Timeline */}
      {Object.keys(grouped).length === 0 && (
        <div className="bg-white rounded-md border border-gray-100 shadow-sm p-10 text-center text-sm text-gray-400">Không có hoạt động</div>
      )}
      {Object.entries(grouped).map(([ngay, dayItems]) => (
        <div key={ngay} className="space-y-2">
          <div className="flex items-center gap-2 text-xs font-semibold text-gray-500 mb-1">
            <span className="w-2 h-2 rounded-full bg-[#094D8A] inline-block shrink-0" />
            {ngay}
          </div>
          {dayItems.map((a, i) => (
            <div key={i} className="bg-white rounded-md border border-gray-100 shadow-sm px-5 py-4">
              <div className="text-[11px] text-gray-400 mb-2">{a.gio}</div>
              <p className="text-xs font-semibold text-gray-800 mb-2">
                <span className="mr-1.5">{a.icon}</span>{a.tieuDe}
              </p>
              {a.chiTiet && a.chiTiet.map((d, di) => (
                <div key={di} className="text-[11px] text-gray-500">
                  <span className="text-gray-400">{d.label}: </span>
                  <span className="text-gray-700 font-medium">{d.value}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

function DetailHeader({ dn, activeTab, onTabChange }: {
  dn: (typeof DN_DATA)[0];
  activeTab: string;
  onTabChange: (t: string) => void;
}) {
  const st = STATUS_CONFIG[dn.trangThai];
  return (
    <div className="bg-white rounded-md border border-gray-100 shadow-sm">
      <div className="p-5">
        {/* Name + status + actions */}
        <div className="flex items-start justify-between gap-4 mb-2">
          <div className="flex items-center gap-2.5 flex-wrap">
            <h2 className="text-lg font-semibold text-gray-900">{dn.ten}</h2>
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-semibold"
              style={{ color: st.color, background: st.bg }}>{st.label}</span>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            {dn.trangThai === "Hoạt động" && <>
              <ActionBtn label="Tạm khóa" variant="lock" />
              <ActionBtn label="Ngừng hoạt động" variant="stop" />
            </>}
            {dn.trangThai === "Chờ duyệt" && <>
              <ActionBtn label="Duyệt" variant="approve" />
              <ActionBtn label="Từ chối" variant="reject" />
            </>}
            {dn.trangThai === "Tạm khóa" && <>
              <ActionBtn label="Mở khóa" variant="unlock" />
              <ActionBtn label="Ngừng hoạt động" variant="stop" />
            </>}
          </div>
        </div>

        {/* Description */}
        <p className="text-xs text-gray-500 mb-4 max-w-2xl">{dn.moTa}</p>

        {/* 3-column info */}
        <div className="flex gap-8 mb-4">
          {[
            { label: "MST", value: dn.mst },
            { label: "NGÀY ĐĂNG KÝ", value: dn.thamGia },
            { label: "LẦN HOẠT ĐỘNG CUỐI", value: dn.lanCuoiHoatDong },
          ].map((item) => (
            <div key={item.label}>
              <div className="text-[10px] font-semibold text-gray-400 uppercase tracking-wide mb-0.5">{item.label}</div>
              <div className="text-sm font-semibold text-gray-800">{item.value}</div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="flex items-center gap-2 text-xs text-[#094D8A] font-medium">
          <span>{dn.thanhVien} Developer</span>
          <span className="text-gray-300">•</span>
          <span>{dn.miniApp} Mini App</span>
          <span className="text-gray-300">•</span>
          <span>{dn.daPublish} Đã xuất bản</span>
          <span className="text-gray-300">•</span>
          <span>{dn.nguoiDung.toLocaleString("vi-VN")} người dùng</span>
        </div>
      </div>

      {/* Tabs — inside the card at the bottom */}
      <div className="flex border-t border-gray-100 px-5">
        {DETAIL_TABS.map((tab) => {
          const badge = tab === "Thành viên" ? dn.thanhVien : tab === "Mini App" ? dn.miniApp : null;
          const active = activeTab === tab;
          return (
            <button key={tab} onClick={() => onTabChange(tab)}
              className={`px-3 py-3 text-xs font-medium whitespace-nowrap transition-colors border-b-2 -mb-px flex items-center gap-1.5 ${
                active ? "border-[#094D8A] text-[#094D8A]" : "border-transparent text-gray-500 hover:text-gray-700"
              }`}>
              {tab}
              {badge !== null && (
                <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-semibold ${active ? "bg-[#D1E9FF] text-[#094D8A]" : "bg-gray-100 text-gray-500"}`}>
                  {badge}
                </span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}

function DNCreateMiniAppScreen({ onNavigate }: { onNavigate: (s: Screen) => void }) {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("Giáo dục");
  const [description, setDescription] = useState("");

  const steps = ["Thông tin", "Chọn Template", "Cấu hình", "API", "Upload", "Hoàn tất"];
  const tags = ["Giáo dục", "Học sinh", "Giáo viên", "Phụ huynh", "Quản lý", "Tiện ích", "Khảo sát", "Học phí"];

  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden">
      <SidebarDN current="dnMiniApp" onNavigate={onNavigate} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="bg-white border-b border-gray-100 px-8 h-16 flex items-center justify-between shrink-0">
          <button
            onClick={() => onNavigate("dnMiniApp")}
            className="flex items-center gap-2 text-sm font-semibold text-[#00458B] hover:underline"
          >
            <ArrowLeft size={16} />
            Danh sách Mini App
          </button>
          <div className="flex items-center gap-3">
            <button className="relative p-1.5 text-gray-500 hover:text-gray-800">
              <Bell size={18} />
              <span className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-red-500 rounded-full" />
            </button>
            <button className="p-1.5 text-gray-500 hover:text-gray-800">
              <Settings size={18} />
            </button>
            <img
              src={MAN_PHOTO_2}
              alt="Avatar"
              className="w-8 h-8 rounded-full object-cover border border-gray-200"
            />
          </div>
        </header>

        <main className="flex-1 overflow-y-auto px-10 py-9">
          <div className="max-w-[1000px] mx-auto w-full">
            <div className="text-center mb-10">
              <h1 className="text-[28px] leading-9 font-semibold text-[#00458B] tracking-normal">
                TẠO MINI APP
              </h1>
              <p className="text-base text-gray-600 mt-1">
                Xây dựng Mini App để phát hành trên Marketplace
              </p>
            </div>

            <div className="relative flex items-center justify-between mb-12">
              <div className="absolute left-0 right-0 top-5 h-0.5 bg-gray-200" />
              {steps.map((step, index) => {
                const active = index === 0;
                return (
                  <div key={step} className="relative z-10 flex flex-col items-center gap-2 bg-[#FCF9F8] px-2">
                    <div
                      className={`w-10 h-10 rounded-full border-2 flex items-center justify-center text-sm font-bold ${
                        active
                          ? "bg-[#00458B] border-[#00458B] text-white"
                          : "bg-white border-gray-300 text-gray-400"
                      }`}
                    >
                      {index + 1}
                    </div>
                    <span className={`text-xs font-semibold ${active ? "text-[#00458B]" : "text-gray-400"}`}>
                      {step}
                    </span>
                  </div>
                );
              })}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
              <div className="lg:col-span-2 space-y-8">
                <section className="bg-white border border-gray-100 rounded p-6 shadow-sm">
                  <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                    <Info size={20} className="text-[#00458B]" />
                    Thông tin cơ bản
                  </h2>
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-bold mb-2 text-gray-900">
                        Tên Mini App <span className="text-red-600">*</span>
                      </label>
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Nhập tên Mini App của bạn"
                        className="w-full border border-gray-200 rounded px-3 py-2 text-sm focus:outline-none focus:border-[#00458B]"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold mb-2 text-gray-900">
                        Danh mục <span className="text-red-600">*</span>
                      </label>
                      <select
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        className="w-full border border-gray-200 rounded px-3 py-2 text-sm bg-white focus:outline-none focus:border-[#00458B]"
                      >
                        {["Giáo dục", "Tiện ích", "Quản lý"].map((item) => (
                          <option key={item} value={item}>{item}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-bold mb-2 text-gray-900">Mô tả</label>
                      <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="Mô tả ngắn gọn về tính năng và lợi ích của ứng dụng"
                        rows={4}
                        className="w-full resize-none border border-gray-200 rounded px-3 py-2 text-sm focus:outline-none focus:border-[#00458B]"
                      />
                    </div>
                  </div>
                </section>

                <section className="bg-white border border-gray-100 rounded p-6 shadow-sm">
                  <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                    <Store size={20} className="text-[#00458B]" />
                    Hiển thị trên Marketplace
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div>
                      <label className="block text-sm font-bold mb-2 text-gray-900">
                        Logo <span className="text-red-600">*</span>
                      </label>
                      <button className="w-32 h-32 border-2 border-dashed border-gray-300 rounded flex flex-col items-center justify-center hover:bg-gray-50 transition-colors">
                        <Camera size={22} className="text-gray-500" />
                        <span className="text-[10px] text-gray-400 mt-2 font-bold uppercase">Tải lên (512x512)</span>
                      </button>
                    </div>
                    <div>
                      <label className="block text-sm font-bold mb-2 text-gray-900">Banner</label>
                      <button className="w-full h-32 border-2 border-dashed border-gray-300 rounded flex flex-col items-center justify-center hover:bg-gray-50 transition-colors">
                        <ImageIcon size={24} className="text-gray-500" />
                        <span className="text-[10px] text-gray-400 mt-2 font-bold uppercase">Tải lên (1200x600)</span>
                      </button>
                    </div>
                  </div>

                  <div className="mb-8">
                    <label className="block text-sm font-bold mb-4 text-gray-900">Ảnh giới thiệu</label>
                    <div className="grid grid-cols-4 gap-3">
                      {Array.from({ length: 4 }).map((_, index) => (
                        <button
                          key={index}
                          className="aspect-[4/3] border-2 border-dashed border-gray-300 rounded flex items-center justify-center text-xs font-bold text-gray-400 hover:bg-gray-50 hover:text-[#00458B] transition-colors"
                        >
                          + Ảnh
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-bold mb-4 text-gray-900">Tag ứng dụng</label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-y-3">
                      {tags.map((tag) => (
                        <label key={tag} className="flex items-center gap-2 cursor-pointer">
                          <input type="checkbox" className="w-4 h-4 accent-[#00458B]" />
                          <span className="text-sm text-gray-600">{tag}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </section>
              </div>

              <aside className="lg:col-span-1">
                <div className="sticky top-6 space-y-4">
                  <label className="block text-[10px] font-bold text-gray-700 uppercase tracking-widest">
                    Xem trước hiển thị
                  </label>
                  <div className="bg-white border border-gray-100 rounded overflow-hidden shadow-md">
                    <div className="bg-gray-100 aspect-video flex items-center justify-center">
                      <div className="text-center">
                        <ImageIcon size={36} className="text-gray-400 mx-auto mb-2" />
                        <p className="text-xs text-gray-400 font-bold">Chưa có Banner</p>
                      </div>
                    </div>
                    <div className="p-5 flex gap-4">
                      <div className="w-16 h-16 bg-gray-100 rounded-lg shrink-0 flex items-center justify-center border border-gray-200">
                        <Smartphone size={26} className="text-gray-400" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-xl font-bold text-gray-900 truncate">
                          {name || "Tên Mini App"}
                        </h3>
                        <p className="text-xs text-[#00458B] font-bold mb-2">{category}</p>
                        <p className="text-sm text-gray-600 line-clamp-2">
                          {description || "Mô tả Mini App của bạn sẽ xuất hiện tại đây sau khi bạn nhập nội dung..."}
                        </p>
                      </div>
                    </div>
                    <div className="px-5 pb-5 pt-2 flex gap-2">
                      <span className="bg-gray-100 px-2 py-0.5 rounded text-[10px] font-bold text-gray-600 uppercase">SaaS</span>
                      <span className="bg-gray-100 px-2 py-0.5 rounded text-[10px] font-bold text-gray-600 uppercase">Free</span>
                    </div>
                  </div>

                  <div className="p-4 bg-[#D1E4FF] text-[#00458B] rounded border border-[#A9C7FF]">
                    <div className="flex gap-3">
                      <Lightbulb size={20} className="shrink-0" />
                      <p className="text-sm">
                        Mẹo: Một Mini App có banner và hình ảnh giới thiệu chất lượng sẽ có tỉ lệ chuyển đổi cao hơn 40%.
                      </p>
                    </div>
                  </div>
                </div>
              </aside>
            </div>

            <footer className="flex justify-center md:justify-end gap-4 pt-8 border-t border-gray-200">
              <button className="px-8 py-2.5 border-2 border-[#00458B] text-[#00458B] font-bold rounded hover:bg-[#D1E4FF] transition-colors">
                Lưu nháp
              </button>
              <button
                onClick={() => onNavigate("dnCreateMiniAppStep2")}
                className="px-10 py-2.5 bg-[#00458B] text-white font-bold rounded hover:opacity-90 transition-opacity flex items-center gap-2"
              >
                Tiếp tục
                <ArrowRight size={16} />
              </button>
            </footer>
          </div>
        </main>
      </div>
    </div>
  );
}

function DNCreateMiniAppStep2Screen({ onNavigate }: { onNavigate: (s: Screen) => void }) {
  const [method, setMethod] = useState<"template" | "self_build" | null>(null);
  const steps = ["Thông tin", "Chọn Template", "Cấu hình", "Thanh toán", "Xác nhận", "Hoàn tất"];
  const methods = [
    {
      key: "template" as const,
      title: "DÙNG TEMPLATE",
      description: "Khởi tạo Mini App từ Template của Marketplace.",
      icon: LayoutDashboard,
      iconBg: "#DCE0E4",
      cta: "Chọn",
      benefits: ["Có giao diện sẵn", "Thiết lập nhanh", "Chuẩn UI của nền tảng", "Phù hợp đa số doanh nghiệp"],
    },
    {
      key: "self_build" as const,
      title: "TỰ BUILD",
      description: "Doanh nghiệp tự phát triển giao diện Mini App.",
      icon: Code2,
      iconBg: "#DCE0E4",
      cta: "Chọn",
      benefits: ["Toàn quyền thiết kế", "Upload Web Bundle", "Không phụ thuộc Template", "Linh hoạt"],
    },
  ];

  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden">
      <SidebarDN current="dnMiniApp" onNavigate={onNavigate} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="bg-white border-b border-gray-100 px-8 h-16 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-4">
            <button
              onClick={() => onNavigate("dnCreateMiniApp")}
              className="w-8 h-8 flex items-center justify-center rounded-full text-[#00458B] hover:bg-gray-50 transition-colors"
            >
              <ArrowLeft size={18} />
            </button>
            <h1 className="text-xl font-bold text-[#00458B]">Create Mini App</h1>
          </div>
          <div className="flex items-center gap-6">
            <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
              {["Docs", "Support", "Changelog"].map((item) => (
                <button key={item} className="text-gray-500 hover:text-[#00458B] transition-colors">
                  {item}
                </button>
              ))}
            </nav>
            <button className="w-10 h-10 flex items-center justify-center text-gray-500 hover:text-[#00458B] transition-colors">
              <Bell size={18} />
            </button>
            <img
              src={MAN_PHOTO_2}
              alt="Avatar"
              className="w-8 h-8 rounded-full object-cover border border-gray-200"
            />
          </div>
        </header>

        <main className="flex-1 overflow-y-auto bg-[#F6F3F2] pb-28">
          <div className="w-full max-w-[800px] mx-auto mt-10 px-6">
            <div className="relative flex items-center justify-between">
              <div className="absolute left-0 right-0 top-5 h-0.5 bg-gray-300" />
              <div className="absolute left-0 top-5 h-0.5 w-[20%] bg-[#00458B]" />
              {steps.map((step, index) => {
                const completed = index === 0;
                const active = index === 1;
                return (
                  <div key={step} className="relative z-10 flex flex-col items-center gap-2">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center ${
                        completed
                          ? "bg-[#00458B] text-white shadow-md"
                          : active
                            ? "bg-[#00458B] text-white shadow-md ring-4 ring-[#D1E4FF]"
                            : "bg-[#E5E2E1] text-gray-500 border border-gray-300"
                      }`}
                    >
                      {completed ? <Check size={20} strokeWidth={3} /> : <span className="text-sm font-bold">{index + 1}</span>}
                    </div>
                    <span className={`text-xs font-bold ${completed || active ? "text-[#00458B]" : "text-gray-500"}`}>
                      {step}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="w-full max-w-[900px] mx-auto mt-12 px-8 flex flex-col items-center">
            <div className="text-center mb-10">
              <h2 className="text-[28px] leading-9 font-semibold text-[#00458B] uppercase tracking-normal mb-2">
                Chọn cách tạo Mini App
              </h2>
              <p className="text-base text-gray-600">
                Chọn phương thức phù hợp nhất để bắt đầu xây dựng ứng dụng của bạn
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
              {methods.map(({ key, title, description, icon: Icon, iconBg, cta, benefits }) => {
                const selected = method === key;
                return (
                  <button
                    key={key}
                    onClick={() => setMethod(key)}
                    className={`group relative h-full bg-white border rounded-lg p-8 text-left flex flex-col transition-all duration-300 hover:-translate-y-1 hover:border-[#00458B] shadow-sm ${
                      selected ? "border-[#00458B] ring-2 ring-[#00458B]/20" : "border-gray-300"
                    }`}
                  >
                    <div
                      className="w-14 h-14 rounded-full flex items-center justify-center text-[#00458B] mb-6 transition-transform group-hover:scale-110"
                      style={{ background: iconBg }}
                    >
                      <Icon size={32} />
                    </div>
                    <h3 className="text-xl font-bold text-[#00458B] mb-3 uppercase">{title}</h3>
                    <p className="text-sm text-gray-600 mb-8">{description}</p>
                    <div className="flex-1 space-y-4 mb-10">
                      {benefits.map((benefit) => (
                        <div key={benefit} className="flex items-center gap-3">
                          <CheckCircle size={20} className="text-[#00458B]" />
                          <span className="text-gray-800 font-medium">{benefit}</span>
                        </div>
                      ))}
                    </div>
                    <div
                      className={`w-full py-3 rounded-lg font-bold text-center transition-colors ${
                        selected
                          ? "bg-[#00458B] text-white"
                          : "border-2 border-[#00458B] text-[#00458B] group-hover:bg-[#D1E4FF]"
                      }`}
                    >
                      {cta}
                    </div>
                    {selected && (
                      <CheckCircle
                        size={32}
                        className="absolute top-4 right-4 text-[#00458B]"
                        fill="#D1E4FF"
                      />
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </main>

        <footer className="h-20 bg-[#E5E2E1] flex items-center justify-between px-12 border-t border-gray-300 shrink-0">
          <button
            onClick={() => onNavigate("dnCreateMiniApp")}
            className="flex items-center gap-2 px-6 py-2.5 rounded-lg border border-[#00458B] text-[#00458B] font-bold hover:bg-[#D1E4FF] transition-colors"
          >
            <ArrowLeft size={16} />
            Quay lại
          </button>
          <button
            disabled={!method}
            onClick={() => {
              if (method === "template") onNavigate("dnCreateMiniAppStep3");
            }}
            className="flex items-center gap-2 px-10 py-3 rounded-lg bg-[#00458B] text-white font-bold shadow-md hover:opacity-90 disabled:opacity-30 disabled:cursor-not-allowed transition-opacity"
          >
            Tiếp tục
            <ArrowRight size={16} />
          </button>
        </footer>
      </div>
    </div>
  );
}

// ─── Mini App tab data & component ────────────────────────────────────────
type MiniAppStatus = "Đã xuất bản" | "Chờ duyệt" | "Từ chối" | "Bản nháp";

interface MiniAppItem {
  id: number;
  appId: string;
  ten: string;
  danhMuc: string;
  phienBan: string;
  ngayTao: string;
  trangThai: MiniAppStatus;
}

const MINI_APP_STATUS_CONFIG: Record<MiniAppStatus, { color: string; bg: string }> = {
  "Đã xuất bản": { color: "#16A34A", bg: "#DCFCE7" },
  "Chờ duyệt":   { color: "#D97706", bg: "#FEF3C7" },
  "Từ chối":     { color: "#DC2626", bg: "#FEE2E2" },
  "Bản nháp":    { color: "#6B7280", bg: "#F3F4F6" },
};

const MINI_APPS_BY_DN: Record<number, MiniAppItem[]> = {
  1: [
    { id: 1, appId: "APP-000001", ten: "Sổ liên lạc điện tử", danhMuc: "Giáo dục",  phienBan: "v2.3.0", ngayTao: "12/05/2024", trangThai: "Đã xuất bản" },
    { id: 2, appId: "APP-000002", ten: "Xe đưa đón",           danhMuc: "Giáo dục",  phienBan: "v1.8.0", ngayTao: "20/05/2024", trangThai: "Đã xuất bản" },
    { id: 3, appId: "APP-000003", ten: "Cổng thông tin",       danhMuc: "Giáo dục",  phienBan: "v1.5.0", ngayTao: "01/06/2024", trangThai: "Chờ duyệt"   },
    { id: 4, appId: "APP-000004", ten: "Khảo sát phụ huynh",  danhMuc: "Tiện ích",  phienBan: "v1.0.0", ngayTao: "10/06/2024", trangThai: "Từ chối"     },
    { id: 5, appId: "APP-000005", ten: "Quản lý học sinh",     danhMuc: "Giáo dục",  phienBan: "v3.1.0", ngayTao: "15/06/2024", trangThai: "Đã xuất bản" },
    { id: 6, appId: "APP-000006", ten: "Căng tin trường",      danhMuc: "Dịch vụ",   phienBan: "v1.2.0", ngayTao: "18/06/2024", trangThai: "Đã xuất bản" },
    { id: 7, appId: "APP-000007", ten: "Thư viện số",          danhMuc: "Giáo dục",  phienBan: "v2.0.0", ngayTao: "20/06/2024", trangThai: "Bản nháp"    },
    { id: 8, appId: "APP-000008", ten: "Lịch học thông minh",  danhMuc: "Tiện ích",  phienBan: "v1.0.1", ngayTao: "22/06/2024", trangThai: "Chờ duyệt"   },
  ],
  2: [
    { id: 1, appId: "APP-000101", ten: "Ví điện tử ABC",       danhMuc: "Tài chính", phienBan: "v5.0.0", ngayTao: "10/04/2024", trangThai: "Đã xuất bản" },
    { id: 2, appId: "APP-000102", ten: "Trợ lý ảo",            danhMuc: "Tiện ích",  phienBan: "v2.1.0", ngayTao: "15/04/2024", trangThai: "Đã xuất bản" },
    { id: 3, appId: "APP-000103", ten: "Thanh toán hóa đơn",   danhMuc: "Tài chính", phienBan: "v3.3.0", ngayTao: "01/05/2024", trangThai: "Chờ duyệt"   },
  ],
};

const ALL_DANH_MUC = ["Tất cả danh mục", "Giáo dục", "Tiện ích", "Tài chính", "Dịch vụ"];
const ALL_MA_STATUS: (MiniAppStatus | "Tất cả trạng thái")[] = ["Tất cả trạng thái", "Đã xuất bản", "Chờ duyệt", "Từ chối", "Bản nháp"];

function TabMiniApp({ dn, onViewMiniApp }: { dn: (typeof DN_DATA)[0]; onViewMiniApp: (appId: string) => void }) {
  const apps = MINI_APPS_BY_DN[dn.id] ?? [];
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState<MiniAppStatus | "Tất cả trạng thái">("Tất cả trạng thái");
  const [danhMucFilter, setDanhMucFilter] = useState("Tất cả danh mục");
  const [selectedApp, setSelectedApp] = useState<MiniAppItem | null>(null);

  const filtered = apps.filter((a) => {
    const matchSearch = search === "" || a.ten.toLowerCase().includes(search.toLowerCase());
    const matchStatus = statusFilter === "Tất cả trạng thái" || a.trangThai === statusFilter;
    const matchDanhMuc = danhMucFilter === "Tất cả danh mục" || a.danhMuc === danhMucFilter;
    return matchSearch && matchStatus && matchDanhMuc;
  });

  return (
    <>
      {selectedApp && (
        <MiniAppDrawer
          app={selectedApp}
          owner={dn.nguoiDaiDien}
          onClose={() => setSelectedApp(null)}
          onViewFull={() => { setSelectedApp(null); onViewMiniApp(selectedApp.appId); }}
        />
      )}
      <div className="bg-white rounded-md border border-gray-100 shadow-sm">
        {/* Toolbar */}
        <div className="flex items-center gap-3 px-4 py-3 border-b border-gray-100">
          <div className="relative flex-1 max-w-sm">
            <Search size={13} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Tìm kiếm Mini App"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-8 pr-3 py-2 text-xs border border-gray-200 rounded bg-gray-50 placeholder-gray-400 focus:outline-none focus:border-[#094D8A] focus:bg-white transition-colors"
            />
          </div>
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value as typeof statusFilter)}
            className="text-xs border border-gray-200 rounded px-3 py-2 bg-white text-gray-600 focus:outline-none focus:border-[#094D8A] cursor-pointer"
          >
            {ALL_MA_STATUS.map((s) => <option key={s}>{s}</option>)}
          </select>
          <select
            value={danhMucFilter}
            onChange={(e) => setDanhMucFilter(e.target.value)}
            className="text-xs border border-gray-200 rounded px-3 py-2 bg-white text-gray-600 focus:outline-none focus:border-[#094D8A] cursor-pointer"
          >
            {ALL_DANH_MUC.map((d) => <option key={d}>{d}</option>)}
          </select>
        </div>

        {/* Table */}
        <table className="w-full text-xs">
          <thead>
            <tr className="border-b border-gray-100 bg-gray-50/60">
              <th className="text-left px-4 py-3 text-gray-500 font-semibold w-10">STT</th>
              <th className="text-left px-4 py-3 text-gray-500 font-semibold">MINI APP</th>
              <th className="text-left px-4 py-3 text-gray-500 font-semibold w-28">DANH MỤC</th>
              <th className="text-center px-4 py-3 text-gray-500 font-semibold w-24">PHIÊN BẢN</th>
              <th className="text-center px-4 py-3 text-gray-500 font-semibold w-28">NGÀY TẠO</th>
              <th className="text-center px-4 py-3 text-gray-500 font-semibold w-32">TRẠNG THÁI</th>
              <th className="text-center px-4 py-3 text-gray-500 font-semibold w-20">THAO TÁC</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {filtered.map((app, idx) => {
              const sc = MINI_APP_STATUS_CONFIG[app.trangThai];
              return (
                <tr key={app.id} className="hover:bg-gray-50/60 transition-colors">
                  <td className="px-4 py-3.5 text-gray-500">{idx + 1}</td>
                  <td className="px-4 py-3.5">
                    <div className="flex items-center gap-2.5">
                      <div className="w-7 h-7 rounded bg-[#D1E9FF] flex items-center justify-center shrink-0">
                        <Smartphone size={13} className="text-[#094D8A]" />
                      </div>
                      <span className="font-medium text-gray-800">{app.ten}</span>
                    </div>
                  </td>
                  <td className="px-4 py-3.5 text-gray-500">{app.danhMuc}</td>
                  <td className="px-4 py-3.5 text-center text-gray-500 font-mono">{app.phienBan}</td>
                  <td className="px-4 py-3.5 text-center text-gray-500">{app.ngayTao}</td>
                  <td className="px-4 py-3.5 text-center">
                    <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-medium"
                      style={{ color: sc.color, background: sc.bg }}>
                      {app.trangThai}
                    </span>
                  </td>
                  <td className="px-4 py-3.5 text-center">
                    <button onClick={() => setSelectedApp(app)} className="text-xs text-[#094D8A] hover:text-[#073A63] font-medium transition-colors">Xem</button>
                  </td>
                </tr>
              );
            })}
            {filtered.length === 0 && (
              <tr><td colSpan={7} className="px-4 py-10 text-center text-gray-400">Không có Mini App</td></tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}

// ─── Activity Log ──────────────────────────────────────────────────────────
type ActivityType = "Đăng nhập" | "Cập nhật Mini App" | "Tham gia doanh nghiệp" | "Tạo phiên bản" | "Gửi kiểm duyệt" | "Cập nhật tài khoản" | "Xuất bản Mini App" | "Rời doanh nghiệp";

interface ActivityLog {
  id: number;
  thoiGian: string;
  loai: ActivityType;
  tieuDe: string;
  chiTiet?: string;
}

const ACTIVITY_TYPE_CONFIG: Record<ActivityType, { color: string; bg: string; icon: string }> = {
  "Đăng nhập":            { color: "#2563EB", bg: "#DBEAFE", icon: "🔐" },
  "Cập nhật Mini App":    { color: "#7C3AED", bg: "#EDE9FE", icon: "✏️" },
  "Tham gia doanh nghiệp":{ color: "#16A34A", bg: "#DCFCE7", icon: "🏢" },
  "Tạo phiên bản":        { color: "#0891B2", bg: "#CFFAFE", icon: "🚀" },
  "Gửi kiểm duyệt":      { color: "#D97706", bg: "#FEF3C7", icon: "📤" },
  "Cập nhật tài khoản":  { color: "#6B7280", bg: "#F3F4F6", icon: "👤" },
  "Xuất bản Mini App":   { color: "#16A34A", bg: "#DCFCE7", icon: "✅" },
  "Rời doanh nghiệp":    { color: "#DC2626", bg: "#FEE2E2", icon: "🚪" },
};

const ALL_ACTIVITY_TYPES: (ActivityType | "Tất cả loại")[] = [
  "Tất cả loại", "Đăng nhập", "Cập nhật Mini App", "Tham gia doanh nghiệp",
  "Tạo phiên bản", "Gửi kiểm duyệt", "Cập nhật tài khoản", "Xuất bản Mini App",
];

const ACTIVITY_LOGS: Record<string, ActivityLog[]> = {
  "123456": [
    { id: 1,  thoiGian: "24/06/2026 08:32", loai: "Đăng nhập",             tieuDe: "Đăng nhập hệ thống",                                      chiTiet: "Đăng nhập thành công từ Web Portal" },
    { id: 2,  thoiGian: "23/06/2026 15:20", loai: "Cập nhật Mini App",     tieuDe: "Cập nhật Mini App \"Sổ liên lạc điện tử\"",               chiTiet: "Doanh nghiệp: Công nghệ XYZ" },
    { id: 3,  thoiGian: "20/06/2026 09:12", loai: "Tham gia doanh nghiệp", tieuDe: "Tham gia doanh nghiệp \"Giáo dục ABC\"" },
    { id: 4,  thoiGian: "18/06/2026 14:00", loai: "Tạo phiên bản",         tieuDe: "Tạo phiên bản v2.3.0 của Mini App \"Xe đưa đón học sinh\"" },
    { id: 5,  thoiGian: "15/06/2026 10:00", loai: "Gửi kiểm duyệt",        tieuDe: "Gửi Mini App \"Cổng thông tin\" để kiểm duyệt" },
    { id: 6,  thoiGian: "10/06/2026 16:45", loai: "Cập nhật tài khoản",    tieuDe: "Cập nhật thông tin tài khoản" },
    { id: 7,  thoiGian: "05/06/2026 11:30", loai: "Xuất bản Mini App",      tieuDe: "Xuất bản Mini App \"Điểm danh thông minh\"",              chiTiet: "Phiên bản v1.0.0 — Công nghệ XYZ" },
    { id: 8,  thoiGian: "01/06/2026 09:00", loai: "Đăng nhập",             tieuDe: "Đăng nhập hệ thống",                                      chiTiet: "Đăng nhập thành công từ Mobile App" },
    { id: 9,  thoiGian: "28/05/2026 14:20", loai: "Tạo phiên bản",         tieuDe: "Tạo phiên bản v1.8.0 của Mini App \"Học liệu số\"" },
    { id: 10, thoiGian: "25/05/2026 08:05", loai: "Gửi kiểm duyệt",        tieuDe: "Gửi Mini App \"Thông báo học đường\" để kiểm duyệt" },
    { id: 11, thoiGian: "20/05/2026 10:30", loai: "Cập nhật Mini App",     tieuDe: "Cập nhật Mini App \"Khảo sát phụ huynh\"",                chiTiet: "Doanh nghiệp: Công nghệ XYZ" },
    { id: 12, thoiGian: "15/05/2026 13:00", loai: "Đăng nhập",             tieuDe: "Đăng nhập hệ thống",                                      chiTiet: "Đăng nhập thành công từ Web Portal" },
    { id: 13, thoiGian: "10/05/2026 09:45", loai: "Xuất bản Mini App",      tieuDe: "Xuất bản Mini App \"Sổ liên lạc điện tử\"",               chiTiet: "Phiên bản v2.2.0 — Công nghệ XYZ" },
    { id: 14, thoiGian: "05/05/2026 11:10", loai: "Tham gia doanh nghiệp", tieuDe: "Tham gia dự án tại \"Công nghệ XYZ\"" },
    { id: 15, thoiGian: "01/05/2026 16:00", loai: "Cập nhật tài khoản",    tieuDe: "Đổi mật khẩu tài khoản" },
  ],
};

function TabActivityLog({ memberId }: { memberId: string }) {
  const logs = ACTIVITY_LOGS[memberId] ?? [];
  const [search, setSearch] = useState("");
  const [typeFilter, setTypeFilter] = useState<ActivityType | "Tất cả loại">("Tất cả loại");
  const [page, setPage] = useState(1);
  const rowsPerPage = 6;

  const filtered = logs.filter((l) => {
    const matchSearch = search === "" || l.tieuDe.toLowerCase().includes(search.toLowerCase()) || (l.chiTiet ?? "").toLowerCase().includes(search.toLowerCase());
    const matchType = typeFilter === "Tất cả loại" || l.loai === typeFilter;
    return matchSearch && matchType;
  });
  const totalPages = Math.max(1, Math.ceil(filtered.length / rowsPerPage));
  const paged = filtered.slice((page - 1) * rowsPerPage, page * rowsPerPage);

  return (
    <div className="space-y-3">
      {/* Toolbar */}
      <div className="flex items-center gap-3">
        <div className="relative flex-1">
          
        </div>
        <select
          value={typeFilter}
          onChange={(e) => { setTypeFilter(e.target.value as typeof typeFilter); setPage(1); }}
          className="text-xs border border-gray-200 rounded px-3 py-2 bg-white text-gray-600 shadow-sm focus:outline-none focus:border-[#094D8A] cursor-pointer shrink-0"
        >
          {ALL_ACTIVITY_TYPES.map((t) => <option key={t}>{t}</option>)}
        </select>
      </div>

      {/* Log cards */}
      <div className="space-y-2">
        {paged.map((log) => {
          const cfg = ACTIVITY_TYPE_CONFIG[log.loai];
          return (
            <div key={log.id} className="bg-white rounded-md border border-gray-100 shadow-sm px-5 py-4 flex gap-4 items-start">
              {/* Icon */}
              <div className="w-9 h-9 rounded flex items-center justify-center shrink-0 text-base"
                style={{ background: cfg.bg }}>
                {cfg.icon}
              </div>
              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold text-gray-800 mb-0.5">{log.tieuDe}</p>
                    {log.chiTiet && (
                      <p className="text-[11px] text-gray-400">{log.chiTiet}</p>
                    )}
                  </div>
                  <span className="text-[11px] text-gray-400 shrink-0 whitespace-nowrap">{log.thoiGian}</span>
                </div>
                <div className="mt-1.5">
                  <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold"
                    style={{ color: cfg.color, background: cfg.bg }}>
                    {log.loai}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
        {paged.length === 0 && (
          <div className="bg-white rounded-md border border-gray-100 shadow-sm p-10 text-center text-gray-400 text-sm">
            Không có hoạt động nào
          </div>
        )}
      </div>

      {/* Pagination */}
      <div className="bg-white rounded-md border border-gray-100 shadow-sm px-4 py-3 flex items-center justify-between">
        <span className="text-xs text-gray-400">
          Hiển thị {filtered.length === 0 ? 0 : (page - 1) * rowsPerPage + 1}–{Math.min(page * rowsPerPage, filtered.length)} / {filtered.length} hoạt động
        </span>
        <div className="flex items-center gap-1">
          <button onClick={() => setPage((p) => Math.max(1, p - 1))} disabled={page === 1}
            className="w-7 h-7 flex items-center justify-center rounded border border-gray-200 text-gray-500 hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed">
            <ChevronLeft size={12} />
          </button>
          {Array.from({ length: Math.min(totalPages, 5) }, (_, i) => {
            const p = totalPages <= 5 ? i + 1 : page <= 3 ? i + 1 : page >= totalPages - 2 ? totalPages - 4 + i : page - 2 + i;
            return (
              <button key={p} onClick={() => setPage(p)}
                className={`w-7 h-7 flex items-center justify-center rounded text-xs font-medium transition-colors ${
                  p === page ? "bg-[#094D8A] text-white" : "border border-gray-200 text-gray-600 hover:bg-gray-50"
                }`}>
                {p}
              </button>
            );
          })}
          {totalPages > 5 && page < totalPages - 2 && (
            <span className="text-xs text-gray-400 px-1">...</span>
          )}
          {totalPages > 5 && (
            <button onClick={() => setPage(totalPages)}
              className={`w-7 h-7 flex items-center justify-center rounded text-xs font-medium transition-colors ${
                page === totalPages ? "bg-[#094D8A] text-white" : "border border-gray-200 text-gray-600 hover:bg-gray-50"
              }`}>
              {totalPages}
            </button>
          )}
          <button onClick={() => setPage((p) => Math.min(totalPages, p + 1))} disabled={page === totalPages}
            className="w-7 h-7 flex items-center justify-center rounded border border-gray-200 text-gray-500 hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed">
            <ChevronRight size={12} />
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── TabMemberMiniApp ──────────────────────────────────────────────────────
function TabMemberMiniApp({ memberApps, onViewMiniApp }: { memberApps: MemberMiniApp[]; onViewMiniApp: (appId: string) => void }) {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState<MiniAppStatus | "Tất cả trạng thái">("Tất cả trạng thái");
  const [page, setPage] = useState(1);
  const rowsPerPage = 10;
  const [selectedApp, setSelectedApp] = useState<MemberMiniApp | null>(null);

  const filtered = memberApps.filter((a) => {
    const matchSearch = search === "" || a.ten.toLowerCase().includes(search.toLowerCase());
    const matchStatus = statusFilter === "Tất cả trạng thái" || a.trangThai === statusFilter;
    return matchSearch && matchStatus;
  });
  const totalPages = Math.max(1, Math.ceil(filtered.length / rowsPerPage));
  const paged = filtered.slice((page - 1) * rowsPerPage, page * rowsPerPage);

  return (
    <>
      {selectedApp && (() => {
        const detail = MINI_APP_DETAILS[selectedApp.appId];
        const owner = MINI_APP_MEMBERS[selectedApp.appId]?.find((m) => m.vaiTro === "Owner")?.ten ?? "—";
        const fakeItem: MiniAppItem = {
          id: 0, appId: selectedApp.appId, ten: selectedApp.ten,
          danhMuc: "—", phienBan: detail?.phienBanHienTai ?? "—",
          ngayTao: "—", trangThai: selectedApp.trangThai,
        };
        return (
          <MiniAppDrawer
            app={fakeItem}
            owner={owner}
            onClose={() => setSelectedApp(null)}
            onViewFull={() => { setSelectedApp(null); onViewMiniApp(selectedApp.appId); }}
          />
        );
      })()}
      <div className="bg-white rounded-md border border-gray-100 shadow-sm">
        {/* Toolbar */}
        <div className="flex items-center gap-3 px-4 py-3 border-b border-gray-100">
          <div className="relative flex-1 max-w-sm">
            <Search size={13} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Tìm kiếm Mini App"
              value={search}
              onChange={(e) => { setSearch(e.target.value); setPage(1); }}
              className="w-full pl-8 pr-3 py-2 text-xs border border-gray-200 rounded bg-gray-50 placeholder-gray-400 focus:outline-none focus:border-[#094D8A] focus:bg-white transition-colors"
            />
          </div>
          <select
            value={statusFilter}
            onChange={(e) => { setStatusFilter(e.target.value as typeof statusFilter); setPage(1); }}
            className="text-xs border border-gray-200 rounded px-3 py-2 bg-white text-gray-600 focus:outline-none focus:border-[#094D8A] cursor-pointer"
          >
            {ALL_MA_STATUS.map((s) => <option key={s}>{s}</option>)}
          </select>
        </div>

        {/* Table */}
        <table className="w-full text-xs">
          <thead>
            <tr className="border-b border-gray-100 bg-gray-50/60">
              <th className="text-left px-4 py-3 text-gray-500 font-semibold w-10">STT</th>
              <th className="text-left px-4 py-3 text-gray-500 font-semibold">MINI APP</th>
              <th className="text-left px-4 py-3 text-gray-500 font-semibold w-40">DOANH NGHIỆP</th>
              <th className="text-left px-4 py-3 text-gray-500 font-semibold w-28">VAI TRÒ</th>
              <th className="text-center px-4 py-3 text-gray-500 font-semibold w-32">TRẠNG THÁI</th>
              <th className="text-center px-4 py-3 text-gray-500 font-semibold w-24">THAO TÁC</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {paged.map((a, idx) => {
              const sc = MINI_APP_STATUS_CONFIG[a.trangThai];
              return (
                <tr key={idx} className="hover:bg-gray-50/60 transition-colors">
                  <td className="px-4 py-3.5 text-gray-500">{(page - 1) * rowsPerPage + idx + 1}</td>
                  <td className="px-4 py-3.5">
                    <div className="flex items-center gap-2.5">
                      <div className="w-7 h-7 rounded bg-[#D1E9FF] flex items-center justify-center shrink-0">
                        <Smartphone size={13} className="text-[#094D8A]" />
                      </div>
                      <span className="font-medium text-gray-800">{a.ten}</span>
                    </div>
                  </td>
                  <td className="px-4 py-3.5 text-gray-600">{a.doanhNghiep}</td>
                  <td className="px-4 py-3.5 text-gray-600">{a.vaiTro}</td>
                  <td className="px-4 py-3.5 text-center">
                    <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-medium"
                      style={{ color: sc.color, background: sc.bg }}>
                      {a.trangThai}
                    </span>
                  </td>
                  <td className="px-4 py-3.5 text-center">
                    <button onClick={() => setSelectedApp(a)} className="text-xs text-[#094D8A] hover:text-[#073A63] font-medium transition-colors">Xem</button>
                  </td>
                </tr>
              );
            })}
            {paged.length === 0 && (
              <tr><td colSpan={6} className="px-4 py-10 text-center text-gray-400">Không có Mini App</td></tr>
            )}
          </tbody>
        </table>

        {/* Pagination */}
        <div className="flex items-center justify-between px-4 py-3 border-t border-gray-100">
          <span className="text-xs text-gray-400">
            Hiển thị {filtered.length === 0 ? 0 : (page - 1) * rowsPerPage + 1}–{Math.min(page * rowsPerPage, filtered.length)} / {filtered.length} Mini App
          </span>
          <div className="flex items-center gap-1">
            <button onClick={() => setPage((p) => Math.max(1, p - 1))} disabled={page === 1}
              className="w-7 h-7 flex items-center justify-center rounded border border-gray-200 text-gray-500 hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed">
              <ChevronLeft size={12} />
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
              <button key={p} onClick={() => setPage(p)}
                className={`w-7 h-7 flex items-center justify-center rounded text-xs font-medium transition-colors ${
                  p === page ? "bg-[#094D8A] text-white" : "border border-gray-200 text-gray-600 hover:bg-gray-50"
                }`}>
                {p}
              </button>
            ))}
            <button onClick={() => setPage((p) => Math.min(totalPages, p + 1))} disabled={page === totalPages}
              className="w-7 h-7 flex items-center justify-center rounded border border-gray-200 text-gray-500 hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed">
              <ChevronRight size={12} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

// ─── DNDrawer ──────────────────────────────────────────────────────────────
function DNDrawer({ memberDN, onClose, onViewFull }: { memberDN: MemberDN; onClose: () => void; onViewFull: () => void }) {
  const dn = DN_DATA.find((d) => d.id === memberDN.dnId);
  const statusCfg = STATUS_CONFIG[memberDN.trangThai];
  const maDN = `ENT-${String(memberDN.dnId).padStart(6, '0')}`;

  return (
    <>
      <div className="fixed inset-0 bg-black/30 z-40" onClick={onClose} />
      <div className="fixed right-0 top-0 h-full w-96 bg-white shadow-2xl z-50 flex flex-col">
        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100 shrink-0">
          <h2 className="text-sm font-semibold text-gray-800">Chi tiết doanh nghiệp</h2>
          <button onClick={onClose} className="p-1 text-gray-400 hover:text-gray-600 transition-colors">
            <X size={16} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto">
          {/* Company identity */}
          <div className="px-5 py-4 border-b border-gray-100">
            <div className="text-sm font-semibold text-gray-900 mb-2">{memberDN.ten}</div>
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-semibold"
              style={{ color: statusCfg.color, background: statusCfg.bg }}>
              <span className="w-1.5 h-1.5 rounded-full inline-block" style={{ background: statusCfg.color }} />
              {memberDN.trangThai}
            </span>
            {dn && <div className="text-xs text-gray-500 mt-3 leading-relaxed">{dn.moTa}</div>}
          </div>

          {/* Info fields */}
          <div className="px-5 py-4 border-b border-gray-100 space-y-4">
            {([
              ["Mã doanh nghiệp", maDN],
              ["Email", dn?.email ?? "—"],
              ["Website", dn?.website ?? "—"],
              ["Ngày tham gia", memberDN.thamGia],
            ] as [string, string][]).map(([label, value]) => (
              <div key={label}>
                <div className="text-[10px] text-gray-400 font-semibold uppercase tracking-wide mb-0.5">{label}</div>
                <div className="text-xs text-gray-800">{value}</div>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="px-5 py-4 border-b border-gray-100 space-y-4">
            {([
              ["Thành viên", String(dn?.thanhVien ?? "—")],
              ["Mini App", String(dn?.miniApp ?? "—")],
              ["Published", String(dn?.daPublish ?? "—")],
            ] as [string, string][]).map(([label, value]) => (
              <div key={label}>
                <div className="text-[10px] text-gray-400 font-semibold uppercase tracking-wide mb-0.5">{label}</div>
                <div className="text-xs font-semibold text-gray-800">{value}</div>
              </div>
            ))}
          </div>

          {/* Representative */}
          {dn && (
            <div className="px-5 py-4 border-b border-gray-100">
              <div className="text-[10px] text-gray-400 font-semibold uppercase tracking-wide mb-2">Người đại diện</div>
              <div className="text-sm font-semibold text-gray-800">{dn.nguoiDaiDien}</div>
              <div className="text-xs text-gray-400 mt-0.5">Owner</div>
            </div>
          )}
        </div>

        <div className="px-5 py-4 border-t border-gray-100 shrink-0">
          <button onClick={onViewFull}
            className="w-full py-2.5 rounded text-xs font-semibold text-white transition-opacity hover:opacity-90"
            style={{ background: "linear-gradient(90deg, #094D8A 0%, #094D8A 100%)" }}>
            Xem hồ sơ doanh nghiệp
          </button>
        </div>
      </div>
    </>
  );
}

// ─── TabMemberDN ───────────────────────────────────────────────────────────
function TabMemberDN({ memberDNs, onViewDN }: { memberDNs: MemberDN[]; onViewDN: (dnId: number) => void }) {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [selectedDN, setSelectedDN] = useState<MemberDN | null>(null);
  const rowsPerPage = 6;

  const filtered = memberDNs.filter((d) =>
    search === "" || d.ten.toLowerCase().includes(search.toLowerCase())
  );
  const totalPages = Math.max(1, Math.ceil(filtered.length / rowsPerPage));
  const paged = filtered.slice((page - 1) * rowsPerPage, page * rowsPerPage);

  return (
    <>
      {selectedDN && (
        <DNDrawer
          memberDN={selectedDN}
          onClose={() => setSelectedDN(null)}
          onViewFull={() => { setSelectedDN(null); onViewDN(selectedDN.dnId); }}
        />
      )}
      <div className="bg-white rounded-md border border-gray-100 shadow-sm">
        {/* Search */}
        <div className="px-4 py-3 border-b border-gray-100">
          <div className="relative max-w-sm">
            <Search size={13} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Tìm kiếm doanh nghiệp"
              value={search}
              onChange={(e) => { setSearch(e.target.value); setPage(1); }}
              className="w-full pl-8 pr-3 py-2 text-xs border border-gray-200 rounded bg-gray-50 placeholder-gray-400 focus:outline-none focus:border-[#094D8A] focus:bg-white transition-colors"
            />
          </div>
        </div>

        {/* Table */}
        <table className="w-full text-xs">
          <thead>
            <tr className="border-b border-gray-100 bg-gray-50/60">
              <th className="text-left px-4 py-3 text-gray-500 font-semibold w-10">STT</th>
              <th className="text-left px-4 py-3 text-gray-500 font-semibold">DOANH NGHIỆP</th>
              <th className="text-left px-4 py-3 text-gray-500 font-semibold w-32">VAI TRÒ</th>
              <th className="text-center px-4 py-3 text-gray-500 font-semibold w-28">THAM GIA</th>
              <th className="text-center px-4 py-3 text-gray-500 font-semibold w-32">TRẠNG THÁI</th>
              <th className="text-center px-4 py-3 text-gray-500 font-semibold w-24">THAO TÁC</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {paged.map((d, idx) => {
              const st = STATUS_CONFIG[d.trangThai];
              return (
                <tr key={idx} className="hover:bg-gray-50/60 transition-colors">
                  <td className="px-4 py-3.5 text-gray-500">{(page - 1) * rowsPerPage + idx + 1}</td>
                  <td className="px-4 py-3.5 font-semibold text-gray-800">{d.ten}</td>
                  <td className="px-4 py-3.5 text-gray-600">{d.vaiTro}</td>
                  <td className="px-4 py-3.5 text-center text-gray-500">{d.thamGia}</td>
                  <td className="px-4 py-3.5 text-center">
                    <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-medium"
                      style={{ color: st.color, background: st.bg }}>
                      {st.label}
                    </span>
                  </td>
                  <td className="px-4 py-3.5 text-center">
                    <button onClick={() => setSelectedDN(d)} className="text-xs text-[#094D8A] hover:text-[#073A63] font-medium transition-colors">Xem</button>
                  </td>
                </tr>
              );
            })}
            {paged.length === 0 && (
              <tr><td colSpan={6} className="px-4 py-10 text-center text-gray-400">Không có dữ liệu</td></tr>
            )}
          </tbody>
        </table>

        {/* Pagination */}
        <div className="flex items-center justify-between px-4 py-3 border-t border-gray-100">
          <span className="text-xs text-gray-400">
            Hiển thị {filtered.length === 0 ? 0 : (page - 1) * rowsPerPage + 1}–{Math.min(page * rowsPerPage, filtered.length)} / {filtered.length} doanh nghiệp
          </span>
          <div className="flex items-center gap-1">
            <button onClick={() => setPage((p) => Math.max(1, p - 1))} disabled={page === 1}
              className="w-7 h-7 flex items-center justify-center rounded border border-gray-200 text-gray-500 hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed">
              <ChevronLeft size={12} />
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
              <button key={p} onClick={() => setPage(p)}
                className={`w-7 h-7 flex items-center justify-center rounded text-xs font-medium transition-colors ${
                  p === page ? "bg-[#094D8A] text-white" : "border border-gray-200 text-gray-600 hover:bg-gray-50"
                }`}>
                {p}
              </button>
            ))}
            <button onClick={() => setPage((p) => Math.min(totalPages, p + 1))} disabled={page === totalPages}
              className="w-7 h-7 flex items-center justify-center rounded border border-gray-200 text-gray-500 hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed">
              <ChevronRight size={12} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

// ─── Chi tiết Thành viên ───────────────────────────────────────────────────
const MEMBER_DETAIL_TABS = ["Tổng quan", "Doanh nghiệp", "Mini App", "Nhật ký hoạt động"];

function ChiTietThanhVien({ memberId, dnId, onBack, onNavigate, onViewMiniApp, onViewDN, fromScreen }: {
  memberId: string;
  dnId: number;
  onBack: () => void;
  onNavigate: (s: Screen) => void;
  onViewMiniApp: (appId: string) => void;
  onViewDN: (dnId: number) => void;
  fromScreen?: Screen;
}) {
  const members = MEMBERS_BY_DN[dnId] ?? [];
  const m = members.find((x) => x.id === memberId)!;
  const dn = DN_DATA.find((d) => d.id === dnId);
  const [activeTab, setActiveTab] = useState("Tổng quan");

  const statusColor = m.trangThaiTK === "Hoạt động" ? "#16A34A" : m.trangThaiTK === "Tạm khóa" ? "#2563EB" : "#6B7280";
  const statusBg   = m.trangThaiTK === "Hoạt động" ? "#DCFCE7" : m.trangThaiTK === "Tạm khóa" ? "#DBEAFE" : "#F3F4F6";

  const memberDNs   = MEMBER_DNS[memberId] ?? [];
  const memberApps  = MEMBER_MINI_APPS[memberId] ?? [];

  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden" style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}>
      <Sidebar current={fromScreen === "developer" ? "developer" : "doanhNghiep"} onNavigate={onNavigate} />
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top bar */}
        <header className="bg-white border-b border-gray-100 px-6 py-3 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-1.5 text-xs text-gray-400">
            {fromScreen === "developer" ? (
              <>
                <button onClick={onBack} className="hover:text-[#094D8A] transition-colors">Developer</button>
                <span>/</span>
                <span className="text-gray-700 font-medium">{m.ten}</span>
              </>
            ) : fromScreen === "chiTietDoanhNghiep" ? (
              <>
                <button onClick={() => onNavigate("dashboard")} className="hover:text-[#094D8A] transition-colors">Tổng quan</button>
                <span>/</span>
                <button onClick={() => onNavigate("doanhNghiep")} className="hover:text-[#094D8A] transition-colors">Doanh nghiệp</button>
                <span>/</span>
                <button onClick={onBack} className="hover:text-[#094D8A] transition-colors truncate max-w-36">{dn?.ten ?? "Chi tiết"}</button>
                <span>/</span>
                <span className="text-gray-700 font-medium">{m.ten}</span>
              </>
            ) : (
              <>
                <button onClick={() => onNavigate("dashboard")} className="hover:text-[#094D8A] transition-colors">Tổng quan</button>
                <span>/</span>
                <button onClick={onBack} className="hover:text-[#094D8A] transition-colors">Doanh nghiệp</button>
                <span>/</span>
                <span className="text-gray-700 font-medium">{m.ten}</span>
              </>
            )}
          </div>
          <div className="flex items-center gap-3">
            <button className="relative p-1.5 text-gray-500 hover:text-gray-800">
              <Bell size={18} />
              <span className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-red-500 rounded-full" />
            </button>
            <button className="p-1.5 text-gray-500 hover:text-gray-800"><HelpCircle size={18} /></button>
            <img src={MAN_PHOTO_2} alt="Avatar" className="w-8 h-8 rounded-full object-cover border border-gray-200" />
          </div>
        </header>

        <div className="flex-1 overflow-y-auto px-6 py-5 space-y-4">
          <button onClick={onBack} className="flex items-center gap-1 text-xs text-gray-500 hover:text-[#094D8A] transition-colors">
            <ChevronLeft size={14} /> Quay lại
          </button>

          {/* Header card + tabs */}
          <div className="bg-white rounded-md border border-gray-100 shadow-sm">
            <div className="p-5">
              <div className="flex items-start justify-between gap-4 mb-2">
                <div>
                  <h2 className="text-lg font-semibold text-gray-900 mb-0.5">{m.ten}</h2>
                  <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
                    <span className="font-medium">{m.vaiTro}</span>
                    <span className="text-gray-300">•</span>
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-semibold"
                      style={{ color: statusColor, background: statusBg }}>
                      <span className="w-1.5 h-1.5 rounded-full inline-block" style={{ background: statusColor }} />
                      {m.trangThaiTK}
                    </span>
                  </div>
                  <div className="space-y-1 text-xs text-gray-500">
                    <div>Email: <span className="text-gray-700 font-medium">{m.email}</span></div>
                    <div>Tham gia hệ thống: <span className="text-gray-700 font-medium">{m.thamGia}</span></div>
                    <div>Hoạt động gần nhất: <span className="text-gray-700 font-medium">{m.hoatDongGanNhat}</span></div>
                  </div>
                  <div className="flex items-center gap-2 mt-3 text-xs text-[#094D8A] font-medium">
                    <span>{m.soDoanhNghiep} Doanh nghiệp</span>
                    <span className="text-gray-300">•</span>
                    <span>{m.soMiniApp} Mini App</span>
                    <span className="text-gray-300">•</span>
                    <span>{m.soPublished} Published</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  {m.trangThaiTK === "Hoạt động" && <>
                    <ActionBtn label="Tạm khóa" variant="lock" />
                    <ActionBtn label="Ngừng hoạt động" variant="stop" />
                  </>}
                  {m.trangThaiTK === "Tạm khóa" && <>
                    <ActionBtn label="Mở khóa" variant="unlock" />
                    <ActionBtn label="Ngừng hoạt động" variant="stop" />
                  </>}
                </div>
              </div>
            </div>

            {/* Tabs inside card */}
            <div className="flex border-t border-gray-100 px-5">
              {MEMBER_DETAIL_TABS.map((tab) => {
                const badge = tab === "Doanh nghiệp" ? m.soDoanhNghiep : tab === "Mini App" ? m.soMiniApp : null;
                const active = activeTab === tab;
                return (
                  <button key={tab} onClick={() => setActiveTab(tab)}
                    className={`px-3 py-3 text-xs font-medium whitespace-nowrap transition-colors border-b-2 -mb-px flex items-center gap-1.5 ${
                      active ? "border-[#094D8A] text-[#094D8A]" : "border-transparent text-gray-500 hover:text-gray-700"
                    }`}>
                    {tab}
                    {badge !== null && (
                      <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-semibold ${active ? "bg-[#D1E9FF] text-[#094D8A]" : "bg-gray-100 text-gray-500"}`}>
                        {badge}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Tab: Tổng quan */}
          {activeTab === "Tổng quan" && (
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                {/* Thông tin cá nhân */}
                <div className="bg-white rounded-md border border-gray-100 shadow-sm p-5">
                  <h3 className="text-xs font-semibold text-gray-700 uppercase tracking-wide mb-3">Thông tin cá nhân</h3>
                  <InfoRow label="Họ tên" value={m.ten} />
                  <InfoRow label="Email" value={m.email} />
                  <InfoRow label="Số điện thoại" value={m.sdt} />
                  <InfoRow label="Chức danh" value={m.chucDanh} />
                  {m.ghiChu && <InfoRow label="Ghi chú" value={m.ghiChu} />}
                </div>
                {/* Thông tin tài khoản */}
                <div className="bg-white rounded-md border border-gray-100 shadow-sm p-5">
                  <h3 className="text-xs font-semibold text-gray-700 uppercase tracking-wide mb-3">Thông tin tài khoản</h3>
                  <InfoRow label="Developer ID" value={m.developerID} />
                  <InfoRow label="Trạng thái" value={m.trangThaiTK} />
                  <InfoRow label="Ngày tham gia" value={m.thamGia} />
                  <InfoRow label="Lần đăng nhập cuối" value={m.hoatDongGanNhat} />
                  <InfoRow label="Tổng số doanh nghiệp" value={String(m.soDoanhNghiep)} />
                  <InfoRow label="Tổng số Mini App" value={String(m.soMiniApp)} />
                </div>
              </div>

              {/* Doanh nghiệp tham gia */}
              

              {/* Mini App nổi bật */}
              
               
              
            </div>
          )}

          {/* Tab: Doanh nghiệp */}
          {activeTab === "Doanh nghiệp" && (
            <TabMemberDN memberDNs={memberDNs} onViewDN={onViewDN} />
          )}

          {/* Tab: Mini App */}
          {activeTab === "Mini App" && <TabMemberMiniApp memberApps={memberApps} onViewMiniApp={onViewMiniApp} />}

          {/* Tab: Nhật ký hoạt động */}
          {activeTab === "Nhật ký hoạt động" && <TabActivityLog memberId={m.id} />}
        </div>
      </div>
    </div>
  );
}

// ─── MemberDrawer ──────────────────────────────────────────────────────────
function MemberDrawer({ member, onClose, onViewFull }: { member: Member; onClose: () => void; onViewFull: () => void }) {
  const miniApps = MEMBER_MINI_APPS[member.id] ?? [];
  const statusCfg = STATUS_CONFIG[member.trangThaiTK];

  return (
    <>
      <div className="fixed inset-0 bg-black/30 z-40" onClick={onClose} />
      <div className="fixed right-0 top-0 h-full w-96 bg-white shadow-2xl z-50 flex flex-col">
        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100 shrink-0">
          <h2 className="text-sm font-semibold text-gray-800">Thông tin nhân viên</h2>
          <button onClick={onClose} className="p-1 text-gray-400 hover:text-gray-600 transition-colors">
            <X size={16} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-5 py-4 space-y-5">
          <div>
            <div className="text-[10px] text-gray-400 font-semibold uppercase tracking-wide mb-1">Tên</div>
            <div className="text-sm font-semibold text-gray-800">{member.ten}</div>
          </div>
          <div>
            <div className="text-[10px] text-gray-400 font-semibold uppercase tracking-wide mb-1">Email</div>
            <div className="text-xs text-gray-700">{member.email}</div>
          </div>
          <div>
            <div className="text-[10px] text-gray-400 font-semibold uppercase tracking-wide mb-1">Vai trò</div>
            <div className="text-xs text-gray-700">{member.vaiTro}</div>
          </div>
          <div>
            <div className="text-[10px] text-gray-400 font-semibold uppercase tracking-wide mb-1">Trạng thái</div>
            <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-semibold"
              style={{ color: statusCfg.color, background: statusCfg.bg }}>
              {member.trangThaiTK}
            </span>
          </div>
          <div>
            <div className="text-[10px] text-gray-400 font-semibold uppercase tracking-wide mb-2">Danh sách Mini App tham gia</div>
            {miniApps.length === 0 ? (
              <div className="text-xs text-gray-400 py-2">Chưa tham gia Mini App nào</div>
            ) : (
              <div className="space-y-2">
                {miniApps.map((app) => {
                  const sc = MINI_APP_STATUS_CONFIG[app.trangThai];
                  return (
                    <div key={app.appId} className="flex items-center justify-between p-2.5 rounded bg-gray-50 border border-gray-100">
                      <div className="flex items-center gap-2 min-w-0">
                        <div className="w-7 h-7 rounded bg-[#D1E9FF] flex items-center justify-center shrink-0">
                          <Smartphone size={12} className="text-[#094D8A]" />
                        </div>
                        <div className="min-w-0">
                          <div className="text-xs font-medium text-gray-800 truncate">{app.ten}</div>
                          <div className="text-[10px] text-gray-400">{app.vaiTro}</div>
                        </div>
                      </div>
                      <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full shrink-0 ml-2"
                        style={{ color: sc.color, background: sc.bg }}>
                        {app.trangThai}
                      </span>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>

        <div className="px-5 py-4 border-t border-gray-100 shrink-0">
          <button onClick={onViewFull}
            className="w-full py-2.5 rounded text-xs font-semibold text-white transition-opacity hover:opacity-90"
            style={{ background: "linear-gradient(90deg, #094D8A 0%, #094D8A 100%)" }}>
            Xem hồ sơ đầy đủ
          </button>
        </div>
      </div>
    </>
  );
}

function MiniAppDrawer({ app, owner, onClose, onViewFull }: {
  app: MiniAppItem;
  owner: string;
  onClose: () => void;
  onViewFull: () => void;
}) {
  const sc = MINI_APP_STATUS_CONFIG[app.trangThai];
  return (
    <>
      <div className="fixed inset-0 bg-black/30 z-40" onClick={onClose} />
      <div className="fixed right-0 top-0 h-full w-96 bg-white shadow-2xl z-50 flex flex-col">
        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100 shrink-0">
          <h2 className="text-sm font-semibold text-gray-800">Thông tin Mini App</h2>
          <button onClick={onClose} className="p-1 text-gray-400 hover:text-gray-600 transition-colors">
            <X size={16} />
          </button>
        </div>
        <div className="flex-1 overflow-y-auto px-5 py-4 space-y-5">
          <div>
            <div className="text-[10px] text-gray-400 font-semibold uppercase tracking-wide mb-1">Tên</div>
            <div className="text-sm font-semibold text-gray-800">{app.ten}</div>
          </div>
          <div>
            <div className="text-[10px] text-gray-400 font-semibold uppercase tracking-wide mb-1">Trạng thái</div>
            <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-semibold"
              style={{ color: sc.color, background: sc.bg }}>
              {app.trangThai}
            </span>
          </div>
          <div>
            <div className="text-[10px] text-gray-400 font-semibold uppercase tracking-wide mb-1">Version hiện tại</div>
            <div className="text-xs text-gray-700 font-mono">{app.phienBan}</div>
          </div>
          <div>
            <div className="text-[10px] text-gray-400 font-semibold uppercase tracking-wide mb-1">Owner</div>
            <div className="text-xs text-gray-700">{owner}</div>
          </div>
        </div>
        <div className="px-5 py-4 border-t border-gray-100 shrink-0">
          <button onClick={onViewFull}
            className="w-full py-2.5 rounded text-xs font-semibold text-white transition-opacity hover:opacity-90"
            style={{ background: "linear-gradient(90deg, #094D8A 0%, #094D8A 100%)" }}>
            Xem chi tiết Mini App
          </button>
        </div>
      </div>
    </>
  );
}

function TabThanhVien({ dn, onViewMember }: { dn: (typeof DN_DATA)[0]; onViewMember: (id: string) => void }) {
  const members = MEMBERS_BY_DN[dn.id] ?? [];
  const [search, setSearch] = useState("");
  const [roleFilter, setRoleFilter] = useState("Tất cả vai trò");
  const [selectedMember, setSelectedMember] = useState<Member | null>(null);
  const allRoles = ["Tất cả vai trò", ...Array.from(new Set(members.map((m) => m.vaiTro)))];
  const filtered = members.filter((m) => {
    const matchSearch = search === "" || m.ten.toLowerCase().includes(search.toLowerCase()) || m.email.toLowerCase().includes(search.toLowerCase());
    const matchRole = roleFilter === "Tất cả vai trò" || m.vaiTro === roleFilter;
    return matchSearch && matchRole;
  });

  return (
    <>
      {selectedMember && (
        <MemberDrawer
          member={selectedMember}
          onClose={() => setSelectedMember(null)}
          onViewFull={() => { setSelectedMember(null); onViewMember(selectedMember.id); }}
        />
      )}
      <div className="bg-white rounded-md border border-gray-100 shadow-sm">
        {/* Toolbar */}
        <div className="flex items-center gap-3 px-4 py-3 border-b border-gray-100">
          <div className="relative flex-1 max-w-sm">
            <Search size={13} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input type="text" placeholder="Tìm kiếm theo tên hoặc email"
              value={search} onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-8 pr-3 py-2 text-xs border border-gray-200 rounded bg-gray-50 placeholder-gray-400 focus:outline-none focus:border-[#094D8A] focus:bg-white transition-colors" />
          </div>
          <select value={roleFilter} onChange={(e) => setRoleFilter(e.target.value)}
            className="text-xs border border-gray-200 rounded px-3 py-2 bg-white text-gray-600 focus:outline-none focus:border-[#094D8A] cursor-pointer">
            {allRoles.map((r) => <option key={r}>{r}</option>)}
          </select>
        </div>

        {/* Table */}
        <table className="w-full text-xs">
          <thead>
            <tr className="border-b border-gray-100 bg-gray-50/60">
              <th className="text-left px-4 py-3 text-gray-500 font-semibold w-10">STT</th>
              <th className="text-left px-4 py-3 text-gray-500 font-semibold">THÀNH VIÊN</th>
              <th className="text-left px-4 py-3 text-gray-500 font-semibold">EMAIL</th>
              <th className="text-left px-4 py-3 text-gray-500 font-semibold w-36">VAI TRÒ</th>
              <th className="text-center px-4 py-3 text-gray-500 font-semibold w-28">THAM GIA</th>
              <th className="text-center px-4 py-3 text-gray-500 font-semibold w-24">THAO TÁC</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {filtered.map((m, idx) => (
              <tr key={m.id} className="hover:bg-gray-50/60 transition-colors">
                <td className="px-4 py-3.5 text-gray-500">{idx + 1}</td>
                <td className="px-4 py-3.5">
                  <div className="font-semibold text-gray-800">{m.ten}</div>
                  <div className="text-gray-400 text-[11px] mt-0.5">ID: {m.id}</div>
                </td>
                <td className="px-4 py-3.5 text-gray-600">{m.email}</td>
                <td className="px-4 py-3.5 text-gray-600">{m.vaiTro}</td>
                <td className="px-4 py-3.5 text-center text-gray-500">{m.thamGia}</td>
                <td className="px-4 py-3.5 text-center">
                  <button onClick={() => setSelectedMember(m)} className="text-xs text-[#094D8A] hover:text-[#073A63] font-medium transition-colors">Xem</button>
                </td>
              </tr>
            ))}
            {filtered.length === 0 && (
              <tr><td colSpan={6} className="px-4 py-10 text-center text-gray-400">Không có thành viên</td></tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}

function ChiTietDoanhNghiep({ id, onBack, onNavigate, onViewMember, onViewMiniApp, fromScreen }: { id: number; onBack: () => void; onNavigate: (s: Screen) => void; onViewMember: (memberId: string) => void; onViewMiniApp: (appId: string) => void; fromScreen?: Screen }) {
  const dn = DN_DATA.find((d) => d.id === id)!;
  const [activeTab, setActiveTab] = useState("Tổng quan");

  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden" style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}>
      <Sidebar current="doanhNghiep" onNavigate={onNavigate} />
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top bar */}
        <header className="bg-white border-b border-gray-100 px-6 py-3 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-1.5 text-xs text-gray-400">
            {fromScreen === "chiTietThanhVien" ? (
              <>
                <button onClick={() => onNavigate("doanhNghiep")} className="hover:text-[#094D8A] transition-colors">Doanh nghiệp</button>
                <span>/</span>
                <span className="text-gray-700 font-medium truncate max-w-48">{dn.ten}</span>
              </>
            ) : (
              <>
                <button onClick={() => onNavigate("dashboard")} className="hover:text-[#094D8A] transition-colors">Tổng quan</button>
                <span>/</span>
                <button onClick={onBack} className="hover:text-[#094D8A] transition-colors">Doanh nghiệp</button>
                <span>/</span>
                <span className="text-gray-700 font-medium truncate max-w-48">{dn.ten}</span>
              </>
            )}
          </div>
          <div className="flex items-center gap-3">
            <button className="relative p-1.5 text-gray-500 hover:text-gray-800">
              <Bell size={18} />
              <span className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-red-500 rounded-full" />
            </button>
            <button className="p-1.5 text-gray-500 hover:text-gray-800"><HelpCircle size={18} /></button>
            <img src={MAN_PHOTO_2} alt="Avatar" className="w-8 h-8 rounded-full object-cover border border-gray-200" />
          </div>
        </header>

        <div className="flex-1 overflow-y-auto px-6 py-5 space-y-4">
          {/* Back */}
          <button onClick={onBack} className="flex items-center gap-1 text-xs text-gray-500 hover:text-[#094D8A] transition-colors">
            <ChevronLeft size={14} /> Quay lại
          </button>

          {/* Unified header card with tabs */}
          <DetailHeader dn={dn} activeTab={activeTab} onTabChange={setActiveTab} />

          {/* Tab: Tổng quan */}
          {activeTab === "Tổng quan" && (
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white rounded-md border border-gray-100 shadow-sm p-5">
                  <h3 className="text-xs font-semibold text-gray-700 uppercase tracking-wide mb-3">Thông tin doanh nghiệp</h3>
                  <InfoRow label="Tên doanh nghiệp" value={dn.ten} />
                  <InfoRow label="Mã số thuế" value={dn.mst} />
                  <InfoRow label="Loại hình" value={dn.loaiHinh} />
                  <InfoRow label="Email liên hệ" value={dn.email} />
                  <InfoRow label="Website" value={dn.website} isLink />
                  <InfoRow label="Mô tả" value={dn.moTa} />
                </div>
                <div className="bg-white rounded-md border border-gray-100 shadow-sm p-5">
                  <h3 className="text-xs font-semibold text-gray-700 uppercase tracking-wide mb-3">Thông tin tài khoản</h3>
                  <InfoRow label="Trạng thái" value={dn.trangThai} />
                  <InfoRow label="Ngày tham gia" value={dn.thamGia} />
                  <InfoRow label="Hoạt động gần nhất" value={dn.lanCuoiHoatDong} />
                  <InfoRow label="Tổng thành viên" value={String(dn.thanhVien)} />
                  <InfoRow label="Tổng Mini App" value={String(dn.miniApp)} />
                </div>
              </div>
              <div className="bg-white rounded-md border border-gray-100 shadow-sm p-5">
                <h3 className="text-xs font-semibold text-gray-700 uppercase tracking-wide mb-4">Thông tin người đại diện</h3>
                <div className="grid grid-cols-2 gap-x-8">
                  <InfoRow label="Họ tên" value={dn.nguoiDaiDien} />
                  <InfoRow label="Email" value={dn.email} />
                  <InfoRow label="Vai trò" value="Owner" />
                  <InfoRow label="Số điện thoại" value={dn.sdt} />
                </div>
              </div>
            </div>
          )}

          {/* Tab: Thành viên */}
          {activeTab === "Thành viên" && <TabThanhVien dn={dn} onViewMember={onViewMember} />}

          {/* Tab: Mini App */}
          {activeTab === "Mini App" && <TabMiniApp dn={dn} onViewMiniApp={onViewMiniApp} />}

          {/* Tab: Hoạt động */}
          {activeTab === "Hoạt động" && <TabDNActivity dnId={dn.id} />}
        </div>
      </div>
    </div>
  );
}

// ─── TabMiniAppActivity ────────────────────────────────────────────────────
function TabMiniAppActivity({ activities }: { activities: MiniAppActivityItem[] }) {
  const [actSearch, setActSearch] = useState("");
  const [actLoai, setActLoai] = useState("Tất cả loại");
  const [actThoiGian, setActThoiGian] = useState("Tất cả thời gian");

  const filtered = activities.filter((a) => {
    const matchSearch = actSearch === "" || a.tieuDe.toLowerCase().includes(actSearch.toLowerCase());
    const matchLoai = actLoai === "Tất cả loại" || a.loai === actLoai;
    const matchTime = actThoiGian === "Tất cả thời gian"
      || (actThoiGian === "Hôm nay" && a.ngay === "Hôm nay")
      || actThoiGian === "7 ngày qua"
      || actThoiGian === "30 ngày qua";
    return matchSearch && matchLoai && matchTime;
  });

  const grouped = filtered.reduce<Record<string, MiniAppActivityItem[]>>((acc, a) => {
    (acc[a.ngay] = acc[a.ngay] ?? []).push(a);
    return acc;
  }, {});

  return (
    <div className="space-y-4">
      {/* Toolbar */}
      <div className="flex items-center gap-3">
        <div className="relative flex-1">
          <Search size={13} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input type="text" placeholder="Tìm kiếm hoạt động" value={actSearch}
            onChange={(e) => setActSearch(e.target.value)}
            className="w-full pl-8 pr-3 py-2 text-xs border border-gray-200 rounded bg-white shadow-sm placeholder-gray-400 focus:outline-none focus:border-[#094D8A] transition-colors" />
        </div>
        <select value={actLoai} onChange={(e) => setActLoai(e.target.value)}
          className="text-xs border border-gray-200 rounded px-3 py-2 bg-white text-gray-600 shadow-sm focus:outline-none focus:border-[#094D8A] cursor-pointer shrink-0">
          {MINI_APP_ACTIVITY_LOAI.map((l) => <option key={l}>{l}</option>)}
        </select>
        <select value={actThoiGian} onChange={(e) => setActThoiGian(e.target.value)}
          className="text-xs border border-gray-200 rounded px-3 py-2 bg-white text-gray-600 shadow-sm focus:outline-none focus:border-[#094D8A] cursor-pointer shrink-0">
          {MINI_APP_ACTIVITY_THOIGIAN.map((t) => <option key={t}>{t}</option>)}
        </select>
      </div>

      {/* Timeline grouped by date */}
      {Object.keys(grouped).length === 0 && (
        <div className="bg-white rounded-md border border-gray-100 shadow-sm p-10 text-center text-sm text-gray-400">Không có hoạt động</div>
      )}
      {Object.entries(grouped).map(([ngay, items]) => (
        <div key={ngay} className="space-y-2">
          <div className="flex items-center gap-2 text-xs font-semibold text-gray-500 mb-1">
            <span className="w-2 h-2 rounded-full bg-[#094D8A] inline-block shrink-0" />
            {ngay}
          </div>
          {items.map((a, i) => (
            <div key={i} className="bg-white rounded-md border border-gray-100 shadow-sm px-5 py-4">
              <div className="text-[11px] text-gray-400 mb-2">{a.gio}</div>
              <p className="text-xs font-semibold text-gray-800 mb-3">
                <span className="mr-1.5">{a.icon}</span>{a.tieuDe}
              </p>
              {a.chiTiet && a.chiTiet.map((section, si) => (
                <div key={si} className="mb-1.5 last:mb-0">
                  <span className="text-[11px] text-gray-400">{section.label}:</span>
                  {section.lines.length === 1 ? (
                    <span className="text-[11px] text-gray-700 ml-1 font-medium">{section.lines[0]}</span>
                  ) : (
                    <ul className="mt-1 space-y-0.5">
                      {section.lines.map((line, li) => (
                        <li key={li} className="text-[11px] text-gray-600 flex items-start gap-1.5">
                          <span className="text-gray-400 shrink-0">-</span>{line}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

// ─── Mini App Detail Data ──────────────────────────────────────────────────
interface MiniAppDetail {
  appId: string; ten: string; moTa: string; chucNang: string[];
  danhMuc: string; nenTang: string; doanhNghiep: string;
  trangThai: MiniAppStatus; ngayTao: string; capNhatCuoi: string;
  phienBanHienTai: string; nguoiPublish: string; ngayPhatHanh: string;
  nguoiDuyet: string; marketplace: string;
  nguoiDung: number; mau: number; phienTruyCap: number; danhGia: number;
}

const MINI_APP_DETAILS: Record<string, MiniAppDetail> = {
  "APP-000001": {
    appId: "APP-000001", ten: "Sổ liên lạc điện tử",
    moTa: "Mini App hỗ trợ trao đổi thông tin giữa nhà trường, giáo viên và phụ huynh.",
    chucNang: ["Tin nhắn giữa giáo viên và phụ huynh", "Xin nghỉ học", "Gửi thông báo", "Xem điểm và nhận xét học tập", "Theo dõi chuyên cần"],
    danhMuc: "Giáo dục", nenTang: "Mobile App / Web", doanhNghiep: "Công ty Công nghệ XYZ",
    trangThai: "Đã xuất bản", ngayTao: "12/05/2024", capNhatCuoi: "24/06/2026",
    phienBanHienTai: "v2.3.0", nguoiPublish: "Nguyễn Văn Admin", ngayPhatHanh: "24/06/2026",
    nguoiDuyet: "Nguyễn Văn Admin", marketplace: "Đang hiển thị",
    nguoiDung: 15200, mau: 4500, phienTruyCap: 98000, danhGia: 4.8,
  },
  "APP-000002": {
    appId: "APP-000002", ten: "Xe đưa đón",
    moTa: "Hệ thống quản lý và theo dõi xe đưa đón học sinh theo thời gian thực.",
    chucNang: ["Theo dõi xe theo thời gian thực", "Thông báo khi xe đến", "Lịch sử hành trình", "Quản lý danh sách học sinh"],
    danhMuc: "Giáo dục", nenTang: "Mobile App", doanhNghiep: "Công ty Công nghệ XYZ",
    trangThai: "Đã xuất bản", ngayTao: "20/05/2024", capNhatCuoi: "20/06/2026",
    phienBanHienTai: "v1.8.0", nguoiPublish: "Nguyễn Văn Admin", ngayPhatHanh: "15/06/2026",
    nguoiDuyet: "Trần Thị Admin", marketplace: "Đang hiển thị",
    nguoiDung: 8400, mau: 2100, phienTruyCap: 42000, danhGia: 4.6,
  },
};

const MINI_APP_VERSIONS: Record<string, { version: string; trangThai: string; ngayTao: string; nguoiTao: string }[]> = {
  "APP-000001": [
    { version: "v2.3.0", trangThai: "Đã xuất bản", ngayTao: "24/06/2026", nguoiTao: "Nguyễn Văn A" },
    { version: "v2.2.0", trangThai: "Đã xuất bản", ngayTao: "10/06/2026", nguoiTao: "Nguyễn Văn A" },
    { version: "v2.1.0", trangThai: "Lưu trữ",     ngayTao: "01/06/2026", nguoiTao: "Nguyễn Văn A" },
  ],
};

interface MiniAppMemberItem { memberId: string; ten: string; email: string; vaiTro: string; trangThai: "Hoạt động" | "Tạm khóa" | "Ngừng hoạt động"; }
const MINI_APP_MEMBERS: Record<string, MiniAppMemberItem[]> = {
  "APP-000001": [
    { memberId: "123456", ten: "Nguyễn Văn A", email: "nguyenvana@gmail.com", vaiTro: "Owner",     trangThai: "Hoạt động" },
    { memberId: "123457", ten: "Trần Thị B",   email: "tranthib@gmail.com",   vaiTro: "Developer", trangThai: "Hoạt động" },
    { memberId: "123458", ten: "Lê Văn C",     email: "levanc@gmail.com",     vaiTro: "Tester",    trangThai: "Hoạt động" },
    { memberId: "123459", ten: "Phạm Thị D",   email: "phamthid@gmail.com",   vaiTro: "Developer", trangThai: "Tạm khóa"  },
  ],
};

const MINI_APP_REVIEW_HISTORY: Record<string, { thoiGian: string; trangThai: string; nguoiXuLy: string; ghiChu?: string }[]> = {
  "APP-000001": [
    { thoiGian: "24/06/2026 09:15", trangThai: "PUBLISHED",         nguoiXuLy: "Nguyễn Văn Admin", ghiChu: "Đạt yêu cầu phát hành trên Marketplace" },
    { thoiGian: "20/06/2026 14:22", trangThai: "YÊU CẦU CHỈNH SỬA", nguoiXuLy: "Nguyễn Văn Admin", ghiChu: "Bổ sung chính sách bảo mật và điều khoản sử dụng" },
    { thoiGian: "18/06/2026 10:35", trangThai: "GỬI KIỂM DUYỆT",    nguoiXuLy: "Nguyễn Văn A" },
  ],
};

interface MiniAppActivityItem {
  ngay: string; // "Hôm nay" | "dd/mm/yyyy"
  gio: string;
  loai: "Publish" | "Kiểm duyệt" | "Cập nhật" | "Thành viên" | "Phiên bản" | "Từ chối" | "Cấu hình";
  icon: string;
  tieuDe: string;
  chiTiet?: { label: string; lines: string[] }[];
}

const MINI_APP_ACTIVITY_LOAI = ["Tất cả loại", "Publish", "Kiểm duyệt", "Cập nhật", "Thành viên", "Phiên bản", "Từ chối", "Cấu hình"] as const;
const MINI_APP_ACTIVITY_THOIGIAN = ["Tất cả thời gian", "Hôm nay", "7 ngày qua", "30 ngày qua"] as const;

const MINI_APP_ACTIVITY: Record<string, MiniAppActivityItem[]> = {
  "APP-000001": [
    {
      ngay: "Hôm nay", gio: "14:32", loai: "Publish", icon: "✅",
      tieuDe: "Phiên bản v2.3.0 đã được phát hành",
      chiTiet: [
        { label: "Thực hiện bởi", lines: ["Nguyễn Văn Admin"] },
        { label: "Ghi chú", lines: ["Đạt yêu cầu phát hành trên Marketplace"] },
      ],
    },
    {
      ngay: "Hôm nay", gio: "09:15", loai: "Kiểm duyệt", icon: "📤",
      tieuDe: "Nguyễn Văn A gửi phiên bản v2.3.0 để kiểm duyệt",
      chiTiet: [
        { label: "Release note", lines: ["Cải thiện hiệu năng", "Bổ sung tính năng xin nghỉ học"] },
      ],
    },
    {
      ngay: "23/06/2026", gio: "16:45", loai: "Cập nhật", icon: "📝",
      tieuDe: "Cập nhật thông tin Mini App",
      chiTiet: [
        { label: "Trường thay đổi", lines: ["Logo", "Mô tả ứng dụng"] },
      ],
    },
    {
      ngay: "23/06/2026", gio: "10:30", loai: "Thành viên", icon: "👤",
      tieuDe: "Thêm thành viên Trần Thị B",
      chiTiet: [
        { label: "Vai trò", lines: ["Developer"] },
      ],
    },
    {
      ngay: "20/06/2026", gio: "14:22", loai: "Từ chối", icon: "❌",
      tieuDe: "Phiên bản v2.3.0 bị từ chối",
      chiTiet: [
        { label: "Thực hiện bởi", lines: ["Nguyễn Văn Admin"] },
        { label: "Lý do", lines: ["Bổ sung chính sách bảo mật và quyền truy cập camera"] },
      ],
    },
    {
      ngay: "18/06/2026", gio: "09:40", loai: "Phiên bản", icon: "🚀",
      tieuDe: "Tạo phiên bản mới v2.3.0",
      chiTiet: [
        { label: "Thực hiện bởi", lines: ["Nguyễn Văn A"] },
      ],
    },
  ],
  "APP-000002": [
    { ngay: "Hôm nay", gio: "10:05", loai: "Cập nhật", icon: "📝", tieuDe: "Cập nhật thông tin Mini App", chiTiet: [{ label: "Trường thay đổi", lines: ["Ảnh bìa", "Mô tả ngắn"] }] },
    { ngay: "22/06/2026", gio: "14:30", loai: "Publish", icon: "✅", tieuDe: "Phiên bản v1.8.0 đã được phát hành", chiTiet: [{ label: "Thực hiện bởi", lines: ["Nguyễn Văn Admin"] }] },
    { ngay: "20/06/2026", gio: "09:00", loai: "Kiểm duyệt", icon: "📤", tieuDe: "Gửi phiên bản v1.8.0 để kiểm duyệt", chiTiet: [{ label: "Release note", lines: ["Cải thiện GPS tracking", "Fix lỗi thông báo"] }] },
    { ngay: "18/06/2026", gio: "11:20", loai: "Phiên bản", icon: "🚀", tieuDe: "Tạo phiên bản mới v1.8.0", chiTiet: [{ label: "Thực hiện bởi", lines: ["Nguyễn Văn A"] }] },
  ],
  "APP-000003": [
    { ngay: "Hôm nay", gio: "08:45", loai: "Kiểm duyệt", icon: "📤", tieuDe: "Gửi phiên bản v1.5.0 để kiểm duyệt", chiTiet: [{ label: "Release note", lines: ["Thêm trang thông báo", "Giao diện mới"] }] },
    { ngay: "24/06/2026", gio: "16:00", loai: "Phiên bản", icon: "🚀", tieuDe: "Tạo phiên bản mới v1.5.0", chiTiet: [{ label: "Thực hiện bởi", lines: ["Trần Thị B"] }] },
    { ngay: "23/06/2026", gio: "10:10", loai: "Thành viên", icon: "👤", tieuDe: "Thêm thành viên Lê Văn C", chiTiet: [{ label: "Vai trò", lines: ["Tester"] }] },
  ],
  "APP-000004": [
    { ngay: "24/06/2026", gio: "11:30", loai: "Từ chối", icon: "❌", tieuDe: "Phiên bản v1.0.0 bị từ chối", chiTiet: [{ label: "Lý do", lines: ["Thiếu mô tả quyền truy cập", "Cần bổ sung chính sách bảo mật"] }] },
    { ngay: "22/06/2026", gio: "09:30", loai: "Kiểm duyệt", icon: "📤", tieuDe: "Gửi phiên bản v1.0.0 để kiểm duyệt", chiTiet: [{ label: "Thực hiện bởi", lines: ["Phạm Thị D"] }] },
    { ngay: "20/06/2026", gio: "14:00", loai: "Phiên bản", icon: "🚀", tieuDe: "Tạo phiên bản đầu tiên v1.0.0", chiTiet: [{ label: "Thực hiện bởi", lines: ["Nguyễn Văn A"] }] },
  ],
  "APP-000005": [
    { ngay: "Hôm nay", gio: "09:20", loai: "Publish", icon: "✅", tieuDe: "Phiên bản v3.1.0 đã được phát hành", chiTiet: [{ label: "Thực hiện bởi", lines: ["Trần Thị Admin"] }] },
    { ngay: "23/06/2026", gio: "15:00", loai: "Kiểm duyệt", icon: "📤", tieuDe: "Gửi phiên bản v3.1.0 để kiểm duyệt", chiTiet: [{ label: "Release note", lines: ["Tích hợp điểm danh khuôn mặt", "Cải thiện báo cáo"] }] },
    { ngay: "21/06/2026", gio: "10:45", loai: "Cập nhật", icon: "📝", tieuDe: "Cập nhật metadata Marketplace", chiTiet: [{ label: "Trường thay đổi", lines: ["Tag danh mục", "Ảnh màn hình"] }] },
  ],
  "APP-000006": [
    { ngay: "Hôm nay", gio: "07:55", loai: "Cập nhật", icon: "📝", tieuDe: "Cập nhật menu thực đơn", chiTiet: [{ label: "Thực hiện bởi", lines: ["Hoàng Văn E"] }] },
    { ngay: "22/06/2026", gio: "12:00", loai: "Publish", icon: "✅", tieuDe: "Phiên bản v1.2.0 đã được phát hành", chiTiet: [{ label: "Thực hiện bởi", lines: ["Nguyễn Văn Admin"] }] },
    { ngay: "20/06/2026", gio: "08:30", loai: "Phiên bản", icon: "🚀", tieuDe: "Tạo phiên bản v1.2.0", chiTiet: [{ label: "Tính năng mới", lines: ["Đặt trước suất ăn", "Thanh toán online"] }] },
  ],
  "APP-000007": [
    { ngay: "24/06/2026", gio: "16:30", loai: "Phiên bản", icon: "🚀", tieuDe: "Tạo phiên bản v2.0.0 (Bản nháp)", chiTiet: [{ label: "Thực hiện bởi", lines: ["Lê Văn C"] }] },
    { ngay: "23/06/2026", gio: "11:00", loai: "Thành viên", icon: "👤", tieuDe: "Thêm thành viên Phạm Thị D", chiTiet: [{ label: "Vai trò", lines: ["Developer"] }] },
    { ngay: "20/06/2026", gio: "09:15", loai: "Cập nhật", icon: "📝", tieuDe: "Cập nhật thông tin ứng dụng", chiTiet: [{ label: "Trường thay đổi", lines: ["Tên ứng dụng", "Icon"] }] },
  ],
  "APP-000008": [
    { ngay: "Hôm nay", gio: "08:00", loai: "Publish", icon: "✅", tieuDe: "Phiên bản v1.0.1 đã được phát hành", chiTiet: [{ label: "Thực hiện bởi", lines: ["Nguyễn Văn Admin"] }, { label: "Ghi chú", lines: ["Hotfix lỗi đăng nhập bằng Google"] }] },
    { ngay: "24/06/2026", gio: "14:10", loai: "Kiểm duyệt", icon: "📤", tieuDe: "Gửi phiên bản v1.0.1 để kiểm duyệt", chiTiet: [{ label: "Release note", lines: ["Fix bug đăng nhập", "Tối ưu tốc độ"] }] },
    { ngay: "23/06/2026", gio: "09:00", loai: "Phiên bản", icon: "🚀", tieuDe: "Tạo phiên bản v1.0.1", chiTiet: [{ label: "Thực hiện bởi", lines: ["Nguyễn Văn A"] }] },
  ],
};

const REVIEW_STATUS_CONFIG: Record<string, { color: string; bg: string }> = {
  "PUBLISHED":          { color: "#16A34A", bg: "#DCFCE7" },
  "YÊU CẦU CHỈNH SỬA": { color: "#D97706", bg: "#FEF3C7" },
  "GỬI KIỂM DUYỆT":    { color: "#2563EB", bg: "#DBEAFE" },
  "TỪ CHỐI":           { color: "#DC2626", bg: "#FEE2E2" },
};

const MINI_APP_DETAIL_TABS = ["Tổng quan", "Phiên bản", "Lịch sử hoạt động"];

function ChiTietMiniApp({ appId, prevScreen, onBack, onNavigate, onViewMember }: {
  appId: string;
  prevScreen: Screen;
  onBack: () => void;
  onNavigate: (s: Screen) => void;
  onViewMember: (memberId: string) => void;
}) {
  const app = MINI_APP_DETAILS[appId] ?? {
    appId, ten: appId, moTa: "", chucNang: [], danhMuc: "—", nenTang: "—",
    doanhNghiep: "—", trangThai: "Bản nháp" as MiniAppStatus, ngayTao: "—",
    capNhatCuoi: "—", phienBanHienTai: "—", nguoiPublish: "—", ngayPhatHanh: "—",
    nguoiDuyet: "—", marketplace: "—", nguoiDung: 0, mau: 0, phienTruyCap: 0, danhGia: 0,
  };
  const sc = MINI_APP_STATUS_CONFIG[app.trangThai];
  const versions   = MINI_APP_VERSIONS[appId] ?? [];
  const members    = MINI_APP_MEMBERS[appId] ?? [];
  const reviews    = MINI_APP_REVIEW_HISTORY[appId] ?? [];
  const activities = MINI_APP_ACTIVITY[appId] ?? [];
  const [activeTab, setActiveTab] = useState("Tổng quan");
  const [memberSearch, setMemberSearch] = useState("");
  const [selectedMiniMember, setSelectedMiniMember] = useState<MiniAppMemberItem | null>(null);

  const allMembers = Object.values(MEMBERS_BY_DN).flat();
  const fullMember = selectedMiniMember ? allMembers.find((m) => m.id === selectedMiniMember.memberId) ?? null : null;

  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden" style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}>
      {prevScreen === "dnMiniApp"
        ? <SidebarDN current="dnMiniApp" onNavigate={onNavigate} />
        : <Sidebar current={prevScreen === "miniApp" ? "miniApp" : "doanhNghiep"} onNavigate={onNavigate} />
      }
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top bar */}
        <header className="bg-white border-b border-gray-100 px-6 py-3 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-1.5 text-xs text-gray-400 flex-wrap">
            {prevScreen === "chiTietDoanhNghiep" || prevScreen === "chiTietThanhVien" || prevScreen === "miniApp" || prevScreen === "dnMiniApp" ? (
              <>
                <button onClick={onBack} className="hover:text-[#094D8A] transition-colors">Mini App</button>
                <span>/</span>
                <span className="text-gray-700 font-medium truncate max-w-40">{app.ten}</span>
              </>
            ) : (
              <>
                <button onClick={() => onNavigate("dashboard")} className="hover:text-[#094D8A] transition-colors">Tổng quan</button>
                <span>/</span>
                <button onClick={() => onNavigate("doanhNghiep")} className="hover:text-[#094D8A] transition-colors">Doanh nghiệp</button>
                <span>/</span>
                <button onClick={onBack} className="hover:text-[#094D8A] transition-colors">{app.doanhNghiep}</button>
                <span>/</span>
                <span className="text-gray-700 font-medium truncate max-w-40">{app.ten}</span>
              </>
            )}
          </div>
          <div className="flex items-center gap-3">
            <button className="relative p-1.5 text-gray-500 hover:text-gray-800">
              <Bell size={18} />
              <span className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-red-500 rounded-full" />
            </button>
            <button className="p-1.5 text-gray-500 hover:text-gray-800"><HelpCircle size={18} /></button>
            <img src={MAN_PHOTO_2} alt="Avatar" className="w-8 h-8 rounded-full object-cover border border-gray-200" />
          </div>
        </header>

        <div className="flex-1 overflow-y-auto px-6 py-5 space-y-4">
          <button onClick={onBack} className="flex items-center gap-1 text-xs text-gray-500 hover:text-[#094D8A] transition-colors">
            <ChevronLeft size={14} /> Quay lại
          </button>

          {/* Header card + tabs */}
          <div className="bg-white rounded-md border border-gray-100 shadow-sm">
            <div className="p-5">
              <div className="flex items-start justify-between gap-4 mb-2">
                <div className="flex-1 min-w-0">
                  <h2 className="text-lg font-semibold text-gray-900 mb-1">{app.ten}</h2>
                  <p className="text-xs text-gray-500 mb-3 max-w-2xl">{app.moTa}</p>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full"
                      style={{ color: sc.color, background: sc.bg }}>
                      <span className="w-1.5 h-1.5 rounded-full inline-block" style={{ background: sc.color }} />
                      {app.trangThai}
                    </span>
                    <span className="text-xs text-gray-400">Thuộc doanh nghiệp: <strong className="text-gray-700">{app.doanhNghiep}</strong></span>
                  </div>
                  <div className="text-xs font-mono text-gray-400 mb-3">{app.appId}</div>
                  <div className="grid grid-cols-2 gap-x-8 gap-y-1 text-xs text-gray-500 mb-3 max-w-lg">
                    <span>Ngày tạo: <strong className="text-gray-700">{app.ngayTao}</strong></span>
                    <span>Phiên bản hiện tại: <strong className="text-gray-700">{app.phienBanHienTai}</strong></span>
                    <span>Cập nhật cuối: <strong className="text-gray-700">{app.capNhatCuoi}</strong></span>
                    <span>Người publish: <strong className="text-gray-700">{app.nguoiPublish}</strong></span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-[#094D8A] font-medium flex-wrap">
                    <span>{app.nguoiDung.toLocaleString("vi-VN")} người dùng</span>
                    <span className="text-gray-300">•</span>
                    <span>{app.mau.toLocaleString("vi-VN")} MAU</span>
                    <span className="text-gray-300">•</span>
                    <span>98.5% uptime</span>
                    <span className="text-gray-300">•</span>
                    <span>{app.danhGia}★ Marketplace</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <ActionBtn label="Ẩn khỏi Marketplace" variant="lock" />
                  <ActionBtn label="Ngừng" variant="stop" />
                </div>
              </div>
            </div>

            {/* Tabs inside card */}
            <div className="flex border-t border-gray-100 px-5">
              {MINI_APP_DETAIL_TABS.map((tab) => {
                const badge = tab === "Phiên bản" ? versions.length : tab === "Thành viên" ? members.length : null;
                const active = activeTab === tab;
                return (
                  <button key={tab} onClick={() => setActiveTab(tab)}
                    className={`px-3 py-3 text-xs font-medium whitespace-nowrap transition-colors border-b-2 -mb-px flex items-center gap-1.5 ${
                      active ? "border-[#094D8A] text-[#094D8A]" : "border-transparent text-gray-500 hover:text-gray-700"
                    }`}>
                    {tab}
                    {badge !== null && (
                      <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-semibold ${active ? "bg-[#D1E9FF] text-[#094D8A]" : "bg-gray-100 text-gray-500"}`}>
                        {badge}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* ── Tab: Tổng quan ── */}
          {activeTab === "Tổng quan" && (
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white rounded-md border border-gray-100 shadow-sm p-5">
                  <h3 className="text-xs font-semibold text-gray-700 uppercase tracking-wide mb-3">Thông tin Mini App</h3>
                  <InfoRow label="Tên Mini App" value={app.ten} />
                  <InfoRow label="Mã Mini App" value={app.appId} />
                  <InfoRow label="Danh mục" value={app.danhMuc} />
                  <InfoRow label="Nền tảng" value={app.nenTang} />
                  <InfoRow label="Doanh nghiệp sở hữu" value={app.doanhNghiep} />
                </div>
                <div className="bg-white rounded-md border border-gray-100 shadow-sm p-5">
                  <h3 className="text-xs font-semibold text-gray-700 uppercase tracking-wide mb-3">Thông tin phát hành</h3>
                  <InfoRow label="Trạng thái" value={app.trangThai} />
                  <InfoRow label="Ngày phát hành" value={app.ngayPhatHanh} />
                  <InfoRow label="Marketplace" value={app.marketplace} />
                  <InfoRow label="Người duyệt" value={app.nguoiDuyet} />
                  <InfoRow label="Phiên bản hiện tại" value={app.phienBanHienTai} />
                </div>
              </div>

              {/* Mô tả */}
              <div className="bg-white rounded-md border border-gray-100 shadow-sm p-5">
                <h3 className="text-xs font-semibold text-gray-700 uppercase tracking-wide mb-3">Mô tả Mini App</h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">{app.moTa}</p>
                {app.chucNang.length > 0 && (
                  <>
                    <p className="text-sm font-semibold text-gray-700 mb-3">Chức năng chính:</p>
                    <ul className="space-y-3">
                      {app.chucNang.map((f, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className="mt-0.5 shrink-0 w-5 h-5 rounded-full bg-[#D1E9FF] flex items-center justify-center">
                            <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                              <path d="M2 5l2.5 2.5L8 3" stroke="#094D8A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </span>
                          <span className="text-sm font-medium text-gray-800 leading-snug">{f}</span>
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </div>

              {/* Thống kê */}
              <div className="bg-white rounded-md border border-gray-100 shadow-sm p-5">
                <h3 className="text-xs font-semibold text-gray-700 uppercase tracking-wide mb-4">Thống kê sử dụng</h3>
                <div className="grid grid-cols-4 gap-4">
                  {[
                    { label: "Người dùng", value: app.nguoiDung.toLocaleString("vi-VN") },
                    { label: "MAU",         value: app.mau.toLocaleString("vi-VN") },
                    { label: "Phiên truy cập", value: app.phienTruyCap.toLocaleString("vi-VN") },
                    { label: "Đánh giá Marketplace", value: `${app.danhGia} / 5` },
                  ].map((s) => (
                    <div key={s.label} className="border border-gray-100 rounded p-4">
                      <div className="text-[11px] text-gray-400 mb-1">{s.label}</div>
                      <div className="text-xl font-semibold text-gray-800">{s.value}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* ── Tab: Phiên bản ── */}
          {activeTab === "Phiên bản" && (
            <div className="bg-white rounded-md border border-gray-100 shadow-sm">
              
              <table className="w-full text-xs">
                <thead>
                  <tr className="border-b border-gray-100 bg-gray-50/60">
                    <th className="text-left px-4 py-3 text-gray-500 font-semibold w-10">STT</th>
                    <th className="text-left px-4 py-3 text-gray-500 font-semibold w-28">VERSION</th>
                    <th className="text-center px-4 py-3 text-gray-500 font-semibold w-32">TRẠNG THÁI</th>
                    <th className="text-center px-4 py-3 text-gray-500 font-semibold w-28">NGÀY TẠO</th>
                    <th className="text-left px-4 py-3 text-gray-500 font-semibold">NGƯỜI TẠO</th>
                    <th className="text-center px-4 py-3 text-gray-500 font-semibold w-32">THAO TÁC</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {versions.map((v, i) => {
                    const vsc = v.trangThai === "Đã xuất bản" ? { color: "#16A34A", bg: "#DCFCE7" } : { color: "#6B7280", bg: "#F3F4F6" };
                    return (
                      <tr key={i} className="hover:bg-gray-50/60 transition-colors">
                        <td className="px-4 py-3.5 text-gray-500">{i + 1}</td>
                        <td className="px-4 py-3.5 font-mono font-semibold text-gray-800">{v.version}</td>
                        <td className="px-4 py-3.5 text-center">
                          <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-medium"
                            style={{ color: vsc.color, background: vsc.bg }}>{v.trangThai}</span>
                        </td>
                        <td className="px-4 py-3.5 text-center text-gray-500">{v.ngayTao}</td>
                        <td className="px-4 py-3.5 text-gray-600">{v.nguoiTao}</td>
                        <td className="px-4 py-3.5 text-center">
                          <button className="text-xs text-[#094D8A] hover:text-[#073A63] font-medium transition-colors">Xem chi tiết</button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}

          {/* ── Tab: Thành viên ── */}
          {activeTab === "Thành viên" && (
            <>
              {fullMember && (
                <MemberDrawer
                  member={fullMember}
                  onClose={() => setSelectedMiniMember(null)}
                  onViewFull={() => { setSelectedMiniMember(null); onViewMember(fullMember.id); }}
                />
              )}
              <div className="bg-white rounded-md border border-gray-100 shadow-sm">
                <div className="px-4 py-3 border-b border-gray-100">
                  <div className="relative max-w-sm">
                    <Search size={13} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input type="text" placeholder="Tìm kiếm thành viên" value={memberSearch}
                      onChange={(e) => setMemberSearch(e.target.value)}
                      className="w-full pl-8 pr-3 py-2 text-xs border border-gray-200 rounded bg-gray-50 placeholder-gray-400 focus:outline-none focus:border-[#094D8A] focus:bg-white transition-colors" />
                  </div>
                </div>
                <table className="w-full text-xs">
                  <thead>
                    <tr className="border-b border-gray-100 bg-gray-50/60">
                      <th className="text-left px-4 py-3 text-gray-500 font-semibold w-10">STT</th>
                      <th className="text-left px-4 py-3 text-gray-500 font-semibold">THÀNH VIÊN</th>
                      <th className="text-left px-4 py-3 text-gray-500 font-semibold">EMAIL</th>
                      <th className="text-left px-4 py-3 text-gray-500 font-semibold w-32">VAI TRÒ</th>
                      <th className="text-center px-4 py-3 text-gray-500 font-semibold w-24">THAO TÁC</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-50">
                    {members.filter((m) => memberSearch === "" || m.ten.toLowerCase().includes(memberSearch.toLowerCase())).map((m, i) => (
                      <tr key={i} className="hover:bg-gray-50/60 transition-colors">
                        <td className="px-4 py-3.5 text-gray-500">{i + 1}</td>
                        <td className="px-4 py-3.5 font-semibold text-gray-800">{m.ten}</td>
                        <td className="px-4 py-3.5 text-gray-600">{m.email}</td>
                        <td className="px-4 py-3.5 text-gray-600">{m.vaiTro}</td>
                        <td className="px-4 py-3.5 text-center">
                          <button onClick={() => setSelectedMiniMember(m)} className="text-xs text-[#094D8A] hover:text-[#073A63] font-medium transition-colors">Xem</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </>
          )}

          {/* ── Tab: Lịch sử kiểm duyệt ── */}
          {activeTab === "Lịch sử kiểm duyệt" && (
            <div className="space-y-3">
              {reviews.map((r, i) => {
                const rsc = REVIEW_STATUS_CONFIG[r.trangThai] ?? { color: "#6B7280", bg: "#F3F4F6" };
                return (
                  <div key={i} className="bg-white rounded-md border border-gray-100 shadow-sm px-5 py-4">
                    <div className="text-[11px] text-gray-400 mb-2">{r.thoiGian}</div>
                    <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-semibold mb-2"
                      style={{ color: rsc.color, background: rsc.bg }}>{r.trangThai}</span>
                    <div className="text-xs text-gray-600 mt-1">
                      {r.trangThai === "GỬI KIỂM DUYỆT" ? "Người gửi" : "Người xử lý"}: <strong className="text-gray-800">{r.nguoiXuLy}</strong>
                    </div>
                    {r.ghiChu && <div className="text-xs text-gray-500 mt-1">Ghi chú: {r.ghiChu}</div>}
                  </div>
                );
              })}
              {reviews.length === 0 && (
                <div className="bg-white rounded-md border border-gray-100 shadow-sm p-10 text-center text-sm text-gray-400">Chưa có lịch sử kiểm duyệt</div>
              )}
            </div>
          )}

          {/* ── Tab: Lịch sử hoạt động ── */}
          {activeTab === "Lịch sử hoạt động" && <TabMiniAppActivity activities={activities} />}
        </div>
      </div>
    </div>
  );
}

// ─── Mini App List Screen ─────────────────────────────────────────────────
type MiniAppGlobalStatus = "Đã xuất bản" | "Chờ duyệt" | "Bản nháp" | "Từ chối" | "Tạm ẩn";

const MA_STATUS_CFG: Record<MiniAppGlobalStatus, { color: string; bg: string; label: string }> = {
  "Đã xuất bản": { color: "#16A34A", bg: "#DCFCE7", label: "Published"  },
  "Chờ duyệt":   { color: "#D97706", bg: "#FEF3C7", label: "Chờ duyệt" },
  "Bản nháp":    { color: "#6B7280", bg: "#F3F4F6", label: "Draft"      },
  "Từ chối":     { color: "#DC2626", bg: "#FEE2E2", label: "Từ chối"    },
  "Tạm ẩn":      { color: "#7C3AED", bg: "#EDE9FE", label: "Tạm ẩn"    },
};

interface MiniAppListRow {
  appId: string;
  ten: string;
  doanhNghiep: string;
  danhMuc: string;
  phienBan: string;
  trangThai: MiniAppGlobalStatus;
}

const MA_LIST_DATA: MiniAppListRow[] = [
  { appId: "APP-000001", ten: "Sổ liên lạc điện tử",   doanhNghiep: "Công nghệ XYZ",    danhMuc: "Giáo dục",  phienBan: "v2.3.0", trangThai: "Đã xuất bản" },
  { appId: "APP-000002", ten: "Xe đưa đón học sinh",    doanhNghiep: "Công nghệ XYZ",    danhMuc: "Giáo dục",  phienBan: "v1.8.0", trangThai: "Đã xuất bản" },
  { appId: "APP-000003", ten: "Cổng thông tin",         doanhNghiep: "Giáo dục ABC",     danhMuc: "Giáo dục",  phienBan: "v1.0.0", trangThai: "Chờ duyệt"   },
  { appId: "APP-000004", ten: "Khảo sát phụ huynh",     doanhNghiep: "Công nghệ XYZ",    danhMuc: "Tiện ích",  phienBan: "v0.8.0", trangThai: "Bản nháp"    },
  { appId: "APP-000005", ten: "Học liệu số",            doanhNghiep: "EduTech Việt Nam", danhMuc: "Giáo dục",  phienBan: "v3.2.1", trangThai: "Đã xuất bản" },
  { appId: "APP-000006", ten: "Tuyển sinh trực tuyến",  doanhNghiep: "Giáo dục ABC",     danhMuc: "Tiện ích",  phienBan: "v1.5.0", trangThai: "Từ chối"     },
  { appId: "APP-000007", ten: "Điểm danh thông minh",   doanhNghiep: "Công nghệ XYZ",    danhMuc: "Giáo dục",  phienBan: "v4.0.0", trangThai: "Đã xuất bản" },
  { appId: "APP-000008", ten: "Quản lý học phí",        doanhNghiep: "EduTech Việt Nam", danhMuc: "Tài chính", phienBan: "v2.1.0", trangThai: "Tạm ẩn"      },
  { appId: "APP-000101", ten: "Ví điện tử ABC",         doanhNghiep: "Tập đoàn ABC",     danhMuc: "Tài chính", phienBan: "v5.0.0", trangThai: "Đã xuất bản" },
  { appId: "APP-000102", ten: "Trợ lý ảo",              doanhNghiep: "Tập đoàn ABC",     danhMuc: "Tiện ích",  phienBan: "v2.1.0", trangThai: "Đã xuất bản" },
  { appId: "APP-000103", ten: "Thanh toán hóa đơn",     doanhNghiep: "Tập đoàn ABC",     danhMuc: "Tài chính", phienBan: "v3.3.0", trangThai: "Chờ duyệt"   },
  { appId: "APP-000104", ten: "Bản đồ số",              doanhNghiep: "EduTech Việt Nam", danhMuc: "Tiện ích",  phienBan: "v1.0.0", trangThai: "Bản nháp"    },
  { appId: "APP-000105", ten: "Thời khóa biểu",         doanhNghiep: "Giáo dục ABC",     danhMuc: "Giáo dục",  phienBan: "v2.0.0", trangThai: "Từ chối"     },
  { appId: "APP-000106", ten: "Quản lý tài sản",        doanhNghiep: "Công nghệ XYZ",    danhMuc: "Dịch vụ",   phienBan: "v1.1.0", trangThai: "Tạm ẩn"      },
];

const MA_LIST_TABS: { label: string; status: MiniAppGlobalStatus | "all" }[] = [
  { label: "Tất cả",    status: "all"         },
  { label: "Published", status: "Đã xuất bản" },
  { label: "Chờ duyệt", status: "Chờ duyệt"   },
  { label: "Draft",     status: "Bản nháp"     },
  { label: "Từ chối",   status: "Từ chối"      },
  { label: "Tạm ẩn",    status: "Tạm ẩn"      },
];

const MA_LIST_DANH_MUC = ["Tất cả danh mục", "Giáo dục", "Tiện ích", "Tài chính", "Dịch vụ"];
const MA_LIST_DN = ["Tất cả doanh nghiệp", "Công nghệ XYZ", "Giáo dục ABC", "EduTech Việt Nam", "Tập đoàn ABC"];

function MiniAppListActions({ status, onView, onStatusChange }: {
  status: MiniAppGlobalStatus;
  onView: () => void;
  onStatusChange: (next: MiniAppGlobalStatus) => void;
}) {
  return (
    <div className="flex items-center justify-center gap-1.5">
      <button onClick={onView}
        className="px-2.5 py-1 rounded text-[11px] font-medium border border-gray-300 text-gray-600 bg-white hover:bg-gray-50 transition-colors whitespace-nowrap">
        Xem
      </button>
      {status === "Đã xuất bản" && (
        <button onClick={() => onStatusChange("Tạm ẩn")}
          className="px-2.5 py-1 rounded text-[11px] font-medium border border-purple-400 text-purple-600 bg-purple-50 hover:bg-purple-100 transition-colors whitespace-nowrap">
          Tạm ẩn
        </button>
      )}
      {status === "Chờ duyệt" && (
        <>
          <button onClick={() => onStatusChange("Đã xuất bản")}
            className="px-2.5 py-1 rounded text-[11px] font-medium border border-green-500 text-green-600 bg-green-50 hover:bg-green-100 transition-colors whitespace-nowrap">
            Duyệt
          </button>
          <button onClick={() => onStatusChange("Từ chối")}
            className="px-2.5 py-1 rounded text-[11px] font-medium border border-red-400 text-red-500 bg-red-50 hover:bg-red-100 transition-colors whitespace-nowrap">
            Từ chối
          </button>
        </>
      )}
      {status === "Tạm ẩn" && (
        <button onClick={() => onStatusChange("Đã xuất bản")}
          className="px-2.5 py-1 rounded text-[11px] font-medium border border-[#094D8A] text-[#094D8A] bg-[#D1E9FF] hover:bg-[#D1E9FF] transition-colors whitespace-nowrap">
          Khôi phục
        </button>
      )}
    </div>
  );
}

function MiniAppScreen({ onNavigate, onViewMiniApp }: {
  onNavigate: (s: Screen) => void;
  onViewMiniApp: (appId: string) => void;
}) {
  const [activeTab, setActiveTab] = useState<MiniAppGlobalStatus | "all">("all");
  const [search, setSearch] = useState("");
  const [danhMucFilter, setDanhMucFilter] = useState("Tất cả danh mục");
  const [dnFilter, setDnFilter] = useState("Tất cả doanh nghiệp");
  const [page, setPage] = useState(1);
  const rowsPerPage = 8;
  const [listData, setListData] = useState(MA_LIST_DATA);

  const handleStatusChange = (appId: string, next: MiniAppGlobalStatus) => {
    setListData((prev) => prev.map((r) => r.appId === appId ? { ...r, trangThai: next } : r));
    setPage(1);
  };

  const counts: Record<MiniAppGlobalStatus | "all", number> = {
    all:           listData.length,
    "Đã xuất bản": listData.filter((d) => d.trangThai === "Đã xuất bản").length,
    "Chờ duyệt":   listData.filter((d) => d.trangThai === "Chờ duyệt").length,
    "Bản nháp":    listData.filter((d) => d.trangThai === "Bản nháp").length,
    "Từ chối":     listData.filter((d) => d.trangThai === "Từ chối").length,
    "Tạm ẩn":      listData.filter((d) => d.trangThai === "Tạm ẩn").length,
  };

  const filtered = listData.filter((r) => {
    const matchTab    = activeTab === "all" || r.trangThai === activeTab;
    const matchSearch = search === "" || r.ten.toLowerCase().includes(search.toLowerCase());
    const matchDM     = danhMucFilter === "Tất cả danh mục" || r.danhMuc === danhMucFilter;
    const matchDN     = dnFilter === "Tất cả doanh nghiệp" || r.doanhNghiep === dnFilter;
    return matchTab && matchSearch && matchDM && matchDN;
  });

  const totalPages = Math.max(1, Math.ceil(filtered.length / rowsPerPage));
  const paged = filtered.slice((page - 1) * rowsPerPage, page * rowsPerPage);

  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden" style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}>
      <Sidebar current="miniApp" onNavigate={onNavigate} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <TopBar title="Mini App" />
        <div className="flex-1 overflow-y-auto px-6 py-5 space-y-4">

          {/* Page header */}
          <div className="flex items-start justify-between">
            <div>
              <h2 className="text-xl font-semibold text-gray-900">Mini App</h2>
              <p className="text-xs text-gray-400 mt-0.5">Quản lý tất cả Mini App trên nền tảng</p>
            </div>
          </div>

          {/* KPI cards */}
          <div className="grid grid-cols-4 gap-4">
            {[
              { label: "Tổng Mini App", value: listData.length,                  color: "#1F2937" },
              { label: "Published",     value: counts["Đã xuất bản"],             color: "#16A34A" },
              { label: "Chờ duyệt",     value: counts["Chờ duyệt"],               color: "#D97706" },
              { label: "Draft",         value: counts["Bản nháp"],                color: "#6B7280" },
            ].map((k) => (
              <div key={k.label} className="bg-white rounded-md border border-gray-100 shadow-sm px-5 py-4">
                <div className="text-xs text-gray-500 mb-1">{k.label}</div>
                <div className="text-2xl font-semibold" style={{ color: k.color }}>
                  {k.value.toLocaleString("vi-VN")}
                </div>
              </div>
            ))}
          </div>

          {/* Search + Add button */}
          <div className="flex items-center gap-3">
            <div className="relative flex-1">
              <Search size={13} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input type="text" placeholder="Tìm kiếm theo tên Mini App"
                value={search} onChange={(e) => { setSearch(e.target.value); setPage(1); }}
                className="w-full pl-8 pr-3 py-2 text-xs border border-gray-200 rounded bg-white placeholder-gray-400 focus:outline-none focus:border-[#094D8A] transition-colors" />
            </div>

          </div>

          {/* Filters */}
          <div className="flex items-center gap-3">
            <select value={danhMucFilter} onChange={(e) => { setDanhMucFilter(e.target.value); setPage(1); }}
              className="text-xs border border-gray-200 rounded px-3 py-2 bg-white text-gray-600 focus:outline-none focus:border-[#094D8A] cursor-pointer">
              {MA_LIST_DANH_MUC.map((d) => <option key={d}>{d}</option>)}
            </select>
            <select value={dnFilter} onChange={(e) => { setDnFilter(e.target.value); setPage(1); }}
              className="text-xs border border-gray-200 rounded px-3 py-2 bg-white text-gray-600 focus:outline-none focus:border-[#094D8A] cursor-pointer">
              {MA_LIST_DN.map((d) => <option key={d}>{d}</option>)}
            </select>
          </div>

          {/* Table card */}
          <div className="bg-white rounded-md border border-gray-100 shadow-sm">
            {/* Status tabs */}
            <div className="flex items-center gap-0 px-4 pt-3 border-b border-gray-100 overflow-x-auto">
              {MA_LIST_TABS.map((t) => {
                const cnt = counts[t.status];
                const active = activeTab === t.status;
                return (
                  <button key={String(t.status)} onClick={() => { setActiveTab(t.status); setPage(1); }}
                    className={`px-3 py-2 text-xs font-medium whitespace-nowrap border-b-2 transition-colors ${
                      active ? "border-[#094D8A] text-[#094D8A]" : "border-transparent text-gray-500 hover:text-gray-700"
                    }`}>
                    {t.label} <span className={`ml-1 ${active ? "text-[#094D8A]" : "text-gray-400"}`}>({cnt})</span>
                  </button>
                );
              })}
            </div>

            {/* Table */}
            <table className="w-full text-xs">
              <thead>
                <tr className="border-b border-gray-100 bg-gray-50/60">
                  <th className="text-left px-4 py-3 text-gray-500 font-semibold w-10">STT</th>
                  <th className="text-left px-4 py-3 text-gray-500 font-semibold">MINI APP</th>
                  <th className="text-left px-4 py-3 text-gray-500 font-semibold w-44">DOANH NGHIỆP</th>
                  <th className="text-center px-4 py-3 text-gray-500 font-semibold w-24">VERSION</th>
                  <th className="text-center px-4 py-3 text-gray-500 font-semibold w-32">TRẠNG THÁI</th>
                  <th className="text-center px-4 py-3 text-gray-500 font-semibold w-44">THAO TÁC</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {paged.map((row, idx) => {
                  const sc = MA_STATUS_CFG[row.trangThai];
                  return (
                    <tr key={row.appId} className="hover:bg-gray-50/60 transition-colors">
                      <td className="px-4 py-3.5 text-gray-500">{(page - 1) * rowsPerPage + idx + 1}</td>
                      <td className="px-4 py-3.5">
                        <div className="flex items-center gap-2.5">
                          <div className="w-7 h-7 rounded bg-[#D1E9FF] flex items-center justify-center shrink-0">
                            <Smartphone size={13} className="text-[#094D8A]" />
                          </div>
                          <div>
                            <div className="font-semibold text-gray-800">{row.ten}</div>
                            <div className="text-gray-400 text-[11px] mt-0.5">{row.danhMuc}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-3.5 text-gray-600">{row.doanhNghiep}</td>
                      <td className="px-4 py-3.5 text-center text-gray-600 font-mono">{row.phienBan}</td>
                      <td className="px-4 py-3.5 text-center">
                        <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-medium"
                          style={{ color: sc.color, background: sc.bg }}>
                          {sc.label}
                        </span>
                      </td>
                      <td className="px-4 py-3.5">
                        <MiniAppListActions
                          status={row.trangThai}
                          onView={() => onViewMiniApp(row.appId)}
                          onStatusChange={(next) => handleStatusChange(row.appId, next)}
                        />
                      </td>
                    </tr>
                  );
                })}
                {paged.length === 0 && (
                  <tr><td colSpan={6} className="px-4 py-10 text-center text-gray-400">Không có dữ liệu</td></tr>
                )}
              </tbody>
            </table>

            {/* Pagination */}
            <div className="flex items-center justify-between px-4 py-3 border-t border-gray-100">
              <span className="text-xs text-gray-400">
                Hiển thị {filtered.length === 0 ? 0 : (page - 1) * rowsPerPage + 1}–{Math.min(page * rowsPerPage, filtered.length)} / {filtered.length} Mini App
              </span>
              <div className="flex items-center gap-1">
                <button onClick={() => setPage((p) => Math.max(1, p - 1))} disabled={page === 1}
                  className="w-7 h-7 flex items-center justify-center rounded border border-gray-200 text-gray-500 hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed">
                  <ChevronLeft size={12} />
                </button>
                {Array.from({ length: Math.min(totalPages, 3) }, (_, i) => i + 1).map((p) => (
                  <button key={p} onClick={() => setPage(p)}
                    className={`w-7 h-7 flex items-center justify-center rounded text-xs font-medium transition-colors ${
                      p === page ? "bg-[#094D8A] text-white" : "border border-gray-200 text-gray-600 hover:bg-gray-50"
                    }`}>{p}</button>
                ))}
                {totalPages > 3 && <span className="px-1 text-gray-400 text-xs">...</span>}
                {totalPages > 3 && (
                  <button onClick={() => setPage(totalPages)}
                    className={`w-7 h-7 flex items-center justify-center rounded text-xs font-medium transition-colors ${
                      page === totalPages ? "bg-[#094D8A] text-white" : "border border-gray-200 text-gray-600 hover:bg-gray-50"
                    }`}>{totalPages}</button>
                )}
                <button onClick={() => setPage((p) => Math.min(totalPages, p + 1))} disabled={page === totalPages}
                  className="w-7 h-7 flex items-center justify-center rounded border border-gray-200 text-gray-500 hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed">
                  <ChevronRight size={12} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Developer Screen ──────────────────────────────────────────────────────
type DevStatus = "Hoạt động" | "Tạm khóa" | "Ngừng hoạt động";

interface DevRow {
  id: string;
  ten: string;
  email: string;
  soDoanhNghiep: number;
  soMiniApp: number;
  trangThai: DevStatus;
}

const DEV_DATA: DevRow[] = [
  { id: "123456", ten: "Nguyễn Văn A", email: "a@gmail.com", soDoanhNghiep: 2, soMiniApp: 8,  trangThai: "Hoạt động" },
  { id: "123457", ten: "Trần Thị B",   email: "b@gmail.com", soDoanhNghiep: 1, soMiniApp: 3,  trangThai: "Hoạt động" },
  { id: "123458", ten: "Lê Văn C",     email: "c@gmail.com", soDoanhNghiep: 3, soMiniApp: 12, trangThai: "Tạm khóa" },
  { id: "123459", ten: "Phạm Văn D",   email: "d@gmail.com", soDoanhNghiep: 1, soMiniApp: 0,  trangThai: "Hoạt động" },
  { id: "123460", ten: "Hoàng Văn E",  email: "e@gmail.com", soDoanhNghiep: 2, soMiniApp: 4,  trangThai: "Ngừng hoạt động" },
  { id: "123461", ten: "Vũ Thị F",     email: "f@gmail.com", soDoanhNghiep: 1, soMiniApp: 6,  trangThai: "Hoạt động" },
  { id: "123462", ten: "Đặng Văn G",   email: "g@gmail.com", soDoanhNghiep: 2, soMiniApp: 9,  trangThai: "Hoạt động" },
  { id: "123463", ten: "Bùi Thị H",    email: "h@gmail.com", soDoanhNghiep: 1, soMiniApp: 2,  trangThai: "Tạm khóa" },
  { id: "123464", ten: "Đinh Văn I",   email: "i@gmail.com", soDoanhNghiep: 3, soMiniApp: 15, trangThai: "Hoạt động" },
  { id: "123465", ten: "Ngô Thị K",    email: "k@gmail.com", soDoanhNghiep: 1, soMiniApp: 1,  trangThai: "Ngừng hoạt động" },
];

const DEV_STATUS_CONFIG: Record<DevStatus, { color: string; bg: string }> = {
  "Hoạt động":       { color: "#16A34A", bg: "#DCFCE7" },
  "Tạm khóa":        { color: "#2563EB", bg: "#DBEAFE" },
  "Ngừng hoạt động": { color: "#6B7280", bg: "#F3F4F6" },
};

const DEV_TABS: { label: string; status: DevStatus | "all" }[] = [
  { label: "Tất cả",           status: "all" },
  { label: "Hoạt động",        status: "Hoạt động" },
  { label: "Tạm khóa",         status: "Tạm khóa" },
  { label: "Ngừng hoạt động",  status: "Ngừng hoạt động" },
];

function DeveloperScreen({ onNavigate, onViewDeveloper }: {
  onNavigate: (s: Screen) => void;
  onViewDeveloper: (devId: string) => void;
}) {
  const [search, setSearch] = useState("");
  const [activeTab, setActiveTab] = useState<DevStatus | "all">("all");
  const [page, setPage] = useState(1);
  const rowsPerPage = 6;

  const counts: Record<DevStatus | "all", number> = {
    all:               DEV_DATA.length,
    "Hoạt động":       DEV_DATA.filter((d) => d.trangThai === "Hoạt động").length,
    "Tạm khóa":        DEV_DATA.filter((d) => d.trangThai === "Tạm khóa").length,
    "Ngừng hoạt động": DEV_DATA.filter((d) => d.trangThai === "Ngừng hoạt động").length,
  };

  const filtered = DEV_DATA.filter((d) => {
    const matchTab = activeTab === "all" || d.trangThai === activeTab;
    const matchSearch = search === "" || d.ten.toLowerCase().includes(search.toLowerCase()) || d.email.toLowerCase().includes(search.toLowerCase());
    return matchTab && matchSearch;
  });

  const totalPages = Math.max(1, Math.ceil(filtered.length / rowsPerPage));
  const paged = filtered.slice((page - 1) * rowsPerPage, page * rowsPerPage);

  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden" style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}>
      <Sidebar current="developer" onNavigate={onNavigate} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <TopBar title="Developer" />
        <div className="flex-1 overflow-y-auto px-6 py-5 space-y-4">

          {/* Page header */}
          <div className="flex items-start justify-between">
            <div>
              <h2 className="text-xl font-semibold text-gray-900">Developer</h2>
              <p className="text-xs text-gray-400 mt-0.5">Quản lý các developer trên nền tảng</p>
            </div>
          </div>

          {/* KPI cards */}
          <div className="grid grid-cols-4 gap-4">
            {[
              { label: "Tổng Developer",    value: "1.250", color: "#1F2937" },
              { label: "Hoạt động",         value: "1.120", color: "#16A34A" },
              { label: "Tạm khóa",          value: "95",    color: "#2563EB" },
              { label: "Ngừng hoạt động",   value: "35",    color: "#6B7280" },
            ].map((s) => (
              <div key={s.label} className="bg-white rounded-md border border-gray-100 shadow-sm px-5 py-4">
                <div className="text-xs text-gray-500 mb-1">{s.label}</div>
                <div className="text-2xl font-semibold" style={{ color: s.color }}>{s.value}</div>
              </div>
            ))}
          </div>

          {/* Search + add */}
          <div className="flex items-center gap-3">
            <div className="relative flex-1 max-w-sm">
              <Search size={13} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input type="text" placeholder="Tìm kiếm theo tên hoặc email"
                value={search} onChange={(e) => { setSearch(e.target.value); setPage(1); }}
                className="w-full pl-8 pr-3 py-2 text-xs border border-gray-200 rounded bg-white shadow-sm placeholder-gray-400 focus:outline-none focus:border-[#094D8A] transition-colors" />
            </div>
            <button className="flex items-center gap-1.5 px-4 py-2 rounded text-white text-xs font-medium hover:opacity-90 transition-opacity"
              style={{ background: "linear-gradient(90deg, #094D8A, #094D8A)" }}>
              <Plus size={13} /> Developer
            </button>
          </div>

          {/* Table card */}
          <div className="bg-white rounded-md border border-gray-100 shadow-sm">
            {/* Tabs */}
            <div className="flex border-b border-gray-100 px-4">
              {DEV_TABS.map((tab) => (
                <button key={tab.status}
                  onClick={() => { setActiveTab(tab.status); setPage(1); }}
                  className={`px-3 py-3 text-xs font-medium whitespace-nowrap transition-colors border-b-2 -mb-px ${
                    activeTab === tab.status
                      ? "border-[#094D8A] text-[#094D8A]"
                      : "border-transparent text-gray-500 hover:text-gray-700"
                  }`}>
                  {tab.label} ({counts[tab.status]})
                </button>
              ))}
            </div>

            {/* Table */}
            <table className="w-full text-xs">
              <thead>
                <tr className="border-b border-gray-100 bg-gray-50/60">
                  <th className="text-left px-4 py-3 text-gray-500 font-semibold w-10">STT</th>
                  <th className="text-left px-4 py-3 text-gray-500 font-semibold">DEVELOPER</th>
                  <th className="text-left px-4 py-3 text-gray-500 font-semibold">EMAIL</th>
                  <th className="text-center px-4 py-3 text-gray-500 font-semibold w-28">DOANH NGHIỆP</th>
                  <th className="text-center px-4 py-3 text-gray-500 font-semibold w-24">MINI APP</th>
                  <th className="text-center px-4 py-3 text-gray-500 font-semibold w-32">TRẠNG THÁI</th>
                  <th className="text-center px-4 py-3 text-gray-500 font-semibold w-24">THAO TÁC</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {paged.map((dev, idx) => {
                  const st = DEV_STATUS_CONFIG[dev.trangThai];
                  return (
                    <tr key={dev.id} className="hover:bg-gray-50/60 transition-colors">
                      <td className="px-4 py-3.5 text-gray-500">{(page - 1) * rowsPerPage + idx + 1}</td>
                      <td className="px-4 py-3.5">
                        <div className="font-semibold text-gray-800">{dev.ten}</div>
                        <div className="text-gray-400 text-[11px] mt-0.5">ID: {dev.id}</div>
                      </td>
                      <td className="px-4 py-3.5 text-gray-600">{dev.email}</td>
                      <td className="px-4 py-3.5 text-center text-gray-700">{dev.soDoanhNghiep}</td>
                      <td className="px-4 py-3.5 text-center text-gray-700">{dev.soMiniApp}</td>
                      <td className="px-4 py-3.5 text-center">
                        <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-medium"
                          style={{ color: st.color, background: st.bg }}>
                          {dev.trangThai}
                        </span>
                      </td>
                      <td className="px-4 py-3.5 text-center">
                        <button onClick={() => onViewDeveloper(dev.id)}
                          className="text-xs text-[#094D8A] hover:text-[#073A63] font-medium transition-colors">
                          Xem
                        </button>
                      </td>
                    </tr>
                  );
                })}
                {paged.length === 0 && (
                  <tr><td colSpan={7} className="px-4 py-10 text-center text-gray-400">Không có dữ liệu</td></tr>
                )}
              </tbody>
            </table>

            {/* Pagination */}
            <div className="flex items-center justify-between px-4 py-3 border-t border-gray-100">
              <span className="text-xs text-gray-400">
                Hiển thị {filtered.length === 0 ? 0 : (page - 1) * rowsPerPage + 1}–{Math.min(page * rowsPerPage, filtered.length)} / {filtered.length} Developer
              </span>
              <div className="flex items-center gap-1">
                <button onClick={() => setPage((p) => Math.max(1, p - 1))} disabled={page === 1}
                  className="w-7 h-7 flex items-center justify-center rounded border border-gray-200 text-gray-500 hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed">
                  <ChevronLeft size={12} />
                </button>
                {Array.from({ length: Math.min(totalPages, 3) }, (_, i) => i + 1).map((p) => (
                  <button key={p} onClick={() => setPage(p)}
                    className={`w-7 h-7 flex items-center justify-center rounded text-xs font-medium transition-colors ${
                      p === page ? "bg-[#094D8A] text-white" : "border border-gray-200 text-gray-600 hover:bg-gray-50"
                    }`}>{p}</button>
                ))}
                {totalPages > 3 && <span className="text-xs text-gray-400 px-1">...</span>}
                <button onClick={() => setPage((p) => Math.min(totalPages, p + 1))} disabled={page === totalPages}
                  className="w-7 h-7 flex items-center justify-center rounded border border-gray-200 text-gray-500 hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed">
                  <ChevronRight size={12} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── API Management ────────────────────────────────────────────────────────
type ApiStatus = "Published" | "Draft";
type ApiMethod = "GET" | "POST" | "PUT" | "DELETE" | "PATCH";

interface ApiRow {
  id: number;
  ten: string;
  method: ApiMethod;
  endpoint: string;
  version: string;
  trangThai: ApiStatus;
}

const API_DATA: ApiRow[] = [
  { id: 1, ten: "Lấy danh sách học sinh", method: "GET", endpoint: "/students", version: "v1.0", trangThai: "Published" },
  { id: 2, ten: "Lấy chi tiết học sinh", method: "GET", endpoint: "/students/{id}", version: "v1.0", trangThai: "Published" },
  { id: 3, ten: "Tạo đơn xin nghỉ phép", method: "POST", endpoint: "/leave-request", version: "v1.2", trangThai: "Published" },
  { id: 4, ten: "Lấy điểm số học sinh", method: "GET", endpoint: "/scores", version: "v1.0", trangThai: "Draft" },
  { id: 5, ten: "Ghi nhận điểm danh", method: "POST", endpoint: "/attendance", version: "v1.1", trangThai: "Published" },
  { id: 6, ten: "Lấy danh sách thông báo", method: "GET", endpoint: "/notifications", version: "v1.0", trangThai: "Published" },
  { id: 7, ten: "Xử lý thanh toán", method: "POST", endpoint: "/payments", version: "v2.0", trangThai: "Published" },
  { id: 8, ten: "Cập nhật thông tin học sinh", method: "PUT", endpoint: "/students/{id}", version: "v1.1", trangThai: "Published" },
  { id: 9, ten: "Lấy lịch học", method: "GET", endpoint: "/schedules", version: "v1.0", trangThai: "Published" },
  { id: 10, ten: "Đăng ký môn học", method: "POST", endpoint: "/enrollments", version: "v1.0", trangThai: "Draft" },
  { id: 11, ten: "Lấy báo cáo tài chính", method: "GET", endpoint: "/finance/report", version: "v2.0", trangThai: "Published" },
  { id: 12, ten: "Cập nhật trạng thái đơn", method: "PATCH", endpoint: "/orders/{id}/status", version: "v1.3", trangThai: "Published" },
  { id: 13, ten: "Xóa thông báo", method: "DELETE", endpoint: "/notifications/{id}", version: "v1.0", trangThai: "Draft" },
  { id: 14, ten: "Lấy danh sách giáo viên", method: "GET", endpoint: "/teachers", version: "v1.0", trangThai: "Published" },
  { id: 15, ten: "Tạo lớp học mới", method: "POST", endpoint: "/classes", version: "v1.0", trangThai: "Draft" },
];

const API_STATUS_CONFIG: Record<ApiStatus, { color: string; bg: string }> = {
  Published: { color: "#16A34A", bg: "#DCFCE7" },
  Draft: { color: "#D97706", bg: "#FEF3C7" },
};

const METHOD_COLOR: Record<ApiMethod, { color: string; bg: string }> = {
  GET: { color: "#2563EB", bg: "#DBEAFE" },
  POST: { color: "#16A34A", bg: "#DCFCE7" },
  PUT: { color: "#D97706", bg: "#FEF3C7" },
  DELETE: { color: "#DC2626", bg: "#FEE2E2" },
  PATCH: { color: "#7C3AED", bg: "#EDE9FE" },
};

const API_STATUS_TABS: { label: string; status: ApiStatus | "all" }[] = [
  { label: "Tất cả", status: "all" },
  { label: "Published", status: "Published" },
  { label: "Draft", status: "Draft" },
  
];

function APIManagementScreen({ onNavigate, onViewDetail }: { onNavigate: (s: Screen) => void; onViewDetail: (id: number) => void }) {
  const [activeTab, setActiveTab] = useState<ApiStatus | "all">("all");
  const [search, setSearch] = useState("");
  const [methodFilter, setMethodFilter] = useState<ApiMethod | "all">("all");
  const [page, setPage] = useState(1);
  const rowsPerPage = 7;

  const counts: Record<ApiStatus | "all", number> = {
    all: API_DATA.length,
    Published: API_DATA.filter((a) => a.trangThai === "Published").length,
    Draft: API_DATA.filter((a) => a.trangThai === "Draft").length,
  };

  const filtered = API_DATA.filter((a) => {
    const matchTab = activeTab === "all" || a.trangThai === activeTab;
    const matchSearch =
      search === "" ||
      a.ten.toLowerCase().includes(search.toLowerCase()) ||
      a.endpoint.toLowerCase().includes(search.toLowerCase());
    const matchMethod = methodFilter === "all" || a.method === methodFilter;
    return matchTab && matchSearch && matchMethod;
  });

  const totalPages = Math.max(1, Math.ceil(filtered.length / rowsPerPage));
  const paged = filtered.slice((page - 1) * rowsPerPage, page * rowsPerPage);

  const clearFilters = () => {
    setSearch("");
    setMethodFilter("all");
    setActiveTab("all");
    setPage(1);
  };

  const hasFilters = search !== "" || methodFilter !== "all";

  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden" style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}>
      <Sidebar current="apiManagement" onNavigate={onNavigate} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <TopBar title="API Management" />
        <div className="flex-1 overflow-y-auto px-6 py-5">
          {/* Page header */}
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-xl font-semibold text-gray-900">API Management</h2>
            <div className="flex items-center gap-2">
              <button className="flex items-center gap-1.5 px-4 py-2 rounded text-xs font-medium border border-gray-200 bg-white text-gray-700 hover:bg-gray-50 transition-colors shadow-sm">
                <Upload size={13} />
                Import OpenAPI/Swagger
              </button>
              <button className="flex items-center gap-1.5 px-4 py-2 rounded text-white text-xs font-medium hover:opacity-90 transition-opacity shadow-sm"
                style={{ background: "linear-gradient(90deg, #094D8A, #094D8A)" }}>
                <Plus size={13} />
                API
              </button>
            </div>
          </div>

          {/* Stat cards */}
          <div className="grid grid-cols-4 gap-4 mb-5">
            {[
              { label: "Tổng API", value: counts.all, iconBg: "#EDE9FE", iconColor: "#7C3AED", icon: "⚡" },
              { label: "Published", value: counts.Published, iconBg: "#DCFCE7", iconColor: "#16A34A", icon: "✓" },
              { label: "Draft", value: counts.Draft, iconBg: "#FEF3C7", iconColor: "#D97706", icon: "✎" },
          
            ].map((s) => (
              <div key={s.label} className="bg-white rounded-md border border-gray-100 shadow-sm px-5 py-4 flex items-center gap-4">
                <div className="w-10 h-10 rounded-md flex items-center justify-center text-base shrink-0"
                  style={{ background: s.iconBg, color: s.iconColor }}>
                  {s.icon}
                </div>
                <div>
                  <div className="text-xs text-gray-500 mb-0.5">{s.label}</div>
                  <div className="text-2xl font-semibold text-gray-900">{s.value}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Filters */}
          <div className="flex items-center gap-3 mb-4">
            <div className="relative flex-1 max-w-sm">
              <Search size={13} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Tìm kiếm theo tên API hoặc Endpoint"
                value={search}
                onChange={(e) => { setSearch(e.target.value); setPage(1); }}
                className="w-full pl-8 pr-3 py-2 text-xs border border-gray-200 rounded bg-white shadow-sm placeholder-gray-400 focus:outline-none focus:border-[#094D8A] transition-colors"
              />
            </div>
            <div className="relative">
              <select
                value={methodFilter}
                onChange={(e) => { setMethodFilter(e.target.value as ApiMethod | "all"); setPage(1); }}
                className="appearance-none pl-3 pr-8 py-2 text-xs border border-gray-200 rounded bg-white shadow-sm text-gray-600 focus:outline-none focus:border-[#094D8A] transition-colors cursor-pointer"
              >
                <option value="all">Method</option>
                <option value="GET">GET</option>
                <option value="POST">POST</option>
                <option value="PUT">PUT</option>
                <option value="DELETE">DELETE</option>
                <option value="PATCH">PATCH</option>
              </select>
              <ChevronDown size={11} className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
            </div>
            {hasFilters && (
              <button onClick={clearFilters} className="text-xs text-[#094D8A] hover:text-[#073A63] font-medium transition-colors whitespace-nowrap">
                Xóa bộ lọc
              </button>
            )}
          </div>

          {/* Table card */}
          <div className="bg-white rounded-md border border-gray-100 shadow-sm">
            {/* Tabs */}
            <div className="flex border-b border-gray-100 px-4">
              {API_STATUS_TABS.map((tab) => (
                <button
                  key={tab.status}
                  onClick={() => { setActiveTab(tab.status); setPage(1); }}
                  className={`px-3 py-3 text-xs font-medium whitespace-nowrap transition-colors border-b-2 -mb-px ${
                    activeTab === tab.status
                      ? "border-[#094D8A] text-[#094D8A]"
                      : "border-transparent text-gray-500 hover:text-gray-700"
                  }`}
                >
                  {tab.label} ({counts[tab.status]})
                </button>
              ))}
            </div>

            {/* Table */}
            <table className="w-full text-xs">
              <thead>
                <tr className="border-b border-gray-100 bg-gray-50/60">
                  <th className="text-left px-4 py-3 text-gray-500 font-semibold w-10">STT</th>
                  <th className="text-left px-4 py-3 text-gray-500 font-semibold">TÊN API</th>
                  <th className="text-left px-4 py-3 text-gray-500 font-semibold w-20">METHOD</th>
                  <th className="text-left px-4 py-3 text-gray-500 font-semibold">ENDPOINT</th>
                  <th className="text-left px-4 py-3 text-gray-500 font-semibold w-20">VERSION</th>
                  <th className="text-center px-4 py-3 text-gray-500 font-semibold w-28">TRẠNG THÁI</th>
                  <th className="text-center px-4 py-3 text-gray-500 font-semibold w-36">THAO TÁC</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {paged.map((api, idx) => {
                  const st = API_STATUS_CONFIG[api.trangThai];
                  const mt = METHOD_COLOR[api.method];
                  return (
                    <tr key={api.id} className="hover:bg-gray-50/60 transition-colors">
                      <td className="px-4 py-3.5 text-gray-500">{(page - 1) * rowsPerPage + idx + 1}</td>
                      <td className="px-4 py-3.5 font-medium text-gray-800">{api.ten}</td>
                      <td className="px-4 py-3.5">
                        <span className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-semibold"
                          style={{ color: mt.color, background: mt.bg }}>
                          {api.method}
                        </span>
                      </td>
                      <td className="px-4 py-3.5 font-mono text-gray-600 text-[11px]">{api.endpoint}</td>
                      <td className="px-4 py-3.5 text-gray-500">{api.version}</td>
                      
                      <td className="px-4 py-3.5 text-center">
                        <button onClick={() => onViewDetail(api.id)} className="px-2.5 py-1 rounded text-[11px] font-medium border border-gray-200 text-gray-600 bg-white hover:bg-gray-50 transition-colors whitespace-nowrap">
                          Xem chi tiết
                        </button>
                      </td>
                    </tr>
                  );
                })}
                {paged.length === 0 && (
                  <tr>
                    <td colSpan={7} className="px-4 py-10 text-center text-gray-400">Không có dữ liệu</td>
                  </tr>
                )}
              </tbody>
            </table>

            {/* Pagination */}
            <div className="flex items-center justify-between px-4 py-3 border-t border-gray-100">
              <span className="text-xs text-gray-400">
                Hiển thị {filtered.length === 0 ? 0 : (page - 1) * rowsPerPage + 1}–{Math.min(page * rowsPerPage, filtered.length)} / {filtered.length} API
              </span>
              <div className="flex items-center gap-1">
                <button onClick={() => setPage((p) => Math.max(1, p - 1))} disabled={page === 1}
                  className="w-7 h-7 flex items-center justify-center rounded border border-gray-200 text-gray-500 hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed">
                  <ChevronLeft size={12} />
                </button>
                {Array.from({ length: Math.min(totalPages, 3) }, (_, i) => i + 1).map((p) => (
                  <button key={p} onClick={() => setPage(p)}
                    className={`w-7 h-7 flex items-center justify-center rounded text-xs font-medium transition-colors ${
                      p === page ? "bg-[#094D8A] text-white" : "border border-gray-200 text-gray-600 hover:bg-gray-50"
                    }`}>{p}</button>
                ))}
                {totalPages > 3 && <span className="text-xs text-gray-400 px-1">...</span>}
                <button onClick={() => setPage((p) => Math.min(totalPages, p + 1))} disabled={page === totalPages}
                  className="w-7 h-7 flex items-center justify-center rounded border border-gray-200 text-gray-500 hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed">
                  <ChevronRight size={12} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Chi Tiet API ──────────────────────────────────────────────────────────
interface ApiDetailInfo {
  tenKyThuat: string;
  module: string;
  versionHienTai: string;
  capNhatCuoi: string;
  endpointFull: string;
  moTa: string;
  luuY: string;
  authentication: string;
  scope: string;
  rateLimit: string;
  timeout: string;
  cache: string;
  responseFormat: string;
  soVersion: number;
  soMiniApp: number;
}

const API_DETAIL_MAP: Record<number, ApiDetailInfo> = {
  1: {
    tenKyThuat: "Student_List_Query", module: "Học thuật", versionHienTai: "v2.4.0",
    capNhatCuoi: "10/10/2023 14:30", endpointFull: "/api/v1/students",
    moTa: "Dịch vụ này đóng vai trò là cổng truy xuất dữ liệu học sinh chính cho toàn bộ hệ sinh thái ứng dụng trong dự án Hệ thống giáo dục. API được tối ưu hóa để truy xuất khối lượng dữ liệu lớn mà không ảnh hưởng đến hiệu năng của cơ sở dữ liệu gốc thông qua tầng Cache Redis.\n\nCác tính năng chính:\n• Hỗ trợ lọc đa điều kiện: class_id, academic_year, status.\n• Phân trang linh hoạt với tham số page và limit.\n• Tìm kiếm mở (Fuzzy search) theo student_name hoặc student_id.\n• Trả về đầy đủ thông tin định danh và thông tin liên hệ cơ bản của học sinh.",
    luuY: "Từ phiên bản 2.4.0, các yêu cầu không có header X-App-ID hợp lệ sẽ bị từ chối với mã lỗi 403 Forbidden. Vui lòng đảm bảo ứng dụng của bạn đã đăng ký trên Mini App Hub trước khi thực hiện tích hợp.",
    authentication: "OAuth 2.0 / JWT", scope: "edu.students.read", rateLimit: "1000 requests/minute",
    timeout: "30,000 ms", cache: "Redis (TTL: 300s)", responseFormat: "JSON / UTF-8",
    soVersion: 2, soMiniApp: 8,
  },
  2: {
    tenKyThuat: "Student_Detail_Query", module: "Học thuật", versionHienTai: "v1.3.0",
    capNhatCuoi: "05/09/2023 10:15", endpointFull: "/api/v1/students/{id}",
    moTa: "Truy xuất thông tin chi tiết của một học sinh theo ID. Bao gồm thông tin cá nhân, kết quả học tập và lịch sử điểm danh.\n\nCác tính năng chính:\n• Trả về toàn bộ profile học sinh.\n• Bao gồm thông tin phụ huynh và liên hệ khẩn cấp.\n• Hỗ trợ tham số fields để chọn lọc trường dữ liệu cần thiết.",
    luuY: "ID học sinh phải là UUID hợp lệ. Truyền ID không đúng định dạng sẽ trả về lỗi 400 Bad Request.",
    authentication: "OAuth 2.0 / JWT", scope: "edu.students.read", rateLimit: "500 requests/minute",
    timeout: "15,000 ms", cache: "Redis (TTL: 60s)", responseFormat: "JSON / UTF-8",
    soVersion: 1, soMiniApp: 5,
  },
  3: {
    tenKyThuat: "Leave_Request_Create", module: "Nhân sự", versionHienTai: "v1.2.0",
    capNhatCuoi: "12/11/2023 09:00", endpointFull: "/api/v1/leave-request",
    moTa: "Tạo đơn xin nghỉ phép cho giáo viên hoặc nhân viên. Hệ thống sẽ tự động gửi thông báo đến quản lý trực tiếp để phê duyệt.\n\nCác tính năng chính:\n• Hỗ trợ nhiều loại nghỉ: nghỉ phép, nghỉ bệnh, nghỉ không lương.\n• Tự động tính số ngày nghỉ còn lại.\n• Gửi email và push notification đến người phê duyệt.",
    luuY: "Đơn nghỉ phép phải được tạo trước ít nhất 24 giờ so với ngày bắt đầu nghỉ (ngoại trừ nghỉ bệnh khẩn cấp).",
    authentication: "OAuth 2.0 / JWT", scope: "hr.leave.write", rateLimit: "100 requests/minute",
    timeout: "10,000 ms", cache: "Không áp dụng", responseFormat: "JSON / UTF-8",
    soVersion: 2, soMiniApp: 3,
  },
  4: {
    tenKyThuat: "Score_List_Query", module: "Học tập", versionHienTai: "v1.0.0",
    capNhatCuoi: "20/08/2023 16:45", endpointFull: "/api/v1/scores",
    moTa: "Truy xuất danh sách điểm số học sinh theo lớp và môn học. API đang trong giai đoạn phát triển (Draft).\n\nCác tính năng dự kiến:\n• Lọc theo lớp, môn học, học kỳ.\n• Xuất báo cáo điểm theo định dạng CSV/Excel.\n• Thống kê điểm trung bình lớp.",
    luuY: "API này đang ở trạng thái Draft, chưa sẵn sàng cho môi trường production. Vui lòng không tích hợp vào ứng dụng chính thức.",
    authentication: "OAuth 2.0 / JWT", scope: "edu.scores.read", rateLimit: "200 requests/minute",
    timeout: "20,000 ms", cache: "Chưa cấu hình", responseFormat: "JSON / UTF-8",
    soVersion: 1, soMiniApp: 0,
  },
  5: {
    tenKyThuat: "Attendance_Record_Create", module: "Điểm danh", versionHienTai: "v1.1.0",
    capNhatCuoi: "01/10/2023 08:30", endpointFull: "/api/v1/attendance",
    moTa: "Ghi nhận điểm danh học sinh cho từng buổi học. Hỗ trợ điểm danh hàng loạt và điểm danh từng học sinh.\n\nCác tính năng chính:\n• Điểm danh theo danh sách lớp.\n• Ghi chú lý do vắng mặt.\n• Tích hợp với hệ thống thông báo phụ huynh.",
    luuY: "Mỗi session chỉ được ghi nhận một lần điểm danh. Gọi API lần 2 trong cùng session sẽ ghi đè dữ liệu cũ.",
    authentication: "OAuth 2.0 / JWT", scope: "edu.attendance.write", rateLimit: "300 requests/minute",
    timeout: "10,000 ms", cache: "Không áp dụng", responseFormat: "JSON / UTF-8",
    soVersion: 2, soMiniApp: 6,
  },
};

function getApiDetail(id: number): ApiDetailInfo {
  return API_DETAIL_MAP[id] ?? {
    tenKyThuat: "API_Endpoint", module: "Hệ thống", versionHienTai: "v1.0.0",
    capNhatCuoi: "01/01/2024 00:00", endpointFull: "/api/v1/endpoint",
    moTa: "Mô tả chi tiết về API này.", luuY: "",
    authentication: "OAuth 2.0 / JWT", scope: "system.read", rateLimit: "500 requests/minute",
    timeout: "30,000 ms", cache: "Redis (TTL: 60s)", responseFormat: "JSON / UTF-8",
    soVersion: 1, soMiniApp: 0,
  };
}

type VersionStatus = "Nháp" | "Phát hành";

interface ApiVersion {
  id: number;
  phienBan: string;
  ngayTao: string;
  trangThai: VersionStatus;
  usedBy: number;
  moTa: string;
}

const DEFAULT_VERSIONS: ApiVersion[] = [
  { id: 1, phienBan: "v3.0", ngayTao: "24/06/2026", trangThai: "Nháp",      usedBy: 0, moTa: "Bổ sung filter theo lớp, cải thiện hiệu năng truy vấn" },
  { id: 2, phienBan: "v2.0", ngayTao: "18/06/2026", trangThai: "Phát hành", usedBy: 0, moTa: "Phiên bản thử nghiệm, bổ sung phân trang nâng cao" },
  { id: 3, phienBan: "v1.0", ngayTao: "12/05/2025", trangThai: "Phát hành", usedBy: 8, moTa: "Phiên bản ổn định, đang được sử dụng chính thức" },
];

const INITIAL_VERSIONS: Record<number, ApiVersion[]> = {
  1: DEFAULT_VERSIONS,
  2: [
    { id: 1, phienBan: "v1.1", ngayTao: "10/06/2026", trangThai: "Nháp",      usedBy: 0, moTa: "Thêm trường thông tin phụ huynh" },
    { id: 2, phienBan: "v1.0", ngayTao: "05/09/2023", trangThai: "Phát hành", usedBy: 5, moTa: "Phiên bản ổn định ban đầu" },
  ],
  3: [
    { id: 1, phienBan: "v1.2", ngayTao: "12/11/2023", trangThai: "Phát hành", usedBy: 0, moTa: "Thêm loại nghỉ bệnh khẩn cấp" },
    { id: 2, phienBan: "v1.1", ngayTao: "01/09/2023", trangThai: "Phát hành", usedBy: 3, moTa: "Cải thiện validation ngày nghỉ" },
    { id: 3, phienBan: "v1.0", ngayTao: "01/06/2023", trangThai: "Phát hành", usedBy: 0, moTa: "Phiên bản đầu tiên" },
  ],
};

function getInitialVersions(apiId: number): ApiVersion[] {
  return INITIAL_VERSIONS[apiId] ?? [
    { id: 1, phienBan: "v1.0", ngayTao: "01/01/2024", trangThai: "Phát hành", usedBy: 0, moTa: "Phiên bản đầu tiên" },
  ];
}

type DocType = "PDF" | "DOCX" | "XLSX" | "TXT" | "Other";

interface ApiDoc {
  id: number;
  ten: string;
  loai: DocType;
  moTa: string;
  capNhat: string;
  nguoiCapNhat: string;
  fileName: string;
}

const DEFAULT_DOCS: ApiDoc[] = [
  { id: 1, ten: "Hướng dẫn tích hợp API",     loai: "PDF",  moTa: "Tài liệu hướng dẫn developer tích hợp API vào ứng dụng.", capNhat: "24/06/2026", nguoiCapNhat: "Nguyễn Văn A", fileName: "huong-dan-tich-hop-api.pdf" },
  { id: 2, ten: "Quy chuẩn xác thực OAuth2",  loai: "PDF",  moTa: "Mô tả quy trình xác thực theo chuẩn OAuth 2.0 / JWT.",    capNhat: "22/06/2026", nguoiCapNhat: "Nguyễn Văn A", fileName: "quy-chuan-xac-thuc-oauth2.pdf" },
  { id: 3, ten: "Quy chuẩn Error Code",        loai: "DOCX", moTa: "Danh sách mã lỗi và cách xử lý cho từng trường hợp.",    capNhat: "18/06/2026", nguoiCapNhat: "Nguyễn Văn A", fileName: "quy-chuan-error-code.docx" },
  { id: 4, ten: "Quy chuẩn Response",          loai: "PDF",  moTa: "Cấu trúc response chuẩn và cách parse dữ liệu trả về.",  capNhat: "15/06/2026", nguoiCapNhat: "Trần Thị B",  fileName: "quy-chuan-response.pdf" },
];

const DOC_TYPE_COLOR: Record<DocType, { color: string; bg: string }> = {
  PDF:   { color: "#DC2626", bg: "#FEE2E2" },
  DOCX:  { color: "#2563EB", bg: "#DBEAFE" },
  XLSX:  { color: "#16A34A", bg: "#DCFCE7" },
  TXT:   { color: "#6B7280", bg: "#F3F4F6" },
  Other: { color: "#7C3AED", bg: "#EDE9FE" },
};

interface MiniAppUsage {
  id: number;
  appId: string;
  tenMiniApp: string;
  doanhNghiep: string;
  danhMuc: string;
  phienBanApi: string;
  phienBanApp: string;
  ngayTichHop: string;
  trangThai: MiniAppStatus;
}

const DEFAULT_MINI_APP_USAGES: MiniAppUsage[] = [
  { id: 1, appId: "APP-000001", tenMiniApp: "Sổ liên lạc điện tử",  doanhNghiep: "FPT Software", danhMuc: "Giáo dục",  phienBanApi: "v2.0", phienBanApp: "v2.3.0", ngayTichHop: "20/06/2026", trangThai: "Đã xuất bản" },
  { id: 2, appId: "APP-000002", tenMiniApp: "Điểm danh thông minh",  doanhNghiep: "VNPT",         danhMuc: "Giáo dục",  phienBanApi: "v2.0", phienBanApp: "v1.5.0", ngayTichHop: "21/06/2026", trangThai: "Đã xuất bản" },
  { id: 3, appId: "APP-000003", tenMiniApp: "Quản lý học phí",        doanhNghiep: "MISA",         danhMuc: "Tài chính", phienBanApi: "v1.0", phienBanApp: "v3.0.0", ngayTichHop: "12/05/2025", trangThai: "Đã xuất bản" },
];

function ChiTietAPIScreen({ apiId, onBack, onNavigate, onViewMiniApp }: { apiId: number; onBack: () => void; onNavigate: (s: Screen) => void; onViewMiniApp: (appId: string) => void }) {
  const [activeTab, setActiveTab] = useState<"tongquan" | "version" | "tailieu" | "miniapp" | "nhatky">("tongquan");
  const [versions, setVersions] = useState<ApiVersion[]>(() => getInitialVersions(apiId));
  const [versionSearch, setVersionSearch] = useState("");
  const [editingVersion, setEditingVersion] = useState<ApiVersion | null>(null);
  const [editForm, setEditForm] = useState({ phienBan: "", moTa: "", fileName: "" });
  const [showNewVersionModal, setShowNewVersionModal] = useState(false);
  const [newVersionForm, setNewVersionForm] = useState({ phienBan: "", moTa: "", fileName: "" });
  const [docs, setDocs] = useState<ApiDoc[]>(DEFAULT_DOCS);
  const [docSearch, setDocSearch] = useState("");
  const [showDocModal, setShowDocModal] = useState(false);
  const [editingDoc, setEditingDoc] = useState<ApiDoc | null>(null);
  const [docForm, setDocForm] = useState({ ten: "", loai: "PDF" as DocType, moTa: "", fileName: "" });
  const [miniAppUsages] = useState<MiniAppUsage[]>(DEFAULT_MINI_APP_USAGES);
  const [miniappSearch, setMiniappSearch] = useState("");
  const [miniappVersionFilter, setMiniappVersionFilter] = useState("all");
  const [selectedMiniAppUsage, setSelectedMiniAppUsage] = useState<MiniAppUsage | null>(null);
  const api = API_DATA.find((a) => a.id === apiId);
  const detail = getApiDetail(apiId);
  if (!api) return null;

  const openNewVersionModal = () => {
    const maxMajor = versions.reduce((max, v) => {
      const m = v.phienBan.match(/^v(\d+)/);
      return m ? Math.max(max, parseInt(m[1])) : max;
    }, 0);
    const suggested = `v${maxMajor + 1}.0`;
    setNewVersionForm({ phienBan: suggested, moTa: "", fileName: "" });
    setShowNewVersionModal(true);
  };

  const handleCreateVersion = () => {
    if (!newVersionForm.phienBan.trim() || !newVersionForm.moTa.trim()) return;
    const today = new Date();
    const ngayTao = `${String(today.getDate()).padStart(2, "0")}/${String(today.getMonth() + 1).padStart(2, "0")}/${today.getFullYear()}`;
    setVersions((prev) => [
      ...prev,
      {
        id: prev.length > 0 ? Math.max(...prev.map((v) => v.id)) + 1 : 1,
        phienBan: newVersionForm.phienBan.trim(),
        ngayTao,
        trangThai: "Nháp",
        usedBy: 0,
        moTa: newVersionForm.moTa.trim(),
      },
    ]);
    setShowNewVersionModal(false);
  };

  const mt = METHOD_COLOR[api.method];
  const st = API_STATUS_CONFIG[api.trangThai];

  const TABS = [
    { key: "tongquan" as const, label: "Tổng quan" },
    { key: "version" as const, label: `Phiên bản ${versions.length}` },
    { key: "tailieu" as const, label: "Tài liệu API" },
    { key: "miniapp" as const, label: `Mini App sử dụng ${detail.soMiniApp}` },
    
  ];

  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden" style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}>
      <Sidebar current="apiManagement" onNavigate={onNavigate} />
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Breadcrumb bar */}
        <div className="bg-white border-b border-gray-100 px-5 py-2.5 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2 text-xs text-gray-500">
            <button onClick={onBack} className="p-1 rounded hover:bg-gray-100 transition-colors text-gray-500 hover:text-gray-700">
              <ChevronLeft size={15} />
            </button>
            <span className="hover:text-[#094D8A] cursor-pointer" onClick={onBack}>API Management</span>
            <ChevronRight size={11} className="text-gray-300" />
            <span className="text-gray-800 font-medium">Chi tiết API</span>
          </div>
          <div className="flex items-center gap-2">
            <button className="flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-medium border border-gray-200 bg-white text-gray-600 hover:bg-gray-50 transition-colors">
              <Copy size={12} />
              Sao chép URL
            </button>
            <button className="w-7 h-7 flex items-center justify-center rounded border border-gray-200 bg-white text-gray-500 hover:bg-gray-50 transition-colors">
              <MoreVertical size={14} />
            </button>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-5 space-y-4">
          {/* Header card */}
          <div className="bg-white rounded-md border border-gray-100 shadow-sm px-6 py-5">
            <div className="flex items-start justify-between gap-4 mb-3">
              <div className="flex items-center gap-2.5 flex-wrap">
                <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-semibold"
                  style={{ color: mt.color, background: mt.bg }}>
                  {api.method}
                </span>
                <h1 className="text-lg font-semibold text-gray-900">{api.ten} ({api.method} {detail.endpointFull})</h1>
                
              </div>
              <button onClick={openNewVersionModal}
                className="flex items-center gap-1.5 px-4 py-2 rounded text-white text-xs font-medium hover:opacity-90 transition-opacity shrink-0"
                style={{ background: "linear-gradient(90deg, #094D8A, #094D8A)" }}>
                <Plus size={12} />
                Phiên bản mới
              </button>
            </div>
            <p className="text-xs text-gray-500 mb-4 leading-relaxed max-w-3xl">
              {detail.moTa.split("\n")[0]}
            </p>
            <div className="flex items-center gap-6 border-t border-gray-50 pt-4 flex-wrap">
              {[
                { label: "Tên API", value: detail.tenKyThuat },
                { label: "Endpoint", value: detail.endpointFull },
                { label: "Module", value: detail.module },
                { label: "Version hiện tại", value: detail.versionHienTai },
                { label: "Cập nhật lần cuối", value: detail.capNhatCuoi },
              ].map((m) => (
                <div key={m.label} className="flex flex-col gap-0.5">
                  <span className="text-[10px] text-gray-400 uppercase tracking-wide">{m.label}</span>
                  <span className="text-xs font-semibold text-gray-700">{m.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tabs */}
          <div className="bg-white rounded-md border border-gray-100 shadow-sm overflow-hidden">
            <div className="flex border-b border-gray-100 px-4">
              {TABS.map((tab) => (
                <button key={tab.key} onClick={() => setActiveTab(tab.key)}
                  className={`px-4 py-3 text-xs font-medium whitespace-nowrap transition-colors border-b-2 -mb-px ${
                    activeTab === tab.key
                      ? "border-[#094D8A] text-[#094D8A]"
                      : "border-transparent text-gray-500 hover:text-gray-700"
                  }`}>
                  {tab.label}
                </button>
              ))}
            </div>

            {activeTab === "tongquan" && (
              <div className="p-5 space-y-4">
                {/* Two-column info */}
                <div className="grid grid-cols-2 gap-4">
                  {/* Thông tin API */}
                  <div className="border border-gray-100 rounded-md overflow-hidden">
                    <div className="flex items-center gap-2 px-4 py-3 bg-gray-50 border-b border-gray-100">
                      <FileText size={14} className="text-[#094D8A]" />
                      <span className="text-xs font-semibold text-gray-700 uppercase tracking-wide">Thông tin API</span>
                    </div>
                    <div className="divide-y divide-gray-50">
                      {[
                        { label: "Tên API", value: detail.tenKyThuat },
                        { label: "Module", value: detail.module },
                        { label: "Method", value: api.method, isMethod: true },
                        { label: "Endpoint", value: detail.endpointFull, isMono: true },
                        { label: "Version", value: `${detail.versionHienTai} (Stable)` },
                        { label: "Trạng thái", value: api.trangThai === "Published" ? "Đang hoạt động" : api.trangThai, isBold: true },
                      ].map((row) => (
                        <div key={row.label} className="flex items-center justify-between px-4 py-2.5">
                          <span className="text-xs text-gray-500">{row.label}</span>
                          {row.isMethod ? (
                            <span className="text-xs font-semibold px-2 py-0.5 rounded" style={{ color: mt.color, background: mt.bg }}>{row.value}</span>
                          ) : row.isMono ? (
                            <span className="text-xs font-mono bg-gray-100 text-gray-700 px-2 py-0.5 rounded">{row.value}</span>
                          ) : (
                            <span className={`text-xs text-right text-gray-800 ${row.isBold ? "font-semibold" : ""}`}>{row.value}</span>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Cấu hình hệ thống */}
                  <div className="border border-gray-100 rounded-md overflow-hidden">
                    <div className="flex items-center gap-2 px-4 py-3 bg-gray-50 border-b border-gray-100">
                      <Shield size={14} className="text-[#094D8A]" />
                      <span className="text-xs font-semibold text-gray-700 uppercase tracking-wide">Cấu hình hệ thống</span>
                    </div>
                    <div className="divide-y divide-gray-50">
                      {[
                        { label: "Authentication", value: detail.authentication, icon: <Shield size={11} className="text-gray-400" /> },
                        { label: "Scope", value: detail.scope, isTag: true },
                        { label: "Rate Limit", value: detail.rateLimit, icon: <Zap size={11} className="text-gray-400" /> },
                        { label: "Timeout", value: detail.timeout, icon: <Clock size={11} className="text-gray-400" /> },
                        { label: "Cache", value: detail.cache, icon: <Database size={11} className="text-gray-400" /> },
                        { label: "Response Format", value: detail.responseFormat },
                      ].map((row) => (
                        <div key={row.label} className="flex items-center justify-between px-4 py-2.5">
                          <span className="text-xs text-gray-500">{row.label}</span>
                          {row.isTag ? (
                            <span className="text-xs font-mono bg-[#D1E9FF] text-[#073A63] px-2 py-0.5 rounded border border-[#D1E9FF]">{row.value}</span>
                          ) : (
                            <span className="text-xs text-right text-gray-800 font-medium">{row.value}</span>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Mô tả API */}
                <div className="border border-gray-100 rounded-md overflow-hidden">
                  <div className="flex items-center gap-2 px-4 py-3 bg-gray-50 border-b border-gray-100">
                    <FileText size={14} className="text-[#094D8A]" />
                    <span className="text-xs font-semibold text-gray-700 uppercase tracking-wide">Mô tả API</span>
                  </div>
                  <div className="px-5 py-4 space-y-3">
                    {detail.moTa.split("\n").map((line, i) =>
                      line.startsWith("•") ? (
                        <div key={i} className="flex items-start gap-2 ml-2">
                          <span className="w-1 h-1 rounded-full bg-gray-400 mt-1.5 shrink-0" />
                          <span className="text-xs text-gray-600">{line.replace("• ", "")}</span>
                        </div>
                      ) : line.includes(":") && !line.startsWith(" ") && i > 0 ? (
                        <p key={i} className="text-xs font-semibold text-gray-700 mt-1">{line}</p>
                      ) : (
                        <p key={i} className="text-xs text-gray-600 leading-relaxed">{line}</p>
                      )
                    )}
                    {detail.luuY && (
                      <div className="mt-3 flex gap-3 bg-[#D1E9FF] border border-[#D1E9FF] rounded px-4 py-3">
                        <Zap size={14} className="text-[#094D8A] shrink-0 mt-0.5" />
                        <div>
                          <p className="text-xs font-semibold text-[#073A63] mb-1">Lưu ý quan trọng cho nhà phát triển</p>
                          <p className="text-xs text-[#094D8A] leading-relaxed">{detail.luuY}</p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}

            {activeTab === "version" && (() => {
              const filteredVersions = versions.filter((v) =>
                versionSearch === "" ||
                v.phienBan.toLowerCase().includes(versionSearch.toLowerCase()) ||
                v.moTa.toLowerCase().includes(versionSearch.toLowerCase())
              );

              const handlePublish = (id: number) =>
                setVersions((prev) => prev.map((v) => v.id === id ? { ...v, trangThai: "Phát hành" } : v));
              const handleRevoke = (id: number) =>
                setVersions((prev) => prev.map((v) => v.id === id ? { ...v, trangThai: "Nháp" } : v));
              const handleDelete = (id: number) =>
                setVersions((prev) => prev.filter((v) => v.id !== id));

              return (
                <div className="p-5 space-y-4">
                  {/* Search + Add */}
                  <div className="flex items-center gap-3">
                    <div className="relative flex-1">
                      <Search size={13} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                      <input
                        type="text"
                        placeholder="Tìm kiếm phiên bản API"
                        value={versionSearch}
                        onChange={(e) => setVersionSearch(e.target.value)}
                        className="w-full pl-8 pr-3 py-2 text-xs border border-gray-200 rounded bg-white placeholder-gray-400 focus:outline-none focus:border-[#094D8A] transition-colors"
                      />
                    </div>
                    
                  </div>

                  {/* Table */}
                  <div className="border border-gray-100 rounded-md overflow-hidden">
                    <table className="w-full text-xs">
                      <thead>
                        <tr className="bg-gray-50 border-b border-gray-100">
                          <th className="text-left px-4 py-3 text-gray-500 font-semibold w-10">STT</th>
                          <th className="text-left px-4 py-3 text-gray-500 font-semibold w-24">PHIÊN BẢN</th>
                          <th className="text-left px-4 py-3 text-gray-500 font-semibold w-28">NGÀY TẠO</th>
                          <th className="text-left px-4 py-3 text-gray-500 font-semibold w-32">TRẠNG THÁI</th>
                          <th className="text-left px-4 py-3 text-gray-500 font-semibold w-36">MINI APP SỬ DỤNG</th>
                          <th className="text-left px-4 py-3 text-gray-500 font-semibold">MÔ TẢ</th>
                          <th className="text-right px-4 py-3 text-gray-500 font-semibold w-48">THAO TÁC</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-50">
                        {filteredVersions.map((v, idx) => {
                          const isNhap = v.trangThai === "Nháp";
                          const isUsed = v.usedBy > 0;

                          return (
                            <tr key={v.id} className="hover:bg-gray-50/60 transition-colors">
                              <td className="px-4 py-3.5 text-gray-500">{idx + 1}</td>
                              <td className="px-4 py-3.5 font-semibold text-gray-800">{v.phienBan}</td>
                              <td className="px-4 py-3.5 text-gray-600">{v.ngayTao}</td>
                              <td className="px-4 py-3.5">
                                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-medium"
                                  style={isNhap
                                    ? { color: "#D97706", background: "#FEF3C7" }
                                    : { color: "#16A34A", background: "#DCFCE7" }}>
                                  <span className="w-1.5 h-1.5 rounded-full inline-block"
                                    style={{ background: isNhap ? "#D97706" : "#16A34A" }} />
                                  {v.trangThai}
                                </span>
                              </td>
                              <td className="px-4 py-3.5 text-gray-600">
                                {v.usedBy === 0 ? (
                                  <span className="text-gray-400">Không có</span>
                                ) : (
                                  <span className="font-medium text-[#094D8A]">{v.usedBy} Mini App</span>
                                )}
                              </td>
                              <td className="px-4 py-3.5 text-gray-500 leading-relaxed">{v.moTa}</td>
                              <td className="px-4 py-3.5">
                                <div className="flex items-center justify-end gap-1.5">
                                  {isNhap && (
                                    <>
                                      <button
                                        onClick={() => {
                                          setEditingVersion(v);
                                          setEditForm({
                                            phienBan: v.phienBan,
                                            moTa: v.moTa,
                                            fileName: `${(detail.tenKyThuat || "api").toLowerCase().replace(/_/g, "-")}-${v.phienBan}.yaml`,
                                          });
                                        }}
                                        className="px-2.5 py-1 rounded text-[11px] font-medium border border-gray-200 text-gray-600 bg-white hover:bg-gray-50 transition-colors whitespace-nowrap">
                                        Sửa
                                      </button>
                                      <button onClick={() => handlePublish(v.id)}
                                        className="px-2.5 py-1 rounded text-[11px] font-medium border border-green-400 text-green-600 bg-green-50 hover:bg-green-100 transition-colors whitespace-nowrap">
                                        Phát hành
                                      </button>
                                      <button onClick={() => handleDelete(v.id)}
                                        className="px-2.5 py-1 rounded text-[11px] font-medium border border-red-300 text-red-500 bg-red-50 hover:bg-red-100 transition-colors whitespace-nowrap">
                                        Xóa
                                      </button>
                                    </>
                                  )}
                                  {!isNhap && !isUsed && (
                                    <>
                                      <button onClick={() => handleRevoke(v.id)}
                                        className="px-2.5 py-1 rounded text-[11px] font-medium border border-amber-300 text-amber-600 bg-amber-50 hover:bg-amber-100 transition-colors whitespace-nowrap">
                                        Thu hồi
                                      </button>
                                      <button onClick={() => handleDelete(v.id)}
                                        className="px-2.5 py-1 rounded text-[11px] font-medium border border-red-300 text-red-500 bg-red-50 hover:bg-red-100 transition-colors whitespace-nowrap">
                                        Xóa
                                      </button>
                                    </>
                                  )}
                                  {!isNhap && isUsed && (
                                    <>
                                      
                                      <button disabled
                                        className="px-2.5 py-1 rounded text-[11px] font-medium border border-gray-100 text-gray-300 bg-gray-50 cursor-not-allowed whitespace-nowrap">
                                        Thu hồi
                                      </button>
                                      <button disabled
                                        className="px-2.5 py-1 rounded text-[11px] font-medium border border-gray-100 text-gray-300 bg-gray-50 cursor-not-allowed whitespace-nowrap">
                                        Xóa
                                      </button>
                                    </>
                                  )}
                                </div>
                              </td>
                            </tr>
                          );
                        })}
                        {filteredVersions.length === 0 && (
                          <tr>
                            <td colSpan={7} className="px-4 py-10 text-center text-gray-400">Không tìm thấy phiên bản nào</td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
              );
            })()}

            {activeTab === "tailieu" && (() => {
              const filteredDocs = docs.filter((d) =>
                docSearch === "" ||
                d.ten.toLowerCase().includes(docSearch.toLowerCase()) ||
                d.loai.toLowerCase().includes(docSearch.toLowerCase()) ||
                d.nguoiCapNhat.toLowerCase().includes(docSearch.toLowerCase())
              );

              const openAddDoc = () => {
                setEditingDoc(null);
                setDocForm({ ten: "", loai: "PDF", moTa: "", fileName: "" });
                setShowDocModal(true);
              };

              const openEditDoc = (doc: ApiDoc) => {
                setEditingDoc(doc);
                setDocForm({ ten: doc.ten, loai: doc.loai, moTa: doc.moTa, fileName: doc.fileName });
                setShowDocModal(true);
              };

              const handleDeleteDoc = (id: number) =>
                setDocs((prev) => prev.filter((d) => d.id !== id));

              return (
                <div className="p-5 space-y-4">
                  {/* Search + Add */}
                  <div className="flex items-center gap-3">
                    <div className="relative flex-1">
                      <Search size={13} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                      <input
                        type="text"
                        placeholder="Tìm kiếm tài liệu"
                        value={docSearch}
                        onChange={(e) => setDocSearch(e.target.value)}
                        className="w-full pl-8 pr-3 py-2 text-xs border border-gray-200 rounded bg-white placeholder-gray-400 focus:outline-none focus:border-[#094D8A] transition-colors"
                      />
                    </div>
                    <button onClick={openAddDoc}
                      className="flex items-center gap-1.5 px-4 py-2 rounded text-white text-xs font-medium hover:opacity-90 transition-opacity shrink-0"
                      style={{ background: "linear-gradient(90deg, #094D8A, #094D8A)" }}>
                      <Plus size={13} />
                      Thêm tài liệu
                    </button>
                  </div>

                  {filteredDocs.length === 0 ? (
                    <div className="flex flex-col items-center justify-center py-16 text-gray-400 border border-dashed border-gray-200 rounded-md">
                      <FileText size={36} className="mb-3 opacity-25" />
                      <p className="text-sm font-medium text-gray-500 mb-1">Chưa có tài liệu API nào</p>
                      <p className="text-xs text-gray-400 mb-5">Tải lên tài liệu hướng dẫn cho Developer</p>
                      <button onClick={openAddDoc}
                        className="flex items-center gap-1.5 px-4 py-2 rounded text-white text-xs font-medium hover:opacity-90 transition-opacity"
                        style={{ background: "linear-gradient(90deg, #094D8A, #094D8A)" }}>
                        <Plus size={13} />
                        Thêm tài liệu
                      </button>
                    </div>
                  ) : (
                    <div className="border border-gray-100 rounded-md overflow-hidden">
                      <table className="w-full text-xs">
                        <thead>
                          <tr className="bg-gray-50 border-b border-gray-100">
                            <th className="text-left px-4 py-3 text-gray-500 font-semibold w-10">STT</th>
                            <th className="text-left px-4 py-3 text-gray-500 font-semibold">TÊN TÀI LIỆU</th>
                            <th className="text-left px-4 py-3 text-gray-500 font-semibold w-32">LOẠI TÀI LIỆU</th>
                            <th className="text-left px-4 py-3 text-gray-500 font-semibold w-32">CẬP NHẬT</th>
                            <th className="text-left px-4 py-3 text-gray-500 font-semibold w-36">NGƯỜI CẬP NHẬT</th>
                            <th className="text-right px-4 py-3 text-gray-500 font-semibold w-48">THAO TÁC</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50">
                          {filteredDocs.map((doc, idx) => {
                            const tc = DOC_TYPE_COLOR[doc.loai];
                            return (
                              <tr key={doc.id} className="hover:bg-gray-50/60 transition-colors">
                                <td className="px-4 py-3.5 text-gray-500">{idx + 1}</td>
                                <td className="px-4 py-3.5">
                                  <div className="flex items-center gap-2">
                                    <FileText size={13} className="text-gray-400 shrink-0" />
                                    <span className="font-medium text-gray-800">{doc.ten}</span>
                                  </div>
                                </td>
                                <td className="px-4 py-3.5">
                                  <span className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-semibold"
                                    style={{ color: tc.color, background: tc.bg }}>
                                    {doc.loai}
                                  </span>
                                </td>
                                <td className="px-4 py-3.5 text-gray-600">{doc.capNhat}</td>
                                <td className="px-4 py-3.5 text-gray-600">{doc.nguoiCapNhat}</td>
                                <td className="px-4 py-3.5">
                                  <div className="flex items-center justify-end gap-1.5">
                                    <button
                                      className="px-2.5 py-1 rounded text-[11px] font-medium border border-[#D1E9FF] text-[#094D8A] bg-[#D1E9FF] hover:bg-[#D1E9FF] transition-colors whitespace-nowrap">
                                      Tải xuống
                                    </button>
                                    <button onClick={() => openEditDoc(doc)}
                                      className="px-2.5 py-1 rounded text-[11px] font-medium border border-gray-200 text-gray-600 bg-white hover:bg-gray-50 transition-colors whitespace-nowrap">
                                      Sửa
                                    </button>
                                    <button onClick={() => handleDeleteDoc(doc.id)}
                                      className="px-2.5 py-1 rounded text-[11px] font-medium border border-red-300 text-red-500 bg-red-50 hover:bg-red-100 transition-colors whitespace-nowrap">
                                      Xóa
                                    </button>
                                  </div>
                                </td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>
                  )}
                </div>
              );
            })()}

            {activeTab === "miniapp" && (() => {
              const allVersions = Array.from(new Set(miniAppUsages.map((m) => m.phienBanApi)));
              const filtered = miniAppUsages.filter((m) => {
                const matchSearch =
                  miniappSearch === "" ||
                  m.tenMiniApp.toLowerCase().includes(miniappSearch.toLowerCase()) ||
                  m.doanhNghiep.toLowerCase().includes(miniappSearch.toLowerCase());
                const matchVersion = miniappVersionFilter === "all" || m.phienBanApi === miniappVersionFilter;
                return matchSearch && matchVersion;
              });

              return (
                <div className="p-5 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="relative flex-1">
                      <Search size={13} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                      <input
                        type="text"
                        placeholder="Tìm kiếm Mini App"
                        value={miniappSearch}
                        onChange={(e) => setMiniappSearch(e.target.value)}
                        className="w-full pl-8 pr-3 py-2 text-xs border border-gray-200 rounded bg-white placeholder-gray-400 focus:outline-none focus:border-[#094D8A] transition-colors"
                      />
                    </div>
                    <select
                      value={miniappVersionFilter}
                      onChange={(e) => setMiniappVersionFilter(e.target.value)}
                      className="px-3 py-2 text-xs border border-gray-200 rounded bg-white text-gray-600 focus:outline-none focus:border-[#094D8A] transition-colors cursor-pointer"
                    >
                      <option value="all">Phiên bản (Tất cả)</option>
                      {allVersions.map((v) => (
                        <option key={v} value={v}>{v}</option>
                      ))}
                    </select>
                  </div>

                  {filtered.length === 0 ? (
                    <div className="flex flex-col items-center justify-center py-16 border border-gray-100 rounded-md text-gray-400">
                      <span className="text-4xl mb-3">📱</span>
                      <p className="text-sm font-medium text-gray-500">Chưa có Mini App nào sử dụng API này</p>
                    </div>
                  ) : (
                    <div className="border border-gray-100 rounded-md overflow-hidden">
                      <table className="w-full text-xs">
                        <thead>
                          <tr className="bg-gray-50 border-b border-gray-100">
                            <th className="text-left px-4 py-3 text-gray-500 font-semibold w-10">STT</th>
                            <th className="text-left px-4 py-3 text-gray-500 font-semibold">MINI APP</th>
                            <th className="text-left px-4 py-3 text-gray-500 font-semibold">DOANH NGHIỆP</th>
                            <th className="text-left px-4 py-3 text-gray-500 font-semibold w-32">PHIÊN BẢN API</th>
                            <th className="text-left px-4 py-3 text-gray-500 font-semibold w-32">NGÀY TÍCH HỢP</th>
                            <th className="text-right px-4 py-3 text-gray-500 font-semibold w-36">THAO TÁC</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50">
                          {filtered.map((m, idx) => (
                            <tr key={m.id} className="hover:bg-gray-50/60 transition-colors">
                              <td className="px-4 py-3.5 text-gray-500">{idx + 1}</td>
                              <td className="px-4 py-3.5 font-medium text-gray-800">{m.tenMiniApp}</td>
                              <td className="px-4 py-3.5 text-gray-600">{m.doanhNghiep}</td>
                              <td className="px-4 py-3.5">
                                <span className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-semibold"
                                  style={{ color: "#094D8A", background: "#EBEBFB" }}>
                                  {m.phienBanApi}
                                </span>
                              </td>
                              <td className="px-4 py-3.5 text-gray-600">{m.ngayTichHop}</td>
                              <td className="px-4 py-3.5">
                                <div className="flex items-center justify-end">
                                  <button
                                    onClick={() => setSelectedMiniAppUsage(m)}
                                    className="px-2.5 py-1 rounded text-[11px] font-medium border border-[#D1E9FF] text-[#094D8A] bg-[#D1E9FF] hover:bg-[#D1E9FF] transition-colors whitespace-nowrap">
                                    Xem Mini App
                                  </button>
                                </div>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}
                </div>
              );
            })()}

            {activeTab === "nhatky" && (
              <div className="flex flex-col items-center justify-center py-16 text-gray-400">
                <FileText size={32} className="mb-3 opacity-30" />
                <p className="text-sm">Nội dung đang được cập nhật</p>
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="bg-white border-t border-gray-100 px-6 py-2.5 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-4 text-[11px] text-gray-400">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block" />
              API Gateway: Online
            </span>
            <span className="flex items-center gap-1">
              <Clock size={11} />
              Last health check: 2 mins ago
            </span>
          </div>
          <span className="text-[11px] text-gray-400">© 2024 API Management Portal. Phiên bản hệ thống v4.2.1</span>
        </div>
      </div>

      {/* Mini App Drawer */}
      {selectedMiniAppUsage && (
        <MiniAppDrawer
          app={{
            id: selectedMiniAppUsage.id,
            appId: selectedMiniAppUsage.appId,
            ten: selectedMiniAppUsage.tenMiniApp,
            danhMuc: selectedMiniAppUsage.danhMuc,
            phienBan: selectedMiniAppUsage.phienBanApp,
            ngayTao: selectedMiniAppUsage.ngayTichHop,
            trangThai: selectedMiniAppUsage.trangThai,
          }}
          owner={selectedMiniAppUsage.doanhNghiep}
          onClose={() => setSelectedMiniAppUsage(null)}
          onViewFull={() => { setSelectedMiniAppUsage(null); onViewMiniApp(selectedMiniAppUsage.appId); }}
        />
      )}

      {/* Add / Edit Doc Modal */}
      {showDocModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-[1px]"
          onClick={() => setShowDocModal(false)}>
          <div className="bg-white rounded-lg shadow-2xl w-[560px] max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}>

            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4">
              <span className="text-sm font-semibold text-gray-900">
                {editingDoc ? "Sửa tài liệu API" : "Thêm tài liệu API"}
              </span>
              <button onClick={() => setShowDocModal(false)}
                className="w-7 h-7 flex items-center justify-center rounded-full text-gray-400 hover:bg-gray-100 hover:text-gray-600 transition-colors">
                <X size={15} />
              </button>
            </div>

            <div className="border-t border-gray-100" />

            {/* API info */}
            <div className="px-6 py-4">
              <div className="flex items-center gap-8">
                <span className="text-xs text-gray-400 w-24 shrink-0">API</span>
                <span className="text-xs font-semibold text-gray-800">{api.ten}</span>
              </div>
            </div>

            <div className="border-t border-gray-100" />

            {/* Form */}
            <div className="px-6 py-5 space-y-5">
              {/* Tên tài liệu */}
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-2">
                  Tên tài liệu <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={docForm.ten}
                  onChange={(e) => setDocForm((f) => ({ ...f, ten: e.target.value }))}
                  placeholder="Nhập tên tài liệu..."
                  className="w-full px-3 py-2.5 text-sm text-gray-800 border border-gray-200 rounded outline-none focus:border-[#094D8A] focus:ring-1 focus:ring-[#D1E9FF] transition-all placeholder-gray-400"
                />
              </div>

              {/* Loại tài liệu */}
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-2">
                  Loại tài liệu <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <select
                    value={docForm.loai}
                    onChange={(e) => setDocForm((f) => ({ ...f, loai: e.target.value as DocType }))}
                    className="w-full appearance-none px-3 py-2.5 pr-9 text-sm text-gray-800 border border-gray-200 rounded outline-none focus:border-[#094D8A] focus:ring-1 focus:ring-[#D1E9FF] transition-all bg-white cursor-pointer">
                    {(["PDF", "DOCX", "XLSX", "TXT", "Other"] as DocType[]).map((t) => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                  <ChevronDown size={13} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                </div>
              </div>

              {/* Mô tả */}
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-2">Mô tả</label>
                <textarea
                  rows={3}
                  value={docForm.moTa}
                  onChange={(e) => setDocForm((f) => ({ ...f, moTa: e.target.value }))}
                  placeholder="Nhập mô tả ngắn về tài liệu này..."
                  className="w-full px-3 py-2.5 text-sm text-gray-800 border border-gray-200 rounded outline-none resize-none focus:border-[#094D8A] focus:ring-1 focus:ring-[#D1E9FF] transition-all placeholder-gray-400"
                />
              </div>

              {/* Tệp tài liệu */}
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-2">
                  Tệp tài liệu <span className="text-red-500">*</span>
                </label>
                <div className="flex items-center justify-between px-3 py-2.5 border border-gray-200 rounded bg-gray-50">
                  <div className="flex items-center gap-2 min-w-0">
                    {docForm.fileName ? (
                      <>
                        <FileText size={14} className="text-[#094D8A] shrink-0" />
                        <span className="text-xs text-gray-700 truncate">{docForm.fileName}</span>
                      </>
                    ) : (
                      <span className="text-xs text-gray-400">Chưa chọn tệp</span>
                    )}
                  </div>
                  <label className="ml-3 text-[11px] font-medium text-[#094D8A] hover:text-[#073A63] transition-colors whitespace-nowrap shrink-0 cursor-pointer">
                    {docForm.fileName ? "Thay tệp" : "Chọn tệp"}
                    <input
                      type="file"
                      accept=".pdf,.doc,.docx,.xlsx,.xls,.txt"
                      className="hidden"
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (file) {
                          const ext = file.name.split(".").pop()?.toUpperCase() ?? "";
                          const loai: DocType = (["PDF","DOCX","XLSX","TXT"].includes(ext) ? ext : "Other") as DocType;
                          setDocForm((f) => ({ ...f, fileName: file.name, loai }));
                        }
                      }}
                    />
                  </label>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-100" />

            {/* Footer */}
            <div className="flex items-center justify-end gap-2 px-6 py-4">
              <button onClick={() => setShowDocModal(false)}
                className="px-5 py-2 rounded text-xs font-medium border border-gray-200 text-gray-600 bg-white hover:bg-gray-50 transition-colors">
                Hủy
              </button>
              <button
                onClick={() => {
                  if (!docForm.ten.trim() || !docForm.fileName) return;
                  const today = new Date();
                  const capNhat = `${String(today.getDate()).padStart(2,"0")}/${String(today.getMonth()+1).padStart(2,"0")}/${today.getFullYear()}`;
                  if (editingDoc) {
                    setDocs((prev) => prev.map((d) =>
                      d.id === editingDoc.id
                        ? { ...d, ten: docForm.ten.trim(), loai: docForm.loai, moTa: docForm.moTa, fileName: docForm.fileName, capNhat, nguoiCapNhat: "Nguyễn Văn A" }
                        : d
                    ));
                  } else {
                    setDocs((prev) => [
                      ...prev,
                      {
                        id: prev.length > 0 ? Math.max(...prev.map((d) => d.id)) + 1 : 1,
                        ten: docForm.ten.trim(),
                        loai: docForm.loai,
                        moTa: docForm.moTa,
                        capNhat,
                        nguoiCapNhat: "Nguyễn Văn A",
                        fileName: docForm.fileName,
                      },
                    ]);
                  }
                  setShowDocModal(false);
                }}
                className="px-5 py-2 rounded text-xs font-medium text-white hover:opacity-90 transition-opacity"
                style={{ background: "linear-gradient(90deg, #094D8A, #094D8A)" }}>
                {editingDoc ? "Lưu thay đổi" : "Thêm tài liệu"}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Create Version Modal */}
      {showNewVersionModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-[1px]"
          onClick={() => setShowNewVersionModal(false)}>
          <div className="bg-white rounded-lg shadow-2xl w-[580px] max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}>

            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4">
              <span className="text-sm font-semibold text-gray-900">Tạo phiên bản API mới</span>
              <button onClick={() => setShowNewVersionModal(false)}
                className="w-7 h-7 flex items-center justify-center rounded-full text-gray-400 hover:bg-gray-100 hover:text-gray-600 transition-colors">
                <X size={15} />
              </button>
            </div>

            <div className="border-t border-gray-100" />

            {/* API Info */}
            <div className="px-6 py-4 space-y-2">
              <div className="flex items-center gap-8">
                <span className="text-xs text-gray-400 w-24 shrink-0">API</span>
                <span className="text-xs font-semibold text-gray-800">{api.ten}</span>
              </div>
              <div className="flex items-center gap-8">
                <span className="text-xs text-gray-400 w-24 shrink-0">Endpoint</span>
                <span className="text-xs font-mono text-gray-700">
                  <span className="font-semibold" style={{ color: METHOD_COLOR[api.method].color }}>{api.method}</span>
                  {" "}{detail.endpointFull}
                </span>
              </div>
            </div>

            <div className="border-t border-gray-100" />

            {/* Form */}
            <div className="px-6 py-5 space-y-5">
              {/* Phiên bản */}
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-2">
                  Phiên bản <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={newVersionForm.phienBan}
                  onChange={(e) => setNewVersionForm((f) => ({ ...f, phienBan: e.target.value }))}
                  className="w-full px-3 py-2.5 text-sm text-gray-800 border border-gray-200 rounded outline-none focus:border-[#094D8A] focus:ring-1 focus:ring-[#D1E9FF] transition-all"
                />
                <p className="text-[11px] text-gray-400 mt-1.5">
                  Gợi ý: Hệ thống đề xuất {newVersionForm.phienBan}. Có thể chỉnh sửa nếu cần.
                </p>
              </div>

              {/* Mô tả */}
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-2">
                  Mô tả phiên bản <span className="text-red-500">*</span>
                </label>
                <textarea
                  rows={3}
                  value={newVersionForm.moTa}
                  onChange={(e) => setNewVersionForm((f) => ({ ...f, moTa: e.target.value }))}
                  className="w-full px-3 py-2.5 text-sm text-gray-800 border border-gray-200 rounded outline-none resize-none focus:border-[#094D8A] focus:ring-1 focus:ring-[#D1E9FF] transition-all placeholder-gray-400"
                  placeholder="Nhập mô tả cho phiên bản này..."
                />
              </div>

              {/* File upload */}
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-2">
                  Tài liệu OpenAPI / Swagger <span className="text-red-500">*</span>
                </label>
                <div className="flex items-center justify-between px-3 py-2.5 border border-gray-200 rounded bg-gray-50">
                  <div className="flex items-center gap-2 min-w-0">
                    {newVersionForm.fileName ? (
                      <>
                        <FileText size={14} className="text-[#094D8A] shrink-0" />
                        <span className="text-xs text-gray-700 truncate">{newVersionForm.fileName}</span>
                      </>
                    ) : (
                      <span className="text-xs text-gray-400">Chưa có tệp</span>
                    )}
                  </div>
                  <label className="ml-3 text-[11px] font-medium text-[#094D8A] hover:text-[#073A63] transition-colors whitespace-nowrap shrink-0 cursor-pointer">
                    Chọn tệp
                    <input
                      type="file"
                      accept=".yaml,.yml,.json"
                      className="hidden"
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (file) setNewVersionForm((f) => ({ ...f, fileName: file.name }));
                      }}
                    />
                  </label>
                </div>
              </div>

              {/* Status hint */}
              <div className="flex items-center gap-2 text-xs text-gray-600">
                <span>Trạng thái sau khi tạo:</span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-medium"
                  style={{ color: "#D97706", background: "#FEF3C7" }}>
                  <span className="w-1.5 h-1.5 rounded-full inline-block" style={{ background: "#D97706" }} />
                  Nháp
                </span>
              </div>
            </div>

            <div className="border-t border-gray-100" />

            {/* Footer */}
            <div className="flex items-center justify-end gap-2 px-6 py-4">
              <button
                onClick={() => setShowNewVersionModal(false)}
                className="px-5 py-2 rounded text-xs font-medium border border-gray-200 text-gray-600 bg-white hover:bg-gray-50 transition-colors">
                Hủy
              </button>
              <button
                onClick={handleCreateVersion}
                className="px-5 py-2 rounded text-xs font-medium text-white hover:opacity-90 transition-opacity"
                style={{ background: "linear-gradient(90deg, #094D8A, #094D8A)" }}>
                Tạo phiên bản
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Edit Version Modal */}
      {editingVersion && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-[1px]"
          onClick={() => setEditingVersion(null)}>
          <div className="bg-white rounded-lg shadow-2xl w-[580px] max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}>

            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4">
              <span className="text-sm font-semibold text-gray-900">Sửa phiên bản API</span>
              <button onClick={() => setEditingVersion(null)}
                className="w-7 h-7 flex items-center justify-center rounded-full text-gray-400 hover:bg-gray-100 hover:text-gray-600 transition-colors">
                <X size={15} />
              </button>
            </div>

            <div className="border-t border-gray-100" />

            {/* API Info */}
            <div className="px-6 py-4 space-y-2">
              <div className="flex items-center gap-8">
                <span className="text-xs text-gray-400 w-24 shrink-0">API</span>
                <span className="text-xs font-semibold text-gray-800">{api.ten}</span>
              </div>
              <div className="flex items-center gap-8">
                <span className="text-xs text-gray-400 w-24 shrink-0">Endpoint</span>
                <span className="text-xs font-mono text-gray-700">
                  <span className="font-semibold" style={{ color: METHOD_COLOR[api.method].color }}>{api.method}</span>
                  {" "}{detail.endpointFull}
                </span>
              </div>
            </div>

            <div className="border-t border-gray-100" />

            {/* Form */}
            <div className="px-6 py-5 space-y-5">
              {/* Phiên bản */}
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-2">
                  Phiên bản <span className="text-red-500">*</span>
                </label>
                <div className="relative flex items-center border border-gray-200 rounded overflow-hidden focus-within:border-[#094D8A] focus-within:ring-1 focus-within:ring-[#D1E9FF] transition-all">
                  <input
                    type="text"
                    value={editForm.phienBan}
                    onChange={(e) => setEditForm((f) => ({ ...f, phienBan: e.target.value }))}
                    className="flex-1 px-3 py-2.5 text-sm text-gray-800 outline-none bg-transparent"
                  />
                  <button
                    type="button"
                    onClick={() => setEditForm((f) => ({ ...f, phienBan: editingVersion.phienBan }))}
                    className="flex items-center gap-1 mr-2 px-2.5 py-1 rounded text-[11px] font-medium text-[#094D8A] bg-[#D1E9FF] hover:bg-[#D1E9FF] transition-colors whitespace-nowrap shrink-0">
                    ↺ Đề xuất: {editingVersion.phienBan}
                  </button>
                </div>
                <p className="text-[11px] text-gray-400 mt-1.5">
                  Gợi ý: Hệ thống tự đề xuất phiên bản tiếp theo. Có thể chỉnh sửa nếu cần.
                </p>
              </div>

              {/* Mô tả */}
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-2">
                  Mô tả phiên bản <span className="text-red-500">*</span>
                </label>
                <textarea
                  rows={3}
                  value={editForm.moTa}
                  onChange={(e) => setEditForm((f) => ({ ...f, moTa: e.target.value }))}
                  className="w-full px-3 py-2.5 text-sm text-gray-800 border border-gray-200 rounded outline-none resize-none focus:border-[#094D8A] focus:ring-1 focus:ring-[#D1E9FF] transition-all placeholder-gray-400"
                  placeholder="Nhập mô tả cho phiên bản này..."
                />
              </div>

              {/* File */}
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-2">
                  Tài liệu OpenAPI / Swagger
                </label>
                <div className="flex items-center justify-between px-3 py-2.5 border border-gray-200 rounded bg-gray-50">
                  <div className="flex items-center gap-2">
                    <FileText size={14} className="text-[#094D8A] shrink-0" />
                    <span className="text-xs text-gray-700">{editForm.fileName}</span>
                  </div>
                  <button
                    type="button"
                    className="text-[11px] font-medium text-[#094D8A] hover:text-[#073A63] transition-colors whitespace-nowrap shrink-0">
                    Thay file
                  </button>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-100" />

            {/* Footer actions */}
            <div className="flex items-center justify-end gap-2 px-6 py-4">
              <button
                onClick={() => setEditingVersion(null)}
                className="px-5 py-2 rounded text-xs font-medium border border-gray-200 text-gray-600 bg-white hover:bg-gray-50 transition-colors">
                Hủy
              </button>
              <button
                onClick={() => {
                  if (!editForm.phienBan.trim() || !editForm.moTa.trim()) return;
                  setVersions((prev) =>
                    prev.map((v) =>
                      v.id === editingVersion.id
                        ? { ...v, phienBan: editForm.phienBan.trim(), moTa: editForm.moTa.trim() }
                        : v
                    )
                  );
                  setEditingVersion(null);
                }}
                className="px-5 py-2 rounded text-xs font-medium text-white hover:opacity-90 transition-opacity"
                style={{ background: "linear-gradient(90deg, #094D8A, #094D8A)" }}>
                Lưu thay đổi
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// ─── API Monitoring ────────────────────────────────────────────────────────

const AM_HOURLY: { time: string; success: number; error: number }[] = [
  { time: "00:00", success: 175, error: 4 }, { time: "01:00", success: 140, error: 3 },
  { time: "02:00", success: 110, error: 2 }, { time: "03:00", success: 88,  error: 1 },
  { time: "04:00", success: 95,  error: 2 }, { time: "05:00", success: 130, error: 3 },
  { time: "06:00", success: 205, error: 7 }, { time: "07:00", success: 310, error: 10 },
  { time: "08:00", success: 468, error: 16 }, { time: "09:00", success: 512, error: 18 },
  { time: "10:00", success: 528, error: 19 }, { time: "11:00", success: 492, error: 15 },
  { time: "12:00", success: 375, error: 11 }, { time: "13:00", success: 418, error: 14 },
  { time: "14:00", success: 476, error: 17 }, { time: "15:00", success: 558, error: 20 },
  { time: "16:00", success: 618, error: 24 }, { time: "17:00", success: 586, error: 22 },
  { time: "18:00", success: 538, error: 20 }, { time: "19:00", success: 458, error: 16 },
  { time: "20:00", success: 375, error: 13 }, { time: "21:00", success: 295, error: 9 },
  { time: "22:00", success: 235, error: 7 },  { time: "23:00", success: 188, error: 5 },
];

const AM_TOP_REQUEST = [
  { endpoint: "GET /v1/students",    count: "1,250,000 req" },
  { endpoint: "POST /v2/attendance", count: "980,000 req"   },
  { endpoint: "GET /v1/profile",     count: "850,000 req"   },
  { endpoint: "GET /v1/scores",      count: "720,000 req"   },
  { endpoint: "POST /v1/payment",    count: "600,000 req"   },
];

const AM_TOP_ERROR = [
  { endpoint: "POST /v1/auth/login", errorCode: "401 Unauthorized",     rate: 5.20 },
  { endpoint: "GET /v2/history",     errorCode: "500 Server Error",      rate: 4.40 },
  { endpoint: "POST /v1/upload",     errorCode: "413 Payload Too Large", rate: 3.60 },
  { endpoint: "GET /v1/report",      errorCode: "504 Gateway Timeout",   rate: 2.80 },
  { endpoint: "POST /v2/checkout",   errorCode: "402 Payment Required",  rate: 2.00 },
];

const AM_TOP_MINI_APPS: { Icon: React.ElementType; name: string; count: string }[] = [
  { Icon: BookOpen,   name: "Sổ liên lạc",    count: "4.2M" },
  { Icon: UserCheck,  name: "Điểm danh",       count: "2.8M" },
  { Icon: CreditCard, name: "Học phí",         count: "1.9M" },
  { Icon: Calendar,   name: "Thời khóa biểu", count: "1.5M" },
  { Icon: Bell,       name: "Thông báo",       count: "1.2M" },
];

type LogStatus = 200 | 201 | 400 | 401 | 403 | 404 | 413 | 429 | 500 | 502 | 504;

const AM_LOG_STATUS_CONFIG: Record<LogStatus, { color: string; bg: string }> = {
  200: { color: "#16A34A", bg: "#DCFCE7" },
  201: { color: "#16A34A", bg: "#DCFCE7" },
  400: { color: "#D97706", bg: "#FEF3C7" },
  401: { color: "#DC2626", bg: "#FEE2E2" },
  403: { color: "#DC2626", bg: "#FEE2E2" },
  404: { color: "#D97706", bg: "#FEF3C7" },
  413: { color: "#DC2626", bg: "#FEE2E2" },
  429: { color: "#D97706", bg: "#FEF3C7" },
  500: { color: "#DC2626", bg: "#FEE2E2" },
  502: { color: "#DC2626", bg: "#FEE2E2" },
  504: { color: "#DC2626", bg: "#FEE2E2" },
};

interface AmLogRow {
  id: number;
  thoiGian: string;
  miniApp: string;
  doanhNghiep: string;
  method: ApiMethod;
  endpoint: string;
  trangThai: LogStatus;
  responseTime: number;
}

const AM_LOGS: AmLogRow[] = [
  { id: 1,  thoiGian: "26/06/2026 16:42:03", miniApp: "Sổ liên lạc",    doanhNghiep: "FPT Software", method: "GET",    endpoint: "/v1/students",       trangThai: 200, responseTime: 112  },
  { id: 2,  thoiGian: "26/06/2026 16:41:58", miniApp: "Điểm danh",      doanhNghiep: "VNPT",         method: "POST",   endpoint: "/v2/attendance",     trangThai: 201, responseTime: 87   },
  { id: 3,  thoiGian: "26/06/2026 16:41:45", miniApp: "Sổ liên lạc",    doanhNghiep: "FPT Software", method: "GET",    endpoint: "/v1/profile",        trangThai: 200, responseTime: 64   },
  { id: 4,  thoiGian: "26/06/2026 16:41:30", miniApp: "Quản lý học phí", doanhNghiep: "MISA",        method: "POST",   endpoint: "/v1/payment",        trangThai: 401, responseTime: 43   },
  { id: 5,  thoiGian: "26/06/2026 16:41:12", miniApp: "Điểm danh",      doanhNghiep: "VNPT",         method: "GET",    endpoint: "/v1/scores",         trangThai: 200, responseTime: 95   },
  { id: 6,  thoiGian: "26/06/2026 16:40:58", miniApp: "Thời khóa biểu", doanhNghiep: "FPT Software", method: "GET",    endpoint: "/v2/schedule",       trangThai: 200, responseTime: 78   },
  { id: 7,  thoiGian: "26/06/2026 16:40:44", miniApp: "Thông báo",      doanhNghiep: "MISA",         method: "POST",   endpoint: "/v1/auth/login",     trangThai: 500, responseTime: 302  },
  { id: 8,  thoiGian: "26/06/2026 16:40:31", miniApp: "Sổ liên lạc",    doanhNghiep: "FPT Software", method: "PUT",    endpoint: "/v1/students/1042",  trangThai: 200, responseTime: 134  },
  { id: 9,  thoiGian: "26/06/2026 16:40:18", miniApp: "Quản lý học phí", doanhNghiep: "MISA",        method: "GET",    endpoint: "/v2/history",        trangThai: 504, responseTime: 5002 },
  { id: 10, thoiGian: "26/06/2026 16:40:05", miniApp: "Điểm danh",      doanhNghiep: "VNPT",         method: "DELETE", endpoint: "/v1/attendance/88",  trangThai: 403, responseTime: 56   },
  { id: 11, thoiGian: "26/06/2026 16:39:52", miniApp: "Thông báo",      doanhNghiep: "FPT Software", method: "POST",   endpoint: "/v1/upload",         trangThai: 413, responseTime: 221  },
  { id: 12, thoiGian: "26/06/2026 16:39:40", miniApp: "Thời khóa biểu", doanhNghiep: "MISA",        method: "GET",    endpoint: "/v1/report",         trangThai: 200, responseTime: 148  },
];

function APIMonitoringScreen({ onNavigate }: { onNavigate: (s: Screen) => void }) {
  const [logSearch, setLogSearch] = useState("");

  return (
    <div className="flex h-screen overflow-hidden" style={{ fontFamily: "'Be Vietnam Pro', sans-serif", background: "#F8F9FB" }}>
      <Sidebar current="apiMonitoring" onNavigate={onNavigate} />

      {/* Main */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <div className="bg-white border-b border-gray-100 px-6 py-4 flex items-center justify-between shrink-0">
          <div>
            <h1 className="text-sm font-semibold text-gray-900 tracking-widest uppercase">API Monitoring</h1>
            <p className="text-[10px] text-gray-400 mt-0.5 tracking-wider uppercase">
              Theo dõi tình trạng sử dụng API của nền tảng
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button className="relative p-1.5 text-gray-400 hover:text-gray-600 transition-colors">
              <Bell size={16} />
              <span className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 rounded-full bg-red-500" />
            </button>
            <button className="flex items-center gap-1.5 px-4 py-2 rounded text-white text-xs font-semibold hover:opacity-90 transition-opacity"
              style={{ background: "linear-gradient(90deg, #094D8A, #094D8A)" }}>
              <Download size={12} />
              Xuất báo cáo
            </button>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-5 space-y-5">
          {/* Filters */}
          <div className="flex items-center gap-2 flex-wrap">
            {[
              { label: "Khoảng thời gian", withIcon: true },
              { label: "API",              withIcon: false },
              { label: "Phiên bản",        withIcon: false },
              { label: "Doanh nghiệp",     withIcon: false },
              { label: "Mini App",         withIcon: false },
            ].map(({ label, withIcon }) => (
              <button key={label}
                className="flex items-center gap-1.5 px-3 py-1.5 bg-white border border-gray-200 rounded text-xs text-gray-600 hover:border-[#094D8A] transition-colors">
                {withIcon && <Clock size={11} className="text-gray-400" />}
                {label}
                <ChevronDown size={11} className="text-gray-400" />
              </button>
            ))}
            <button className="ml-auto text-xs text-[#094D8A] hover:text-[#073A63] font-medium transition-colors">
              Xóa bộ lọc
            </button>
          </div>

          {/* TỔNG QUAN */}
          <section>
            <h2 className="text-[10px] font-semibold text-gray-600 uppercase tracking-widest mb-3">Tổng quan</h2>
            {/* 4 KPI */}
            <div className="grid grid-cols-4 gap-3 mb-3">
              {[
                { label: "Tổng Request", value: "12.5 triệu", change: "+12%",   Icon: Activity,    iconColor: "#094D8A", iconBg: "#EBEBFB" },
                { label: "Success Rate",  value: "99.82%",    change: "+0.05%", Icon: Monitor,     iconColor: "#16A34A", iconBg: "#DCFCE7" },
                { label: "Avg Response",  value: "148 ms",    change: "-12 ms", Icon: Clock,       iconColor: "#D97706", iconBg: "#FEF3C7" },
                { label: "Error Rate",    value: "0.18%",     change: "-0.02%", Icon: AlertCircle, iconColor: "#DC2626", iconBg: "#FEE2E2" },
              ].map(({ label, value, change, Icon: KIcon, iconColor, iconBg }) => (
                <div key={label} className="bg-white rounded-md border border-gray-100 shadow-sm px-4 py-4">
                  <div className="flex items-start justify-between mb-3">
                    <div className="w-8 h-8 rounded flex items-center justify-center shrink-0"
                      style={{ background: iconBg }}>
                      <KIcon size={14} style={{ color: iconColor }} />
                    </div>
                    <span className="text-[10px] font-semibold px-1.5 py-0.5 rounded text-green-600 bg-green-50">
                      {change}
                    </span>
                  </div>
                  <div className="text-[10px] text-gray-400 mb-0.5">{label}</div>
                  <div className="text-lg font-semibold text-gray-900">{value}</div>
                </div>
              ))}
            </div>
            {/* 3 secondary */}
            <div className="grid grid-cols-3 gap-3">
              {[
                { label: "API đang sử dụng",     value: "18/24", Icon: Activity,  iconColor: "#094D8A", iconBg: "#EBEBFB" },
                { label: "Doanh nghiệp gọi API", value: "35",    Icon: FileText,  iconColor: "#7C3AED", iconBg: "#EDE9FE" },
                { label: "Mini App gọi API",      value: "82",    Icon: Monitor,   iconColor: "#094D8A", iconBg: "#EBEBFB" },
              ].map(({ label, value, Icon: SIcon, iconColor, iconBg }) => (
                <div key={label} className="bg-white rounded-md border border-gray-100 shadow-sm px-5 py-4 flex items-center gap-4">
                  <div className="w-9 h-9 rounded-md flex items-center justify-center shrink-0"
                    style={{ background: iconBg }}>
                    <SIcon size={16} style={{ color: iconColor }} />
                  </div>
                  <div>
                    <div className="text-[10px] text-gray-400">{label}</div>
                    <div className="text-xl font-semibold text-gray-900">{value}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Chart */}
          <div className="bg-white rounded-md border border-gray-100 shadow-sm px-5 py-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xs font-semibold text-gray-700 uppercase tracking-wider">Lưu lượng Request</h3>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-3 text-[10px] text-gray-500">
                  <span className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full inline-block" style={{ background: "#D1E9FF" }} />
                    Thành công
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full inline-block bg-red-300" />
                    Lỗi
                  </span>
                </div>
                <button className="flex items-center gap-1 text-[10px] text-gray-500 border border-gray-200 rounded px-2 py-1 hover:bg-gray-50 transition-colors">
                  Theo giờ <ChevronDown size={10} />
                </button>
              </div>
            </div>
            <ResponsiveContainer width="100%" height={180}>
              <BarChart data={AM_HOURLY} barSize={7} barGap={1}
                margin={{ top: 4, right: 4, left: -20, bottom: 0 }}>
                <XAxis dataKey="time" tick={{ fontSize: 9, fill: "#9CA3AF" }}
                  tickLine={false} axisLine={false} interval={3} />
                <YAxis tick={{ fontSize: 9, fill: "#9CA3AF" }} tickLine={false} axisLine={false} />
                <Tooltip
                  contentStyle={{ fontSize: 11, borderRadius: 8, border: "1px solid #E5E7EB", boxShadow: "0 4px 12px rgba(0,0,0,0.08)" }}
                  cursor={{ fill: "rgba(0,0,0,0.03)" }}
                />
                <Bar dataKey="success" name="Thành công" fill="#D1E9FF" radius={[2, 2, 0, 0]} />
                <Bar dataKey="error"   name="Lỗi"        fill="#FCA5A5" radius={[2, 2, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Top APIs */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white rounded-md border border-gray-100 shadow-sm px-5 py-4">
              <h3 className="text-xs font-semibold text-gray-700 mb-4">API có nhiều Request nhất</h3>
              <div className="space-y-3.5">
                {AM_TOP_REQUEST.map((row) => (
                  <div key={row.endpoint} className="flex items-center justify-between">
                    <span className="text-xs text-gray-600 font-mono">{row.endpoint}</span>
                    <span className="text-xs font-semibold text-gray-800 ml-4 shrink-0">{row.count}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-md border border-gray-100 shadow-sm px-5 py-4">
              <h3 className="text-xs font-semibold text-gray-700 mb-4">API có tỷ lệ lỗi cao nhất</h3>
              <div className="space-y-3">
                {AM_TOP_ERROR.map((row) => (
                  <div key={row.endpoint} className="flex items-center justify-between">
                    <div>
                      <div className="text-xs text-gray-700 font-mono">{row.endpoint}</div>
                      <div className="text-[10px] text-red-400 mt-0.5">{row.errorCode}</div>
                    </div>
                    <span className="text-xs font-semibold text-red-500 ml-4 shrink-0">{row.rate.toFixed(2)}%</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Top Mini Apps */}
          <div className="bg-white rounded-md border border-gray-100 shadow-sm px-5 py-4">
            <h3 className="text-xs font-semibold text-gray-700 mb-4">Top Mini App sử dụng API nhiều nhất</h3>
            <div className="grid grid-cols-5 gap-3">
              {AM_TOP_MINI_APPS.map(({ Icon: AppIcon, name, count }) => (
                <div key={name} className="flex flex-col items-center gap-2 p-3 rounded-md border border-gray-100 hover:border-[#D1E9FF] transition-colors">
                  <div className="w-10 h-10 rounded-md flex items-center justify-center" style={{ background: "#EBEBFB" }}>
                    <AppIcon size={18} style={{ color: "#094D8A" }} />
                  </div>
                  <div className="text-[10px] text-gray-600 font-medium text-center leading-tight">{name}</div>
                  <div className="text-sm font-semibold text-[#094D8A]">{count}</div>
                  <button className="text-[10px] text-[#094D8A] hover:text-[#073A63] font-medium transition-colors">
                    Xem Mini app
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Request Log */}
          {(() => {
            const filteredLogs = AM_LOGS.filter((r) =>
              logSearch === "" ||
              r.endpoint.toLowerCase().includes(logSearch.toLowerCase()) ||
              r.miniApp.toLowerCase().includes(logSearch.toLowerCase()) ||
              r.doanhNghiep.toLowerCase().includes(logSearch.toLowerCase()) ||
              String(r.trangThai).includes(logSearch)
            );
            return (
              <div className="bg-white rounded-md border border-gray-100 shadow-sm px-5 py-4">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-xs font-semibold text-gray-700">Request Log</h3>
                    <p className="text-[10px] text-gray-400 mt-0.5">{filteredLogs.length} bản ghi gần nhất</p>
                  </div>
                  <div className="relative">
                    <Search size={12} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input type="text" placeholder="Tìm kiếm request..."
                      value={logSearch} onChange={(e) => setLogSearch(e.target.value)}
                      className="pl-8 pr-3 py-1.5 text-xs border border-gray-200 rounded bg-gray-50 placeholder-gray-400 focus:outline-none focus:border-[#094D8A] focus:bg-white transition-colors w-52" />
                  </div>
                </div>
                <div className="border border-gray-100 rounded-md overflow-hidden">
                  <table className="w-full text-xs">
                    <thead>
                      <tr className="bg-gray-50 border-b border-gray-100">
                        <th className="text-left px-4 py-3 text-gray-500 font-semibold w-40">THỜI GIAN</th>
                        <th className="text-left px-4 py-3 text-gray-500 font-semibold">MINI APP</th>
                        <th className="text-left px-4 py-3 text-gray-500 font-semibold w-16">METHOD</th>
                        <th className="text-left px-4 py-3 text-gray-500 font-semibold">ENDPOINT</th>
                        <th className="text-center px-4 py-3 text-gray-500 font-semibold w-24">TRẠNG THÁI</th>
                        <th className="text-right px-4 py-3 text-gray-500 font-semibold w-28">PHẢN HỒI</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-50">
                      {filteredLogs.map((row) => {
                        const mt = METHOD_COLOR[row.method];
                        const st = AM_LOG_STATUS_CONFIG[row.trangThai];
                        const isError = row.trangThai >= 400;
                        const isSlow = row.responseTime > 1000;
                        return (
                          <tr key={row.id} className="hover:bg-gray-50/60 transition-colors">
                            <td className="px-4 py-3 text-gray-400 font-mono text-[10px]">{row.thoiGian}</td>
                            <td className="px-4 py-3">
                              <div className="font-medium text-gray-800">{row.miniApp}</div>
                              <div className="text-[10px] text-gray-400">{row.doanhNghiep}</div>
                            </td>
                            <td className="px-4 py-3">
                              <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-semibold"
                                style={{ color: mt.color, background: mt.bg }}>
                                {row.method}
                              </span>
                            </td>
                            <td className="px-4 py-3 font-mono text-gray-600">{row.endpoint}</td>
                            <td className="px-4 py-3 text-center">
                              <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold"
                                style={{ color: st.color, background: st.bg }}>
                                {row.trangThai}
                              </span>
                            </td>
                            <td className={`px-4 py-3 text-right font-mono font-semibold ${isSlow ? "text-red-500" : isError ? "text-amber-500" : "text-gray-600"}`}>
                              {row.responseTime >= 1000
                                ? `${(row.responseTime / 1000).toFixed(1)}s`
                                : `${row.responseTime}ms`}
                            </td>
                          </tr>
                        );
                      })}
                      {filteredLogs.length === 0 && (
                        <tr>
                          <td colSpan={6} className="px-4 py-10 text-center text-gray-400 text-xs">
                            Không tìm thấy request nào
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            );
          })()}
        </div>
      </div>
    </div>
  );
}

// ─── Mau Mini App ──────────────────────────────────────────────────────────

type TemplateStatus = "published" | "draft";

interface TemplateRow {
  id: number;
  ten: string;
  loai: string;
  phienBan: string;
  miniApp: number;
  developer: number;
  capNhatCuoi: string;
  trangThai: TemplateStatus;
  moTa?: string;
  templateScreens?: { name: string; loai: string }[];
}

const TEMPLATE_LOAI_CONFIG: Record<string, { color: string; bg: string }> = {
  "Giáo dục":     { color: "#2563EB", bg: "#DBEAFE" },
  "Tài chính":    { color: "#16A34A", bg: "#DCFCE7" },
  "Khảo sát":     { color: "#D97706", bg: "#FEF3C7" },
  "Truyền thông": { color: "#7C3AED", bg: "#EDE9FE" },
  "Y tế":         { color: "#DC2626", bg: "#FEE2E2" },
  "Thương mại":   { color: "#0891B2", bg: "#CFFAFE" },
};

const TEMPLATE_STATUS_CONFIG: Record<TemplateStatus, { label: string; color: string; bg: string }> = {
  published: { label: "Đang phát hành", color: "#16A34A", bg: "#DCFCE7" },
  draft:     { label: "Nháp",           color: "#D97706", bg: "#FEF3C7" },
};

const TEMPLATE_STATUS_TABS: { status: TemplateStatus | "all"; label: string }[] = [
  { status: "all",       label: "Tất cả" },
  { status: "draft",     label: "Nháp" },
  { status: "published", label: "Đang phát hành" },
];

const TEMPLATE_DATA: TemplateRow[] = [
  { id:  1, ten: "Sổ liên lạc điện tử",     loai: "Giáo dục",     phienBan: "v2.1", miniApp: 125, developer: 32, capNhatCuoi: "10 phút trước",  trangThai: "published" },
  { id:  2, ten: "Điểm danh thông minh",     loai: "Giáo dục",     phienBan: "v1.8", miniApp:  87, developer: 24, capNhatCuoi: "1 giờ trước",    trangThai: "published" },
  { id:  3, ten: "Học phí Online",            loai: "Tài chính",    phienBan: "v3.0", miniApp:  54, developer: 18, capNhatCuoi: "Hôm qua",         trangThai: "published" },
  { id:  4, ten: "Khảo sát học sinh",        loai: "Khảo sát",     phienBan: "v1.2", miniApp:  16, developer:  7, capNhatCuoi: "2 ngày trước",   trangThai: "published" },
  { id:  5, ten: "Thông báo nhà trường",     loai: "Truyền thông", phienBan: "v2.0", miniApp:  44, developer: 11, capNhatCuoi: "5 ngày trước",   trangThai: "published" },
  { id:  6, ten: "Quản lý thời khóa biểu",  loai: "Giáo dục",     phienBan: "v1.5", miniApp:  38, developer: 10, capNhatCuoi: "3 ngày trước",   trangThai: "published" },
  { id:  7, ten: "Đặt lịch hẹn phụ huynh", loai: "Giáo dục",     phienBan: "v1.1", miniApp:  22, developer:  8, capNhatCuoi: "1 tuần trước",   trangThai: "published" },
  { id:  8, ten: "Quản lý cơ sở y tế",      loai: "Y tế",         phienBan: "v2.3", miniApp:  31, developer: 14, capNhatCuoi: "4 ngày trước",   trangThai: "published" },
  { id:  9, ten: "Đặt khám bệnh",            loai: "Y tế",         phienBan: "v1.6", miniApp:  19, developer:  9, capNhatCuoi: "2 tuần trước",   trangThai: "published" },
  { id: 10, ten: "Cổng thông tin bệnh viện", loai: "Y tế",         phienBan: "v1.0", miniApp:  12, developer:  5, capNhatCuoi: "3 tuần trước",   trangThai: "published" },
  { id: 11, ten: "Quản lý kho hàng",         loai: "Thương mại",   phienBan: "v2.2", miniApp:  29, developer: 12, capNhatCuoi: "6 ngày trước",   trangThai: "published" },
  { id: 12, ten: "Đặt hàng trực tuyến",      loai: "Thương mại",   phienBan: "v1.4", miniApp:  18, developer:  6, capNhatCuoi: "2 tuần trước",   trangThai: "published" },
  { id: 13, ten: "Báo cáo tài chính",        loai: "Tài chính",    phienBan: "v2.0", miniApp:  14, developer:  4, capNhatCuoi: "1 tháng trước",  trangThai: "published" },
  { id: 14, ten: "Quản lý ngân sách",        loai: "Tài chính",    phienBan: "v1.1", miniApp:   8, developer:  3, capNhatCuoi: "3 tuần trước",   trangThai: "published" },
  { id: 15, ten: "Khảo sát nhân viên",       loai: "Khảo sát",     phienBan: "v1.3", miniApp:  11, developer:  5, capNhatCuoi: "2 tuần trước",   trangThai: "published" },
  { id: 16, ten: "Khảo sát khách hàng",      loai: "Khảo sát",     phienBan: "v1.0", miniApp:   7, developer:  3, capNhatCuoi: "1 tháng trước",  trangThai: "published" },
  { id: 17, ten: "Bản tin nội bộ",           loai: "Truyền thông", phienBan: "v1.2", miniApp:  13, developer:  4, capNhatCuoi: "2 tuần trước",   trangThai: "published" },
  { id: 18, ten: "Livestream sự kiện",        loai: "Truyền thông", phienBan: "v1.0", miniApp:   5, developer:  2, capNhatCuoi: "1 tháng trước",  trangThai: "published" },
  { id: 19, ten: "Cổng thông tin nội bộ",    loai: "Truyền thông", phienBan: "v0.9", miniApp:   0, developer:  0, capNhatCuoi: "2 ngày trước",   trangThai: "draft" },
  { id: 20, ten: "Quản lý dự án Agile",      loai: "Thương mại",   phienBan: "v0.5", miniApp:   0, developer:  0, capNhatCuoi: "4 ngày trước",   trangThai: "draft" },
  { id: 21, ten: "Ví điện tử nội bộ",        loai: "Tài chính",    phienBan: "v0.3", miniApp:   0, developer:  0, capNhatCuoi: "1 tuần trước",   trangThai: "draft" },
  { id: 22, ten: "Trợ lý AI học tập",         loai: "Giáo dục",     phienBan: "v0.1", miniApp:   0, developer:  0, capNhatCuoi: "3 ngày trước",   trangThai: "draft" },
  { id: 23, ten: "Quản lý thư viện",          loai: "Giáo dục",     phienBan: "v1.0", miniApp:   4, developer:  2, capNhatCuoi: "6 tháng trước",  trangThai: "draft" },
  { id: 24, ten: "Đặt xe nội bộ",             loai: "Thương mại",   phienBan: "v1.2", miniApp:   3, developer:  1, capNhatCuoi: "8 tháng trước",  trangThai: "draft" },
];

function TrinhTaoMauScreen({ onNavigate, onSave }: { onNavigate: (s: Screen) => void; onSave: (t: TemplateRow) => void }) {
  const [step, setStep] = useState(1);
  const [tenTemplate, setTenTemplate] = useState("Sổ liên lạc điện tử");
  const [danhMuc, setDanhMuc] = useState("Giáo dục");
  const [moTa, setMoTa] = useState("Template chuẩn dành cho Mini App Sổ liên lạc điện tử trong hệ sinh thái giáo dục.");
  const [activeScreenIdx, setActiveScreenIdx] = useState(-1);
  const [screens, setScreens] = useState<{ name: string; loai: string }[]>([]);
  const [checkedComponents, setCheckedComponents] = useState<Set<string>>(new Set());
  const [showAddForm, setShowAddForm] = useState(false);
  const [newScreenName, setNewScreenName] = useState("");
  const [newScreenLoai, setNewScreenLoai] = useState("Dashboard");

  const DANH_MUC_LIST = ["Giáo dục", "Y tế", "Tài chính", "Thương mại", "Khảo sát", "Truyền thông"];

  const COMPONENTS_BY_TYPE: Record<string, string[]> = {
    Dashboard: ["Header", "Banner", "Menu nhanh", "Danh sách", "Footer"],
    List:      ["Header", "Thanh tìm kiếm", "Bộ lọc", "Danh sách", "Nút thêm"],
    Detail:    ["Header", "Avatar", "Thông tin", "Nút hành động"],
    Form:      ["Header", "Form", "Nút gửi"],
  };

  const WIZARD_STEPS = [
    { num: 1, label: "Thông tin" },
    { num: 2, label: "Thiết kế Template" },
  ];

  const activeScreen = screens[activeScreenIdx] ?? null;
  const ALL_COMPONENTS = activeScreen ? (COMPONENTS_BY_TYPE[activeScreen.loai] ?? []) : [];

  const addScreen = () => {
    if (!newScreenName.trim()) return;
    const newIdx = screens.length;
    setScreens((s) => [...s, { name: newScreenName.trim(), loai: newScreenLoai }]);
    setActiveScreenIdx(newIdx);
    setCheckedComponents(new Set(COMPONENTS_BY_TYPE[newScreenLoai] ?? []));
    setNewScreenName("");
    setNewScreenLoai("Dashboard");
    setShowAddForm(false);
  };

  const toggleComponent = (c: string) =>
    setCheckedComponents((p) => { const n = new Set(p); n.has(c) ? n.delete(c) : n.add(c); return n; });

  const buildTemplate = (trangThai: TemplateStatus): TemplateRow => ({
    id: Date.now(),
    ten: tenTemplate.trim() || "Template mới",
    loai: danhMuc,
    phienBan: "v1.0",
    miniApp: 0,
    developer: 0,
    capNhatCuoi: "Vừa tạo",
    trangThai,
    moTa,
    templateScreens: screens,
  });

  const saveDraft   = () => { onSave(buildTemplate("draft"));     onNavigate("mauMiniApp"); };
  const savePublish = () => { onSave(buildTemplate("published")); onNavigate("mauMiniApp"); };

  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden" style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}>
      <Sidebar current="mauMiniApp" onNavigate={onNavigate} />
      <div className="flex-1 flex flex-col overflow-hidden bg-white">

      {/* ── Header ── */}
      <div className="flex items-center justify-between px-6 py-3 border-b border-gray-200 shrink-0">
        <div className="flex items-center gap-2">
          <button
            onClick={() => onNavigate("mauMiniApp")}
            className="flex items-center gap-1 text-sm text-gray-500 hover:text-gray-700 transition-colors"
          >
            <ChevronLeft size={15} />
            Mẫu Mini App
          </button>
          <span className="text-gray-300 select-none">/</span>
          <span className="text-sm font-semibold text-gray-800">Trình tạo mẫu</span>
        </div>
        <div className="flex items-center gap-2">
          <button onClick={saveDraft} className="px-3 py-1.5 text-xs font-medium text-gray-600 hover:bg-gray-100 rounded transition-colors border border-gray-200">Lưu nháp</button>
        </div>
      </div>

      {/* ── Step indicator (horizontal) ── */}
      <div className="px-8 py-3 border-b border-gray-200 bg-white shrink-0 flex items-center gap-3">
        {WIZARD_STEPS.map((s, i) => {
          const done = s.num < step;
          const active = s.num === step;
          return (
            <div key={s.num} className="flex items-center gap-3">
              {i > 0 && <div className="w-10 h-px bg-gray-300" />}
              <div className="flex items-center gap-2">
                {done ? (
                  <div className="w-5 h-5 rounded-full flex items-center justify-center text-white text-[10px] font-semibold shrink-0"
                    style={{ background: "linear-gradient(135deg,#094D8A,#094D8A)" }}>✓</div>
                ) : active ? (
                  <div className="w-3 h-3 rounded-full shrink-0" style={{ background: "#094D8A" }} />
                ) : (
                  <div className="w-3 h-3 rounded-full border-2 border-gray-300 shrink-0" />
                )}
                <span className={`text-sm font-medium ${active ? "text-gray-900" : done ? "text-gray-500" : "text-gray-400"}`}>
                  {s.num}. {s.label}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* ── Step 1: Thông tin Template ── */}
      {step === 1 && (
        <>
          <div className="flex-1 overflow-y-auto px-8 py-6">
            <div className="max-w-xl mx-auto space-y-5">
              <h3 className="text-[11px] font-semibold text-gray-500 uppercase tracking-widest">Thông tin chung</h3>
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                  Tên Template <span className="text-red-500">*</span>
                </label>
                <input type="text" value={tenTemplate} onChange={(e) => setTenTemplate(e.target.value)}
                  placeholder="Nhập tên template..."
                  className="w-full px-3 py-2.5 text-sm border border-gray-200 rounded bg-white focus:outline-none focus:border-[#094D8A] transition-colors" />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                  Danh mục <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <select value={danhMuc} onChange={(e) => setDanhMuc(e.target.value)}
                    className="w-full appearance-none px-3 py-2.5 text-sm border border-gray-200 rounded bg-white text-gray-700 focus:outline-none focus:border-[#094D8A] transition-colors cursor-pointer pr-8">
                    {DANH_MUC_LIST.map((d) => <option key={d}>{d}</option>)}
                  </select>
                  <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1.5">Mô tả</label>
                <textarea value={moTa} onChange={(e) => setMoTa(e.target.value)}
                  placeholder="Mô tả về template này..." rows={4}
                  className="w-full px-3 py-2.5 text-sm border border-gray-200 rounded bg-white focus:outline-none focus:border-[#094D8A] transition-colors resize-none" />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1.5">Ảnh đại diện</label>
                <div className="border-2 border-dashed border-gray-200 rounded h-28 w-72 flex flex-col items-center justify-center gap-2 cursor-pointer hover:border-[#094D8A] hover:bg-[#D1E9FF]/20 transition-colors">
                  <Upload size={18} className="text-gray-300" />
                  <span className="text-xs text-gray-400">Upload ảnh Template</span>
                </div>
              </div>
            </div>
          </div>
          <div className="px-8 py-4 border-t border-gray-200 bg-white shrink-0 flex items-center justify-center gap-3">
            <button onClick={saveDraft} className="px-6 py-2 text-xs font-medium border border-gray-200 rounded text-gray-600 hover:bg-gray-50 transition-colors">
              Lưu nháp
            </button>
            <button onClick={() => setStep(2)}
              className="px-10 py-2 text-xs font-medium text-white rounded hover:opacity-90 transition-opacity"
              style={{ background: "linear-gradient(90deg,#094D8A,#094D8A)" }}>
              Tiếp theo
            </button>
          </div>
        </>
      )}

      {/* ── Step 2: Thiết kế Template (3-column) ── */}
      {step === 2 && (
        <>
          <div className="flex-1 flex overflow-hidden">

            {/* Left: screen list */}
            <div className="w-56 shrink-0 border-r border-gray-200 flex flex-col bg-white">
              <div className="px-4 py-2.5 border-b border-gray-100 bg-gray-50/60">
                <span className="text-[11px] font-semibold text-gray-500 uppercase tracking-widest">Màn hình</span>
              </div>
              <div className="flex-1 overflow-y-auto flex flex-col">

                {/* Inline add form */}
                {showAddForm ? (
                  <div className="p-3 border-b border-gray-100 space-y-3">
                    <div>
                      <label className="block text-[11px] font-semibold text-gray-600 mb-1">
                        Tên màn hình <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        value={newScreenName}
                        onChange={(e) => setNewScreenName(e.target.value)}
                        onKeyDown={(e) => e.key === "Enter" && addScreen()}
                        placeholder="Nhập tên màn hình..."
                        autoFocus
                        className="w-full px-2.5 py-2 text-xs border border-gray-200 rounded bg-white focus:outline-none focus:border-[#094D8A] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-semibold text-gray-600 mb-1">
                        Loại màn hình <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <select
                          value={newScreenLoai}
                          onChange={(e) => setNewScreenLoai(e.target.value)}
                          className="w-full appearance-none px-2.5 py-2 text-xs border border-gray-200 rounded bg-white text-gray-700 focus:outline-none focus:border-[#094D8A] cursor-pointer pr-6">
                          {Object.keys(COMPONENTS_BY_TYPE).map((t) => <option key={t}>{t}</option>)}
                        </select>
                        <ChevronDown size={11} className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                      </div>
                    </div>
                    <div className="border-t border-gray-100 pt-2 space-y-1.5">
                      <button
                        onClick={addScreen}
                        disabled={!newScreenName.trim()}
                        className="w-full py-2 text-xs font-medium text-white rounded hover:opacity-90 transition-opacity disabled:opacity-40"
                        style={{ background: "linear-gradient(90deg,#094D8A,#094D8A)" }}>
                        Thêm màn hình
                      </button>
                      <button
                        onClick={() => { setShowAddForm(false); setNewScreenName(""); setNewScreenLoai("Dashboard"); }}
                        className="w-full py-2 text-xs font-medium text-gray-500 border border-gray-200 rounded hover:bg-gray-50 transition-colors">
                        Hủy
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="p-2">
                    <button
                      onClick={() => setShowAddForm(true)}
                      className="w-full flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-[#094D8A] rounded hover:bg-[#D1E9FF] transition-colors mb-2 border border-dashed border-[#D1E9FF]">
                      <Plus size={12} /> Thêm màn hình
                    </button>
                  </div>
                )}

                {/* Screen list */}
                <div className="px-2 pb-2 flex-1">
                  {screens.length === 0 && !showAddForm && (
                    <div className="py-6 text-center text-gray-400">
                      <div className="text-xs">Chưa có màn hình</div>
                    </div>
                  )}
                  {screens.map((sc, i) => (
                    <button key={i} onClick={() => {
                      setActiveScreenIdx(i);
                      setCheckedComponents(new Set(COMPONENTS_BY_TYPE[sc.loai] ?? []));
                    }}
                      className={`w-full flex items-center gap-2.5 px-3 py-2.5 text-xs rounded transition-colors text-left mb-0.5 ${
                        activeScreenIdx === i ? "bg-[#D1E9FF] text-[#094D8A] font-medium" : "text-gray-600 hover:bg-gray-50"
                      }`}>
                      <div className={`w-2 h-2 rounded-full shrink-0 ${activeScreenIdx === i ? "bg-[#094D8A]" : "border-2 border-gray-300"}`} />
                      {sc.name}
                    </button>
                  ))}
                </div>

              </div>
            </div>

            {/* Middle: desktop browser preview */}
            <div className="flex-1 flex flex-col bg-gray-100 border-r border-gray-200 overflow-hidden">
              <div className="px-4 py-2.5 border-b border-gray-200 bg-white shrink-0">
                <span className="text-[11px] font-semibold text-gray-500 uppercase tracking-widest">Preview giao diện</span>
              </div>
              <div className="flex-1 flex items-center justify-center p-6 overflow-y-auto">
                {/* Empty state */}
                {!activeScreen && (
                  <div className="text-center text-gray-400">
                    <div className="w-16 h-16 rounded-lg bg-gray-200 flex items-center justify-center mx-auto mb-3">
                      <Plus size={24} className="text-gray-400" />
                    </div>
                    <div className="text-sm font-medium text-gray-500">Chưa có màn hình nào</div>
                    <div className="text-xs text-gray-400 mt-1">Thêm màn hình để xem preview</div>
                  </div>
                )}

                {/* Browser window */}
                {activeScreen && (
                <div className="w-full max-w-2xl bg-white rounded-md shadow-xl overflow-hidden border border-gray-300 flex flex-col" style={{ height: 420 }}>
                  {/* Browser chrome */}
                  <div className="flex items-center gap-2 px-3 py-2 bg-gray-200 border-b border-gray-300 shrink-0">
                    <div className="flex items-center gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                      <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
                    </div>
                    <div className="flex-1 mx-2">
                      <div className="bg-white rounded border border-gray-300 px-2 py-0.5 text-[10px] text-gray-400 flex items-center gap-1">
                        <span className="text-gray-400">🔒</span>
                        <span>app.example.com/{activeScreen.name.toLowerCase().replace(/\s+/g, "-")}</span>
                      </div>
                    </div>
                  </div>

                  {/* App content */}
                  <div className="flex flex-1 overflow-hidden">

                    {/* App sidebar */}
                    <div className="w-36 shrink-0 flex flex-col border-r border-gray-100" style={{ background: "#2A3D58" }}>
                      <div className="px-3 py-3 border-b border-white/10">
                        <div className="flex items-center gap-1.5">
                          <div className="w-4 h-4 rounded bg-[#094D8A]" />
                          <span className="text-white text-[9px] font-semibold">{tenTemplate || "Mini App"}</span>
                        </div>
                      </div>
                      <div className="p-2 flex-1">
                        {screens.map((sc, i) => (
                          <div key={i} className={`flex items-center gap-1.5 px-2 py-1.5 rounded text-[9px] mb-0.5 ${
                            i === activeScreenIdx ? "bg-[#094D8A] text-white" : "text-white/60 hover:text-white"
                          }`}>
                            <div className={`w-1.5 h-1.5 rounded-full shrink-0 ${i === activeScreenIdx ? "bg-white" : "bg-white/30"}`} />
                            {sc.name}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Main content area */}
                    <div className="flex-1 flex flex-col overflow-hidden bg-gray-50">

                      {/* App topbar */}
                      {checkedComponents.has("Header") && (
                        <div className="flex items-center justify-between px-4 py-2 bg-white border-b border-gray-200 shrink-0">
                          <span className="text-[10px] font-semibold text-gray-800">{activeScreen.name}</span>
                          <div className="flex items-center gap-2">
                            <div className="w-5 h-5 rounded-full bg-[#D1E9FF] flex items-center justify-center">
                              <span className="text-[8px]">👤</span>
                            </div>
                          </div>
                        </div>
                      )}

                      <div className="flex-1 overflow-hidden p-3">

                        {/* Dashboard */}
                        {activeScreen.loai === "Dashboard" && (
                          <div className="h-full flex flex-col gap-2">
                            {checkedComponents.has("Banner") && (
                              <div className="h-16 rounded flex items-center px-4 shrink-0"
                                style={{ background: "linear-gradient(135deg,#094D8A,#D1E9FF)" }}>
                                <div>
                                  <div className="text-white text-[9px] font-semibold">Xin chào, Nguyễn Văn A</div>
                                  <div className="text-white/70 text-[8px]">Hệ thống sổ liên lạc điện tử</div>
                                </div>
                              </div>
                            )}
                            {checkedComponents.has("Menu nhanh") && (
                              <div>
                                <div className="text-[9px] font-semibold text-gray-600 mb-1.5">Menu nhanh</div>
                                <div className="grid grid-cols-4 gap-2">
                                  {["Điểm danh", "Học phí", "Xin nghỉ", "Thời khóa biểu"].map((m) => (
                                    <div key={m} className="bg-white rounded p-2 flex flex-col items-center gap-1 border border-gray-100 shadow-sm">
                                      <div className="w-6 h-6 rounded bg-[#D1E9FF] flex items-center justify-center">
                                        <div className="w-3 h-3 bg-[#094D8A] rounded-sm" />
                                      </div>
                                      <span className="text-[8px] text-gray-600 text-center leading-tight">{m}</span>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            )}
                            {checkedComponents.has("Danh sách") && (
                              <div className="flex-1 min-h-0">
                                <div className="text-[9px] font-semibold text-gray-600 mb-1.5">Thông báo mới</div>
                                <div className="bg-white rounded border border-gray-100 overflow-hidden">
                                  {["Thông báo 1 — Hôm nay", "Thông báo 2 — Hôm qua", "Thông báo 3 — 2 ngày trước"].map((n) => (
                                    <div key={n} className="flex items-center gap-2 px-3 py-2 border-b border-gray-50 last:border-0">
                                      <div className="w-1.5 h-1.5 rounded-full bg-[#094D8A] shrink-0" />
                                      <span className="text-[8px] text-gray-600">{n}</span>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            )}
                          </div>
                        )}

                        {/* List */}
                        {activeScreen.loai === "List" && (
                          <div className="h-full flex flex-col gap-2">
                            <div className="flex items-center justify-between shrink-0">
                              {checkedComponents.has("Thanh tìm kiếm") && (
                                <div className="flex items-center gap-1 bg-white border border-gray-200 rounded px-2 py-1.5 text-[9px] text-gray-400 w-44">
                                  <span>🔍</span> Tìm kiếm...
                                </div>
                              )}
                              {checkedComponents.has("Nút thêm") && (
                                <div className="px-2.5 py-1.5 rounded text-white text-[9px] font-medium"
                                  style={{ background: "linear-gradient(90deg,#094D8A,#094D8A)" }}>
                                  + Thêm mới
                                </div>
                              )}
                            </div>
                            {checkedComponents.has("Danh sách") && (
                              <div className="flex-1 bg-white rounded border border-gray-100 overflow-hidden">
                                <div className="grid grid-cols-4 bg-gray-50 border-b border-gray-100 px-3 py-1.5">
                                  {["Họ tên", "Lớp", "Ngày sinh", "Trạng thái"].map((h) => (
                                    <span key={h} className="text-[8px] font-semibold text-gray-500">{h}</span>
                                  ))}
                                </div>
                                {[1, 2, 3, 4].map((n) => (
                                  <div key={n} className="grid grid-cols-4 px-3 py-2 border-b border-gray-50 last:border-0">
                                    <div className="flex items-center gap-1.5">
                                      <div className="w-4 h-4 rounded-full bg-[#D1E9FF] flex items-center justify-center">
                                        <span className="text-[7px] text-[#094D8A] font-semibold">{n}</span>
                                      </div>
                                      <span className="text-[8px] text-gray-700">Học sinh {n}</span>
                                    </div>
                                    <span className="text-[8px] text-gray-500 self-center">Lớp {n}A</span>
                                    <span className="text-[8px] text-gray-500 self-center">01/0{n}/2015</span>
                                    <span className="text-[8px] text-green-600 self-center font-medium">Hoạt động</span>
                                  </div>
                                ))}
                              </div>
                            )}
                          </div>
                        )}

                        {/* Detail */}
                        {activeScreen.loai === "Detail" && (
                          <div className="h-full flex gap-3">
                            {checkedComponents.has("Avatar") && (
                              <div className="w-28 shrink-0 bg-white rounded border border-gray-100 p-3 flex flex-col items-center gap-2">
                                <div className="w-12 h-12 rounded-full bg-[#D1E9FF] flex items-center justify-center">
                                  <span className="text-xl">👤</span>
                                </div>
                                <div className="text-[9px] font-semibold text-gray-700 text-center">Nguyễn Văn A</div>
                                <div className="text-[8px] text-gray-500">Lớp 1A</div>
                                <div className="px-2 py-0.5 rounded-full bg-green-100 text-[7px] text-green-600 font-medium">Hoạt động</div>
                              </div>
                            )}
                            {checkedComponents.has("Thông tin") && (
                              <div className="flex-1 bg-white rounded border border-gray-100 p-3">
                                <div className="text-[9px] font-semibold text-gray-700 mb-2">Thông tin chi tiết</div>
                                <div className="space-y-1.5">
                                  {["Ngày sinh", "Địa chỉ", "Học phí tháng này", "Điểm danh tháng này", "Phụ huynh"].map((f) => (
                                    <div key={f} className="flex items-center gap-2 py-1 border-b border-gray-50">
                                      <span className="text-[8px] text-gray-500 w-28 shrink-0">{f}</span>
                                      <div className="flex-1 h-3 bg-gray-100 rounded" />
                                    </div>
                                  ))}
                                </div>
                              </div>
                            )}
                          </div>
                        )}

                        {/* Form */}
                        {activeScreen.loai === "Form" && (
                          <div className="h-full">
                            {checkedComponents.has("Form") && (
                              <div className="bg-white rounded border border-gray-100 p-4 max-w-sm">
                                <div className="text-[9px] font-semibold text-gray-700 mb-3">{activeScreen.name}</div>
                                <div className="space-y-2.5">
                                  {["Họ và tên học sinh", "Lý do xin nghỉ", "Từ ngày", "Đến ngày", "Ghi chú"].map((f) => (
                                    <div key={f}>
                                      <div className="text-[8px] text-gray-500 mb-0.5">{f}</div>
                                      <div className="h-6 border border-gray-200 rounded bg-white" />
                                    </div>
                                  ))}
                                </div>
                                {checkedComponents.has("Nút gửi") && (
                                  <div className="mt-3 h-7 rounded flex items-center justify-center text-white text-[9px] font-semibold"
                                    style={{ background: "linear-gradient(90deg,#094D8A,#094D8A)" }}>
                                    Gửi đơn xin nghỉ
                                  </div>
                                )}
                              </div>
                            )}
                          </div>
                        )}

                      </div>
                    </div>
                  </div>
                </div>
                )}
              </div>
            </div>

            {/* Right: properties panel */}
            <div className="w-56 shrink-0 flex flex-col bg-white overflow-hidden">
              <div className="px-4 py-2.5 border-b border-gray-100 bg-gray-50/60">
                <span className="text-[11px] font-semibold text-gray-500 uppercase tracking-widest">Thuộc tính</span>
              </div>
              {!activeScreen ? (
                <div className="flex-1 flex flex-col items-center justify-center p-4 text-center">
                  <div className="text-xs font-medium text-gray-500 mb-1">Chưa có màn hình</div>
                  <div className="text-[11px] text-gray-400 leading-relaxed">Hãy thêm màn hình để bắt đầu thiết kế</div>
                </div>
              ) : (
                <div className="p-4 flex-1 overflow-y-auto space-y-4">
                  <div>
                    <label className="block text-[11px] font-semibold text-gray-500 mb-1.5 uppercase tracking-wide">Tên màn hình</label>
                    <input type="text" value={activeScreen.name}
                      onChange={(e) => setScreens((s) => s.map((sc, i) => i === activeScreenIdx ? { ...sc, name: e.target.value } : sc))}
                      className="w-full px-2.5 py-2 text-xs border border-gray-200 rounded bg-white focus:outline-none focus:border-[#094D8A] transition-colors" />
                  </div>
                  <div>
                    <label className="block text-[11px] font-semibold text-gray-500 mb-1.5 uppercase tracking-wide">Loại: {activeScreen.loai}</label>
                  </div>
                  <div>
                    <label className="block text-[11px] font-semibold text-gray-500 mb-2 uppercase tracking-wide">Component</label>
                    <div className="space-y-2">
                      {ALL_COMPONENTS.map((c) => (
                        <label key={c} className="flex items-center gap-2 cursor-pointer">
                          <input type="checkbox" checked={checkedComponents.has(c)} onChange={() => toggleComponent(c)}
                            className="w-3.5 h-3.5 accent-[#094D8A]" />
                          <span className="text-xs text-gray-700">{c}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

          </div>

          {/* Footer: step 2 */}
          <div className="px-8 py-4 border-t border-gray-200 bg-white shrink-0 flex items-center justify-center gap-3">
            <button onClick={() => setStep(1)}
              className="px-6 py-2 text-xs font-medium border border-gray-200 rounded text-gray-600 hover:bg-gray-50 transition-colors">
              Quay lại
            </button>
            <button onClick={saveDraft}
              className="px-6 py-2 text-xs font-medium border border-gray-200 rounded text-gray-600 hover:bg-gray-50 transition-colors">
              Lưu nháp
            </button>
            {screens.length > 0 && (
              <button onClick={savePublish}
                className="px-8 py-2 text-xs font-medium text-white rounded hover:opacity-90 transition-opacity"
                style={{ background: "linear-gradient(90deg,#094D8A,#094D8A)" }}>
                Hoàn tất
              </button>
            )}
          </div>
        </>
      )}
      </div>
    </div>
  );
}

function XemMauScreen({
  template,
  onClose,
  onUpdate,
  onDelete,
  onNavigate,
}: {
  template: TemplateRow;
  onClose: () => void;
  onUpdate: (t: TemplateRow) => void;
  onDelete: (id: number) => void;
  onNavigate: (s: Screen) => void;
}) {
  const COMP: Record<string, string[]> = {
    Dashboard: ["Header", "Banner", "Menu nhanh", "Danh sách", "Footer"],
    List:      ["Header", "Thanh tìm kiếm", "Bộ lọc", "Danh sách", "Nút thêm"],
    Detail:    ["Header", "Avatar", "Thông tin", "Nút hành động"],
    Form:      ["Header", "Form", "Nút gửi"],
  };
  const DANH_MUC_LIST = ["Giáo dục", "Y tế", "Tài chính", "Thương mại", "Khảo sát", "Truyền thông"];
  const WIZARD_STEPS = [{ num: 1, label: "Thông tin" }, { num: 2, label: "Thiết kế Template" }];

  const initScreens = template.templateScreens ?? [];
  const [step, setStep] = useState(1);
  const [tenTemplate, setTenTemplate] = useState(template.ten);
  const [danhMuc, setDanhMuc] = useState(template.loai);
  const [moTa, setMoTa] = useState(template.moTa ?? "");
  const [screens, setScreens] = useState(initScreens);
  const [activeScreenIdx, setActiveScreenIdx] = useState(initScreens.length > 0 ? 0 : -1);
  const [checkedComponents, setCheckedComponents] = useState<Set<string>>(
    new Set(initScreens[0] ? (COMP[initScreens[0].loai] ?? []) : [])
  );
  const [showAddForm, setShowAddForm] = useState(false);
  const [newScreenName, setNewScreenName] = useState("");
  const [newScreenLoai, setNewScreenLoai] = useState("Dashboard");

  const isViewOnly = template.trangThai === "published" && template.miniApp > 0;
  const isDraft = template.trangThai === "draft";
  const activeScreen = screens[activeScreenIdx] ?? null;
  const ALL_COMPONENTS = activeScreen ? (COMP[activeScreen.loai] ?? []) : [];

  const toggleComponent = (c: string) => {
    if (isViewOnly) return;
    setCheckedComponents((p) => { const n = new Set(p); n.has(c) ? n.delete(c) : n.add(c); return n; });
  };

  const addScreen = () => {
    if (!newScreenName.trim()) return;
    const newIdx = screens.length;
    setScreens((s) => [...s, { name: newScreenName.trim(), loai: newScreenLoai }]);
    setActiveScreenIdx(newIdx);
    setCheckedComponents(new Set(COMP[newScreenLoai] ?? []));
    setNewScreenName(""); setNewScreenLoai("Dashboard"); setShowAddForm(false);
  };

  const deleteScreen = (idx: number) => {
    setScreens((s) => s.filter((_, i) => i !== idx));
    setActiveScreenIdx((prev) => prev === idx ? Math.max(0, idx - 1) : prev > idx ? prev - 1 : prev);
  };

  const buildUpdated = (overrides: Partial<TemplateRow>): TemplateRow => ({
    ...template,
    ten: tenTemplate.trim() || template.ten,
    loai: danhMuc,
    moTa,
    templateScreens: screens,
    capNhatCuoi: "Vừa cập nhật",
    ...overrides,
  });

  const saveDraft    = () => { onUpdate(buildUpdated({ trangThai: "draft" }));      onClose(); };
  const publish      = () => { onUpdate(buildUpdated({ trangThai: "published" })); onClose(); };
  const deleteTpl    = () => { onDelete(template.id); onClose(); };

  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden" style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}>
      <Sidebar current="mauMiniApp" onNavigate={onNavigate} />
      <div className="flex-1 flex flex-col overflow-hidden bg-white">

      {/* Header */}
      <div className="flex items-center justify-between px-6 py-3 border-b border-gray-200 shrink-0">
        <div className="flex items-center gap-2">
          <button
            onClick={onClose}
            className="flex items-center gap-1 text-sm text-gray-500 hover:text-gray-700 transition-colors"
          >
            <ChevronLeft size={15} />
            Mẫu Mini App
          </button>
          <span className="text-gray-300 select-none">/</span>
          <span className="text-sm font-semibold text-gray-800">{template.ten}</span>
          <span className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-medium"
            style={{ color: TEMPLATE_STATUS_CONFIG[template.trangThai].color, background: TEMPLATE_STATUS_CONFIG[template.trangThai].bg }}>
            {TEMPLATE_STATUS_CONFIG[template.trangThai].label}
          </span>
        </div>
        <div className="flex items-center gap-2">
          {!isViewOnly && (
            <>
              <button onClick={saveDraft}
                className="px-3 py-1.5 text-xs font-medium text-gray-600 border border-gray-200 rounded hover:bg-gray-50 transition-colors">
                Lưu nháp
              </button>
              <button onClick={publish}
                className="px-3 py-1.5 text-xs font-medium text-white rounded hover:opacity-90 transition-opacity"
                style={{ background: "linear-gradient(90deg,#094D8A,#094D8A)" }}>
                Phát hành
              </button>
              {isDraft && (
                <button onClick={deleteTpl}
                  className="px-3 py-1.5 text-xs font-medium text-red-500 border border-red-100 rounded hover:bg-red-50 transition-colors">
                  Xóa
                </button>
              )}
            </>
          )}
        </div>
      </div>

      {/* Step indicator */}
      <div className="px-8 py-3 border-b border-gray-200 bg-white shrink-0 flex items-center gap-3">
        {WIZARD_STEPS.map((s, i) => {
          const done = s.num < step;
          const active = s.num === step;
          return (
            <div key={s.num} className="flex items-center gap-3">
              {i > 0 && <div className="w-10 h-px bg-gray-300" />}
              <div className="flex items-center gap-2">
                {done ? (
                  <div className="w-5 h-5 rounded-full flex items-center justify-center text-white text-[10px] font-semibold shrink-0"
                    style={{ background: "linear-gradient(135deg,#094D8A,#094D8A)" }}>✓</div>
                ) : active ? (
                  <div className="w-3 h-3 rounded-full shrink-0" style={{ background: "#094D8A" }} />
                ) : (
                  <div className="w-3 h-3 rounded-full border-2 border-gray-300 shrink-0" />
                )}
                <span className={`text-sm font-medium ${active ? "text-gray-900" : done ? "text-gray-500" : "text-gray-400"}`}>
                  {s.num}. {s.label}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Step 1 */}
      {step === 1 && (
        <>
          <div className="flex-1 overflow-y-auto px-8 py-6">
            <div className="max-w-xl space-y-5">
              <h3 className="text-[11px] font-semibold text-gray-500 uppercase tracking-widest">Thông tin chung</h3>
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1.5">Tên Template <span className="text-red-500">*</span></label>
                <input type="text" value={tenTemplate} onChange={(e) => setTenTemplate(e.target.value)}
                  disabled={isViewOnly}
                  className="w-full px-3 py-2.5 text-sm border border-gray-200 rounded bg-white focus:outline-none focus:border-[#094D8A] transition-colors disabled:bg-gray-50 disabled:text-gray-500" />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1.5">Danh mục <span className="text-red-500">*</span></label>
                <div className="relative">
                  <select value={danhMuc} onChange={(e) => setDanhMuc(e.target.value)} disabled={isViewOnly}
                    className="w-full appearance-none px-3 py-2.5 text-sm border border-gray-200 rounded bg-white text-gray-700 focus:outline-none focus:border-[#094D8A] transition-colors cursor-pointer pr-8 disabled:bg-gray-50 disabled:text-gray-500">
                    {DANH_MUC_LIST.map((d) => <option key={d}>{d}</option>)}
                  </select>
                  <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1.5">Mô tả</label>
                <textarea value={moTa} onChange={(e) => setMoTa(e.target.value)} rows={4} disabled={isViewOnly}
                  className="w-full px-3 py-2.5 text-sm border border-gray-200 rounded bg-white focus:outline-none focus:border-[#094D8A] transition-colors resize-none disabled:bg-gray-50 disabled:text-gray-500" />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1.5">Ảnh đại diện</label>
                <div className="border-2 border-dashed border-gray-200 rounded h-28 w-72 flex flex-col items-center justify-center gap-2 cursor-pointer hover:border-[#094D8A] hover:bg-[#D1E9FF]/20 transition-colors">
                  <Upload size={18} className="text-gray-300" />
                  <span className="text-xs text-gray-400">Upload ảnh Template</span>
                </div>
              </div>
            </div>
          </div>
          <div className="px-8 py-4 border-t border-gray-200 bg-white shrink-0 flex items-center justify-center gap-3">
            <button onClick={() => setStep(2)}
              className="px-10 py-2 text-xs font-medium text-white rounded hover:opacity-90 transition-opacity"
              style={{ background: "linear-gradient(90deg,#094D8A,#094D8A)" }}>
              Tiếp theo
            </button>
          </div>
        </>
      )}

      {/* Step 2 */}
      {step === 2 && (
        <>
          <div className="flex-1 flex overflow-hidden">

            {/* Left: screen list */}
            <div className="w-56 shrink-0 border-r border-gray-200 flex flex-col bg-white">
              <div className="px-4 py-2.5 border-b border-gray-100 bg-gray-50/60">
                <span className="text-[11px] font-semibold text-gray-500 uppercase tracking-widest">Màn hình</span>
              </div>
              <div className="flex-1 overflow-y-auto flex flex-col">
                {!isViewOnly && (
                  showAddForm ? (
                    <div className="p-3 border-b border-gray-100 space-y-3">
                      <div>
                        <label className="block text-[11px] font-semibold text-gray-600 mb-1">Tên màn hình <span className="text-red-500">*</span></label>
                        <input type="text" value={newScreenName} onChange={(e) => setNewScreenName(e.target.value)}
                          onKeyDown={(e) => e.key === "Enter" && addScreen()} placeholder="Nhập tên màn hình..." autoFocus
                          className="w-full px-2.5 py-2 text-xs border border-gray-200 rounded bg-white focus:outline-none focus:border-[#094D8A] transition-colors" />
                      </div>
                      <div>
                        <label className="block text-[11px] font-semibold text-gray-600 mb-1">Loại màn hình <span className="text-red-500">*</span></label>
                        <div className="relative">
                          <select value={newScreenLoai} onChange={(e) => setNewScreenLoai(e.target.value)}
                            className="w-full appearance-none px-2.5 py-2 text-xs border border-gray-200 rounded bg-white text-gray-700 focus:outline-none focus:border-[#094D8A] cursor-pointer pr-6">
                            {Object.keys(COMP).map((t) => <option key={t}>{t}</option>)}
                          </select>
                          <ChevronDown size={11} className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                        </div>
                      </div>
                      <div className="border-t border-gray-100 pt-2 space-y-1.5">
                        <button onClick={addScreen} disabled={!newScreenName.trim()}
                          className="w-full py-2 text-xs font-medium text-white rounded hover:opacity-90 transition-opacity disabled:opacity-40"
                          style={{ background: "linear-gradient(90deg,#094D8A,#094D8A)" }}>
                          Thêm màn hình
                        </button>
                        <button onClick={() => { setShowAddForm(false); setNewScreenName(""); setNewScreenLoai("Dashboard"); }}
                          className="w-full py-2 text-xs font-medium text-gray-500 border border-gray-200 rounded hover:bg-gray-50 transition-colors">
                          Hủy
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="p-2">
                      <button onClick={() => setShowAddForm(true)}
                        className="w-full flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-[#094D8A] rounded hover:bg-[#D1E9FF] transition-colors mb-2 border border-dashed border-[#D1E9FF]">
                        <Plus size={12} /> Thêm màn hình
                      </button>
                    </div>
                  )
                )}
                <div className="px-2 pb-2 flex-1">
                  {screens.length === 0 && !showAddForm && (
                    <div className="py-6 text-center text-gray-400"><div className="text-xs">Chưa có màn hình</div></div>
                  )}
                  {screens.map((sc, i) => (
                    <div key={i} className={`flex items-center gap-1 mb-0.5 rounded ${activeScreenIdx === i ? "bg-[#D1E9FF]" : "hover:bg-gray-50"}`}>
                      <button onClick={() => { setActiveScreenIdx(i); setCheckedComponents(new Set(COMP[sc.loai] ?? [])); }}
                        className={`flex-1 flex items-center gap-2.5 px-3 py-2.5 text-xs transition-colors text-left ${activeScreenIdx === i ? "text-[#094D8A] font-medium" : "text-gray-600"}`}>
                        <div className={`w-2 h-2 rounded-full shrink-0 ${activeScreenIdx === i ? "bg-[#094D8A]" : "border-2 border-gray-300"}`} />
                        {sc.name}
                      </button>
                      {!isViewOnly && (
                        <button onClick={() => deleteScreen(i)}
                          className="p-1.5 text-gray-300 hover:text-red-400 transition-colors shrink-0 mr-1">
                          <X size={11} />
                        </button>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Middle: desktop preview */}
            <div className="flex-1 flex flex-col bg-gray-100 border-r border-gray-200 overflow-hidden">
              <div className="px-4 py-2.5 border-b border-gray-200 bg-white shrink-0">
                <span className="text-[11px] font-semibold text-gray-500 uppercase tracking-widest">Preview giao diện</span>
              </div>
              <div className="flex-1 flex items-center justify-center p-6 overflow-y-auto">
                {!activeScreen ? (
                  <div className="text-center text-gray-400">
                    <div className="w-16 h-16 rounded-lg bg-gray-200 flex items-center justify-center mx-auto mb-3"><Plus size={24} className="text-gray-400" /></div>
                    <div className="text-sm font-medium text-gray-500">Chưa có màn hình nào</div>
                    <div className="text-xs text-gray-400 mt-1">Thêm màn hình để xem preview</div>
                  </div>
                ) : (
                  <div className="w-full max-w-2xl bg-white rounded-md shadow-xl overflow-hidden border border-gray-300 flex flex-col" style={{ height: 420 }}>
                    <div className="flex items-center gap-2 px-3 py-2 bg-gray-200 border-b border-gray-300 shrink-0">
                      <div className="flex items-center gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                        <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                        <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
                      </div>
                      <div className="flex-1 mx-2">
                        <div className="bg-white rounded border border-gray-300 px-2 py-0.5 text-[10px] text-gray-400 flex items-center gap-1">
                          <span>🔒</span><span>app.example.com/{activeScreen.name.toLowerCase().replace(/\s+/g, "-")}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-1 overflow-hidden">
                      <div className="w-36 shrink-0 flex flex-col border-r border-gray-100" style={{ background: "#2A3D58" }}>
                        <div className="px-3 py-3 border-b border-white/10">
                          <div className="flex items-center gap-1.5">
                            <div className="w-4 h-4 rounded bg-[#094D8A]" />
                            <span className="text-white text-[9px] font-semibold">{tenTemplate || "Mini App"}</span>
                          </div>
                        </div>
                        <div className="p-2 flex-1">
                          {screens.map((sc, i) => (
                            <div key={i} className={`flex items-center gap-1.5 px-2 py-1.5 rounded text-[9px] mb-0.5 ${i === activeScreenIdx ? "bg-[#094D8A] text-white" : "text-white/60"}`}>
                              <div className={`w-1.5 h-1.5 rounded-full shrink-0 ${i === activeScreenIdx ? "bg-white" : "bg-white/30"}`} />
                              {sc.name}
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="flex-1 flex flex-col overflow-hidden bg-gray-50">
                        {checkedComponents.has("Header") && (
                          <div className="flex items-center justify-between px-4 py-2 bg-white border-b border-gray-200 shrink-0">
                            <span className="text-[10px] font-semibold text-gray-800">{activeScreen.name}</span>
                            <div className="w-5 h-5 rounded-full bg-[#D1E9FF] flex items-center justify-center"><span className="text-[8px]">👤</span></div>
                          </div>
                        )}
                        <div className="flex-1 overflow-hidden p-3">
                          {activeScreen.loai === "Dashboard" && (
                            <div className="h-full flex flex-col gap-2">
                              {checkedComponents.has("Banner") && (
                                <div className="h-16 rounded flex items-center px-4 shrink-0" style={{ background: "linear-gradient(135deg,#094D8A,#D1E9FF)" }}>
                                  <div>
                                    <div className="text-white text-[9px] font-semibold">Xin chào, Người dùng</div>
                                    <div className="text-white/70 text-[8px]">{tenTemplate}</div>
                                  </div>
                                </div>
                              )}
                              {checkedComponents.has("Menu nhanh") && (
                                <div>
                                  <div className="text-[9px] font-semibold text-gray-600 mb-1.5">Menu nhanh</div>
                                  <div className="grid grid-cols-4 gap-2">
                                    {["Chức năng 1", "Chức năng 2", "Chức năng 3", "Chức năng 4"].map((m) => (
                                      <div key={m} className="bg-white rounded p-2 flex flex-col items-center gap-1 border border-gray-100 shadow-sm">
                                        <div className="w-6 h-6 rounded bg-[#D1E9FF] flex items-center justify-center"><div className="w-3 h-3 bg-[#094D8A] rounded-sm" /></div>
                                        <span className="text-[7px] text-gray-600 text-center leading-tight">{m}</span>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              )}
                              {checkedComponents.has("Danh sách") && (
                                <div className="flex-1 min-h-0">
                                  <div className="text-[9px] font-semibold text-gray-600 mb-1.5">Danh sách</div>
                                  <div className="bg-white rounded border border-gray-100 overflow-hidden">
                                    {["Mục 1 — Hôm nay", "Mục 2 — Hôm qua", "Mục 3 — 2 ngày trước"].map((n) => (
                                      <div key={n} className="flex items-center gap-2 px-3 py-2 border-b border-gray-50 last:border-0">
                                        <div className="w-1.5 h-1.5 rounded-full bg-[#094D8A] shrink-0" />
                                        <span className="text-[8px] text-gray-600">{n}</span>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              )}
                            </div>
                          )}
                          {activeScreen.loai === "List" && (
                            <div className="h-full flex flex-col gap-2">
                              <div className="flex items-center justify-between shrink-0">
                                {checkedComponents.has("Thanh tìm kiếm") && (
                                  <div className="flex items-center gap-1 bg-white border border-gray-200 rounded px-2 py-1.5 text-[9px] text-gray-400 w-44">
                                    <span>🔍</span> Tìm kiếm...
                                  </div>
                                )}
                                {checkedComponents.has("Nút thêm") && (
                                  <div className="px-2.5 py-1.5 rounded text-white text-[9px] font-medium" style={{ background: "linear-gradient(90deg,#094D8A,#094D8A)" }}>+ Thêm mới</div>
                                )}
                              </div>
                              {checkedComponents.has("Danh sách") && (
                                <div className="flex-1 bg-white rounded border border-gray-100 overflow-hidden">
                                  <div className="grid grid-cols-3 bg-gray-50 border-b border-gray-100 px-3 py-1.5">
                                    {["Tên", "Ngày tạo", "Trạng thái"].map((h) => (<span key={h} className="text-[8px] font-semibold text-gray-500">{h}</span>))}
                                  </div>
                                  {[1, 2, 3, 4].map((n) => (
                                    <div key={n} className="grid grid-cols-3 px-3 py-2 border-b border-gray-50 last:border-0">
                                      <span className="text-[8px] text-gray-700">Mục {n}</span>
                                      <span className="text-[8px] text-gray-500">0{n}/01/2026</span>
                                      <span className="text-[8px] text-green-600 font-medium">Hoạt động</span>
                                    </div>
                                  ))}
                                </div>
                              )}
                            </div>
                          )}
                          {activeScreen.loai === "Detail" && (
                            <div className="h-full flex gap-3">
                              {checkedComponents.has("Avatar") && (
                                <div className="w-28 shrink-0 bg-white rounded border border-gray-100 p-3 flex flex-col items-center gap-2">
                                  <div className="w-12 h-12 rounded-full bg-[#D1E9FF] flex items-center justify-center"><span className="text-xl">👤</span></div>
                                  <div className="text-[9px] font-semibold text-gray-700 text-center">Người dùng</div>
                                  <div className="text-[8px] text-gray-500">Chi tiết</div>
                                </div>
                              )}
                              {checkedComponents.has("Thông tin") && (
                                <div className="flex-1 bg-white rounded border border-gray-100 p-3">
                                  <div className="text-[9px] font-semibold text-gray-700 mb-2">Thông tin chi tiết</div>
                                  <div className="space-y-1.5">
                                    {["Trường 1", "Trường 2", "Trường 3", "Trường 4"].map((f) => (
                                      <div key={f} className="flex items-center gap-2 py-1 border-b border-gray-50">
                                        <span className="text-[8px] text-gray-500 w-20 shrink-0">{f}</span>
                                        <div className="flex-1 h-3 bg-gray-100 rounded" />
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              )}
                            </div>
                          )}
                          {activeScreen.loai === "Form" && (
                            <div className="h-full">
                              {checkedComponents.has("Form") && (
                                <div className="bg-white rounded border border-gray-100 p-4 max-w-sm">
                                  <div className="text-[9px] font-semibold text-gray-700 mb-3">{activeScreen.name}</div>
                                  <div className="space-y-2.5">
                                    {["Trường 1", "Trường 2", "Trường 3", "Trường 4"].map((f) => (
                                      <div key={f}>
                                        <div className="text-[8px] text-gray-500 mb-0.5">{f}</div>
                                        <div className="h-6 border border-gray-200 rounded bg-white" />
                                      </div>
                                    ))}
                                  </div>
                                  {checkedComponents.has("Nút gửi") && (
                                    <div className="mt-3 h-7 rounded flex items-center justify-center text-white text-[9px] font-semibold"
                                      style={{ background: "linear-gradient(90deg,#094D8A,#094D8A)" }}>
                                      Gửi
                                    </div>
                                  )}
                                </div>
                              )}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Right: properties */}
            <div className="w-56 shrink-0 flex flex-col bg-white overflow-hidden">
              <div className="px-4 py-2.5 border-b border-gray-100 bg-gray-50/60">
                <span className="text-[11px] font-semibold text-gray-500 uppercase tracking-widest">Thuộc tính</span>
              </div>
              {!activeScreen ? (
                <div className="flex-1 flex flex-col items-center justify-center p-4 text-center">
                  <div className="text-xs font-medium text-gray-500 mb-1">Chưa có màn hình</div>
                  <div className="text-[11px] text-gray-400 leading-relaxed">Hãy thêm màn hình để bắt đầu thiết kế</div>
                </div>
              ) : (
                <div className="p-4 flex-1 overflow-y-auto space-y-4">
                  <div>
                    <label className="block text-[11px] font-semibold text-gray-500 mb-1.5 uppercase tracking-wide">Tên màn hình</label>
                    <input type="text" value={activeScreen.name} disabled={isViewOnly}
                      onChange={(e) => setScreens((s) => s.map((sc, i) => i === activeScreenIdx ? { ...sc, name: e.target.value } : sc))}
                      className="w-full px-2.5 py-2 text-xs border border-gray-200 rounded bg-white focus:outline-none focus:border-[#094D8A] transition-colors disabled:bg-gray-50" />
                  </div>
                  <div>
                    <label className="block text-[11px] font-semibold text-gray-500 mb-1.5 uppercase tracking-wide">Loại: {activeScreen.loai}</label>
                  </div>
                  <div>
                    <label className="block text-[11px] font-semibold text-gray-500 mb-2 uppercase tracking-wide">Component</label>
                    <div className="space-y-2">
                      {ALL_COMPONENTS.map((c) => (
                        <label key={c} className={`flex items-center gap-2 ${isViewOnly ? "cursor-default" : "cursor-pointer"}`}>
                          <input type="checkbox" checked={checkedComponents.has(c)} onChange={() => toggleComponent(c)} disabled={isViewOnly}
                            className="w-3.5 h-3.5 accent-[#094D8A]" />
                          <span className="text-xs text-gray-700">{c}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

          </div>

          {/* Footer step 2 */}
          <div className="px-8 py-4 border-t border-gray-200 bg-white shrink-0 flex items-center justify-center gap-3">
            <button onClick={() => setStep(1)}
              className="px-6 py-2 text-xs font-medium border border-gray-200 rounded text-gray-600 hover:bg-gray-50 transition-colors">
              Quay lại
            </button>
            {!isViewOnly && (
              <button onClick={saveDraft}
                className="px-8 py-2 text-xs font-medium text-white rounded hover:opacity-90 transition-opacity"
                style={{ background: "linear-gradient(90deg,#094D8A,#094D8A)" }}>
                Lưu nháp
              </button>
            )}
          </div>
        </>
      )}
      </div>
    </div>
  );
}

function MauMiniAppScreen({ onNavigate, templateData: TEMPLATE_DATA, onViewTemplate }: { onNavigate: (s: Screen) => void; templateData: TemplateRow[]; onViewTemplate: (id: number) => void }) {
  const [activeTab, setActiveTab] = useState<TemplateStatus | "all">("all");
  const [search, setSearch] = useState("");
  const [loaiFilter, setLoaiFilter] = useState("all");
  const [phienBanFilter, setPhienBanFilter] = useState("all");
  const [page, setPage] = useState(1);
  const rowsPerPage = 7;

  const counts: Record<TemplateStatus | "all", number> = {
    all:          TEMPLATE_DATA.length,
    published:    TEMPLATE_DATA.filter((t) => t.trangThai === "published").length,
    draft:        TEMPLATE_DATA.filter((t) => t.trangThai === "draft").length,
    discontinued: TEMPLATE_DATA.filter((t) => t.trangThai === "discontinued").length,
  };

  const totalMiniApp  = TEMPLATE_DATA.reduce((s, t) => s + t.miniApp, 0);
  const totalDeveloper = TEMPLATE_DATA.reduce((s, t) => s + t.developer, 0);

  const allLoai    = Array.from(new Set(TEMPLATE_DATA.map((t) => t.loai))).sort();
  const allVersions = Array.from(new Set(TEMPLATE_DATA.map((t) => t.phienBan))).sort();

  const filtered = TEMPLATE_DATA.filter((t) => {
    const matchTab   = activeTab === "all" || t.trangThai === activeTab;
    const matchSearch = search === "" || t.ten.toLowerCase().includes(search.toLowerCase());
    const matchLoai  = loaiFilter === "all" || t.loai === loaiFilter;
    const matchVer   = phienBanFilter === "all" || t.phienBan === phienBanFilter;
    return matchTab && matchSearch && matchLoai && matchVer;
  });

  const totalPages = Math.max(1, Math.ceil(filtered.length / rowsPerPage));
  const paged = filtered.slice((page - 1) * rowsPerPage, page * rowsPerPage);

  const clearFilters = () => {
    setSearch(""); setLoaiFilter("all"); setPhienBanFilter("all");
    setActiveTab("all"); setPage(1);
  };

  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden" style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}>
      <Sidebar current="mauMiniApp" onNavigate={onNavigate} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <TopBar title="Mẫu Mini App" />
        <div className="flex-1 overflow-y-auto px-6 py-5">

          {/* Page header */}
          <div className="flex items-center justify-between mb-5">
            <div>
              <h2 className="text-xl font-semibold text-gray-900">Mẫu Mini App (Template)</h2>
              <p className="text-xs text-gray-500 mt-0.5">Quản lý các mẫu Mini App được tạo bằng Trình tạo Mini App</p>
            </div>
            <button onClick={() => onNavigate("trinhTaoMau")}
              className="flex items-center gap-1.5 px-4 py-2 rounded text-white text-xs font-medium hover:opacity-90 transition-opacity shadow-sm"
              style={{ background: "linear-gradient(90deg, #094D8A, #094D8A)" }}>
              <Plus size={13} />
              Mẫu Mini App
            </button>
          </div>

          {/* Stat cards */}
          <div className="grid grid-cols-4 gap-4 mb-5">
            {[
              { label: "Tổng Template",      value: counts.all,        icon: "⊞", iconBg: "#EDE9FE", iconColor: "#7C3AED" },
              { label: "Đang phát hành",     value: counts.published,  icon: "✓", iconBg: "#DCFCE7", iconColor: "#16A34A" },
              { label: "Mini App đã tạo",    value: totalMiniApp,      icon: "◫", iconBg: "#DBEAFE", iconColor: "#2563EB" },
              { label: "Developer sử dụng",  value: totalDeveloper,    icon: "♟", iconBg: "#FEF3C7", iconColor: "#D97706" },
            ].map((s) => (
              <div key={s.label} className="bg-white rounded-md border border-gray-100 shadow-sm px-5 py-4 flex items-center gap-4">
                <div className="w-10 h-10 rounded-md flex items-center justify-center text-base shrink-0"
                  style={{ background: s.iconBg, color: s.iconColor }}>
                  {s.icon}
                </div>
                <div>
                  <div className="text-xs text-gray-500 mb-0.5">{s.label}</div>
                  <div className="text-2xl font-semibold text-gray-900">{s.value}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Filters */}
          <div className="flex items-center gap-3 mb-4">
            <div className="relative flex-1 max-w-sm">
              <Search size={13} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input type="text" placeholder="Tìm theo tên Template..."
                value={search} onChange={(e) => { setSearch(e.target.value); setPage(1); }}
                className="w-full pl-8 pr-3 py-2 text-xs border border-gray-200 rounded bg-white shadow-sm placeholder-gray-400 focus:outline-none focus:border-[#094D8A] transition-colors" />
            </div>
            <div className="relative">
              <select value={loaiFilter} onChange={(e) => { setLoaiFilter(e.target.value); setPage(1); }}
                className="appearance-none pl-3 pr-8 py-2 text-xs border border-gray-200 rounded bg-white shadow-sm text-gray-600 focus:outline-none focus:border-[#094D8A] transition-colors cursor-pointer">
                <option value="all">Loại</option>
                {allLoai.map((l) => <option key={l} value={l}>{l}</option>)}
              </select>
              <ChevronDown size={11} className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
            </div>
            <div className="relative">
              <select value={activeTab === "all" ? "all" : activeTab}
                onChange={(e) => { setActiveTab(e.target.value as TemplateStatus | "all"); setPage(1); }}
                className="appearance-none pl-3 pr-8 py-2 text-xs border border-gray-200 rounded bg-white shadow-sm text-gray-600 focus:outline-none focus:border-[#094D8A] transition-colors cursor-pointer">
                <option value="all">Trạng thái</option>
                <option value="published">Đang phát hành</option>
                <option value="draft">Nháp</option>
                <option value="discontinued">Ngừng phát hành</option>
              </select>
              <ChevronDown size={11} className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
            </div>
            <div className="relative">
              <select value={phienBanFilter} onChange={(e) => { setPhienBanFilter(e.target.value); setPage(1); }}
                className="appearance-none pl-3 pr-8 py-2 text-xs border border-gray-200 rounded bg-white shadow-sm text-gray-600 focus:outline-none focus:border-[#094D8A] transition-colors cursor-pointer">
                <option value="all">Phiên bản</option>
                {allVersions.map((v) => <option key={v} value={v}>{v}</option>)}
              </select>
              <ChevronDown size={11} className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
            </div>
            <button onClick={clearFilters}
              className="px-4 py-2 text-xs border border-gray-200 rounded bg-white text-gray-600 hover:bg-gray-50 transition-colors shadow-sm font-medium">
              Làm mới
            </button>
          </div>

          {/* Table card */}
          <div className="bg-white rounded-md border border-gray-100 shadow-sm">
            {/* Tabs */}
            <div className="flex border-b border-gray-100 px-4">
              {TEMPLATE_STATUS_TABS.map((tab) => (
                <button key={tab.status}
                  onClick={() => { setActiveTab(tab.status); setPage(1); }}
                  className={`px-3 py-3 text-xs font-medium whitespace-nowrap transition-colors border-b-2 -mb-px ${
                    activeTab === tab.status
                      ? "border-[#094D8A] text-[#094D8A]"
                      : "border-transparent text-gray-500 hover:text-gray-700"
                  }`}>
                  {tab.label} ({counts[tab.status]})
                </button>
              ))}
            </div>

            {/* Table */}
            <table className="w-full text-xs">
              <thead>
                <tr className="border-b border-gray-100 bg-gray-50/60">
                  <th className="text-left px-4 py-3 text-gray-500 font-semibold w-10">STT</th>
                  <th className="text-left px-4 py-3 text-gray-500 font-semibold">TEMPLATE</th>
                  <th className="text-left px-4 py-3 text-gray-500 font-semibold w-28">LOẠI</th>
                  <th className="text-left px-4 py-3 text-gray-500 font-semibold w-24">PHIÊN BẢN</th>
                  <th className="text-center px-4 py-3 text-gray-500 font-semibold w-24">MINI APP</th>
                  <th className="text-center px-4 py-3 text-gray-500 font-semibold w-24">DEVELOPER</th>
                  <th className="text-left px-4 py-3 text-gray-500 font-semibold w-32">CẬP NHẬT CUỐI</th>
                  <th className="text-center px-4 py-3 text-gray-500 font-semibold w-20">TRẠNG THÁI</th>
                  <th className="text-center px-4 py-3 text-gray-500 font-semibold w-20">THAO TÁC</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {paged.map((t, idx) => {
                  const loaiCfg = TEMPLATE_LOAI_CONFIG[t.loai] ?? { color: "#6B7280", bg: "#F3F4F6" };
                  const stCfg   = TEMPLATE_STATUS_CONFIG[t.trangThai];
                  return (
                    <tr key={t.id} className="hover:bg-gray-50/60 transition-colors">
                      <td className="px-4 py-3.5 text-gray-500">{(page - 1) * rowsPerPage + idx + 1}</td>
                      <td className="px-4 py-3.5 font-medium text-gray-800">{t.ten}</td>
                      <td className="px-4 py-3.5">
                        <span className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-medium"
                          style={{ color: loaiCfg.color, background: loaiCfg.bg }}>
                          {t.loai}
                        </span>
                      </td>
                      <td className="px-4 py-3.5 font-mono text-gray-600">{t.phienBan}</td>
                      <td className="px-4 py-3.5 text-center text-gray-700 font-medium">{t.miniApp}</td>
                      <td className="px-4 py-3.5 text-center text-gray-700 font-medium">{t.developer}</td>
                      <td className="px-4 py-3.5 text-gray-500">{t.capNhatCuoi}</td>
                      <td className="px-4 py-3.5 text-center">
                        <span className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-medium"
                          style={{ color: stCfg.color, background: stCfg.bg }}>
                          {stCfg.label}
                        </span>
                      </td>
                      <td className="px-4 py-3.5 text-center">
                        <button onClick={() => onViewTemplate(t.id)} className="px-2.5 py-1 rounded text-[11px] font-medium border border-gray-200 text-gray-600 bg-white hover:bg-gray-50 transition-colors">
                          Xem
                        </button>
                      </td>
                    </tr>
                  );
                })}
                {paged.length === 0 && (
                  <tr>
                    <td colSpan={9} className="px-4 py-10 text-center text-gray-400">Không có dữ liệu</td>
                  </tr>
                )}
              </tbody>
            </table>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex items-center justify-between px-4 py-3 border-t border-gray-100">
                <span className="text-xs text-gray-500">
                  Hiển thị {(page - 1) * rowsPerPage + 1}–{Math.min(page * rowsPerPage, filtered.length)} / {filtered.length} template
                </span>
                <div className="flex items-center gap-1">
                  <button onClick={() => setPage((p) => Math.max(1, p - 1))} disabled={page === 1}
                    className="p-1.5 rounded text-gray-500 hover:bg-gray-100 disabled:opacity-30 transition-colors">
                    <ChevronLeft size={14} />
                  </button>
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                    <button key={p} onClick={() => setPage(p)}
                      className={`w-7 h-7 rounded text-xs font-medium transition-colors ${
                        p === page ? "bg-[#094D8A] text-white" : "text-gray-600 hover:bg-gray-100"
                      }`}>
                      {p}
                    </button>
                  ))}
                  <button onClick={() => setPage((p) => Math.min(totalPages, p + 1))} disabled={page === totalPages}
                    className="p-1.5 rounded text-gray-500 hover:bg-gray-100 disabled:opacity-30 transition-colors">
                    <ChevronRight size={14} />
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Hỗ Trợ ───────────────────────────────────────────────────────────────
type TrangThaiHoTro = "Chờ xử lý" | "Đang xử lý" | "Đã hoàn thành";
type MucDo = "Cao" | "Trung bình" | "Thấp";

interface HoTroRow {
  id: number;
  tieuDe: string;
  doanhNghiep: string;
  nguoiGui: string;
  mucDo: MucDo;
  trangThai: TrangThaiHoTro;
  ngayTao: string;
}

const STATUS_HOTRO: Record<TrangThaiHoTro, { color: string; bg: string }> = {
  "Chờ xử lý":    { color: "#D97706", bg: "#FEF3C7" },
  "Đang xử lý":   { color: "#2563EB", bg: "#DBEAFE" },
  "Đã hoàn thành":{ color: "#16A34A", bg: "#DCFCE7" },
};

const MUC_DO_CFG: Record<MucDo, { color: string; bg: string }> = {
  "Cao":        { color: "#DC2626", bg: "#FEE2E2" },
  "Trung bình": { color: "#D97706", bg: "#FEF3C7" },
  "Thấp":       { color: "#16A34A", bg: "#DCFCE7" },
};

const HOTRO_DATA: HoTroRow[] = [
  { id: 1,  tieuDe: "Không gọi được API",           doanhNghiep: "FPT Software", nguoiGui: "Nguyễn Văn A", mucDo: "Cao",       trangThai: "Chờ xử lý",    ngayTao: "25/06/2026" },
  { id: 2,  tieuDe: "Lỗi Publish Mini App",          doanhNghiep: "VNPT",        nguoiGui: "Trần Văn B",    mucDo: "Trung bình", trangThai: "Đang xử lý",   ngayTao: "24/06/2026" },
  { id: 3,  tieuDe: "Không upload được Icon",        doanhNghiep: "MISA",        nguoiGui: "Lê Văn C",      mucDo: "Thấp",       trangThai: "Đã hoàn thành",ngayTao: "23/06/2026" },
  { id: 4,  tieuDe: "Xin cấp quyền Developer",      doanhNghiep: "CMC",         nguoiGui: "Phạm Văn D",    mucDo: "Thấp",       trangThai: "Đã hoàn thành",ngayTao: "22/06/2026" },
  { id: 5,  tieuDe: "Lỗi xác thực OAuth2",          doanhNghiep: "Viettel",     nguoiGui: "Hoàng Văn E",   mucDo: "Cao",        trangThai: "Chờ xử lý",    ngayTao: "21/06/2026" },
  { id: 6,  tieuDe: "Không xem được log API",       doanhNghiep: "VNG",         nguoiGui: "Đỗ Thị F",      mucDo: "Trung bình", trangThai: "Đang xử lý",   ngayTao: "20/06/2026" },
  { id: 7,  tieuDe: "Cần hỗ trợ tích hợp SDK",     doanhNghiep: "FPT Software", nguoiGui: "Bùi Văn G",    mucDo: "Trung bình", trangThai: "Đã hoàn thành",ngayTao: "19/06/2026" },
  { id: 8,  tieuDe: "Lỗi callback webhook",          doanhNghiep: "MISA",        nguoiGui: "Vũ Thị H",      mucDo: "Cao",        trangThai: "Đang xử lý",   ngayTao: "18/06/2026" },
  { id: 9,  tieuDe: "Không nhận được OTP",           doanhNghiep: "VNPT",        nguoiGui: "Lý Văn I",      mucDo: "Thấp",       trangThai: "Đã hoàn thành",ngayTao: "17/06/2026" },
  { id: 10, tieuDe: "Lỗi rate limit API",            doanhNghiep: "CMC",         nguoiGui: "Trịnh Văn J",   mucDo: "Cao",        trangThai: "Chờ xử lý",    ngayTao: "16/06/2026" },
  { id: 11, tieuDe: "Lỗi CORS trên production",     doanhNghiep: "Viettel",     nguoiGui: "Ngô Thị K",     mucDo: "Cao",        trangThai: "Đang xử lý",   ngayTao: "15/06/2026" },
  { id: 12, tieuDe: "Mini App không hiển thị",       doanhNghiep: "VNG",         nguoiGui: "Đinh Văn L",    mucDo: "Trung bình", trangThai: "Đã hoàn thành",ngayTao: "14/06/2026" },
  { id: 13, tieuDe: "Xin gia hạn gói API",          doanhNghiep: "FPT Software", nguoiGui: "Phan Thị M",   mucDo: "Thấp",       trangThai: "Đã hoàn thành",ngayTao: "13/06/2026" },
  { id: 14, tieuDe: "Lỗi timeout khi gọi API",      doanhNghiep: "MISA",        nguoiGui: "Lưu Văn N",     mucDo: "Cao",        trangThai: "Chờ xử lý",    ngayTao: "12/06/2026" },
  { id: 15, tieuDe: "Không đăng nhập được SSO",     doanhNghiep: "VNPT",        nguoiGui: "Tống Thị O",    mucDo: "Cao",        trangThai: "Đang xử lý",   ngayTao: "11/06/2026" },
  { id: 16, tieuDe: "Lỗi định dạng response JSON",  doanhNghiep: "CMC",         nguoiGui: "Hà Văn P",      mucDo: "Trung bình", trangThai: "Đã hoàn thành",ngayTao: "10/06/2026" },
  { id: 17, tieuDe: "Cần thêm scope permission",    doanhNghiep: "Viettel",     nguoiGui: "Mai Thị Q",     mucDo: "Thấp",       trangThai: "Đã hoàn thành",ngayTao: "09/06/2026" },
  { id: 18, tieuDe: "Lỗi upload file lớn",          doanhNghiep: "VNG",         nguoiGui: "Cao Văn R",     mucDo: "Trung bình", trangThai: "Đã hoàn thành",ngayTao: "08/06/2026" },
];

const TABS_HOTRO: { status: TrangThaiHoTro | "all"; label: string }[] = [
  { status: "all",          label: "Tất cả" },
  { status: "Chờ xử lý",    label: "Chờ xử lý" },
  { status: "Đang xử lý",   label: "Đang xử lý" },
  { status: "Đã hoàn thành",label: "Đã hoàn thành" },
];

function HoTroScreen({ onNavigate }: { onNavigate: (s: Screen) => void }) {
  const [activeTab, setActiveTab] = useState<TrangThaiHoTro | "all">("all");
  const [search, setSearch] = useState("");
  const [filterDN, setFilterDN] = useState("");
  const [filterMucDo, setFilterMucDo] = useState<MucDo | "">("");
  const [filterTrangThai, setFilterTrangThai] = useState<TrangThaiHoTro | "">("");
  const [page, setPage] = useState(1);
  const rowsPerPage = 8;

  const counts: Record<TrangThaiHoTro | "all", number> = {
    all:             HOTRO_DATA.length,
    "Chờ xử lý":    HOTRO_DATA.filter((d) => d.trangThai === "Chờ xử lý").length,
    "Đang xử lý":   HOTRO_DATA.filter((d) => d.trangThai === "Đang xử lý").length,
    "Đã hoàn thành":HOTRO_DATA.filter((d) => d.trangThai === "Đã hoàn thành").length,
  };

  const uniqueDN = Array.from(new Set(HOTRO_DATA.map((d) => d.doanhNghiep)));

  const filtered = HOTRO_DATA.filter((d) => {
    const matchTab      = activeTab === "all" || d.trangThai === activeTab;
    const matchSearch   = search === "" || d.tieuDe.toLowerCase().includes(search.toLowerCase());
    const matchDN       = filterDN === "" || d.doanhNghiep === filterDN;
    const matchMucDo    = filterMucDo === "" || d.mucDo === filterMucDo;
    const matchTrangThai= filterTrangThai === "" || d.trangThai === filterTrangThai;
    return matchTab && matchSearch && matchDN && matchMucDo && matchTrangThai;
  });

  const totalPages = Math.ceil(filtered.length / rowsPerPage);
  const paged = filtered.slice((page - 1) * rowsPerPage, page * rowsPerPage);

  const handleRefresh = () => {
    setSearch(""); setFilterDN(""); setFilterMucDo(""); setFilterTrangThai(""); setPage(1);
  };

  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden" style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}>
      <Sidebar current="hoTro" onNavigate={onNavigate} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <TopBar title="Hỗ trợ" />
        <div className="flex-1 overflow-y-auto px-6 py-5">

          {/* Page header */}
          <div className="mb-5">
            <h2 className="text-xl font-semibold text-gray-900">Hỗ trợ</h2>
            <p className="text-xs text-gray-400 mt-0.5">
              Quản lý các yêu cầu hỗ trợ từ doanh nghiệp và Developer
            </p>
          </div>

          {/* Stat cards */}
          <div className="grid grid-cols-4 gap-4 mb-5">
            {[
              { label: "Tổng yêu cầu",    value: counts.all,              color: "#1F2937" },
              { label: "Chờ xử lý",        value: counts["Chờ xử lý"],    color: "#D97706" },
              { label: "Đang xử lý",       value: counts["Đang xử lý"],   color: "#2563EB" },
              { label: "Đã hoàn thành",    value: counts["Đã hoàn thành"],color: "#16A34A" },
            ].map((s) => (
              <div key={s.label} className="bg-white rounded-md border border-gray-100 shadow-sm px-5 py-4">
                <div className="text-xs text-gray-500 mb-1">{s.label}</div>
                <div className="text-2xl font-semibold" style={{ color: s.color }}>{s.value}</div>
              </div>
            ))}
          </div>

          {/* Filter bar */}
          <div className="bg-white rounded-md border border-gray-100 shadow-sm px-4 py-3 mb-4 flex items-center gap-3 flex-wrap">
            <div className="relative flex-1 min-w-48">
              <Search size={13} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Tìm theo tiêu đề..."
                value={search}
                onChange={(e) => { setSearch(e.target.value); setPage(1); }}
                className="w-full pl-8 pr-3 py-2 text-xs border border-gray-200 rounded bg-white placeholder-gray-400 focus:outline-none focus:border-[#094D8A] transition-colors"
              />
            </div>
            <select
              value={filterDN}
              onChange={(e) => { setFilterDN(e.target.value); setPage(1); }}
              className="px-3 py-2 text-xs border border-gray-200 rounded bg-white text-gray-600 focus:outline-none focus:border-[#094D8A] appearance-none pr-7 cursor-pointer"
              style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%239CA3AF' stroke-width='2'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E\")", backgroundRepeat: "no-repeat", backgroundPosition: "right 8px center" }}
            >
              <option value="">Doanh nghiệp</option>
              {uniqueDN.map((dn) => <option key={dn} value={dn}>{dn}</option>)}
            </select>
            <select
              value={filterMucDo}
              onChange={(e) => { setFilterMucDo(e.target.value as MucDo | ""); setPage(1); }}
              className="px-3 py-2 text-xs border border-gray-200 rounded bg-white text-gray-600 focus:outline-none focus:border-[#094D8A] appearance-none pr-7 cursor-pointer"
              style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%239CA3AF' stroke-width='2'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E\")", backgroundRepeat: "no-repeat", backgroundPosition: "right 8px center" }}
            >
              <option value="">Mức độ</option>
              <option value="Cao">Cao</option>
              <option value="Trung bình">Trung bình</option>
              <option value="Thấp">Thấp</option>
            </select>
            <select
              value={filterTrangThai}
              onChange={(e) => { setFilterTrangThai(e.target.value as TrangThaiHoTro | ""); setPage(1); }}
              className="px-3 py-2 text-xs border border-gray-200 rounded bg-white text-gray-600 focus:outline-none focus:border-[#094D8A] appearance-none pr-7 cursor-pointer"
              style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%239CA3AF' stroke-width='2'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E\")", backgroundRepeat: "no-repeat", backgroundPosition: "right 8px center" }}
            >
              <option value="">Trạng thái</option>
              <option value="Chờ xử lý">Chờ xử lý</option>
              <option value="Đang xử lý">Đang xử lý</option>
              <option value="Đã hoàn thành">Đã hoàn thành</option>
            </select>
            <button
              onClick={handleRefresh}
              className="flex items-center gap-1.5 px-3 py-2 text-xs border border-gray-200 rounded bg-white text-gray-600 hover:bg-gray-50 transition-colors"
            >
              <RefreshCw size={12} />
              Làm mới
            </button>
          </div>

          {/* Main table card */}
          <div className="bg-white rounded-md border border-gray-100 shadow-sm">
            {/* Tabs */}
            <div className="flex border-b border-gray-100 px-4">
              {TABS_HOTRO.map((tab) => (
                <button
                  key={tab.status}
                  onClick={() => { setActiveTab(tab.status); setPage(1); }}
                  className={`px-3 py-3 text-xs font-medium whitespace-nowrap transition-colors border-b-2 -mb-px ${
                    activeTab === tab.status
                      ? "border-[#094D8A] text-[#094D8A]"
                      : "border-transparent text-gray-500 hover:text-gray-700"
                  }`}
                >
                  {tab.label} ({counts[tab.status]})
                </button>
              ))}
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-xs">
                <thead>
                  <tr className="border-b border-gray-100 bg-gray-50/60">
                    <th className="text-left px-4 py-3 text-gray-500 font-semibold w-10">STT</th>
                    <th className="text-left px-4 py-3 text-gray-500 font-semibold">TIÊU ĐỀ</th>
                    <th className="text-left px-4 py-3 text-gray-500 font-semibold w-32">DOANH NGHIỆP</th>
                    <th className="text-left px-4 py-3 text-gray-500 font-semibold w-28">NGƯỜI GỬI</th>
                    <th className="text-center px-4 py-3 text-gray-500 font-semibold w-24">MỨC ĐỘ</th>
                    <th className="text-center px-4 py-3 text-gray-500 font-semibold w-32">TRẠNG THÁI</th>
                    <th className="text-center px-4 py-3 text-gray-500 font-semibold w-20">THAO TÁC</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {paged.map((row, idx) => {
                    const st = STATUS_HOTRO[row.trangThai];
                    const md = MUC_DO_CFG[row.mucDo];
                    return (
                      <tr key={row.id} className="hover:bg-gray-50/60 transition-colors">
                        <td className="px-4 py-3.5 text-gray-500">
                          {(page - 1) * rowsPerPage + idx + 1}
                        </td>
                        <td className="px-4 py-3.5">
                          <div className="font-semibold text-gray-800">{row.tieuDe}</div>
                          <div className="text-gray-400 text-[11px] mt-0.5">{row.ngayTao}</div>
                        </td>
                        <td className="px-4 py-3.5 text-gray-700">{row.doanhNghiep}</td>
                        <td className="px-4 py-3.5 text-gray-700">{row.nguoiGui}</td>
                        <td className="px-4 py-3.5 text-center">
                          <span
                            className="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-medium"
                            style={{ color: md.color, background: md.bg }}
                          >
                            {row.mucDo}
                          </span>
                        </td>
                        <td className="px-4 py-3.5 text-center">
                          <span
                            className="inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-medium"
                            style={{ color: st.color, background: st.bg }}
                          >
                            {row.trangThai}
                          </span>
                        </td>
                        <td className="px-4 py-3.5 text-center">
                          <button className="px-3 py-1.5 text-[11px] font-medium text-[#094D8A] border border-[#D1E9FF] rounded hover:bg-[#D1E9FF] transition-colors">
                            Xem
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                  {paged.length === 0 && (
                    <tr>
                      <td colSpan={7} className="px-4 py-10 text-center text-gray-400">
                        Không có dữ liệu
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-between px-4 py-3 border-t border-gray-100">
              <span className="text-xs text-gray-400">
                Hiển thị {filtered.length === 0 ? 0 : (page - 1) * rowsPerPage + 1}–{Math.min(page * rowsPerPage, filtered.length)} / {filtered.length} yêu cầu
              </span>
              <div className="flex items-center gap-1">
                <button
                  onClick={() => setPage((p) => Math.max(1, p - 1))}
                  disabled={page === 1}
                  className="w-7 h-7 flex items-center justify-center rounded border border-gray-200 text-gray-500 hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  <ChevronLeft size={12} />
                </button>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                  <button
                    key={p}
                    onClick={() => setPage(p)}
                    className={`w-7 h-7 flex items-center justify-center rounded text-xs font-medium transition-colors ${
                      p === page
                        ? "bg-[#094D8A] text-white"
                        : "border border-gray-200 text-gray-600 hover:bg-gray-50"
                    }`}
                  >
                    {p}
                  </button>
                ))}
                <button
                  onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                  disabled={page === totalPages || totalPages === 0}
                  className="w-7 h-7 flex items-center justify-center rounded border border-gray-200 text-gray-500 hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  <ChevronRight size={12} />
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

// ─── Báo Cáo ──────────────────────────────────────────────────────────────
type DinhDangBaoCao = "Excel" | "PDF";

interface BaoCaoRow {
  id: number;
  ten: string;
  thoiGian: string;
  dinhDang: DinhDangBaoCao;
  ngayTao: string;
}

const BAO_CAO_DATA: BaoCaoRow[] = [
  { id: 1, ten: "Tổng hợp Mini App",  thoiGian: "Tháng 06/2026", dinhDang: "Excel", ngayTao: "26/06/2026 09:15" },
  { id: 2, ten: "Thống kê API",        thoiGian: "Tháng 06/2026", dinhDang: "Excel", ngayTao: "25/06/2026 14:30" },
  { id: 3, ten: "Doanh nghiệp",        thoiGian: "Quý II/2026",   dinhDang: "PDF",   ngayTao: "01/04/2026 08:20" },
  { id: 4, ten: "Developer",           thoiGian: "Năm 2026",      dinhDang: "Excel", ngayTao: "02/01/2026 09:00" },
];

function BaoCaoScreen({ onNavigate }: { onNavigate: (s: Screen) => void }) {
  const [loaiBaoCao, setLoaiBaoCao] = useState("all");
  const [thoiGian, setThoiGian] = useState("all");
  const [doanhNghiep, setDoanhNghiep] = useState("all");
  const [page, setPage] = useState(1);
  const rowsPerPage = 10;

  const allLoai    = Array.from(new Set(BAO_CAO_DATA.map((r) => r.ten)));
  const allThoiGian = Array.from(new Set(BAO_CAO_DATA.map((r) => r.thoiGian)));
  const allDN      = ["VHV Insurance", "Công ty ABC", "Tập đoàn XYZ"];

  const filtered = BAO_CAO_DATA.filter((r) => {
    const matchLoai     = loaiBaoCao === "all" || r.ten === loaiBaoCao;
    const matchThoiGian = thoiGian   === "all" || r.thoiGian === thoiGian;
    return matchLoai && matchThoiGian;
  });

  const totalPages = Math.max(1, Math.ceil(filtered.length / rowsPerPage));
  const paged = filtered.slice((page - 1) * rowsPerPage, page * rowsPerPage);

  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden" style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}>
      <Sidebar current="baoCao" onNavigate={onNavigate} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <TopBar title="Báo cáo" />
        <div className="flex-1 overflow-y-auto px-6 py-5">

          {/* Page header */}
          <div className="mb-5">
            <h2 className="text-xl font-semibold text-gray-900">Báo cáo</h2>
            <p className="text-xs text-gray-500 mt-0.5">Tổng hợp và xuất các báo cáo thống kê của nền tảng</p>
          </div>

          {/* Filter bar */}
          <div className="bg-white rounded-md border border-gray-100 shadow-sm px-4 py-3 mb-5 flex items-center gap-3 flex-wrap">
            <select
              value={loaiBaoCao}
              onChange={(e) => { setLoaiBaoCao(e.target.value); setPage(1); }}
              className="border border-gray-200 rounded px-3 py-2 text-xs text-gray-700 bg-white focus:outline-none focus:ring-1 focus:ring-[#094D8A] min-w-[160px]"
            >
              <option value="all">Loại báo cáo</option>
              {allLoai.map((l) => <option key={l} value={l}>{l}</option>)}
            </select>
            <select
              value={thoiGian}
              onChange={(e) => { setThoiGian(e.target.value); setPage(1); }}
              className="border border-gray-200 rounded px-3 py-2 text-xs text-gray-700 bg-white focus:outline-none focus:ring-1 focus:ring-[#094D8A] min-w-[160px]"
            >
              <option value="all">Thời gian</option>
              {allThoiGian.map((t) => <option key={t} value={t}>{t}</option>)}
            </select>
            <select
              value={doanhNghiep}
              onChange={(e) => { setDoanhNghiep(e.target.value); setPage(1); }}
              className="border border-gray-200 rounded px-3 py-2 text-xs text-gray-700 bg-white focus:outline-none focus:ring-1 focus:ring-[#094D8A] min-w-[160px]"
            >
              <option value="all">Doanh nghiệp</option>
              {allDN.map((d) => <option key={d} value={d}>{d}</option>)}
            </select>
            <div className="flex-1" />
            <button
              className="flex items-center gap-1.5 px-4 py-2 rounded text-white text-xs font-medium hover:opacity-90 transition-opacity shadow-sm"
              style={{ background: "linear-gradient(90deg, #094D8A, #094D8A)" }}
            >
              <Download size={13} />
              Xuất báo cáo
            </button>
          </div>

          {/* Report list section */}
          <div className="mb-3 flex items-center justify-between">
            <div>
              <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wide">Danh sách báo cáo</h3>
            </div>
            <span className="text-xs text-gray-400">{filtered.length} báo cáo</span>
          </div>

          <div className="bg-white rounded-md border border-gray-100 shadow-sm">
            <table className="w-full text-xs">
              <thead>
                <tr className="border-b border-gray-100 bg-gray-50/60">
                  <th className="text-left px-4 py-3 text-gray-500 font-semibold w-12">STT</th>
                  <th className="text-left px-4 py-3 text-gray-500 font-semibold">BÁO CÁO</th>
                  <th className="text-left px-4 py-3 text-gray-500 font-semibold">THỜI GIAN</th>
                  <th className="text-left px-4 py-3 text-gray-500 font-semibold">ĐỊNH DẠNG</th>
                  <th className="text-left px-4 py-3 text-gray-500 font-semibold">NGÀY TẠO</th>
                  <th className="text-left px-4 py-3 text-gray-500 font-semibold">THAO TÁC</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {paged.map((row, idx) => (
                  <tr key={row.id} className="hover:bg-gray-50/60 transition-colors">
                    <td className="px-4 py-3.5 text-gray-400">{(page - 1) * rowsPerPage + idx + 1}</td>
                    <td className="px-4 py-3.5">
                      <div className="flex items-center gap-2">
                        <div className="w-7 h-7 rounded flex items-center justify-center shrink-0"
                          style={{ background: row.dinhDang === "Excel" ? "#DCFCE7" : "#FEE2E2" }}>
                          <FileText size={13} style={{ color: row.dinhDang === "Excel" ? "#16A34A" : "#DC2626" }} />
                        </div>
                        <span className="font-medium text-gray-800">{row.ten}</span>
                      </div>
                    </td>
                    <td className="px-4 py-3.5 text-gray-600">{row.thoiGian}</td>
                    <td className="px-4 py-3.5">
                      <span className={`inline-flex items-center px-2 py-0.5 rounded text-[11px] font-medium ${
                        row.dinhDang === "Excel"
                          ? "bg-green-50 text-green-700"
                          : "bg-red-50 text-red-700"
                      }`}>
                        {row.dinhDang}
                      </span>
                    </td>
                    <td className="px-4 py-3.5 text-gray-600">{row.ngayTao}</td>
                    <td className="px-4 py-3.5">
                      <button className="flex items-center gap-1 px-2.5 py-1 rounded text-[11px] font-medium border border-[#D1E9FF] text-[#094D8A] bg-[#D1E9FF] hover:bg-[#D1E9FF] transition-colors">
                        <Download size={11} />
                        Tải xuống
                      </button>
                    </td>
                  </tr>
                ))}
                {paged.length === 0 && (
                  <tr>
                    <td colSpan={6} className="px-4 py-10 text-center text-gray-400">
                      Không có báo cáo nào phù hợp
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
            {totalPages > 1 && (
              <div className="flex items-center justify-between px-4 py-3 border-t border-gray-100">
                <span className="text-xs text-gray-500">
                  Hiển thị {(page - 1) * rowsPerPage + 1}–{Math.min(page * rowsPerPage, filtered.length)} / {filtered.length} báo cáo
                </span>
                <div className="flex items-center gap-1">
                  <button onClick={() => setPage((p) => Math.max(1, p - 1))} disabled={page === 1}
                    className="p-1.5 rounded text-gray-500 hover:bg-gray-100 disabled:opacity-30 transition-colors">
                    <ChevronLeft size={14} />
                  </button>
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                    <button key={p} onClick={() => setPage(p)}
                      className={`w-7 h-7 rounded text-xs font-medium transition-colors ${
                        p === page ? "bg-[#094D8A] text-white" : "text-gray-600 hover:bg-gray-100"
                      }`}>
                      {p}
                    </button>
                  ))}
                  <button onClick={() => setPage((p) => Math.min(totalPages, p + 1))} disabled={page === totalPages}
                    className="p-1.5 rounded text-gray-500 hover:bg-gray-100 disabled:opacity-30 transition-colors">
                    <ChevronRight size={14} />
                  </button>
                </div>
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}

// ─── Quản Lý Hệ Thống ────────────────────────────────────────────────────
type QuanLyTab = "tongQuan" | "baoMat" | "thongBao" | "nhatKy" | "saoluu";

interface NhatKyRow {
  id: number;
  thoiGian: string;
  nguoiThucHien: string;
  hanhDong: string;
  doiTuong: string;
  ip: string;
}

const NHAT_KY_DATA: NhatKyRow[] = [
  { id: 1, thoiGian: "26/06/2026 09:15", nguoiThucHien: "Nguyễn Admin", hanhDong: "Cập nhật cấu hình",   doiTuong: "Hệ thống",         ip: "192.168.1.1" },
  { id: 2, thoiGian: "26/06/2026 08:30", nguoiThucHien: "Trần Admin",   hanhDong: "Duyệt Mini App",      doiTuong: "Mini App #1023",   ip: "192.168.1.2" },
  { id: 3, thoiGian: "25/06/2026 16:45", nguoiThucHien: "Lê Admin",     hanhDong: "Khóa tài khoản",      doiTuong: "Developer #205",   ip: "10.0.0.5"    },
  { id: 4, thoiGian: "25/06/2026 14:20", nguoiThucHien: "Nguyễn Admin", hanhDong: "Tạo bản sao lưu",     doiTuong: "Hệ thống",         ip: "192.168.1.1" },
  { id: 5, thoiGian: "25/06/2026 11:10", nguoiThucHien: "Trần Admin",   hanhDong: "Từ chối đăng ký",     doiTuong: "Doanh nghiệp #88", ip: "192.168.1.2" },
  { id: 6, thoiGian: "24/06/2026 17:30", nguoiThucHien: "Phạm Admin",   hanhDong: "Phát hành API",       doiTuong: "API #45",          ip: "10.0.0.8"    },
  { id: 7, thoiGian: "24/06/2026 10:05", nguoiThucHien: "Lê Admin",     hanhDong: "Khôi phục dữ liệu",   doiTuong: "Hệ thống",         ip: "10.0.0.5"    },
  { id: 8, thoiGian: "23/06/2026 15:50", nguoiThucHien: "Nguyễn Admin", hanhDong: "Cập nhật thông báo",  doiTuong: "Cấu hình",         ip: "192.168.1.1" },
];

const QLHT_TABS: { key: QuanLyTab; label: string }[] = [
  { key: "tongQuan", label: "Tổng quan" },
  { key: "baoMat",   label: "Bảo mật" },
  { key: "thongBao", label: "Thông báo" },
  { key: "nhatKy",   label: "Nhật ký hệ thống" },
  { key: "saoluu",   label: "Sao lưu & Khôi phục" },
];

function Toggle({ value, onChange }: { value: boolean; onChange: () => void }) {
  return (
    <button
      onClick={onChange}
      className={`relative w-10 h-5 rounded-full transition-colors shrink-0 ${value ? "bg-[#094D8A]" : "bg-gray-200"}`}
    >
      <span className={`absolute top-0.5 left-0.5 w-4 h-4 bg-white rounded-full shadow transition-transform ${value ? "translate-x-5" : "translate-x-0"}`} />
    </button>
  );
}

function QuanLyHeThongScreen({ onNavigate }: { onNavigate: (s: Screen) => void }) {
  const [activeTab, setActiveTab] = useState<QuanLyTab>("tongQuan");

  const [tenHT,   setTenHT]   = useState("Nền tảng Mini App Giáo dục");
  const [emailHT, setEmailHT] = useState("support@platform.vn");
  const [hotline, setHotline] = useState("1900 1234");

  const [matKhauMin,    setMatKhauMin]    = useState(8);
  const [thoiGianPhien, setThoiGianPhien] = useState(30);
  const [xacThuc2B,     setXacThuc2B]     = useState(false);
  const [giHanLogin,    setGiHanLogin]    = useState(5);

  const [eDevDangKy,    setEDevDangKy]    = useState(true);
  const [eMiniAppDuyet, setEMiniAppDuyet] = useState(true);
  const [eApiPhatHanh,  setEApiPhatHanh]  = useState(false);
  const [thongBaoHT,    setThongBaoHT]    = useState(true);
  const [pushNotif,     setPushNotif]     = useState(false);

  const [nkPage,  setNkPage]  = useState(1);
  const nkPerPage = 6;
  const nkTotal   = Math.ceil(NHAT_KY_DATA.length / nkPerPage);
  const nkPaged   = NHAT_KY_DATA.slice((nkPage - 1) * nkPerPage, nkPage * nkPerPage);

  const [lichSaoluu, setLichSaoluu] = useState("daily");

  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden" style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}>
      <Sidebar current="quanLyHeThong" onNavigate={onNavigate} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <TopBar title="Quản lý hệ thống" />
        <div className="flex-1 overflow-y-auto px-6 py-5">

          <div className="mb-5">
            <h2 className="text-xl font-semibold text-gray-900">Quản lý hệ thống</h2>
            <p className="text-xs text-gray-400 mt-0.5">Cấu hình chung của nền tảng</p>
          </div>

          <div className="bg-white rounded-md border border-gray-100 shadow-sm overflow-hidden">

            {/* Tab bar */}
            <div className="flex border-b border-gray-100 px-4">
              {QLHT_TABS.map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`px-4 py-3 text-xs font-medium whitespace-nowrap transition-colors border-b-2 -mb-px ${
                    activeTab === tab.key
                      ? "border-[#094D8A] text-[#094D8A]"
                      : "border-transparent text-gray-500 hover:text-gray-700"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <div className="p-6">

              {/* ── Tab 1: Tổng quan ── */}
              {activeTab === "tongQuan" && (
                <div className="space-y-6">
                  <div>
                    <h3 className="text-sm font-semibold text-gray-700 mb-3">Thông tin hệ thống</h3>
                    <div className="grid grid-cols-2 gap-3">
                      {[
                        { label: "Tên hệ thống",       value: "Nền tảng Mini App Giáo dục" },
                        { label: "Phiên bản",           value: "v1.0.0" },
                        { label: "Môi trường",          value: "Production" },
                        { label: "Thời gian hoạt động", value: "32 ngày 18 giờ" },
                      ].map((info) => (
                        <div key={info.label} className="bg-gray-50 rounded px-4 py-4 border border-gray-100">
                          <div className="text-[11px] text-gray-500 mb-1">{info.label}</div>
                          <div className="text-sm font-semibold text-gray-800">{info.value}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="border-t border-gray-100" />

                  <div>
                    <h3 className="text-sm font-semibold text-gray-700 mb-3">Cấu hình chung</h3>
                    <div className="border border-gray-100 rounded-md overflow-hidden">
                      <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
                        <div>
                          <div className="text-xs font-medium text-gray-700">Tên hệ thống</div>
                          <div className="text-[11px] text-gray-400 mt-0.5">Tên hiển thị của nền tảng</div>
                        </div>
                        <input type="text" value={tenHT} onChange={(e) => setTenHT(e.target.value)}
                          className="w-60 px-3 py-2 text-xs border border-gray-200 rounded bg-white focus:outline-none focus:border-[#094D8A] transition-colors" />
                      </div>
                      <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
                        <div>
                          <div className="text-xs font-medium text-gray-700">Email hỗ trợ</div>
                          <div className="text-[11px] text-gray-400 mt-0.5">Địa chỉ email tiếp nhận yêu cầu</div>
                        </div>
                        <input type="email" value={emailHT} onChange={(e) => setEmailHT(e.target.value)}
                          className="w-60 px-3 py-2 text-xs border border-gray-200 rounded bg-white focus:outline-none focus:border-[#094D8A] transition-colors" />
                      </div>
                      <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
                        <div>
                          <div className="text-xs font-medium text-gray-700">Hotline</div>
                          <div className="text-[11px] text-gray-400 mt-0.5">Số điện thoại hỗ trợ</div>
                        </div>
                        <input type="text" value={hotline} onChange={(e) => setHotline(e.target.value)}
                          className="w-60 px-3 py-2 text-xs border border-gray-200 rounded bg-white focus:outline-none focus:border-[#094D8A] transition-colors" />
                      </div>
                      <div className="flex items-center justify-between px-5 py-4">
                        <div>
                          <div className="text-xs font-medium text-gray-700">Logo hệ thống</div>
                          <div className="text-[11px] text-gray-400 mt-0.5">PNG, SVG tối đa 2MB</div>
                        </div>
                        <button className="flex items-center gap-1.5 px-3 py-2 text-xs border border-gray-200 rounded bg-white text-gray-600 hover:bg-gray-50 transition-colors">
                          <Upload size={12} />
                          Chọn ảnh
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-end gap-3 pt-1">
                    <button className="px-4 py-2 text-xs font-medium border border-gray-200 rounded text-gray-600 hover:bg-gray-50 transition-colors">
                      Khôi phục mặc định
                    </button>
                    <button className="px-5 py-2 text-xs font-medium bg-[#094D8A] text-white rounded hover:bg-[#073A63] transition-colors">
                      Lưu
                    </button>
                  </div>
                </div>
              )}

              {/* ── Tab 2: Bảo mật ── */}
              {activeTab === "baoMat" && (
                <div className="space-y-6 max-w-2xl">
                  <h3 className="text-sm font-semibold text-gray-700">Cài đặt bảo mật</h3>
                  <div className="border border-gray-100 rounded-md overflow-hidden">
                    <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
                      <div>
                        <div className="text-xs font-medium text-gray-700">Mật khẩu tối thiểu</div>
                        <div className="text-[11px] text-gray-400 mt-0.5">Số ký tự tối thiểu cho mật khẩu</div>
                      </div>
                      <input type="number" min={6} max={32} value={matKhauMin}
                        onChange={(e) => setMatKhauMin(Number(e.target.value))}
                        className="w-24 px-3 py-2 text-xs border border-gray-200 rounded bg-white focus:outline-none focus:border-[#094D8A] text-center" />
                    </div>
                    <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
                      <div>
                        <div className="text-xs font-medium text-gray-700">Thời gian hết hạn phiên đăng nhập</div>
                        <div className="text-[11px] text-gray-400 mt-0.5">Tính bằng phút (0 = không giới hạn)</div>
                      </div>
                      <div className="flex items-center gap-2">
                        <input type="number" min={0} value={thoiGianPhien}
                          onChange={(e) => setThoiGianPhien(Number(e.target.value))}
                          className="w-24 px-3 py-2 text-xs border border-gray-200 rounded bg-white focus:outline-none focus:border-[#094D8A] text-center" />
                        <span className="text-xs text-gray-400">phút</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
                      <div>
                        <div className="text-xs font-medium text-gray-700">Xác thực 2 bước</div>
                        <div className="text-[11px] text-gray-400 mt-0.5">Bắt buộc OTP khi đăng nhập</div>
                      </div>
                      <Toggle value={xacThuc2B} onChange={() => setXacThuc2B((v) => !v)} />
                    </div>
                    <div className="flex items-center justify-between px-5 py-4">
                      <div>
                        <div className="text-xs font-medium text-gray-700">Giới hạn số lần đăng nhập sai</div>
                        <div className="text-[11px] text-gray-400 mt-0.5">Tài khoản bị khóa sau số lần này</div>
                      </div>
                      <input type="number" min={1} max={10} value={giHanLogin}
                        onChange={(e) => setGiHanLogin(Number(e.target.value))}
                        className="w-24 px-3 py-2 text-xs border border-gray-200 rounded bg-white focus:outline-none focus:border-[#094D8A] text-center" />
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <button className="px-5 py-2 text-xs font-medium bg-[#094D8A] text-white rounded hover:bg-[#073A63] transition-colors">
                      Lưu
                    </button>
                  </div>
                </div>
              )}

              {/* ── Tab 3: Thông báo ── */}
              {activeTab === "thongBao" && (
                <div className="space-y-6 max-w-2xl">
                  <div>
                    <h3 className="text-sm font-semibold text-gray-700 mb-3">Email</h3>
                    <div className="border border-gray-100 rounded-md overflow-hidden">
                      <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
                        <span className="text-xs font-medium text-gray-700">Gửi email khi Developer đăng ký</span>
                        <Toggle value={eDevDangKy} onChange={() => setEDevDangKy((v) => !v)} />
                      </div>
                      <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
                        <span className="text-xs font-medium text-gray-700">Gửi email khi Mini App được phê duyệt</span>
                        <Toggle value={eMiniAppDuyet} onChange={() => setEMiniAppDuyet((v) => !v)} />
                      </div>
                      <div className="flex items-center justify-between px-5 py-4">
                        <span className="text-xs font-medium text-gray-700">Gửi email khi API được phát hành</span>
                        <Toggle value={eApiPhatHanh} onChange={() => setEApiPhatHanh((v) => !v)} />
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-gray-700 mb-3">Mini App</h3>
                    <div className="border border-gray-100 rounded-md overflow-hidden">
                      <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
                        <span className="text-xs font-medium text-gray-700">Thông báo trong hệ thống</span>
                        <Toggle value={thongBaoHT} onChange={() => setThongBaoHT((v) => !v)} />
                      </div>
                      <div className="flex items-center justify-between px-5 py-4">
                        <span className="text-xs font-medium text-gray-700">Push Notification</span>
                        <Toggle value={pushNotif} onChange={() => setPushNotif((v) => !v)} />
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <button className="px-5 py-2 text-xs font-medium bg-[#094D8A] text-white rounded hover:bg-[#073A63] transition-colors">
                      Lưu
                    </button>
                  </div>
                </div>
              )}

              {/* ── Tab 4: Nhật ký hệ thống ── */}
              {activeTab === "nhatKy" && (
                <div>
                  <h3 className="text-sm font-semibold text-gray-700 mb-4">Nhật ký hệ thống</h3>
                  <div className="border border-gray-100 rounded-md overflow-hidden">
                    <table className="w-full text-xs">
                      <thead>
                        <tr className="border-b border-gray-100 bg-gray-50/60">
                          <th className="text-left px-4 py-3 text-gray-500 font-semibold w-36">THỜI GIAN</th>
                          <th className="text-left px-4 py-3 text-gray-500 font-semibold w-32">NGƯỜI THỰC HIỆN</th>
                          <th className="text-left px-4 py-3 text-gray-500 font-semibold">HÀNH ĐỘNG</th>
                          <th className="text-left px-4 py-3 text-gray-500 font-semibold">ĐỐI TƯỢNG</th>
                          <th className="text-left px-4 py-3 text-gray-500 font-semibold w-28">IP</th>
                          <th className="text-center px-4 py-3 text-gray-500 font-semibold w-20">CHI TIẾT</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-50">
                        {nkPaged.map((row) => (
                          <tr key={row.id} className="hover:bg-gray-50/60 transition-colors">
                            <td className="px-4 py-3.5 text-gray-500">{row.thoiGian}</td>
                            <td className="px-4 py-3.5 text-gray-800 font-medium">{row.nguoiThucHien}</td>
                            <td className="px-4 py-3.5 text-gray-700">{row.hanhDong}</td>
                            <td className="px-4 py-3.5 text-gray-500">{row.doiTuong}</td>
                            <td className="px-4 py-3.5 text-gray-500 font-mono text-[11px]">{row.ip}</td>
                            <td className="px-4 py-3.5 text-center">
                              <button className="px-2.5 py-1 text-[11px] font-medium text-[#094D8A] border border-[#D1E9FF] rounded hover:bg-[#D1E9FF] transition-colors">
                                Xem
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                    {nkTotal > 1 && (
                      <div className="flex items-center justify-between px-4 py-3 border-t border-gray-100">
                        <span className="text-xs text-gray-400">
                          Hiển thị {(nkPage - 1) * nkPerPage + 1}–{Math.min(nkPage * nkPerPage, NHAT_KY_DATA.length)} / {NHAT_KY_DATA.length} bản ghi
                        </span>
                        <div className="flex items-center gap-1">
                          <button onClick={() => setNkPage((p) => Math.max(1, p - 1))} disabled={nkPage === 1}
                            className="w-7 h-7 flex items-center justify-center rounded border border-gray-200 text-gray-500 hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed">
                            <ChevronLeft size={12} />
                          </button>
                          {Array.from({ length: nkTotal }, (_, i) => i + 1).map((p) => (
                            <button key={p} onClick={() => setNkPage(p)}
                              className={`w-7 h-7 flex items-center justify-center rounded text-xs font-medium transition-colors ${
                                p === nkPage ? "bg-[#094D8A] text-white" : "border border-gray-200 text-gray-600 hover:bg-gray-50"
                              }`}>
                              {p}
                            </button>
                          ))}
                          <button onClick={() => setNkPage((p) => Math.min(nkTotal, p + 1))} disabled={nkPage === nkTotal}
                            className="w-7 h-7 flex items-center justify-center rounded border border-gray-200 text-gray-500 hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed">
                            <ChevronRight size={12} />
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* ── Tab 5: Sao lưu & Khôi phục ── */}
              {activeTab === "saoluu" && (
                <div className="space-y-6 max-w-2xl">
                  <h3 className="text-sm font-semibold text-gray-700">Sao lưu & Khôi phục</h3>
                  <div className="border border-gray-100 rounded-md overflow-hidden">
                    <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
                      <div>
                        <div className="text-xs font-medium text-gray-700">Lần sao lưu gần nhất</div>
                        <div className="text-[11px] text-gray-400 mt-0.5">Tự động sao lưu lúc 02:00</div>
                      </div>
                      <span className="text-xs font-semibold text-gray-800">26/06/2026 02:00</span>
                    </div>
                    <div className="flex items-center justify-between px-5 py-4">
                      <div>
                        <div className="text-xs font-medium text-gray-700">Tự động sao lưu</div>
                        <div className="text-[11px] text-gray-400 mt-0.5">Tần suất sao lưu định kỳ</div>
                      </div>
                      <select value={lichSaoluu} onChange={(e) => setLichSaoluu(e.target.value)}
                        className="w-36 px-3 py-2 text-xs border border-gray-200 rounded bg-white text-gray-700 focus:outline-none focus:border-[#094D8A] appearance-none cursor-pointer"
                        style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%239CA3AF' stroke-width='2'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E\")", backgroundRepeat: "no-repeat", backgroundPosition: "right 8px center", paddingRight: "24px" }}>
                        <option value="hourly">Mỗi giờ</option>
                        <option value="daily">Hằng ngày</option>
                        <option value="weekly">Hằng tuần</option>
                        <option value="monthly">Hằng tháng</option>
                      </select>
                    </div>
                  </div>
                  <div className="flex items-center justify-end gap-3">
                    <button className="px-4 py-2 text-xs font-medium border border-gray-200 rounded text-gray-600 hover:bg-gray-50 transition-colors">
                      Khôi phục
                    </button>
                    <button className="px-4 py-2 text-xs font-medium border border-[#D1E9FF] rounded text-[#094D8A] hover:bg-[#D1E9FF] transition-colors">
                      Tạo bản sao lưu
                    </button>
                    <button className="px-5 py-2 text-xs font-medium bg-[#094D8A] text-white rounded hover:bg-[#073A63] transition-colors">
                      Lưu
                    </button>
                  </div>
                </div>
              )}

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}


// ─── Đơn vị sử dụng ────────────────────────────────────────────────────────

type TrangThaiDonVi = "Hoạt động" | "Tạm khóa" | "Ngừng hoạt động";
type LoaiDonViType = "Trường THPT" | "Trường THCS" | "Trường Tiểu học" | "Sở GD&ĐT" | "Phòng GD&ĐT";

interface DonViData {
  id: number;
  ten: string;
  maDonVi: string;
  loai: LoaiDonViType;
  tinhThanh: string;
  diaChi: string;
  nguoiDaiDien: string;
  email: string;
  dienThoai: string;
  ngayKichHoat: string;
  hanSuDung: string;
  miniApps: string[];
  trangThai: TrangThaiDonVi;
  nguoiDung: number;
}

interface InstalledMiniApp {
  id: number;
  ten: string;
  developer: string;
  phienBan: string;
  ngayCaiDat: string;
  trangThai: "Hoạt động" | "Tạm ngừng";
}

const DON_VI_STATUS_CONFIG: Record<TrangThaiDonVi, { label: string; color: string; bg: string }> = {
  "Hoạt động":      { label: "Hoạt động",      color: "#16A34A", bg: "#F0FDF4" },
  "Tạm khóa":       { label: "Tạm khóa",       color: "#2563EB", bg: "#EFF6FF" },
  "Ngừng hoạt động":{ label: "Ngừng hoạt động", color: "#6B7280", bg: "#F3F4F6" },
};

const DON_VI_DATA: DonViData[] = [
  { id: 1,  ten: "THPT Lê Quý Đôn",             maDonVi: "THPT-LQD-001", loai: "Trường THPT",     tinhThanh: "Hà Nội",    diaChi: "123 Nguyễn Trãi, Thanh Xuân, Hà Nội",      nguoiDaiDien: "Nguyễn Văn A",  email: "admin@lequydon.edu.vn",        dienThoai: "0243 888 8888", ngayKichHoat: "15/03/2026", hanSuDung: "15/03/2027", miniApps: ["Sổ liên lạc", "Điểm danh", "Học phí"],                                                                                                              trangThai: "Hoạt động",      nguoiDung: 2840 },
  { id: 2,  ten: "THCS Nguyễn Du",               maDonVi: "THCS-NJD-002", loai: "Trường THCS",     tinhThanh: "Đà Nẵng",   diaChi: "45 Trần Phú, Hải Châu, Đà Nẵng",          nguoiDaiDien: "Trần Thị B",    email: "admin@nguyendu.edu.vn",        dienThoai: "0236 777 6666", ngayKichHoat: "22/03/2026", hanSuDung: "22/03/2027", miniApps: ["Sổ liên lạc", "Khảo sát"],                                                                                                                   trangThai: "Hoạt động",      nguoiDung: 1250 },
  { id: 3,  ten: "Sở GD&ĐT Bình Dương",         maDonVi: "SGD-BD-003",   loai: "Sở GD&ĐT",       tinhThanh: "Bình Dương", diaChi: "Số 8 Yersin, Phú Cường, Bình Dương",       nguoiDaiDien: "Lê Văn C",      email: "contact@sgddt.binhduong.vn",   dienThoai: "0274 333 5555", ngayKichHoat: "08/11/2025", hanSuDung: "08/11/2026", miniApps: ["Quản lý văn bản", "Báo cáo", "Thống kê", "Điểm danh", "Sổ liên lạc", "Khảo sát", "Học phí", "Lịch công tác", "Thông báo"], trangThai: "Tạm khóa",       nguoiDung: 580  },
  { id: 4,  ten: "THPT Nguyễn Huệ",             maDonVi: "THPT-NH-004",  loai: "Trường THPT",     tinhThanh: "Huế",        diaChi: "12 Lê Lợi, Phú Hội, Huế",                 nguoiDaiDien: "Phạm Thị D",    email: "admin@nguyenhue.edu.vn",       dienThoai: "0234 555 9999", ngayKichHoat: "30/05/2026", hanSuDung: "30/05/2027", miniApps: ["Sổ liên lạc", "Học phí", "Điểm danh", "Khảo sát"],                                                                                          trangThai: "Hoạt động",      nguoiDung: 3200 },
  { id: 5,  ten: "Tiểu học Đinh Tiên Hoàng",    maDonVi: "TH-DTH-005",   loai: "Trường Tiểu học", tinhThanh: "TP.HCM",     diaChi: "78 Đinh Tiên Hoàng, Bình Thạnh, TP.HCM",  nguoiDaiDien: "Hoàng Văn E",   email: "admin@dinhtienhoang.edu.vn",   dienThoai: "0283 666 4444", ngayKichHoat: "10/04/2026", hanSuDung: "10/04/2027", miniApps: ["Sổ liên lạc", "Điểm danh"],                                                                                                                  trangThai: "Hoạt động",      nguoiDung: 1890 },
  { id: 6,  ten: "THCS Trần Phú",               maDonVi: "THCS-TP-006",  loai: "Trường THCS",     tinhThanh: "Hải Phòng",  diaChi: "56 Trần Phú, Ngô Quyền, Hải Phòng",       nguoiDaiDien: "Ngô Thị F",     email: "admin@tranphu.edu.vn",         dienThoai: "0225 444 7777", ngayKichHoat: "15/02/2026", hanSuDung: "15/02/2027", miniApps: ["Sổ liên lạc", "Học phí", "Khảo sát"],                                                                                                        trangThai: "Hoạt động",      nguoiDung: 1640 },
  { id: 7,  ten: "Phòng GD&ĐT Quận 1",         maDonVi: "PGD-Q1-007",   loai: "Phòng GD&ĐT",    tinhThanh: "TP.HCM",     diaChi: "11 Đinh Tiên Hoàng, Quận 1, TP.HCM",      nguoiDaiDien: "Vũ Văn G",      email: "pgddt.quan1@hcm.edu.vn",       dienThoai: "0283 822 3344", ngayKichHoat: "05/06/2026", hanSuDung: "05/06/2027", miniApps: ["Quản lý văn bản", "Thông báo", "Báo cáo"],                                                                                               trangThai: "Hoạt động",      nguoiDung: 320  },
  { id: 8,  ten: "THPT Chu Văn An",             maDonVi: "THPT-CVA-008", loai: "Trường THPT",     tinhThanh: "Hà Nội",     diaChi: "10 Thụy Khuê, Tây Hồ, Hà Nội",            nguoiDaiDien: "Đặng Thị H",    email: "admin@chuvan.edu.vn",          dienThoai: "0243 911 2233", ngayKichHoat: "01/03/2026", hanSuDung: "01/03/2027", miniApps: ["Sổ liên lạc", "Điểm danh", "Học phí", "Khảo sát"],                                                                                          trangThai: "Hoạt động",      nguoiDung: 4100 },
  { id: 9,  ten: "THCS Lý Tự Trọng",           maDonVi: "THCS-LTT-009", loai: "Trường THCS",     tinhThanh: "Cần Thơ",    diaChi: "99 Trần Hưng Đạo, Ninh Kiều, Cần Thơ",    nguoiDaiDien: "Bùi Văn I",     email: "admin@lytutrong.edu.vn",       dienThoai: "0292 555 1122", ngayKichHoat: "20/01/2026", hanSuDung: "20/01/2027", miniApps: ["Sổ liên lạc"],                                                                                                                       trangThai: "Tạm khóa",       nguoiDung: 870  },
  { id: 10, ten: "Sở GD&ĐT Nghệ An",           maDonVi: "SGD-NA-010",   loai: "Sở GD&ĐT",       tinhThanh: "Nghệ An",    diaChi: "16 Trường Thi, Vinh, Nghệ An",             nguoiDaiDien: "Phan Thị J",    email: "contact@sgddt.nghean.vn",      dienThoai: "0238 888 0011", ngayKichHoat: "12/04/2026", hanSuDung: "12/04/2027", miniApps: ["Quản lý văn bản", "Thông báo", "Báo cáo", "Thống kê"],                                                                                       trangThai: "Hoạt động",      nguoiDung: 750  },
  { id: 11, ten: "Tiểu học Nguyễn Bỉnh Khiêm", maDonVi: "TH-NBK-011",   loai: "Trường Tiểu học", tinhThanh: "Đà Nẵng",   diaChi: "32 Nguyễn Bỉnh Khiêm, Sơn Trà, Đà Nẵng", nguoiDaiDien: "Trương Văn K",  email: "admin@nguyenbinhkhiem.edu.vn", dienThoai: "0236 333 8899", ngayKichHoat: "18/05/2026", hanSuDung: "18/05/2027", miniApps: ["Sổ liên lạc", "Điểm danh", "Học phí"],                                                                                               trangThai: "Hoạt động",      nguoiDung: 2100 },
  { id: 12, ten: "THPT Trần Hưng Đạo",         maDonVi: "THPT-THD-012", loai: "Trường THPT",     tinhThanh: "Hà Nội",     diaChi: "5 Lý Thường Kiệt, Hoàn Kiếm, Hà Nội",     nguoiDaiDien: "Lý Thị L",      email: "admin@tranhungdao.edu.vn",     dienThoai: "0243 100 2200", ngayKichHoat: "25/02/2026", hanSuDung: "25/02/2027", miniApps: ["Sổ liên lạc", "Học phí"],                                                                                                            trangThai: "Hoạt động",      nguoiDung: 2750 },
  { id: 13, ten: "THCS Kim Đồng",              maDonVi: "THCS-KD-013",  loai: "Trường THCS",     tinhThanh: "TP.HCM",     diaChi: "88 Kim Đồng, Gò Vấp, TP.HCM",             nguoiDaiDien: "Đinh Văn M",    email: "admin@kimdong.edu.vn",         dienThoai: "0283 777 5566", ngayKichHoat: "07/03/2026", hanSuDung: "07/03/2027", miniApps: ["Sổ liên lạc", "Khảo sát", "Điểm danh"],                                                                                                      trangThai: "Hoạt động",      nguoiDung: 1480 },
  { id: 14, ten: "Tiểu học Bạch Đằng",         maDonVi: "TH-BD-014",    loai: "Trường Tiểu học", tinhThanh: "Hải Phòng",  diaChi: "21 Bạch Đằng, Hồng Bàng, Hải Phòng",      nguoiDaiDien: "Hồ Thị N",      email: "admin@bachdang.edu.vn",        dienThoai: "0225 600 7788", ngayKichHoat: "14/01/2026", hanSuDung: "14/01/2027", miniApps: ["Sổ liên lạc"],                                                                                                                       trangThai: "Tạm khóa",       nguoiDung: 960  },
  { id: 15, ten: "Phòng GD&ĐT Hải Châu",      maDonVi: "PGD-HC-015",   loai: "Phòng GD&ĐT",    tinhThanh: "Đà Nẵng",   diaChi: "77 Lê Đình Lý, Hải Châu, Đà Nẵng",        nguoiDaiDien: "Cao Văn O",     email: "pgddt.haichau@danang.edu.vn",  dienThoai: "0236 222 9900", ngayKichHoat: "02/06/2026", hanSuDung: "02/06/2027", miniApps: ["Quản lý văn bản", "Thông báo"],                                                                                                       trangThai: "Hoạt động",      nguoiDung: 210  },
];

const INSTALLED_MINI_APPS: Record<number, InstalledMiniApp[]> = {
  1: [
    { id: 1, ten: "Sổ liên lạc điện tử", developer: "FPT Software", phienBan: "v2.1.0", ngayCaiDat: "20/03/2026", trangThai: "Hoạt động" },
    { id: 2, ten: "Điểm danh",           developer: "VNPT",         phienBan: "v1.5.2", ngayCaiDat: "21/03/2026", trangThai: "Hoạt động" },
    { id: 3, ten: "Học phí",             developer: "CMC",          phienBan: "v1.0.3", ngayCaiDat: "22/03/2026", trangThai: "Hoạt động" },
  ],
  2: [
    { id: 1, ten: "Sổ liên lạc điện tử", developer: "FPT Software", phienBan: "v2.1.0", ngayCaiDat: "10/04/2026", trangThai: "Hoạt động" },
    { id: 2, ten: "Khảo sát",            developer: "Viettel",      phienBan: "v1.2.0", ngayCaiDat: "12/04/2026", trangThai: "Hoạt động" },
  ],
  3: [
    { id: 1, ten: "Quản lý văn bản", developer: "VNPT",         phienBan: "v3.0.1", ngayCaiDat: "01/11/2025", trangThai: "Tạm ngừng" },
    { id: 2, ten: "Báo cáo",         developer: "FPT Software", phienBan: "v2.0.0", ngayCaiDat: "02/11/2025", trangThai: "Tạm ngừng" },
    { id: 3, ten: "Thống kê",        developer: "CMC",          phienBan: "v1.1.0", ngayCaiDat: "03/11/2025", trangThai: "Tạm ngừng" },
    { id: 4, ten: "Điểm danh",       developer: "VNPT",         phienBan: "v1.5.2", ngayCaiDat: "04/11/2025", trangThai: "Tạm ngừng" },
    { id: 5, ten: "Sổ liên lạc",     developer: "FPT Software", phienBan: "v2.1.0", ngayCaiDat: "05/11/2025", trangThai: "Tạm ngừng" },
    { id: 6, ten: "Khảo sát",        developer: "Viettel",      phienBan: "v1.2.0", ngayCaiDat: "06/11/2025", trangThai: "Tạm ngừng" },
    { id: 7, ten: "Học phí",         developer: "CMC",          phienBan: "v1.0.3", ngayCaiDat: "07/11/2025", trangThai: "Tạm ngừng" },
    { id: 8, ten: "Lịch công tác",   developer: "VNPT",         phienBan: "v1.0.0", ngayCaiDat: "08/11/2025", trangThai: "Tạm ngừng" },
    { id: 9, ten: "Thông báo",       developer: "Viettel",      phienBan: "v2.0.1", ngayCaiDat: "09/11/2025", trangThai: "Tạm ngừng" },
  ],
  4: [
    { id: 1, ten: "Sổ liên lạc điện tử", developer: "FPT Software", phienBan: "v2.1.0", ngayCaiDat: "01/06/2026", trangThai: "Hoạt động" },
    { id: 2, ten: "Học phí",             developer: "CMC",          phienBan: "v1.0.3", ngayCaiDat: "02/06/2026", trangThai: "Hoạt động" },
    { id: 3, ten: "Điểm danh",           developer: "VNPT",         phienBan: "v1.5.2", ngayCaiDat: "03/06/2026", trangThai: "Hoạt động" },
    { id: 4, ten: "Khảo sát",            developer: "Viettel",      phienBan: "v1.2.0", ngayCaiDat: "04/06/2026", trangThai: "Hoạt động" },
  ],
};

const INSTALL_HISTORY: Record<number, { thoiGian: string; miniApp: string; phienBan: string; suKien: string }[]> = {
  1: [
    { thoiGian: "22/03/2026", miniApp: "Học phí",             phienBan: "v1.0.3", suKien: "Cài đặt Mini App" },
    { thoiGian: "21/03/2026", miniApp: "Điểm danh",           phienBan: "v1.5.2", suKien: "Cài đặt Mini App" },
    { thoiGian: "20/03/2026", miniApp: "Sổ liên lạc điện tử", phienBan: "v2.1.0", suKien: "Cài đặt Mini App" },
  ],
  2: [
    { thoiGian: "12/04/2026", miniApp: "Khảo sát",            phienBan: "v1.2.0", suKien: "Cài đặt Mini App" },
    { thoiGian: "10/04/2026", miniApp: "Sổ liên lạc điện tử", phienBan: "v2.1.0", suKien: "Cài đặt Mini App" },
  ],
  3: [
    { thoiGian: "09/11/2025", miniApp: "Thông báo",       phienBan: "v2.0.1", suKien: "Cài đặt Mini App" },
    { thoiGian: "08/11/2025", miniApp: "Lịch công tác",   phienBan: "v1.0.0", suKien: "Cài đặt Mini App" },
    { thoiGian: "07/11/2025", miniApp: "Học phí",         phienBan: "v1.0.3", suKien: "Cài đặt Mini App" },
    { thoiGian: "06/11/2025", miniApp: "Khảo sát",        phienBan: "v1.2.0", suKien: "Cài đặt Mini App" },
    { thoiGian: "05/11/2025", miniApp: "Sổ liên lạc",     phienBan: "v2.1.0", suKien: "Cài đặt Mini App" },
    { thoiGian: "04/11/2025", miniApp: "Điểm danh",       phienBan: "v1.5.2", suKien: "Cài đặt Mini App" },
    { thoiGian: "03/11/2025", miniApp: "Thống kê",        phienBan: "v1.1.0", suKien: "Cài đặt Mini App" },
    { thoiGian: "02/11/2025", miniApp: "Báo cáo",         phienBan: "v2.0.0", suKien: "Cài đặt Mini App" },
    { thoiGian: "01/11/2025", miniApp: "Quản lý văn bản", phienBan: "v3.0.1", suKien: "Cài đặt Mini App" },
  ],
  4: [
    { thoiGian: "04/06/2026", miniApp: "Khảo sát",            phienBan: "v1.2.0", suKien: "Cài đặt Mini App" },
    { thoiGian: "03/06/2026", miniApp: "Điểm danh",           phienBan: "v1.5.2", suKien: "Cài đặt Mini App" },
    { thoiGian: "02/06/2026", miniApp: "Học phí",             phienBan: "v1.0.3", suKien: "Cài đặt Mini App" },
    { thoiGian: "01/06/2026", miniApp: "Sổ liên lạc điện tử", phienBan: "v2.1.0", suKien: "Cài đặt Mini App" },
  ],
};

const LOAI_DON_VI_OPTIONS = [
  { value: "all",             label: "Loại đơn vị"    },
  { value: "Trường THPT",    label: "Trường THPT"    },
  { value: "Trường THCS",    label: "Trường THCS"    },
  { value: "Trường Tiểu học",label: "Trường Tiểu học"},
  { value: "Sở GD&ĐT",      label: "Sở GD&ĐT"      },
  { value: "Phòng GD&ĐT",   label: "Phòng GD&ĐT"   },
];

const TINH_THANH_OPTIONS = [
  { value: "all",        label: "Tỉnh/Thành" },
  { value: "Hà Nội",    label: "Hà Nội"     },
  { value: "TP.HCM",    label: "TP.HCM"     },
  { value: "Đà Nẵng",   label: "Đà Nẵng"    },
  { value: "Hải Phòng", label: "Hải Phòng"  },
  { value: "Huế",       label: "Huế"        },
  { value: "Bình Dương",label: "Bình Dương" },
  { value: "Cần Thơ",   label: "Cần Thơ"   },
  { value: "Nghệ An",   label: "Nghệ An"    },
];

const MINI_APP_FILTER_OPTIONS = [
  { value: "all",              label: "Mini App"         },
  { value: "Sổ liên lạc",     label: "Sổ liên lạc"     },
  { value: "Điểm danh",       label: "Điểm danh"       },
  { value: "Học phí",         label: "Học phí"         },
  { value: "Khảo sát",        label: "Khảo sát"        },
  { value: "Quản lý văn bản", label: "Quản lý văn bản" },
  { value: "Thông báo",       label: "Thông báo"       },
  { value: "Báo cáo",         label: "Báo cáo"         },
  { value: "Thống kê",        label: "Thống kê"        },
  { value: "Lịch công tác",   label: "Lịch công tác"   },
];

const TRANG_THAI_DON_VI_OPTIONS = [
  { value: "all",        label: "Trạng thái" },
  { value: "Hoạt động", label: "Hoạt động"  },
  { value: "Tạm khóa",  label: "Tạm khóa"  },
];

function DonViSuDungScreen({
  onNavigate,
  donViData,
  onViewDetail,
}: {
  onNavigate: (s: Screen) => void;
  donViData: DonViData[];
  onViewDetail: (id: number) => void;
}) {
  const [search, setSearch]             = useState("");
  const [loaiFilter, setLoaiFilter]     = useState("all");
  const [tinhFilter, setTinhFilter]     = useState("all");
  const [appFilter, setAppFilter]       = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");
  const [page, setPage] = useState(1);
  const rowsPerPage = 8;

  const resetPage = () => setPage(1);

  const filtered = donViData.filter((d) => {
    const q = search.toLowerCase();
    const matchSearch  = q === "" || d.ten.toLowerCase().includes(q) || d.tinhThanh.toLowerCase().includes(q);
    const matchLoai    = loaiFilter === "all" || d.loai === loaiFilter;
    const matchTinh    = tinhFilter === "all" || d.tinhThanh === tinhFilter;
    const matchApp     = appFilter  === "all" || d.miniApps.includes(appFilter);
    const matchStatus  = statusFilter === "all" || d.trangThai === statusFilter;
    return matchSearch && matchLoai && matchTinh && matchApp && matchStatus;
  });

  const totalPages = Math.ceil(filtered.length / rowsPerPage);
  const paged = filtered.slice((page - 1) * rowsPerPage, page * rowsPerPage);

  const selectCls =
    "h-10 pl-4 pr-9 text-sm border border-gray-200 rounded bg-white text-gray-600 " +
    "focus:outline-none focus:border-[#094D8A] transition-colors shadow-sm appearance-none cursor-pointer";

  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden" style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}>
      <Sidebar current="donViSuDung" onNavigate={onNavigate} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <TopBar title="Đơn vị sử dụng" />
        <div className="flex-1 overflow-y-auto px-8 py-6">

          {/* Page header */}
          <div className="mb-6">
            <h2 className="text-2xl font-semibold text-gray-900">Đơn vị sử dụng</h2>
            <p className="text-sm text-gray-400 mt-1">
              Quản lý các đơn vị đã cài đặt và đang sử dụng Mini App trên nền tảng
            </p>
          </div>

          {/* Stat cards */}
          <div className="grid grid-cols-5 gap-5 mb-6">
            {[
              { label: "Tổng đơn vị",          value: "326",     color: "#1F2937" },
              { label: "Đang hoạt động",        value: "315",     color: "#16A34A" },
              { label: "Mini App đã cài",       value: "1.248",   color: "#094D8A" },
              { label: "Người dùng",            value: "528.614", color: "#1F2937" },
              { label: "Mini App/Đơn vị (TB)",  value: "3.8",     color: "#D97706" },
            ].map((s) => (
              <div key={s.label} className="bg-white rounded border border-gray-100 shadow-sm px-6 py-5">
                <div className="text-sm text-gray-500 mb-2">{s.label}</div>
                <div className="text-3xl font-semibold" style={{ color: s.color }}>{s.value}</div>
              </div>
            ))}
          </div>

          {/* Search + Filter bar */}
          <div className="bg-white rounded border border-gray-100 shadow-sm px-5 py-4 mb-5 flex items-center gap-3 flex-wrap">
            <div className="relative flex-1 min-w-[200px]">
              <Search size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Tìm đơn vị..."
                value={search}
                onChange={(e) => { setSearch(e.target.value); resetPage(); }}
                className="w-full h-10 pl-10 pr-4 text-sm border border-gray-200 rounded bg-white placeholder-gray-400 focus:outline-none focus:border-[#094D8A] transition-colors shadow-sm"
              />
            </div>

            {[
              { options: LOAI_DON_VI_OPTIONS,      value: loaiFilter,   set: setLoaiFilter   },
              { options: TINH_THANH_OPTIONS,        value: tinhFilter,   set: setTinhFilter   },
              { options: MINI_APP_FILTER_OPTIONS,   value: appFilter,    set: setAppFilter    },
              { options: TRANG_THAI_DON_VI_OPTIONS, value: statusFilter, set: setStatusFilter },
            ].map(({ options, value, set }) => (
              <div key={options[0].label} className="relative">
                <select
                  value={value}
                  onChange={(e) => { set(e.target.value); resetPage(); }}
                  className={selectCls}
                >
                  {options.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
                </select>
                <ChevronDown size={13} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
              </div>
            ))}

            <button className="ml-auto flex items-center gap-2 h-10 px-4 text-sm font-medium border border-gray-200 rounded text-gray-600 hover:bg-gray-50 transition-colors shrink-0">
              <Download size={14} />
              Xuất Excel
            </button>
          </div>

          {/* Table */}
          <div className="bg-white rounded border border-gray-100 shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-100 bg-gray-50/60">
                    <th className="text-left px-5 py-4 text-gray-500 font-semibold w-14">STT</th>
                    <th className="text-left px-5 py-4 text-gray-500 font-semibold">ĐƠN VỊ</th>
                    <th className="text-left px-5 py-4 text-gray-500 font-semibold w-40">LOẠI</th>
                    <th className="text-left px-5 py-4 text-gray-500 font-semibold w-32">ĐỊA PHƯƠNG</th>
                    <th className="text-left px-5 py-4 text-gray-500 font-semibold w-56">MINI APP ĐANG SỬ DỤNG</th>
                    <th className="text-center px-5 py-4 text-gray-500 font-semibold w-32">TRẠNG THÁI</th>
                    <th className="text-center px-5 py-4 text-gray-500 font-semibold w-28">THAO TÁC</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {paged.map((row, idx) => {
                    const st = DON_VI_STATUS_CONFIG[row.trangThai];
                    const extra = row.miniApps.length - 1;
                    return (
                      <tr key={row.id} className="hover:bg-gray-50/60 transition-colors">
                        <td className="px-5 py-4 text-gray-500">{(page - 1) * rowsPerPage + idx + 1}</td>
                        <td className="px-5 py-4">
                          <div className="font-semibold text-gray-800">{row.ten}</div>
                          <div className="text-xs text-gray-400 mt-0.5">
                            {row.nguoiDung.toLocaleString("vi-VN")} người dùng
                          </div>
                        </td>
                        <td className="px-5 py-4 text-gray-600">{row.loai}</td>
                        <td className="px-5 py-4 text-gray-600">{row.tinhThanh}</td>
                        <td className="px-5 py-4">
                          <div className="text-gray-700">{row.miniApps[0]}</div>
                          {extra > 0 && (
                            <span className="inline-flex items-center mt-1 px-2 py-0.5 rounded text-xs font-medium bg-[#D1E9FF] text-[#094D8A]">
                              +{extra} khác
                            </span>
                          )}
                        </td>
                        <td className="px-5 py-4 text-center">
                          <span
                            className="inline-flex items-center px-3 py-1.5 rounded text-xs font-medium"
                            style={{ color: st.color, background: st.bg }}
                          >
                            {st.label}
                          </span>
                        </td>
                        <td className="px-5 py-4 text-center">
                          <button
                            onClick={() => onViewDetail(row.id)}
                            className="px-4 py-2 text-sm font-medium border border-gray-200 rounded text-gray-600 hover:bg-gray-50 transition-colors"
                          >
                            Xem
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                  {paged.length === 0 && (
                    <tr>
                      <td colSpan={7} className="px-5 py-12 text-center text-gray-400">Không có dữ liệu</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-between px-5 py-4 border-t border-gray-100">
              <span className="text-sm text-gray-400">
                Hiển thị {Math.min((page - 1) * rowsPerPage + 1, filtered.length)}–{Math.min(page * rowsPerPage, filtered.length)} / {filtered.length} đơn vị
              </span>
              <div className="flex items-center gap-1.5">
                <button
                  onClick={() => setPage((p) => Math.max(1, p - 1))}
                  disabled={page === 1}
                  className="w-9 h-9 flex items-center justify-center rounded border border-gray-200 text-gray-500 hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  <ChevronLeft size={14} />
                </button>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                  <button
                    key={p}
                    onClick={() => setPage(p)}
                    className={`w-9 h-9 flex items-center justify-center rounded text-sm font-medium transition-colors ${
                      p === page ? "bg-[#094D8A] text-white" : "border border-gray-200 text-gray-600 hover:bg-gray-50"
                    }`}
                  >
                    {p}
                  </button>
                ))}
                <button
                  onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                  disabled={page === totalPages || totalPages === 0}
                  className="w-9 h-9 flex items-center justify-center rounded border border-gray-200 text-gray-500 hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  <ChevronRight size={14} />
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

// ─── Chi tiết đơn vị sử dụng ───────────────────────────────────────────────

function ChiTietDonViSuDungScreen({
  donViId,
  donViData,
  onBack,
  onNavigate,
  onStatusChange,
}: {
  donViId: number;
  donViData: DonViData[];
  onBack: () => void;
  onNavigate: (s: Screen) => void;
  onStatusChange: (id: number, status: TrangThaiDonVi) => void;
}) {
  const donVi = donViData.find((d) => d.id === donViId)!;
  const [activeTab, setActiveTab] = useState<"tongquan" | "miniapp" | "thongke">("tongquan");
  const [showStopModal, setShowStopModal]         = useState(false);
  const [showActivateModal, setShowActivateModal] = useState(false);
  const [appSearch, setAppSearch]                 = useState("");
  const [appStatusFilter, setAppStatusFilter]     = useState("all");

  const installedApps = INSTALLED_MINI_APPS[donViId] || [];
  const installHistory = INSTALL_HISTORY[donViId]    || [];

  const filteredApps = installedApps.filter((a) => {
    const q = appSearch.toLowerCase();
    const matchSearch = q === "" || a.ten.toLowerCase().includes(q) || a.developer.toLowerCase().includes(q);
    const matchStatus = appStatusFilter === "all" || a.trangThai === appStatusFilter;
    return matchSearch && matchStatus;
  });

  const st = DON_VI_STATUS_CONFIG[donVi.trangThai];

  const handleStop = () => {
    onStatusChange(donViId, "Ngừng hoạt động");
    setShowStopModal(false);
  };
  const handleActivate = () => {
    onStatusChange(donViId, "Hoạt động");
    setShowActivateModal(false);
  };

  const TABS = [
    { key: "tongquan", label: "Tổng quan" },
    { key: "miniapp",  label: "Mini App đã cài đặt" },
    { key: "thongke",  label: "Thống kê" },
  ];

  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden" style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}>
      <Sidebar current="donViSuDung" onNavigate={onNavigate} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <TopBar title="Chi tiết đơn vị sử dụng" />
        <div className="flex-1 overflow-y-auto px-8 py-6">

          {/* Back */}
          <button
            onClick={onBack}
            className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-700 mb-5 transition-colors"
          >
            <ChevronLeft size={16} />
            Quay lại
          </button>

          {/* Title row */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-4">
              <h2 className="text-2xl font-semibold text-gray-900">{donVi.ten}</h2>
              <span
                className="inline-flex items-center px-3 py-1.5 rounded text-sm font-medium"
                style={{ color: st.color, background: st.bg }}
              >
                {st.label}
              </span>
            </div>
            {donVi.trangThai !== "Ngừng hoạt động" ? (
              <button
                onClick={() => setShowStopModal(true)}
                className="px-4 py-2.5 text-sm font-medium border border-red-200 text-red-600 rounded hover:bg-red-50 transition-colors"
              >
                Ngừng hoạt động
              </button>
            ) : (
              <button
                onClick={() => setShowActivateModal(true)}
                className="px-4 py-2.5 text-sm font-medium bg-[#094D8A] text-white rounded hover:bg-[#073A63] transition-colors"
              >
                Kích hoạt lại
              </button>
            )}
          </div>

          {/* Tabs */}
          <div className="flex border-b border-gray-200 mb-6">
            {TABS.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key as typeof activeTab)}
                className={`px-5 py-3 text-sm font-semibold transition-colors border-b-2 -mb-px ${
                  activeTab === tab.key
                    ? "border-[#094D8A] text-[#094D8A]"
                    : "border-transparent text-gray-500 hover:text-gray-700"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* ── Tab: Tổng quan ── */}
          {activeTab === "tongquan" && (
            <div className="bg-white rounded border border-gray-100 shadow-sm">
              <div className="px-6 py-4 border-b border-gray-100">
                <h3 className="font-semibold text-gray-700 tracking-wide">THÔNG TIN ĐƠN VỊ</h3>
              </div>
              <div className="px-6 py-5 grid grid-cols-2 gap-x-16 gap-y-5">
                {[
                  { label: "Tên đơn vị",     value: donVi.ten          },
                  { label: "Mã đơn vị",      value: donVi.maDonVi      },
                  { label: "Loại đơn vị",    value: donVi.loai         },
                  { label: "Địa phương",     value: donVi.tinhThanh    },
                  { label: "Địa chỉ",        value: donVi.diaChi       },
                  { label: "Người đại diện", value: donVi.nguoiDaiDien },
                  { label: "Email",          value: donVi.email        },
                  { label: "Điện thoại",     value: donVi.dienThoai    },
                  { label: "Ngày kích hoạt", value: donVi.ngayKichHoat },
                  { label: "Hạn sử dụng",   value: donVi.hanSuDung    },
                  { label: "Trạng thái",     value: donVi.trangThai    },
                ].map((row) => (
                  <div key={row.label} className="flex items-start gap-4">
                    <span className="text-sm text-gray-500 w-36 shrink-0">{row.label}</span>
                    <span className="text-sm text-gray-800 font-medium">{row.value}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ── Tab: Mini App đã cài đặt ── */}
          {activeTab === "miniapp" && (
            <div className="space-y-4">
              <div className="bg-white rounded border border-gray-100 shadow-sm px-5 py-4 flex items-center gap-3">
                <div className="relative flex-1">
                  <Search size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Tìm Mini App..."
                    value={appSearch}
                    onChange={(e) => setAppSearch(e.target.value)}
                    className="w-full h-10 pl-10 pr-4 text-sm border border-gray-200 rounded bg-white placeholder-gray-400 focus:outline-none focus:border-[#094D8A] transition-colors"
                  />
                </div>
                <div className="relative">
                  <select
                    value={appStatusFilter}
                    onChange={(e) => setAppStatusFilter(e.target.value)}
                    className="h-10 pl-4 pr-9 text-sm border border-gray-200 rounded bg-white text-gray-600 focus:outline-none focus:border-[#094D8A] appearance-none cursor-pointer"
                  >
                    <option value="all">Trạng thái</option>
                    <option value="Hoạt động">Hoạt động</option>
                    <option value="Tạm ngừng">Tạm ngừng</option>
                  </select>
                  <ChevronDown size={13} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                </div>
              </div>

              <div className="bg-white rounded border border-gray-100 shadow-sm">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-gray-100 bg-gray-50/60">
                        <th className="text-left px-5 py-4 text-gray-500 font-semibold w-14">STT</th>
                        <th className="text-left px-5 py-4 text-gray-500 font-semibold">MINI APP</th>
                        <th className="text-left px-5 py-4 text-gray-500 font-semibold w-36">DEVELOPER</th>
                        <th className="text-left px-5 py-4 text-gray-500 font-semibold w-28">PHIÊN BẢN</th>
                        <th className="text-left px-5 py-4 text-gray-500 font-semibold w-32">NGÀY CÀI ĐẶT</th>
                        <th className="text-center px-5 py-4 text-gray-500 font-semibold w-28">TRẠNG THÁI</th>
                        <th className="text-center px-5 py-4 text-gray-500 font-semibold w-24">THAO TÁC</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      {filteredApps.map((app, idx) => (
                        <tr key={app.id} className="hover:bg-gray-50/60 transition-colors">
                          <td className="px-5 py-4 text-gray-500">{idx + 1}</td>
                          <td className="px-5 py-4 font-medium text-gray-800">{app.ten}</td>
                          <td className="px-5 py-4 text-gray-600">{app.developer}</td>
                          <td className="px-5 py-4 text-gray-600">{app.phienBan}</td>
                          <td className="px-5 py-4 text-gray-600">{app.ngayCaiDat}</td>
                          <td className="px-5 py-4 text-center">
                            <span className={`inline-flex items-center px-3 py-1.5 rounded text-xs font-medium ${
                              app.trangThai === "Hoạt động"
                                ? "bg-green-50 text-green-700"
                                : "bg-gray-100 text-gray-500"
                            }`}>
                              {app.trangThai}
                            </span>
                          </td>
                          <td className="px-5 py-4 text-center">
                            <button className="px-4 py-2 text-sm font-medium border border-gray-200 rounded text-gray-600 hover:bg-gray-50 transition-colors">
                              Xem
                            </button>
                          </td>
                        </tr>
                      ))}
                      {filteredApps.length === 0 && (
                        <tr>
                          <td colSpan={7} className="px-5 py-12 text-center text-gray-400">Không có dữ liệu</td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* ── Tab: Thống kê ── */}
          {activeTab === "thongke" && (
            <div className="space-y-5">
              <div className="grid grid-cols-4 gap-5">
                {[
                  { label: "Mini App đang cài",  value: String(installedApps.length),                color: "#094D8A" },
                  { label: "Người dùng",         value: donVi.nguoiDung.toLocaleString("vi-VN"),     color: "#1F2937" },
                  { label: "API Calls tháng này",value: "1.248.352",                                  color: "#D97706" },
                  { label: "Dung lượng dữ liệu", value: "18.5 GB",                                    color: "#2563EB" },
                ].map((s) => (
                  <div key={s.label} className="bg-white rounded border border-gray-100 shadow-sm px-6 py-5">
                    <div className="text-sm text-gray-500 mb-2">{s.label}</div>
                    <div className="text-3xl font-semibold" style={{ color: s.color }}>{s.value}</div>
                  </div>
                ))}
              </div>

              <div className="bg-white rounded border border-gray-100 shadow-sm">
                <div className="px-6 py-4 border-b border-gray-100">
                  <h3 className="font-semibold text-gray-700 tracking-wide">LỊCH SỬ CÀI ĐẶT MINI APP</h3>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-gray-100 bg-gray-50/60">
                        <th className="text-left px-5 py-4 text-gray-500 font-semibold w-36">THỜI GIAN</th>
                        <th className="text-left px-5 py-4 text-gray-500 font-semibold">MINI APP</th>
                        <th className="text-left px-5 py-4 text-gray-500 font-semibold w-28">PHIÊN BẢN</th>
                        <th className="text-left px-5 py-4 text-gray-500 font-semibold">SỰ KIỆN</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      {installHistory.length > 0 ? installHistory.map((h, idx) => (
                        <tr key={idx} className="hover:bg-gray-50/60 transition-colors">
                          <td className="px-5 py-4 text-gray-500">{h.thoiGian}</td>
                          <td className="px-5 py-4 text-gray-700">{h.miniApp}</td>
                          <td className="px-5 py-4 text-gray-600">{h.phienBan}</td>
                          <td className="px-5 py-4 text-gray-600">{h.suKien}</td>
                        </tr>
                      )) : (
                        <tr>
                          <td colSpan={4} className="px-5 py-10 text-center text-gray-400">Chưa có lịch sử</td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

        </div>
      </div>

      {/* Modal: Ngừng hoạt động */}
      {showStopModal && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white rounded-md shadow-xl w-[520px] mx-4">
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
              <h3 className="text-base font-semibold text-gray-800">Xác nhận ngừng hoạt động</h3>
              <button onClick={() => setShowStopModal(false)} className="text-gray-400 hover:text-gray-600 transition-colors">
                <X size={18} />
              </button>
            </div>
            <div className="px-6 py-5 space-y-3">
              <p className="text-sm text-gray-600">
                Bạn có chắc chắn muốn chuyển đơn vị sử dụng này sang trạng thái <strong>Ngừng hoạt động</strong>?
              </p>
              <p className="text-sm text-gray-500 font-medium">Sau khi xác nhận:</p>
              <ul className="space-y-2 text-sm text-gray-600">
                {[
                  "Đơn vị sẽ không thể đăng nhập hệ thống.",
                  "Tất cả Mini App của đơn vị sẽ tạm ngừng hoạt động.",
                  "Dữ liệu không bị xóa và có thể kích hoạt lại sau này.",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-gray-400 mt-0.5 shrink-0">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex items-center justify-end gap-3 px-6 py-4 border-t border-gray-100">
              <button
                onClick={() => setShowStopModal(false)}
                className="px-4 py-2.5 text-sm font-medium border border-gray-200 rounded text-gray-600 hover:bg-gray-50 transition-colors"
              >
                Hủy
              </button>
              <button
                onClick={handleStop}
                className="px-4 py-2.5 text-sm font-medium bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
              >
                Xác nhận ngừng hoạt động
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal: Kích hoạt lại */}
      {showActivateModal && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white rounded-md shadow-xl w-[480px] mx-4">
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
              <h3 className="text-base font-semibold text-gray-800">Xác nhận kích hoạt lại</h3>
              <button onClick={() => setShowActivateModal(false)} className="text-gray-400 hover:text-gray-600 transition-colors">
                <X size={18} />
              </button>
            </div>
            <div className="px-6 py-5 space-y-3">
              <p className="text-sm text-gray-600">
                Bạn có chắc chắn muốn kích hoạt lại đơn vị sử dụng này?
              </p>
              <p className="text-sm text-gray-500 font-medium">Sau khi kích hoạt:</p>
              <ul className="space-y-2 text-sm text-gray-600">
                {[
                  "Đơn vị có thể đăng nhập lại hệ thống.",
                  "Các Mini App tiếp tục hoạt động bình thường.",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-gray-400 mt-0.5 shrink-0">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex items-center justify-end gap-3 px-6 py-4 border-t border-gray-100">
              <button
                onClick={() => setShowActivateModal(false)}
                className="px-4 py-2.5 text-sm font-medium border border-gray-200 rounded text-gray-600 hover:bg-gray-50 transition-colors"
              >
                Hủy
              </button>
              <button
                onClick={handleActivate}
                className="px-4 py-2.5 text-sm font-medium bg-[#094D8A] text-white rounded hover:bg-[#073A63] transition-colors"
              >
                Xác nhận kích hoạt
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// ─── Root ──────────────────────────────────────────────────────────────────
export default function App() {
  const [screen, setScreen] = useState<Screen>("signin");
  const [donViList, setDonViList]           = useState<DonViData[]>(DON_VI_DATA);
  const [selectedDonViId, setSelectedDonViId] = useState<number | null>(null);
  const [templateList, setTemplateList] = useState<TemplateRow[]>(TEMPLATE_DATA);
  const [selectedTemplateId, setSelectedTemplateId] = useState<number | null>(null);
  const [selectedDnId, setSelectedDnId] = useState<number | null>(null);
  const [selectedMemberId, setSelectedMemberId] = useState<string | null>(null);
  const [selectedAppId, setSelectedAppId] = useState<string | null>(null);
  const [selectedApiId, setSelectedApiId] = useState<number | null>(null);
  const [prevScreen, setPrevScreen] = useState<Screen>("chiTietDoanhNghiep");
  const [devBackScreen, setDevBackScreen] = useState<Screen>("developer");
  const [dnBackScreen, setDnBackScreen] = useState<Screen>("doanhNghiep");

  const handleViewDetail = (id: number) => {
    setSelectedDnId(id);
    setDnBackScreen("doanhNghiep");
    setScreen("chiTietDoanhNghiep");
  };
  const handleViewMember = (memberId: string, backTo?: Screen) => {
    setSelectedMemberId(memberId);
    if (backTo) setDevBackScreen(backTo);
    setScreen("chiTietThanhVien");
  };
  const handleViewDN = (dnId: number) => {
    setSelectedDnId(dnId);
    setDnBackScreen("chiTietThanhVien");
    setScreen("chiTietDoanhNghiep");
  };
  const handleViewMiniApp  = (appId: string, from: Screen) => { setSelectedAppId(appId); setPrevScreen(from); setScreen("chiTietMiniApp"); };
  const handleViewMemberFromMiniApp = (memberId: string) => {
    const dnId = Object.entries(MEMBERS_BY_DN).find(([, members]) => members.some((m) => m.id === memberId))?.[0];
    setSelectedDnId(dnId ? Number(dnId) : 1);
    setSelectedMemberId(memberId);
    setDevBackScreen("chiTietMiniApp");
    setScreen("chiTietThanhVien");
  };
  const handleViewDeveloper = (devId: string) => {
    setSelectedMemberId(devId);
    const dnId = Object.entries(MEMBERS_BY_DN).find(([, members]) => members.some((m) => m.id === devId))?.[0];
    setSelectedDnId(dnId ? Number(dnId) : 1);
    setDevBackScreen("developer");
    setScreen("chiTietThanhVien");
  };

  if (screen === "signin") return <SignIn onSignIn={(target) => setScreen(target ?? "dashboard")} />;
  if (screen === "dnDashboard") return <DoanhNghiepDashboard onNavigate={setScreen} />;
  if (screen === "dnMiniApp") return <DNMiniAppScreen onNavigate={setScreen} onViewMiniApp={(appId) => handleViewMiniApp(appId, "dnMiniApp")} />;
  if (screen === "dnCreateMiniApp") return <DNCreateMiniAppScreen onNavigate={setScreen} />;
  if (screen === "dnCreateMiniAppStep2") return <DNCreateMiniAppStep2Screen onNavigate={setScreen} />;
  if (screen === "chiTietMiniApp" && selectedAppId !== null)
    return <ChiTietMiniApp appId={selectedAppId} prevScreen={prevScreen} onBack={() => setScreen(prevScreen)} onNavigate={setScreen}
      onViewMember={handleViewMemberFromMiniApp} />;
  if (screen === "chiTietThanhVien" && selectedMemberId !== null && selectedDnId !== null)
    return <ChiTietThanhVien memberId={selectedMemberId} dnId={selectedDnId} onBack={() => setScreen(devBackScreen)} onNavigate={setScreen}
      onViewMiniApp={(appId) => handleViewMiniApp(appId, "chiTietThanhVien")}
      onViewDN={handleViewDN}
      fromScreen={devBackScreen} />;
  if (screen === "chiTietDoanhNghiep" && selectedDnId !== null)
    return <ChiTietDoanhNghiep id={selectedDnId} onBack={() => setScreen(dnBackScreen)} onNavigate={setScreen}
      onViewMember={(id) => handleViewMember(id, "chiTietDoanhNghiep")}
      onViewMiniApp={(appId) => handleViewMiniApp(appId, "chiTietDoanhNghiep")}
      fromScreen={dnBackScreen} />;
  if (screen === "developer")
    return <DeveloperScreen onNavigate={setScreen} onViewDeveloper={handleViewDeveloper} />;
  if (screen === "miniApp")
    return <MiniAppScreen onNavigate={setScreen} onViewMiniApp={(appId) => handleViewMiniApp(appId, "miniApp")} />;
  if (screen === "doanhNghiep")
    return <DoanhNghiepScreen onNavigate={setScreen} onViewDetail={handleViewDetail} />;
  if (screen === "donViSuDung")
    return (
      <DonViSuDungScreen
        onNavigate={setScreen}
        donViData={donViList}
        onViewDetail={(id) => { setSelectedDonViId(id); setScreen("chiTietDonViSuDung"); }}
      />
    );
  if (screen === "chiTietDonViSuDung" && selectedDonViId !== null)
    return (
      <ChiTietDonViSuDungScreen
        donViId={selectedDonViId}
        donViData={donViList}
        onBack={() => setScreen("donViSuDung")}
        onNavigate={setScreen}
        onStatusChange={(id, status) =>
          setDonViList((prev) => prev.map((d) => (d.id === id ? { ...d, trangThai: status } : d)))
        }
      />
    );
  if (screen === "apiManagement")
    return <APIManagementScreen onNavigate={setScreen} onViewDetail={(id) => { setSelectedApiId(id); setScreen("chiTietAPI"); }} />;
  if (screen === "chiTietAPI" && selectedApiId !== null)
    return <ChiTietAPIScreen apiId={selectedApiId} onBack={() => setScreen("apiManagement")} onNavigate={setScreen}
      onViewMiniApp={(appId) => handleViewMiniApp(appId, "chiTietAPI")} />;
  if (screen === "apiMonitoring")
    return <APIMonitoringScreen onNavigate={setScreen} />;
  if (screen === "mauMiniApp")
    return <MauMiniAppScreen onNavigate={setScreen} templateData={templateList} onViewTemplate={(id) => { setSelectedTemplateId(id); setScreen("xemMauMiniApp"); }} />;
  if (screen === "trinhTaoMau")
    return <TrinhTaoMauScreen onNavigate={setScreen} onSave={(t) => setTemplateList((s) => [t, ...s])} />;
  if (screen === "xemMauMiniApp" && selectedTemplateId !== null) {
    const tpl = templateList.find((t) => t.id === selectedTemplateId);
    if (tpl) return <XemMauScreen
      template={tpl}
      onClose={() => setScreen("mauMiniApp")}
      onNavigate={setScreen}
      onUpdate={(updated) => setTemplateList((s) => s.map((t) => t.id === updated.id ? updated : t))}
      onDelete={(id) => { setTemplateList((s) => s.filter((t) => t.id !== id)); setScreen("mauMiniApp"); }}
    />;
  }
  if (screen === "hoTro")
    return <HoTroScreen onNavigate={setScreen} />;
  if (screen === "baoCao")
    return <BaoCaoScreen onNavigate={setScreen} />;
  if (screen === "quanLyHeThong")
    return <QuanLyHeThongScreen onNavigate={setScreen} />;
  return <Dashboard onNavigate={setScreen} />;
}
