# Virtual Influencer Creator

Built with Next.js 14 App Router, TypeScript, and Shadcn/ui

## Setup

1. Clone the repository
2. Copy `.env.example` to `.env.local`
3. Get environment variables from team lead
4. Install dependencies: `npm install`
5. Run development server: `npm run dev`

## Tech Stack

- Next.js 14 (App Router)
- Shadcn/ui
- Clerk (Auth)
- Supabase (Database)
- Cloudflare R2 (Storage)
- Fal.ai (AI Generation)

## Project Structure (App Router)

```
virtual-influencer-dev/
├── app/ # Next.js 14 App Directory (NOT pages!)
│   ├── (auth)/ # Route group - no shared layout
│   │   ├── sign-in/
│   │   │   └── page.tsx # /sign-in route
│   │   ├── sign-up/
│   │   │   └── page.tsx # /sign-up route
│   │   └── layout.tsx # Optional auth-specific layout
│   │
│   ├── (dashboard)/ # Route group - shared dashboard layout
│   │   ├── dashboard/
│   │   │   └── page.tsx # /dashboard route
│   │   ├── avatar-builder/
│   │   │   └── page.tsx # /avatar-builder route
│   │   ├── gallery/
│   │   │   └── page.tsx # /gallery route
│   │   ├── templates/
│   │   │   └── page.tsx # /templates route
│   │   ├── settings/
│   │   │   └── page.tsx # /settings route
│   │   └── layout.tsx # Shared layout with sidebar (for all dashboard routes)
│   │
│   ├── api/ # API Routes (App Router style)
│   │   ├── avatar/
│   │   │   ├── generate/
│   │   │   │   └── route.ts # POST /api/avatar/generate
│   │   │   └── [id]/
│   │   │       └── route.ts # GET/PUT/DELETE /api/avatar/[id]
│   │   ├── upload/
│   │   │   └── presigned/
│   │   │       └── route.ts # POST /api/upload/presigned
│   │   └── webhooks/
│   │       ├── clerk/
│   │       │   └── route.ts # POST /api/webhooks/clerk
│   │       └── stripe/
│   │           └── route.ts # POST /api/webhooks/stripe
│   │
│   ├── layout.tsx # Root layout (wraps entire app)
│   ├── page.tsx # Home page (/)
│   ├── loading.tsx # Optional loading UI
│   ├── error.tsx # Optional error UI
│   └── globals.css # Global styles + theme system
│
├── components/ # React components
│   ├── ui/ # Shadcn/ui components
│   └── features/ # Feature components
│
├── lib/ # Utilities & configurations
├── public/ # Static assets
├── workers/ # Cloudflare Workers (separate)
│
├── middleware.ts # Next.js middleware (runs on edge)
├── next.config.js # Next.js config
└── package.json
```

## App Router Key Concepts

This project uses Next.js 14 App Router, NOT the old pages directory:

- **`page.tsx`** - Defines a route
- **`layout.tsx`** - Shared UI wrapper
- **`route.ts`** - API endpoint handlers
- **`(folder)`** - Route groups that don't affect URL
- **`[folder]`** - Dynamic segments
- **`loading.tsx`** - Loading UI
- **`error.tsx`** - Error boundaries

## No Pages Directory!

We're using the modern App Router approach:

- ❌ No `/pages` directory
- ❌ No `_app.tsx` or `_document.tsx`
- ✅ Everything in `/app` directory
- ✅ React Server Components by default
- ✅ Layouts and nested routing

## Development

### Git Workflow

#### Branch Strategy

```
main # Production branch
├── dev # Development branch (staging)
├── feature/[name] # Feature branches
└── fix/[name] # Bug fix branches
```

#### Development Process

1. **Create Feature Branch**

   ```bash
   git checkout dev
   git pull origin dev
   git checkout -b feature/avatar-generation
   ```

2. **Make Changes**

   ```bash
   git add .
   git commit -m "add avatar generation endpoint"
   ```

3. **Push to GitHub**

   ```bash
   git push origin feature/avatar-generation
   ```

4. **Create Pull Request**
   - Target: dev branch
   - Add description of changes
   - Request review if needed
   - Merge after approval

#### Branch Rules

- **main**: Production (protected)
- **dev**: Active development
- **feature/**: New features
- **fix/**: Bug fixes

#### Deployment

- **dev branch** → Staging environment
- **main branch** → Production (after testing in staging)
