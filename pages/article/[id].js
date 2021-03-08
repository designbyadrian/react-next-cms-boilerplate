import { getSession } from 'next-auth/client';
import Head from 'next/head';
import request from 'request';

export default function Article({ article }) {
  return (
    <>
      <Head>
        <title>{article.title} | React Next CMS</title>
      </Head>

      <div className="py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <h1 className="text-2xl font-semibold text-gray-900">
            {article.title}
          </h1>
        </div>
        <div className="max-w-7xl mx-auto mt-4 px-4 sm:px-6 md:px-8">
          <div class="bg-white overflow-hidden shadow sm:rounded-lg">
            <div class="px-4 py-5 sm:p-6">{article.body}</div>
          </div>
        </div>
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
