#!/usr/bin/env bash
LAMBDA_NAME=$1
echo "LAMBDA_NAME=${LAMBDA_NAME}"

aws lambda invoke --function-name $LAMBDA_NAME out --log-type Tail
