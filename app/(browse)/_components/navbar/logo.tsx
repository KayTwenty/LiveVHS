import Link from "next/link";
import Image from "next/image";
import { Poppins } from "next/font/google";

import { cn } from "@/lib/utils";

const font = Poppins({
    subsets: ["latin"],
    weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export const Logo = () => {
    return (
        <Link href="/">
            <div className="flex items-center gap-x-4 hover:opacity-75 transition">
                <div className="rounded-full p-1 mr-10 shrink-0 lg:mr-0 lg:shrink" style={{backgroundImage: 'linear-gradient(to right, #B2EBF2, #C8E6C9)'}}>
                    <Image 
                        src="/logo.png" 
                        alt="Logo" 
                        height="48" 
                        width="48" 
                    />
                </div>
                <div className={cn(
                    "hidden lg:block",
                    font.className
                    )}>
                    <p className="text-lg font-semibold">
                        LiveVHS
                    </p>
                    <p className="text-xs text-muted-foreground">
                        Let's Stream!
                    </p>
                </div>
            </div>
        </Link>
    );
};