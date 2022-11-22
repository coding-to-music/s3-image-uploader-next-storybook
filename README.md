# s3-image-uploader-next-storybook

# 🚀 Image uploader for AWS S3. 🚀

https://github.com/coding-to-music/s3-image-uploader-next-storybook

From / By https://github.com/kubosho/s3-image-uploader

## Environment variables:

```java
AWS_ACCESS_KEY_ID=<key_id>
AWS_SECRET_ACCESS_KEY=<access_key>
AWS_S3_BUCKET_NAME=<bucket_name>
AWS_S3_HOST_NAME=<host_name>
AWS_S3_REGION_NAME=<region_name>
AWS_CLOUD_FRONT_HOST_NAME=<host_name>
```

## GitHub

```java
git init
git add .
git remote remove origin
git commit -m "first commit"
git branch -M main
git remote add origin git@github.com:coding-to-music/s3-image-uploader-next-storybook.git
git push -u origin main
```

# S3 image uploader

Image uploader for AWS S3.

## Development

Launch development server:

```
yarn dev
```

Execute build:

```
yarn build
```

Run lint:

```
yarn lint
```

Run test runner:

```
yarn test
```

Launch storybook:

```
yarn storybook
```

## Errors while trying to get it to work

```
image_url_fetcher: await client.send(command) RRRRRRRRRRRRRRRRRR
TypeError: Cannot read properties of undefined (reading 'map')
    at fetchObjectKeys (webpack-internal:///./src/shared_logic/s3/image_url_fetcher.ts:25:40)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async fetchImageUrlList (webpack-internal:///./src/shared_logic/s3/image_url_fetcher.ts:37:24)
    at async getStaticProps (webpack-internal:///./src/pages/index.tsx:171:26)
    at async Object.renderToHTML (/mnt/volume_nyc1_01/s3-image-uploader-next-storybook/node_modules/next/dist/server/render.js:386:20)
    at async doRender (/mnt/volume_nyc1_01/s3-image-uploader-next-storybook/node_modules/next/dist/server/base-server.js:687:38)
    at async cacheEntry.responseCache.get.isManualRevalidate.isManualRevalidate (/mnt/volume_nyc1_01/s3-image-uploader-next-storybook/node_modules/next/dist/server/base-server.js:796:28)
    at async /mnt/volume_nyc1_01/s3-image-uploader-next-storybook/node_modules/next/dist/server/response-cache/index.js:80:36
image_url_fetcher: await client.send(command) RRRRRRRRRRRRRRRRRR
image_url_fetcher: objectKeys XXXXXXXXXXXXXXX
image_url_fetcher: objectKeys  undefined
image_url_fetcher: objectKeys XXXXXXXXXXXXXXX
wait  - compiling /_error (client and server)...
error - src/shared_logic/s3/image_url_fetcher.ts (43:15) @ fetchImageUrlList
error - TypeError: Cannot read properties of undefined (reading 'map')
    at fetchImageUrlList (webpack-internal:///./src/shared_logic/s3/image_url_fetcher.ts:41:55)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async getStaticProps (webpack-internal:///./src/pages/index.tsx:171:26)
    at async Object.renderToHTML (/mnt/volume_nyc1_01/s3-image-uploader-next-storybook/node_modules/next/dist/server/render.js:386:20)
    at async doRender (/mnt/volume_nyc1_01/s3-image-uploader-next-storybook/node_modules/next/dist/server/base-server.js:687:38)
    at async cacheEntry.responseCache.get.isManualRevalidate.isManualRevalidate (/mnt/volume_nyc1_01/s3-image-uploader-next-storybook/node_modules/next/dist/server/base-server.js:796:28)
    at async /mnt/volume_nyc1_01/s3-image-uploader-next-storybook/node_modules/next/dist/server/response-cache/index.js:80:36 {
  page: '/'
}
  41 |   console.log('image_url_fetcher: objectKeys XXXXXXXXXXXXXXX');
  42 |   const imageUrlList = await Promise.all(
> 43 |     objectKeys.map(async (key) => await createImageUrl({ imagePath: key, secondsToExpire })),
     |               ^
  44 |   );
  45 | 
  46 |   return imageUrlList;
event - compiled client and server successfully in 758 ms (806 modules)
```