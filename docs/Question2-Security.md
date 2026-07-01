# Question 2

## Part 1 – Integration Test Case

### Objective

Verify that authenticated members cannot access, modify, or delete another member's medical questionnaire or any other protected medical data.

### Risk

Medical data is highly sensitive and protected under privacy regulations. An authorization failure could expose Protected Health Information (PHI), resulting in legal, financial, and reputational consequences.

### Preconditions

- Member A exists and has started or completed a Medical Questionnaire.
- Member B exists as a separate authenticated user.
- Both members have valid authentication credentials.

### Test Steps

1. Log in as **Member A**.
2. Begin the Medical Questionnaire and save progress.
3. Capture the questionnaire ID (or resource identifier) from the browser's network traffic.
4. Log out.
5. Log in as **Member B**.
6. Modify the request by replacing Member B's questionnaire ID with Member A's questionnaire ID.
7. Attempt the following operations:
   - Retrieve the questionnaire
   - Update the questionnaire
   - Delete the questionnaire
8. Observe the API responses and verify the application state.

### Expected Results

- Member B cannot access Member A's questionnaire.
- The API returns **403 Forbidden** (preferred) or **404 Not Found**.
- No medical data belonging to Member A is exposed.
- No updates or deletions are performed.
- Unauthorized access attempts are recorded in audit logs.

---

# Part 2 – HTTP Requests

### Authenticate Member A

```http
POST /api/auth/login
Content-Type: application/json

{
  "email": "memberA@example.com",
  "password": "********"
}
```

**Expected Response**

```http
200 OK

```

---

### Retrieve Member A's Questionnaire

```http
GET /api/medical-questionnaires/{questionnaireId}
Authorization: Bearer <JWT_TOKEN_A>
```

**Expected Response**

```http
200 OK
```

---

### Attempt Unauthorized Read as Member B

```http
GET /api/medical-questionnaires/{questionnaireId}
Authorization: Bearer <JWT_TOKEN_B>
```

**Expected Response**

```http
403 Forbidden
```

---

### Attempt Unauthorized Update

```http
PUT /api/medical-questionnaires/{questionnaireId}
Authorization: Bearer <JWT_TOKEN_B>
Content-Type: application/json

{
  ...
}
```

**Expected Response**

```http
403 Forbidden
```

---

### Attempt Unauthorized Delete

```http
DELETE /api/medical-questionnaires/{questionnaireId}
Authorization: Bearer <JWT_TOKEN_B>
```

**Expected Response**

```http
403 Forbidden
```

---

# Part 3 – Managing Security Quality Across Sensitive Endpoints

With over 100 endpoints transferring sensitive medical information, manually validating security for every endpoint is not scalable. My approach would combine automated API testing, security-focused authorization testing, contract testing, and continuous validation in CI/CD.

## 1. Centralized Authentication & Authorization Testing

Develop reusable API test utilities that verify common authentication and authorization scenarios across all protected endpoints, including:

- Valid authentication
- Missing authentication
- Invalid or expired JWT tokens
- Cross-user access attempts
- Role-based access control (RBAC)
- Resource ownership validation

This ensures every endpoint consistently enforces access control regardless of the underlying service.

---

## 2. Authorization & IDOR Testing

One of the highest risks for applications handling medical data is **Insecure Direct Object Reference (IDOR)**.

For every endpoint that accesses member-specific resources, I would verify that:

- Users can only access their own resources.
- Modifying resource identifiers (IDs, UUIDs, etc.) cannot expose another member's data.
- Authorization is enforced server-side rather than relying on client-provided identifiers.

These tests should cover all CRUD operations (GET, POST, PUT/PATCH, DELETE) where applicable.

---

## 3. Contract Testing Between Services

Given the number of endpoints and the likelihood of multiple backend services (e.g., booking, payments, member profiles, medical questionnaires), I would introduce **consumer-driven contract testing** to verify service compatibility.

Contract tests help ensure that:

- Request and response schemas remain compatible.
- Required fields are not accidentally removed or renamed.
- Data types remain consistent.
- Breaking API changes are detected before deployment.

Contract testing complements integration testing by reducing failures caused by service-to-service interface changes. However, it does **not** replace functional or security testing, as it does not validate authorization or business logic.

---

## 4. Automated API Security Regression Suite

I would build a reusable API regression suite covering all protected endpoints.

The suite would validate:

- Authentication
- Authorization
- Response codes
- Input validation
- Error handling
- Sensitive data exposure
- CRUD operations

These tests should execute automatically in the CI/CD pipeline so that any security regression blocks deployment.

---

## 5. Error Handling & Data Exposure

Security testing should also verify that APIs do not leak sensitive implementation details.

Examples include ensuring responses do not expose:

- Internal database identifiers
- Stack traces
- SQL errors
- Framework exception messages
- Sensitive medical information in error payloads

Error responses should provide only the information necessary for the client while protecting internal implementation details.

---

## 6. Logging & Auditability

Because the application handles protected health information, all sensitive operations should generate audit logs.

Examples include:

- Failed authentication attempts
- Authorization failures
- Medical questionnaire updates
- Medical record deletions
- Permission changes

These logs support incident investigation, security monitoring, and regulatory compliance.

---

# Trade-offs

### Advantages

- Scalable security validation across a large number of endpoints.
- Reusable authorization tests reduce duplication.
- Contract testing detects service compatibility issues early.
- Automated execution in CI/CD provides fast feedback and prevents regressions.
- Layered testing improves confidence without relying solely on manual testing.

### Trade-offs

- Building and maintaining reusable security and contract tests requires an upfront investment.
- Contract tests need coordination between service producers and consumers.
- Test environments and test data must remain stable for reliable execution.
- As APIs evolve, the automation suite requires ongoing maintenance.

### Potential Risks

- Security tests may miss business logic vulnerabilities that require exploratory testing.
- False positives can occur due to unstable environments or inconsistent test data.
- Contract tests verify interface compatibility but do not validate business rules or authorization.
- Over-reliance on automation may overlook edge cases better discovered through exploratory testing.

## Overall Approach

I would use a layered API quality strategy:

| Testing Layer          | Primary Goal                                                      |
| ---------------------- | ----------------------------------------------------------------- |
| Contract Testing       | Prevent breaking changes between services                         |
| Functional API Testing | Validate business workflows and data integrity                    |
| Security Testing       | Verify authentication, authorization, and protection against IDOR |
| Integration Testing    | Validate interactions between dependent services                  |
| CI/CD Regression       | Continuously detect regressions before deployment                 |

This layered approach provides confidence that APIs remain secure, functionally correct, and compatible as the system evolves, while balancing automation coverage with exploratory testing for higher-risk scenarios.
