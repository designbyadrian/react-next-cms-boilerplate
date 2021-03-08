import { getSession } from 'next-auth/client';
import Head from 'next/head';

export default function Home({ stats }) {
  const now = new Date();

  return (
    <>
      <Head>
        <title>React Next CMS Dashboard</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <div>
            {stats && (
              <>
                <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
                  {Object.keys(stats).map((key) => (
                    <div className="bg-white overflow-hidden shadow rounded-lg">
                      <div className="px-4 py-5 sm:p-6">
                        <dt className="text-sm font-medium uppercase text-gray-500 truncate">
                          {key}
                        </dt>
                        <dd className="mt-1 text-3xl font-semibold text-gray-900">
                          {stats[key]}
                        </dd>
                      </div>
                    </div>
                  ))}
                </dl>
                <div className="mt-4 text-sm text-gray-500">
                  Updated {now.toString()}
                </div>
              </>
            )}
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

  const res = await fetch(`${process.env.NEXTAUTH_URL}/api/dashboard`);
  const data = await res.json();

  return { props: { stats: data } };
}
