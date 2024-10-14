// frontend/src/main.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// import { registerSW } from 'virtual:pwa-register';

// const updateSW = registerSW({
//   onNeedRefresh() {
//     // 업데이트가 필요할 때 사용자에게 알리는 로직 추가 가능
//     // 예: 사용자에게 새 버전으로 새로고침을 요청하는 알림 표시
//     console.log('새로운 버전이 준비되었습니다. 새로고침을 해주세요.');
//   },
//   onOfflineReady() {
//     // 오프라인 사용 준비가 되었을 때 실행되는 로직
//     console.log('오프라인에서도 앱을 사용할 수 있습니다.');
//   },
// });

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
