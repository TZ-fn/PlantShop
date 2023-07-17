import NextAuth from 'next-auth';
import EmailProvider from 'next-auth/providers/email';

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
    maxAge: 30 * 24 * 60 * 60,
  },
  database: process.env.DATABASE_URL,
  callbacks: {
    redirect: async (url, _) => {
      if (url === '/api/auth/signin') {
        return Promise.resolve('/profile');
      }
      return Promise.resolve('/api/auth/signin');
    },
  },
};

export default (req, res) => NextAuth(req, res, options);
