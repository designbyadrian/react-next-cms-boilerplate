import { getSession } from 'next-auth/client';
import Head from 'next/head';

export default function Home({ stats }) {
  return (
    <>
      <Head>
        <title>React Next CMS Dashboard</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {stats && (
        <div className="flex flex-row">
          {Object.keys(stats).map((key) => (
            <div key={key} className="flex-1 bg-white shadow m-4 p-4">
              <h2 className="text-sm text-gray-500 uppercase">{key}</h2>
              <p className="text-3xl">{stats[key]}</p>
            </div>
          ))}
        </div>
      )}
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
