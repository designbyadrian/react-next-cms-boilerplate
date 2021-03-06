import { getSession } from 'next-auth/client';

export default async function handler(req, res) {
  const session = await getSession({ req });

  if (!session) {
    return res.status(401);
  }

  if (req.method !== 'GET') {
    return res.status(400);
  }

  const result = await request.get(`http://jsonplaceholder.typicode.com/posts`);

  res.json(result);
}
