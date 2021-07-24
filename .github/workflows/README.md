# React CRA AWS S3 deployment using Github Action

## Overview

Amazon’s S3 buckets are a popular option for storing static assets. One of the most common use cases of S3 is storing images for display on a web or mobile app. There’s nothing stopping you from storing any static asset in an S3 bucket, though, so will use it to store and display our HTML, CSS, JavaScript, and any other assets required by our application.

### Steps to create an S3 bucket

- [x] Create an account or sign to AWS console:
    [https://aws.amazon.com/](https://aws.amazon.com/)

- [x] Create a new S3 Bucket: Navigate to the S3 Service and click `Create Bucket`. Configure the settings as per the needs.

> NOTE: In the `Set Permissions` section allows public access.

- [x] Defining the entry point: Click on the newly created bucket. Within the `properties`, open the `Static Website Hosting`. Fill the `index.html` for both the Index & Error documents.

- [x] Open the bucket permission tab, and select the `Bucket Policy`. Using [AWS Policy Generator](http://awspolicygen.s3.amazonaws.com/policygen.html), generates a policy for the bucket with ARN resource as `arn:aws:s3:::<bucket-name>/*`, Action as `s3:GetObject`, Principal as `*`, and Effect as `Allow`.

```
{
  "Id": "Policy1627117080822",
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "Stmt1627117076898",
      "Action": [
        "s3:GetObject"
      ],
      "Effect": "Allow",
      "Resource": "arn:aws:s3:::<bucket-name>/*",
      "Principal": "*"
    }
  ]
}
```

### Steps to create a GitHub action:

> NOTE: We will be deploying our application on a GitHub trigger when `tag is created`

- [x] Create a file named `aws.yaml` in directory `.github/workflows`.
- [x] Now paste the below piece of code.
```
name: aws-s3-depl

on:
  push:
    tags:
      - "v*"

jobs:
  build:
    runs-on: ubuntu-latest
    strategy:
      matrix:
        node-version: [14.x]
    steps:
      - uses: actions/checkout@v2
      - name: Configure AWS Credentials
        uses: aws-actions/configure-aws-credentials@v1
        with:
          aws-access-key-id: ${{ secrets.AWS_ACCESS_KEY_ID }}
          aws-secret-access-key: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
          aws-region: ${{ secrets.AWS_REGION }}
      - name: Build React App
        run: npm ci && npm run build
      - name: Deploy app build to S3 bucket
        run: aws s3 sync ./build/ s3://marketplace-mockup --delete

```
    
- Breaking the above code
    - `name` is the GitHub action name.
    - `on` is the trigger on which occurrence, the job will be triggered.
    - `jobs` is the set of instructions that are performed once the job is triggered.
    - `build` is providing the environment configuration to the job such as OS, matrix, etc.
    - `steps` is the instruction definition.
- In `steps`, we are first configuring the AWS configuration, and then we build and pushing the build on the S3 bucket.

### Steps to add a AWS configurations to a repo

- Go to repo settings in the Github repository.
- In the sidebar, you will see an option named `secrets`, click on that.
- Add key and its value. Keys are: AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY, & AWS_REGION.

To generate AWS_ACCESS_KEY follow: https://aws.amazon.com/blogs/security/wheres-my-secret-access-key/

### Results

Now, if you create/push a tag on github it will automatically deployed on the s3 bucket.


## Thanks
