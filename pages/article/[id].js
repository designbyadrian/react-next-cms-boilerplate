import { getSession } from 'next-auth/client';
import Head from 'next/head';
import request from 'request';

export default function Article({ article }) {
  return (
    <>
      <Head>
        <title>{article.title} | React Next CMS</title>
      </Head>
      <div className="p-4">
        <h1>{article.title}</h1>
        <div>{article.body}</div>
      </div>
    </>
  );
}

export async function getServerSideProps(ctx) {
  const session = await getSession(ctx);

  if (!session) {
    return { redirect: { destination: '/api/auth/signin', permanent: false } };
  }

  const {
    query: { id },
  } = ctx;

  try {
    const result = await request({
      method: 'get',
      url: `${process.env.NEXTAUTH_URL}/api/articles/${id}`,
      headers: ctx.req ? { cookie: ctx.req.headers.cookie } : undefined,
    });

    return {
      props: { article: result.data },
    };
  } catch (e) {
    return {
      notFound: true,
    };
  }
}
