# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: bookingFlows.spec.ts >> Booking Flow Tests >> should allow an existing user to sign in and book an appointment
- Location: playwright/tests/bookingFlows.spec.ts:47:8

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByTestId('link-branded-widget-header-dropdown-menu')

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - alertdialog "Cookie Consent Prompt" [ref=e2]:
    - generic [ref=e3]:
      - generic [ref=e4]:
        - link "Cookie Consent Manager" [ref=e5] [cursor=pointer]:
          - /url: https://termly.io/products/cookie-consent-manager/?utm_source=cookie-banner&utm_medium=banner&utm_campaign=cookie-consent-banner
        - text: by
        - img "Termly" [ref=e6]
      - generic [ref=e7]:
        - generic [ref=e8]:
          - text: We use essential cookies to make our site work. With your consent, we may also use non-essential cookies to improve user experience, personalize content, customize advertisements, and analyze website traffic. For these reasons, we may share your site usage data with our social media, advertising, and analytics partners. By clicking ”Accept,” you agree to our website's cookie use as described in our
          - button "Cookie Policy" [ref=e9] [cursor=pointer]
          - text: . You can change your cookie settings at any time by clicking “
          - button "Preferences" [ref=e10] [cursor=pointer]
          - text: .”
        - button "Accept" [ref=e12] [cursor=pointer]
  - generic [ref=e16]:
    - generic [ref=e20]:
      - button "Review your plan" [ref=e22] [cursor=pointer]:
        - img [ref=e24]
        - paragraph [ref=e27]: Review your plan
      - button "Schedule your scan" [ref=e30] [cursor=pointer]:
        - img [ref=e32]
        - paragraph [ref=e35]: Schedule your scan
      - button "Reserve your appointment" [ref=e38] [cursor=pointer]:
        - img [ref=e40]
        - paragraph [ref=e43]: Reserve your appointment
    - generic [ref=e45]:
      - generic [ref=e47]:
        - generic [ref=e48]:
          - generic [ref=e49]:
            - heading "Reserve your appointment" [level=4] [ref=e50]
            - paragraph [ref=e51]: Complete payment to secure your appointment.
          - generic [ref=e52]:
            - heading "Choose a payment method" [level=5] [ref=e53]
            - generic [ref=e58]:
              - iframe [ref=e59]:
                - generic [ref=f13e8]:
                  - generic [ref=f13e9]:
                    - button "Card" [expanded] [ref=f13e10]:
                      - generic [ref=f13e20]: Card
                    - generic [ref=f13e24]:
                      - generic [ref=f13e25]:
                        - button "Secure, fast checkout with Link" [ref=f13e31] [cursor=pointer]:
                          - img [ref=f13e32]
                          - generic [ref=f13e34]: Secure, fast checkout with Link
                        - generic [ref=f13e36]:
                          - generic [ref=f13e37]:
                            - generic [ref=f13e39]:
                              - generic [ref=f13e40]: Card number
                              - generic [ref=f13e42]:
                                - textbox "Card number" [ref=f13e44]:
                                  - /placeholder: 1234 1234 1234 1234
                                - generic:
                                  - option "Select card brand (optional)" [disabled] [selected]
                                - generic:
                                  - generic:
                                    - generic:
                                      - paragraph: Supported cards include Visa, Mastercard, American Express, and Discover.
                                      - generic:
                                        - img
                                      - generic:
                                        - img
                            - generic [ref=f13e46]:
                              - generic [ref=f13e47]:
                                - text: Expiration date
                                - generic [ref=f13e48]: MM / YY
                              - textbox "Expiration date MM / YY" [ref=f13e52]:
                                - /placeholder: MM / YY
                            - generic [ref=f13e54]:
                              - generic [ref=f13e55]: Security code
                              - generic [ref=f13e57]:
                                - textbox "Security code" [ref=f13e59]:
                                  - /placeholder: CVC
                                - generic:
                                  - generic: 3-digit code on back of card
                                  - generic:
                                    - img
                          - generic [ref=f13e62]:
                            - generic [ref=f13e64]:
                              - generic [ref=f13e65]: Country
                              - combobox "Country" [ref=f13e68] [cursor=pointer]:
                                - option "Select" [disabled]
                                - option "Afghanistan"
                                - option "Åland Islands"
                                - option "Albania"
                                - option "Algeria"
                                - option "Andorra"
                                - option "Angola"
                                - option "Anguilla"
                                - option "Antarctica"
                                - option "Antigua & Barbuda"
                                - option "Argentina"
                                - option "Armenia"
                                - option "Aruba"
                                - option "Ascension Island"
                                - option "Australia"
                                - option "Austria"
                                - option "Azerbaijan"
                                - option "Bahamas"
                                - option "Bahrain"
                                - option "Bangladesh"
                                - option "Barbados"
                                - option "Belarus"
                                - option "Belgium"
                                - option "Belize"
                                - option "Benin"
                                - option "Bermuda"
                                - option "Bhutan"
                                - option "Bolivia"
                                - option "Bosnia & Herzegovina"
                                - option "Botswana"
                                - option "Bouvet Island"
                                - option "Brazil"
                                - option "British Indian Ocean Territory"
                                - option "British Virgin Islands"
                                - option "Brunei"
                                - option "Bulgaria"
                                - option "Burkina Faso"
                                - option "Burundi"
                                - option "Cambodia"
                                - option "Cameroon"
                                - option "Canada"
                                - option "Cape Verde"
                                - option "Caribbean Netherlands"
                                - option "Cayman Islands"
                                - option "Central African Republic"
                                - option "Chad"
                                - option "Chile"
                                - option "China"
                                - option "Colombia"
                                - option "Comoros"
                                - option "Congo - Brazzaville"
                                - option "Congo - Kinshasa"
                                - option "Cook Islands"
                                - option "Costa Rica"
                                - option "Côte d’Ivoire"
                                - option "Croatia"
                                - option "Curaçao"
                                - option "Cyprus"
                                - option "Czechia"
                                - option "Denmark"
                                - option "Djibouti"
                                - option "Dominica"
                                - option "Dominican Republic"
                                - option "Ecuador"
                                - option "Egypt"
                                - option "El Salvador"
                                - option "Equatorial Guinea"
                                - option "Eritrea"
                                - option "Estonia"
                                - option "Eswatini"
                                - option "Ethiopia"
                                - option "Falkland Islands"
                                - option "Faroe Islands"
                                - option "Fiji"
                                - option "Finland"
                                - option "France"
                                - option "French Guiana"
                                - option "French Polynesia"
                                - option "French Southern Territories"
                                - option "Gabon"
                                - option "Gambia"
                                - option "Georgia"
                                - option "Germany"
                                - option "Ghana"
                                - option "Gibraltar"
                                - option "Greece"
                                - option "Greenland"
                                - option "Grenada"
                                - option "Guadeloupe"
                                - option "Guam"
                                - option "Guatemala"
                                - option "Guernsey"
                                - option "Guinea"
                                - option "Guinea-Bissau"
                                - option "Guyana"
                                - option "Haiti"
                                - option "Honduras"
                                - option "Hong Kong SAR China"
                                - option "Hungary"
                                - option "Iceland"
                                - option "India"
                                - option "Indonesia"
                                - option "Iraq"
                                - option "Ireland"
                                - option "Isle of Man"
                                - option "Israel"
                                - option "Italy"
                                - option "Jamaica"
                                - option "Japan"
                                - option "Jersey"
                                - option "Jordan"
                                - option "Kazakhstan"
                                - option "Kenya"
                                - option "Kiribati"
                                - option "Kosovo"
                                - option "Kuwait"
                                - option "Kyrgyzstan"
                                - option "Laos"
                                - option "Latvia"
                                - option "Lebanon"
                                - option "Lesotho"
                                - option "Liberia"
                                - option "Libya"
                                - option "Liechtenstein"
                                - option "Lithuania"
                                - option "Luxembourg"
                                - option "Macao SAR China"
                                - option "Madagascar"
                                - option "Malawi"
                                - option "Malaysia"
                                - option "Maldives"
                                - option "Mali"
                                - option "Malta"
                                - option "Martinique"
                                - option "Mauritania"
                                - option "Mauritius"
                                - option "Mayotte"
                                - option "Mexico"
                                - option "Moldova"
                                - option "Monaco"
                                - option "Mongolia"
                                - option "Montenegro"
                                - option "Montserrat"
                                - option "Morocco"
                                - option "Mozambique"
                                - option "Myanmar (Burma)"
                                - option "Namibia"
                                - option "Nauru"
                                - option "Nepal"
                                - option "Netherlands"
                                - option "New Caledonia"
                                - option "New Zealand"
                                - option "Nicaragua"
                                - option "Niger"
                                - option "Nigeria"
                                - option "Niue"
                                - option "North Macedonia"
                                - option "Norway"
                                - option "Oman"
                                - option "Pakistan"
                                - option "Palestinian Territories"
                                - option "Panama"
                                - option "Papua New Guinea"
                                - option "Paraguay"
                                - option "Peru"
                                - option "Philippines"
                                - option "Pitcairn Islands"
                                - option "Poland"
                                - option "Portugal"
                                - option "Puerto Rico"
                                - option "Qatar"
                                - option "Réunion"
                                - option "Romania"
                                - option "Russia"
                                - option "Rwanda"
                                - option "Samoa"
                                - option "San Marino"
                                - option "São Tomé & Príncipe"
                                - option "Saudi Arabia"
                                - option "Senegal"
                                - option "Serbia"
                                - option "Seychelles"
                                - option "Sierra Leone"
                                - option "Singapore"
                                - option "Sint Maarten"
                                - option "Slovakia"
                                - option "Slovenia"
                                - option "Solomon Islands"
                                - option "Somalia"
                                - option "South Africa"
                                - option "South Georgia & South Sandwich Islands"
                                - option "South Korea"
                                - option "South Sudan"
                                - option "Spain"
                                - option "Sri Lanka"
                                - option "St. Barthélemy"
                                - option "St. Helena"
                                - option "St. Kitts & Nevis"
                                - option "St. Lucia"
                                - option "St. Martin"
                                - option "St. Pierre & Miquelon"
                                - option "St. Vincent & Grenadines"
                                - option "Sudan"
                                - option "Suriname"
                                - option "Svalbard & Jan Mayen"
                                - option "Sweden"
                                - option "Switzerland"
                                - option "Taiwan"
                                - option "Tajikistan"
                                - option "Tanzania"
                                - option "Thailand"
                                - option "Timor-Leste"
                                - option "Togo"
                                - option "Tokelau"
                                - option "Tonga"
                                - option "Trinidad & Tobago"
                                - option "Tristan da Cunha"
                                - option "Tunisia"
                                - option "Türkiye"
                                - option "Turkmenistan"
                                - option "Turks & Caicos Islands"
                                - option "Tuvalu"
                                - option "Uganda"
                                - option "Ukraine"
                                - option "United Arab Emirates"
                                - option "United Kingdom"
                                - option "United States" [selected]
                                - option "Uruguay"
                                - option "Uzbekistan"
                                - option "Vanuatu"
                                - option "Vatican City"
                                - option "Venezuela"
                                - option "Vietnam"
                                - option "Wallis & Futuna"
                                - option "Western Sahara"
                                - option "Yemen"
                                - option "Zambia"
                                - option "Zimbabwe"
                            - generic [ref=f13e70]:
                              - generic [ref=f13e71]: ZIP code
                              - textbox "ZIP code" [ref=f13e74]:
                                - /placeholder: "12345"
                        - generic [ref=f13e75]:
                          - checkbox "I am an AI agent acting on behalf of someone else"
                          - text: I am an AI agent acting on behalf of someone else
                      - generic: 0123456789０１２３４５６７８９
                      - button
                  - button "Bank $5 back" [ref=f13e77] [cursor=pointer]:
                    - generic [ref=f13e82]:
                      - generic [ref=f13e87]: Bank
                      - paragraph [ref=f13e90]:
                        - strong [ref=f13e91]: $5 back
                  - button "Affirm" [ref=f13e93] [cursor=pointer]:
                    - generic [ref=f13e98]:
                      - img [ref=f13e100]
                      - generic [ref=f13e106]: Affirm
              - iframe [ref=e60]:
                
        - generic [ref=e63]:
          - generic [ref=e64]:
            - paragraph [ref=e65]: Lungs CT Scan
            - paragraph [ref=e66]: Park Ave
            - paragraph [ref=e67]: 523 Park Ave, New York, NY 10065
            - paragraph [ref=e68]: Jul 31, 2026 • 8:45 AM EDT
          - generic [ref=e69]:
            - generic [ref=e70]:
              - generic [ref=e71]: Have a promo code? Use it here.
              - generic [ref=e72]:
                - textbox "Promo Code" [ref=e73]
                - button "Apply Code" [ref=e74] [cursor=pointer]
            - generic [ref=e76]:
              - paragraph [ref=e77]: Total
              - paragraph [ref=e78]:
                - generic [ref=e79]: $399
      - generic [ref=e82]:
        - button "Back" [ref=e83] [cursor=pointer]
        - button "Continue" [ref=e87] [cursor=pointer]
