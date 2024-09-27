// lambda/index.js
const AWS = require('aws-sdk');
const dynamoDb = new AWS.DynamoDB.DocumentClient();
const tableName = process.env.TABLE_NAME;

exports.handler = async (event) => {
  const response = {
    statusCode: 200,
    body: 'Hello from Lambda',
  };
  return response;
};
