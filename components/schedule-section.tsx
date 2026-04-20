"use client";

const scheduleItems = [
  { time: "06:00", title: "集合・チェックイン", description: "Clusterに集まって、今日やることを共有" },
  { time: "06:15", title: "もくもくタイム", description: "各自の作業に集中。困ったら気軽に声かけOK" },
  { time: "07:30", title: "シェアタイム", description: "進捗共有、質問タイム、フィードバック" },
  { time: "08:00", title: "解散", description: "お疲れさま！また明日朝に" },
];

export function ScheduleSection() {
  return (
    <section className="py-24 px-4 relative bg-muted/30">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px]" />
      
      <div className="max-w-4xl mx-auto relative">
        <div className="text-center mb-16">
          <p className="text-primary font-mono text-sm mb-4">{"// SCHEDULE"}</p>
          <h2 className="text-4xl md:text-5xl font-black mb-6" style={{ fontFamily: 'var(--font-noto-sans-jp)' }}>
            タイムスケジュール
          </h2>
          <p className="text-muted-foreground text-lg" style={{ fontFamily: 'var(--font-noto-sans-jp)' }}>
            2時間で集中して成果を出す
          </p>
        </div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[47px] md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-transparent" />
          
          <div className="space-y-8">
            {scheduleItems.map((item, index) => (
              <div key={index} className="relative flex items-center gap-6 md:gap-0">
                {/* Desktop: alternating layout */}
                <div className="hidden md:flex md:w-1/2 md:justify-end md:pr-12">
                  {index % 2 === 0 && (
                    <div className="text-right">
                      <h3 className="text-xl font-bold mb-1" style={{ fontFamily: 'var(--font-noto-sans-jp)' }}>{item.title}</h3>
                      <p className="text-muted-foreground" style={{ fontFamily: 'var(--font-noto-sans-jp)' }}>{item.description}</p>
                    </div>
                  )}
                </div>
                
                {/* Time badge */}
                <div className="relative z-10 shrink-0">
                  <div className="w-24 h-24 rounded-2xl bg-card border border-border flex items-center justify-center shadow-[0_0_30px_rgba(0,255,255,0.1)]">
                    <span className="text-2xl font-bold font-mono text-primary">{item.time}</span>
                  </div>
                </div>
                
                <div className="hidden md:flex md:w-1/2 md:pl-12">
                  {index % 2 === 1 && (
                    <div>
                      <h3 className="text-xl font-bold mb-1" style={{ fontFamily: 'var(--font-noto-sans-jp)' }}>{item.title}</h3>
                      <p className="text-muted-foreground" style={{ fontFamily: 'var(--font-noto-sans-jp)' }}>{item.description}</p>
                    </div>
                  )}
                </div>
                
                {/* Mobile: always right side */}
                <div className="md:hidden">
                  <h3 className="text-lg font-bold mb-1" style={{ fontFamily: 'var(--font-noto-sans-jp)' }}>{item.title}</h3>
                  <p className="text-muted-foreground text-sm" style={{ fontFamily: 'var(--font-noto-sans-jp)' }}>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
