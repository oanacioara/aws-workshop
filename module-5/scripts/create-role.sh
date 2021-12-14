#!/usr/bin/env bash
LAMBDA_NAME=$1

echo "LAMBDA_NAME=${LAMBDA_NAME}"

echo 'Creating the role...'
aws iam create-role --role-name $LAMBDA_NAME --assume-role-policy-document '{"Version": "2012-10-17","Statement": [{ "Effect": "Allow", "Principal": {"Service": "lambda.amazonaws.com"}, "Action": "sts:AssumeRole"}]}'
echo 'Attaching the policy to the role...'
aws iam attach-role-policy --role-name $LAMBDA_NAME --policy-arn arn:aws:iam::aws:policy/service-role/AWSLambdaBasicExecutionRole

