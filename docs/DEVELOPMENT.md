# Development Guide

This document describes the development workflow, coding conventions, and project organization used in the **Order Processing Frontend**.

The goal is to maintain a clean, scalable, and consistent codebase throughout the project's evolution.

---

# Development Philosophy

Every feature follows the same development lifecycle.

```text
Understand

↓

Plan

↓

Design

↓

Implement

↓

Review

↓

Test

↓

Document

↓

Commit

↓

Push
```

Each step is completed before moving to the next one.

---

# Development Workflow

## 1. Understand

Before writing code, clearly understand the problem.

Questions to answer:

- What needs to be built?
- Why is it needed?
- Which part of the application is responsible?

---

## 2. Plan

Identify:

- Components
- Services
- Types
- Context
- Constants

The implementation starts only after the architecture is defined.

---

## 3. Design

Define responsibilities before writing code.

Example:

```text
LoginPage

↓

Build LoginRequest

↓

useAuth()

↓

AuthContext

↓

AuthService
```

---

## 4. Implement

Implementation follows the designed architecture.

Responsibilities should never overlap.

---

## 5. Review

After implementation:

- Remove duplicated code
- Improve readability
- Verify responsibilities
- Refactor if necessary

---

## 6. Test

Every feature is manually tested.

Examples:

- Login
- Logout
- Refresh page
- Protected routes
- Dashboard statistics

---

## 7. Documentation

Documentation is updated after every completed milestone.

Updated documents may include:

- README
- Architecture
- Authentication
- Roadmap
- Changelog

---

## 8. Commit

Each milestone has its own commit.

Examples:

```text
feat: implement dashboard foundation

feat: add orders mock service

docs: redesign project README
```

---

## 9. Push

Only completed and tested milestones are pushed to GitHub.

---

# Folder Responsibilities

```text
pages/
```

Contains application pages.

Examples:

- LoginPage
- DashboardPage

---

```text
components/
```

Reusable UI components.

Examples:

- Layout
- Card
- StatisticCard
- ProtectedRoute

---

```text
contexts/
```

Global application state.

Current:

- AuthContext

---

```text
hooks/
```

Custom React hooks.

Current:

- useAuth

---

```text
services/
```

Communication with external systems.

Current:

- AuthService
- OrdersService

---

```text
types/
```

Application models.

Examples:

- User
- Order
- LoginRequest
- LoginResponse

---

```text
constants/
```

Application constants.

Examples:

- Routes
- Messages
- Storage Keys

---

```text
routes/
```

Application routing.

---

# Naming Conventions

## Components

PascalCase

```text
Layout.tsx
Card.tsx
StatisticCard.tsx
```

---

## Hooks

camelCase starting with "use"

```text
useAuth.ts
```

---

## Contexts

PascalCase

```text
AuthContext.tsx
```

---

## Services

PascalCase ending with "Service"

```text
AuthService.ts
OrdersService.ts
```

---

## Types

PascalCase

```text
User.ts
Order.ts
LoginRequest.ts
```

---

## Constants

camelCase

```text
routes.ts
messages.ts
storage.ts
```

---

# Coding Principles

The project follows these principles:

- Single Responsibility Principle
- Separation of Concerns
- Component Reusability
- Stateless Services
- Type Safety
- Clean Code
- Incremental Development

---

# Commit Convention

| Prefix | Description |
|---------|-------------|
| feat | New feature |
| fix | Bug fix |
| refactor | Code improvement |
| docs | Documentation |
| style | Formatting |
| test | Tests |
| chore | Maintenance |

---

# Quality Checklist

Before completing a milestone:

- Code compiles
- No TypeScript errors
- ESLint passes
- Feature tested
- Documentation updated
- Commit created
- Push completed

---

# Long-Term Vision

The project is intentionally developed following professional software engineering practices.

The objective is not only to build a working application, but to create a maintainable, scalable, and well-documented codebase suitable for future AWS integration.