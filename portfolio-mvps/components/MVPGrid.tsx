import { ArrowRight } from "lucide-react";
import { MVPCard, type MVPCardProps } from "./MVPCard";

const mvps: MVPCardProps[] = [
  {
    title: "LP生成サービス",
    valueMessage: "集客と予約導線を一体化するLP生成サービス",
    description:
      "業種・ターゲット・訴求軸を入力するだけで、集客に特化したLPを自動生成。LP制作のリードタイムを大幅に短縮します。",
    tags: ["Next.js", "OpenAI API", "Tailwind"],
    effects: [
      { label: "制作工数 -70%", type: "reduce" },
      { label: "予約導線一体化", type: "check" },
    ],
    period: "5日",
    target: "小規模店舗・サロン",
    githubUrl: "https://github.com",
    demoUrl: "#",
  },
  {
    title: "予約管理システム",
    valueMessage: "無断キャンセルを削減する予約管理システム",
    description:
      "紙やLINEで管理していた予約をデジタル化。リマインド自動送信・キャンセルポリシー設定でノーショーを削減します。",
    tags: ["Next.js", "Prisma", "PostgreSQL"],
    effects: [
      { label: "ノーショー削減", type: "reduce" },
      { label: "手動対応 -60%", type: "reduce" },
      { label: "予約データ一元化", type: "data" },
    ],
    period: "7日",
    target: "美容室・クリニック・個人サロン",
    githubUrl: "https://github.com",
    demoUrl: "#",
  },
  {
    title: "見積管理ツール",
    valueMessage: "見積作成と案件管理を一元化する業務ツール",
    description:
      "Excelで分散していた見積・案件情報を一か所に集約。テンプレートから即生成し、承認・進捗管理まで完結します。",
    tags: ["Next.js", "Prisma", "TypeScript"],
    effects: [
      { label: "営業工数 -40%", type: "reduce" },
      { label: "作成ミス削減", type: "check" },
      { label: "案件データ集約", type: "data" },
    ],
    period: "6日",
    target: "フリーランス・小規模営業チーム",
    githubUrl: "https://github.com",
    demoUrl: "#",
  },
  {
    title: "サブスクEC基盤",
    valueMessage: "リピート売上を最大化するサブスクEC基盤",
    description:
      "定期購入・ポイント・顧客管理を一体化したD2C向けEC。新規より単価の高いリピーター獲得に特化した設計です。",
    tags: ["Next.js", "Stripe", "Prisma"],
    effects: [
      { label: "LTV向上", type: "check" },
      { label: "解約率低減", type: "reduce" },
      { label: "顧客データ集約", type: "data" },
    ],
    period: "8日",
    target: "D2C事業者・ネットショップ",
    githubUrl: "https://github.com",
    demoUrl: "#",
  },
  {
    title: "フリーランス管理ツール",
    valueMessage: "収支と稼働を可視化するプロジェクト管理ツール",
    description:
      "案件・請求・稼働時間をひとつのダッシュボードで管理。「いくら稼いだか」「どこに時間を使っているか」が一目でわかります。",
    tags: ["Next.js", "Prisma", "Chart.js"],
    effects: [
      { label: "収支の可視化", type: "data" },
      { label: "請求漏れ防止", type: "check" },
      { label: "業務一元化", type: "data" },
    ],
    period: "6日",
    target: "フリーランス・個人事業主",
    githubUrl: "https://github.com",
    demoUrl: "#",
  },
];

export function MVPGrid() {
  return (
    <section id="mvps" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <p className="text-brand-500 text-sm font-semibold mb-3">MVP CASES</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-surface-50 mb-4">
            実際に動く、業務改善の事例
          </h2>
          <p className="text-surface-400 max-w-xl">
            機能を作るのではなく、業務の課題を解くことを目的に設計しています。
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {mvps.map((mvp) => (
            <MVPCard key={mvp.title} {...mvp} />
          ))}
        </div>

        {/* Post-grid CTA */}
        <div className="bg-surface-900 rounded-2xl p-8 text-center">
          <p className="text-surface-300 text-lg font-medium mb-2">
            このような業務課題も解決できます
          </p>
          <p className="text-surface-500 text-sm mb-6">
            まずは気軽にご相談ください
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-brand-600 hover:bg-brand-500 text-white font-semibold rounded-xl transition-colors"
          >
            無料相談
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
