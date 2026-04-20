"use client";

import { ArrowRight, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />
      
      {/* Glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[128px] animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[128px] animate-pulse [animation-delay:1s]" />
      
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 mb-8 backdrop-blur-sm">
          <Zap className="w-4 h-4 text-primary" />
          <span className="text-sm text-primary font-mono">VR HACKATHON IN CLUSTER</span>
        </div>
        
        {/* Main title */}
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tight mb-4">
          <span className="text-foreground" style={{ fontFamily: 'var(--font-noto-sans-jp)' }}>朝</span>
          <span className="text-primary font-mono">hack</span>
          <span className="text-foreground" style={{ fontFamily: 'var(--font-noto-sans-jp)' }}>会</span>
        </h1>
        
        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-muted-foreground mb-2 font-mono">
          {"// CHO-HAKKAI"}
        </p>
        <p className="text-lg md:text-xl text-muted-foreground mb-12" style={{ fontFamily: 'var(--font-noto-sans-jp)' }}>
          朝にハックする会
        </p>
        
        {/* Description */}
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed" style={{ fontFamily: 'var(--font-noto-sans-jp)' }}>
          毎朝VR空間に集まって、<br className="md:hidden" />
          <span className="text-primary">コードを書く</span>。<br className="md:hidden" />
          朝の静けさの中で、<br className="md:hidden" />
          <span className="text-accent">創造性を解き放つ</span>。
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            className="group bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-lg font-bold shadow-[0_0_30px_rgba(0,255,255,0.3)] hover:shadow-[0_0_50px_rgba(0,255,255,0.5)] transition-all duration-300"
          >
            <span style={{ fontFamily: 'var(--font-noto-sans-jp)' }}>参加する</span>
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-muted-foreground/30 text-foreground hover:bg-muted/50 px-8 py-6 text-lg"
          >
            <span style={{ fontFamily: 'var(--font-noto-sans-jp)' }}>詳しく見る</span>
          </Button>
        </div>
        
        {/* Stats */}
        <div className="mt-20 grid grid-cols-3 gap-8 max-w-lg mx-auto">
          <div className="text-center">
            <p className="text-3xl md:text-4xl font-bold text-primary font-mono">6:00</p>
            <p className="text-sm text-muted-foreground mt-1" style={{ fontFamily: 'var(--font-noto-sans-jp)' }}>開始時間</p>
          </div>
          <div className="text-center">
            <p className="text-3xl md:text-4xl font-bold text-foreground font-mono">2h</p>
            <p className="text-sm text-muted-foreground mt-1" style={{ fontFamily: 'var(--font-noto-sans-jp)' }}>セッション</p>
          </div>
          <div className="text-center">
            <p className="text-3xl md:text-4xl font-bold text-accent font-mono">∞</p>
            <p className="text-sm text-muted-foreground mt-1" style={{ fontFamily: 'var(--font-noto-sans-jp)' }}>可能性</p>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
}
