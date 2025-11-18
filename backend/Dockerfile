FROM golang:1.25 AS build

WORKDIR /GoHitchShip

COPY go.mod go.sum ./
RUN go mod download

COPY . .
RUN go build -o main .

FROM debian:bookworm-slim
WORKDIR /app
COPY --from=build /GoHitchShip/main .
CMD ["./main"]
EXPOSE 8080
