import { SignInButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center gap-y-4 px-4">
      <h1 className="text-3xl text-center font-bold">Welcome to LiveVHS - NextGen Uncensored Live Streaming Platform</h1>
      <p className="text-lg text-center">Experience the future of live streaming with LiveVHS. Join a community of creators and viewers where censorship is a thing of the past.</p>
      <div className="max-w-lg rounded-lg p-4">
        <p className="text-lg font-semibold mb-2">Key Features:</p>
        <ul className="list-disc ml-6">
          <li>High-quality live video streaming</li>
          <li>Interactive chat with viewers</li>
          <li>Monetization options for creators</li>
          <li>Customizable channel pages</li>
        </ul>
      </div>
    </div>
  );
};
