"use client";

import { ArrowRight, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CtaSection() {
  return (
    <section className="py-24 px-4 relative overflow-hidden">
      {/* Glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px]" />
      <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[120px]" />
      
      <div className="max-w-4xl mx-auto relative">
        <div className="text-center p-8 md:p-16 rounded-3xl border border-border bg-card/50 backdrop-blur-sm">
          <p className="text-primary font-mono text-sm mb-4">{"// JOIN US"}</p>
          <h2 className="text-4xl md:text-6xl font-black mb-6" style={{ fontFamily: 'var(--font-noto-sans-jp)' }}>
            明日の朝、<br className="md:hidden" />
            <span className="text-primary">会</span>おう
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-10" style={{ fontFamily: 'var(--font-noto-sans-jp)' }}>
            早起きは三文の徳。<br />
            VR空間で、一緒にコードを書こう。
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="group bg-primary text-primary-foreground hover:bg-primary/90 px-10 py-7 text-xl font-bold shadow-[0_0_40px_rgba(0,255,255,0.3)] hover:shadow-[0_0_60px_rgba(0,255,255,0.5)] transition-all duration-300"
            >
              <span style={{ fontFamily: 'var(--font-noto-sans-jp)' }}>Clusterで参加</span>
              <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-muted-foreground/30 text-foreground hover:bg-muted/50 px-8 py-7 text-lg gap-2"
            >
              <Twitter className="w-5 h-5" />
              <span style={{ fontFamily: 'var(--font-noto-sans-jp)' }}>フォローする</span>
            </Button>
          </div>
          
          {/* Tech stack decoration */}
          <div className="mt-16 flex flex-wrap justify-center gap-3 opacity-50">
            {["Next.js", "React", "TypeScript", "Python", "Rust", "Go", "Unity", "Blender"].map((tech) => (
              <span key={tech} className="px-3 py-1 text-xs font-mono text-muted-foreground border border-border rounded-full">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
