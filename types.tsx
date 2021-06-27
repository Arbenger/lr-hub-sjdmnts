import type { NextApiRequest } from 'next';

export interface NextApiRequestWithToken extends NextApiRequest {
   query: {
      token: string;
   };
}