```

# Test source

```ts
  1  | import BasePage from './BasePage';
  2  | import { expect } from '@playwright/test';
  3  | 
  4  | export class PaymentPage extends BasePage {
  5  |     private readonly CANONICAL_URL = 'book-scan/reserve-appointment';
  6  | 
  7  |     async goto() {
  8  |         await this.visitURL(this.CANONICAL_URL);
  9  |         await this.confirmLoaded();
  10 |     }
  11 | 
  12 |     async confirmLoaded() {
  13 |         await this.confirmPageTitle(/Booking - My Ezra | Function | Ezra | Function US/);
  14 |         await this.confirmUrlContains(this.CANONICAL_URL);
  15 |         await this.confirmHeadingDisplayed('Reserve your appointment');
  16 |     }
  17 | 
  18 |     async confirmPayment({cardNumber, expiryDate, cvc, zip}: any) {
> 19 |         await this.page.getByTestId('link-branded-widget-header-dropdown-menu').click();
     |                                                                                 ^ Error: locator.click: Test timeout of 30000ms exceeded.
  20 |         await this.page.getByRole('menuitem', { name: 'Pay without Link' }).click();
  21 |         await this.page.fill('input[name="number"]', cardNumber);
  22 |         await this.page.fill('input[name="expiry"]', expiryDate);
  23 |         await this.page.fill('input[name="cvc"]', cvc);
  24 |         await this.page.fill('input[name="postalCode"]', zip);
  25 |         await this.clickButton('Continue');
  26 |     }
  27 | 
  28 |     async confirmPaymentFailed() {
  29 |         const paymentDeclinedMessage = this.page.locator('.cc-failure-message');
  30 |         await expect(paymentDeclinedMessage).toHaveText('Your card has been declined.');
  31 |     }
  32 | }   
```