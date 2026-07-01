# Bugs and UX Feedback

## Overview

This document summarizes functional issues and usability observations identified while testing the Ezra booking flow in the staging environment.

---

# Bugs

## BUG-001: Payment Method Persists Across Different User Accounts

**Severity:** High

**Description**

A payment method added during one user session is displayed after signing in with a different user account.

**Steps to Reproduce**

1. Sign up or log in as **User A**.
2. Complete the booking flow and save a payment card.
3. Sign out.
4. Sign in as **User B**.
5. Navigate to the payment page.

**Expected Result**

Only payment methods associated with **User B** should be displayed.

**Actual Result**

The payment card previously added by **User A** is displayed for **User B**.

**Notes**

This behavior may be intentional in the staging environment if shared test data is being used; however, in a production environment this would represent a significant privacy and security concern.

**Attachment**

![alt text](<Screenshot 2026-06-30 at 4.42.32 PM-1.png>)

---

## BUG-002: Blank Schedule Page When Navigating Back

**Severity:** Medium

**Description**

Navigating back from the payment page results in a blank Schedule page.

**Steps to Reproduce**

1. Progress through the booking flow until the payment page.
2. Use the browser or application back navigation to return to the Schedule page.

**Expected Result**

The Schedule page should reload successfully with available locations and appointment times.

**Actual Result**

The Schedule page is displayed as blank. Refreshing the page restores the expected content.

**Attachment**

![alt text](<Screenshot 2026-06-30 at 4.25.59 PM-1.png>)

---

# UX Feedback

## UX-001: Improve Required Field Validation

**Category:** Form Validation

**Observation**

When attempting to continue without completing all required information, the validation message is displayed at the bottom of the page in black text. This can be easily overlooked, especially on longer forms.

**Recommendation**

Display inline validation messages adjacent to the affected fields and highlight them using a distinct error style (e.g., red text or borders). This provides clearer guidance and improves form usability.

---

## UX-002: Improve Navigation Within the Booking Flow

**Category:** Navigation / User Experience

**Observation**

Returning to the dashboard or home page from later stages of the booking flow requires repeatedly clicking the Back button.

**Recommendation**

Provide a persistent navigation option, such as a **Return to Dashboard** button or breadcrumb navigation, allowing users to quickly navigate to previous sections without multiple back actions.
