#!/usr/bin/env bash
BUCKET_NAME=$1
./scripts/create-bucket.sh ${BUCKET_NAME}
./scripts/configure-bucket.sh ${BUCKET_NAME}
./scripts/sync-website.sh ${BUCKET_NAME}
