# Order Processing Frontend

Frontend application for the **Order Processing System**.

This project is being developed as a software engineering learning journey, following professional development practices such as:

- Architecture-first design
- Separation of responsibilities
- Incremental development
- Code reviews
- Documentation updates for every milestone
- Clean and maintainable code

The frontend will integrate with the backend previously developed using AWS services, including Amazon Cognito, API Gateway, AWS Lambda and DynamoDB.

---

# Project Goals

The main objectives of this project are:

- Learn React through real-world application development
- Learn TypeScript in a practical context
- Build a scalable frontend architecture
- Integrate with AWS backend services
- Apply software engineering principles instead of tutorial-driven development
- Produce production-quality code and documentation

---

# Tech Stack

Current technologies:

- React
- TypeScript
- Vite
- React Router
- React Context API
- ESLint

Future integrations:

- Amazon Cognito
- API Gateway
- AWS Lambda
- JWT Authentication
- REST API
- CloudWatch (backend)

---

# Current Project Structure

```text
src/
│
├── assets/
├── components/
├── contexts/
│   └── AuthContext.tsx
├── hooks/
│   └── useAuth.ts
├── pages/
│   ├── DashboardPage.tsx
│   ├── LoginPage.tsx
│   └── NotFoundPage.tsx
├── routes/
│   └── AppRoutes.tsx
├── services/
│   └── AuthService.ts
├── types/
│   ├── AuthContextType.ts
│   ├── LoginRequest.ts
│   ├── LoginResponse.ts
│   └── User.ts
├── utils/
│
├── App.tsx
├── App.css
├── index.css
└── main.tsx
```

---

# Current Architecture

```text
Browser
    │
    ▼
main.tsx
    │
    ▼
<App />
    │
    ▼
<AuthProvider>
    │
    ▼
<BrowserRouter>
    │
    ▼
<AppRoutes>
    │
    ▼
Pages
    │
    ▼
useAuth()
    │
    ▼
AuthContext
    │
    ▼
AuthService
    │
    ▼
Amazon Cognito (Mock)
```

---

# Design Principles

The project follows several software engineering principles.

## Single Responsibility Principle (SRP)

Each file has one responsibility.

Examples:

- App.tsx composes the application
- AppRoutes.tsx defines application routes
- AuthContext manages authentication state
- AuthService communicates with the authentication provider
- useAuth provides access to the authentication context
- Pages represent application screens

---

## Separation of Concerns

Different layers have different responsibilities.

```text
Pages

↓

Hooks

↓

Context

↓

Services

↓

Backend
```

Each layer communicates only with the layer immediately below it.

---

## Domain First Development

Before implementing features, the project defines:

- Domain models
- Request contracts
- Response contracts
- Services
- UI

This approach minimizes refactoring and keeps the architecture scalable.

---

## Incremental Development

The project is developed one milestone at a time.

Each milestone includes:

- Design
- Implementation
- Code Review
- Documentation Update
- Git Commit
- GitHub Push

---

# Completed Milestones

## ✅ Milestone 1 — Project Initialization

Completed:

- React
- TypeScript
- Vite
- ESLint

---

## ✅ Milestone 2 — Routing Foundation

Implemented:

- Project folder structure
- React Router
- BrowserRouter
- AppRoutes
- Login Page
- Dashboard Page
- Not Found Page

Architecture was designed before implementation.

---

## ✅ Milestone 3 — Authentication Foundation

Implemented:

- User model
- AuthContextType
- AuthContext
- AuthProvider
- Custom useAuth hook
- Shared authentication state

Current authentication is mocked.

---

## ✅ Milestone 4 — Authentication Service Architecture

### Objective

Design the authentication layer before integrating Amazon Cognito.

### Implemented

- Authentication domain models
  - User
  - LoginRequest
  - LoginResponse
- Stateless AuthService
- Mock authentication service
- AuthContext refactoring
- Authentication delegation (Context → Service)

### Design Decisions

- Domain First Development
- Stateless services
- Request / Response contracts
- Separation of responsibilities
- AuthContext orchestrates authentication
- AuthService communicates with the authentication provider

Current authentication is mocked and will be replaced by Amazon Cognito in a future milestone.

---

# Roadmap

## Completed

- ✅ Project initialization
- ✅ Routing architecture
- ✅ Authentication foundation
- ✅ Authentication service architecture

## In Progress

- ⏳ AuthProvider integration
- ⏳ Login page
- ⏳ Protected Routes
- ⏳ Session persistence
- ⏳ Amazon Cognito integration

## Planned

- API Gateway integration
- Orders Service
- Orders Dashboard
- Create Order
- Update Order
- Delete Order
- Error handling
- Loading states
- Responsive UI
- Unit Testing

---

# Backend Integration

This frontend will integrate with the previously developed backend.

Backend technologies:

- AWS Lambda
- API Gateway
- Amazon Cognito
- DynamoDB
- JWT Authentication
- Owner-based Authorization
- CloudWatch

---

# Learning Approach

This project is intentionally developed without relying on copy-and-paste tutorials.

Every feature follows the same workflow:

1. Understand the problem
2. Design the architecture
3. Define responsibilities
4. Define contracts
5. Implement
6. Review the code
7. Update documentation

The objective is not only to build a working application, but also to understand the reasoning behind every architectural decision.

---

# Software Architecture Philosophy

The project follows a layered architecture.

```text
Pages
    │
    ▼
Hooks
    │
    ▼
Context
    │
    ▼
Services
    │
    ▼
Backend
```

Each layer has a single responsibility and communicates only with the adjacent layer.

This architecture improves:

- Maintainability
- Testability
- Scalability
- Readability
- Separation of Concerns

---

# Author

Developed as a personal Software Engineering learning project.

The focus of this repository is to demonstrate:

- Software Architecture
- React Best Practices
- TypeScript
- AWS Integration
- Clean Code
- Separation of Responsibilities
- Incremental Development
- Domain-Driven Design Principles