# Project Setup Guide

## Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
# Database
DATABASE_URL="postgresql://username:password@localhost:5432/your_database_name"

# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_your_publishable_key
CLERK_SECRET_KEY=sk_test_your_secret_key

# Clerk URLs
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
```

### Variable Details:

- `DATABASE_URL`: Your PostgreSQL connection string
- `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`: Public key from your Clerk dashboard
- `CLERK_SECRET_KEY`: Secret key from your Clerk dashboard

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Set up your database:
   ```bash
   npx prisma generate
   npx prisma db push
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

The application will be available at `http://localhost:3000`
