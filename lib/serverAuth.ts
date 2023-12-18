import { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth";

import prismadb from '@/lib/prismadb';
import { authOptions } from "@/pages/api/auth/[...nextauth]";

const serverAuth = async (req: NextApiRequest, res: NextApiResponse) => {
    const session = await getServerSession(req, res, authOptions); // This is to retriever the user session from req and res objects. 

        // If user isn't in a session, throws error stating user isn't signed in
        if (!session?.user?.email) {
            console.log({session}); 
            throw new Error('User email not found in session. Not signed in.');
        }


        // Retriever user from DB
        const currentUser = await prismadb.user.findUnique({
            where: {
                email: session.user.email,
            }
        });

        // Checking if current user is in DB, if not throws out error
        if (!currentUser) {
            throw new Error('User not found in the database. Not signed in.');
        }

        // If user found, returns object containing current user
        return { currentUser };
    } 

// Export function to use again in the application
export default serverAuth;