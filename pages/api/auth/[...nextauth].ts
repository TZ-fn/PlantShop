import { NextApiRequest, NextApiResponse } from 'next';
import NextAuth from 'next-auth';
import EmailProvider from 'next-auth/providers/email';

const day = 24 * 60 * 60;
const days = 30 * day;
const maxAge = days;

const options = {
  site: process.env.NEXTAUTH_URL,
  providers: [
    EmailProvider({
      server: {
        port: 465,
        host: 'smtp.gmail.com',
        secure: true,
        auth: {
          user: process.env.EMAIL_USERNAME,
          pass: process.env.EMAIL_PASSWORD,
        },
        tls: {
          rejectUnauthorized: false,
        },
      },
      from: process.env.EMAIL_FROM,
    }),
  ],
  session: {
    jwt: true,
    maxAge: maxAge,
  },
  database: process.env.DATABASE_URL,
  callbacks: {
    redirect: async ({ url, baseUrl }: { url: string; baseUrl: string }) => {
      if (url === '/api/auth/signin') {
        return Promise.resolve('/account');
      }
      return Promise.resolve('/api/auth/signin');
    },
  },
};

export default (req: NextApiRequest, res: NextApiResponse) => NextAuth(req, res, options);
