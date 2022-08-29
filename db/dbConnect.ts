// import mongoose from 'mongoose';

// const MONGODB_URI = process.env.MONGODB_URI;

// if (!MONGODB_URI) {
//   throw new Error('Please define the MONGODB_URI environment variable inside .env.local');
// }

// let cached = { conn: null, promise: null };

// if (!cached) {
//   cached = { connection: null, promise: null };
// }

// export default async function dbConnect() {
//   if (cached.connection) {
//     return cached.connection;
//   }

//   if (!cached.promise) {
//     const opts = {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//       bufferCommands: false,
//     };

//     cached.promise = mongoose.connect(MONGODB_URI!, opts).then((mongoose) => {
//       return mongoose;
//     });
//   }
//   cached.connection = cached.promise;
//   return cached.connection;
// }

import mongoose from 'mongoose';

const dbConnect = async () => mongoose.connect(process.env.MONGODB_URI);

export default dbConnect;
