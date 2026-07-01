import type { Page } from "@playwright/test";
import { expect } from "@playwright/test";

export default class BasePage {
  protected page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  protected async visitURL(url: string): Promise<void> {
    await this.page.goto(url);
  }

  protected async confirmPageTitle(expectedTitle: string | RegExp) {
    await expect(this.page).toHaveTitle(expectedTitle);
  }

  protected async confirmUrlContains(expectedUrl: string) {
    await expect(this.page).toHaveURL(new RegExp(expectedUrl));
  }

  protected async confirmHeadingDisplayed(expectedHeading: string) {
    const headingElement = this.page
      .locator("h1,h2,h3,h4,h5,h6")
      .filter({ hasText: expectedHeading, visible: true });
    await expect(headingElement).toBeVisible();
  }

  protected async clickButton(hasText: string) {
    const buttonElement = this.page
      .getByRole("button")
      .filter({ hasText, visible: true });
    await buttonElement.click();
    await this.waitForLoadingToComplete();
  }

  protected async waitForLoadingToComplete() {
    const baseFrame = await this.page.mainFrame();
    const loadingIndicators = baseFrame.locator(".loading-indicator");

    for (const loadingIndicator of await loadingIndicators.all()) {
      await loadingIndicator.waitFor({ state: "hidden" });
    }
  }

  protected async confirmButtonDisplayed(hasText: string) {
    const buttonElement = this.page
      .getByRole("button")
      .filter({ hasText, visible: true });
    await expect(buttonElement).toBeVisible();
  }
}
