#!/usr/bin/env bash
BUCKET_NAME=$1
echo 'Creating bucket...'
aws s3api create-bucket --bucket $BUCKET_NAME --region eu-west-1 --create-bucket-configuration LocationConstraint=eu-west-1
