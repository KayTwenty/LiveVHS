import { currentUser } from "@clerk/nextjs";

import { db } from "./db";

// Define an async function called getFollowedUsers that returns a list of users that the current user is following
export const getSelf = async () => {
    const self = await currentUser();

    // Check if the user is not found or if the user does not have a username
    if (!self || !self.username) {
        throw new Error("Unauthorized");
    }

    // Retrieve the user information based on the external user ID obtained from the Clerk user object
    const user = await db.user.findUnique({
        where: { externalUserId: self.id } // Find the user by the external user ID
    });

    // Check if the user is not found
    if (!user) {
        throw new Error("Not found");
    }

    // Return the user object
    return user;
};