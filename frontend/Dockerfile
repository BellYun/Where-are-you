# 1. 빌드 스테이지
FROM node:18-alpine AS builder

# 작업 디렉토리 설정
WORKDIR /app

# package.json 및 package-lock.json 복사
COPY package.json package-lock.json ./

# 의존성 설치
RUN npm install

# 소스 코드 복사
COPY . .

# 빌드
RUN npm run build

# 2. 배포 스테이지
FROM nginx:alpine

# Nginx 기본 설정 제거
RUN rm -rf /usr/share/nginx/html/*

# 빌드된 파일 복사
COPY --from=builder /app/dist /usr/share/nginx/html

# Nginx 설정 파일 복사 (선택 사항)
# 예: 리다이렉트를 설정하려면 custom.conf 파일을 생성하고 복사
# COPY nginx.conf /etc/nginx/conf.d/default.conf

# 포트 노출을 5173으로 변경
EXPOSE 5173

# Nginx 실행
CMD ["nginx", "-g", "daemon off;"]
