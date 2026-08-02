# Contributing

Thank you for your interest in contributing to the **Order Processing Frontend**.

Although this project is currently developed by a single author, it follows collaborative software engineering practices to make future contributions consistent and maintainable.

---

# Development Philosophy

Every contribution should follow the project's development workflow.

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

Architecture decisions always come before implementation.

---

# Getting Started

## Clone the repository

```bash
git clone <repository-url>
```

---

## Install dependencies

```bash
npm install
```

---

## Start the development server

```bash
npm run dev
```

---

## Build

```bash
npm run build
```

---

## Lint

```bash
npm run lint
```

---

# Project Structure

```text
src/

assets/

components/

constants/

contexts/

hooks/

pages/

routes/

services/

types/

utils/
```

Each folder has a single responsibility.

---

# Coding Standards

The project follows modern React and TypeScript best practices.

## Components

- PascalCase
- One responsibility
- Reusable whenever possible

Example:

```text
Layout.tsx
Card.tsx
StatisticCard.tsx
```

---

## Hooks

Hooks always start with **use**.

Example:

```text
useAuth.ts
```

---

## Services

Services communicate with external systems.

Services never store application state.

Example:

```text
AuthService.ts
OrdersService.ts
```

---

## Types

Application models use PascalCase.

Example:

```text
User.ts
Order.ts
LoginRequest.ts
```

---

## Constants

Application constants use camelCase.

Example:

```text
routes.ts
messages.ts
storage.ts
```

---

# Architecture Principles

Every contribution should respect the project's architecture.

Current architecture:

```text
Pages

↓

Components

↓

Hooks

↓

Context

↓

Services

↓

Backend
```

Responsibilities should never overlap.

---

# Development Rules

Before opening a contribution:

- Code compiles
- No TypeScript errors
- ESLint passes
- Feature tested
- Documentation updated

---

# Commit Convention

Use meaningful commit messages.

Examples:

```text
feat: add orders page

fix: resolve login redirect

refactor: simplify authentication flow

docs: update architecture documentation

test: add orders service tests

chore: update dependencies
```

---

# Documentation

Every completed milestone should update the appropriate documentation.

Possible documents include:

- README.md
- ARCHITECTURE.md
- AUTHENTICATION.md
- DEVELOPMENT.md
- ROADMAP.md
- CHANGELOG.md

Documentation is considered part of the feature.

---

# Pull Requests

Future pull requests should:

- Keep changes focused
- Follow the architecture
- Update documentation
- Pass build and lint checks

---

# Long-Term Vision

The project aims to demonstrate professional frontend architecture using React, TypeScript, and AWS services.

Every contribution should improve:

- Readability
- Maintainability
- Scalability
- Documentation
- Code quality