import { db } from "@/lib/db";
import { getSelf } from "@/lib/auth-service";

export const isBlockedByUser = async (id: string) => {
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
};

export const blockUser = async (id: string) => {
    const self = await getSelf();

    if (self.id === id) {
        throw new Error("Cannot block yourself");
    }

    const otherUser = await db.user.findUnique({
        where: { id }
    });

    if (!otherUser) {
        throw new Error("User not found");
    }

    const exisitngBlock = await db.block.findUnique({
        where: {
            blockerId_blockedId: {
                blockerId: self.id,
                blockedId: otherUser.id,
            },
        },
    });

    if (exisitngBlock) {
        throw new Error("Already blocked");
    }

    const block = await db.block.create({
        data: {
            blockerId: self.id,
            blockedId: otherUser.id,
        },
        include: {
            blocked: true,
        },
    });

    return block;
};

export const unblockUser = async (id: string) => {
    const self = await getSelf();

    if (self.id === id) {
        throw new Error("Cannot unblock yourself");
    }

    const otherUser = await db.user.findUnique({
        where: { id },
    });

    if (!otherUser) {
        throw new Error("User not found");
    }

    const exisitingBlock = await db.block.findUnique({
        where: {
            blockerId_blockedId: {
                blockerId: self.id,
                blockedId: otherUser.id,
            },
        },
    });

    if (!exisitingBlock) {
        throw new Error("Not blocked");
    }

    const unblock = await db.block.delete({
        where: {
            id: exisitingBlock.id,
        },
        include: {
            blocked: true,
        },
    });

    return unblock
};