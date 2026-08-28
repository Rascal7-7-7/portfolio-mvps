# mvp-subscription-ec

portfolio-mvps の1つ。サブスク型 D2C EC のデモ用 MVP。

## Stack

- Next.js (App Router) / React / TypeScript
- Tailwind CSS、clsx + tailwind-merge、lucide-react
- PostgreSQL（`pg` 直接利用。ORM なし）
- Vercel（`vercel.json` は現状空）

## Commands

```bash
npm run dev
npm run build
npm start
npm run lint
npm run db:init   # node --env-file=.env.local scripts/init-db.mjs
```

`db:init` は `.env.local` を要求する。値はコミットせず、ログにも出さない。

## Layout

```
app/{products, subscriptions, cart, checkout, complete, api}
lib/{db.ts, types.ts}
sql/{schema.sql, seed.sql}
scripts/init-db.mjs
```

## Project rules

このMVPの目的・優先フロー・やらないことは `CLAUDE.local.md` にある
（価値メッセージ、Product Goal、優先フロー、Priority、Avoid、コマンド、Execution Rules）。
重複管理を避けるためここには複製せず、そちらを参照する。

MVP共通の方針（デモ優先・レビュー基準・コマンド対応表）は親の
`portfolio-mvps/CLAUDE.md` が定める。

スキルは `.claude/skills/` から自動探索されるため、ここに一覧を持たない。
