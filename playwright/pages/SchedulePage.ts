import BasePage from "./BasePage";

export class SchedulePage extends BasePage {
  private readonly CANONICAL_URL = "book-scan/schedule-scan";

  async goto() {
    await this.visitURL(this.CANONICAL_URL);
    await this.confirmLoaded();
  }

  async confirmLoaded() {
    await this.confirmPageTitle(
      /Booking - My Ezra | Function | Ezra | Function US/,
    );
    await this.confirmUrlContains(this.CANONICAL_URL);
    await this.confirmHeadingDisplayed("Schedule your scan");
  }

  async getLocationCard(locationName: string) {
    return this.page.locator(".location-card").filter({
      has: this.page.locator(".location-card__name", {
        hasText: locationName,
      }),
    });
  }

  async selectAppointment(locationName: string) {
    const locationCard = await this.getLocationCard(locationName);
    await locationCard.click();
    await this.page.getByTestId("7-31-cal-day-content").click();
    await this.page.locator("label").nth(1).click();
    await this.clickButton("Continue");
  }
}
