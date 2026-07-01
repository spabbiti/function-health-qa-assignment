import BasePage from "./BasePage";
import { expect } from "@playwright/test";

export class PaymentPage extends BasePage {
  private readonly CANONICAL_URL = "book-scan/reserve-appointment";

  async goto() {
    await this.visitURL(this.CANONICAL_URL);
    await this.confirmLoaded();
  }

  async confirmLoaded() {
    await this.confirmPageTitle(
      /Booking - My Ezra | Function | Ezra | Function US/,
    );
    await this.confirmUrlContains(this.CANONICAL_URL);
    await this.confirmHeadingDisplayed("Reserve your appointment");
  }

  async confirmPayment({ cardNumber, expiryDate, cvc, zip }: any) {
    await this.page
      .getByTestId("link-branded-widget-header-dropdown-menu")
      .click();
    await this.page.getByRole("menuitem", { name: "Pay without Link" }).click();
    await this.page.fill('input[name="number"]', cardNumber);
    await this.page.fill('input[name="expiry"]', expiryDate);
    await this.page.fill('input[name="cvc"]', cvc);
    await this.page.fill('input[name="postalCode"]', zip);
    await this.clickButton("Continue");
  }

  async confirmPaymentFailed() {
    const paymentDeclinedMessage = this.page.locator(".cc-failure-message");
    await expect(paymentDeclinedMessage).toHaveText(
      "Your card has been declined.",
    );
  }
}
