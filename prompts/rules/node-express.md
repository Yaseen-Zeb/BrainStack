---
description: Backend architecture and coding standards for Node.js Express TypeScript MySQL Sequelize project
globs:
  - "src/**/*"
alwaysApply: true
---

# Node.js Backend Project Rules

## Architecture

This is a backend-only application using:

- Node.js
- Express.js
- TypeScript
- MySQL
- Sequelize 
- Zod validation


Use feature-based architecture.

Keep business logic separate from:

- routes
- controllers
- database models
- middleware


---

# Folder Structure

Follow this structure:

src/

├── app/
│   ├── routes.ts
│   ├── middleware.ts
│   └── app.ts
│
├── config/
│   ├── database.ts
│   ├── env.ts
│   └── constants.ts
│
├── database/
│   ├── models/
│   ├── migrations/
│   └── seeders/
│
├── features/
│   │
│   ├── auth/
│   │   ├── auth.controller.ts
│   │   ├── auth.service.ts
│   │   ├── auth.routes.ts
│   │   ├── auth.schema.ts
│   │   ├── auth.types.ts
│   │   └── auth.repository.ts
│   │
│   └── users/
│       ├── user.controller.ts
│       ├── user.service.ts
│       ├── user.routes.ts
│       ├── user.schema.ts
│       ├── user.types.ts
│       └── user.repository.ts
│
├── middleware/
│   ├── auth.middleware.ts
│   ├── error.middleware.ts
│   └── validate.middleware.ts
│
├── utils/
│   ├── logger.ts
│   ├── response.ts
│   └── helpers.ts
│
├── types/
│   └── common.ts
│
└── server.ts


---

# Layer Responsibilities

## Routes

Routes only define:

- endpoints
- middleware
- controller connection


Example:

Good:

router.post(
 "/users",
 authMiddleware,
 userController.create
)


Bad:

router.post("/users", async(req,res)=>{
 // business logic
})


---

# Controllers

Controllers handle:

- request
- response
- status codes


Controllers should NOT contain:

- database queries
- business rules
- complex calculations


Example:

controller:

request
↓
service
↓
response


---

# Services

Services contain business logic.

Example:

- creating users
- checking permissions
- calculations
- workflows


Services should NOT know:

- Express req/res
- HTTP status codes


Bad:

userService(req,res)


Good:

userService.createUser(data)


---

# Repository Layer

Database communication belongs in repositories.

Example:

user.repository.ts


Responsible for:

- Sequelize queries
- database operations


Services should call repositories.

Flow:


Controller

↓

Service

↓

Repository

↓

Database


---

# Sequelize Rules

Use Sequelize models.

All database models belong in:

database/models


Never write raw SQL inside:

- controllers
- services


Database logic belongs in:

repositories


---

# Database Naming

Tables:

snake_case

Example:

users
user_profiles


Columns:

snake_case

Example:

created_at
updated_at


TypeScript properties:

camelCase

Example:

createdAt


---

# Migrations

Never modify database manually.

Every database change requires:

- migration
- model update


---

# Validation

Use Zod for request validation.

Every endpoint that receives input must have:

1. validation schema
2. inferred TypeScript type


Example:

const createUserSchema = z.object({
 email:z.string().email()
})


type CreateUserInput =
z.infer<typeof createUserSchema>


---

# Error Handling

Never use:

throw new Error()


Create application errors.


Example:

throw new AppError(
 "User not found",
 404
)


All errors must go through:

error middleware


---

# API Response Format

All APIs should return consistent responses.


Success:

{
 success:true,
 data:{}
}


Error:

{
 success:false,
 message:"",
 errors:[]
}


---

# TypeScript Rules

Never use:

any


Always define:

- request types
- response types
- service parameters


Prefer:

unknown

when type is uncertain.


---

# Environment Variables

Never hardcode:

- database credentials
- API keys
- secrets


Use:

.env


Access through:

config/env.ts


---

# Authentication Rules

Authentication logic belongs in:

features/auth


JWT/session handling should be isolated.

Do not spread authentication checks everywhere.


---

# Middleware Rules

Middleware is only for cross-cutting concerns:

Examples:

- authentication
- validation
- logging
- error handling


Do not put business logic inside middleware.


---

# Async Handling

Always handle async errors.

Use centralized error handling.

Avoid repetitive:

try/catch

inside every controller.


---

# Naming Rules


Files:

kebab-case


Examples:

user.controller.ts
auth.service.ts


Classes:

PascalCase


Functions:

camelCase


Constants:

UPPER_CASE


Interfaces:

PascalCase


Example:

UserResponse


---

# Code Quality

Before creating code:

1. Check existing patterns.
2. Reuse existing utilities.
3. Keep files focused.
4. Avoid unnecessary abstractions.


A file should have one responsibility.


---

# Security Rules

Never:

- expose passwords
- return sensitive fields
- trust client input


Always:

- validate inputs
- hash passwords
- sanitize data
- use environment variables


---

# API Design Rules

Use REST conventions.

Examples:

GET    /users
GET    /users/:id
POST   /users
PATCH  /users/:id
DELETE /users/:id


Use meaningful HTTP status codes.


---

# Functional Programming Style

Prefer function-based patterns over class-based patterns.

Avoid creating classes unless there is a clear requirement.

Prefer:

- functions
- factory functions
- plain objects
- TypeScript types/interfaces


Avoid unnecessary:

- classes
- inheritance
- static methods

---

# Response Handling Rules

All API responses must use centralized response functions.

Never directly use:

res.json()
res.send()
res.status().json()


inside controllers.


Use:

utils/response.ts


Example:


sendSuccess(
  res,
  "User fetched successfully",
  user
)


sendCreated(
  res,
  "User created successfully",
  user
)


---

# Response Utility

Create reusable response functions:


utils/response.ts


Responsibilities:

- success responses
- created responses
- pagination responses


Example:


export const sendSuccess = (
  res,
  message,
  data
) => {
  return res.status(200).json({
    success:true,
    message,
    data
  })
}


---


# Pagination Response

All paginated APIs must use the same format.


Example:


{
 success:true,
 data:[],
 pagination:{
   page,
   limit,
   total,
   totalPages
 }
}


Use reusable function:


sendPaginatedResponse()


---


# Error Handling Rules

Use functional error helpers.

Do not create Error classes.

Avoid:

class AppError extends Error


Prefer:


utils/errors.ts


Create reusable error factory functions.


Example:


throw createError(
  "User not found",
  404,
  "USER_NOT_FOUND"
)


---

# Error Object Format


{
 success:false,
 message:string,
 statusCode:number,
 code?:string,
 details?:unknown
}


---

# Error Factory


Example:


export const createError = (
 message:string,
 statusCode:number,
 code?:string,
 details?:unknown
) => {

 const error = new Error(message)

 Object.assign(error,{
   statusCode,
   code,
   details
 })

 return error

}


---

# Global Error Middleware


All errors must go through:


middleware/error.middleware.ts


Responsibilities:

- catch errors
- log errors
- return consistent error response


---

# Async Handling


Use reusable async wrapper function.


Avoid repeating try/catch.


Example:


export const asyncHandler =
(handler) =>
(req,res,next)=>
 Promise
  .resolve(handler(req,res,next))
  .catch(next)


---

# Testing

Business logic should be testable independently.

Prefer testing:

- services
- utilities
- repositories


Controllers should remain thin.