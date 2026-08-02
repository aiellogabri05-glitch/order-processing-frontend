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
│   ├── Layout.tsx
│   └── ProtectedRoute.tsx
├── constants/
│   ├── messages.ts
│   ├── routes.ts
│   └── storage.ts
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
Layout
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

# Application Layout

All authenticated pages share the same layout.

```text
ProtectedRoute
        │
        ▼
      Layout
        │
        ├── Header
        ├── Welcome User
        ├── Logout Button
        └── Page Content
```

---

# Application Constants

The project centralizes application constants to avoid duplicated hardcoded values.

Current constants include:

- Application routes
- Local Storage keys
- Authentication messages

This improves:

- Maintainability
- Consistency
- Refactoring
- Readability

---

# Design Principles

## Single Responsibility Principle (SRP)

Each module has one responsibility.

Examples:

- App.tsx composes the application
- AppRoutes manages routing
- Layout provides the authenticated application shell
- ProtectedRoute protects private routes
- LoginPage handles authentication UI
- DashboardPage displays dashboard content
- AuthContext manages authentication state
- AuthService communicates with the authentication provider

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

---

## Stateless Services

Services never store application state.

Application state belongs to React Context.

---

## Incremental Development

Every feature follows this workflow:

1. Understand the problem
2. Design the architecture
3. Define responsibilities
4. Define contracts
5. Implement
6. Review
7. Test
8. Update documentation
9. Commit
10. Push

---

# Completed Milestones

## ✅ Milestone 1 — Project Initialization

- React
- TypeScript
- Vite
- ESLint

---

## ✅ Milestone 2 — Routing Foundation

- React Router
- BrowserRouter
- Project structure
- Login page
- Dashboard page
- Not Found page

---

## ✅ Milestone 3 — Authentication Foundation

- User model
- AuthContext
- AuthProvider
- useAuth
- Shared authentication state

---

## ✅ Milestone 4 — Authentication Service Architecture

- AuthService
- LoginRequest
- LoginResponse
- Stateless authentication service
- Request / Response contracts

---

## ✅ Milestone 5 — Authentication Flow

- Login form
- Validation
- Loading state
- Error handling
- Navigation
- Mock authentication

---

## ✅ Milestone 6 — Protected Routes

- ProtectedRoute
- Route guarding
- Automatic redirect
- Authentication checks

---

## ✅ Milestone 7 — Session Persistence

- localStorage persistence
- Session restoration
- Authentication initialization
- Persistent login

---

## ✅ Milestone 8 — Logout Flow

- Logout button
- Session cleanup
- localStorage cleanup
- Automatic redirect to Login

---

## ✅ Milestone 9 — Application Layout

- Shared Layout
- Header
- Welcome message
- Logout moved into Layout
- Shared authenticated UI

---

## ✅ Milestone 10 — Codebase Standardization

Implemented:

- Shared application constants
- Centralized routes
- Centralized Local Storage keys
- Centralized authentication messages
- Removed hardcoded strings
- Improved maintainability
- Improved scalability

---

# Roadmap

## ✅ Completed

- Project initialization
- Routing architecture
- Authentication foundation
- Authentication service architecture
- Authentication flow
- Protected Routes
- Session persistence
- Logout flow
- Application Layout
- Codebase standardization

---

## 🚧 Next

- Shared UI Components
- Dashboard improvements
- Amazon Cognito integration

---

## 📋 Planned

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

The frontend will integrate with:

- AWS Lambda
- API Gateway
- Amazon Cognito
- DynamoDB
- JWT Authentication
- Owner-based Authorization
- CloudWatch

---

# Software Architecture

```text
Presentation Layer
        │
        ▼
Pages
        │
        ▼
Shared Layout
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

---

# Learning Approach

Every architectural decision is discussed before implementation.

The objective is not only to build a working application but to understand the reasoning behind every design decision.

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