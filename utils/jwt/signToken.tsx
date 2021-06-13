import jwt from 'jsonwebtoken';

export default function signToken(data: any): any {
   return jwt.sign(data, process.env.secretAPIAccessKey, { expiresIn: '1h' });
}
