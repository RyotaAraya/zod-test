import { defineConfig } from 'vite';

export default defineConfig({
  base: './', // 相対パスを使用（これでビルド後のアセットパスを調整）
  build: {
    assetsDir: 'assets', // アセットの出力先ディレクトリ
  },
});
