This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.


## Switching between Yalc and NPM for @return-0/node

When developing locally, you may want to use a local version of `@return-0/node` via `yalc` instead of the npm version.

### Switch to Yalc (Local Development)
```bash
npm run use:yalc
```
This will:
- Link the local `@return-0/node` package via `yalc`
- Update `package.json` to use `"file:.yalc/@return-0/node"`
- Install dependencies

### Switch to NPM (Production/Standard)
```bash
npm run use:npm
```
This will:
- Remove the yalc link
- Restore `package.json` to use `"^1.0.0"` from npm
- Install dependencies

### Manual Commands
If you prefer to do it manually:
```bash
# Switch to yalc
yalc add @return-0/node && npm install

# Switch to npm
yalc remove @return-0/node && npm install
```

**Note:** When using yalc, make sure to publish changes from the return0 package first:
```bash
# In the return0 package directory
yalc push
```

**Note:** The `build` script includes `yalc update`. When using npm mode (not yalc), you may need to remove `yalc update` from the build command or ensure yalc is installed globally, though `yalc update` should be harmless if yalc isn't being used.
