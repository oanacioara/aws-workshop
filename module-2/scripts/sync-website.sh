#!/usr/bin/env bash
BUCKET_NAME=$1
echo 'Uploading website...'
aws s3 sync static-website s3://${BUCKET_NAME}/ >/dev/null
