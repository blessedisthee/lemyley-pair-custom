FROM node:20-bullseye

# Install system dependencies (git + ssh REQUIRED)
RUN apt-get update && apt-get install -y \
    git \
    openssh-client \
    ffmpeg \
    imagemagick \
    libwebp-dev \
  && rm -rf /var/lib/apt/lists/*

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 8000
CMD ["npm", "start"]
