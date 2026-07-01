import BasePage from "./BasePage";

export class SignInPage extends BasePage {
  private readonly CANONICAL_URL = "sign-in";

  async goto() {
    await this.visitURL(this.CANONICAL_URL);
    await this.confirmLoaded();
  }

  async confirmLoaded() {
    await this.confirmPageTitle(
      /Login - My Ezra | Function | Ezra | Function US/,
    );
    await this.confirmUrlContains(this.CANONICAL_URL);
    await this.confirmHeadingDisplayed("Please sign in to your account");
  }

  async signIn(email: string, password: string) {
    await this.page.fill('input[type="email"]', email);
    await this.page.fill('input[type="password"]', password);
    await this.clickButton("Submit");
  }
}
