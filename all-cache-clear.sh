# pnpmのキャッシュをクリア
pnpm store prune

# 各パッケージのnode_modulesを削除
find . -name "node_modules" -type d -prune -exec rm -rf '{}' +

# パッケージロックファイルを削除
find . -name "pnpm-lock.yaml" -type f -delete

# 再度依存関係をインストール
pnpm install
