FROM golang:1.23 AS build
WORKDIR /app
COPY go.mod go.sum ./
RUN go mod download
COPY . .
RUN go build -o /bin/backend ./main.go

FROM debian:stable-slim AS runtime
COPY --from=0 /bin/backend /bin/backend
RUN apt-get update && apt-get install -y imagemagick gifsicle 
CMD ["/bin/backend"]