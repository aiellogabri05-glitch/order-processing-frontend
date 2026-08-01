# Order Processing Frontend

Frontend application for the **Order Processing System**.

This project is being developed as a software engineering learning journey following professional development practices, clean architecture principles, and incremental development.

The frontend will integrate with the backend previously developed using AWS services.

---

# Project Goals

The main objectives of this project are:

- Learn React through a real-world application
- Learn TypeScript in a practical context
- Build a scalable frontend architecture
- Integrate with AWS backend services
- Apply software engineering best practices
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

## Future Integrations

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
│   └── ProtectedRoute.tsx
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
ProtectedRoute
    │
    ▼
LoginPage / Dashboard
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
localStorage
```

---

# Authentication Flow

```text
User
    │
    ▼
Login Page
    │
    ▼
Form Validation
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
Save User
(localStorage)
    │
    ▼
Dashboard
```

---

# Session Restoration Flow

```text
Application Start
        │
        ▼
AuthProvider
        │
        ▼
isInitializing = true
        │
        ▼
Read localStorage
        │
        ▼
User Found?
     ┌────┴────┐
     │         │
    Yes        No
     │         │
     ▼         ▼
 setUser()   user=null
     │         │
     └────┬────┘
          ▼
isInitializing = false
          │
          ▼
ProtectedRoute
          │
          ▼
isAuthenticated?
     ┌────┴────┐
     │         │
    Yes        No
     │         │
     ▼         ▼
Dashboard    Login
```

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
- ProtectedRoute protects authenticated pages
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

## Stateless Services

Services never store application state.

Their only responsibility is communicating with external systems.

Application state belongs to React Context.

---

## Incremental Development

Every feature follows the same workflow:

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
- Controlled form inputs
- Form validation
- Error handling
- Loading state
- Authentication request using LoginRequest
- Navigation to Dashboard
- Mock authentication flow

---

## ✅ Milestone 6 — Protected Routes

Implemented:

- ProtectedRoute component
- Route protection
- Automatic redirect to Login
- Route guarding using AuthContext
- Navigation with React Router
- Separation between routing and authentication logic

---

## ✅ Milestone 7 — Session Persistence

Implemented:

- Browser localStorage persistence
- User restoration after page refresh
- Authentication initialization state
- isInitializing state
- ProtectedRoute initialization handling
- Persistent login across page reloads

---

# Roadmap

## Completed

- ✅ Project initialization
- ✅ Routing architecture
- ✅ Authentication foundation
- ✅ Authentication service architecture
- ✅ Authentication flow
- ✅ Protected Routes
- ✅ Session persistence

## Next

- Logout flow
- Dashboard layout
- Navigation bar
- User profile
- Amazon Cognito integration

## Planned

- Orders Service
- API Gateway integration
- Orders Dashboard
- Create Order
- Update Order
- Delete Order
- Responsive UI
- Global Error Handling
- Loading Components
- Unit Testing

---

# Backend Integration

The frontend will integrate with the backend developed using:

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

The objective is not only to build a working application, but also to understand the reasoning behind every design decision.

---

# Software Architecture

```text
Presentation Layer
        │
        ▼
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
- Layered Architecture
- Incremental Development
- Professional Development Workflow