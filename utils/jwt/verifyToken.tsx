import jwt from 'jsonwebtoken';

export default function verifyToken(token: string): any {
   return jwt.verify(token, process.env.secretAPIAccessKey);
}
