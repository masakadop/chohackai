export function Footer() {
  return (
    <footer className="py-8 px-4 border-t border-border">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="text-xl font-black" style={{ fontFamily: 'var(--font-noto-sans-jp)' }}>
            朝<span className="text-primary font-mono">hack</span>会
          </span>
          <span className="text-muted-foreground font-mono text-sm">// CHO-HAKKAI</span>
        </div>
        
        <p className="text-muted-foreground text-sm font-mono">
          © {new Date().getFullYear()} 朝hack会. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
