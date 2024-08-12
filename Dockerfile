FROM node

# WORKDIR /app

# COPY package.*json .

# RUN npm install

# COPY . .

# WORKDIR /app/prisma 

# RUN npx prisma generate

# WORKDIR /app

# RUN npm run build

# EXPOSE 3000

# CMD [ "node", "dist/main.js" ]