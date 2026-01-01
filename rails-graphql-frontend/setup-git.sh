#!/bin/bash

# Gitリポジトリの初期化（まだの場合）
if [ ! -d .git ]; then
  git init
fi

# リモートリポジトリの追加（既に存在する場合は更新）
git remote remove origin 2>/dev/null || true
git remote add origin git@github.com:kkfender/rails-graphql-frontend.git

# すべてのファイルをステージング
git add .

# コミット（変更がある場合のみ）
if [ -n "$(git status --porcelain)" ]; then
  git commit -m "Initial commit: Rails GraphQL Frontend with Next.js and Apollo Client"
fi

# メインブランチに設定
git branch -M main

# リモートにプッシュ
echo "GitHubにプッシュします..."
git push -u origin main

echo "完了しました！"

