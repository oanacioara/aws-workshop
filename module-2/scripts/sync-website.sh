#!/usr/bin/env bash
BUCKET_NAME=$1
aws s3 sync static-website s3://${BUCKET_NAME}/
