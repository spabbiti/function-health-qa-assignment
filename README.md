# Function Health QA Assignment

This repository contains the Playwright QA tests and supporting documentation for the Function Health assessment.

## Repository Structure

- **docs/** - Project documentation and test case specifications
  - `Question1-TestCases.md` - Test cases for Question 1
  - `Question2-Security.md` - Security considerations for Question 2
  - `Bugs-And-UX-Feedback.md` - Bug reports and UX feedback

- **playwright/** - Playwright test implementation
  - `flows/` - Custom test flow helpers and reusable steps
  - `helpers/` - Data and config helper utilities
  - `pages/` - Page object models for the application under test
  - `tests/` - End-to-end Playwright test files
  - `test-results/` - Generated test result artifacts

- **playwright-report/** - Generated Playwright HTML report output
- `playwright.config.ts` - Playwright test runner configuration
- `package.json` - Project dependencies and scripts
- `tsconfig.json` - TypeScript compiler configuration

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```
2. Run the full test suite:
   ```bash
   npm test
   ```
3. View the generated report:
   ```bash
   npm run test:report
   ```

## Available Scripts

- `npm test` - Run Playwright tests
- `npm run test:ui` - Run Playwright tests with the interactive UI
- `npm run test:debug` - Run Playwright tests in debug mode
- `npm run test:headed` - Run tests in headed browser mode
- `npm run test:report` - Show the Playwright HTML report

## Notes

- The `docs/` folder contains the QA writeups and security notes.
- The `playwright/pages/` folder contains the page object models used by the tests.
- The `playwright/tests/` folder contains the main end-to-end test scenarios.

## Trade-offs and Assumptions

### Trade-offs

- The automation focuses on the highest-risk business flow (booking an MRI scan) rather than achieving high test coverage. This provides the greatest confidence in the application's core revenue-generating workflow.
- Only end-to-end happy path and one critical negative scenario (declined payment) are automated. Lower-risk UI validations (layout, styling, copy) were intentionally left for manual or visual testing to keep the suite fast and maintainable.
- Test data is currently managed through static test data objects. For a larger suite, I would generate data dynamically or use dedicated test fixtures to improve isolation and reduce dependencies.
- No CI/CD integration or test reporting implemented
- Payment tests use Stripe's published test cards. This validates the application integration without requiring access to real payment systems.

---

## Assumptions

- The staging environment is stable and available during test execution.
- Test accounts can be created and reused without impacting other testers.
- Appointment availability exists for the selected scan type and location.
- Stripe test cards behave according to Stripe's documented testing scenarios.
- Test data used during execution does not require cleanup after the tests complete.

---

# Scalability and Future Improvements

The framework has been designed using the **Page Object Model (POM)** to separate page interactions from test logic. A reusable `BookingFlow` class encapsulates the complete booking workflow, reducing duplication and improving readability.

If this framework were expanded for production use, I would implement:

- API utilities to create and clean up test data instead of relying on UI setup.
- Separate test environments and configuration files (development, staging, production) using environment variables.
- Parallel execution with independent test data to reduce execution time.
- CI/CD integration (e.g., GitHub Actions) with automated reporting, screenshots, traces, and failure notifications.
- Network request mocking for selected scenarios to improve test stability and reduce execution time while maintaining a small set of full end-to-end smoke tests.
- Playwright fixtures to centralize page object creation. Instead of instantiating page objects directly in each test file, create shared fixtures in a fixtures/ folder and inject them into tests.

---

# Why I Chose These Tests to Automate

The selected automated tests cover the highest-risk and highest-value user journeys:

1. **Existing member booking flow**

- Validates the primary revenue-generating workflow from sign-in through successful booking confirmation.

2. **New member sign-up and booking flow**

- Validates both user onboarding and booking in a single end-to-end scenario, ensuring new users can successfully complete the core business process.

3. **Declined payment scenario**

- Verifies that failed payments prevent bookings from being completed and that meaningful feedback is presented to the user, protecting both the user experience and business integrity.
