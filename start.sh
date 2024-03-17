#!/bin/bash

# コマンドライン引数からサービス名を取得
service="$1"

if [ -z "$service" ]; then
  echo "Usage: $0 <service_name>"
  echo "  service_name: front, api, db"
  exit 1
fi

# Docker Composeで特定のサービスを起動
echo "Starting service: $service"
docker compose exec $service /bin/bash
