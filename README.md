# docker-playground

Reference for how to configure docker

# To run docker

`docker build .`
or
`docker build -t mpilopillz/simpleweb .` to run tagged

then `docker run -p 8080:8080 mpilopillz/simpleweb`

To access docker file system
`docker run -it mpilopillz/simpleweb sh`

# Docker Compose

To run docker compose
`docker-compose up` in detached mode `docker-compose up -d`

To stop
`docker-compose down`

To re-build with docker compose
`docker-compose up --build`

TO see the runng process
`docker-compose ps`

\*\* Restart Policies

- no - 'no' in quotes cos yaml treats no as false
- always
- on-failure
- unless-stopped

# Running custom docker file

`docker build -f Dockerfile.dev .`

# Running with volumes

`docker run -p 3000:3000 -v $(pwd):/app <imgID>`
the correct way
`docker run -p 3000:3000 -v /app/node_modules -v $(pwd):/app sha256:36789d01c0cf2eddcf35417e2f7a8b82f1447ba8bff26a6cfeb3724cd0b7dde`

# Running test in interactive mode

`docker run -it <imgID> npm run test`
