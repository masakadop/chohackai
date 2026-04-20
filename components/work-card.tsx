"use client";

import { ExternalLink, Github, Calendar, User } from "lucide-react";
import Link from "next/link";

interface WorkCardProps {
  title: string;
  description: string;
  author: string;
  date: string;
  tags: string[];
  imageUrl?: string;
  demoUrl?: string;
  githubUrl?: string;
}

export function WorkCard({
  title,
  description,
  author,
  date,
  tags,
  demoUrl,
  githubUrl,
}: WorkCardProps) {
  return (
    <div className="group relative rounded-2xl border border-border bg-card/50 backdrop-blur-sm overflow-hidden hover:border-primary/50 transition-all duration-300">
      {/* Glow effect on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <div className="relative p-6">
        {/* Header */}
        <div className="flex items-start justify-between gap-4 mb-4">
          <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors" style={{ fontFamily: 'var(--font-noto-sans-jp)' }}>
            {title}
          </h3>
          <div className="flex gap-2 shrink-0">
            {demoUrl && (
              <Link 
                href={demoUrl} 
                target="_blank"
                className="p-2 rounded-lg border border-border hover:border-primary hover:bg-primary/10 transition-all"
              >
                <ExternalLink className="w-4 h-4 text-muted-foreground hover:text-primary" />
              </Link>
            )}
            {githubUrl && (
              <Link 
                href={githubUrl} 
                target="_blank"
                className="p-2 rounded-lg border border-border hover:border-primary hover:bg-primary/10 transition-all"
              >
                <Github className="w-4 h-4 text-muted-foreground hover:text-primary" />
              </Link>
            )}
          </div>
        </div>
        
        {/* Description */}
        <p className="text-muted-foreground text-sm leading-relaxed mb-4" style={{ fontFamily: 'var(--font-noto-sans-jp)' }}>
          {description}
        </p>
        
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <span 
              key={tag} 
              className="px-2 py-1 text-xs font-mono text-primary bg-primary/10 rounded-md border border-primary/20"
            >
              {tag}
            </span>
          ))}
        </div>
        
        {/* Meta */}
        <div className="flex items-center gap-4 text-xs text-muted-foreground">
          <div className="flex items-center gap-1">
            <User className="w-3 h-3" />
            <span style={{ fontFamily: 'var(--font-noto-sans-jp)' }}>{author}</span>
          </div>
          <div className="flex items-center gap-1">
            <Calendar className="w-3 h-3" />
            <span>{date}</span>
          </div>
        </div>
      </div>
      
      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-primary via-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>
  );
}
