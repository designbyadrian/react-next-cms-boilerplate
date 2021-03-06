import { request } from 'request';

export default async function handler(req, res) {
  const { id } = req.query;

  await request(req, res, {
    protected: true,
    url: `http://jsonplaceholder.typicode.com/posts/${id}`,
  });
}
