import BasePage from "./BasePage";
import { getUserData } from "../helpers/dataHelper";

export class SignUpPage extends BasePage {
  private readonly CANONICAL_URL = "join";

  async goto() {
    await this.visitURL(this.CANONICAL_URL);
    await this.confirmLoaded();
  }

  async confirmLoaded() {
    await this.confirmPageTitle(
      /Sign Up - My Ezra | Function | Ezra | Function US/,
    );
    await this.confirmUrlContains(this.CANONICAL_URL);
  }

  async signUp() {
    const userData = getUserData();
    await this.page.fill('input[name="firstName"]', userData.firstName);
    await this.page.fill('input[name="lastName"]', userData.lastName);
    await this.page.fill('input[name="email"]', userData.email);
    await this.page.fill('input[name="password"]', userData.password);
    await this.page
      .locator("button.checkbox", { hasText: "I agree to Ezra's" })
      .click();
    await this.clickButton("Submit");
  }
}
