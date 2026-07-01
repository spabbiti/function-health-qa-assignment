import BasePage from "./BasePage";
import { expect } from "@playwright/test";

export class BookingConfirmPage extends BasePage {
  private readonly CANONICAL_URL = "book-scan/scan-confirm";

  async goto() {
    await this.visitURL(this.CANONICAL_URL);
    await this.confirmLoaded();
  }

  async confirmLoaded() {
    await this.confirmPageTitle(
      /Booking - My Ezra | Function | Ezra | Function US/,
    );
    await this.confirmUrlContains(this.CANONICAL_URL);
    await this.confirmHeadingDisplayed("You're almost done, Zellep.");
    await this.confirmButtonDisplayed("Begin Medical Questionnaire");
  }

  async confirmBooking(planName: string, locationName: string) {
    const appointmentCard = this.page.locator(".scan-details");

    await expect(appointmentCard).toBeVisible();
    await expect(
      appointmentCard.getByRole("heading", { name: `${planName} Appointment` }),
    ).toBeVisible();
    await expect(appointmentCard).toContainText(locationName);
  }
}
