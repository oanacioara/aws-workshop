#!/usr/bin/env bash
BUCKET_NAME=$1

echo "{
    \"Version\": \"2012-10-17\",
    \"Statement\": [
        {
            \"Sid\": \"PublicReadGetObject\",
            \"Effect\": \"Allow\",
            \"Principal\": \"*\",
            \"Action\": \"s3:GetObject\",
            \"Resource\": \"arn:aws:s3:::${BUCKET_NAME}/*\"
        }
    ]
}" > bucket_policy.json

echo 'Setting bucket policy...'
aws s3api put-bucket-policy --bucket $BUCKET_NAME --policy file://bucket_policy.json

echo 'Configuring static website hosting...'
aws s3 website s3://${BUCKET_NAME}/ --index-document index.html --error-document error.html

rm bucket_policy.json
