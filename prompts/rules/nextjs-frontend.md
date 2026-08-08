---
description: Frontend architecture and coding standards for this Next.js project
globs:
  - "src/**/*"
alwaysApply: true
---

# Next.js Frontend Project Rules

## Architecture

This is a Next.js frontend-only application.

Use feature-based architecture.

Do not put business logic inside app/.

The app folder is only responsible for:
- routing
- layouts
- route-level composition


---

# Folder Rules

## app/

Only:
- pages
- layouts
- route handlers if required
- loading states
- error boundaries


Do not create:
- API calls
- business components
- complex logic


---

## components/

Contains reusable UI.

Structure:

components/
├── ui/
└── common/


ui:
- shadcn components only


common:
- reusable application components


---

## features/

All business functionality belongs here.

Example:

features/auth/

contains:

- components
- hooks
- api
- schemas
- types


Feature code should stay inside its feature.


---

# UI Rules

Use shadcn/ui components.

Do not create custom UI components if shadcn already provides them.

Before creating a component check:
1. shadcn component exists?
2. common component exists?
3. can existing component be extended?


# Styling Rules

Use Tailwind CSS with a custom design system.

Never use raw Tailwind design values directly.

Avoid:

bg-blue-500
text-gray-400
shadow-lg
rounded-xl
p-5
mt-6


All design decisions must use semantic design tokens.

Example:

Use:

bg-primary
text-muted-foreground
shadow-card
rounded-card
p-lg


Instead of:

bg-blue-500
text-gray-500
shadow-lg
rounded-xl
p-6


---

# Design Tokens

All design tokens must be centralized and configurable from:

tailwind.config.ts


The theme must control:

- colors
- spacing
- shadows
- border radius
- typography
- component sizes


---

# Spacing System

Use predefined spacing tokens.

Do not randomly choose padding, margin, and gap values.

Follow:

xs  = extra small spacing
sm  = small spacing
md  = medium spacing
lg  = large spacing
xl  = extra large spacing
2xl = section spacing
3xl = page spacing


Example:

Card padding:

p-lg


Component gap:

gap-md


Section spacing:

py-2xl


Do not use:

p-[23px]
mt-7
gap-13


unless there is a strong design requirement.


---

# Color System

Never use direct color classes.

Avoid:

text-red-500
bg-green-500
border-gray-200


Use semantic colors:

primary
secondary
background
foreground
muted
border
destructive
success
warning


---

# Shadow System

Never use default Tailwind shadows directly.

Avoid:

shadow-sm
shadow-md
shadow-lg


Use semantic shadows:

shadow-card
shadow-dropdown
shadow-modal


---

# Border Radius System

Never randomly use rounded values.

Avoid:

rounded-lg
rounded-xl


Use semantic radius tokens:

rounded-card
rounded-button
rounded-input


---

# Typography System

Use the Typography component for all visual text styling.

Avoid directly styling:

h1
h2
h3
p
span


Example:

<Typography variant="h1">
  Dashboard
</Typography>


Typography component controls:

- font size
- font weight
- line height
- color
- responsive behavior


However, maintain semantic HTML for accessibility and SEO when required.
Typography component should support rendering different HTML elements.


Typography variants:

h1
h2
h3
body
body-sm
caption
label


---

# Component Styling

Use component variants instead of custom classes.

Good:

<Button variant="primary" size="lg">
 Save
</Button>


Bad:

<Button className="bg-blue-500 px-5 rounded-lg">
 Save
</Button>


Use CVA (Class Variance Authority) pattern for reusable component variants.

---

# Responsive Design

Follow mobile-first approach.

Default styles should target mobile.

Use breakpoints only when needed:

sm
md
lg
xl


Avoid unnecessary responsive overrides.


---

# Forms

Use:

- React Hook Form
- Zod


Every form must have:

1. Zod schema
2. Type inference
3. React Hook Form integration


Example:

const schema = z.object({
 email: z.string().email()
})


type FormData = z.infer<typeof schema>


Never duplicate types manually.
Infer types from schemas whenever possible.


---

# API Rules

Use Axios for HTTP requests.

All API calls must be inside:

features/*/api


Example:

features/auth/api/auth.api.ts


Components must never directly call axios.


---

# Server State

Use TanStack Query.

Rules:

- No API calls inside useEffect.
- Use queries for fetching.
- Use mutations for updates.


---

# TypeScript Rules

Never use:

any


Always create proper types.

Prefer:

unknown

when type is not known.


---

# React Rules

Use functional components.

Prefer composition over large components.

Extract logic into hooks.

Avoid unnecessary state.


---

# Import Rules

Use absolute imports:

@/components/button

instead of:

../../../components/button


---

# Naming Rules

Components:

PascalCase

UserCard.tsx


Hooks:

useSomething

useAuth.ts


Functions:

camelCase

getUser()


Constants:

UPPER_CASE


---

# Environment

Never hardcode:

- API URLs
- secrets
- tokens


Use environment variables.


---


# File Organization Rules

Keep files single-purpose.

A file should not contain:

- API calls
- UI components
- validation schemas
- business logic

together.


Example:

Good:

user/
├── components/
│   └── user-card.tsx
├── api/
│   └── user.api.ts
├── hooks/
│   └── use-users.ts
├── schemas.ts
└── types.ts


Bad:

UserPage.tsx

contains:
- axios calls
- forms
- validation
- UI
- business logic


---


# Library Rules

Prefer existing project libraries.

Use:

UI:
- shadcn/ui
- Tailwind CSS

Forms:
- React Hook Form
- Zod

API:
- Axios

Server state:
- TanStack Query


Do not introduce new libraries without a strong reason.


---


# Code Quality

Before creating new code:

1. Check existing components.
2. Reuse before creating.
3. Keep files focused.
4. Avoid unnecessary abstraction.

Complex logic should include comments explaining why.