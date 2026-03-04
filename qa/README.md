# QA Automation Project

This project contains automated tests for the Vikunja task management application using Playwright and TypeScript.

## Project Structure

```
qa/
├── package.json          # Project dependencies and scripts
├── playwright.config.ts  # Playwright configuration
├── tsconfig.json         # TypeScript configuration
├── src/
│   ├── api/              # API testing utilities
│   │   ├── AuthApi.ts    # Authentication API wrapper
│   │   └── TaskApi.ts    # Task management API wrapper
│   ├── fixtures/         # Test fixtures
│   │   └── auth.fixture.ts # Authentication fixture for UI tests
│   ├── pages/            # Page Object Model classes
│   │   ├── DashboardPage.ts
│   │   ├── LoginPage.ts
│   │   ├── RegisterPage.ts
│   │   └── TaskPage.ts
│   └── utils/            # Utility functions
│       └── testData.ts   # Test data generation utilities
├── tests/                # Test specifications
│   ├── auth.spec.ts      # Authentication tests (register/login)
│   ├── task-ui.spec.ts   # Task CRUD via UI
│   └── task-hybrid.spec.ts # Hybrid API+UI tests
├── playwright-report/    # HTML test reports
└── test-results/         # Test artifacts (screenshots, videos on failure)
```

## Features

### Test Coverage

- **Authentication**: User registration and login flows
- **Task Management**: Complete CRUD operations for tasks
  - Create tasks via UI
  - Update task names via UI
  - Delete tasks via UI
- **Hybrid Testing**: API task creation followed by UI verification and deletion

### Design Choices

- **Page Object Model**: UI interactions abstracted into page classes for maintainability
- **API Wrappers**: Dedicated classes for API endpoints with proper authentication handling
- **Test Fixtures**: Authentication fixture to automatically log in for UI tests
- **TypeScript**: Type safety and better IDE support
- **Environment Configuration**: Base URL and credentials via environment variables
- **Parallel Execution**: Configured for single worker to avoid conflicts, with retries on CI
- **Rich Reporting**: HTML reports with screenshots and videos on failure

## Prerequisites

- Node.js 18+
- Application running at http://localhost:8080 (see root README.md)
- Environment variables:
  - `BASE_URL=http://localhost:8080` (optional, defaults to localhost:8080)
  - `TEST_USERNAME` and `TEST_PASSWORD` for hybrid tests (must be set)

## How to Run Tests

1. Install dependencies:
   ```bash
   npm install
   ```

2. Set up environment variables (create a `.env` file or export in shell):
   ```bash
   export BASE_URL=http://localhost:8080
   export TEST_USERNAME=your_test_user
   export TEST_PASSWORD=your_test_password
   ```

3. Run all tests:
   ```bash
   npx playwright test
   ```

4. Run specific test files:
   ```bash
   npx playwright test tests/auth.spec.ts
   npx playwright test tests/task-ui.spec.ts
   npx playwright test tests/task-hybrid.spec.ts
   ```

5. Run tests with UI mode:
   ```bash
   npx playwright test --ui
   ```

6. View test reports:
   ```bash
   npx playwright show-report
   ```

## Test Scope Checklist

### Completed ✅

- [x] User registration flow
- [x] User login flow
- [x] Task creation via UI
- [x] Task update (rename) via UI
- [x] Task deletion via UI
- [x] Hybrid test: API task creation → UI verification → UI deletion
- [x] Page Object Model implementation
- [x] API wrapper classes
- [x] Authentication fixtures
- [x] Environment-based configuration
- [x] HTML reporting with failure artifacts

### Design Decisions

- **Scope Focus**: Chose tasks over projects/teams as the primary CRUD entity since tasks are the core functionality
- **Hybrid Approach**: Implemented one hybrid test to demonstrate API+UI integration, focusing on create via API and verify/delete via UI
- **Authentication Strategy**: Used fixtures for UI tests to avoid repetitive login code, while hybrid tests handle auth via API
- **Browser Choice**: Configured for Chromium only to keep setup simple, with commented options for other browsers
- **Parallelism**: Disabled parallel execution to prevent test interference in the shared application state
- **Assertions**: Used Playwright's expect for visibility checks rather than API response validation where UI verification was sufficient

### Out of Scope

- Multi-browser testing (Firefox, WebKit)
- Mobile viewport testing
- Performance/load testing
- API-only comprehensive testing
- Team and project CRUD operations
- Advanced CI/CD integration</content>
<parameter name="filePath">c:\Users\ADMIN\aqa-test-task\qa\README.md
