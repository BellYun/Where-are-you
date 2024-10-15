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

# TypeScript 빌드
RUN npm run build

# 2. 실행 스테이지
FROM node:18-alpine

# 작업 디렉토리 설정
WORKDIR /app

# package.json 및 package-lock.json 복사
COPY package.json package-lock.json ./

# 프로덕션 의존성 설치
RUN npm install --production

# 빌드된 파일 복사
COPY --from=builder /app/dist ./dist

# 포트 노출
EXPOSE 3000

# 애플리케이션 실행
CMD ["node", "dist/main.js"]
