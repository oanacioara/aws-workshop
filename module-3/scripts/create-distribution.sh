#!/usr/bin/env bash
BUCKET_NAME=$1
aws cloudfront create-distribution \
    --origin-domain-name ${BUCKET_NAME}.s3.amazonaws.com \
    --default-root-object index.html
