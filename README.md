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

To build with docker compose
`docker-compose up --build`

To run docker compose
`docker-compose up`
