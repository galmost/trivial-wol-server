FROM iron/node
RUN mkdir -p /app
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
RUN ls -l
CMD node trivial_wol_d.js
EXPOSE 30000
