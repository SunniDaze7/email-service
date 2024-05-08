const AWS = require('aws-sdk');
const ses = new AWS.SES({ region: 'us-west-2' });
'use strict';

module.exports.sendEmail = async (event) => {
  const params = {
    Destination: {
      ToAddresses: ['pnykii98@gmail.com'], // This should be your email address
    },
    Message: {
      Body: {
        Text: {
          Data: 'This is a message generated automatically from a Lambda function.',
        },
      },
      Subject: {
        Data: 'Hello from Lambda',
      },
    },
    Source: 'pnykii98@gmail.com', // This is the email listed in sender. Set it to your email for this practice
  };
  await ses.sendEmail(params).promise();
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: `Email sent to ${params.Destination.ToAddresses}`,
        input: event,
      },
      null,
      2
    ),
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
