# ADR-002: Use React Context for Authentication

- **Status:** Accepted
- **Date:** 2026-08-02
- **Decision Makers:** Project Author

---

# Context

The application requires a shared authentication state.

Multiple components need access to:

- authenticated user
- login
- logout
- loading state
- authentication status

Examples include:

- LoginPage
- ProtectedRoute
- Layout
- Dashboard
- Future Orders module

Passing authentication data through props would quickly become difficult to maintain.

---

# Decision

The project adopts **React Context** as the global authentication state management solution.

Authentication state is centralized inside:

```text
AuthContext
```

Components consume authentication through:

```text
useAuth()
```

instead of accessing Context directly.

---

# Rationale

## Centralized State

Authentication is application-wide state.

A single source of truth simplifies maintenance.

---

## No Prop Drilling

Without Context:

```text
App

↓

Layout

↓

Dashboard

↓

Component

↓

User
```

Authentication would need to be passed through multiple component levels.

Context removes this requirement.

---

## Encapsulation

Components never interact directly with Context.

Instead they use:

```text
useAuth()
```

The hook hides the Context implementation.

---

## Simplicity

Current project size does not justify introducing Redux or other external state libraries.

React Context provides all required functionality.

---

# Alternatives Considered

## Redux

Rejected.

Reason:

The application currently has only one shared global state:

Authentication.

Redux would introduce unnecessary complexity.

---

## Zustand

Rejected.

Reason:

Although lightweight, React Context is sufficient and requires no additional dependency.

---

## Prop Drilling

Rejected.

Reason:

Would reduce maintainability as the application grows.

---

# Consequences

Positive:

- Centralized authentication
- Cleaner components
- Easy maintenance
- Better scalability
- Less duplicated logic

Negative:

- Requires Context Provider
- Requires Custom Hook

The benefits outweigh the additional abstraction.

---

# Current Implementation

Authentication flow:

```text
LoginPage

↓

useAuth()

↓

AuthContext

↓

AuthService

↓

Mock Authentication
```

Future implementation:

```text
LoginPage

↓

useAuth()

↓

AuthContext

↓

AuthService

↓

Amazon Cognito
```

Only AuthService will change.

---

# Related Documents

- docs/AUTHENTICATION.md
- docs/ARCHITECTURE.md
- docs/DEVELOPMENT.md