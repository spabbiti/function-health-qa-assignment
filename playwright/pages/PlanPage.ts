import BasePage from "./BasePage";

export class PlanPage extends BasePage {
  private readonly CANONICAL_URL = "book-scan/select-plan";

  async goto() {
    await this.visitURL(this.CANONICAL_URL);
    await this.confirmLoaded();
  }

  async confirmLoaded() {
    await this.confirmPageTitle(
      /Booking - My Ezra | Function | Ezra | Function US/,
    );
    await this.confirmUrlContains(this.CANONICAL_URL);
    await this.confirmHeadingDisplayed("Review your Scan");
  }

  async selectPlan(planName: string) {
    const planCard = this.page.locator(".encounter-card").filter({
      has: this.page.locator(".encounter-title", { hasText: planName }),
    });
    await planCard.click();
    await this.clickButton("Continue");
  }

  async enterDoB(dob: string) {
    await this.page.fill('input[name="dob"]', dob);
  }

  async selectGender(gender: "Male" | "Female") {
    const genderDropdownElement = this.page.getByRole("combobox");
    await genderDropdownElement.click();

    await genderDropdownElement
      .locator("..")
      .locator('[role="option"]')
      .filter({ hasText: gender })
      .click();
  }
}
