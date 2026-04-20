import { ArrowLeft, Sparkles } from "lucide-react";
import Link from "next/link";
import { WorkCard } from "@/components/work-card";
import { Button } from "@/components/ui/button";

const works = [
  {
    title: "VR Todo アプリ",
    description: "Cluster上で動作する3D空間内タスク管理アプリ。手を伸ばしてタスクを完了させる直感的なUI。",
    author: "田中太郎",
    date: "2026-04-15",
    tags: ["Unity", "C#", "Cluster SDK"],
    demoUrl: "https://cluster.mu/",
    githubUrl: "https://github.com/",
  },
  {
    title: "朝活タイマー Bot",
    description: "Discord/Slackに通知を送る朝活リマインダーBot。参加者の起床状況を可視化するダッシュボード付き。",
    author: "佐藤花子",
    date: "2026-04-08",
    tags: ["TypeScript", "Discord.js", "Next.js"],
    githubUrl: "https://github.com/",
  },
  {
    title: "コード共有VRボード",
    description: "VR空間内でリアルタイムにコードを共有・編集できるホワイトボード。シンタックスハイライト対応。",
    author: "鈴木一郎",
    date: "2026-04-01",
    tags: ["React Three Fiber", "WebRTC", "Monaco Editor"],
    demoUrl: "https://example.com/",
    githubUrl: "https://github.com/",
  },
  {
    title: "朝hack会 LP ジェネレーター",
    description: "ハッカソンイベント用のランディングページを簡単に生成できるツール。テーマカスタマイズ機能付き。",
    author: "山田優子",
    date: "2026-03-25",
    tags: ["Next.js", "Tailwind CSS", "shadcn/ui"],
    demoUrl: "https://example.com/",
    githubUrl: "https://github.com/",
  },
  {
    title: "VR ペアプロ環境",
    description: "Cluster内で2人同時にコーディングできるペアプログラミング環境。音声チャット統合。",
    author: "高橋健太",
    date: "2026-03-18",
    tags: ["Unity", "Photon", "Cluster SDK"],
    githubUrl: "https://github.com/",
  },
  {
    title: "朝の集中力分析ダッシュボード",
    description: "参加者の作業ログを分析し、最も生産性の高い時間帯を可視化。個人の朝活パターンを最適化。",
    author: "伊藤美咲",
    date: "2026-03-11",
    tags: ["Python", "FastAPI", "Chart.js"],
    demoUrl: "https://example.com/",
  },
  {
    title: "VR ポモドーロタイマー",
    description: "25分作業・5分休憩のポモドーロテクニックをVR空間で実現。休憩中はリラックス空間に移動。",
    author: "渡辺翔太",
    date: "2026-03-04",
    tags: ["Unity", "C#", "Cluster SDK"],
    demoUrl: "https://cluster.mu/",
    githubUrl: "https://github.com/",
  },
  {
    title: "コードスニペット共有サービス",
    description: "朝hack会で生まれたコードスニペットを共有・検索できるWebサービス。タグ検索とお気に入り機能付き。",
    author: "中村あい",
    date: "2026-02-25",
    tags: ["Next.js", "Supabase", "TypeScript"],
    demoUrl: "https://example.com/",
    githubUrl: "https://github.com/",
  },
];

export default function WorksPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Background effects */}
      <div className="fixed inset-0 bg-[linear-gradient(rgba(0,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none" />
      <div className="fixed top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="fixed bottom-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="relative z-10">
        {/* Header */}
        <header className="py-8 px-4">
          <div className="max-w-6xl mx-auto">
            <Link href="/">
              <Button variant="ghost" className="gap-2 text-muted-foreground hover:text-foreground">
                <ArrowLeft className="w-4 h-4" />
                <span style={{ fontFamily: 'var(--font-noto-sans-jp)' }}>トップに戻る</span>
              </Button>
            </Link>
          </div>
        </header>
        
        {/* Hero */}
        <section className="py-12 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 mb-6">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary font-mono">WORKS GALLERY</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-black mb-4">
              <span className="text-foreground" style={{ fontFamily: 'var(--font-noto-sans-jp)' }}>成果</span>
              <span className="text-primary font-mono">物</span>
              <span className="text-foreground" style={{ fontFamily: 'var(--font-noto-sans-jp)' }}>リスト</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto" style={{ fontFamily: 'var(--font-noto-sans-jp)' }}>
              朝hack会で生まれたプロジェクトたち。<br />
              朝の2時間で、こんなものが作れる。
            </p>
          </div>
        </section>
        
        {/* Works Grid */}
        <section className="py-12 px-4 pb-24">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {works.map((work, index) => (
                <WorkCard key={index} {...work} />
              ))}
            </div>
            
            {/* Stats */}
            <div className="mt-16 text-center">
              <div className="inline-flex items-center gap-8 px-8 py-4 rounded-2xl border border-border bg-card/30 backdrop-blur-sm">
                <div>
                  <p className="text-2xl font-bold text-primary font-mono">{works.length}</p>
                  <p className="text-xs text-muted-foreground" style={{ fontFamily: 'var(--font-noto-sans-jp)' }}>プロジェクト</p>
                </div>
                <div className="w-px h-8 bg-border" />
                <div>
                  <p className="text-2xl font-bold text-foreground font-mono">12+</p>
                  <p className="text-xs text-muted-foreground" style={{ fontFamily: 'var(--font-noto-sans-jp)' }}>参加者</p>
                </div>
                <div className="w-px h-8 bg-border" />
                <div>
                  <p className="text-2xl font-bold text-accent font-mono">50+</p>
                  <p className="text-xs text-muted-foreground" style={{ fontFamily: 'var(--font-noto-sans-jp)' }}>セッション</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
