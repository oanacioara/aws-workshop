# aws-workshop

### Workshop Prerequisites
* Basic knowledge of HTML, CSS and Javascript
* Basic understanding of what an API and a database are
* Basic understanding of client-server architecture
* It would be useful to have some experience with bash scripting but not a must


### [Introduction](module-1/README.md)
* What happens behind the scenes from the moment you type a DNS till you get the website rendered in your browser?
* What is Cloud?
* What are some Cloud providers?
* Explore the AWS console
* Overview of the AWS services
* AWS SDK
* AWS CLI
* Create an AWS free account

### [Host a website on S3](module-2/README.md)
* Overview of S3: bucket, objects, access policy
* Creating a bucket (console and CLI)
* Configure a bucket for static website hosting (console and CLI)

### [Global content delivery with CloudFront](module-3/README.md)
* Overview of CloudFront
* Setup a CloudFront distribution for the S3 bucket
* Setup a DNS for the website

### [Computing power with AWS Lambda](module-4/README.md)
* Overview of AWS Lambda
* Creating a Lambda (console & CLI)
* Uploading code to Lambda (console & CLI)
* Execute Lambda (console & CLI)
* Explore Lambda logs and metrics in CloudWatch
* Configure application server for handling HTTP requests

### Create an API with API Gateway
* Overview of API Gateway
* Creating an API Gateway
* Configure a route and link it to the Lambda
* Make an API call from website

### Can’t do anything without a database. AWS RDS and DynamoDB
* Overview of RDS
* Overview of DynamoDB
* Configure a DynamoDB
* Store and query for items in DynamoDB
* Call DynamoDB from Lambda
