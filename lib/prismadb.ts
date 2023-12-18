import { PrismaClient } from '@prisma/client';

// Checking if global prismadb object exists, otherwise creates new instance of PrismaClient
const client = global.prismadb || new PrismaClient();

if(process.env.NODE_ENV === 'production') global.prismadb = client;

export default client; 