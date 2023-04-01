# Next 13 App Dir Template with Authentication

## Installation

First, copy `.env.example` to `.env.local` and fill in the values.

This will involve setting up an application on Github, and configuring an email provider. I use AWS SES, but there are probably easier options out there.

Then, install dependencies:

```bash
pnpm install
```

You now should be ready to go. Just use `pnpm dev` to start the development server.

## Deployment

Use Vercel. Remember to change the `NEXTAUTH_URL` to your production URL.

## Credit

Based off of shadcn's `next-template`, with `taxonomy` used heavily for reference for Next 13 / Next Auth integration. It also ended up looking very similar, sorry about that.
