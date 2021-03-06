import { getSession } from 'next-auth/client';
const axios = require('axios');

/* Configuration */
const ax = axios.create({
  // headers: {
  //   Authorization: `Bearer ${token}`,
  // },
});

export async function request(req, res, options = {}) {
  if (options.protected) {
    const session = await getSession({ req });

    if (!session) {
      return res.status(403).json({});
    }
  }

  try {
    const params = { method: 'get', url: '/', ...options };

    try {
      const content = await ax(params);

      res.json(content.data);
    } catch (e) {
      res.status(404).json({});
    }
  } catch (e) {
    res.status(500).json(e);
  }
}

export default ax;
