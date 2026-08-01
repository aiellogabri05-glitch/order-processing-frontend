# Order Processing Frontend

Frontend application for the **Order Processing System**.

This project is being developed as a software engineering learning journey, following professional development practices and modern frontend architecture.

The frontend will integrate with the backend previously developed using AWS services, including:

- Amazon Cognito
- API Gateway
- AWS Lambda
- DynamoDB
- JWT Authentication
- Owner-based Authorization

---

# Project Goals

The primary objectives of this project are:

- Learn React through a real-world application
- Learn TypeScript in a practical context
- Build a scalable frontend architecture
- Integrate with AWS backend services
- Apply software engineering principles
- Produce production-quality code and documentation

---

# Tech Stack

## Current

- React
- TypeScript
- Vite
- React Router
- React Context API
- ESLint

## Planned Integrations

- Amazon Cognito
- API Gateway
- AWS Lambda
- DynamoDB
- JWT Authentication
- REST API
- CloudWatch

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
LoginPage
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
Mock Authentication
    │
    ▼
Dashboard
```

---

# Authentication Flow

```text
User
    │
    ▼
LoginPage
    │
    ▼
Validate Form
    │
    ▼
LoginRequest
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
Mock Authentication
    │
    ▼
LoginResponse
    │
    ▼
Dashboard
```

The Login Page is responsible only for:

- Collecting user input
- Validating the form
- Calling the authentication context
- Handling navigation

Authentication logic is fully delegated to the Context and Service layers.

---

# Design Principles

## Single Responsibility Principle (SRP)

Each module has a single responsibility.

Examples:

- App.tsx composes the application
- AppRoutes.tsx manages routing
- LoginPage manages UI interactions
- AuthContext manages authentication state
- AuthService communicates with the authentication provider
- useAuth exposes the authentication context

---

## Separation of Concerns

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

Each layer communicates only with the adjacent layer.

---

## Domain First Development

Before implementing a feature, the project defines:

- Domain models
- Request contracts
- Response contracts
- Services
- Context
- UI

---

## Stateless Services

Services do not store application state.

Their only responsibility is communicating with external systems.

Application state is managed by React Context.

---

## Incremental Development

Each milestone follows the same workflow:

1. Understand the problem
2. Design the architecture
3. Define responsibilities
4. Define contracts
5. Implement incrementally
6. Review the code
7. Test the complete flow
8. Update documentation
9. Commit
10. Push

---

# Completed Milestones

## ✅ Milestone 1 — Project Initialization

Implemented:

- React
- TypeScript
- Vite
- ESLint

---

## ✅ Milestone 2 — Routing Foundation

Implemented:

- Project folder structure
- BrowserRouter
- React Router
- AppRoutes
- Login Page
- Dashboard Page
- Not Found Page

---

## ✅ Milestone 3 — Authentication Foundation

Implemented:

- User model
- AuthContext
- AuthContextType
- AuthProvider
- useAuth
- Shared authentication state

---

## ✅ Milestone 4 — Authentication Service Architecture

Implemented:

- AuthService
- LoginRequest
- LoginResponse
- Stateless authentication service
- Request / Response contracts
- Context → Service delegation

---

## ✅ Milestone 5 — Authentication Flow

Implemented:

- Login page
- Controlled components
- Form validation
- Error handling
- Loading state
- LoginRequest integration
- Navigation after successful authentication
- Mock authentication flow

---

# Roadmap

## Completed

- ✅ Project initialization
- ✅ Routing architecture
- ✅ Authentication foundation
- ✅ Authentication service architecture
- ✅ Authentication flow

## In Progress

- ⏳ Protected Routes
- ⏳ Session persistence
- ⏳ Logout
- ⏳ Amazon Cognito integration

## Planned

- Dashboard Layout
- Orders Service
- API Gateway integration
- Orders Dashboard
- Create Order
- Update Order
- Delete Order
- Error handling improvements
- Responsive UI
- Unit Testing

---

# Backend Integration

The frontend will integrate with the backend previously developed using:

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

Every architectural decision is discussed before implementation.

The objective is not only to build a working application, but also to understand **why** every design decision has been made.

---

# Software Architecture Philosophy

```text
Presentation Layer
        │
        ▼
Hooks Layer
        │
        ▼
Context Layer
        │
        ▼
Service Layer
        │
        ▼
Backend Layer
```

This layered architecture improves:

- Maintainability
- Readability
- Scalability
- Testability
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
- Layered Architecture
- Professional Development Workflow