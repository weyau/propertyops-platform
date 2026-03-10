# PropertyOps Platform

PropertyOps is a fullstack property management platform built to demonstrate modern **DevOps practices**, **containerized application development**, and **automated CI/CD pipelines**.

The application allows users to manage properties, apartments, tenants and rent payments while showcasing a production-like engineering setup including:

* Containerized services using Docker
* Automated testing pipelines
* CI/CD workflows
* Infrastructure-ready architecture
* Cloud deployment capability

This project serves as a **DevOps portfolio project** demonstrating skills in:

* Fullstack development
* Containerization
* CI/CD automation
* Infrastructure design
* Testing and quality automation

---

# Architecture

The platform follows a modular fullstack architecture.

Frontend communicates with a backend API which persists data in a PostgreSQL database.

```
Angular Frontend
       │
       ▼
REST API (NestJS)
       │
       ▼
PostgreSQL Database
```

Future extensions may include:

* API Gateway
* Service separation
* Observability stack
* Infrastructure as Code

---

# Tech Stack

## Frontend

* Angular
* TypeScript
* SCSS
* RxJS
* Vitest (Unit Testing)
* Playwright (E2E Testing)
* Axe-core (Accessibility Testing)

## Backend

* Node.js
* NestJS
* Prisma ORM
* PostgreSQL

## DevOps

* Docker
* Docker Compose
* GitHub Actions (CI/CD)
* Containerized services
* Automated testing pipeline

---

# Project Structure

```
propertyops-platform
│
├── frontend
│   └── propertyops-frontend
│
├── backend
│   └── propertyops-api
│
├── infrastructure
│   ├── docker
│   └── compose
│
└── docs
```

---

# Core Features

### Property Management

Create and manage properties.

Example:

* Create property
* List properties
* Edit property information

### Apartment Management

Apartments are assigned to properties.

* Create apartment
* Assign to property
* Track apartment details

### Tenant Management

Manage tenants and their contact information.

* Create tenant
* Assign tenant to apartment
* Manage tenant records

### Rent Payments

Track incoming rent payments.

* Record rent payment
* Track payment history
* Overview per tenant

Future planned features:

* Utility cost calculation
* Monthly financial overview
* Reporting

---

# DevOps Features

This project demonstrates several important DevOps practices.

### Containerization

All services are containerized using Docker.

Services:

* frontend
* backend
* postgres

### Local Development Environment

Docker Compose allows running the full stack locally.

```
Frontend
Backend API
PostgreSQL Database
```

### CI Pipeline (planned)

GitHub Actions pipeline will automatically run:

* Install dependencies
* Lint code
* Run unit tests
* Run E2E tests
* Build Docker images

### CD Pipeline (planned)

Automated deployment pipeline:

```
Push to main
      │
      ▼
Run CI pipeline
      │
      ▼
Build Docker images
      │
      ▼
Deploy to cloud environment
```

---

# Getting Started

## Prerequisites

Install the following tools:

* Node.js
* Docker
* Docker Compose
* Angular CLI
* NestJS CLI

---

# Run Application Locally

Clone repository:

```
git clone https://github.com/yourusername/propertyops-platform.git
cd propertyops-platform
```

Start services using Docker Compose:

```
docker compose up --build
```

Application will be available at:

Frontend

```
http://localhost:4200
```

Backend API

```
http://localhost:3000
```

---

# Development Workflow

Feature branches are used for development.

```
main
develop
feature/*
```

Example commit messages:

```
feat: add property creation endpoint
fix: resolve payment validation bug
chore: update docker configuration
```

---

# Testing

Testing is a key part of the pipeline.

### Frontend

* Unit Tests: Vitest
* E2E Tests: Playwright
* Accessibility Tests: Axe-core

### Backend

* Unit Tests: Jest

Tests will run automatically in the CI pipeline.

---

# Future Improvements

Planned improvements include:

* Kubernetes deployment
* Terraform infrastructure
* Observability stack (Prometheus + Grafana)
* Authentication system
* Role-based access control
* Automated database migrations in CI/CD

---

# Purpose of This Project

This project was created to demonstrate practical experience with:

* DevOps engineering practices
* containerized application development
* CI/CD pipeline automation
* fullstack architecture

It serves as a **technical portfolio project** for DevOps and platform engineering roles.

---

# License

MIT License
