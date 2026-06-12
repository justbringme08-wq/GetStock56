import { Sparkles, Target, ArrowRight } from "lucide-react";

export default function Services() {
  return (
    <section id="services" className="bg-white py-24 scroll-mt-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-xs font-bold text-pink-500 uppercase tracking-widest bg-pink-50 px-3 py-1 rounded-full border border-pink-100/50">
            Growth Offerings
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-4 tracking-tight text-gray-900">
            Our Growth Services
          </h2>
          <p className="text-gray-500 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
            Data-driven performance marketing designed to aggressively scale your customer acquisition.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Service Card 1: TikTok */}
          <div className="p-8 md:p-10 border border-gray-100 rounded-3xl bg-gray-50/60 group hover:bg-white hover:border-pink-100 hover:shadow-xl hover:shadow-pink-500/5 hover:-translate-y-1 transition-all relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-pink-500/5 rounded-bl-full pointer-events-none transition-all group-hover:scale-110"></div>
            
            <div className="w-14 h-14 bg-pink-100 text-pink-600 rounded-2xl flex items-center justify-center mb-8 shrink-0 group-hover:scale-110 transition-transform">
              <Sparkles className="w-7 h-7" />
            </div>
            
            <h3 className="font-extrabold text-2xl mb-4 text-gray-950 group-hover:text-pink-500 transition-colors">
              TikTok & Reels Strategy
            </h3>
            
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Vertical video strategy and high-engagement UGC campaigns tailored to capture attention instantly, break the feed, and drive rapid sales and leads conversions.
            </p>
            
            <a 
              href="https://getstartedtiktok.partnerlinks.io/l05gptx6mnto" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center gap-2 font-bold text-pink-500 hover:text-pink-700 transition-colors group/link cursor-pointer"
            >
              Join Partner Program 
              <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
            </a>
          </div>
          
          {/* Service Card 2: Meta */}
          <div className="p-8 md:p-10 border border-gray-100 rounded-3xl bg-gray-50/60 group hover:bg-white hover:border-blue-100 hover:shadow-xl hover:shadow-blue-500/5 hover:-translate-y-1 transition-all relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/5 rounded-bl-full pointer-events-none transition-all group-hover:scale-110"></div>

            <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-8 shrink-0 group-hover:scale-110 transition-transform">
              <Target className="w-7 h-7" />
            </div>
            
            <h3 className="font-extrabold text-2xl mb-4 text-gray-950 group-hover:text-blue-600 transition-colors">
              Meta Ads Management
            </h3>
            
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Advanced custom targeting, localized funnel testing, and conversion sequences for Facebook and Instagram designed to maximize ROI and scale acquisition efficiently.
            </p>
            
            <a 
              href="#contact" 
              className="inline-flex items-center gap-2 font-bold text-blue-600 hover:text-blue-800 transition-colors group/link cursor-pointer"
            >
              Get Meta Strategy 
              <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
