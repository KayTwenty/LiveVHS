import { db } from "./db";
import { getSelf } from "@/lib/auth-service";

// Define an async function called getFollowedUsers that returns a list of users that the current user is following
export const getRecommended = async () => {
    let userId;

    try {
        // Attempting to get information about the currently logged-in user
        const self = await getSelf();
        userId = self.id; // If successful, store the user id
    } catch {
        userId = null; // If unsuccessful, set the user id to null
    }

    let users = []; // Create an array to store the recommended userss

    // Retrieve users from the database who are not the current user and are not followed by the current user
    if (userId) {
        users = await db.user.findMany({
            where: {
                AND: [
                    {
                        NOT: {
                            id: userId, // Exclude the current user
                        },
                    },
                    {
                        NOT: {
                            followedBy: {
                                some: {
                                    followerId: userId, // Exclude users who are followed by the current user
                                },
                            },
                        },
                    },
                ],
            },
            orderBy: {
                createdAt: "desc" // Order the users by the date they were created
            }
        })
    } else {
        // If the user is not logged in, retrieve all users from the database
        users = await db.user.findMany({
            orderBy: {
                createdAt: "desc" // Order the users by the date they were created
            },
        });
    }

    // Return the list of recommended users
    return users;
};