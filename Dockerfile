# syntax=docker/dockerfile:1
FROM python:3.12-slim

ARG PORT=8080
ARG API_URL
ENV PORT=$PORT API_URL=${API_URL:-http://localhost:$PORT}

RUN apt-get update -y && apt-get install -y caddy unzip && rm -rf /var/lib/apt/lists/*

WORKDIR /app

RUN cat > Caddyfile <<EOF
:{\$PORT}

encode gzip

@backend_routes path /_event/* /ping /_upload /_upload/*
handle @backend_routes {
	reverse_proxy localhost:8000
}

root * /srv
route {
	try_files {path} {path}/ /404.html
	file_server
}
EOF

COPY . .

RUN pip install -r requirements.txt

RUN reflex init

RUN reflex export --frontend-only --no-zip && mv .web/_static/* /srv/ && rm -rf .web

STOPSIGNAL SIGKILL

EXPOSE $PORT

CMD [ -d alembic ] && reflex db migrate; \
	caddy start && reflex run --env prod --backend-only --loglevel debug
