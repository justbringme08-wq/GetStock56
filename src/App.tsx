import { useState, useEffect, MouseEvent, FormEvent } from "react";
import { 
  Sparkles, 
  Target, 
  ArrowRight, 
  History, 
  Heart, 
  Copy, 
  Download, 
  Zap, 
  Loader2, 
  Check, 
  Trash2, 
  HelpCircle, 
  Send,
  ExternalLink,
  ChevronDown,
  Briefcase,
  Mail,
  Home,
  MessageSquare,
  Globe,
  TrendingUp,
  Award,
  Settings,
  Sliders,
  X,
  Search
} from "lucide-react";
import { Hook, FavoriteHook, RecentSearch, ToneType, LanguageType } from "./types";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Partners from "./components/Partners";
import Services from "./components/Services";

export default function App() {
  // New System & Config States
  const [activeSection, setActiveSection] = useState("home");
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [platform, setPlatform] = useState<string>("TikTok");
  const [ugcStyle, setUgcStyle] = useState<string>("Casual Creator Voice");
  const [prefixModifier, setPrefixModifier] = useState<boolean>(true);
  const [simulationMode, setSimulationMode] = useState<string>("turbo");

  // Filter Query for FAQs & Calculator state
  const [searchQueryFaq, setSearchQueryFaq] = useState("");
  const [calcMonthlySpend, setCalcMonthlySpend] = useState<number>(12500);
  const [calcHookRate, setCalcHookRate] = useState<number>(15);

  // Live Activity Telemetry Alert logs
  const [liveActivities, setLiveActivities] = useState<string[]>([
    "🚀 Juan C. scaled to +45% Hook Rate using Direct Aggressive tone.",
    "🎬 Production team casted 3 new Creators for skincare video briefs.",
    "🔥 Taglish Hook generated for client: '🏋️ Fitness App' campaign.",
    "🛡️ LocalStorage synchronized on port 3000 securely.",
    "💡 Brand Audit requested for meta-ads-growth.myshopify.com."
  ]);

  // AI Form State
  const [productDescription, setProductDescription] = useState("");
  const [language, setLanguage] = useState<LanguageType>("English");
  const [tone, setTone] = useState<ToneType>("Direct & Aggressive");
  const [isLoading, setIsLoading] = useState(false);
  const [loadingText, setLoadingText] = useState("Analyzing angles & generating hooks...");
  const [generatedHooks, setGeneratedHooks] = useState<Hook[]>([]);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  // Persistence State
  const [recentSearches, setRecentSearches] = useState<RecentSearch[]>([]);
  const [favorites, setFavorites] = useState<FavoriteHook[]>([]);
  
  // UI States
  const [copiedHookId, setCopiedHookId] = useState<number | null>(null);
  const [copiedAll, setCopiedAll] = useState(false);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);
  
  // Contact Form State
  const [contactName, setContactName] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactWebsite, setContactWebsite] = useState("");
  const [contactMessage, setContactMessage] = useState("");
  const [contactSubmitting, setContactSubmitting] = useState(false);
  const [contactSuccess, setContactSuccess] = useState(false);

  // FAQ Accordion State
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  // Dynamic Suggestion Templates
  const suggestions = [
    { label: "✨ Skincare Serum", desc: "A skincare serum that clears acne breakouts in 7 days without causing skin dryness." },
    { label: "🏋️ Fitness App", desc: "A mobile workout application with 15-minute home routines that gets you ripped." },
    { label: "📚 Reading App", desc: "An audio book summary app that lets you read a non-fiction bestseller in 12 minutes." },
  ];

  // Load localStorage on mount
  useEffect(() => {
    try {
      const persistedSearches = localStorage.getItem("g56_recent_searches");
      if (persistedSearches) {
        setRecentSearches(JSON.parse(persistedSearches));
      }
      const persistedFavorites = localStorage.getItem("g56_favorites");
      if (persistedFavorites) {
        setFavorites(JSON.parse(persistedFavorites));
      }

      const persistedSettings = localStorage.getItem("g56_agency_settings");
      if (persistedSettings) {
        const parsed = JSON.parse(persistedSettings);
        if (parsed.platform) setPlatform(parsed.platform);
        if (parsed.ugcStyle) setUgcStyle(parsed.ugcStyle);
        if (parsed.prefixModifier !== undefined) setPrefixModifier(parsed.prefixModifier);
        if (parsed.simulationMode) setSimulationMode(parsed.simulationMode);
      }
    } catch (e) {
      console.error("Failed to load local storage state:", e);
    }
  }, []);

  // System settings writer
  const updateSystemSettings = (newPlat: string, newStyle: string, newPref: boolean, newSim: string) => {
    setPlatform(newPlat);
    setUgcStyle(newStyle);
    setPrefixModifier(newPref);
    setSimulationMode(newSim);
    localStorage.setItem("g56_agency_settings", JSON.stringify({
      platform: newPlat,
      ugcStyle: newStyle,
      prefixModifier: newPref,
      simulationMode: newSim
    }));
  };

  // Scroll spy effect
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "ai-tool", "services", "faq", "contact"];
      const scrollPosition = window.scrollY + 250;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Periodic simulated live conversion telemetry
  useEffect(() => {
    const alerts = [
      "🔥 TikTok UGC casted 3 new beauty creators for high-converting hook tests.",
      "🚀 Juan C. scaled to +72% Hook Rate using Direct Aggressive tone.",
      "💡 Pro Tip: Shorten hooks to 9 words for maximum mobile user retention.",
      "⚡ Advantage+ campaign delivered +18.4% budget efficiency today.",
      "🎬 Audio sound pattern matched with pattern-interrupt overlay.",
      "🇵🇭 Taglish Hook successfully prefilled for Pinoy local brand.",
      "📈 Hook rate raised from 14% to 49.3% in skin-brand live audit.",
      "🛡️ LocalStorage synchronized on port 3000 securely with system."
    ];

    const interval = setInterval(() => {
      setLiveActivities(prev => {
        const next = [...prev];
        next.unshift(alerts[Math.floor(Math.random() * alerts.length)]);
        return next.slice(0, 5);
      });
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  // Update loading texts sequentially during generation
  useEffect(() => {
    if (!isLoading) return;
    const phrases = [
      `Analyzing competitive ${platform} hooks...`,
      "Formulating emotional conversion angles...",
      "Crafting attention-grabbing pattern interrupts...",
      `Reviewing target ${platform} audience demographics...`,
      `Adapting copy for "${ugcStyle}" visual blueprint...`,
      "Optimizing visual direction triggers & CTA..."
    ];
    let index = 0;
    const interval = setInterval(() => {
      index = (index + 1) % phrases.length;
      setLoadingText(phrases[index]);
    }, 2000);
    return () => clearInterval(interval);
  }, [isLoading, platform, ugcStyle]);

  // Helper: Save Searches
  const saveSearch = (description: string, searchLang: LanguageType, searchTone: ToneType) => {
    const newSearch: RecentSearch = {
      id: Math.random().toString(36).substring(2, 9),
      productDescription: description,
      language: searchLang,
      tone: searchTone,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    const updated = [newSearch, ...recentSearches.filter(s => s.productDescription.toLowerCase() !== description.toLowerCase())].slice(0, 10);
    setRecentSearches(updated);
    localStorage.setItem("g56_recent_searches", JSON.stringify(updated));
  };

  // Helper: Trigger Search Prefill
  const handleLoadRecent = (item: RecentSearch) => {
    setProductDescription(item.productDescription);
    setLanguage(item.language as LanguageType);
    setTone(item.tone as ToneType);
    
    document.getElementById("ai-tool")?.scrollIntoView({ behavior: "smooth" });
  };

  // Helper: Delete Specific Search
  const handleDeleteSearch = (id: string, e: MouseEvent) => {
    e.stopPropagation();
    const updated = recentSearches.filter(s => s.id !== id);
    setRecentSearches(updated);
    localStorage.setItem("g56_recent_searches", JSON.stringify(updated));
  };

  // Helper: Clear All Searches
  const handleClearAllSearches = () => {
    setRecentSearches([]);
    localStorage.removeItem("g56_recent_searches");
  };

  // Helper: Favorite/Unfavorite Toggle
  const toggleFavorite = (hook: Hook) => {
    const exists = favorites.find(f => f.hookText === hook.hookText);
    let updated: FavoriteHook[];
    if (exists) {
      updated = favorites.filter(f => f.hookText !== hook.hookText);
    } else {
      const newFav: FavoriteHook = {
        ...hook,
        id: Math.random().toString(36).substring(2, 9),
        timestamp: new Date().toLocaleDateString(),
        productDescription: productDescription || "Custom Product Sample",
        language,
        tone
      };
      updated = [newFav, ...favorites];
    }
    setFavorites(updated);
    localStorage.setItem("g56_favorites", JSON.stringify(updated));
  };

  const isFavorite = (hookText: string) => {
    return favorites.some(f => f.hookText === hookText);
  };

  // Core API: Generate Hooks
  const generateHooks = async () => {
    if (!productDescription.trim()) {
      setErrorMsg("Please introduce your product or service to generate scroll-stoppers.");
      return;
    }

    setIsLoading(true);
    setGeneratedHooks([]);
    setErrorMsg(null);
    setSuccessMsg(null);

    if (simulationMode === "deep-analyze") {
      setLoadingText("Initializing deep conversion parser...");
      await new Promise(resolve => setTimeout(resolve, 1800));
    }

    try {
      const response = await fetch("/api/generate-hooks", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          productDescription,
          language,
          tone,
          platform,
          ugcStyle,
          prefixModifier
        })
      });

      if (!response.ok) {
        throw new Error("We encountered a fast network throttle. Let's try once more.");
      }

      const data = await response.json();
      if (data && data.hooks) {
        setGeneratedHooks(data.hooks);
        saveSearch(productDescription, language, tone);
        setSuccessMsg("Successfully loaded 5 high-converting performance hooks!");
        
        setTimeout(() => {
          document.getElementById("hook-results")?.scrollIntoView({ behavior: "smooth" });
        }, 300);
      } else {
        throw new Error("Invalid output received from the generation engine.");
      }
    } catch (err: any) {
      console.error(err);
      setErrorMsg(err.message || "An unexpected error occurred. Please test again.");
    } finally {
      setIsLoading(false);
    }
  };

  // Global keyboard shortcut
  useEffect(() => {
    const handleGlobalKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "Enter") {
        if (!isLoading && productDescription.trim()) {
          e.preventDefault();
          if (document.activeElement instanceof HTMLElement) {
            document.activeElement.blur();
          }
          generateHooks();
        }
      }
    };

    window.addEventListener("keydown", handleGlobalKeyDown);
    return () => {
      window.removeEventListener("keydown", handleGlobalKeyDown);
    };
  }, [isLoading, productDescription, language, tone, platform, ugcStyle, prefixModifier, simulationMode]);

  // Copy Single Hook
  const copyToClipboard = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedHookId(index);
    setTimeout(() => setCopiedHookId(null), 2000);
  };

  // Copy All Hooks Consolidated
  const handleCopyAll = () => {
    if (generatedHooks.length === 0) return;
    const consolidated = generatedHooks.map((h, i) => {
      return `[HOOK ${i+1}] (${tone} - ${language})\nCopy: "${h.hookText}"\nVisual Action Clip: ${h.visualCue}\nWhy it works: ${h.reason}\n`;
    }).join("\n---\n\n");
    
    navigator.clipboard.writeText(consolidated);
    setCopiedAll(true);
    setTimeout(() => setCopiedAll(false), 2000);
  };

  // Export Hook to a convenient Local .txt File
  const handleExportTxt = () => {
    if (generatedHooks.length === 0) return;
    const documentHeadline = `==================================================\n`;
    const documentTitle = `   GETSTOCK56 - HIGH CONVERTING PERFORMANCE HOOKS\n`;
    const documentMeta = `   Product: ${productDescription}\n   Tone: ${tone} | Language: ${language}\n`;
    const documentDivider = `==================================================\n\n`;
    
    const body = generatedHooks.map((h, i) => {
      return `HOOK ${i+1}:\n--------------------------------------------------\nCopy: "${h.hookText}"\n\nVisual UGC Action Guide:\n👉 ${h.visualCue}\n\nPsychology Behind Conversion Angle:\n💡 ${h.reason}\n`;
    }).join("\n");

    const fullContent = `${documentHeadline}${documentTitle}${documentMeta}${documentDivider}${body}Generated with GetStock56 AI - Scale Across All Platforms.`;
    
    const blob = new Blob([fullContent], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `GetStock56_Hooks_${tone.replace(/\s+/g, '_')}.txt`;
    link.click();
    URL.revokeObjectURL(url);
  };

  // Contact Form submit logic
  const handleContactSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!contactName || !contactEmail || !contactMessage) {
      alert("Please fill out all mandatory contact fields.");
      return;
    }
    setContactSubmitting(true);
    setTimeout(() => {
      setContactSubmitting(false);
      setContactSuccess(true);
      setContactName("");
      setContactEmail("");
      setContactWebsite("");
      setContactMessage("");
    }, 1500);
  };

  // FAQ array
  const faqItems = [
    {
      q: "What makes GetStock56 hooks convert higher than ordinary scripts?",
      a: "Our hooks rely on analytical structure and visual behavior rather than static taglines. Every generated hook contains both copy text (the pattern-interrupter) and a targeted UGC direction guide."
    },
    {
      q: "Can I use the Tagalog generator for local Philippine TikTok shops?",
      a: "Yes! Our Tagalog engine generates organic 'Taglish' and natural colloquial phrasing ensuring your local dropshipping or local brand ads feel authentically Filipino."
    },
    {
      q: "Do you offer full-service media buying options?",
      a: "Absolutely. We represent a bespoke, high-performance universal growth agency operating end-to-end UGC casting, creative orchestration, budget structures, and custom funnels for Meta and TikTok."
    },
    {
      q: "How does the saved favorites sidebar store my selections?",
      a: "All of your favorited hooks and history are saved securely in your web browser utilizing modern HTML5 LocalStorage. No registration screens required."
    }
  ];

  return (
    <div className="bento-bg-grid bg-[#f8fafc] text-slate-900 font-sans min-h-screen flex flex-col selection:bg-pink-100 selection:text-pink-900 pb-20 md:pb-0">
      
      {/* Header */}
      <Header />

      {/* Home Section */}
      <Hero />
      <Partners />

      {/* Services Section */}
      <Services />

      {/* AI Tool Section */}
      <section id="ai-tool" className="bg-gradient-to-b from-white to-slate-50 py-20 md:py-28 scroll-mt-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-xs font-bold text-pink-500 uppercase tracking-widest bg-pink-50 px-3 py-1 rounded-full border border-pink-100/50">
              AI Generation Tool
            </span>
            <h2 className="text-4xl md:text-6xl font-bold mt-6 mb-4 text-gray-900">
              Generate Your Ad Hooks
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Powered by Google Gemini - Create 5 high-converting hooks instantly
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Main Workspace */}
            <div className="md:col-span-2">
              <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
                {/* Product Description */}
                <div className="mb-6">
                  <label className="block text-sm font-bold text-gray-900 mb-3">Product Description</label>
                  <textarea
                    value={productDescription}
                    onChange={(e) => setProductDescription(e.target.value)}
                    placeholder="Describe your product, service, or offer. Be specific about benefits and target audience."
                    className="w-full h-24 p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 resize-none"
                  />
                </div>

                {/* Language Selection */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <label className="block text-sm font-bold text-gray-900 mb-3">Language</label>
                    <select
                      value={language}
                      onChange={(e) => setLanguage(e.target.value as LanguageType)}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                    >
                      <option>English</option>
                      <option>Tagalog</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-900 mb-3">Tone</label>
                    <select
                      value={tone}
                      onChange={(e) => setTone(e.target.value as ToneType)}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                    >
                      <option>Direct & Aggressive</option>
                      <option>Informative & Educational</option>
                      <option>Humorous & Relatable</option>
                      <option>Curiosity & Mystery</option>
                      <option>Urgent & FOMO</option>
                    </select>
                  </div>
                </div>

                {/* Error and Success Messages */}
                {errorMsg && (
                  <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm font-medium">
                    {errorMsg}
                  </div>
                )}
                {successMsg && (
                  <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg text-green-700 text-sm font-medium">
                    {successMsg}
                  </div>
                )}

                {/* Generate Button */}
                <button
                  onClick={generateHooks}
                  disabled={isLoading}
                  className="w-full bg-black text-white py-4 rounded-xl font-bold text-lg hover:bg-gray-900 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      {loadingText}
                    </>
                  ) : (
                    <>
                      <Zap className="w-5 h-5" />
                      Generate Hooks (Cmd+Enter)
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Sidebar - Recent & Favorites */}
            <div className="md:col-span-1 space-y-6">
              {/* Settings Card */}
              <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
                <button
                  onClick={() => setSettingsOpen(!settingsOpen)}
                  className="w-full flex items-center justify-between font-bold text-gray-900"
                >
                  <span className="flex items-center gap-2">
                    <Settings className="w-4 h-4" />
                    Advanced Settings
                  </span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${settingsOpen ? 'rotate-180' : ''}`} />
                </button>
                {settingsOpen && (
                  <div className="mt-4 space-y-4">
                    <div>
                      <label className="text-xs font-bold text-gray-600 block mb-2">Platform</label>
                      <select
                        value={platform}
                        onChange={(e) => updateSystemSettings(e.target.value, ugcStyle, prefixModifier, simulationMode)}
                        className="w-full p-2 border border-gray-300 rounded text-sm"
                      >
                        <option>TikTok</option>
                        <option>Meta</option>
                        <option>YouTube</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-xs font-bold text-gray-600 block mb-2">UGC Style</label>
                      <select
                        value={ugcStyle}
                        onChange={(e) => updateSystemSettings(platform, e.target.value, prefixModifier, simulationMode)}
                        className="w-full p-2 border border-gray-300 rounded text-sm"
                      >
                        <option>Casual Creator Voice</option>
                        <option>Professional Authority</option>
                        <option>Energetic & Fun</option>
                      </select>
                    </div>
                    <label className="flex items-center gap-2 text-sm">
                      <input
                        type="checkbox"
                        checked={prefixModifier}
                        onChange={(e) => updateSystemSettings(platform, ugcStyle, e.target.checked, simulationMode)}
                        className="rounded"
                      />
                      <span className="font-medium">Pattern Interrupt Prefixes</span>
                    </label>
                  </div>
                )}
              </div>

              {/* Recent Searches */}
              {recentSearches.length > 0 && (
                <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-bold text-gray-900 flex items-center gap-2">
                      <History className="w-4 h-4" />
                      Recent
                    </span>
                    <button
                      onClick={handleClearAllSearches}
                      className="text-xs text-pink-500 hover:text-pink-700 font-medium"
                    >
                      Clear
                    </button>
                  </div>
                  <div className="space-y-2 custom-scrollbar max-h-64 overflow-y-auto">
                    {recentSearches.map((s) => (
                      <button
                        key={s.id}
                        onClick={() => handleLoadRecent(s)}
                        className="w-full text-left p-3 rounded-lg bg-gray-50 hover:bg-gray-100 text-sm group transition-all"
                      >
                        <p className="font-medium text-gray-900 truncate">{s.productDescription}</p>
                        <p className="text-xs text-gray-500">{s.timestamp}</p>
                        <button
                          onClick={(e) => handleDeleteSearch(s.id, e)}
                          className="mt-2 text-xs text-red-500 opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                          Delete
                        </button>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Favorites */}
              {favorites.length > 0 && (
                <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
                  <span className="font-bold text-gray-900 flex items-center gap-2">
                    <Heart className="w-4 h-4 fill-pink-500 text-pink-500" />
                    Saved ({favorites.length})
                  </span>
                  <div className="space-y-2 mt-4 custom-scrollbar max-h-48 overflow-y-auto">
                    {favorites.map((f) => (
                      <div key={f.id} className="p-3 bg-pink-50 rounded-lg text-sm">
                        <p className="font-medium text-gray-900">"{f.hookText}"</p>
                        <p className="text-xs text-gray-600 mt-1">{f.tone}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Hook Results */}
      {generatedHooks.length > 0 && (
        <section id="hook-results" className="bg-white py-20 md:py-28">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex items-center justify-between mb-12">
              <div>
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900">Your High-Converting Hooks</h3>
                <p className="text-gray-500 mt-2">Ready to scale across {platform}</p>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={handleCopyAll}
                  className="p-3 rounded-lg border border-gray-200 hover:bg-gray-50 transition-all"
                  title="Copy all hooks"
                >
                  {copiedAll ? <Check className="w-5 h-5 text-green-600" /> : <Copy className="w-5 h-5" />}
                </button>
                <button
                  onClick={handleExportTxt}
                  className="p-3 rounded-lg border border-gray-200 hover:bg-gray-50 transition-all"
                  title="Export as text file"
                >
                  <Download className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="grid gap-6">
              {generatedHooks.map((hook, i) => (
                <div key={i} className="border border-gray-200 rounded-xl p-8 bg-gradient-to-br from-gray-50 to-white hover:shadow-lg transition-all">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <p className="text-sm font-bold text-pink-500 uppercase tracking-wider mb-2">Hook {i + 1}</p>
                      <p className="text-xl md:text-2xl font-bold text-gray-900">{hook.hookText}</p>
                    </div>
                    <button
                      onClick={() => toggleFavorite(hook)}
                      className="ml-4 p-2 rounded-lg hover:bg-gray-200 transition-all"
                    >
                      <Heart
                        className={`w-6 h-6 ${isFavorite(hook.hookText) ? 'fill-pink-500 text-pink-500' : 'text-gray-400'}`}
                      />
                    </button>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <p className="text-xs font-bold text-gray-600 uppercase tracking-wider mb-2">Visual Direction</p>
                      <p className="text-gray-700">{hook.visualCue}</p>
                    </div>
                    <div>
                      <p className="text-xs font-bold text-gray-600 uppercase tracking-wider mb-2">Psychology</p>
                      <p className="text-gray-700">{hook.reason}</p>
                    </div>
                  </div>

                  <button
                    onClick={() => copyToClipboard(hook.hookText, i)}
                    className="w-full py-3 rounded-lg border border-gray-300 text-gray-900 font-bold hover:bg-gray-100 transition-all flex items-center justify-center gap-2"
                  >
                    {copiedHookId === i ? (
                      <>
                        <Check className="w-4 h-4 text-green-600" />
                        Copied!
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4" />
                        Copy Hook Text
                      </>
                    )}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ Section */}
      <section id="faq" className="bg-gray-50 py-20 md:py-28 scroll-mt-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-xs font-bold text-pink-500 uppercase tracking-widest bg-pink-50 px-3 py-1 rounded-full border border-pink-100/50">
              Questions
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mt-6 mb-4 text-gray-900">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {faqItems.map((item, i) => (
              <div
                key={i}
                className={`faq-item-${openFaqIndex === i ? 'open' : ''} border border-gray-200 rounded-xl overflow-hidden bg-white transition-all`}
              >
                <button
                  onClick={() => setOpenFaqIndex(openFaqIndex === i ? null : i)}
                  className="w-full p-6 flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <span className="text-lg font-bold text-gray-900 text-left">{item.q}</span>
                  <ChevronDown className={`w-5 h-5 text-gray-600 transition-transform ${openFaqIndex === i ? 'rotate-180' : ''}`} />
                </button>
                <div className="faq-answer px-6 pb-6">
                  <p className="text-gray-700">{item.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-black text-white py-20 md:py-28 scroll-mt-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-xs font-bold text-pink-500 uppercase tracking-widest bg-pink-500/20 px-3 py-1 rounded-full border border-pink-500/30">
              Get In Touch
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mt-6 mb-4">
              Ready to Scale?
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Contact our team to discuss your growth strategy and see how GetStock56 can accelerate your acquisition.
            </p>
          </div>

          {contactSuccess ? (
            <div className="bg-green-500/20 border border-green-500/50 rounded-xl p-8 text-center">
              <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
              <p className="text-gray-300">We'll get back to you within 24 hours.</p>
            </div>
          ) : (
            <form onSubmit={handleContactSubmit} className="bg-gray-900 border border-gray-800 rounded-2xl p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <input
                  type="text"
                  placeholder="Your Name"
                  value={contactName}
                  onChange={(e) => setContactName(e.target.value)}
                  className="p-4 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-pink-500"
                  required
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  value={contactEmail}
                  onChange={(e) => setContactEmail(e.target.value)}
                  className="p-4 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-pink-500"
                  required
                />
              </div>
              <input
                type="url"
                placeholder="Website (Optional)"
                value={contactWebsite}
                onChange={(e) => setContactWebsite(e.target.value)}
                className="w-full p-4 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-pink-500 mb-6"
              />
              <textarea
                placeholder="Tell us about your project"
                value={contactMessage}
                onChange={(e) => setContactMessage(e.target.value)}
                className="w-full p-4 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-pink-500 resize-none h-32 mb-6"
                required
              ></textarea>
              <button
                type="submit"
                disabled={contactSubmitting}
                className="w-full bg-pink-500 text-white font-bold py-4 rounded-lg hover:bg-pink-600 transition-all disabled:opacity-50 flex items-center justify-center gap-2"
              >
                {contactSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12 border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="font-semibold text-white mb-4">GetStock56</p>
          <p className="text-sm mb-6">Universal Performance Marketing Agency</p>
          <div className="flex justify-center gap-8 text-sm mb-8">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Contact</a>
          </div>
          <p className="text-xs text-gray-500">© 2026 GetStock56. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
