#!/usr/bin/env bash
LAMBDA_NAME=$1

echo "LAMBDA_NAME=${LAMBDA_NAME}"

rm function.zip

echo 'Archiving the code...'
cp backend/index.js index.js
zip function.zip index.js
rm index.js

aws lambda update-function-code --function-name $LAMBDA_NAME --zip-file fileb://function.zip

rm function.zip
