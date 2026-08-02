# Authentication

This document describes the authentication architecture of the **Order Processing Frontend**.

The goal of the authentication module is to provide a scalable and maintainable authentication system that can evolve from a mock implementation to a real Amazon Cognito integration without changing the presentation layer.

---

# Authentication Overview

Current authentication flow:

```text
User

↓

Login Page

↓

Form Validation

↓

LoginRequest

↓

useAuth()

↓

AuthContext

↓

AuthService

↓

Mock Authentication

↓

LoginResponse

↓

AuthContext

↓

localStorage

↓

Dashboard
```

Future authentication flow:

```text
User

↓

Login Page

↓

Form Validation

↓

LoginRequest

↓

useAuth()

↓

AuthContext

↓

AuthService

↓

Amazon Cognito

↓

JWT Tokens

↓

Dashboard
```

Only the AuthService implementation will change.

Everything else remains unchanged.

---

# Authentication Components

The authentication module consists of several independent layers.

## LoginPage

Responsibilities:

- Render login form
- Validate user input
- Build LoginRequest
- Call login()
- Navigate to Dashboard

LoginPage never communicates directly with the authentication provider.

---

## useAuth

Custom React Hook.

Responsibilities:

- Consume AuthContext
- Expose authentication methods
- Hide Context implementation details

Current API:

```text
login()

logout()

user

isAuthenticated

isLoading

isInitializing
```

---

## AuthContext

The AuthContext owns the authentication state.

Responsibilities:

- Store authenticated user
- Manage login
- Manage logout
- Restore session
- Persist authentication
- Expose authentication state

Application state belongs here.

---

## AuthService

The AuthService communicates with the authentication provider.

Current provider:

```text
Mock Authentication
```

Future provider:

```text
Amazon Cognito
```

No UI component depends on the provider implementation.

---

# Authentication Lifecycle

## Login

```text
Login Page

↓

Validation

↓

AuthService

↓

Authenticated

↓

Save User

↓

Dashboard
```

---

## Session Persistence

When the application starts:

```text
Application

↓

AuthProvider

↓

isInitializing = true

↓

Read localStorage

↓

User Found?

↓

Yes

↓

Restore User

↓

Dashboard

↓

No

↓

Login
```

The initialization state prevents ProtectedRoute from redirecting before authentication has been restored.

---

## Logout

```text
Logout Button

↓

Layout

↓

logout()

↓

AuthContext

↓

AuthService

↓

Remove localStorage

↓

Clear User

↓

Login
```

---

# Protected Routes

Private pages are wrapped by ProtectedRoute.

```text
Browser

↓

ProtectedRoute

↓

isInitializing?

↓

Wait

↓

No

↓

isAuthenticated?

↓

Yes

↓

Layout

↓

Dashboard
```

If the user is not authenticated:

```text
ProtectedRoute

↓

Navigate(Login)
```

---

# Shared Layout

Every authenticated page shares the same layout.

```text
ProtectedRoute

↓

Layout

├── Header

├── Welcome User

├── Logout

└── Page Content
```

Pages focus only on business logic.

Authentication UI is centralized.

---

# Session Persistence

Authentication survives page refresh thanks to browser localStorage.

Current storage:

```text
localStorage

↓

user
```

Future versions may also store:

- Access Token
- Refresh Token
- Token Expiration

depending on Amazon Cognito integration.

---

# Authentication Models

Current models:

```text
LoginRequest

↓

LoginResponse

↓

User
```

These models define the communication contract between the Context and the Service.

---

# Design Decisions

## Why Context?

Authentication state is shared across multiple pages.

React Context provides a centralized solution without prop drilling.

---

## Why Services?

Authentication providers can change.

Today:

```text
Mock Authentication
```

Tomorrow:

```text
Amazon Cognito
```

The UI should never change.

---

## Why ProtectedRoute?

Authentication logic should never be duplicated inside pages.

ProtectedRoute centralizes access control.

---

## Why Layout?

Every authenticated page shares the same interface.

The Layout owns:

- Header
- Welcome User
- Logout

Pages remain focused on their own responsibilities.

---

# Current Status

Implemented:

- Login
- Logout
- Protected Routes
- Session Persistence
- Shared Layout
- Mock Authentication
- AuthContext
- AuthService

Planned:

- Amazon Cognito
- JWT Authentication
- Token Refresh
- Automatic Session Expiration

---

# Future AWS Integration

The authentication architecture has been intentionally designed so that migrating to Amazon Cognito only requires replacing the internal implementation of AuthService.

The rest of the application will remain unchanged.

This demonstrates the benefits of:

- Layered Architecture
- Separation of Concerns
- Stateless Services
- Dependency Isolation