"use client";

import { Sunrise, Users, Code2, Sparkles, Headphones, Clock } from "lucide-react";

const features = [
  {
    icon: Sunrise,
    title: "朝の集中力",
    description: "脳が最もクリアな朝の時間帯に、最高のパフォーマンスを発揮",
    color: "text-accent",
    glow: "shadow-[0_0_20px_rgba(255,165,0,0.2)]"
  },
  {
    icon: Users,
    title: "VRで繋がる",
    description: "Clusterの仮想空間で、世界中の仲間とリアルに交流",
    color: "text-primary",
    glow: "shadow-[0_0_20px_rgba(0,255,255,0.2)]"
  },
  {
    icon: Code2,
    title: "自由にハック",
    description: "個人開発、チーム開発、なんでもOK。自分のペースで進めよう",
    color: "text-foreground",
    glow: "shadow-[0_0_20px_rgba(255,255,255,0.1)]"
  },
  {
    icon: Sparkles,
    title: "アイデア共有",
    description: "困ったら相談、できたら自慢。刺激し合える仲間がいる",
    color: "text-primary",
    glow: "shadow-[0_0_20px_rgba(0,255,255,0.2)]"
  },
  {
    icon: Headphones,
    title: "没入空間",
    description: "VRならではの没入感で、最高の作業環境を実現",
    color: "text-accent",
    glow: "shadow-[0_0_20px_rgba(255,165,0,0.2)]"
  },
  {
    icon: Clock,
    title: "習慣化",
    description: "毎朝の定期開催で、継続的な開発習慣が身につく",
    color: "text-foreground",
    glow: "shadow-[0_0_20px_rgba(255,255,255,0.1)]"
  }
];

export function FeaturesSection() {
  return (
    <section className="py-24 px-4 relative">
      {/* Background accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary font-mono text-sm mb-4">{"// FEATURES"}</p>
          <h2 className="text-4xl md:text-5xl font-black mb-6" style={{ fontFamily: 'var(--font-noto-sans-jp)' }}>
            なぜ<span className="text-primary">朝</span>に<span className="text-accent">hack</span>するのか
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg" style={{ fontFamily: 'var(--font-noto-sans-jp)' }}>
            朝hack会は、朝の黄金時間とVR空間の没入感を組み合わせた、<br className="hidden md:block" />
            新しい形のハッカソンコミュニティです。
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index}
              className={`group p-6 rounded-2xl border border-border bg-card/50 backdrop-blur-sm hover:bg-card transition-all duration-300 ${feature.glow} hover:scale-[1.02]`}
            >
              <div className={`w-12 h-12 rounded-xl bg-muted flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <feature.icon className={`w-6 h-6 ${feature.color}`} />
              </div>
              <h3 className="text-xl font-bold mb-2" style={{ fontFamily: 'var(--font-noto-sans-jp)' }}>{feature.title}</h3>
              <p className="text-muted-foreground" style={{ fontFamily: 'var(--font-noto-sans-jp)' }}>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
