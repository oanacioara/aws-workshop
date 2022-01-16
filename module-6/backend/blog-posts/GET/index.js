const AWS = require('aws-sdk');
AWS.config.update({ region: 'eu-west-1' });
const dynamoClient = new AWS.DynamoDB.DocumentClient({region: 'eu-west-1'});

exports.handler = async (event) => {
  console.log("Received event: " + JSON.stringify(event));
  let month;
  let author;

  if (event.queryStringParameters && event.queryStringParameters.month) {
    console.log("Received month: " + event.queryStringParameters.month);
    month = event.queryStringParameters.month;
  }

  if (event.headers && event.headers.author) {
    console.log("Received author: " + event.headers.author);
    author = event.headers.author;
  }

  let responseBody = await getBlogPosts();

  let response = {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Headers" : "Content-Type",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "OPTIONS,POST,GET"
    },
    body: JSON.stringify(responseBody)
  };
  console.log("Return: " + JSON.stringify(response))
  return response;
};

const getBlogPosts = async () => {
  const params = {
    TableName: "blog",
  };
  const items = await dynamoClient.scan(params).promise();
  return items.Items;
}
