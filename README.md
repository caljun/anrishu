# あんりーしゅ — 犬の更生・リハビリサポート

Next.js App Router / React / TypeScript / Tailwind CSS の日本語・レスポンシブサイトです。

## 開発

```sh
npm install
npm run dev
```

## 確認

```sh
npm run typecheck
npm run build
```

## 差し替え

- `lib/site.ts`：サービス名、LINE URL、メール、Instagram URL、事業者情報、写真パス、FAQ。
- `public/images/dog.jpg`：犬のイメージ写真。実際の活動写真に差し替えてください。
- `app/page.tsx`：理念・サービス・料金案内などの文章。
- `app/globals.css`：ブランド色・レイアウト。
- ロゴは `components/header.tsx` と `app/page.tsx` のブランド表示です。
- `app/privacy/page.tsx` は方針の案です。運営体制に合わせて確定してください。

LINE URL等の未設定時は相談セクションへ誘導し、準備中と表示します。架空の連絡先、実績、料金は含みません。料金と所在地、サービス内容は公開前に確定してください。

## Vercel

GitHub の `caljun/anrishu` を Vercel で Import し、Framework Preset は Next.js、Root Directory はリポジトリのルートを指定します。環境変数 `NEXT_PUBLIC_SITE_URL` に本番サイトの URL を設定してデプロイしてください。未設定の場合は robots / メタタグで検索エンジンの登録を抑止します。

画像：Unsplash の犬写真（photo-1552053831-71594a27632d）。活動や訓練実績を示す写真ではありません。
