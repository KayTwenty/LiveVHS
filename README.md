# LiveVHS - FullStack Streaming Platform
<img src="https://raw.githubusercontent.com/KayTwenty/LiveVHS/main/public/banner.png" alt="Banner">

## Table of Contents
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Prisma](#prisma)
- [Docker](#docker)
- [Licensing](#license)

## Features
- Live streaming with chat functionality
- Complete follow system
- Chat functionality for real-time interaction with viewers
- User authentication and authorization
- Analytics and viewer statistics

## Prerequisites
Before you begin, ensure you have the following installed:

- Node.js (v18.17.1): [Download](https://nodejs.org/en/download/)
- Next.js (v14) [Getting Started](https://nextjs.org/docs/getting-started)
- Prisma ORM with MySQL: [Getting Started](https://www.prisma.io/docs/getting-started/setup-prisma/start-from-scratch-typescript)
- Tailwind CSS: [Getting Started](https://tailwindcss.com/docs/guides/nextjs)
- ShadCN UI Library: [Getting Started](https://ui.shadcn.com/docs)
- Clerk for User Authentication: [Getting Started](https://clerk.com/docs/quickstarts/nextjs)

## Installation
To run this project locally, follow these steps below:

<details closed>
<summary><b>Instructions</b></summary>

1. Clone the repository:
    ```bash
    git clone https://github.com/KayTwenty/LiveVHS.git
    ```

2. Navigate to the project directory:
    ```bash
    cd LiveVHS
    ```

3. Install the necessary dependencies:
    ```bash
    npm install
    # or
    yarn install
    ```

4. Install ngrok globally:
    ```bash
    npm install -g ngrok
    ```

5. Run the development server:
    ```bash
    npm run dev
    # or 
    yarn dev
    ```

6. Start ngrok tunnel:
    ```bash
    ngrok http 3000
    ```
The site should now be available at http://localhost:3000.
</details>

## Prisma
Add MySQL Database to .env

1. Generate the Prisma configuration
    ```bash
    npx prisma generate
    ```

2. Push the Prisma database file to your own database
    ```bash
    npx prisma db push
    ```

## Docker
To run LiveVHS using Docker, follow these steps:

1. Build the Docker image:
    ```bash
    docker build -t my-livevhs-app:v1.0 .
    ```

2. Run the Docker container:
    ```bash
    docker run -p 3000:3000 \
    -e NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY="your_publishable_key" \
    -e CLERK_SECRET_KEY="your_secret_key" \
    -e CLERK_WEBHOOK_SECRET="your_webhook_secret" \
    -e DATABASE_URL="mysql://example" \
    my-livevhs-app:v1.0
    ```

## License
This project currently has no license