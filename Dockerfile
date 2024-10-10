FROM node
WORKDIR /app
COPY package*.json .
ADD server.js . 
RUN npm install 
# DIT DOET NIKS!
EXPOSE 3000
CMD node server.js