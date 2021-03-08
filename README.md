# ⚛ React Next CMS by Adrian

> This is a [Next.js](https://nextjs.org/) project ready for authentication, API connectivity, [FontAwesome][fontawesome], and [Tailwind][tailwind] as CSS framework.

**Requirements**

- Node 14.15.5

## 🚀 Getting Started

First, install dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## 📚 Documentation

### 🔐 Authentication

This boilerplate uses a dumb credentials login as an example. To configure for use with other methods like Auth0 and PostgreSQL,[see Authentication in the NextJS docs](https://nextjs.org/docs/authentication)

### 🚢 Deployment

This project is ready to be shipped with [Docker](https://www.docker.com). Connect it to your CI and enjoy! Here's how to test it locally:

```bash
# build Docker image
docker build . -t myorg/react-next-cms --build-arg NEXTAUTH_URL=URL_OF_APP

# run the Docker image
docker run -p 3000:3000 myorg/react-next-cms
```

For other ways of deployment, [see Deployment in the NextJS docs](https://nextjs.org/docs/deployment)

### 🔎 Read more

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

[nextjs]: https://nextjs.org/
[fontawesome]: https://fontawesome.com
[tailwind]: https://tailwindcss.com
