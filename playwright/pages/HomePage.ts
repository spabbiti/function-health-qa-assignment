import BasePage from "./BasePage";

export class HomePage extends BasePage {
  async goto() {
    await this.visitURL("");
    await this.confirmLoaded();
  }

  async confirmLoaded() {
    await this.confirmPageTitle(
      /Home - My Ezra | Function | Ezra | Function US/,
    );
  }

  async bookAScan() {
    await this.clickButton("Book a Scan");
  }
}
