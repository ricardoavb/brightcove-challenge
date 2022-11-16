import { Locator, Page } from '@playwright/test'

export class HomePage {
  readonly page: Page
  readonly nameInput: Locator

  constructor(page: Page) {
    this.page = page;
    this.nameInput = page.locator('#developer-name')
  }

  async goto() {
    await this.page.goto("https://devexpress.github.io/testcafe/example/")
  }

  async enterName(name: string) {
    await this.nameInput.fill(name)
  }
}
