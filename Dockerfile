FROM mcr.microsoft.com/playwright:bionic

RUN mkdir ui-automation

WORKDIR ui-automation

COPY package*.json ./

RUN npm install

COPY . .

CMD ["npm", "run", "test"]
