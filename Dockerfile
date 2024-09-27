FROM node:20

WORKDIR /app

COPY package.json .

RUN npm install
# npm 인스톨 바로 하도록

COPY . .
# 모든파일을 컨테이너로 이동

EXPOSE 3000
# 3000번 포트를 컨테이너가 열어줄 수 있도록

CMD ["npm", "start"]
