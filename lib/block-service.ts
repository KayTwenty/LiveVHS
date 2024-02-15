import { db } from "@/lib/db";
import { getSelf } from "@/lib/auth-service";

export const isBlockedByuser = async (id: string) => {
    try {
        const self = await getSelf();

        const otherUser = await db.user.findUnique({
            where: { id },
        });

        if (!otherUser) {
            throw new Error("User not found");
        }

        if (otherUser.id === self.id) {
            return true;
        }

        const exisitingBlock = await db.block.findUnique({
            where: {
                blockerId_blockedId: {
                    blockerId: otherUser.id,
                    blockedId: self.id,
                },
            },
        });

        return !!exisitingBlock;
    } catch {
        return false;
    }
}