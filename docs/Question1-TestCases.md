# Question 1

## Part 1 – Booking Flow Test Cases

### Test Strategy

The following test cases are prioritized using a **risk-based approach**, considering:

- Patient experience
- Revenue impact
- Payment integrity
- Data consistency
- Security & privacy
- Business continuity

| Index | Test Case                                                         | Preconditions                               | Test Steps                                                                                                                   | Expected Result                                                                                                                  | Risk     |
| ----- | ----------------------------------------------------------------- | ------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------- |
| TC1   | Successful booking with valid payment for new and returning users | User is logged in and lands on booking page | 1. Select a Scan.<br>2. Select a location and available date and time.<br>3. Select a payment method.<br>4. Confirm payment. | Booking is successfully created, payment is processed once, confirmation is displayed, and appointment is shown in Home Page.    | Critical |
| TC2   | Payment succeeds but booking creation fails                       | User reaches payment step                   | 1. Complete booking.<br>2. Simulate booking service failure after successful payment.                                        | User is not charged without a confirmed booking, or payment is automatically reversed. Appropriate error messaging is displayed. | Critical |
| TC3   | Prevent duplicate booking of the same appointment slot            | Appointment slot is available               | 1. Attempt to book the same appointment from two sessions simultaneously.<br>2. Complete payment.                            | Only one booking succeeds. Second user receives an appropriate availability message. No duplicate appointments are created.      | Critical |
| TC4   | Payment is declined                                               | User reaches payment page                   | 1. Selects a payment method.<br>2. Submit payment.                                                                           | Booking is not confirmed. User receives a clear error message and can retry payment.                                             | High     |
| TC5   | Prevent saving card for different user logins                     | Save a card with user 1 login               | 1. Login as user 2 and goto the payment step.                                                                                | Card saved using user 1 login should not show for user 2                                                                         | High     |
| TC6   | Required booking information validation                           | User starts booking                         | 1. Leave mandatory fields empty.<br>2. Continue booking.                                                                     | Required field validation is displayed and booking cannot continue.                                                              | High     |
| TC7   | Session expires during booking                                    | User is inactive until session timeout      | 1. Reach payment page.<br>2. Wait until session expires.<br>3. Continue.                                                     | User is redirected to login and no partial booking or payment is processed.                                                      | High     |
| TC8   | Browser refresh during booking                                    | User is midway through booking              | 1. Refresh browser before payment.<br>2. Continue booking.                                                                   | Booking state remains unchanged without loosing any existing data.                                                               | Medium   |
| TC9   | Browser Back navigation                                           | User reaches payment page                   | 1. Navigate back to previous steps.<br>2. Modify booking.<br>3. Continue.                                                    | Booking details remain accurate and no inconsistent state occurs.                                                                | Medium   |
| TC10  | Invalid payment card format                                       | User is on payment page                     | 1. Enter invalid card information.<br>2. Submit payment.                                                                     | Validation prevents submission and displays appropriate error messages.                                                          | Medium   |
| TC11  | Booking unavailable appointment                                   | Selected appointment becomes unavailable    | 1. Attempt booking after slot is taken.                                                                                      | User receives an availability error and is prompted to select another appointment.                                               | Medium   |
| TC12  | Booking across different time zones                               | User books from another timezone            | 1. Complete booking.<br>2. Verify appointment time.                                                                          | Appointment time is displayed consistently across booking confirmation and account pages.                                        | Medium   |
| TC13  | Mobile responsive booking flow                                    | Mobile viewport                             | 1. Complete booking on mobile device.                                                                                        | Booking flow remains fully functional with usable layout.                                                                        | Low      |
| TC14  | Keyboard accessibility                                            | User navigates using keyboard only          | 1. Complete booking using keyboard navigation.                                                                               | All controls are reachable and usable without a mouse.                                                                           | Low      |
| TC15  | Slow network during booking                                       | Simulated slow connection                   | 1. Complete booking under throttled network conditions.                                                                      | Appropriate loading indicators appear and duplicate requests are prevented.                                                      | Low      |
| TC16  | User can Reschedule and cancel an appointment                     | User has an existing appointment            | 1. User reschedules or cancels an existing appointment from Home Page                                                        | User can successfully reschedule (time and location) or cancel an appointment.                                                   | High     |

---

# Part 2 – Why These Are My Top Three Test Cases

## 1. Successful Booking with Valid Payment

**Reason**

This is the application's primary business workflow. If members cannot successfully book and pay for an appointment, Ezra cannot deliver its core service or generate revenue. This scenario validates the integration between appointment scheduling, payment processing, and booking confirmation, making it the highest-priority regression test.

---

## 2. Payment Succeeds but Booking Creation Fails

**Reason**

This represents one of the highest-risk production failures because it directly affects customer trust. Charging a member without creating a valid booking results in refunds, support requests, financial reconciliation issues, and potential reputational damage. This test verifies transactional integrity between payment and booking services.

---

## 3. Prevent Duplicate Booking

**Reason**

Appointment inventory is a limited resource. Duplicate bookings create scheduling conflicts, operational overhead, and poor patient experiences. This scenario validates concurrency handling and ensures only one successful reservation can exist for a single appointment slot.
