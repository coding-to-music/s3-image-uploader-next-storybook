import { ListObjectsCommand, S3Client } from '@aws-sdk/client-s3';
import { createImageUrl } from './image_url_creator';

console.log('image_url_fetcher: createImage_Url: ');

console.log('image_url_fetcher: process.env.AWS_S3_BUCKET_NAME ', process.env.AWS_S3_BUCKET_NAME);

async function fetchObjectKeys(client: S3Client): Promise<string[]> {
  const command = new ListObjectsCommand({
    Bucket: process.env.AWS_S3_BUCKET_NAME,
  });

  console.log('image_url_fetcher: command ZZZZZZZZZZZZZZZZZZZZZZZ');
  console.log('image_url_fetcher: command ', command);
  console.log('image_url_fetcher: command ZZZZZZZZZZZZZZZZZZZZZZZ');

  try {
    console.log('image_url_fetcher: response SSSSSSSSSSSSSSSSSSSSS');
    const response = await client.send(command);
    console.log('image_url_fetcher: response ');
    console.log(response);
    console.log('image_url_fetcher: response SSSSSSSSSSSSSSSSSSSSS');
    const keys = response.Contents.map((content) => content.Key);
    console.log('image_url_fetcher: keys YYYYYYYYYYYYYYYY');
    console.log('image_url_fetcher: keys ', keys);
    console.log('image_url_fetcher: keys YYYYYYYYYYYYYYYY');
    return keys;
  } catch (err) {
    console.log('image_url_fetcher: await client.send(command) RRRRRRRRRRRRRRRRRR');
    console.error(err);
    console.log('image_url_fetcher: await client.send(command) RRRRRRRRRRRRRRRRRR');
  }
}

export async function fetchImageUrlList(client: S3Client, secondsToExpire: number): Promise<string[]> {
  const objectKeys = await fetchObjectKeys(client);
  console.log('image_url_fetcher: objectKeys XXXXXXXXXXXXXXX');
  console.log('image_url_fetcher: objectKeys ', objectKeys);
  console.log('image_url_fetcher: objectKeys XXXXXXXXXXXXXXX');
  const imageUrlList = await Promise.all(
    objectKeys.map(async (key) => await createImageUrl({ imagePath: key, secondsToExpire })),
  );

  return imageUrlList;
}
