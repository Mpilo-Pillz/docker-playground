# Specify a base image
FROM node:alpine

# Specify the work directory to avoid overwriting docker container files
WORKDIR /usr/app

# Copy into container
COPY ./ ./
# Install some dependencies
RUN npm install

#Default command
CMD ["npm", "start"]