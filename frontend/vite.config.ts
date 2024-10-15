import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: '너 어딘데',
        short_name: '너 어딘데',
        description: 'My awesome Vite + PWA app',
        theme_color: '#ffffff',
        icons: [
          {
            src: 'pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    }),
  ],
  server: {
    host: '0.0.0.0', // 모든 네트워크 인터페이스에서 접근 가능하도록 설정
    port: 5173, // 개발 서버 포트
    strictPort: true, // 포트 충돌 시 즉시 실패
    hmr: {
      host: 'localhost', // HMR 호스트 설정
      protocol: 'ws', // WebSocket 프로토콜 사용
      port: 5173, // HMR 포트
    },
  },
});
