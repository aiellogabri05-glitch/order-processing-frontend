# Order Processing Frontend

A modern React + TypeScript frontend for the **Order Processing System**.

This project is part of a complete full-stack software engineering journey and is being developed using professional software architecture principles rather than tutorial-driven development.

The application will integrate with an AWS backend built with **Amazon Cognito**, **API Gateway**, **AWS Lambda**, and **DynamoDB**.

---

## Features

### Authentication

- User login
- Logout
- Protected routes
- Session persistence
- Shared authentication context
- Authentication lifecycle management

### Dashboard

- Shared application layout
- Dashboard overview
- Orders statistics
- Mock orders service
- Recent activity section

### Architecture

- Layered architecture
- React Context API
- Custom Hooks
- Stateless Services
- Shared Components
- Centralized Constants
- Type-safe models
- Incremental development

---

# Tech Stack

| Category | Technologies |
|----------|--------------|
| Frontend | React 19 |
| Language | TypeScript |
| Build Tool | Vite |
| Routing | React Router |
| State Management | React Context API |
| Linting | ESLint |
| Authentication | Mock Auth (Amazon Cognito planned) |
| Backend | AWS Lambda, API Gateway, DynamoDB *(planned integration)* |

---

# Project Structure

```text
src/
│
├── assets/
│
├── components/
│   ├── Card.tsx
│   ├── Layout.tsx
│   ├── ProtectedRoute.tsx
│   └── StatisticCard.tsx
│
├── constants/
│   ├── messages.ts
│   ├── routes.ts
│   └── storage.ts
│
├── contexts/
│   └── AuthContext.tsx
│
├── hooks/
│   └── useAuth.ts
│
├── pages/
│   ├── DashboardPage.tsx
│   ├── LoginPage.tsx
│   └── NotFoundPage.tsx
│
├── routes/
│   └── AppRoutes.tsx
│
├── services/
│   ├── AuthService.ts
│   └── OrdersService.ts
│
├── types/
│   ├── AuthContextType.ts
│   ├── LoginRequest.ts
│   ├── LoginResponse.ts
│   ├── Order.ts
│   └── User.ts
│
├── utils/
│
├── App.tsx
├── App.css
├── index.css
└── main.tsx
```

---

# Architecture

```text
Browser
    │
    ▼
React
    │
    ▼
BrowserRouter
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

The project follows a layered architecture where each layer has a single responsibility and communicates only with adjacent layers.

---

# Completed Milestones

| Milestone | Status |
|-----------|--------|
| Project Initialization | ✅ |
| Routing Foundation | ✅ |
| Authentication Foundation | ✅ |
| Authentication Service | ✅ |
| Authentication Flow | ✅ |
| Protected Routes | ✅ |
| Session Persistence | ✅ |
| Logout Flow | ✅ |
| Shared Application Layout | ✅ |
| Codebase Standardization | ✅ |
| Dashboard Foundation | ✅ |
| Mock Orders Service | ✅ |

---

# Roadmap

## Completed

- React project initialization
- Routing architecture
- Authentication module
- Protected routes
- Session persistence
- Shared layout
- Dashboard foundation
- Mock Orders Service
- Centralized application constants
- Reusable UI components

---

## In Progress

- Orders module

---

## Planned

- Orders table
- Create Order
- Update Order
- Delete Order
- Amazon Cognito integration
- API Gateway integration
- AWS Lambda integration
- Responsive UI
- Loading components
- Error handling
- Unit testing

---

# Design Principles

The project is developed following modern software engineering principles.

- Single Responsibility Principle (SRP)
- Separation of Concerns
- Layered Architecture
- Stateless Services
- Component Reusability
- Incremental Development
- Type Safety
- Clean Code

---

# Getting Started

Clone the repository

```bash
git clone <repository-url>
```

Install dependencies

```bash
npm install
```

Start the development server

```bash
npm run dev
```

Build the project

```bash
npm run build
```

Run ESLint

```bash
npm run lint
```

---

# Learning Goals

This project is intentionally built without relying on copy-and-paste tutorials.

The objective is to understand not only **how** to implement features, but also **why** architectural decisions are made.

The project focuses on:

- Software Architecture
- React Best Practices
- TypeScript
- AWS Integration
- Clean Code
- Scalable Frontend Design
- Professional Development Workflow

---

# Future AWS Integration

The current frontend uses mock services.

These services will progressively be replaced with real AWS integrations:

- Amazon Cognito
- API Gateway
- AWS Lambda
- DynamoDB

without changing the presentation layer.

This demonstrates the benefits of a layered architecture and proper separation of concerns.

---

# Author

Developed as a personal Software Engineering learning project.

The goal is to build a production-inspired full-stack application while understanding every architectural decision behind it.