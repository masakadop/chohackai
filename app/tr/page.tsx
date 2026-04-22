import { ArrowLeft, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const v0Checklist = [
  {
    category: "Repository",
    items: [
      "README に v0 連携情報と開発手順がある",
      "依存関係ロックファイル（pnpm-lock.yaml）が存在する",
      "`.gitignore` が存在し、Node/Next.js 生成物を除外している",
    ],
  },
  {
    category: "Application",
    items: [
      "`app/layout.tsx` と `app/page.tsx` があり、ルートが描画できる",
      "UI コンポーネント（shadcn/ui）が `components/ui` に配置されている",
      "スタイル設定（Tailwind/Global CSS）が有効化されている",
    ],
  },
  {
    category: "CI / Deploy",
    items: [
      "GitHub Actions などのデプロイワークフローがある",
      "`build` スクリプトが package.json に定義されている",
      "静的エクスポート先（out など）がワークフローでアップロードされる",
    ],
  },
];

export default function TRPage() {
  return (
    <main className="min-h-screen bg-background text-foreground py-12 px-4">
      <div className="max-w-4xl mx-auto space-y-8">
        <Link href="/">
          <Button variant="ghost" className="gap-2 text-muted-foreground hover:text-foreground">
            <ArrowLeft className="w-4 h-4" />
            <span style={{ fontFamily: "var(--font-noto-sans-jp)" }}>トップに戻る</span>
          </Button>
        </Link>

        <section className="space-y-3">
          <p className="text-sm text-primary font-mono">TR CHECKLIST</p>
          <h1 className="text-3xl md:text-4xl font-black" style={{ fontFamily: "var(--font-noto-sans-jp)" }}>
            v0 リポジトリ
            <span className="text-primary font-mono"> チェック項目</span>
          </h1>
          <p className="text-muted-foreground" style={{ fontFamily: "var(--font-noto-sans-jp)" }}>
            一般的な v0 プロジェクトで揃っている項目を確認できるよう、TR ページにチェックリストを追加しました。
          </p>
        </section>

        <div className="grid gap-4">
          {v0Checklist.map((group) => (
            <Card key={group.category} className="border-border/70">
              <CardHeader>
                <CardTitle className="text-lg font-mono">{group.category}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {group.items.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                      <span style={{ fontFamily: "var(--font-noto-sans-jp)" }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </main>
  );
}
