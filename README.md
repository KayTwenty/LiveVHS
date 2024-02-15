# LiveVHS - FullStack Streaming Platform
<img src="https://raw.githubusercontent.com/KayTwenty/LiveVHS/main/public/banner.png" alt="Banner">

## Table of Contents
- [Features](#features)
- [Installation](#installation)
- [Prisma](#prisma)
- [Licensing](#license)

## Features
- Live streaming of video content
- Chat functionality for real-time interaction with viewers
- User authentication and authorization
- Analytics and viewer statistics

## Installation

To run this project locally, you will need **Node version 18.17 or later**. follow these steps below:

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
```

4. Install ngrok globally:
```bash
npm install -g ngrok
```

5. Run the development server:
```
npm run dev
```

6. Start ngrok tunnel:
```bash
ngrok http 3000
```
The site should now be available at http://localhost:3000.

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

## License

This project is has no license at the moment.