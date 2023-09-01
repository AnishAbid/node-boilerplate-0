import dotenv from 'dotenv';
import path from 'path';
dotenv.config({
  path: path.resolve(
    __dirname,
    '../../.env.' + (process.env.NODE_ENV || 'development')
  )
});

export default {
  NODE_ENV: <string>process.env.NODE_ENV,
  HOST: <string>process.env.HOST,
  PORT: <string>process.env.PORT,
  DB: <string>process.env.MONGO_SERVER_LOCAL,

  CRYPTO_PRIVATE_KEY: <string>process.env.CRYPTO_PRIVATE_KEY,

  STRIPE_SECRET_KEY: <string>process.env.STRIPE_SECRET_KEY,

  EMAIL_SERVICE: <string>process.env.EMAIL_SERVICE,
  EMAIL_CONFIG_EMAIL: <string>process.env.EMAIL_CONFIG_EMAIL,
  EMAIL_CONFIG_PASSWORD: <string>process.env.EMAIL_CONFIG_PASSWORD,

  ACCESS_TOKEN_SECRET: <string>process.env.ACCESS_TOKEN_SECRET,

  APPROVAL_EMAIL_ADDRESS: <string>process.env.APPROVAL_EMAIL_ADDRESS,

  ADMIN_PORTAL_URL: <string>process.env.ADMIN_PORTAL_URL,
  USER_PORTAL_URL: <string>process.env.USER_PORTAL_URL,
  CAMPAIGN_PORTAL_PROTOCOL: <string>process.env.CAMPAIGN_PORTAL_PROTOCOL,
  CAMPAIGN_PORTAL_BASE_URL: <string>process.env.CAMPAIGN_PORTAL_BASE_URL,

  SUPPORT_EMAIL: process.env.SUPPORT_EMAIL,
  SUPPORT_CC: process.env.SUPPORT_CC,
  EMAIL_AWS_REGION: process.env.EMAIL_AWS_REGION,

  S3_BUCKET: <string>process.env.S3_BUCKET,

  SES_ACCESS_KEY_ID: <string>process.env.SES_ACCESS_KEY_ID,
  SES_SECRET_ACCESS_KEY: <string>process.env.SES_SECRET_ACCESS_KEY,
  FLASH_API_ACCESS_KEY: <string>process.env.FLASH_API_ACCESS_KEY,
  WORKER_URL: <string>process.env.WORKER_URL,
  AGENDA_DB: <string>process.env.AGENDA_DB,

  AUDIENCE_ID: <string>process.env.AUDIENCE_ID,
  MAILCHIMP_API_KEY: <string>process.env.MAILCHIMP_API_KEY,
  MAILCHIMP_SERVER: <string>process.env.MAILCHIMP_SERVER
};
