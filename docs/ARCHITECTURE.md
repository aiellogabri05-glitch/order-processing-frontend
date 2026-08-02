# Architecture

This document describes the overall architecture of the **Order Processing Frontend** and the reasoning behind the main architectural decisions.

---

# Architecture Overview

The frontend follows a layered architecture designed to keep responsibilities separated and the codebase scalable.

```text
Browser
    │
    ▼
React Application
    │
    ▼
Pages
    │
    ▼
Shared Components
    │
    ▼
Custom Hooks
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

Each layer communicates only with the layer directly below it.

---

# Layers

## Presentation Layer

Responsible for rendering the user interface.

Contains:

- Pages
- Shared Components
- Layout

Examples:

```text
DashboardPage
LoginPage
Layout
Card
StatisticCard
```

Responsibilities:

- Render UI
- Handle user interaction
- Never communicate directly with the backend

---

## Hooks Layer

Custom React hooks expose application functionality while hiding implementation details.

Current hooks:

```text
useAuth()
```

Responsibilities:

- Consume Context
- Provide a simple API to components

---

## Context Layer

Contexts manage shared application state.

Current context:

```text
AuthContext
```

Responsibilities:

- Authentication state
- Login
- Logout
- Session restoration
- Loading state

---

## Services Layer

Services communicate with external systems.

Current services:

```text
AuthService
OrdersService
```

Responsibilities:

- Backend communication
- Mock services during development
- Future AWS integration

Services are intentionally stateless.

---

## Backend Layer

The backend is developed independently and will be integrated without changing the presentation layer.

Planned services:

- Amazon Cognito
- API Gateway
- AWS Lambda
- DynamoDB

---

# Folder Organization

```text
src/

components/
contexts/
hooks/
pages/
routes/
services/
types/
constants/
utils/
```

Each folder has a single responsibility.

---

# Authentication Architecture

```text
Login Page
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
```

Later:

```text
AuthService

↓

Amazon Cognito
```

No other layer needs to change.

---

# Orders Architecture

Current:

```text
Dashboard

↓

OrdersService

↓

Mock Orders
```

Future:

```text
Dashboard

↓

OrdersService

↓

API Gateway

↓

AWS Lambda

↓

DynamoDB
```

The Dashboard will remain unchanged.

Only OrdersService will change.

---

# Shared Layout

All authenticated pages are rendered inside the shared Layout.

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

---

# Design Principles

The project follows several software engineering principles.

## Single Responsibility Principle

Every module has exactly one responsibility.

Examples:

- LoginPage → Authentication UI
- Layout → Shared authenticated UI
- AuthContext → Authentication state
- AuthService → Authentication provider
- OrdersService → Orders provider

---

## Separation of Concerns

Presentation

↓

Hooks

↓

Context

↓

Services

↓

Backend

---

## Stateless Services

Services never store application state.

All state belongs to React Context or local component state.

---

## Component Reusability

Components are designed to be reusable whenever possible.

Examples:

- Card
- StatisticCard
- Layout
- ProtectedRoute

---

## Incremental Development

Every feature follows the same lifecycle.

```text
Planning

↓

Architecture

↓

Implementation

↓

Testing

↓

Documentation

↓

Commit

↓

Push
```

---

# Current Status

Completed:

- Authentication Module
- Dashboard Foundation
- Shared Layout
- Protected Routes
- Session Persistence
- Mock Orders Service
- Application Constants

Next:

- Orders Module
- Amazon Cognito Integration
- API Gateway Integration

---

# Long-Term Vision

The final application will communicate with AWS services without requiring changes to the presentation layer.

The architecture intentionally separates infrastructure from business logic to keep the application maintainable and scalable.