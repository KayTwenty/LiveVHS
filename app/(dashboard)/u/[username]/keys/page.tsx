import { getSelf } from "@/lib/auth-service";
import { Button } from "@/components/ui/button";
import { getStreamByUserId } from "@/lib/stream-service";

import { UrlCard } from "./_components/url-card";

const KeysPage = async () => {
    const self = await getSelf();
    const stream = await getStreamByUserId(self.id);

    if (!stream) {
        throw new Error("Stream not found");
    }

    return (
        <div className="p-6">
            <div className="flex items-center justify-between mb-4">
                <h1 className="text-2xl font-bold">
                    Keys & URL
                </h1>
                <Button variant="primary">
                    Generate
                </Button>
            </div>
            <div className="space-y-4">
                <UrlCard value={stream.serverUrl} />
            </div>
        </div>      
    );
};
 
export default KeysPage;