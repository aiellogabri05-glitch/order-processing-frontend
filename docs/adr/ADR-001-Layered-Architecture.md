# ADR-001: Adopt a Layered Architecture

- **Status:** Accepted
- **Date:** 2026-08-02
- **Decision Makers:** Project Author

---

# Context

The project required an architecture that could evolve from a simple frontend prototype into a production-inspired application integrated with AWS services.

Future integrations include:

- Amazon Cognito
- API Gateway
- AWS Lambda
- DynamoDB

Without a clear separation of responsibilities, the application would quickly become difficult to maintain.

---

# Decision

The project adopts a **Layered Architecture**.

Each layer has a single responsibility and communicates only with adjacent layers.

```text
Browser

↓

React

↓

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

The Presentation Layer never communicates directly with AWS services.

All external communication is delegated to the Services Layer.

---

# Rationale

A layered architecture provides several advantages.

## Separation of Concerns

Each layer has one responsibility.

Examples:

- Pages render application screens.
- Components provide reusable UI.
- Hooks expose application logic.
- Context manages application state.
- Services communicate with external systems.

---

## Scalability

The application can grow without requiring major architectural changes.

New features can be added by extending existing layers instead of modifying unrelated code.

---

## Maintainability

Changes remain isolated.

Example:

Replacing Mock Authentication with Amazon Cognito only affects AuthService.

The rest of the application remains unchanged.

---

## Testability

Every layer can be tested independently.

Examples:

- Components
- Services
- Context
- Hooks

---

## Reusability

Reusable UI components remain independent from business logic.

Examples:

- Card
- StatisticCard
- Layout

---

# Alternatives Considered

## Direct Service Calls from Pages

```text
Page

↓

AWS
```

Rejected.

Reason:

Pages would become tightly coupled to backend implementations.

---

## Global State Everywhere

Rejected.

Reason:

The project currently requires only authentication as shared state.

Using a larger state management solution would introduce unnecessary complexity.

---

# Consequences

Positive:

- Clean architecture
- High maintainability
- Easy AWS migration
- Better scalability
- Easier testing

Negative:

- More files
- More abstraction
- Slightly higher initial complexity

The long-term benefits outweigh the additional structure.

---

# Current Implementation

The architecture is already reflected in the project structure.

```text
src/

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

Each folder represents one architectural responsibility.

---

# Future Impact

This decision enables future integration with:

- Amazon Cognito
- API Gateway
- AWS Lambda
- DynamoDB

without modifying the Presentation Layer.

Only the Services Layer will change.

---

# Related Documents

- docs/ARCHITECTURE.md
- docs/DEVELOPMENT.md
- docs/AUTHENTICATION.md
- docs/ROADMAP.md