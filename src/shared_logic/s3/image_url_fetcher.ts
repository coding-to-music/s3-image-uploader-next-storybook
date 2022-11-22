import { ListObjectsCommand, S3Client } from '@aws-sdk/client-s3';
import { createImageUrl } from './image_url_creator';

console.log('image_url_fetcher: createImage_Url: ');

console.log('image_url_fetcher: process.env.AWS_S3_BUCKET_NAME ', process.env.AWS_S3_BUCKET_NAME);

async function fetchObjectKeys(client: S3Client): Promise<string[]> {
  const command = new ListObjectsCommand({
    Bucket: process.env.AWS_S3_BUCKET_NAME,
  });

  console.log('image_url_fetcher: command ', command);

  try {
    const response = await client.send(command);
    const keys = response.Contents.map((content) => content.Key);
    console.log('image_url_fetcher: keys ', keys);
    return keys;
  } catch (err) {
    console.error(err);
  }


}

export async function fetchImageUrlList(client: S3Client, secondsToExpire: number): Promise<string[]> {
  const objectKeys = await fetchObjectKeys(client);
  console.log('image_url_fetcher: objectKeys ', objectKeys);
  // const imageUrlList = await Promise.all(
  //   objectKeys.map(async (key) => await createImageUrl({ imagePath: key, secondsToExpire })),
  // );

  return imageUrlList;
}
