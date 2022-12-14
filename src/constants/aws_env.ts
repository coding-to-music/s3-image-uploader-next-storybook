export const AWS_ENV = {
  AWS_ACCESS_KEY_ID: process.env.AWS_ACCESS_KEY_ID,
  AWS_SECRET_ACCESS_KEY: process.env.AWS_SECRET_ACCESS_KEY,
  AWS_S3_BUCKET_NAME: process.env.AWS_S3_BUCKET_NAME,
  AWS_S3_HOST_NAME: process.env.AWS_S3_HOST_NAME,
  AWS_S3_REGION_NAME: process.env.AWS_S3_REGION_NAME,

  // AWS_ACCESS_KEY_ID: 'AWS_ACCESS_KEY_ID',
  // AWS_SECRET_ACCESS_KEY: 'AWS_SECRET_ACCESS_KEY',
  // AWS_S3_BUCKET_NAME: 'AWS_S3_BUCKET_NAME',
  // AWS_S3_HOST_NAME: 'AWS_S3_HOST_NAME',
  // AWS_S3_REGION_NAME: 'AWS_S3_REGION_NAME',
} as const;

export type AwsEnv = typeof AWS_ENV[keyof typeof AWS_ENV];
