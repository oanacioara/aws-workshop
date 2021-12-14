#!/usr/bin/env bash
LAMBDA_NAME=$1
ACCOUNT_ID=$2
METHOD=$3

echo "LAMBDA_NAME=${LAMBDA_NAME}"
echo "ACCOUNT_ID=${ACCOUNT_ID}"
echo "METHOD=${METHOD}"

rm function.zip

echo 'Archiving the code...'
cp backend/blog-posts/${METHOD}/index.js index.js
zip function.zip index.js
rm index.js

echo 'Creating the lambda...'
aws lambda create-function --function-name $LAMBDA_NAME \
--zip-file fileb://function.zip --handler index.handler --runtime nodejs14.x \
--role arn:aws:iam::${ACCOUNT_ID}:role/${LAMBDA_NAME}

rm function.zip
